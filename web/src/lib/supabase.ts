import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

/**
 * Membuat instans klien Supabase untuk sisi peramban (publik/pengguna).
 */
export function buatKlienSupabasePublik(): SupabaseClient {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Konfigurasi Supabase (NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY) belum diatur di berkas lingkungan (.env)."
    );
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Membuat instans klien Supabase dengan hak akses penuh (Service Role) khusus untuk sisi server/Admin.
 */
export function buatKlienSupabaseServer(): SupabaseClient {
  const serviceRoleEksplisit = (process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();
  if (
    process.env.NODE_ENV === "production" &&
    (!serviceRoleEksplisit || serviceRoleEksplisit.includes("masukkan_supabase"))
  ) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY wajib diatur pada lingkungan produksi."
    );
  }
  const serviceRoleKey = serviceRoleEksplisit || supabaseAnonKey;
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Konfigurasi server Supabase belum lengkap pada berkas lingkungan."
    );
  }
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
