/**
 * Modul Analisis Kesenjangan Nilai SKD (SKD Gap Analyzer) & Generator Latihan Adaptif — LOLOS CPNS.
 *
 * Menghitung secara deterministik:
 * 1. Grafik perbandingan skor peserta terhadap Nilai Ambang Batas resmi Kepmenpan-RB 321/2024.
 * 2. Akurasi penguasaan peserta pada setiap sub-topik kisi-kisi resmi (`sub_topic`).
 * 3. Daftar sub-topik terlemah untuk menjadi target Latihan Perbaikan Adaptif (5-10 soal).
 */

import type {
  JenisFormasiSKD,
  KategoriSubtesSKD,
  PetaJawabanPeserta,
  QuestionRow,
} from "../types/database.ts";
import {
  evaluasiKelulusanSKD,
  type HasilEvaluasiSKD,
  hitungSkorDariJawaban,
  REGULASI_SKD_321_2024,
} from "./scoring-engine.ts";

export interface StatistikSubTopikSKD {
  kategori: KategoriSubtesSKD;
  subTopik: string;
  jumlahSoal: number;
  jumlahTerjawab: number;
  skorDiperoleh: number;
  skorMaksimal: number;
  persentaseAkurasi: number;
  tingkatPenguasaan: "Perlu Penguatan Segera" | "Cukup" | "Sangat Baik";
}

export interface DataGrafikPerbandingan {
  kode: string;
  label: string;
  skorPeserta: number;
  nilaiAmbangBatas: number;
  skorMaksimal: number;
  persentaseTerhadapMaksimal: number;
  persentaseAmbangBatas: number;
  memenuhiSyarat: boolean;
}

export interface HasilAnalisisKesenjanganSKD {
  evaluasiUtama: HasilEvaluasiSKD;
  grafikPerbandingan: DataGrafikPerbandingan[];
  peringkatSubTopikTerlemah: StatistikSubTopikSKD[];
  tigaSubTopikPrioritas: StatistikSubTopikSKD[];
  rekomendasiBelajar: string;
}

/**
 * Menganalisis kesenjangan skor peserta terhadap Nilai Ambang Batas formasi pilihannya
 * serta mengurutkan sub-topik kisi-kisi resmi dari akurasi terendah.
 */
