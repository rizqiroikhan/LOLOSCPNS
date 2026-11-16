/**
 * Pemeriksa Kesehatan & Kesiapan Konfigurasi Produksi — LOLOS CPNS.
 * Hanya mengembalikan status boolean (siap/belum_siap) serta konektivitas
 * tanpa pernah membocorkan nilai rahasia, API key, atau rincian server sensitif.
 */

import {
  dapatkanMetrikAI,
  type RingkasanMetrikAI,
} from "./ai-client.ts";
import { panggilLayananAI } from "./ai-service-proxy.ts";
import { apakahMidtransTerkonfigurasiNyata } from "./payment-security.ts";
import { buatKlienSupabaseServer } from "./supabase.ts";

export interface LaporanKesehatanLayanan {
  statusHttp: 200 | 503;
  muatan: {
    status: "sehat" | "belum_siap" | "mode_pengembangan";
    mode: string;
    waktu_periksa: string;
    konfigurasi: {
      user_session_secret_siap: boolean;
      admin_session_secret_siap: boolean;
      admin_bootstrap_password_siap: boolean;
      supabase_konfigurasi_siap: boolean;
      midtrans_server_key_siap: boolean;
      midtrans_mode: "produksi" | "sandbox";
      ai_internal_secret_siap: boolean;
      ai_api_key_siap: boolean;
    };
    konektivitas: {
      supabase_terhubung: boolean;
      layanan_ai_terhubung: boolean;
    };
    observabilitas_ai: RingkasanMetrikAI;
  };
}

function rahasiaMinimalSiap(
  nilai: string | undefined,
  minimalPanjang: number,
  kataPlaceholder: string[]
): boolean {
  const bersih = (nilai || "").trim();
  if (bersih.length < minimalPanjang) return false;
  return !kataPlaceholder.some((kata) => bersih.includes(kata));
}

export async function periksaKesehatanLayanan(): Promise<LaporanKesehatanLayanan> {
  const adalahProduksi = process.env.NODE_ENV === "production";

  const userSessionSiap = rahasiaMinimalSiap(
    process.env.USER_SESSION_SECRET,
    32,
    ["ganti_kunci_rahasia"]
  );
  const adminSessionSiap = rahasiaMinimalSiap(
    process.env.ADMIN_SESSION_SECRET,
    32,
    ["ganti_kunci_rahasia"]
  );
  const adminBootstrapSiap = rahasiaMinimalSiap(
    process.env.ADMIN_BOOTSTRAP_PASSWORD,
    8,
    ["ganti_kata_sandi"]
  );
  const aiInternalSecretSiap = rahasiaMinimalSiap(
    process.env.AI_SERVICE_INTERNAL_SECRET,
    16,
    ["ganti_kunci_rahasia"]
  );
  const aiApiKeySiap = rahasiaMinimalSiap(process.env.AI_API_KEY, 10, [
    "masukkan_api_key",
  ]);

  const supabaseUrlSiap = rahasiaMinimalSiap(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    12,
    ["proyek-anda.supabase.co"]
  );
  const supabaseServiceRoleSiap = rahasiaMinimalSiap(
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    20,
    ["masukkan_supabase"]
  );
  const supabaseKonfigurasiSiap = supabaseUrlSiap && supabaseServiceRoleSiap;
  const midtransSiap = apakahMidtransTerkonfigurasiNyata();

  let supabaseTerhubung = false;
  if (supabaseKonfigurasiSiap) {
    try {
      const supabase = buatKlienSupabaseServer();
      const { error } = await supabase
        .from("regulations")
        .select("id", { count: "exact", head: true });
      supabaseTerhubung = !error;
    } catch {
      supabaseTerhubung = false;
    }
  }

  let layananAITerhubung = false;
  if (process.env.AI_SERVICE_URL || process.env.NEXT_PUBLIC_AI_SERVICE_URL) {
    try {
      const res = await panggilLayananAI("/kesehatan", { timeoutMs: 2500 });
      layananAITerhubung = res.ok;
    } catch {
      layananAITerhubung = false;
    }
  }

  const semuaIntiSiap =
    userSessionSiap &&
    adminSessionSiap &&
    supabaseKonfigurasiSiap &&
    supabaseTerhubung &&
    midtransSiap &&
    aiInternalSecretSiap;

  const statusHttp: 200 | 503 = adalahProduksi && !semuaIntiSiap ? 503 : 200;

  return {
    statusHttp,
    muatan: {
      status: adalahProduksi
        ? semuaIntiSiap
          ? "sehat"
          : "belum_siap"
        : "mode_pengembangan",
      mode: process.env.NODE_ENV || "development",
      waktu_periksa: new Date().toISOString(),
      konfigurasi: {
        user_session_secret_siap: userSessionSiap,
        admin_session_secret_siap: adminSessionSiap,
        admin_bootstrap_password_siap: adminBootstrapSiap,
        supabase_konfigurasi_siap: supabaseKonfigurasiSiap,
        midtrans_server_key_siap: midtransSiap,
        midtrans_mode:
          process.env.MIDTRANS_IS_PRODUCTION === "true"
            ? "produksi"
            : "sandbox",
        ai_internal_secret_siap: aiInternalSecretSiap,
        ai_api_key_siap: aiApiKeySiap,
      },
      konektivitas: {
        supabase_terhubung: supabaseTerhubung,
        layanan_ai_terhubung: layananAITerhubung,
      },
      observabilitas_ai: dapatkanMetrikAI(),
    },
  };
}
