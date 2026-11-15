import { NextResponse } from "next/server";
import { NAMA_COOKIE_SESI_ADMIN } from "@/lib/admin-auth";

export async function POST() {
  const respons = NextResponse.json({
    status: "berhasil",
    pesan: "Anda telah keluar dari Menu Admin dengan aman.",
  });

  respons.cookies.set({
    name: NAMA_COOKIE_SESI_ADMIN,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  return respons;
}
