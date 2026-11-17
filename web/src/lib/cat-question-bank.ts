/**
 * Bank Soal CAT SKD Terkurasi (110 Butir Unik per Paket) — LOLOS CPNS.
 * Mengacu penuh pada struktur Keputusan Menteri PANRB Nomor 321 Tahun 2024:
 * - TWK: Soal nomor 1 s.d. 30 (30 butir | Benar +5, Salah/Kosong 0 | Maksimal 150)
 * - TIU: Soal nomor 31 s.d. 65 (35 butir | Benar +5, Salah/Kosong 0 | Maksimal 175)
 * - TKP: Soal nomor 66 s.d. 110 (45 butir | Skala 1 s.d. 5, Kosong 0 | Maksimal 225)
 * Setiap paket resmi (Perdana Gratis vs Intensif/Terpadu) menyediakan 110 butir soal
 * yang seluruhnya unik tanpa pengulangan templat.
 */

import type {
  KategoriSubtesSKD,
  PilihanJawabanSoal,
  QuestionRow,
  TingkatKesulitanSoal,
} from "../types/database.ts";
import {
  BANK_SOAL_TIU_SET_1,
  BANK_SOAL_TIU_SET_2,
  type DefinisiButirTIU,
} from "./bank-soal-tiu.ts";
import { BANK_SOAL_TIU_AKBAR_SETS } from "./bank-soal-tiu-akbar.ts";
import {
  BANK_SOAL_TKP_SET_1,
  BANK_SOAL_TKP_SET_2,
  type DefinisiButirTKP,
} from "./bank-soal-tkp.ts";
import { BANK_SOAL_TKP_AKBAR_SETS } from "./bank-soal-tkp-akbar.ts";
import {
  BANK_SOAL_TWK_SET_1,
  BANK_SOAL_TWK_SET_2,
  type DefinisiButirTWK,
} from "./bank-soal-twk.ts";
import { BANK_SOAL_TWK_AKBAR_SETS } from "./bank-soal-twk-akbar.ts";

export interface SoalSimulasiCAT extends QuestionRow {
  nomor_urut: number;
}

export interface OpsiJawabanTerproteksi {
  kunci: "A" | "B" | "C" | "D" | "E";
  teks: string;
}

export interface SoalSimulasiCATTerproteksi {
  id: string;
  nomor_urut: number;
  stage: "SKD";
  category: KategoriSubtesSKD;
  sub_topic: string;
  difficulty: TingkatKesulitanSoal;
  question_text: string;
  image_url: string | null;
  options: OpsiJawabanTerproteksi[];
}

const HURUF_OPSI = ["A", "B", "C", "D", "E"] as const;

