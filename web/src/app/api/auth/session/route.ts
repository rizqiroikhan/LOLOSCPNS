import { NextResponse } from "next/server";
import { periksaKuotaTutorAI } from "@/lib/access-control";
import {
  bacaPemakaianAIHariIni,
  bacaPesananMilikPeserta,
  bacaRiwayatTryoutMilikPeserta,
} from "@/lib/commercial-store";
import { bacaSesiPesertaDariHeaderCookie } from "@/lib/user-auth";

export async function GET(request: Request) {
  try {
    const profil = await bacaSesiPesertaDariHeaderCookie(
      request.headers.get("cookie")
    );

    if (!profil) {
      const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        "tamu-lokal";
      const pemakaianTamu = await bacaPemakaianAIHariIni(`tamu:${ip}`);
      const kuotaTamu = periksaKuotaTutorAI({
        tingkatLangganan: "gratis",
        jumlahPemakaianHariIni: pemakaianTamu,
      });

      return NextResponse.json({
        terautentikasi: false,
        profil: null,
        kuota_ai: {
          ...kuotaTamu,
          terpakai_hari_ini: pemakaianTamu,
        },
        riwayat_pesanan: [],
        riwayat_tryout: [],
      });
    }

    const [pemakaianHariIni, riwayatPesanan, riwayatTryout] = await Promise.all([
      bacaPemakaianAIHariIni(`user:${profil.id}`),
      bacaPesananMilikPeserta(profil.id),
      bacaRiwayatTryoutMilikPeserta(profil.id),
    ]);

    const kuota = periksaKuotaTutorAI({
      tingkatLangganan: profil.tingkat_langganan,
      jumlahPemakaianHariIni: pemakaianHariIni,
    });

    return NextResponse.json({
      terautentikasi: true,
      profil,
      kuota_ai: {
        ...kuota,
        terpakai_hari_ini: pemakaianHariIni,
      },
      riwayat_pesanan: riwayatPesanan,
      riwayat_tryout: riwayatTryout,
    });
  } catch (err) {
    return NextResponse.json(
      {
        terautentikasi: false,
        profil: null,
        pesan:
          err instanceof Error ? err.message : "Gagal memeriksa sesi peserta.",
      },
      { status: 500 }
    );
  }
}
