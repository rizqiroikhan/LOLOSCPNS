/**
 * Mesin Penilaian Deterministik SKD CPNS — LOLOS CPNS.
 *
 * Mengacu penuh pada Keputusan Menteri PANRB Nomor 321 Tahun 2024 tentang
 * Nilai Ambang Batas Seleksi Kompetensi Dasar Pengadaan Pegawai Negeri Sipil TA 2024.
 *
 * PRINSIP ARSITEKTUR:
 * - Penilaian skor, durasi pengerjaan, dan status kelulusan WAJIB dihitung secara
 *   deterministik oleh modul ini (bukan oleh LLM).
 * - Mendukung dua mode evaluasi Nilai Ambang Batas:
 *   1. `per_subtes` (Kebutuhan Umum & Putra/Putri Kalimantan)
 *   2. `kumulatif_dan_tiu` (Cumlaude, Diaspora, Disabilitas, Papua, Daerah Tertinggal)
 * - Seluruh label, status, dan keterangan evaluasi menggunakan Bahasa Indonesia yang baku.
 */

import type {
  AturanAmbangBatasFormasi,
  JenisFormasiSKD,
  KategoriSubtesSKD,
  ModeEvaluasiAmbangBatas,
  PetaAmbangBatasRegulasi,
  PetaJawabanPeserta,
  PilihanJawabanSoal,
  QuestionRow,
  RegulationRow,
  SkorSubtesSKD,
  TahapSeleksi,
} from "../types/database.ts";

/**
 * Data bawaan resmi Keputusan Menteri PANRB Nomor 321 Tahun 2024
 * (identik dengan data awal di tabel `regulations`).
 */
export const REGULASI_SKD_321_2024: RegulationRow = {
  id: "32102024-0000-4000-8000-000000000321",
  stage: "SKD",
  title: "Keputusan Menteri PANRB Nomor 321 Tahun 2024",
  year: 2024,
  default_duration_minutes: 100,
  blind_disability_duration_minutes: 130,
  total_questions: 110,
  max_cumulative_score: 550,
  is_active: true,
  created_at: "2024-07-29T00:00:00.000Z",
  sections_json: [
    {
      kode: "TWK",
      nama: "Tes Wawasan Kebangsaan",
      jumlah_soal: 30,
      skor_benar: 5,
      skor_salah: 0,
      skor_kosong: 0,
      skor_maksimal: 150,
      sub_topik_resmi: [
        "Nasionalisme",
        "Integritas",
        "Bela Negara",
        "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
        "Bahasa Negara",
      ],
    },
    {
      kode: "TIU",
      nama: "Tes Intelegensia Umum",
      jumlah_soal: 35,
      skor_benar: 5,
      skor_salah: 0,
      skor_kosong: 0,
      skor_maksimal: 175,
      sub_topik_resmi: [
        "Kemampuan Verbal - Analogi",
        "Kemampuan Verbal - Silogisme",
        "Kemampuan Verbal - Analitis",
        "Kemampuan Numerik - Berhitung",
        "Kemampuan Numerik - Deret Angka",
        "Kemampuan Numerik - Perbandingan Kuantitatif",
        "Kemampuan Numerik - Soal Cerita",
        "Kemampuan Figural - Analogi Gambar",
        "Kemampuan Figural - Ketidaksamaan Gambar",
        "Kemampuan Figural - Serial Gambar",
      ],
    },
    {
      kode: "TKP",
      nama: "Tes Karakteristik Pribadi",
      jumlah_soal: 45,
      skala_skor_min: 1,
      skala_skor_maks: 5,
      skor_kosong: 0,
      skor_maksimal: 225,
      sub_topik_resmi: [
        "Pelayanan Publik",
        "Jejaring Kerja",
        "Sosial Budaya",
        "Teknologi Informasi dan Komunikasi (TIK)",
        "Profesionalisme",
        "Anti Radikalisme",
      ],
    },
  ],
  passing_grades_json: {
    umum: {
      kode_formasi: "umum",
      nama_kategori: "Kebutuhan Umum",
      mode_evaluasi: "per_subtes",
      ambang_batas_subtes: { TWK: 65, TIU: 80, TKP: 166 },
    },
    kalimantan: {
      kode_formasi: "kalimantan",
      nama_kategori: "Kebutuhan Khusus Putra/Putri Kalimantan",
      mode_evaluasi: "per_subtes",
      ambang_batas_subtes: { TWK: 65, TIU: 80, TKP: 166 },
    },
    cumlaude: {
      kode_formasi: "cumlaude",
      nama_kategori: "Kebutuhan Khusus Lulusan Terbaik (Cumlaude)",
      mode_evaluasi: "kumulatif_dan_tiu",
      ambang_batas_kumulatif: 311,
      ambang_batas_tiu: 85,
    },
    diaspora: {
      kode_formasi: "diaspora",
      nama_kategori: "Kebutuhan Khusus Diaspora",
      mode_evaluasi: "kumulatif_dan_tiu",
      ambang_batas_kumulatif: 311,
      ambang_batas_tiu: 85,
    },
    disabilitas: {
      kode_formasi: "disabilitas",
      nama_kategori: "Kebutuhan Khusus Penyandang Disabilitas",
      mode_evaluasi: "kumulatif_dan_tiu",
      ambang_batas_kumulatif: 286,
      ambang_batas_tiu: 60,
    },
    papua: {
      kode_formasi: "papua",
      nama_kategori: "Kebutuhan Khusus Putra/Putri Papua",
      mode_evaluasi: "kumulatif_dan_tiu",
      ambang_batas_kumulatif: 286,
      ambang_batas_tiu: 60,
    },
    daerah_tertinggal: {
      kode_formasi: "daerah_tertinggal",
      nama_kategori: "Kebutuhan Khusus Putra/Putri Daerah Tertinggal",
      mode_evaluasi: "kumulatif_dan_tiu",
      ambang_batas_kumulatif: 286,
      ambang_batas_tiu: 60,
    },
  },
};

