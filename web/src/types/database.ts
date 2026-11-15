/**
 * Tipe Data Basis Data Terpadu — LOLOS CPNS.
 * Tersinkronisasi ketat dengan skema PostgreSQL pada Bagian 4 Kontrak Proyek (`CONTRACT.md`).
 * Seluruh nilai enum, status, dan label yang tampil kepada pengguna/Admin menggunakan Bahasa Indonesia yang baku.
 */

export type TahapSeleksi = "SKD" | "SKB" | "LAINNYA";
export type TahapPaketSimulasi = "SKD" | "SKB" | "TERPADU";

export type KategoriSubtesSKD = "TWK" | "TIU" | "TKP";

export type TingkatKesulitanSoal = "mudah" | "sedang" | "sulit";

export type StatusSoal = "draf" | "disetujui" | "diarsipkan";

export type JenisFormasiSKD =
  | "umum"
  | "kalimantan"
  | "cumlaude"
  | "diaspora"
  | "disabilitas"
  | "papua"
  | "daerah_tertinggal";

export type ModeEvaluasiAmbangBatas = "per_subtes" | "kumulatif_dan_tiu";

export interface KonfigurasiSubtesRegulasi {
  kode: KategoriSubtesSKD | string;
  nama: string;
  jumlah_soal: number;
  skor_benar?: number;
  skor_salah?: number;
  skala_skor_min?: number;
  skala_skor_maks?: number;
  skor_kosong: number;
  skor_maksimal: number;
  sub_topik_resmi: string[];
}

export interface AturanAmbangBatasPerSubtes {
  kode_formasi: JenisFormasiSKD;
  nama_kategori: string;
  mode_evaluasi: "per_subtes";
  ambang_batas_subtes: {
    TWK: number;
    TIU: number;
    TKP: number;
  };
}

export interface AturanAmbangBatasKumulatifDanTIU {
  kode_formasi: JenisFormasiSKD;
  nama_kategori: string;
  mode_evaluasi: "kumulatif_dan_tiu";
  ambang_batas_kumulatif: number;
  ambang_batas_tiu: number;
}

export type AturanAmbangBatasFormasi =
  | AturanAmbangBatasPerSubtes
  | AturanAmbangBatasKumulatifDanTIU;

export type PetaAmbangBatasRegulasi = Record<
  JenisFormasiSKD,
  AturanAmbangBatasFormasi
>;

/** Tabel `regulations` */
export interface RegulationRow {
  id: string;
  stage: TahapSeleksi;
  title: string;
  year: number;
  default_duration_minutes: number;
  blind_disability_duration_minutes: number;
  total_questions: number;
  max_cumulative_score: number;
  sections_json: KonfigurasiSubtesRegulasi[];
  passing_grades_json: PetaAmbangBatasRegulasi;
  is_active: boolean;
  created_at: string;
}

export interface PilihanJawabanSoal {
  kunci: "A" | "B" | "C" | "D" | "E";
  teks: string;
  skor: number;
}

/** Tabel `questions` */
export interface QuestionRow {
  id: string;
  stage: TahapSeleksi;
  category: KategoriSubtesSKD | string;
  sub_topic: string;
  difficulty: TingkatKesulitanSoal;
  question_text: string;
  image_url: string | null;
  options: PilihanJawabanSoal[];
  explanation: string;
  source_reference: string | null;
  is_paraphrased: boolean;
  status: StatusSoal;
  embedding: number[] | null;
  created_at: string;
}

/** Tabel `tryout_packages` */
export interface TryoutPackageRow {
  id: string;
  stage: TahapPaketSimulasi;
  title: string;
  description: string | null;
  is_free: boolean;
  price_idr: number;
  regulation_id: string | null;
  created_at: string;
}

export interface SkorSubtesSKD {
  TWK: number;
  TIU: number;
  TKP: number;
}

export type PetaJawabanPeserta = Record<string, "A" | "B" | "C" | "D" | "E">;

/** Tabel `tryout_attempts` */
export interface TryoutAttemptRow {
  id: string;
  user_id: string;
  package_id: string | null;
  stage: TahapSeleksi;
  formasi_type: JenisFormasiSKD;
  is_sensory_blind: boolean;
  answers_json: PetaJawabanPeserta;
  section_scores_json: SkorSubtesSKD;
  total_score: number;
  is_passed: boolean;
  ai_diagnostic_summary: string | null;
  started_at: string;
  finished_at: string | null;
}
