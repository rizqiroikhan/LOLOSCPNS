/**
 * Modul Keamanan & Verifikasi Webhook Pembayaran (Server-Only) — LOLOS CPNS.
 *
 * Perbaikan P0 Keamanan Komersial:
 * - Tanda tangan kriptografi SHA-512 (`signature_key`) bersifat WAJIB pada setiap webhook.
 * - Menggunakan `crypto.timingSafeEqual` untuk mencegah serangan timing.
 * - Memvalidasi kecocokan nominal tagihan (`gross_amount` vs `nominalHarapanIdr`).
 * - Di mode produksi (`NODE_ENV === "production"`), menolak keras kunci fallback sandbox.
 */

import crypto from "node:crypto";
import {
  DAFTAR_PAKET_LANGGANAN,
  type MetodePembayaranResmi,
  type StatusTransaksiPembayaran,
  type TingkatLanggananPeserta,
} from "./access-control.ts";

const PETA_CHANNEL_MIDTRANS: Record<MetodePembayaranResmi, string[]> = {
  qris: ["other_qris"],
  va_bca: ["bca_va"],
  va_mandiri: ["echannel"],
  va_bni: ["bni_va"],
  va_bri: ["bri_va"],
};

/**
 * Memetakan kode metode pembayaran internal ke daftar `enabled_payments` Midtrans Snap
 * agar UI Snap langsung memprioritaskan kanal yang dipilih peserta.
 */
export function dapatkanEnabledPaymentsMidtrans(
  metode: MetodePembayaranResmi
): string[] {
  return PETA_CHANNEL_MIDTRANS[metode] || ["other_qris"];
}

export function dapatkanMidtransServerKey(kunciOpsional?: string): string | null {
  const kandidat = (kunciOpsional || process.env.MIDTRANS_SERVER_KEY || "").trim();
  const adalahPlaceholder =
    !kandidat ||
    kandidat.includes("masukkan_midtrans") ||
    kandidat === "kunci_sandbox_lolos_cpns";

  if (!adalahPlaceholder) {
    return kandidat;
  }

  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return "kunci_sandbox_lokal_dev_lolos_cpns";
}

export function apakahMidtransTerkonfigurasiNyata(): boolean {
  const kandidat = (process.env.MIDTRANS_SERVER_KEY || "").trim();
  return (
    Boolean(kandidat) &&
    !kandidat.includes("masukkan_midtrans") &&
    kandidat !== "kunci_sandbox_lolos_cpns"
  );
}

export function buatSignatureMidtrans(parameter: {
  orderId: string;
  statusCode: string;
  grossAmount: string;
  serverKey: string;
}): string {
  const gabungan = `${parameter.orderId}${parameter.statusCode}${parameter.grossAmount}${parameter.serverKey}`;
  return crypto.createHash("sha512").update(gabungan).digest("hex");
}

function bandingkanAmanHex(a: string, b: string): boolean {
  const bufA = Buffer.from(a.toLowerCase(), "utf8");
  const bufB = Buffer.from(b.toLowerCase(), "utf8");
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export function verifikasiWebhookPembayaran(payload: {
  order_id: string;
  status_code?: string;
  gross_amount?: string;
  signature_key?: string;
  transaction_status: string;
  fraud_status?: string;
  paket_id?: string;
  nominalHarapanIdr?: number;
  server_key_opsional?: string;
}): {
  sah: boolean;
  statusTransaksi: StatusTransaksiPembayaran;
  tingkatAktifBaru: TingkatLanggananPeserta | null;
  pesanNotifikasi: string;
} {
  const serverKey = dapatkanMidtransServerKey(payload.server_key_opsional);
  if (!serverKey) {
    return {
      sah: false,
      statusTransaksi: "dibatalkan",
      tingkatAktifBaru: null,
      pesanNotifikasi:
        "Konfigurasi kunci server pembayaran produksi (MIDTRANS_SERVER_KEY) belum diatur.",
    };
  }

  // WAJIB: Tidak ada lagi bypass tanpa signature_key / status_code / gross_amount
  if (
    !payload.order_id ||
    !payload.signature_key ||
    !payload.status_code ||
    !payload.gross_amount
  ) {
    return {
      sah: false,
      statusTransaksi: "dibatalkan",
      tingkatAktifBaru: null,
      pesanNotifikasi:
        "Tanda tangan keamanan (signature_key), status_code, dan gross_amount wajib disertakan pada webhook.",
    };
  }

  const harapanSignature = buatSignatureMidtrans({
    orderId: payload.order_id,
    statusCode: payload.status_code,
    grossAmount: payload.gross_amount,
    serverKey,
  });

  if (!bandingkanAmanHex(payload.signature_key, harapanSignature)) {
    return {
      sah: false,
      statusTransaksi: "dibatalkan",
      tingkatAktifBaru: null,
      pesanNotifikasi:
        "Tanda tangan keamanan (signature key) notifikasi pembayaran tidak sah.",
    };
  }

  if (typeof payload.nominalHarapanIdr === "number") {
    const nominalWebhook = Math.round(Number(payload.gross_amount));
    if (
      !Number.isFinite(nominalWebhook) ||
      nominalWebhook !== payload.nominalHarapanIdr
    ) {
      return {
        sah: false,
        statusTransaksi: "dibatalkan",
        tingkatAktifBaru: null,
        pesanNotifikasi:
          "Nominal pembayaran pada notifikasi tidak sesuai dengan nilai tagihan pesanan.",
      };
    }
  }

  const statusMentah = (payload.transaction_status || "").toLowerCase().trim();
  const fraudMentah = (payload.fraud_status || "").toLowerCase().trim();
  const idPaket = payload.paket_id || "paket-intensif-skd";
  const paket =
    DAFTAR_PAKET_LANGGANAN[idPaket] ||
    DAFTAR_PAKET_LANGGANAN["paket-intensif-skd"];

  const lunasKartu =
    statusMentah === "capture" &&
    (!fraudMentah || fraudMentah === "accept");

  if (
    statusMentah === "settlement" ||
    lunasKartu ||
    statusMentah === "paid" ||
    statusMentah === "lunas"
  ) {
    return {
      sah: true,
      statusTransaksi: "lunas",
      tingkatAktifBaru: paket.kode_tingkat,
      pesanNotifikasi: `Pembayaran pesanan ${payload.order_id} telah LUNAS. Akses "${paket.judul}" kini aktif untuk akun Anda.`,
    };
  }

  if (
    statusMentah === "pending" ||
    statusMentah === "menunggu_pembayaran" ||
    (statusMentah === "capture" && fraudMentah === "challenge")
  ) {
    return {
      sah: true,
      statusTransaksi: "menunggu_pembayaran",
      tingkatAktifBaru: null,
      pesanNotifikasi: `Pesanan ${payload.order_id} sedang menunggu penyelesaian atau verifikasi pembayaran.`,
    };
  }

  if (statusMentah === "expire" || statusMentah === "kedaluwarsa") {
    return {
      sah: true,
      statusTransaksi: "kedaluwarsa",
      tingkatAktifBaru: null,
      pesanNotifikasi: `Batas waktu pembayaran untuk pesanan ${payload.order_id} telah berakhir.`,
    };
  }

  return {
    sah: true,
    statusTransaksi: "dibatalkan",
    tingkatAktifBaru: null,
    pesanNotifikasi: `Transaksi pesanan ${payload.order_id} dibatalkan.`,
  };
}