export interface RincianEvaluasiKriteria {
  label: string;
  skorPeserta: number;
  ambangBatas: number;
  selisih: number;
  memenuhiSyarat: boolean;
}

export interface HasilEvaluasiSKD {
  tahap: TahapSeleksi;
  jenisFormasi: JenisFormasiSKD;
  namaKategoriFormasi: string;
  modeEvaluasi: ModeEvaluasiAmbangBatas;
  durasiMenit: number;
  skorSubtes: SkorSubtesSKD;
  skorTotal: number;
  skorMaksimalKumulatif: number;
  lulusAmbangBatas: boolean;
  statusKelulusan: "LULUS AMBANG BATAS" | "BELUM LULUS AMBANG BATAS";
  rincianKriteria: RincianEvaluasiKriteria[];
  ringkasanEvaluasi: string;
}

/**
 * Menghitung durasi pengerjaan SKD secara deterministik:
 * - 130 menit khusus untuk Penyandang Disabilitas Sensorik Netra pada formasi Disabilitas.
 * - 100 menit untuk seluruh formasi umum maupun kebutuhan khusus lainnya.
 */
export function hitungDurasiUjianSKD(
  jenisFormasi: JenisFormasiSKD,
  disabilitasSensorikNetra: boolean = false,
  regulasi: Pick<
    RegulationRow,
    "default_duration_minutes" | "blind_disability_duration_minutes"
  > = REGULASI_SKD_321_2024
): number {
  if (jenisFormasi === "disabilitas" && disabilitasSensorikNetra) {
    return regulasi.blind_disability_duration_minutes;
  }
  return regulasi.default_duration_minutes;
}

/**
 * Membaca bobot skor dari satu pilihan jawaban secara aman.
 */
function ambilSkorPilihan(
  daftarPilihan: PilihanJawabanSoal[],
  kunciJawabanPeserta?: string
): number {
  if (!kunciJawabanPeserta) {
    return 0;
  }
  const kunciNormal = kunciJawabanPeserta.trim().toUpperCase();
  const ditemukan = daftarPilihan.find(
    (opsi) => opsi.kunci.toUpperCase() === kunciNormal
  );
  if (!ditemukan || typeof ditemukan.skor !== "number") {
    return 0;
  }
  return ditemukan.skor;
}

/**
 * Menghitung perolehan skor per sub-tes (TWK, TIU, TKP) dan total skor dari daftar soal serta jawaban peserta.
 */
export function hitungSkorDariJawaban(
  daftarSoal: Pick<QuestionRow, "id" | "category" | "options">[],
  jawabanPeserta: PetaJawabanPeserta
): {
  skorSubtes: SkorSubtesSKD;
  skorTotal: number;
  jumlahTerjawab: number;
  jumlahKosong: number;
} {
  const skorSubtes: SkorSubtesSKD = {
    TWK: 0,
    TIU: 0,
    TKP: 0,
  };

  let jumlahTerjawab = 0;
  let jumlahKosong = 0;

  for (const soal of daftarSoal) {
    const jawaban = jawabanPeserta[soal.id];
    if (!jawaban) {
      jumlahKosong += 1;
      continue;
    }

    jumlahTerjawab += 1;
    const skorButir = ambilSkorPilihan(soal.options, jawaban);
    const kategori = soal.category.toUpperCase() as KategoriSubtesSKD;

    if (kategori === "TWK" || kategori === "TIU" || kategori === "TKP") {
      skorSubtes[kategori] += skorButir;
    }
  }

  const skorTotal = skorSubtes.TWK + skorSubtes.TIU + skorSubtes.TKP;

  return {
    skorSubtes,
    skorTotal,
    jumlahTerjawab,
    jumlahKosong,
  };
}

/**
 * Mengevaluasi kelulusan Nilai Ambang Batas SKD secara deterministik
 * untuk ke-7 kategori formasi sesuai Kepmenpan-RB Nomor 321 Tahun 2024.
 */
