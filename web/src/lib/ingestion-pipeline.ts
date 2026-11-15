/**
 * Pipeline Kurasi & Ekstraksi Multimodal (Regulasi & Bank Soal SKD) — LOLOS CPNS.
 *
 * Mengacu pada Diktum KEDUA Keputusan Menteri PANRB Nomor 321 Tahun 2024.
 * Seluruh status, tingkat kesulitan, label kisi-kisi, dan hasil parafrase
 * wajib menggunakan Bahasa Indonesia yang baik dan benar.
 */

import type {
  KategoriSubtesSKD,
  PilihanJawabanSoal,
  StatusSoal,
  TahapSeleksi,
  TingkatKesulitanSoal,
} from "../types/database.ts";

export const DAFTAR_SUB_TOPIK_RESMI_SKD: Record<KategoriSubtesSKD, string[]> = {
  TWK: [
    "Nasionalisme",
    "Integritas",
    "Bela Negara",
    "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    "Bahasa Negara",
  ],
  TIU: [
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
  TKP: [
    "Pelayanan Publik",
    "Jejaring Kerja",
    "Sosial Budaya",
    "Teknologi Informasi dan Komunikasi (TIK)",
    "Profesionalisme",
    "Anti Radikalisme",
  ],
};

export interface PilihanJawabanAsli {
  kunci: "A" | "B" | "C" | "D" | "E";
  teks: string;
}

export interface DrafKurasiSoal {
  id_sementara: string;
  stage: TahapSeleksi;
  category: KategoriSubtesSKD;
  sub_topic: string;
  difficulty: TingkatKesulitanSoal;
  teks_soal_asli: string;
  pilihan_asli: PilihanJawabanAsli[];
  question_text: string;
  image_url: string | null;
  options: PilihanJawabanSoal[];
  explanation: string;
  source_reference: string;
  is_paraphrased: boolean;
  status: StatusSoal;
  metode_pencarian_rag: "pgvector_768" | "tsvector_bahasa_indonesia";
}

/**
 * Membersihkan pagar markdown ```json (jika ada) dan mengurai teks JSON keluaran AI secara aman.
 */
export function uraiJsonAI<T = Record<string, unknown>>(teksMentah: string): T {
  let bersih = teksMentah.trim();
  if (bersih.startsWith("```")) {
    const baris = bersih.split(/\r?\n/);
    if (baris[0]?.startsWith("```")) {
      baris.shift();
    }
    if (baris[baris.length - 1]?.trim().startsWith("```")) {
      baris.pop();
    }
    bersih = baris.join("\n").trim();
  }
  return JSON.parse(bersih) as T;
}

/**
 * Memvalidasi dan menormalisasi butir soal hasil ekstraksi AI agar 100% sesuai
 * dengan skema tabel `questions` dan kisi-kisi resmi Kepmenpan-RB Nomor 321 Tahun 2024.
 */
export function normalisasiButirSoalEkstraksi(
  input: Record<string, unknown>,
  indeks: number = 0
): DrafKurasiSoal {
  const kategoriMentah = String(input.category || "TIU")
    .toUpperCase()
    .trim();
  const category: KategoriSubtesSKD =
    kategoriMentah === "TWK" ||
    kategoriMentah === "TIU" ||
    kategoriMentah === "TKP"
      ? kategoriMentah
      : "TWK";

  const daftarSubResmi = DAFTAR_SUB_TOPIK_RESMI_SKD[category];
  const subTopikMentah = String(input.sub_topic || "").trim();
  let sub_topic = daftarSubResmi[0];

  if (daftarSubResmi.includes(subTopikMentah)) {
    sub_topic = subTopikMentah;
  } else if (subTopikMentah) {
    const cocokParsial = daftarSubResmi.find(
      (item) =>
        item.toLowerCase().includes(subTopikMentah.toLowerCase()) ||
        subTopikMentah.toLowerCase().includes(item.toLowerCase())
    );
    if (cocokParsial) {
      sub_topic = cocokParsial;
    }
  }

  const kesulitanMentah = String(input.difficulty || "sedang")
    .toLowerCase()
    .trim();
  const petaKesulitan: Record<string, TingkatKesulitanSoal> = {
    mudah: "mudah",
    easy: "mudah",
    sedang: "sedang",
    medium: "sedang",
    sulit: "sulit",
    hard: "sulit",
  };
  const difficulty: TingkatKesulitanSoal =
    petaKesulitan[kesulitanMentah] || "sedang";

  const statusMentah = String(input.status || "draf")
    .toLowerCase()
    .trim();
  const petaStatus: Record<string, StatusSoal> = {
    draf: "draf",
    draft: "draf",
    disetujui: "disetujui",
    approved: "disetujui",
    diarsipkan: "diarsipkan",
    archived: "diarsipkan",
  };
  const status: StatusSoal = petaStatus[statusMentah] || "draf";

  const kunciStandar: Array<"A" | "B" | "C" | "D" | "E"> = [
    "A",
    "B",
    "C",
    "D",
    "E",
  ];
  const opsiInput = Array.isArray(input.options) ? input.options : [];

  const options: PilihanJawabanSoal[] = kunciStandar.map((huruf, idx) => {
    const item = (opsiInput[idx] || {}) as Record<string, unknown>;
    const teks = String(
      item.teks ?? item.text ?? `Pilihan jawaban ${huruf}`
    ).trim();
    const skorMentah = Number(item.skor ?? item.score ?? 0);
    const skor = Number.isFinite(skorMentah) ? skorMentah : 0;
    return {
      kunci: huruf,
      teks,
      skor,
    };
  });

  const pilihanAsliInput = Array.isArray(input.pilihan_asli)
    ? input.pilihan_asli
    : [];
  const pilihan_asli: PilihanJawabanAsli[] = kunciStandar.map((huruf, idx) => {
    const item = (pilihanAsliInput[idx] || {}) as Record<string, unknown>;
    return {
      kunci: huruf,
      teks: String(item.teks ?? item.text ?? options[idx].teks).trim(),
    };
  });

  const question_text = String(input.question_text || "").trim();
  const teks_soal_asli = String(
    input.teks_soal_asli || question_text
  ).trim();

  return {
    id_sementara: String(input.id_sementara || `draf-${indeks + 1}`),
    stage: "SKD",
    category,
    sub_topic,
    difficulty,
    teks_soal_asli,
    pilihan_asli,
    question_text,
    image_url: typeof input.image_url === "string" ? input.image_url : null,
    options,
    explanation: String(
      input.explanation ||
        "Pembahasan disusun mengacu pada kisi-kisi resmi Kepmenpan-RB Nomor 321 Tahun 2024."
    ).trim(),
    source_reference: String(
      input.source_reference ||
        `Kepmenpan-RB Nomor 321 Tahun 2024 — ${category} (${sub_topic})`
    ).trim(),
    is_paraphrased: true,
    status,
    metode_pencarian_rag:
      input.metode_pencarian_rag === "pgvector_768"
        ? "pgvector_768"
        : "tsvector_bahasa_indonesia",
  };
}

/**
 * Contoh hasil ekstraksi & parafrase soal pindaian buku cetak (TWK, TIU, TKP)
 * untuk keperluan pratinjau berdampingan di Studio Kurasi Soal Admin.
 */
export const CONTOH_HASIL_EKSTRAKSI_SOAL_SKD: DrafKurasiSoal[] = [
  {
    id_sementara: "draf-tiu-01",
    stage: "SKD",
    category: "TIU",
    sub_topic: "Kemampuan Numerik - Perbandingan Kuantitatif",
    difficulty: "sedang",
    teks_soal_asli:
      "Sebuah proyek pembangunan jembatan dapat diselesaikan oleh 18 pekerja dalam waktu 40 hari. Jika proyek tersebut harus selesai dalam 24 hari, berapa tambahan pekerja yang dibutuhkan?",
    pilihan_asli: [
      { kunci: "A", teks: "10 orang" },
      { kunci: "B", teks: "12 orang" },
      { kunci: "C", teks: "15 orang" },
      { kunci: "D", teks: "24 orang" },
      { kunci: "E", teks: "30 orang" },
    ],
    question_text:
      "Tim digitalisasi arsip di suatu instansi pemerintah daerah yang beranggotakan 24 petugas mampu menuntaskan pemindaian dokumen dalam waktu 35 hari kerja. Apabila pimpinan menginstruksikan agar seluruh arsip selesai dipindai dalam waktu 20 hari kerja, berapakah jumlah petugas tambahan yang perlu diperbantukan?",
    image_url: null,
    options: [
      { kunci: "A", teks: "14 petugas", skor: 0 },
      { kunci: "B", teks: "16 petugas", skor: 0 },
      { kunci: "C", teks: "18 petugas", skor: 5 },
      { kunci: "D", teks: "20 petugas", skor: 0 },
      { kunci: "E", teks: "42 petugas", skor: 0 },
    ],
    explanation:
      "Soal ini menggunakan konsep perbandingan berbalik nilai (semakin singkat target waktu pengerjaan, semakin banyak tenaga yang dibutuhkan). Total beban kerja = 24 petugas × 35 hari = 840 hari-orang. Agar selesai dalam 20 hari, total petugas yang diperlukan = 840 ÷ 20 = 42 petugas. Dengan demikian, tambahan petugas yang dibutuhkan adalah 42 - 24 = 18 petugas.",
    source_reference:
      "Kisi-Kisi Resmi Kepmenpan-RB Nomor 321 Tahun 2024 — TIU (Kemampuan Numerik - Perbandingan Kuantitatif)",
    is_paraphrased: true,
    status: "draf",
    metode_pencarian_rag: "tsvector_bahasa_indonesia",
  },
  {
    id_sementara: "draf-twk-02",
    stage: "SKD",
    category: "TWK",
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "sedang",
    teks_soal_asli:
      "Pasal 28J ayat (2) UUD 1945 mengatur bahwa dalam menjalankan hak dan kebebasannya, setiap orang wajib tunduk kepada pembatasan yang ditetapkan dengan undang-undang. Apa tujuan pembatasan tersebut?",
    pilihan_asli: [
      {
        kunci: "A",
        teks: "Menjaga stabilitas kekuasaan pemerintah pusat di daerah.",
      },
      {
        kunci: "B",
        teks: "Menjamin pengakuan serta penghormatan atas hak asasi orang lain dan memenuhi tuntutan yang adil sesuai pertimbangan moral, nilai-nilai agama, keamanan, dan ketertiban umum.",
      },
      {
        kunci: "C",
        teks: "Menyeragamkan pandangan politik warga negara dalam masyarakat demokratis.",
      },
      {
        kunci: "D",
        teks: "Memberikan kewenangan mutlak kepada aparat penegak hukum.",
      },
      {
        kunci: "E",
        teks: "Membatasi partisipasi masyarakat dalam penyusunan kebijakan publik.",
      },
    ],
    question_text:
      "Dalam penyelenggaraan unjuk rasa di ruang publik, konstitusi menjamin kebebasan menyampaikan pendapat sekaligus mengatur adanya pembatasan melalui undang-undang sebagaimana termaktub dalam Pasal 28J ayat (2) UUD NRI Tahun 1945. Esensi konstitusional dari pembatasan hak tersebut adalah...",
    image_url: null,
    options: [
      {
        kunci: "A",
        teks: "Memberikan keleluasaan penuh kepada pemerintah daerah untuk melarang seluruh bentuk penyampaian pendapat di muka umum.",
        skor: 0,
      },
      {
        kunci: "B",
        teks: "Menjamin pengakuan serta penghormatan atas hak dan kebebasan orang lain serta memenuhi tuntutan yang adil sesuai pertimbangan moral, nilai agama, keamanan, dan ketertiban umum dalam masyarakat demokratis.",
        skor: 5,
      },
      {
        kunci: "C",
        teks: "Mengutamakan kepentingan pertumbuhan ekonomi nasional di atas hak konstitusional warga negara.",
        skor: 0,
      },
      {
        kunci: "D",
        teks: "Menyerahkan pengaturan hak asasi manusia sepenuhnya pada peraturan kepala daerah tanpa perlu undang-undang.",
        skor: 0,
      },
      {
        kunci: "E",
        teks: "Menghapuskan hak menyampaikan pendapat apabila kritik ditujukan kepada lembaga negara.",
        skor: 0,
      },
    ],
    explanation:
      "Pasal 28J ayat (2) UUD NRI Tahun 1945 menegaskan bahwa pelaksanaan hak asasi manusia di Indonesia tidak bersifat bebas tanpa batas, melainkan wajib tunduk pada pembatasan yang ditetapkan dengan Undang-Undang semata-mata untuk menjamin pengakuan serta penghormatan atas hak dan kebebasan orang lain dan untuk memenuhi tuntutan yang adil sesuai pertimbangan moral, nilai-nilai agama, keamanan, dan ketertiban umum dalam suatu masyarakat demokratis.",
    source_reference:
      "Pasal 28J Ayat (2) UUD NRI Tahun 1945 & Kisi-Kisi TWK Kepmenpan-RB Nomor 321 Tahun 2024",
    is_paraphrased: true,
    status: "draf",
    metode_pencarian_rag: "tsvector_bahasa_indonesia",
  },
];
