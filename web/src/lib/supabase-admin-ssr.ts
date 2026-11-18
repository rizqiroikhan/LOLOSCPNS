/**
 * Guard Autentikasi & Otorisasi Admin Berbasis @supabase/ssr (Fail-Closed).
 *
 * Memverifikasi sesi pengguna melalui `supabase.auth.getUser()` dan memeriksa
 * kolom `profiles.role === 'admin'` di PostgreSQL sebelum mengizinkan akses ke
 * rute `/admin`, `/api/admin/*`, maupun `/api/ingest/*`.
 */

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import type { NextResponse } from "next/server";
import { normalisasiUrlSupabase } from "./supabase.ts";

export type PeranProfilSupabase = "user" | "admin";

export interface HasilOtorisasiAdminProfil {
  diizinkan: boolean;
  statusHttp: 200 | 401 | 403;
  alasan: string;
}

export interface ProfilAdminSupabaseSSR {
  id: string;
  email: string;
  nama_lengkap: string;
  role: "admin";
  peran: "admin_utama";
}

export type HasilPemeriksaanAdminSSR =
  | {
      sah: true;
      statusHttp: 200;
      admin: ProfilAdminSupabaseSSR;
    }
  | {
      sah: false;
      statusHttp: 401 | 403;
      alasan: string;
    };

export interface CookieYangHarusDiset {
  name: string;
  value: string;
  options?: CookieOptions;
}

/**
 * Mengevaluasi apakah identitas pengguna dan peran pada tabel `profiles`
 * berhak mengakses area administrator (`role === 'admin'`).
 */
export function evaluasiOtorisasiAdminProfil(params: {
  userId: string | null | undefined;
  roleProfil: string | null | undefined;
}): HasilOtorisasiAdminProfil {
  const idBersih = (params.userId || "").trim();
  if (!idBersih) {
    return {
      diizinkan: false,
      statusHttp: 401,
      alasan: "Sesi pengguna tidak ditemukan atau belum masuk akun.",
    };
  }

  if (params.roleProfil !== "admin") {
    return {
      diizinkan: false,
      statusHttp: 403,
      alasan:
        "Akses ditolak. Akun Anda tidak memiliki hak akses administrator.",
    };
  }

  return {
    diizinkan: true,
    statusHttp: 200,
    alasan: "Akses administrator terverifikasi.",
  };
}

/**
 * Mengambil URL dan Anon Key Supabase publik yang valid untuk klien @supabase/ssr.
 */
export function dapatkanKredensialPublikSupabase(): {
  url: string;
  anonKey: string;
} | null {
  const url = normalisasiUrlSupabase(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const anonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "")
    .trim()
    .replace(/^['"]+|['"]+$/g, "");

  if (
    !url ||
    url.includes("supabase.com") ||
    !anonKey ||
    anonKey.length < 20 ||
    anonKey.includes("masukkan_supabase") ||
    anonKey.includes("placeholder")
  ) {
    return null;
  }

  return { url, anonKey };
}

/**
 * Membuat instans klien `@supabase/ssr` untuk Server Component atau Route Handler
 * membaca cookie sesi Next.js.
 */
export async function buatKlienSupabaseSSRServerComponent() {
  const kredensial = dapatkanKredensialPublikSupabase();
  if (!kredensial) return null;

  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();

  return createServerClient(kredensial.url, kredensial.anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Component bersifat read-only; penyegaran cookie ditangani middleware.ts
        }
      },
    },
  });
}

/**
 * Membuat klien `@supabase/ssr` khusus Route Handler agar pembaruan token /
 * cookie sesi ikut terpasang pada `NextResponse` yang dikembalikan.
 */
export async function buatKlienSupabaseSSRRouteHandler(): Promise<{
  supabase: ReturnType<typeof createServerClient>;
  terapkanCookieKeRespons: <T extends NextResponse>(respons: T) => T;
} | null> {
  const kredensial = dapatkanKredensialPublikSupabase();
  if (!kredensial) return null;

  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  const antreanCookie: CookieYangHarusDiset[] = [];

  const supabase = createServerClient(kredensial.url, kredensial.anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        antreanCookie.push(...cookiesToSet);
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Abaikan bila store read-only; `terapkanCookieKeRespons` tetap menulis header
        }
      },
    },
  });

  const terapkanCookieKeRespons = <T extends NextResponse>(respons: T): T => {
    for (const item of antreanCookie) {
      respons.cookies.set(item.name, item.value, item.options);
    }
    return respons;
  };

  return { supabase, terapkanCookieKeRespons };
}

/**
 * Memvalidasi otoritas admin sisi server secara fail-closed memakai
 * `supabase.auth.getUser()` + kueri `profiles.role === 'admin'`.
 */
export async function periksaAdminSupabaseSSR(): Promise<HasilPemeriksaanAdminSSR> {
  const supabase = await buatKlienSupabaseSSRServerComponent();
  if (!supabase) {
    return {
      sah: false,
      statusHttp: 401,
      alasan: "Konfigurasi autentikasi Supabase SSR belum lengkap.",
    };
  }

  try {
    const {
      data: { user },
      error: galatUser,
    } = await supabase.auth.getUser();

    if (galatUser || !user?.id) {
      return {
        sah: false,
        statusHttp: 401,
        alasan: "Sesi pengguna tidak valid atau belum masuk akun.",
      };
    }

    const { data: profil, error: galatProfil } = await supabase
      .from("profiles")
      .select("id, email, nama_lengkap, role")
      .eq("id", user.id)
      .maybeSingle();

    const evaluasi = evaluasiOtorisasiAdminProfil({
      userId: user.id,
      roleProfil: galatProfil ? null : (profil?.role ?? null),
    });

    if (!evaluasi.diizinkan) {
      return {
        sah: false,
        statusHttp: evaluasi.statusHttp === 401 ? 401 : 403,
        alasan: evaluasi.alasan,
      };
    }

    const namaDariMetadata =
      typeof user.user_metadata?.nama_lengkap === "string"
        ? user.user_metadata.nama_lengkap
        : "";
    const emailBersih = String(profil?.email || user.email || "");

    return {
      sah: true,
      statusHttp: 200,
      admin: {
        id: user.id,
        email: emailBersih,
        nama_lengkap: String(
          profil?.nama_lengkap ||
            namaDariMetadata ||
            emailBersih ||
            "Administrator"
        ),
        role: "admin",
        peran: "admin_utama",
      },
    };
  } catch {
    return {
      sah: false,
      statusHttp: 401,
      alasan: "Verifikasi sesi administrator gagal diproses.",
    };
  }
}