export function evaluasiKelulusanSKD(parameter: {
  skorSubtes: SkorSubtesSKD;
  jenisFormasi: JenisFormasiSKD;
  disabilitasSensorikNetra?: boolean;
  regulasi?: RegulationRow;
}): HasilEvaluasiSKD {
  const {
    skorSubtes,
    jenisFormasi,
    disabilitasSensorikNetra = false,
    regulasi = REGULASI_SKD_321_2024,
  } = parameter;

  const petaAmbangBatas: PetaAmbangBatasRegulasi =
    regulasi.passing_grades_json || REGULASI_SKD_321_2024.passing_grades_json;

  const aturanFormasi: AturanAmbangBatasFormasi | undefined =
    petaAmbangBatas[jenisFormasi];

  if (!aturanFormasi) {
    throw new Error(
      `Kategori formasi '${jenisFormasi}' tidak ditemukan dalam aturan regulasi SKD.`
    );
  }

  const skorTotal = skorSubtes.TWK + skorSubtes.TIU + skorSubtes.TKP;
  const durasiMenit = hitungDurasiUjianSKD(
    jenisFormasi,
    disabilitasSensorikNetra,
    regulasi
  );

  const rincianKriteria: RincianEvaluasiKriteria[] = [];
  let lulusAmbangBatas = false;

  if (aturanFormasi.mode_evaluasi === "per_subtes") {
    const batas = aturanFormasi.ambang_batas_subtes;

    const kriteriaTWK: RincianEvaluasiKriteria = {
      label: "Tes Wawasan Kebangsaan (TWK)",
      skorPeserta: skorSubtes.TWK,
      ambangBatas: batas.TWK,
      selisih: skorSubtes.TWK - batas.TWK,
      memenuhiSyarat: skorSubtes.TWK >= batas.TWK,
    };

    const kriteriaTIU: RincianEvaluasiKriteria = {
      label: "Tes Intelegensia Umum (TIU)",
      skorPeserta: skorSubtes.TIU,
      ambangBatas: batas.TIU,
      selisih: skorSubtes.TIU - batas.TIU,
      memenuhiSyarat: skorSubtes.TIU >= batas.TIU,
    };

    const kriteriaTKP: RincianEvaluasiKriteria = {
      label: "Tes Karakteristik Pribadi (TKP)",
      skorPeserta: skorSubtes.TKP,
      ambangBatas: batas.TKP,
      selisih: skorSubtes.TKP - batas.TKP,
      memenuhiSyarat: skorSubtes.TKP >= batas.TKP,
    };

    rincianKriteria.push(kriteriaTWK, kriteriaTIU, kriteriaTKP);
    lulusAmbangBatas =
      kriteriaTWK.memenuhiSyarat &&
      kriteriaTIU.memenuhiSyarat &&
      kriteriaTKP.memenuhiSyarat;
  } else {
    const batasKumulatif = aturanFormasi.ambang_batas_kumulatif;
    const batasTIU = aturanFormasi.ambang_batas_tiu;

    const kriteriaKumulatif: RincianEvaluasiKriteria = {
      label: "Nilai Kumulatif SKD",
      skorPeserta: skorTotal,
      ambangBatas: batasKumulatif,
      selisih: skorTotal - batasKumulatif,
      memenuhiSyarat: skorTotal >= batasKumulatif,
    };

    const kriteriaTIU: RincianEvaluasiKriteria = {
      label: "Tes Intelegensia Umum (TIU)",
      skorPeserta: skorSubtes.TIU,
      ambangBatas: batasTIU,
      selisih: skorSubtes.TIU - batasTIU,
      memenuhiSyarat: skorSubtes.TIU >= batasTIU,
    };

    rincianKriteria.push(kriteriaKumulatif, kriteriaTIU);
    lulusAmbangBatas =
      kriteriaKumulatif.memenuhiSyarat && kriteriaTIU.memenuhiSyarat;
  }

  const statusKelulusan = lulusAmbangBatas
    ? "LULUS AMBANG BATAS"
    : "BELUM LULUS AMBANG BATAS";

  const daftarBelumMemenuhi = rincianKriteria
    .filter((item) => !item.memenuhiSyarat)
    .map(
      (item) =>
        `${item.label} (skor ${item.skorPeserta} dari batas minimal ${item.ambangBatas})`
    );

  const ringkasanEvaluasi = lulusAmbangBatas
    ? `Selamat! Anda dinyatakan LULUS Nilai Ambang Batas SKD pada kategori ${aturanFormasi.nama_kategori} dengan total skor ${skorTotal} dari ${regulasi.max_cumulative_score} (TWK: ${skorSubtes.TWK}, TIU: ${skorSubtes.TIU}, TKP: ${skorSubtes.TKP}).`
    : `Anda BELUM LULUS Nilai Ambang Batas SKD pada kategori ${aturanFormasi.nama_kategori} dengan total skor ${skorTotal}. Komponen yang belum memenuhi syarat: ${daftarBelumMemenuhi.join(", ")}.`;

  return {
    tahap: regulasi.stage,
    jenisFormasi,
    namaKategoriFormasi: aturanFormasi.nama_kategori,
    modeEvaluasi: aturanFormasi.mode_evaluasi,
    durasiMenit,
    skorSubtes,
    skorTotal,
    skorMaksimalKumulatif: regulasi.max_cumulative_score,
    lulusAmbangBatas,
    statusKelulusan,
    rincianKriteria,
    ringkasanEvaluasi,
  };
}