export const SOAL_KUIS_SINGKAT_BERANDA: SoalSimulasiCAT[] = [
  {
    id: "kuis-mini-twk-1",
    nomor_urut: 1,
    stage: "SKD",
    category: "TWK",
    sub_topic: "Integritas",
    difficulty: "mudah",
    question_text:
      "Seorang aparatur pengelola pengadaan barang dan jasa menemukan rekan lama dari masa kuliah ikut menjadi peserta tender terbuka yang sedang dinilai oleh timnya. Rekan tersebut menghubunginya di luar jam kerja untuk menanyakan kisaran nilai evaluasi pesaing. Sikap berintegritas yang wajib diambil aparatur tersebut adalah...",
    image_url: null,
    options: [
      {
        kunci: "A",
        teks: "Memberikan gambaran umum nilai pesaing agar persaingan tetap kompetitif tanpa menyebut angka persis.",
        skor: 0,
      },
      {
        kunci: "B",
        teks: "Menolak keras permintaan informasi rahasia tender dan melaporkan potensi benturan kepentingan secara tertulis kepada pimpinan tim pengadaan.",
        skor: 5,
      },
      {
        kunci: "C",
        teks: "Meminta rekan tersebut menghubungi anggota panitia lain agar dirinya tetap terlihat netral.",
        skor: 0,
      },
      {
        kunci: "D",
        teks: "Diam saja saat rapat tim penilaian agar tidak memengaruhi keputusan anggota lain secara langsung.",
        skor: 0,
      },
      {
        kunci: "E",
        teks: "Menunda pengumuman pemenang lelang hingga rekan tersebut mengundurkan diri.",
        skor: 0,
      },
    ],
    explanation:
      "Nilai Integritas ASN dan prinsip Tata Kelola Pemerintahan yang Baik mewajibkan penolakan tegas pembocoran rahasia jabatan serta pengungkapan konflik kepentingan (conflict of interest) secara prosedural kepada atasan atau tim pengawas internal.",
    source_reference:
      "Kisi-Kisi Resmi TWK Kepmenpan-RB Nomor 321 Tahun 2024 — Integritas",
    is_paraphrased: true,
    status: "disetujui",
    embedding: null,
    created_at: "2024-08-01T00:00:00.000Z",
  },
  {
    id: "kuis-mini-tiu-2",
    nomor_urut: 2,
    stage: "SKD",
    category: "TIU",
    sub_topic: "Kemampuan Numerik (Deret Angka)",
    difficulty: "sedang",
    question_text:
      "Perhatikan pola barisan bilangan berikut untuk menentukan angka yang tepat menggantikan tanda tanya: 4, 7, 13, 25, 49, ?",
    image_url: null,
    options: [
      { kunci: "A", teks: "85", skor: 0 },
      { kunci: "B", teks: "96", skor: 0 },
      { kunci: "C", teks: "97", skor: 5 },
      { kunci: "D", teks: "98", skor: 0 },
      { kunci: "E", teks: "101", skor: 0 },
    ],
    explanation:
      "Selisih antar-suku terus berlipat ganda: +3 (4 ke 7), +6 (7 ke 13), +12 (13 ke 25), +24 (25 ke 49). Selisih berikutnya adalah +48, sehingga 49 + 48 = 97 (atau rumus suku ke-n: 2 × suku sebelumnya - 1).",
    source_reference:
      "Kisi-Kisi Resmi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Deret Angka)",
    is_paraphrased: true,
    status: "disetujui",
    embedding: null,
    created_at: "2024-08-01T00:00:00.000Z",
  },
  {
    id: "kuis-mini-tkp-3",
    nomor_urut: 3,
    stage: "SKD",
    category: "TKP",
    sub_topic: "Pelayanan Publik",
    difficulty: "sedang",
    question_text:
      "Sistem antrean loket digital mendadak mengalami gangguan sambungan ketika seorang warga lanjut usia dan penyandang disabilitas telah menunggu hampir satu jam di ruang pelayanan terpadu. Sikap terbaik Anda sebagai petugas layanan garis depan adalah...",
    image_url: null,
    options: [
      {
        kunci: "A",
        teks: "Menunggu tim teknologi informasi memperbaiki sistem tanpa memberikan kepastian waktu kepada warga di ruang tunggu.",
        skor: 2,
      },
      {
        kunci: "B",
        teks: "Segera meminta maaf dengan santun, mencatat urutan manual sementara sembari memprioritaskan layanan warga lanjut usia dan disabilitas sesuai SOP aksesibilitas, lalu berkoordinasi aktif dengan tim TI.",
        skor: 5,
      },
      {
        kunci: "C",
        teks: "Meminta warga pulang dahulu dan mendaftar ulang melalui laman daring keesokan harinya.",
        skor: 1,
      },
      {
        kunci: "D",
        teks: "Menyuruh warga tetap duduk tenang karena gangguan teknis berada di luar tanggung jawab loket.",
        skor: 3,
      },
      {
        kunci: "E",
        teks: "Melayani satu per satu secara manual tanpa mencatat urutan daftar tunggu agar cepat selesai.",
        skor: 4,
      },
    ],
    explanation:
      "Pada sub-tes TKP Pelayanan Publik (skala skor 1–5), nilai maksimal 5 mencerminkan perpaduan empati, keberlanjutan layanan melalui alternatif operasional yang tertib, serta perhatian kepada kelompok rentan.",
    source_reference:
      "Kisi-Kisi Resmi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik",
    is_paraphrased: true,
    status: "disetujui",
    embedding: null,
    created_at: "2024-08-01T00:00:00.000Z",
  },
];