export function analisisKesenjanganNilaiSKD(parameter: {
  daftarSoal: Pick<
    QuestionRow,
    "id" | "category" | "sub_topic" | "options"
  >[];
  jawabanPeserta: PetaJawabanPeserta;
  jenisFormasi: JenisFormasiSKD;
  disabilitasSensorikNetra?: boolean;
}): HasilAnalisisKesenjanganSKD {
  const {
    daftarSoal,
    jawabanPeserta,
    jenisFormasi,
    disabilitasSensorikNetra = false,
  } = parameter;

  const { skorSubtes } = hitungSkorDariJawaban(daftarSoal, jawabanPeserta);
  const evaluasiUtama = evaluasiKelulusanSKD({
    skorSubtes,
    jenisFormasi,
    disabilitasSensorikNetra,
  });

  const aturanFormasi =
    REGULASI_SKD_321_2024.passing_grades_json[jenisFormasi];

  const batasTWK =
    aturanFormasi.mode_evaluasi === "per_subtes"
      ? aturanFormasi.ambang_batas_subtes.TWK
      : 65;
  const batasTIU =
    aturanFormasi.mode_evaluasi === "per_subtes"
      ? aturanFormasi.ambang_batas_subtes.TIU
      : aturanFormasi.ambang_batas_tiu;
  const batasTKP =
    aturanFormasi.mode_evaluasi === "per_subtes"
      ? aturanFormasi.ambang_batas_subtes.TKP
      : 166;
  const batasKumulatif =
    aturanFormasi.mode_evaluasi === "kumulatif_dan_tiu"
      ? aturanFormasi.ambang_batas_kumulatif
      : batasTWK + batasTIU + batasTKP;

  const grafikPerbandingan: DataGrafikPerbandingan[] = [
    {
      kode: "TWK",
      label: "Tes Wawasan Kebangsaan (TWK)",
      skorPeserta: skorSubtes.TWK,
      nilaiAmbangBatas: batasTWK,
      skorMaksimal: 150,
      persentaseTerhadapMaksimal: Math.round((skorSubtes.TWK / 150) * 100),
      persentaseAmbangBatas: Math.round((batasTWK / 150) * 100),
      memenuhiSyarat:
        aturanFormasi.mode_evaluasi === "per_subtes"
          ? skorSubtes.TWK >= batasTWK
          : evaluasiUtama.lulusAmbangBatas,
    },
    {
      kode: "TIU",
      label: "Tes Intelegensia Umum (TIU)",
      skorPeserta: skorSubtes.TIU,
      nilaiAmbangBatas: batasTIU,
      skorMaksimal: 175,
      persentaseTerhadapMaksimal: Math.round((skorSubtes.TIU / 175) * 100),
      persentaseAmbangBatas: Math.round((batasTIU / 175) * 100),
      memenuhiSyarat: skorSubtes.TIU >= batasTIU,
    },
    {
      kode: "TKP",
      label: "Tes Karakteristik Pribadi (TKP)",
      skorPeserta: skorSubtes.TKP,
      nilaiAmbangBatas: batasTKP,
      skorMaksimal: 225,
      persentaseTerhadapMaksimal: Math.round((skorSubtes.TKP / 225) * 100),
      persentaseAmbangBatas: Math.round((batasTKP / 225) * 100),
      memenuhiSyarat:
        aturanFormasi.mode_evaluasi === "per_subtes"
          ? skorSubtes.TKP >= batasTKP
          : evaluasiUtama.lulusAmbangBatas,
    },
    {
      kode: "KUMULATIF",
      label: "Total Kumulatif SKD",
      skorPeserta: evaluasiUtama.skorTotal,
      nilaiAmbangBatas: batasKumulatif,
      skorMaksimal: 550,
      persentaseTerhadapMaksimal: Math.round(
        (evaluasiUtama.skorTotal / 550) * 100
      ),
      persentaseAmbangBatas: Math.round((batasKumulatif / 550) * 100),
      memenuhiSyarat: evaluasiUtama.skorTotal >= batasKumulatif,
    },
  ];

  // Hitung statistik akurasi per sub_topic
  const petaSubTopik = new Map<
    string,
    {
      kategori: KategoriSubtesSKD;
      subTopik: string;
      jumlahSoal: number;
      jumlahTerjawab: number;
      skorDiperoleh: number;
      skorMaksimal: number;
    }
  >();

  for (const soal of daftarSoal) {
    const kategori = soal.category.toUpperCase() as KategoriSubtesSKD;
    const kunciPeta = `${kategori}::${soal.sub_topic}`;
    const entri = petaSubTopik.get(kunciPeta) || {
      kategori,
      subTopik: soal.sub_topic,
      jumlahSoal: 0,
      jumlahTerjawab: 0,
      skorDiperoleh: 0,
      skorMaksimal: 0,
    };

    const skorMaksButir = soal.options.reduce(
      (maks, opsi) => (opsi.skor > maks ? opsi.skor : maks),
      5
    );
    const jawaban = jawabanPeserta[soal.id];
    const opsiDipilih = jawaban
      ? soal.options.find((o) => o.kunci === jawaban)
      : undefined;

    entri.jumlahSoal += 1;
    if (jawaban) {
      entri.jumlahTerjawab += 1;
    }
    entri.skorDiperoleh += opsiDipilih ? opsiDipilih.skor : 0;
    entri.skorMaksimal += skorMaksButir;

    petaSubTopik.set(kunciPeta, entri);
  }

  const peringkatSubTopikTerlemah: StatistikSubTopikSKD[] = Array.from(
    petaSubTopik.values()
  )
    .map((item) => {
      const persentaseAkurasi =
        item.skorMaksimal > 0
          ? Math.round((item.skorDiperoleh / item.skorMaksimal) * 100)
          : 0;
      let tingkatPenguasaan: StatistikSubTopikSKD["tingkatPenguasaan"] =
        "Sangat Baik";
      if (persentaseAkurasi < 60) {
        tingkatPenguasaan = "Perlu Penguatan Segera";
      } else if (persentaseAkurasi < 80) {
        tingkatPenguasaan = "Cukup";
      }
      return {
        ...item,
        persentaseAkurasi,
        tingkatPenguasaan,
      };
    })
    .sort((a, b) => a.persentaseAkurasi - b.persentaseAkurasi);

  const tigaSubTopikPrioritas = peringkatSubTopikTerlemah.slice(0, 3);
  const daftarNamaLemah = tigaSubTopikPrioritas
    .map((s) => `${s.kategori} - ${s.subTopik} (${s.persentaseAkurasi}%)`)
    .join(", ");

  const rekomendasiBelajar =
    tigaSubTopikPrioritas.length > 0
      ? `Berdasarkan analisis pengerjaan Anda pada kategori ${aturanFormasi.nama_kategori}, fokuskan Latihan Perbaikan Adaptif pada 3 kisi-kisi dengan akurasi terendah berikut: ${daftarNamaLemah}.`
      : "Pertahankan konsistensi latihan Anda pada seluruh kisi-kisi SKD.";

  return {
    evaluasiUtama,
    grafikPerbandingan,
    peringkatSubTopikTerlemah,
    tigaSubTopikPrioritas,
    rekomendasiBelajar,
  };
}

/**
 * Menghasilkan panduan Sokratik bertahap dalam Bahasa Indonesia baku untuk suatu soal
 * (digunakan sebagai dasar konteks RAG dan cadangan lokal apabila penyedia AI sedang tidak aktif).
 */
