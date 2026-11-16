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

export const CONTOH_FORMAT_CSV_SOAL = [
  "kategori;sub_topik;kesulitan;pertanyaan;opsi_a;opsi_b;opsi_c;opsi_d;opsi_e;kunci_atau_skor;pembahasan;referensi",
  'TWK;Integritas;sedang;"Pegawai menerima bingkisan hari raya dari rekanan tender yang sedang dievaluasi timnya. Sikap ASN yang paling tepat adalah...";Menerima dengan syarat dibagi rata ke tim;Menolak secara sopan dan melaporkan ke Unit Pengendalian Gratifikasi (UPG);Menitipkan di resepsionis agar tidak terlihat;Meminta rekanan menukar dalam bentuk donasi;Membawanya pulang agar tidak menyinggung pemberi;B;"Setiap pemberian yang berkaitan dengan jabatan dan berpotensi benturan kepentingan wajib ditolak serta dilaporkan kepada UPG/KPK.";"UU No. 20 Tahun 2001 & Nilai Dasar BerAKHLAK"',
  'TKP;Pelayanan Publik;sedang;"Loket layanan daring mengalami gangguan saat jam sibuk dan antrean lansia menumpuk. Langkah Anda adalah...";Membuka pencatatan manual sementara serta mendahulukan kelompok rentan secara tertib;Meminta seluruh pemohon pulang;Menunggu tim pusat tanpa memberi informasi;Menyuruh pemohon mengantre sampai sore;Menghentikan seluruh layanan loket;5-1-3-2-4;"Nilai tertinggi TKP Pelayanan Publik menunjukkan inisiatif menjaga keberlanjutan layanan serta empati kepada kelompok rentan.";"Kepmenpan-RB Nomor 321 Tahun 2024"',
].join("\n");

/**
 * Membuat satu draf soal kosong siap diisi manual oleh Admin di Studio Kurasi.
 */
export function buatDrafSoalKosong(
  kategori: KategoriSubtesSKD = "TWK",
  nomorUrut: number = 1
): DrafKurasiSoal {
  const subTopikDefault = DAFTAR_SUB_TOPIK_RESMI_SKD[kategori][0];
  const huruf: Array<"A" | "B" | "C" | "D" | "E"> = ["A", "B", "C", "D", "E"];
  const skorBawaan = kategori === "TKP" ? [5, 4, 3, 2, 1] : [5, 0, 0, 0, 0];

  return {
    id_sementara: `manual-${Date.now()}-${nomorUrut}`,
    stage: "SKD",
    category: kategori,
    sub_topic: subTopikDefault,
    difficulty: "sedang",
    teks_soal_asli: "",
    pilihan_asli: [],
    question_text: "",
    image_url: null,
    options: huruf.map((kunci, idx) => ({
      kunci,
      teks: "",
      skor: skorBawaan[idx],
    })),
    explanation: "",
    source_reference: `Kepmenpan-RB Nomor 321 Tahun 2024 — ${kategori} (${subTopikDefault})`,
    is_paraphrased: false,
    status: "draf",
    metode_pencarian_rag: "tsvector_bahasa_indonesia",
  };
}

function pisahBarisCsv(baris: string, pemisah: ";" | ","): string[] {
  const hasil: string[] = [];
  let nilai = "";
  let dalamKutip = false;

  for (let i = 0; i < baris.length; i++) {
    const ch = baris[i];
    if (ch === '"') {
      if (dalamKutip && baris[i + 1] === '"') {
        nilai += '"';
        i += 1;
      } else {
        dalamKutip = !dalamKutip;
      }
      continue;
    }
    if (ch === pemisah && !dalamKutip) {
      hasil.push(nilai.trim());
      nilai = "";
      continue;
    }
    nilai += ch;
  }
  hasil.push(nilai.trim());
  return hasil;
}

