import { NextResponse } from "next/server";
import { NAMA_COOKIE_SESI_ADMIN } from "@/lib/admin-auth";
import { buatKlienSupabaseSSRRouteHandler } from "@/lib/supabase-admin-ssr";
import { NAMA_COOKIE_SESI_PESERTA } from "@/lib/user-auth";

export async function POST() {
  const ssr = await buatKlienSupabaseSSRRouteHandler();
  if (ssr) {
    await ssr.supabase.auth.signOut();
  }

  const respons = NextResponse.json({
    status: "sukses",
    pesan: "Anda telah keluar dari akun peserta.",
  });

  if (ssr) {
    ssr.terapkanCookieKeRespons(respons);
  }

  respons.cookies.set(NAMA_COOKIE_SESI_PESERTA, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  respons.cookies.set(NAMA_COOKIE_SESI_ADMIN, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  return respons;
}
