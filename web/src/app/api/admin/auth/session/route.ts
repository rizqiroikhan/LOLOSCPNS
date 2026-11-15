import { NextResponse } from "next/server";
import {
  bacaDaftarAkunAdminPublik,
  ekstrakSesiDariHeaderCookie,
} from "@/lib/admin-auth";

export async function GET(request: Request) {
  const sesi = ekstrakSesiDariHeaderCookie(request.headers.get("cookie"));
  if (!sesi) {
    return NextResponse.json({
      terautentikasi: false,
      sesi: null,
    });
  }

  // Pastikan akun admin masih terdaftar aktif
  const daftarAkun = await bacaDaftarAkunAdminPublik();
  const masihAda = daftarAkun.find((a) => a.id === sesi.id);
  if (!masihAda) {
    return NextResponse.json({
      terautentikasi: false,
      sesi: null,
    });
  }

  return NextResponse.json({
    terautentikasi: true,
    sesi: masihAda,
  });
}
