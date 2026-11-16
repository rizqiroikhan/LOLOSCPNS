/**
 * AI Evaluation Harness & Golden Dataset Emas (36 Skenario TWK/TIU/TKP) — LOLOS CPNS.
 *
 * Mengukur 3 pilar kualitas AI secara otomatis & terulang setiap kali prompt atau model diubah:
 * 1. Kualitas Hybrid Retrieval (12 skenario: Recall@3 lintas TWK, TIU, TKP).
 * 2. Verifikasi Matematis & Struktur Soal AI (12 skenario: soal valid, perbaikan kunci tertukar, penolakan halusinasi).
 * 3. Kepatuhan Tutor Sokratik (12 skenario: bebas istilah teknis internal, bimbingan bertahap, berbahasa baku).
 */

import { panggilChatAI } from "./ai-client.ts";
import { verifikasiButirSoalAI } from "./ai-math-verifier.ts";
import { buatBimbinganSokratikKontekstual } from "./gap-analyzer.ts";
import { ambilKonteksHybridSKD } from "./hybrid-retriever.ts";
import type { KategoriSubtesSKD, QuestionRow } from "../types/database.ts";

export interface SkenarioEvalRetrieval {
  id: string;
  kategori: KategoriSubtesSKD;
  sub_topik: string;
  kueri: string;
  kata_kunci_wajib: string[];
}

export interface SkenarioEvalVerifikasiSoal {
  id: string;
  deskripsi: string;
  soal: QuestionRow;
  verification_formula?: string | null;
  expected_answer?: number | null;
  harus_lolos: boolean;
  harus_diperbaiki: boolean;
}

export interface SkenarioEvalSokratik {
  id: string;
  soal: Pick<
    QuestionRow,
    "category" | "sub_topic" | "question_text" | "options" | "explanation"
  >;
  jawaban_peserta?: string;
  pertanyaan_peserta: string;
  kata_kunci_konsep: string[];
}

export const DATASET_EMAS_RETRIEVAL_12: SkenarioEvalRetrieval[] = [
  {
    id: "ret-twk-1",
    kategori: "TWK",
    sub_topik: "Integritas",
    kueri: "Konflik kepentingan gratifikasi aparatur menolak pemberian rekanan tender",
    kata_kunci_wajib: ["integritas", "gratifikasi"],
  },
  {
    id: "ret-twk-2",
    kategori: "TWK",
    sub_topik: "Nasionalisme",
    kueri: "Persatuan bangsa keberagaman budaya produk dalam negeri",
    kata_kunci_wajib: ["nasionalisme", "persatuan"],
  },
  {
    id: "ret-twk-3",
    kategori: "TWK",
    sub_topik: "Bela Negara",
    kueri: "Ancaman siber ketahanan nasional partisipasi warga UUD 1945 Pasal 27",
    kata_kunci_wajib: ["bela negara", "ketahanan"],
  },
  {
    id: "ret-twk-4",
    kategori: "TWK",
    sub_topik: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    kueri: "Pancasila pembatasan hak asasi undang-undang Pasal 28J",
    kata_kunci_wajib: ["pancasila", "uud"],
  },
  {
    id: "ret-tiu-1",
    kategori: "TIU",
    sub_topik: "Kemampuan Numerik - Deret Angka",
    kueri: "Pola selisih bertingkat barisan bilangan suku selanjutnya",
    kata_kunci_wajib: ["deret", "selisih"],
  },
  {
    id: "ret-tiu-2",
    kategori: "TIU",
    sub_topik: "Kemampuan Numerik - Perbandingan Kuantitatif",
    kueri: "Perbandingan berbalik nilai jumlah pekerja waktu pengerjaan proyek",
    kata_kunci_wajib: ["perbandingan", "pekerja"],
  },
  {
    id: "ret-tiu-3",
    kategori: "TIU",
    sub_topik: "Kemampuan Verbal - Silogisme",
    kueri: "Penarikan kesimpulan logika silogisme premis mayor minor",
    kata_kunci_wajib: ["silogisme", "kesimpulan"],
  },
  {
    id: "ret-tiu-4",
    kategori: "TIU",
    sub_topik: "Kemampuan Verbal - Analitis",
    kueri: "Urutan duduk jadwal antrean logika posisi syarat",
    kata_kunci_wajib: ["analitis", "urutan"],
  },
  {
    id: "ret-tkp-1",
    kategori: "TKP",
    sub_topik: "Pelayanan Publik",
    kueri: "Antrean lansia disabilitas gangguan sistem layanan prima empati",
    kata_kunci_wajib: ["pelayanan", "solusi"],
  },
  {
    id: "ret-tkp-2",
    kategori: "TKP",
    sub_topik: "Jejaring Kerja",
    kueri: "Kolaborasi lintas bidang miskomunikasi tim koordinasi",
    kata_kunci_wajib: ["jejaring", "kolaborasi"],
  },
  {
    id: "ret-tkp-3",
    kategori: "TKP",
    sub_topik: "Teknologi Informasi dan Komunikasi (TIK)",
    kueri: "Keamanan data siber phishing sistem informasi layanan digital",
    kata_kunci_wajib: ["teknologi", "data"],
  },
  {
    id: "ret-tkp-4",
    kategori: "TKP",
    sub_topik: "Anti Radikalisme",
    kueri: "Ujaran kebencian toleransi Pancasila keutuhan NKRI lingkungan kerja",
    kata_kunci_wajib: ["radikalisme", "toleransi"],
  },
];