function terjemahkanSkorMassal(
  kategori: KategoriSubtesSKD,
  kolomKunci: string
): number[] {
  const bersih = kolomKunci.trim();
  const daftarAngka = bersih
    .split(/[-,\s|/]+/)
    .map((x) => Number(x))
    .filter((n) => Number.isFinite(n));

  if (daftarAngka.length === 5) {
    return daftarAngka;
  }

  const indeksHuruf: Record<string, number> = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
  };
  const posisiBenar = indeksHuruf[bersih.toUpperCase()];
  if (typeof posisiBenar === "number") {
    if (kategori === "TKP") {
      // Berikan 5 pada kunci terbaik dan 4..1 pada opsi lainnya
      let sisaSkor = 4;
      return [0, 1, 2, 3, 4].map((idx) =>
        idx === posisiBenar ? 5 : sisaSkor--
      );
    }
    return [0, 1, 2, 3, 4].map((idx) => (idx === posisiBenar ? 5 : 0));
  }

  return kategori === "TKP" ? [5, 4, 3, 2, 1] : [5, 0, 0, 0, 0];
}

/**
 * Mengurai impor massal soal dalam format JSON (array atau { daftar_soal })
 * maupun CSV/TSV berpemisah `;` atau `,` menjadi draf siap kurasi.
 */
export function uraiImporMassalCsvAtauJson(teks: string): DrafKurasiSoal[] {
  const bersih = teks.trim();
  if (!bersih) {
    throw new Error("Teks impor CSV/JSON tidak boleh kosong.");
  }

  if (bersih.startsWith("[") || bersih.startsWith("{")) {
    const dataJson = uraiJsonAI<
      Record<string, unknown>[] | { daftar_soal?: Record<string, unknown>[] }
    >(bersih);
    const daftarMentah = Array.isArray(dataJson)
      ? dataJson
      : Array.isArray(dataJson.daftar_soal)
        ? dataJson.daftar_soal
        : [];
    const hasilJson = daftarMentah
      .map((item, idx) => normalisasiButirSoalEkstraksi(item, idx))
      .filter((butir) => Boolean(butir.question_text));
    if (hasilJson.length === 0) {
      throw new Error(
        "JSON valid tetapi tidak ditemukan butir soal dengan kolom 'question_text'."
      );
    }
    return hasilJson;
  }

  const semuaBaris = bersih
    .split(/\r?\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  if (semuaBaris.length === 0) {
    throw new Error("Tidak ada baris soal pada masukan CSV.");
  }

  const barisPertama = semuaBaris[0];
  const pemisah: ";" | "," = barisPertama.includes(";") ? ";" : ",";
  const selPertama = pisahBarisCsv(barisPertama, pemisah);
  const adalahHeader =
    /^(kategori|category)$/i.test(selPertama[0] || "") ||
    /pertanyaan|question_text/i.test(selPertama[3] || "");
  const barisData = adalahHeader ? semuaBaris.slice(1) : semuaBaris;

  const hasilCsv: DrafKurasiSoal[] = [];
  const huruf: Array<"A" | "B" | "C" | "D" | "E"> = ["A", "B", "C", "D", "E"];

  barisData.forEach((baris, idx) => {
    const sel = pisahBarisCsv(baris, pemisah);
    if (sel.length < 10) {
      return;
    }
    const katMentah = (sel[0] || "TWK").toUpperCase();
    const kategori: KategoriSubtesSKD =
      katMentah === "TIU" || katMentah === "TKP" ? katMentah : "TWK";
    const subTopik = sel[1] || "";
    const kesulitan = sel[2] || "sedang";
    const pertanyaan = sel[3] || "";
    if (!pertanyaan.trim()) return;

    const bobot = terjemahkanSkorMassal(kategori, sel[9] || "A");
    const opsi = huruf.map((kunci, iOpsi) => ({
      kunci,
      teks: sel[4 + iOpsi] || `Pilihan ${kunci}`,
      skor: bobot[iOpsi] ?? 0,
    }));

    hasilCsv.push(
      normalisasiButirSoalEkstraksi(
        {
          id_sementara: `impor-${idx + 1}`,
          category: kategori,
          sub_topic: subTopik,
          difficulty: kesulitan,
          teks_soal_asli: pertanyaan,
          question_text: pertanyaan,
          options: opsi,
          explanation: sel[10] || "",
          source_reference: sel[11] || "",
          status: "draf",
        },
        idx
      )
    );
  });

  if (hasilCsv.length === 0) {
    throw new Error(
      "Format CSV tidak terbaca. Gunakan 12 kolom berurutan (pemisah `;`): kategori;sub_topik;kesulitan;pertanyaan;opsi_a;opsi_b;opsi_c;opsi_d;opsi_e;kunci_atau_skor;pembahasan;referensi."
    );
  }

  return hasilCsv;
}