function buatOpsiPilihanGanda(
  pilihan: [string, string, string, string, string],
  indeksBenar: 0 | 1 | 2 | 3 | 4
): PilihanJawabanSoal[] {
  return pilihan.map((teks, idx) => ({
    kunci: HURUF_OPSI[idx],
    teks,
    skor: idx === indeksBenar ? 5 : 0,
  }));
}

export const DAFTAR_ID_PAKET_SIMULASI_RESMI = [
  "paket-perdana-gratis",
  "paket-intensif-skd",
  "paket-akbar-skd-1",
  "paket-akbar-skd-2",
  "paket-akbar-skd-3",
  "paket-akbar-skd-4",
  "paket-akbar-skd-5",
] as const;

const PETA_SET_AKBAR: Record<
  string,
  { awalanId: string; indeksAkbar: number }
> = {
  "paket-akbar-skd-1": { awalanId: "akb1", indeksAkbar: 0 },
  "paket-akbar-skd-2": { awalanId: "akb2", indeksAkbar: 1 },
  "paket-akbar-skd-3": { awalanId: "akb3", indeksAkbar: 2 },
  "paket-akbar-skd-4": { awalanId: "akb4", indeksAkbar: 3 },
  "paket-akbar-skd-5": { awalanId: "akb5", indeksAkbar: 4 },
};

function pilihSumberSetSoal(idPaket?: string): {
  awalanId: string;
  setTwk: DefinisiButirTWK[];
  setTiu: DefinisiButirTIU[];
  setTkp: DefinisiButirTKP[];
} {
  if (idPaket && idPaket in PETA_SET_AKBAR) {
    const { awalanId, indeksAkbar } = PETA_SET_AKBAR[idPaket];
    return {
      awalanId,
      setTwk: BANK_SOAL_TWK_AKBAR_SETS[indeksAkbar],
      setTiu: BANK_SOAL_TIU_AKBAR_SETS[indeksAkbar],
      setTkp: BANK_SOAL_TKP_AKBAR_SETS[indeksAkbar],
    };
  }
  const pakaiSetDua =
    idPaket === "paket-intensif-skd" || idPaket === "paket-terpadu-cpns";
  return {
    awalanId: pakaiSetDua ? "int" : "skd",
    setTwk: pakaiSetDua ? BANK_SOAL_TWK_SET_2 : BANK_SOAL_TWK_SET_1,
    setTiu: pakaiSetDua ? BANK_SOAL_TIU_SET_2 : BANK_SOAL_TIU_SET_1,
    setTkp: pakaiSetDua ? BANK_SOAL_TKP_SET_2 : BANK_SOAL_TKP_SET_1,
  };
}

/**
 * Membangun paket lengkap 110 soal simulasi CAT SKD berdasarkan paket tryout.
 * - `paket-perdana-gratis` (atau default): Set 1 (110 butir soal unik)
 * - `paket-intensif-skd` / `paket-terpadu-cpns`: Set 2 (110 butir soal unik berbeda total)
 * - `paket-akbar-skd-1` .. `paket-akbar-skd-5`: 5 paket Akbar (@ 110 butir soal unik)
 */
