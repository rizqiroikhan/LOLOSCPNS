import { NextResponse } from "next/server";
import {
  dapatkanInfoPaketSimulasi,
  dapatkanUrlUpgradeUntukPaket,
  evaluasiAksesPaketSimulasi,
} from "@/lib/access-control";
import { hapusKunciJawabanUntukUjian } from "@/lib/cat-question-bank";
import { muatBankSoalOtoritatif110 } from "@/lib/question-loader";
import { bacaSesiPesertaDariHeaderCookie } from "@/lib/user-auth";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const idPaket = (url.searchParams.get("id") || "paket-perdana-gratis").trim();

    const infoPaket = dapatkanInfoPaketSimulasi(idPaket);
    if (!infoPaket) {
      return NextResponse.json(
        {
          status: "tidak_ditemukan",
          pesan: `Paket simulasi "${idPaket}" tidak ditemukan dalam katalog resmi.`,
        },
        { status: 404 }
      );
    }

    const profil = await bacaSesiPesertaDariHeaderCookie(
      request.headers.get("cookie")
    );
    const tingkatLangganan = profil?.tingkat_langganan || "gratis";

    const akses = evaluasiAksesPaketSimulasi({
      idPaket,
      tingkatLangganan,
    });

    if (!akses.diizinkan) {
      return NextResponse.json(
        {
          status: "terkunci",
          butuh_masuk: !profil,
          paket: infoPaket,
          tingkat_dimiliki: tingkatLangganan,
          pesan: akses.pesanAkses,
          url_upgrade: dapatkanUrlUpgradeUntukPaket(idPaket),
        },
        { status: 403 }
      );
    }

    const daftarSoal = await muatBankSoalOtoritatif110(idPaket);
    const soalTerproteksi = hapusKunciJawabanUntukUjian(daftarSoal);

    return NextResponse.json({
      status: "sukses",
      terautentikasi: Boolean(profil),
      tingkat_dimiliki: tingkatLangganan,
      paket: infoPaket,
      total_soal: soalTerproteksi.length,
      daftar_soal: soalTerproteksi,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan:
          err instanceof Error
            ? err.message
            : "Gagal memuat paket soal simulasi CAT SKD.",
      },
      { status: 500 }
    );
  }
}