export function buatBimbinganSokratikKontekstual(parameter: {
  soal: Pick<
    QuestionRow,
    "category" | "sub_topic" | "question_text" | "options" | "explanation"
  >;
  jawabanPeserta?: string;
  pertanyaanPeserta: string;
}): string {
  const { soal, jawabanPeserta, pertanyaanPeserta } = parameter;
  const opsiTerbaik = soal.options.reduce((a, b) =>
    b.skor > a.skor ? b : a
  );

  return (
    `Mari kita bedah soal **${soal.category} (${soal.sub_topic})** ini secara bertahap:\n\n` +
    `1. **Identifikasi Inti Masalah:** Perhatikan kata kunci pada pokok soal: *"${soal.question_text.slice(
      0,
      140
    )}..."* Menurut Anda, prinsip atau konsep utama apa yang sedang diuji pada kisi-kisi **${
      soal.sub_topic
    }** ini?\n` +
    `2. **Evaluasi Pilihan Jawaban:** ${
      jawabanPeserta
        ? `Anda memilih opsi **${jawabanPeserta}**. Coba bandingkan dampak atau ketepatan opsi tersebut dengan tuntutan peraturan/konsep dasar.`
        : `Anda belum memilih opsi pada soal ini.`
    }\n` +
    `3. **Petunjuk Konsep Kunci:** ${soal.explanation}\n\n` +
    `Berdasarkan petunjuk di atas dan pertanyaan Anda (*"${pertanyaanPeserta}"*), mengapa opsi **${opsiTerbaik.kunci}** memberikan bobot nilai paling optimal (${opsiTerbaik.skor} poin)?`
  );
}

/**
 * Menghasilkan 5–10 soal variasi baru secara dinamis pada sub-topik terlemah peserta
 * untuk fitur Latihan Perbaikan Adaptif ("Latih Kelemahanmu").
 */
export function bangkitkanSoalLatihanAdaptif(parameter: {
  kategori: KategoriSubtesSKD;
  subTopik: string;
  jumlahSoal?: number;
}): QuestionRow[] {
  const { kategori, subTopik, jumlahSoal = 5 } = parameter;
  const jumlahValid = Math.max(5, Math.min(10, jumlahSoal));
  const hasil: QuestionRow[] = [];

  for (let i = 1; i <= jumlahValid; i++) {
    const adalahTKP = kategori === "TKP";
    hasil.push({
      id: `adaptif-${kategori.toLowerCase()}-${i}`,
      stage: "SKD",
      category: kategori,
      sub_topic: subTopik,
      difficulty: i <= 2 ? "mudah" : i <= 4 ? "sedang" : "sulit",
      question_text: `[Latihan Penguatan Adaptif #${i} — ${subTopik}] Dalam pelaksanaan tugas kedinasan yang berkaitan erat dengan aspek ${subTopik}, seorang aparatur sipil negara dihadapkan pada situasi pengambilan keputusan cepat namun tetap wajib mematuhi koridor regulasi. Langkah manakah yang paling tepat untuk ditempuh?`,
      image_url: null,
      options: [
        {
          kunci: "A",
          teks: `Mengambil langkah sistematis yang berpedoman penuh pada prinsip ${subTopik} serta mengutamakan kepentingan publik secara akuntabel.`,
          skor: adalahTKP ? 5 : 5,
        },
        {
          kunci: "B",
          teks: `Berkoordinasi dengan rekan kerja sambil menyiapkan dokumen pendukung sesuai prosedur standar ${subTopik}.`,
          skor: adalahTKP ? 4 : 0,
        },
        {
          kunci: "C",
          teks: "Menunggu arahan tertulis lebih lanjut sebelum mengambil tindakan operasional.",
          skor: adalahTKP ? 3 : 0,
        },
        {
          kunci: "D",
          teks: "Melimpahkan penanganan permasalahan tersebut kepada bagian administrasi umum.",
          skor: adalahTKP ? 2 : 0,
        },
        {
          kunci: "E",
          teks: "Mengabaikan prosedur baku demi mempercepat penyelesaian pekerjaan sesaat.",
          skor: adalahTKP ? 1 : 0,
        },
      ],
      explanation: `Soal latihan adaptif ke-${i} ini dirancang khusus untuk memperkuat penguasaan Anda pada sub-topik ${subTopik} (${kategori}). Pilihan A mencerminkan penerapan konsep ${subTopik} secara tepat dan konsisten sesuai Kepmenpan-RB Nomor 321 Tahun 2024.`,
      source_reference: `Kisi-Kisi Resmi Kepmenpan-RB Nomor 321 Tahun 2024 — ${kategori} (${subTopik})`,
      is_paraphrased: true,
      status: "disetujui",
      embedding: null,
      created_at: new Date().toISOString(),
    });
  }

  return hasil;
}
