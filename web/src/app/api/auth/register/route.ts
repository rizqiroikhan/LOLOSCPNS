import { NextResponse } from "next/server";
import { periksaBatasLajuPermintaan } from "@/lib/access-control";
import {
  daftarPesertaBaru,
  NAMA_COOKIE_SESI_PESERTA,
} from "@/lib/user-auth";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "lokal";
  const laju = periksaBatasLajuPermintaan({
    identitasKlien: `daftar-peserta:${ip}`,
    batasMaksimal: 10,
    jendelaWaktuDetik: 60,
  });
  if (!laju.diizinkan) {
    return NextResponse.json(
      {
        status: "dibatasi",
        pesan:
          laju.pesanPeringatan ||
          "Terlalu banyak percobaan pendaftaran. Silakan tunggu sebentar.",
      },
      { status: 429 }
    );
  }

  try {
    const badan = await request.json();
    const hasil = await daftarPesertaBaru({
      email: String(badan.email || ""),
      namaLengkap: String(badan.nama_lengkap || badan.nama || ""),
      kataSandi: String(badan.kata_sandi || badan.password || ""),
    });

    if (!hasil.berhasil || !hasil.tokenSesi || !hasil.profil) {
      return NextResponse.json(
        { status: "gagal", pesan: hasil.pesan },
        { status: 400 }
      );
    }

    const respons = NextResponse.json(
      {
        status: "sukses",
        pesan: hasil.pesan,
        profil: hasil.profil,
      },
      { status: 201 }
    );

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
          err instanceof Error
            ? err.message
            : "Gagal memproses pendaftaran peserta.",
      },
      { status: 500 }
    );
  }
}
