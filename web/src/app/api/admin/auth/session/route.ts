import { NextResponse } from "next/server";
import {
  bacaDaftarAkunAdminPublik,
  ekstrakSesiDariHeaderCookie,
} from "@/lib/admin-auth";

export async function GET(request: Request) {
  try {
    const sesi = ekstrakSesiDariHeaderCookie(request.headers.get("cookie"));
    if (!sesi) {
      return NextResponse.json({
        terautentikasi: false,
        sesi: null,
      });
    }

    // Pastikan akun admin masih terdaftar aktif (cocokkan ID atau username agar tahan cold-start)
    const daftarAkun = await bacaDaftarAkunAdminPublik();
    const masihAda = daftarAkun.find(
      (a) => a.id === sesi.id || a.username === sesi.username
    );
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
  } catch (err) {
    return NextResponse.json(
      {
        terautentikasi: false,
        sesi: null,
        pesan:
          err instanceof Error
            ? err.message
            : "Gagal memverifikasi sesi admin.",
      },
      { status: 500 }
    );
  }
}
