import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * Menormalkan URL Supabase agar tahan terhadap salah salin URL Dashboard
 * (mis. `https://supabase.com/dashboard/project/<ref>` -> `https://<ref>.supabase.co`)
 * maupun tanda kutip / garis miring berlebih di variabel lingkungan Vercel.
 */
export function normalisasiUrlSupabase(inputMentah?: string): string {
  const bersih = (inputMentah || "")
    .trim()
    .replace(/^['"]+|['"]+$/g, "")
    .replace(/\/+$/, "");

  if (!bersih || bersih.includes("proyek-anda.supabase.co")) {
    return "";
  }

  // Deteksi jika pengguna menyalin URL halaman dashboard Supabase
  const cocokDashboard = bersih.match(
    /supabase\.com\/dashboard\/project\/([a-z0-9-]+)/i
  );
  if (cocokDashboard && cocokDashboard[1]) {
    return `https://${cocokDashboard[1].toLowerCase()}.supabase.co`;
  }

  try {
    const parsed = new URL(
      bersih.startsWith("http://") || bersih.startsWith("https://")
        ? bersih
        : `https://${bersih}`
    );
    // Hanya izinkan origin murni tanpa path tambahan agar PostgREST tidak menolak path
    return parsed.origin;
  } catch {
    return "";
  }
}

function dapatkanServiceRoleKey(): string {
  const serviceRole = (process.env.SUPABASE_SERVICE_ROLE_KEY || "")
    .trim()
    .replace(/^['"]+|['"]+$/g, "");

  if (
    !serviceRole ||
    serviceRole.length < 20 ||
    serviceRole.includes("masukkan_supabase") ||
    serviceRole.includes("kata_sandi")
  ) {
    return "";
  }

  return serviceRole;
}

export function apakahKonfigurasiSupabaseValid(): boolean {
  const url = normalisasiUrlSupabase(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const serviceRoleKey = dapatkanServiceRoleKey();

  if (!url || !serviceRoleKey) return false;
  if (url.includes("supabase.com")) {
    return false;
  }

  return true;
}

/**
 * Membuat instans klien Supabase untuk sisi peramban (publik/pengguna).
 */
export function buatKlienSupabasePublik(): SupabaseClient {
  const supabaseUrl = normalisasiUrlSupabase(
    process.env.NEXT_PUBLIC_SUPABASE_URL
  );
  const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "")
    .trim()
    .replace(/^['"]+|['"]+$/g, "");

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Konfigurasi Supabase (NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY) belum diatur di berkas lingkungan (.env)."
    );
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Membuat instans klien Supabase dengan hak akses penuh (Service Role) khusus untuk sisi server/Admin.
 * Fail-closed: tidak pernah fallback ke ANON_KEY agar kebijakan RLS tetap terjaga.
 */
export function buatKlienSupabaseServer(): SupabaseClient {
  const supabaseUrl = normalisasiUrlSupabase(
    process.env.NEXT_PUBLIC_SUPABASE_URL
  );
  const serviceRoleKey = dapatkanServiceRoleKey();

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Konfigurasi server Supabase (NEXT_PUBLIC_SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY) belum lengkap atau tidak valid."
    );
  }
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
