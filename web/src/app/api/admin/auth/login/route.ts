import { NextResponse } from "next/server";
import { periksaBatasLajuPermintaan } from "@/lib/access-control";
import {
  NAMA_COOKIE_SESI_ADMIN,
  verifikasiLoginAdmin,
} from "@/lib/admin-auth";
import { periksaAdminSupabaseSSR } from "@/lib/supabase-admin-ssr";

export async function POST(request: Request) {
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

  try {
    const ipKlien =
      request.headers.get("x-forwarded-for") || "admin-login-lokal";
    const batasLaju = periksaBatasLajuPermintaan({
      identitasKlien: `admin-login:${ipKlien}`,
      batasMaksimal: 15,
      jendelaWaktuDetik: 60,
    });

    if (!batasLaju.diizinkan) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan:
            batasLaju.pesanPeringatan ||
            "Terlalu banyak percobaan masuk. Silakan tunggu sebentar.",
        },
        { status: 429 }
      );
    }

    const badan = await request.json();
    const hasil = await verifikasiLoginAdmin({
      username: String(badan.username || ""),
      kataSandi: String(badan.kata_sandi || badan.password || ""),
    });

    if (!hasil.berhasil || !hasil.tokenSesi || !hasil.profil) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan: hasil.pesan,
        },
        { status: 401 }
      );
    }

    const respons = NextResponse.json({
      status: "berhasil",
      pesan: hasil.pesan,
      sesi: hasil.profil,
    });

    respons.cookies.set({
      name: NAMA_COOKIE_SESI_ADMIN,
      value: hasil.tokenSesi,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 30 * 24 * 60 * 60, // 30 hari persisten
    });

    return respons;
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal memproses permintaan masuk admin: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}
