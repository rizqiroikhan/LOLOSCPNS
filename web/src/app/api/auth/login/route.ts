import { NextResponse } from "next/server";
import { periksaBatasLajuPermintaan } from "@/lib/access-control";
import {
  NAMA_COOKIE_SESI_PESERTA,
  verifikasiLoginPeserta,
} from "@/lib/user-auth";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "lokal";
  const laju = periksaBatasLajuPermintaan({
    identitasKlien: `login-peserta:${ip}`,
    batasMaksimal: 15,
    jendelaWaktuDetik: 60,
  });
  if (!laju.diizinkan) {
    return NextResponse.json(
      {
        status: "dibatasi",
        pesan:
          laju.pesanPeringatan ||
          "Terlalu banyak percobaan masuk. Coba beberapa saat lagi.",
      },
      { status: 429 }
    );
  }

  try {
    const badan = await request.json();
    const hasil = await verifikasiLoginPeserta({
      email: String(badan.email || ""),
      kataSandi: String(badan.kata_sandi || badan.password || ""),
    });

    if (!hasil.berhasil || !hasil.tokenSesi || !hasil.profil) {
      return NextResponse.json(
        { status: "gagal", pesan: hasil.pesan },
        { status: 401 }
      );
    }

    const respons = NextResponse.json({
      status: "sukses",
      pesan: hasil.pesan,
      profil: hasil.profil,
    });

    respons.cookies.set(NAMA_COOKIE_SESI_PESERTA, hasil.tokenSesi, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return respons;
  } catch (err) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan:
          err instanceof Error ? err.message : "Gagal memproses permintaan masuk.",
      },
      { status: 500 }
    );
  }
}
