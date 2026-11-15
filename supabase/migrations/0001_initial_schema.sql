-- ==============================================================================
-- MIGRASI AWAL BASIS DATA: LOLOS CPNS (FASE 1)
-- Mengacu pada Bagian 4 Kontrak Proyek (Kepmenpan-RB Nomor 321 Tahun 2024)
-- Seluruh nilai enum, status, dan label menggunakan Bahasa Indonesia yang baku.
-- ==============================================================================

-- Aktifkan ekstensi UUID dan pgvector untuk pencarian semantik (RAG)
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS vector;

-- ==============================================================================
-- A. TABEL `regulations` (Aturan Resmi Kelulusan per Tahapan Seleksi CPNS)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS regulations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stage VARCHAR(20) NOT NULL DEFAULT 'SKD' CHECK (stage IN ('SKD', 'SKB', 'LAINNYA')),
  title TEXT NOT NULL, -- contoh: "Kepmenpan-RB Nomor 321 Tahun 2024"
  year INT NOT NULL,
  default_duration_minutes INT DEFAULT 100,
  blind_disability_duration_minutes INT DEFAULT 130,
  total_questions INT DEFAULT 110,
  max_cumulative_score INT DEFAULT 550,
  sections_json JSONB NOT NULL,
  passing_grades_json JSONB NOT NULL, -- menggunakan mode_evaluasi: 'per_subtes' atau 'kumulatif_dan_tiu'
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_regulations_stage_active ON regulations(stage, is_active);

-- ==============================================================================
-- B. TABEL `questions` (Bank Soal Terkurasi, Pencarian Teks Penuh & Vektor)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stage VARCHAR(20) NOT NULL DEFAULT 'SKD' CHECK (stage IN ('SKD', 'SKB', 'LAINNYA')),
  category VARCHAR(30) NOT NULL, -- Untuk SKD: 'TWK', 'TIU', 'TKP'
  sub_topic TEXT NOT NULL, -- Kisi-kisi resmi berbahasa Indonesia
  difficulty VARCHAR(15) DEFAULT 'sedang' CHECK (difficulty IN ('mudah', 'sedang', 'sulit')),
  question_text TEXT NOT NULL,
  image_url TEXT, -- Opsional untuk TIU Figural atau ilustrasi teknis
  options JSONB NOT NULL,
  -- Format options: [{"kunci": "A", "teks": "...", "skor": 0}, {"kunci": "B", "teks": "...", "skor": 5}, ...]
  explanation TEXT NOT NULL,
  source_reference TEXT, -- Referensi pasal/konsep dasar dalam Bahasa Indonesia
  is_paraphrased BOOLEAN DEFAULT FALSE,
  status VARCHAR(15) DEFAULT 'draf' CHECK (status IN ('draf', 'disetujui', 'diarsipkan')),
  embedding VECTOR(768),
  -- Kolom pencarian teks penuh (tsvector) sebagai cadangan apabila penyedia AI gratis tidak memiliki endpoint embedding
  pencarian_teks TSVECTOR GENERATED ALWAYS AS (
    to_tsvector('indonesian', coalesce(sub_topic, '') || ' ' || coalesce(question_text, '') || ' ' || coalesce(explanation, ''))
  ) STORED,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_questions_stage_category_status ON questions(stage, category, status);
CREATE INDEX IF NOT EXISTS idx_questions_sub_topic ON questions(sub_topic);
CREATE INDEX IF NOT EXISTS idx_questions_pencarian_teks ON questions USING GIN (pencarian_teks);

-- ==============================================================================
-- C. TABEL `tryout_packages` & `tryout_attempts` (Paket Simulasi & Riwayat Nilai)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS tryout_packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stage VARCHAR(20) NOT NULL DEFAULT 'SKD' CHECK (stage IN ('SKD', 'SKB', 'TERPADU')),
  title TEXT NOT NULL,
  description TEXT,
  is_free BOOLEAN DEFAULT FALSE,
  price_idr INT DEFAULT 0,
  regulation_id UUID REFERENCES regulations(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS tryout_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  package_id UUID REFERENCES tryout_packages(id) ON DELETE CASCADE,
  stage VARCHAR(20) NOT NULL DEFAULT 'SKD' CHECK (stage IN ('SKD', 'SKB', 'LAINNYA')),
  formasi_type VARCHAR(25) DEFAULT 'umum' CHECK (
    formasi_type IN ('umum', 'kalimantan', 'cumlaude', 'diaspora', 'disabilitas', 'papua', 'daerah_tertinggal')
  ),
  is_sensory_blind BOOLEAN DEFAULT FALSE, -- Jika TRUE pada formasi disabilitas, durasi = 130 menit
  answers_json JSONB DEFAULT '{}'::jsonb,
  section_scores_json JSONB DEFAULT '{"TWK": 0, "TIU": 0, "TKP": 0}'::jsonb,
  total_score INT DEFAULT 0,
  is_passed BOOLEAN DEFAULT FALSE,
  ai_diagnostic_summary TEXT,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  finished_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_tryout_attempts_user_stage ON tryout_attempts(user_id, stage);