function buatSoalEval(
  id: string,
  kategori: KategoriSubtesSKD,
  subTopik: string,
  teks: string,
  opsiSkor: Array<[string, number]>,
  penjelasan: string = "Penjelasan resmi."
): QuestionRow {
  const huruf: Array<"A" | "B" | "C" | "D" | "E"> = ["A", "B", "C", "D", "E"];
  return {
    id,
    stage: "SKD",
    category: kategori,
    sub_topic: subTopik,
    difficulty: "sedang",
    question_text: teks,
    image_url: null,
    options: huruf.map((kunci, idx) => ({
      kunci,
      teks: opsiSkor[idx][0],
      skor: opsiSkor[idx][1],
    })),
    explanation: penjelasan,
    source_reference: "Dataset Evaluasi Emas LOLOS CPNS",
    is_paraphrased: true,
    status: "disetujui",
    embedding: null,
    created_at: "2026-11-16T00:00:00.000Z",
  };
}

export const DATASET_EMAS_VERIFIKASI_SOAL_12: SkenarioEvalVerifikasiSoal[] = [
  {
    id: "ver-1-valid-twk",
    deskripsi: "Soal TWK valid standar (+5 tunggal)",
    soal: buatSoalEval("v1", "TWK", "Integritas", "Sikap terhadap gratifikasi?", [
      ["Tolak & lapor UPG", 5],
      ["Terima diam-diam", 0],
      ["Bagikan ke staf", 0],
      ["Simpan di laci", 0],
      ["Tunggu atasan", 0],
    ]),
    harus_lolos: true,
    harus_diperbaiki: false,
  },
  {
    id: "ver-2-duplikat-twk",
    deskripsi: "Soal TWK dengan pilihan ganda duplikat wajib ditolak",
    soal: buatSoalEval("v2", "TWK", "Nasionalisme", "Upaya persatuan?", [
      ["Menjaga persatuan", 5],
      ["Menjaga persatuan", 0],
      ["Opsi C", 0],
      ["Opsi D", 0],
      ["Opsi E", 0],
    ]),
    harus_lolos: false,
    harus_diperbaiki: false,
  },
  {
    id: "ver-3-multi-kunci",
    deskripsi: "Soal TWK dengan dua kunci skor 5 wajib ditolak",
    soal: buatSoalEval("v3", "TWK", "Bela Negara", "Bela negara pasal 27?", [
      ["Opsi A", 5],
      ["Opsi B", 5],
      ["Opsi C", 0],
      ["Opsi D", 0],
      ["Opsi E", 0],
    ]),
    harus_lolos: false,
    harus_diperbaiki: false,
  },
  {
    id: "ver-4-bahasa-valid",
    deskripsi: "Soal TWK Bahasa Negara valid",
    soal: buatSoalEval("v4", "TWK", "Bahasa Negara", "Kalimat efektif baku?", [
      ["Opsi A", 0],
      ["Opsi B", 5],
      ["Opsi C", 0],
      ["Opsi D", 0],
      ["Opsi E", 0],
    ]),
    harus_lolos: true,
    harus_diperbaiki: false,
  },
  {
    id: "ver-5-tiu-formula-valid",
    deskripsi: "Soal TIU Soal Cerita cocok formula",
    soal: buatSoalEval(
      "v5",
      "TIU",
      "Kemampuan Numerik - Soal Cerita",
      "Harga Rp200.000 diskon 25% lalu ditambah biaya Rp10.000...",
      [
        ["Rp150.000", 0],
        ["Rp160.000", 5],
        ["Rp170.000", 0],
        ["Rp180.000", 0],
        ["Rp190.000", 0],
      ]
    ),
    verification_formula: "200000 * (1 - 25%) + 10000",
    expected_answer: 160000,
    harus_lolos: true,
    harus_diperbaiki: false,
  },
  {
    id: "ver-6-tiu-repair-key",
    deskripsi: "AI salah melabeli kunci skor 5 padahal angka benar ada di opsi D -> auto-repair",
    soal: buatSoalEval(
      "v6",
      "TIU",
      "Kemampuan Numerik - Perbandingan Kuantitatif",
      "12 mesin selesai 15 hari, jika 18 mesin butuh berapa hari?",
      [
        ["8 hari", 5],
        ["9 hari", 0],
        ["12 hari", 0],
        ["10 hari", 0],
        ["14 hari", 0],
      ]
    ),
    verification_formula: "(12 * 15) / 18",
    expected_answer: 10,
    harus_lolos: true,
    harus_diperbaiki: true,
  },
  {
    id: "ver-7-tiu-halusinasi",
    deskripsi: "Halusinasi aritmetika expected_answer tidak cocok rumus wajib ditolak",
    soal: buatSoalEval(
      "v7",
      "TIU",
      "Kemampuan Numerik - Berhitung",
      "Hitung hasil dari (45 + 15) * 3...",
      [
        ["160", 0],
        ["170", 0],
        ["190", 5],
        ["200", 0],
        ["210", 0],
      ]
    ),
    verification_formula: "(45 + 15) * 3",
    expected_answer: 190,
    harus_lolos: false,
    harus_diperbaiki: false,
  },
  {
    id: "ver-8-tiu-deret-valid",
    deskripsi: "Deret angka bertingkat valid 2, 5, 10, 17, 26 -> 37",
    soal: buatSoalEval(
      "v8",
      "TIU",
      "Kemampuan Numerik - Deret Angka",
      "Lanjutan deret: 2, 5, 10, 17, 26, ...",
      [
        ["35", 0],
        ["36", 0],
        ["37", 5],
        ["38", 0],
        ["39", 0],
      ]
    ),
    harus_lolos: true,
    harus_diperbaiki: false,
  },
  {
    id: "ver-9-tkp-valid",
    deskripsi: "Soal TKP dengan skala lengkap 1..5",
    soal: buatSoalEval("v9", "TKP", "Pelayanan Publik", "Pendekatan antrean?", [
      ["Skor 5", 5],
      ["Skor 4", 4],
      ["Skor 3", 3],
      ["Skor 2", 2],
      ["Skor 1", 1],
    ]),
    harus_lolos: true,
    harus_diperbaiki: false,
  },
  {
    id: "ver-10-tkp-skala-rusak",
    deskripsi: "Soal TKP dengan dua opsi bernilai 5 wajib ditolak",
    soal: buatSoalEval("v10", "TKP", "Jejaring Kerja", "Koordinasi tim?", [
      ["A", 5],
      ["B", 5],
      ["C", 3],
      ["D", 2],
      ["E", 1],
    ]),
    harus_lolos: false,
    harus_diperbaiki: false,
  },
  {
    id: "ver-11-tkp-profesionalisme",
    deskripsi: "Soal TKP Profesionalisme valid",
    soal: buatSoalEval("v11", "TKP", "Profesionalisme", "Deadline mendadak?", [
      ["Opsi A", 3],
      ["Opsi B", 5],
      ["Opsi C", 1],
      ["Opsi D", 4],
      ["Opsi E", 2],
    ]),
    harus_lolos: true,
    harus_diperbaiki: false,
  },
  {
    id: "ver-12-tkp-antiradikalisme",
    deskripsi: "Soal TKP Anti Radikalisme valid",
    soal: buatSoalEval("v12", "TKP", "Anti Radikalisme", "Hoaks intoleran?", [
      ["Opsi A", 2],
      ["Opsi B", 1],
      ["Opsi C", 4],
      ["Opsi D", 5],
      ["Opsi E", 3],
    ]),
    harus_lolos: true,
    harus_diperbaiki: false,
  },
];

