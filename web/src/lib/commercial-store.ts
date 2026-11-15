/**
 * Modul Penyimpanan Transaksional Komersial (Server-Only) — LOLOS CPNS.
 *
 * Mengelola secara otoritatif di sisi server:
 * 1. Pesanan Pembayaran (`payment_orders`) & Integrasi API Midtrans Snap.
 * 2. Pencatatan Kuota Harian Tutor AI (`ai_usage_daily`) per akun / klien.
 * 3. Riwayat Pelaksanaan Tryout Peserta (`tryout_attempts`).
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type {
  MetodePembayaranResmi,
  StatusTransaksiPembayaran,
  TingkatLanggananPeserta,
} from "./access-control.ts";
import {
  apakahMidtransTerkonfigurasiNyata,
  dapatkanMidtransServerKey,
} from "./payment-security.ts";
import { perbaruiTingkatLanggananPeserta } from "./user-auth.ts";
import type {
  JenisFormasiSKD,
  PetaJawabanPeserta,
  SkorSubtesSKD,
} from "../types/database.ts";

export interface PesananPembayaranTersimpan {
  id: string;
  order_id: string;
  user_id: string;
  paket_id: string;
  kode_tingkat: TingkatLanggananPeserta;
  nominal_idr: number;
  metode_pembayaran: MetodePembayaranResmi;
  status_transaksi: StatusTransaksiPembayaran;
  snap_token: string | null;
  snap_redirect_url: string | null;
  qris_string: string | null;
  va_number: string | null;
  paid_at: string | null;
  created_at: string;
}

export interface RiwayatTryoutRingkas {
  id: string;
  user_id: string;
  package_slug: string;
  formasi_type: JenisFormasiSKD;
  is_sensory_blind: boolean;
  section_scores_json: SkorSubtesSKD;
  total_score: number;
  is_passed: boolean;
  ai_diagnostic_summary: string | null;
  finished_at: string;
}

interface StrukturStoreLokalKomersial {
  orders: PesananPembayaranTersimpan[];
  aiUsageDaily: Record<string, number>; // key: `${userKey}::${YYYY-MM-DD}`
  tryoutAttempts: RiwayatTryoutRingkas[];
}

const memoriStoreKomersial = new Map<string, StrukturStoreLokalKomersial>();

function dapatkanPathStoreKomersial(pathKustom?: string): string {
  if (pathKustom) return pathKustom;
  return path.join(process.cwd(), ".data", "commercial-store.json");
}

function apakahSupabaseTersediaKomersial(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const kunci = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  return (
    Boolean(url) &&
    Boolean(kunci) &&
    !url.includes("proyek-anda.supabase.co") &&
    !kunci.includes("masukkan_supabase")
  );
}

function bacaStoreLokal(pathKustom?: string): StrukturStoreLokalKomersial {
  const pathBerkas = dapatkanPathStoreKomersial(pathKustom);
  try {
    if (fs.existsSync(pathBerkas)) {
      const isi = JSON.parse(
        fs.readFileSync(pathBerkas, "utf8")
      ) as Partial<StrukturStoreLokalKomersial>;
      const hasil: StrukturStoreLokalKomersial = {
        orders: Array.isArray(isi.orders) ? isi.orders : [],
        aiUsageDaily:
          isi.aiUsageDaily && typeof isi.aiUsageDaily === "object"
            ? isi.aiUsageDaily
            : {},
        tryoutAttempts: Array.isArray(isi.tryoutAttempts)
          ? isi.tryoutAttempts
          : [],
      };
      memoriStoreKomersial.set(pathBerkas, hasil);
      return hasil;
    }
  } catch {
    // Abaikan dan gunakan fallback memori
  }

  return (
    memoriStoreKomersial.get(pathBerkas) || {
      orders: [],
      aiUsageDaily: {},
      tryoutAttempts: [],
    }
  );
}

function simpanStoreLokal(
  data: StrukturStoreLokalKomersial,
  pathKustom?: string
): void {
  const pathBerkas = dapatkanPathStoreKomersial(pathKustom);
  memoriStoreKomersial.set(pathBerkas, data);
  try {
    const dir = path.dirname(pathBerkas);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(pathBerkas, JSON.stringify(data, null, 2), "utf8");
  } catch {
    // Abaikan pada filesystem read-only
  }
}

export function tanggalHariIniJakarta(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
  }).format(new Date());
}

// ==============================================================================
// 1. INTEGRASI MIDTRANS SNAP & PENYIMPANAN PESANAN PEMBAYARAN
// ==============================================================================
export async function buatDanSimpanPesananPembayaran(parameter: {
  userId: string;
  namaPeserta: string;
  emailPeserta: string;
  paketId: string;
  judulPaket: string;
  kodeTingkat: TingkatLanggananPeserta;
  nominalIdr: number;
  metodePembayaran: MetodePembayaranResmi;
  pathKustom?: string;
}): Promise<{
  pesanan: PesananPembayaranTersimpan;
  modeSimulasiLokal: boolean;
}> {
  if (
    !parameter.pathKustom &&
    process.env.NODE_ENV === "production" &&
    (!apakahSupabaseTersediaKomersial() || !apakahMidtransTerkonfigurasiNyata())
  ) {
    throw new Error(
      "Layanan pembayaran dan basis data produksi belum dikonfigurasi."
    );
  }

  const orderId = `LC-${Date.now()}-${crypto.randomInt(1000, 9999)}`;
  let snapToken: string | null = null;
  let snapRedirectUrl: string | null = null;
  let modeSimulasiLokal = false;

  if (apakahMidtransTerkonfigurasiNyata()) {
    const serverKey = dapatkanMidtransServerKey()!;
    const adalahProduksi =
      (process.env.MIDTRANS_IS_PRODUCTION || "").toLowerCase() === "true";
    const endpointSnap = adalahProduksi
      ? "https://app.midtrans.com/snap/v1/transactions"
      : "https://app.sandbox.midtrans.com/snap/v1/transactions";

    const authBasic = Buffer.from(`${serverKey}:`).toString("base64");
    const appUrl = (
      process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    ).replace(/\/+$/, "");

    const resSnap = await fetch(endpointSnap, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${authBasic}`,
      },
      body: JSON.stringify({
        transaction_details: {
          order_id: orderId,
          gross_amount: parameter.nominalIdr,
        },
        item_details: [
          {
            id: parameter.paketId,
            price: parameter.nominalIdr,
            quantity: 1,
            name: parameter.judulPaket.slice(0, 50),
          },
        ],
        customer_details: {
          first_name: parameter.namaPeserta,
          email: parameter.emailPeserta,
        },
        callbacks: {
          finish: `${appUrl}/pembayaran?paket=${encodeURIComponent(
            parameter.paketId
          )}&order_id=${encodeURIComponent(orderId)}`,
        },
      }),
      signal: AbortSignal.timeout(12000),
    });

    if (!resSnap.ok) {
      const detail = await resSnap.text();
      throw new Error(
        `Gagal membuat transaksi pembayaran Midtrans (${resSnap.status}): ${detail}`
      );
    }

    const dataSnap = (await resSnap.json()) as {
      token?: string;
      redirect_url?: string;
    };
    snapToken = dataSnap.token || null;
    snapRedirectUrl = dataSnap.redirect_url || null;
  } else {
    // Hanya diizinkan pada lingkungan non-produksi
    modeSimulasiLokal = true;
  }

  const pesananBaru: PesananPembayaranTersimpan = {
    id: crypto.randomUUID(),
    order_id: orderId,
    user_id: parameter.userId,
    paket_id: parameter.paketId,
    kode_tingkat: parameter.kodeTingkat,
    nominal_idr: parameter.nominalIdr,
    metode_pembayaran: parameter.metodePembayaran,
    status_transaksi: "menunggu_pembayaran",
    snap_token: snapToken,
    snap_redirect_url: snapRedirectUrl,
    qris_string: modeSimulasiLokal
      ? `00020101021226660014ID.CO.LOLOSCPNS.WWW011893600914${orderId}5204581253033605405${parameter.nominalIdr}5802ID5910LOLOS CPNS6007JAKARTA6304ABCD`
      : null,
    va_number: modeSimulasiLokal
      ? `88010${crypto.randomInt(1000000000, 9999999999)}`
      : null,
    paid_at: null,
    created_at: new Date().toISOString(),
  };

  if (!parameter.pathKustom && apakahSupabaseTersediaKomersial()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { error } = await supabase.from("payment_orders").insert({
      id: pesananBaru.id,
      order_id: pesananBaru.order_id,
      user_id: pesananBaru.user_id,
      paket_id: pesananBaru.paket_id,
      kode_tingkat: pesananBaru.kode_tingkat,
      nominal_idr: pesananBaru.nominal_idr,
      metode_pembayaran: pesananBaru.metode_pembayaran,
      status_transaksi: pesananBaru.status_transaksi,
      snap_token: pesananBaru.snap_token,
      snap_redirect_url: pesananBaru.snap_redirect_url,
      qris_string: pesananBaru.qris_string,
      va_number: pesananBaru.va_number,
    });
    if (error && process.env.NODE_ENV === "production") {
      throw new Error(`Gagal menyimpan pesanan ke basis data: ${error.message}`);
    }
    if (!error) {
      return { pesanan: pesananBaru, modeSimulasiLokal };
    }
  }

  const store = bacaStoreLokal(parameter.pathKustom);
  store.orders.unshift(pesananBaru);
  simpanStoreLokal(store, parameter.pathKustom);
  return { pesanan: pesananBaru, modeSimulasiLokal };
}

export async function ambilPesananBerdasarkanOrderId(
  orderId: string,
  pathKustom?: string
): Promise<PesananPembayaranTersimpan | null> {
  if (!pathKustom && apakahSupabaseTersediaKomersial()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { data, error } = await supabase
      .from("payment_orders")
      .select("*")
      .eq("order_id", orderId)
      .maybeSingle();

    if (!error && data) {
      return data as PesananPembayaranTersimpan;
    }
    if (!error && !data) return null;
  }

  const store = bacaStoreLokal(pathKustom);
  return store.orders.find((o) => o.order_id === orderId) || null;
}

export async function selesaikanStatusPesananDariWebhook(parameter: {
  orderId: string;
  statusBaru: StatusTransaksiPembayaran;
  rawWebhookPayload?: Record<string, unknown>;
  pathKustom?: string;
}): Promise<PesananPembayaranTersimpan | null> {
  const pesananLama = await ambilPesananBerdasarkanOrderId(
    parameter.orderId,
    parameter.pathKustom
  );
  if (!pesananLama) return null;

  // Idempoten: jika sudah lunas, jangan memproses ulang aktivasi atau menurunkan status
  if (pesananLama.status_transaksi === "lunas") {
    return pesananLama;
  }

  const paidAt =
    parameter.statusBaru === "lunas" ? new Date().toISOString() : null;

  let pesananDiperbarui: PesananPembayaranTersimpan = {
    ...pesananLama,
    status_transaksi: parameter.statusBaru,
    paid_at: paidAt,
  };

  if (!parameter.pathKustom && apakahSupabaseTersediaKomersial()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { data, error } = await supabase
      .from("payment_orders")
      .update({
        status_transaksi: parameter.statusBaru,
        paid_at: paidAt,
        raw_webhook_json: parameter.rawWebhookPayload || null,
      })
      .eq("order_id", parameter.orderId)
      .select("*")
      .single();

    if (error && process.env.NODE_ENV === "production") {
      throw new Error(`Gagal memperbarui transaksi: ${error.message}`);
    }
    if (!error && data) {
      pesananDiperbarui = data as PesananPembayaranTersimpan;
    }
  } else {
    const store = bacaStoreLokal(parameter.pathKustom);
    store.orders = store.orders.map((o) =>
      o.order_id === parameter.orderId ? pesananDiperbarui : o
    );
    simpanStoreLokal(store, parameter.pathKustom);
  }

  if (parameter.statusBaru === "lunas") {
    await perbaruiTingkatLanggananPeserta({
      userId: pesananDiperbarui.user_id,
      tingkatBaru: pesananDiperbarui.kode_tingkat,
      pathKustom: undefined,
    });
  }

  return pesananDiperbarui;
}

export async function bacaPesananMilikPeserta(
  userId: string,
  pathKustom?: string
): Promise<PesananPembayaranTersimpan[]> {
  if (!pathKustom && apakahSupabaseTersediaKomersial()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { data, error } = await supabase
      .from("payment_orders")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(20);

    if (!error && Array.isArray(data)) {
      return data as PesananPembayaranTersimpan[];
    }
  }

  const store = bacaStoreLokal(pathKustom);
  return store.orders.filter((o) => o.user_id === userId).slice(0, 20);
}

// ==============================================================================
// 2. PELACAKAN KUOTA HARIAN TUTOR AI DI SERVER
// ==============================================================================
export async function bacaPemakaianAIHariIni(
  userKey: string,
  pathKustom?: string
): Promise<number> {
  const tanggal = tanggalHariIniJakarta();

  if (!pathKustom && apakahSupabaseTersediaKomersial()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { data, error } = await supabase
      .from("ai_usage_daily")
      .select("jumlah_pemakaian")
      .eq("user_key", userKey)
      .eq("tanggal", tanggal)
      .maybeSingle();

    if (!error && data) {
      return Number(data.jumlah_pemakaian || 0);
    }
    if (!error && !data) return 0;
  }

  const store = bacaStoreLokal(pathKustom);
  return Number(store.aiUsageDaily[`${userKey}::${tanggal}`] || 0);
}

export async function tambahPemakaianAIHariIni(
  userKey: string,
  pathKustom?: string
): Promise<number> {
  const tanggal = tanggalHariIniJakarta();
  const saatIni = await bacaPemakaianAIHariIni(userKey, pathKustom);
  const baru = saatIni + 1;

  if (!pathKustom && apakahSupabaseTersediaKomersial()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { error } = await supabase.from("ai_usage_daily").upsert(
      {
        user_key: userKey,
        tanggal,
        jumlah_pemakaian: baru,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_key,tanggal" }
    );
    if (!error) return baru;
  }

  const store = bacaStoreLokal(pathKustom);
  store.aiUsageDaily[`${userKey}::${tanggal}`] = baru;
  simpanStoreLokal(store, pathKustom);
  return baru;
}

// ==============================================================================
// 3. PENYIMPANAN & RIWAYAT HASIL TRYOUT PESERTA
// ==============================================================================
export async function simpanRiwayatTryoutPeserta(parameter: {
  userId: string;
  packageSlug: string;
  formasiType: JenisFormasiSKD;
  isSensoryBlind: boolean;
  answersJson: PetaJawabanPeserta;
  sectionScoresJson: SkorSubtesSKD;
  totalScore: number;
  isPassed: boolean;
  diagnosticSummary: string;
  pathKustom?: string;
}): Promise<boolean> {
  const entri: RiwayatTryoutRingkas = {
    id: crypto.randomUUID(),
    user_id: parameter.userId,
    package_slug: parameter.packageSlug,
    formasi_type: parameter.formasiType,
    is_sensory_blind: parameter.isSensoryBlind,
    section_scores_json: parameter.sectionScoresJson,
    total_score: parameter.totalScore,
    is_passed: parameter.isPassed,
    ai_diagnostic_summary: parameter.diagnosticSummary,
    finished_at: new Date().toISOString(),
  };

  if (!parameter.pathKustom && apakahSupabaseTersediaKomersial()) {
    try {
      const { buatKlienSupabaseServer } = await import("./supabase.ts");
      const supabase = buatKlienSupabaseServer();
      const { error } = await supabase.from("tryout_attempts").insert({
        id: entri.id,
        user_id: parameter.userId,
        package_id: null,
        package_slug: parameter.packageSlug,
        stage: "SKD",
        formasi_type: parameter.formasiType,
        is_sensory_blind: parameter.isSensoryBlind,
        answers_json: parameter.answersJson,
        section_scores_json: parameter.sectionScoresJson,
        total_score: parameter.totalScore,
        is_passed: parameter.isPassed,
        ai_diagnostic_summary: parameter.diagnosticSummary,
        finished_at: entri.finished_at,
      });
      if (!error) return true;
    } catch {
      if (process.env.NODE_ENV === "production") return false;
    }
  }

  const store = bacaStoreLokal(parameter.pathKustom);
  store.tryoutAttempts.unshift(entri);
  store.tryoutAttempts = store.tryoutAttempts.slice(0, 100);
  simpanStoreLokal(store, parameter.pathKustom);
  return true;
}

export async function bacaRiwayatTryoutMilikPeserta(
  userId: string,
  pathKustom?: string
): Promise<RiwayatTryoutRingkas[]> {
  if (!pathKustom && apakahSupabaseTersediaKomersial()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { data, error } = await supabase
      .from("tryout_attempts")
      .select(
        "id, user_id, package_slug, formasi_type, is_sensory_blind, section_scores_json, total_score, is_passed, ai_diagnostic_summary, finished_at"
      )
      .eq("user_id", userId)
      .order("finished_at", { ascending: false })
      .limit(20);

    if (!error && Array.isArray(data)) {
      return data as RiwayatTryoutRingkas[];
    }
  }

  const store = bacaStoreLokal(pathKustom);
  return store.tryoutAttempts.filter((t) => t.user_id === userId).slice(0, 20);
}