export function bangunBankSoalSimulasi110(idPaket?: string): SoalSimulasiCAT[] {
  const { awalanId, setTwk, setTiu, setTkp } = pilihSumberSetSoal(idPaket);

  const daftar110: SoalSimulasiCAT[] = [];

  // 1..30: TWK (30 butir)
  setTwk.forEach((item, idx) => {
    const nomor = idx + 1;
    daftar110.push({
      id: `${awalanId}-twk-${nomor}`,
      nomor_urut: nomor,
      stage: "SKD",
      category: "TWK",
      sub_topic: item.sub_topic,
      difficulty: item.difficulty,
      question_text: item.question_text,
      image_url: null,
      options: buatOpsiPilihanGanda(item.pilihan, item.indeksBenar),
      explanation: item.explanation,
      source_reference: item.source_reference,
      is_paraphrased: true,
      status: "disetujui",
      embedding: null,
      created_at: "2024-08-01T00:00:00.000Z",
    });
  });

  // 31..65: TIU (35 butir)
  setTiu.forEach((item, idx) => {
    const nomor = 31 + idx;
    daftar110.push({
      id: `${awalanId}-tiu-${nomor}`,
      nomor_urut: nomor,
      stage: "SKD",
      category: "TIU",
      sub_topic: item.sub_topic,
      difficulty: item.difficulty,
      question_text: item.question_text,
      image_url: null,
      options: buatOpsiPilihanGanda(item.pilihan, item.indeksBenar),
      explanation: item.explanation,
      source_reference: item.source_reference,
      is_paraphrased: true,
      status: "disetujui",
      embedding: null,
      created_at: "2024-08-01T00:00:00.000Z",
    });
  });

  // 66..110: TKP (45 butir)
  setTkp.forEach((item, idx) => {
    const nomor = 66 + idx;
    daftar110.push({
      id: `${awalanId}-tkp-${nomor}`,
      nomor_urut: nomor,
      stage: "SKD",
      category: "TKP",
      sub_topic: item.sub_topic,
      difficulty: item.difficulty,
      question_text: item.question_text,
      image_url: null,
      options: item.pilihan.map((opsi, iOpsi) => ({
        kunci: HURUF_OPSI[iOpsi],
        teks: opsi.teks,
        skor: opsi.skor,
      })),
      explanation: item.explanation,
      source_reference: item.source_reference,
      is_paraphrased: true,
      status: "disetujui",
      embedding: null,
      created_at: "2024-08-01T00:00:00.000Z",
    });
  });

  return daftar110;
}

/**
 * Menggabungkan seluruh 7 paket simulasi CAT SKD resmi (770 butir soal unik)
 * untuk kebutuhan indeks RRF lokal dan pengecekan bank soal lengkap.
 */
export function bangunSemuaBankSoalSimulasi(): SoalSimulasiCAT[] {
  return DAFTAR_ID_PAKET_SIMULASI_RESMI.flatMap((idPaket) =>
    bangunBankSoalSimulasi110(idPaket)
  );
}

/**
 * Menghapus kunci jawaban (`skor`), `explanation`, dan `source_reference`
 * sebelum mengirim daftar soal ujian ke browser peserta.
 */
export function hapusKunciJawabanUntukUjian(
  daftarSoal: SoalSimulasiCAT[]
): SoalSimulasiCATTerproteksi[] {
  return daftarSoal.map((soal) => ({
    id: soal.id,
    nomor_urut: soal.nomor_urut,
    stage: "SKD",
    category: (soal.category as KategoriSubtesSKD) || "TWK",
    sub_topic: soal.sub_topic,
    difficulty: soal.difficulty,
    question_text: soal.question_text,
    image_url: soal.image_url,
    options: soal.options.map((opsi) => ({
      kunci: opsi.kunci,
      teks: opsi.teks,
    })),
  }));
}

export function formatDetikKeJamMenitDetik(totalDetik: number): string {
  const aman = Math.max(0, Math.floor(totalDetik));
  const jam = Math.floor(aman / 3600);
  const menit = Math.floor((aman % 3600) / 60);
  const detik = aman % 60;
  return [jam, menit, detik]
    .map((angka) => String(angka).padStart(2, "0"))
    .join(":");
}