export const DATASET_EMAS_SOKRATIK_12: SkenarioEvalSokratik[] = [
  ...(["TWK", "TWK", "TWK", "TWK", "TIU", "TIU", "TIU", "TIU", "TKP", "TKP", "TKP", "TKP"] as KategoriSubtesSKD[]).map(
    (kat, idx) => {
      const petaSub: Record<KategoriSubtesSKD, string[]> = {
        TWK: ["Nasionalisme", "Integritas", "Bela Negara", "Pilar Negara"],
        TIU: [
          "Kemampuan Numerik - Deret Angka",
          "Kemampuan Numerik - Perbandingan Kuantitatif",
          "Kemampuan Verbal - Silogisme",
          "Kemampuan Verbal - Analitis",
        ],
        TKP: [
          "Pelayanan Publik",
          "Jejaring Kerja",
          "Teknologi Informasi dan Komunikasi (TIK)",
          "Anti Radikalisme",
        ],
      };
      const subIdx = idx % 4;
      const subTopik = petaSub[kat][subIdx];
      return {
        id: `sok-${kat.toLowerCase()}-${idx + 1}`,
        soal: {
          category: kat,
          sub_topic: subTopik,
          question_text: `Studi kasus resmi ${kat} tentang ${subTopik} dalam konteks tugas ASN profesional sesuai Kepmenpan-RB Nomor 321 Tahun 2024.`,
          options: [
            { kunci: "A" as const, teks: "Tindakan kurang tepat pertama", skor: kat === "TKP" ? 2 : 0 },
            { kunci: "B" as const, teks: "Langkah paling tepat dan akuntabel sesuai aturan", skor: 5 },
            { kunci: "C" as const, teks: "Tindakan kurang tepat ketiga", skor: kat === "TKP" ? 3 : 0 },
            { kunci: "D" as const, teks: "Tindakan alternatif keempat", skor: kat === "TKP" ? 4 : 0 },
            { kunci: "E" as const, teks: "Tindakan pasif kelima", skor: kat === "TKP" ? 1 : 0 },
          ],
          explanation: `Konsep utama pada ${subTopik} mengutamakan kepatuhan regulasi, akuntabilitas, serta ketepatan analisis berdasarkan fakta di soal.`,
        },
        jawaban_peserta: "A",
        pertanyaan_peserta: "Mengapa pilihan A kurang tepat dan bagaimana cara menganalisis opsi terbaiknya?",
        kata_kunci_konsep: [kat.toLowerCase(), subTopik.split(" ")[0].toLowerCase()],
      };
    }
  ),
];

