import { NextResponse } from "next/server";
import { NAMA_COOKIE_SESI_PESERTA } from "@/lib/user-auth";

export async function POST() {
  const respons = NextResponse.json({
    status: "sukses",
    pesan: "Anda telah keluar dari akun peserta.",
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
