import { NextResponse } from "next/server";
import { NAMA_COOKIE_SESI_ADMIN } from "@/lib/admin-auth";
import {
  buatKlienSupabaseSSRRouteHandler,
  periksaAdminSupabaseSSR,
} from "@/lib/supabase-admin-ssr";
import { NAMA_COOKIE_SESI_PESERTA } from "@/lib/user-auth";

export async function POST() {
  const hasilAdmin = await periksaAdminSupabaseSSR();
  if (!hasilAdmin.sah) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: hasilAdmin.alasan,
      },
      { status: hasilAdmin.statusHttp }
    );
  }

  const ssr = await buatKlienSupabaseSSRRouteHandler();
  if (ssr) {
    await ssr.supabase.auth.signOut();
  }

  const respons = NextResponse.json({
    status: "berhasil",
    pesan: "Anda telah keluar dari Menu Admin dengan aman.",
  });

  if (ssr) {
    ssr.terapkanCookieKeRespons(respons);
  }

  respons.cookies.set({
    name: NAMA_COOKIE_SESI_ADMIN,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  respons.cookies.set(NAMA_COOKIE_SESI_PESERTA, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  return respons;
}