export interface LaporanEvaluasiAIHarness {
  mode: "deterministik" | "live_llm";
  total_skenario: number;
  total_lulus: number;
  tingkat_kelulusan_persen: number;
  metrik_retrieval: {
    total_uji: number;
    lulus: number;
    recall_persen: number;
  };
  metrik_verifikator_numerik: {
    total_uji: number;
    lulus: number;
    akurasi_persen: number;
  };
  metrik_kepatuhan_sokratik: {
    total_uji: number;
    lulus: number;
    kepatuhan_persen: number;
  };
  rincian_gagal: Array<{ id: string; pilar: string; alasan: string }>;
}

const POLA_JARGON_TEKNIS_TERLARANG = /\b(rag|pgvector|embedding|tsvector|\.env)\b/i;

/**
 * Menjalankan seluruh 36 skenario Golden Dataset lintas 3 pilar AI Engineering.
 */
export async function jalankanEvaluasiAIHarness(opsi: {
  modeLiveLLM?: boolean;
} = {}): Promise<LaporanEvaluasiAIHarness> {
  const rincianGagal: Array<{ id: string; pilar: string; alasan: string }> = [];

  // Pilar 1: Evaluasi Hybrid Retrieval (12 skenario)
  let lulusRetrieval = 0;
  for (const kas of DATASET_EMAS_RETRIEVAL_12) {
    const res = await ambilKonteksHybridSKD({
      kueriTeks: kas.kueri,
      kategori: kas.kategori,
      subTopik: kas.sub_topik,
      batas: 3,
    });

    const adaRujukan = res.daftar_rujukan.length >= 1;
    const kategoriSesuai = res.daftar_rujukan.every(
      (r) => r.kategori.toUpperCase() === kas.kategori
    );
    const teksGabungan = res.daftar_rujukan
      .map((r) => `${r.sub_topik} ${r.ringkasan_soal} ${r.pembahasan}`.toLowerCase())
      .join(" ");
    const kataCocok = kas.kata_kunci_wajib.some((k) =>
      teksGabungan.includes(k.toLowerCase())
    );

    if (adaRujukan && kategoriSesuai && kataCocok) {
      lulusRetrieval += 1;
    } else {
      rincianGagal.push({
        id: kas.id,
        pilar: "retrieval",
        alasan: `Ditemukan=${res.daftar_rujukan.length}, kategoriSesuai=${kategoriSesuai}, kataCocok=${kataCocok}`,
      });
    }
  }

  // Pilar 2: Evaluasi Verifikasi Silang Numerik & Struktur (12 skenario)
  let lulusVerifikasi = 0;
  for (const kas of DATASET_EMAS_VERIFIKASI_SOAL_12) {
    const res = verifikasiButirSoalAI(kas.soal, {
      verificationFormula: kas.verification_formula,
      expectedAnswer: kas.expected_answer,
    });
    const cocokLolos = res.lolos === kas.harus_lolos;
    const cocokPerbaikan = res.diperbaikiOtomatis === kas.harus_diperbaiki;
    if (cocokLolos && cocokPerbaikan) {
      lulusVerifikasi += 1;
    } else {
      rincianGagal.push({
        id: kas.id,
        pilar: "verifikator_numerik",
        alasan: `Ekspektasi lolos=${kas.harus_lolos}/perbaikan=${kas.harus_diperbaiki}, aktual lolos=${res.lolos}/perbaikan=${res.diperbaikiOtomatis}`,
      });
    }
  }

  // Pilar 3: Evaluasi Kepatuhan Tutor Sokratik (12 skenario)
  let lulusSokratik = 0;
  for (const kas of DATASET_EMAS_SOKRATIK_12) {
    let balasan = buatBimbinganSokratikKontekstual({
      soal: kas.soal,
      jawabanPeserta: kas.jawaban_peserta,
      pertanyaanPeserta: kas.pertanyaan_peserta,
    });

    if (opsi.modeLiveLLM && process.env.AI_API_KEY) {
      try {
        balasan = await panggilChatAI({
          pesanPengguna: `Soal ${kas.soal.category} (${kas.soal.sub_topic}): ${kas.soal.question_text}\nJawaban Peserta: ${kas.jawaban_peserta}\nPertanyaan: ${kas.pertanyaan_peserta}`,
          instruksiSistem:
            "Anda Tutor Sokratik LOLOS CPNS berbahasa Indonesia baku. Bimbing bertahap, tanyakan penalaran peserta, dan hindari istilah teknis internal (RAG, vector, embedding, .env).",
          suhu: 0.3,
        });
      } catch {
        // Tetap catat evaluasi pada cadangan kontekstual bila live limit habis
      }
    }

    const bebasJargon = !POLA_JARGON_TEKNIS_TERLARANG.test(balasan);
    const cukupMendalam = balasan.trim().length >= 120;
    const adaPertanyaanPemantik = balasan.includes("?");
    const sebutKonsep = kas.kata_kunci_konsep.some((k) =>
      balasan.toLowerCase().includes(k)
    );

    if (bebasJargon && cukupMendalam && adaPertanyaanPemantik && sebutKonsep) {
      lulusSokratik += 1;
    } else {
      rincianGagal.push({
        id: kas.id,
        pilar: "tutor_sokratik",
        alasan: `bebasJargon=${bebasJargon}, cukupMendalam=${cukupMendalam}, pemantik=${adaPertanyaanPemantik}, sebutKonsep=${sebutKonsep}`,
      });
    }
  }

  const totalSkenario =
    DATASET_EMAS_RETRIEVAL_12.length +
    DATASET_EMAS_VERIFIKASI_SOAL_12.length +
    DATASET_EMAS_SOKRATIK_12.length;
  const totalLulus = lulusRetrieval + lulusVerifikasi + lulusSokratik;

  return {
    mode: opsi.modeLiveLLM ? "live_llm" : "deterministik",
    total_skenario: totalSkenario,
    total_lulus: totalLulus,
    tingkat_kelulusan_persen: Number(
      ((totalLulus / totalSkenario) * 100).toFixed(2)
    ),
    metrik_retrieval: {
      total_uji: DATASET_EMAS_RETRIEVAL_12.length,
      lulus: lulusRetrieval,
      recall_persen: Number(
        ((lulusRetrieval / DATASET_EMAS_RETRIEVAL_12.length) * 100).toFixed(2)
      ),
    },
    metrik_verifikator_numerik: {
      total_uji: DATASET_EMAS_VERIFIKASI_SOAL_12.length,
      lulus: lulusVerifikasi,
      akurasi_persen: Number(
        (
          (lulusVerifikasi / DATASET_EMAS_VERIFIKASI_SOAL_12.length) *
          100
        ).toFixed(2)
      ),
    },
    metrik_kepatuhan_sokratik: {
      total_uji: DATASET_EMAS_SOKRATIK_12.length,
      lulus: lulusSokratik,
      kepatuhan_persen: Number(
        ((lulusSokratik / DATASET_EMAS_SOKRATIK_12.length) * 100).toFixed(2)
      ),
    },
    rincian_gagal: rincianGagal,
  };
}
