import { NextResponse } from "next/server";
import {
  DAFTAR_PAKET_LANGGANAN,
  evaluasiAksesPaketSimulasi,
} from "@/lib/access-control";
import { simpanRiwayatTryoutPeserta } from "@/lib/commercial-store";
import { analisisKesenjanganNilaiSKD } from "@/lib/gap-analyzer";
import { muatPetaPenilaianOtoritatif } from "@/lib/question-loader";
import {
  evaluasiKelulusanSKD,
  hitungSkorDariJawaban,
} from "@/lib/scoring-engine";
import { bacaSesiPesertaDariHeaderCookie } from "@/lib/user-auth";
import type { JenisFormasiSKD, PetaJawabanPeserta } from "@/types/database";

export async function POST(request: Request) {
  try {
    const badan = await request.json();
    const idPaket = String(badan.package_id || "paket-perdana-gratis").trim();
    const infoPaket = DAFTAR_PAKET_LANGGANAN[idPaket];

    if (!infoPaket) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan: `Paket simulasi "${idPaket}" tidak dikenali.`,
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
          pesan: akses.pesanAkses,
          url_upgrade: `/pembayaran?paket=${encodeURIComponent(idPaket)}`,
        },
        { status: 403 }
      );
    }

    const jenisFormasi: JenisFormasiSKD = badan.formasi_type || "umum";
    const disabilitasSensorikNetra: boolean = Boolean(badan.is_sensory_blind);
    const jawabanPeserta: PetaJawabanPeserta = badan.answers_json || {};
    const daftarIdSoal = Array.isArray(badan.soal_ids)
      ? (badan.soal_ids as unknown[]).map((x) => String(x))
      : undefined;

    const daftarSoal = await muatPetaPenilaianOtoritatif(
      idPaket,
      daftarIdSoal
    );

    const hasilSkor = hitungSkorDariJawaban(daftarSoal, jawabanPeserta);
    const evaluasi = evaluasiKelulusanSKD({
      skorSubtes: hasilSkor.skorSubtes,
      jenisFormasi,
      disabilitasSensorikNetra,
    });

    const analisisGap = analisisKesenjanganNilaiSKD({
      daftarSoal,
      jawabanPeserta,
      jenisFormasi,
      disabilitasSensorikNetra,
    });

    let tersimpanDiBasisData = false;
    if (profil) {
      tersimpanDiBasisData = await simpanRiwayatTryoutPeserta({
        userId: profil.id,
        packageSlug: idPaket,
        formasiType: jenisFormasi,
        isSensoryBlind: disabilitasSensorikNetra,
        answersJson: jawabanPeserta,
        sectionScoresJson: hasilSkor.skorSubtes,
        totalScore: evaluasi.skorTotal,
        isPassed: evaluasi.lulusAmbangBatas,
        diagnosticSummary: analisisGap.rekomendasiBelajar,
      });
    }

    return NextResponse.json({
      status: "berhasil",
      pesan: profil
        ? "Hasil simulasi CAT SKD dihitung dan disimpan ke riwayat akun Anda."
        : "Hasil simulasi CAT SKD berhasil dihitung secara resmi.",
      tersimpan_di_basis_data: tersimpanDiBasisData,
      hasil_skor: hasilSkor,
      evaluasi,
      peta_kelemahan: {
        rekomendasi_belajar: analisisGap.rekomendasiBelajar,
        tiga_prioritas: analisisGap.tigaSubTopikPrioritas,
      },
      daftar_soal_pembahasan: daftarSoal,
    });
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal memproses pengumpulan jawaban simulasi: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}
