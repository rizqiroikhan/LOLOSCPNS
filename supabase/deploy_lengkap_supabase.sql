-- ==============================================================================
-- SKRIP MIGRASI & SEED LENGKAP (IDEMPOTEN) — LOLOS CPNS (SIAP KOMERSIAL P0)
-- Tempel dan jalankan SATU KALI di Supabase SQL Editor untuk menyiapkan seluruh
-- skema, data regulasi resmi Kepmenpan-RB 321/2024, paket komersial, & RLS.
-- Aman dijalankan ulang tanpa duplikasi atau menghapus data eksisting.
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- BAGIAN 1: EKSTENSI & TABEL INTI (0001_initial_schema.sql)
-- ------------------------------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS regulations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stage VARCHAR(20) NOT NULL DEFAULT 'SKD' CHECK (stage IN ('SKD', 'SKB', 'LAINNYA')),
  title TEXT NOT NULL,
  year INT NOT NULL,
  default_duration_minutes INT DEFAULT 100,
  blind_disability_duration_minutes INT DEFAULT 130,
  total_questions INT DEFAULT 110,
  max_cumulative_score INT DEFAULT 550,
  sections_json JSONB NOT NULL,
  passing_grades_json JSONB NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_regulations_stage_active ON regulations(stage, is_active);

CREATE TABLE IF NOT EXISTS questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stage VARCHAR(20) NOT NULL DEFAULT 'SKD' CHECK (stage IN ('SKD', 'SKB', 'LAINNYA')),
  category VARCHAR(30) NOT NULL,
  sub_topic TEXT NOT NULL,
  difficulty VARCHAR(15) DEFAULT 'sedang' CHECK (difficulty IN ('mudah', 'sedang', 'sulit')),
  question_text TEXT NOT NULL,
  image_url TEXT,
  options JSONB NOT NULL,
  explanation TEXT NOT NULL,
  source_reference TEXT,
  is_paraphrased BOOLEAN DEFAULT FALSE,
  status VARCHAR(15) DEFAULT 'draf' CHECK (status IN ('draf', 'disetujui', 'diarsipkan')),
  embedding VECTOR(768),
  pencarian_teks TSVECTOR GENERATED ALWAYS AS (
    to_tsvector('indonesian', coalesce(sub_topic, '') || ' ' || coalesce(question_text, '') || ' ' || coalesce(explanation, ''))
  ) STORED,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_questions_stage_category_status ON questions(stage, category, status);
CREATE INDEX IF NOT EXISTS idx_questions_sub_topic ON questions(sub_topic);
CREATE INDEX IF NOT EXISTS idx_questions_pencarian_teks ON questions USING GIN (pencarian_teks);

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
  is_sensory_blind BOOLEAN DEFAULT FALSE,
  answers_json JSONB DEFAULT '{}'::jsonb,
  section_scores_json JSONB DEFAULT '{"TWK": 0, "TIU": 0, "TKP": 0}'::jsonb,
  total_score INT DEFAULT 0,
  is_passed BOOLEAN DEFAULT FALSE,
  ai_diagnostic_summary TEXT,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  finished_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_tryout_attempts_user_stage ON tryout_attempts(user_id, stage);

-- ------------------------------------------------------------------------------
-- BAGIAN 2: AKUN ADMIN PANEL (0002_admin_accounts.sql)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS admin_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(60) NOT NULL UNIQUE,
  nama_lengkap TEXT NOT NULL,
  peran VARCHAR(20) NOT NULL DEFAULT 'admin' CHECK (peran IN ('admin_utama', 'admin')),
  password_hash TEXT NOT NULL,
  dibuat_oleh VARCHAR(60) DEFAULT 'sistem',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_admin_accounts_username ON admin_accounts(username);

-- ------------------------------------------------------------------------------
-- BAGIAN 3: SEED REGULASI KEPMENPAN-RB 321/2024 & CONTOH SOAL IDEMPOTEN
-- ------------------------------------------------------------------------------
INSERT INTO regulations (
  id,
  stage,
  title,
  year,
  default_duration_minutes,
  blind_disability_duration_minutes,
  total_questions,
  max_cumulative_score,
  sections_json,
  passing_grades_json,
  is_active
) VALUES (
  '32102024-0000-4000-8000-000000000321',
  'SKD',
  'Keputusan Menteri PANRB Nomor 321 Tahun 2024',
  2024,
  100,
  130,
  110,
  550,
  '[
    {
      "kode": "TWK",
      "nama": "Tes Wawasan Kebangsaan",
      "jumlah_soal": 30,
      "skor_benar": 5,
      "skor_salah": 0,
      "skor_kosong": 0,
      "skor_maksimal": 150,
      "sub_topik_resmi": [
        "Nasionalisme",
        "Integritas",
        "Bela Negara",
        "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
        "Bahasa Negara"
      ]
    },
    {
      "kode": "TIU",
      "nama": "Tes Intelegensia Umum",
      "jumlah_soal": 35,
      "skor_benar": 5,
      "skor_salah": 0,
      "skor_kosong": 0,
      "skor_maksimal": 175,
      "sub_topik_resmi": [
        "Kemampuan Verbal - Analogi",
        "Kemampuan Verbal - Silogisme",
        "Kemampuan Verbal - Analitis",
        "Kemampuan Numerik - Berhitung",
        "Kemampuan Numerik - Deret Angka",
        "Kemampuan Numerik - Perbandingan Kuantitatif",
        "Kemampuan Numerik - Soal Cerita",
        "Kemampuan Figural - Analogi Gambar",
        "Kemampuan Figural - Ketidaksamaan Gambar",
        "Kemampuan Figural - Serial Gambar"
      ]
    },
    {
      "kode": "TKP",
      "nama": "Tes Karakteristik Pribadi",
      "jumlah_soal": 45,
      "skala_skor_min": 1,
      "skala_skor_maks": 5,
      "skor_kosong": 0,
      "skor_maksimal": 225,
      "sub_topik_resmi": [
        "Pelayanan Publik",
        "Jejaring Kerja",
        "Sosial Budaya",
        "Teknologi Informasi dan Komunikasi (TIK)",
        "Profesionalisme",
        "Anti Radikalisme"
      ]
    }
  ]'::jsonb,
  '{
    "umum": {
      "kode_formasi": "umum",
      "nama_kategori": "Kebutuhan Umum",
      "mode_evaluasi": "per_subtes",
      "ambang_batas_subtes": {"TWK": 65, "TIU": 80, "TKP": 166}
    },
    "kalimantan": {
      "kode_formasi": "kalimantan",
      "nama_kategori": "Kebutuhan Khusus Putra/Putri Kalimantan",
      "mode_evaluasi": "per_subtes",
      "ambang_batas_subtes": {"TWK": 65, "TIU": 80, "TKP": 166}
    },
    "cumlaude": {
      "kode_formasi": "cumlaude",
      "nama_kategori": "Kebutuhan Khusus Lulusan Terbaik (Cumlaude)",
      "mode_evaluasi": "kumulatif_dan_tiu",
      "ambang_batas_kumulatif": 311,
      "ambang_batas_tiu": 85
    },
    "diaspora": {
      "kode_formasi": "diaspora",
      "nama_kategori": "Kebutuhan Khusus Diaspora",
      "mode_evaluasi": "kumulatif_dan_tiu",
      "ambang_batas_kumulatif": 311,
      "ambang_batas_tiu": 85
    },
    "disabilitas": {
      "kode_formasi": "disabilitas",
      "nama_kategori": "Kebutuhan Khusus Penyandang Disabilitas",
      "mode_evaluasi": "kumulatif_dan_tiu",
      "ambang_batas_kumulatif": 286,
      "ambang_batas_tiu": 60
    },
    "papua": {
      "kode_formasi": "papua",
      "nama_kategori": "Kebutuhan Khusus Putra/Putri Papua",
      "mode_evaluasi": "kumulatif_dan_tiu",
      "ambang_batas_kumulatif": 286,
      "ambang_batas_tiu": 60
    },
    "daerah_tertinggal": {
      "kode_formasi": "daerah_tertinggal",
      "nama_kategori": "Kebutuhan Khusus Putra/Putri Daerah Tertinggal",
      "mode_evaluasi": "kumulatif_dan_tiu",
      "ambang_batas_kumulatif": 286,
      "ambang_batas_tiu": 60
    }
  }'::jsonb,
  TRUE
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  sections_json = EXCLUDED.sections_json,
  passing_grades_json = EXCLUDED.passing_grades_json,
  is_active = EXCLUDED.is_active;

INSERT INTO questions (
  stage, category, sub_topic, difficulty, question_text, options, explanation, source_reference, is_paraphrased, status
)
SELECT * FROM (VALUES
  (
    'SKD', 'TWK', 'Integritas', 'sedang',
    'Seorang pejabat pengadaan barang dan jasa di suatu kementerian menerima tawaran fasilitas perjalanan wisata keluarga dari salah satu calon penyedia yang sedang mengikuti proses lelang. Sikap yang paling mencerminkan nilai integritas aparatur sipil negara adalah...',
    '[{"kunci":"A","teks":"Menerima fasilitas tersebut secara pribadi di luar jam dinas agar tidak mengganggu proses penilaian lelang.","skor":0},{"kunci":"B","teks":"Menolak secara tegas tawaran tersebut dan melaporkan potensi benturan kepentingan serta upaya gratifikasi kepada Unit Pengendalian Gratifikasi (UPG).","skor":5},{"kunci":"C","teks":"Mengalihkan fasilitas tersebut untuk kegiatan sosial di lingkungan kantor agar bermanfaat bagi seluruh pegawai.","skor":0},{"kunci":"D","teks":"Menunda penerimaan fasilitas hingga pengumuman pemenang lelang resmi diterbitkan.","skor":0},{"kunci":"E","teks":"Meminta pendapat rekan sejawat sebelum memutuskan untuk menerima atau menolak pemberian tersebut.","skor":0}]'::jsonb,
    'Nilai integritas menuntut konsistensi antara tindakan dan aturan etika maupun hukum. Setiap pemberian yang berhubungan dengan jabatan dan berlawanan dengan kewajiban atau tugas merupakan gratifikasi yang wajib ditolak secara tegas dan dilaporkan ke Unit Pengendalian Gratifikasi (UPG) atau KPK.',
    'Undang-Undang Nomor 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi & Nilai Dasar ASN BerAKHLAK',
    TRUE, 'disetujui'
  ),
  (
    'SKD', 'TIU', 'Kemampuan Numerik - Deret Angka', 'sedang',
    'Perhatikan barisan bilangan berikut: 4, 9, 19, 39, 79, ... Bilangan yang tepat untuk melanjutkan barisan tersebut adalah...',
    '[{"kunci":"A","teks":"149","skor":0},{"kunci":"B","teks":"158","skor":0},{"kunci":"C","teks":"159","skor":5},{"kunci":"D","teks":"161","skor":0},{"kunci":"E","teks":"169","skor":0}]'::jsonb,
    'Pola barisan tersebut adalah dikali 2 kemudian ditambah 1 (Un = 2 × Un-1 + 1) atau selisih bertingkat (+5, +10, +20, +40, +80). Dengan demikian, suku berikutnya adalah 79 + 80 = 159.',
    'Kisi-Kisi Resmi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Deret Angka)',
    TRUE, 'disetujui'
  ),
  (
    'SKD', 'TKP', 'Pelayanan Publik', 'sedang',
    'Saat antrean layanan tatap muka sedang sangat padat menjelang jam istirahat, seorang warga lanjut usia tampak kebingungan mengoperasikan anjungan pendaftaran mandiri. Tindakan Anda sebagai petugas pelayanan adalah...',
    '[{"kunci":"A","teks":"Menyapa dengan ramah, segera mendampingi warga lanjut usia tersebut mengisi pendaftaran di anjungan mandiri, serta mengarahkannya ke jalur prioritas.","skor":5},{"kunci":"B","teks":"Meminta petugas keamanan untuk membantu warga tersebut agar antrean di loket utama tetap berjalan sesuai urutan.","skor":4},{"kunci":"C","teks":"Memberikan petunjuk lisan dari meja layanan mengenai cara menggunakan layar sentuh pada anjungan mandiri.","skor":3},{"kunci":"D","teks":"Menyarankan warga tersebut untuk meminta bantuan pengunjung lain yang sedang mengantre di dekat anjungan mandiri.","skor":2},{"kunci":"E","teks":"Mempersilakan warga tersebut menunggu hingga antrean lengang setelah jam istirahat selesai.","skor":1}]'::jsonb,
    'Aspek Pelayanan Publik mengukur keramahtamahan, kepekaan terhadap kelompok rentan (lansia/disabilitas), dan kesigapan memberikan solusi nyata secara langsung sesuai standar pelayanan prima.',
    'Kisi-Kisi Resmi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik',
    TRUE, 'disetujui'
  )
) AS v(stage, category, sub_topic, difficulty, question_text, options, explanation, source_reference, is_paraphrased, status)
WHERE NOT EXISTS (
  SELECT 1 FROM questions q WHERE q.question_text = v.question_text
);

-- ------------------------------------------------------------------------------
-- BAGIAN 4: RLS, TABEL KOMERSIAL P0, & KATALOG PAKET (0003_commercial_p0_security.sql)
-- ------------------------------------------------------------------------------
ALTER TABLE regulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE tryout_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE tryout_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_accounts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "publik_baca_regulasi_aktif" ON regulations;
CREATE POLICY "publik_baca_regulasi_aktif"
  ON regulations FOR SELECT
  USING (is_active = TRUE);

DROP POLICY IF EXISTS "publik_baca_katalog_paket" ON tryout_packages;
CREATE POLICY "publik_baca_katalog_paket"
  ON tryout_packages FOR SELECT
  USING (TRUE);

CREATE TABLE IF NOT EXISTS user_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(160) NOT NULL UNIQUE,
  nama_lengkap TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  tingkat_langganan VARCHAR(25) NOT NULL DEFAULT 'gratis' CHECK (
    tingkat_langganan IN ('gratis', 'intensif_skd', 'terpadu_cpns')
  ),
  aktif_hingga TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_accounts_email ON user_accounts(email);
ALTER TABLE user_accounts ENABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS payment_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id VARCHAR(80) NOT NULL UNIQUE,
  user_id UUID NOT NULL REFERENCES user_accounts(id) ON DELETE CASCADE,
  paket_id VARCHAR(60) NOT NULL,
  kode_tingkat VARCHAR(25) NOT NULL CHECK (
    kode_tingkat IN ('gratis', 'intensif_skd', 'terpadu_cpns')
  ),
  nominal_idr INT NOT NULL CHECK (nominal_idr >= 0),
  metode_pembayaran VARCHAR(30) NOT NULL,
  status_transaksi VARCHAR(30) NOT NULL DEFAULT 'menunggu_pembayaran' CHECK (
    status_transaksi IN ('menunggu_pembayaran', 'lunas', 'kedaluwarsa', 'dibatalkan')
  ),
  snap_token TEXT,
  snap_redirect_url TEXT,
  qris_string TEXT,
  va_number TEXT,
  paid_at TIMESTAMPTZ,
  raw_webhook_json JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_payment_orders_user_id ON payment_orders(user_id);
CREATE INDEX IF NOT EXISTS idx_payment_orders_order_id ON payment_orders(order_id);
ALTER TABLE payment_orders ENABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS ai_usage_daily (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_key VARCHAR(120) NOT NULL,
  tanggal DATE NOT NULL DEFAULT CURRENT_DATE,
  jumlah_pemakaian INT NOT NULL DEFAULT 0 CHECK (jumlah_pemakaian >= 0),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_key, tanggal)
);

CREATE INDEX IF NOT EXISTS idx_ai_usage_daily_lookup ON ai_usage_daily(user_key, tanggal);
ALTER TABLE ai_usage_daily ENABLE ROW LEVEL SECURITY;

ALTER TABLE tryout_attempts
  ADD COLUMN IF NOT EXISTS package_slug VARCHAR(60),
  ADD COLUMN IF NOT EXISTS duration_seconds INT DEFAULT 0;

INSERT INTO tryout_packages (
  id, stage, title, description, is_free, price_idr, regulation_id
) VALUES
(
  '11111111-2222-4333-8444-555555555555',
  'SKD',
  'Simulasi SKD Perdana (Gratis)',
  '1 paket simulasi lengkap CAT SKD 110 soal mengacu pada Kepmenpan-RB Nomor 321 Tahun 2024 beserta kuota harian diskusi Tutor AI.',
  TRUE,
  0,
  '32102024-0000-4000-8000-000000000321'
),
(
  '22222222-2222-4333-8444-555555555555',
  'SKD',
  'Pejuang NIP — Paket Intensif SKD',
  'Akses penuh paket Simulasi Akbar CAT SKD intensif, Analisis Kesenjangan Nilai, Tutor AI Pembimbing, dan Latihan Perbaikan Adaptif.',
  FALSE,
  49000,
  '32102024-0000-4000-8000-000000000321'
),
(
  '33333333-2222-4333-8444-555555555555',
  'TERPADU',
  'Paket Terpadu SKD + Persiapan SKB',
  'Akses menyeluruh seluruh modul SKD ditambah modul lanjutan Seleksi Kompetensi Bidang (SKB) & Wawancara Jabatan.',
  FALSE,
  89000,
  '32102024-0000-4000-8000-000000000321'
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  is_free = EXCLUDED.is_free,
  price_idr = EXCLUDED.price_idr;

-- ------------------------------------------------------------------------------
-- BAGIAN 4B: FUNGSI HYBRID RETRIEVAL `match_konteks_skd` (0004_hybrid_rag_rpc.sql)
-- ------------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_questions_embedding_cosine
  ON questions USING hnsw (embedding vector_cosine_ops);

CREATE OR REPLACE FUNCTION match_konteks_skd(
  kueri_teks TEXT,
  kueri_embedding VECTOR(768) DEFAULT NULL,
  filter_kategori TEXT DEFAULT NULL,
  batas_hasil INT DEFAULT 4,
  ambang_kemiripan_vektor FLOAT DEFAULT 0.45
)
RETURNS TABLE (
  id UUID,
  category VARCHAR(30),
  sub_topic TEXT,
  question_text TEXT,
  explanation TEXT,
  source_reference TEXT,
  skor_vektor FLOAT,
  skor_teks FLOAT,
  skor_gabungan FLOAT,
  sumber_pencarian TEXT
)
LANGUAGE sql
STABLE
AS $$
WITH calon_vektor AS (
  SELECT
    q.id,
    (1 - (q.embedding <=> kueri_embedding))::FLOAT AS s_vektor,
    ROW_NUMBER() OVER (ORDER BY q.embedding <=> kueri_embedding ASC) AS peringkat_v
  FROM questions q
  WHERE q.status = 'disetujui'
    AND kueri_embedding IS NOT NULL
    AND q.embedding IS NOT NULL
    AND (filter_kategori IS NULL OR q.category = filter_kategori)
    AND (1 - (q.embedding <=> kueri_embedding)) >= ambang_kemiripan_vektor
  ORDER BY q.embedding <=> kueri_embedding ASC
  LIMIT GREATEST(batas_hasil * 3, 10)
),
calon_teks AS (
  SELECT
    q.id,
    ts_rank_cd(q.pencarian_teks, websearch_to_tsquery('indonesian', kueri_teks))::FLOAT AS s_teks,
    ROW_NUMBER() OVER (
      ORDER BY ts_rank_cd(q.pencarian_teks, websearch_to_tsquery('indonesian', kueri_teks)) DESC
    ) AS peringkat_t
  FROM questions q
  WHERE q.status = 'disetujui'
    AND length(trim(coalesce(kueri_teks, ''))) > 0
    AND (filter_kategori IS NULL OR q.category = filter_kategori)
    AND q.pencarian_teks @@ websearch_to_tsquery('indonesian', kueri_teks)
  ORDER BY s_teks DESC
  LIMIT GREATEST(batas_hasil * 3, 10)
),
gabungan AS (
  SELECT
    COALESCE(v.id, t.id) AS q_id,
    COALESCE(v.s_vektor, 0.0)::FLOAT AS skor_vektor,
    COALESCE(t.s_teks, 0.0)::FLOAT AS skor_teks,
    (
      COALESCE(1.0 / (60.0 + v.peringkat_v), 0.0) +
      COALESCE(1.0 / (60.0 + t.peringkat_t), 0.0)
    )::FLOAT AS skor_gabungan,
    CASE
      WHEN v.id IS NOT NULL AND t.id IS NOT NULL THEN 'hybrid_rrf'
      WHEN v.id IS NOT NULL THEN 'pgvector_768'
      ELSE 'tsvector_bahasa_indonesia'
    END AS sumber_pencarian
  FROM calon_vektor v
  FULL OUTER JOIN calon_teks t ON v.id = t.id
)
SELECT
  q.id,
  q.category,
  q.sub_topic,
  q.question_text,
  q.explanation,
  q.source_reference,
  g.skor_vektor,
  g.skor_teks,
  g.skor_gabungan,
  g.sumber_pencarian
FROM gabungan g
JOIN questions q ON q.id = g.q_id
ORDER BY g.skor_gabungan DESC, g.skor_vektor DESC, g.skor_teks DESC
LIMIT GREATEST(batas_hasil, 1);
$$;

REVOKE ALL ON FUNCTION match_konteks_skd(TEXT, VECTOR(768), TEXT, INT, FLOAT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION match_konteks_skd(TEXT, VECTOR(768), TEXT, INT, FLOAT) TO service_role;

-- ------------------------------------------------------------------------------
-- BAGIAN 4C: PROFILES ROLE & RLS ADMIN (0005_profiles_role_and_admin_rls.sql)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  nama_lengkap TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS email TEXT,
  ADD COLUMN IF NOT EXISTS nama_lengkap TEXT,
  ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'user',
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

UPDATE public.profiles
SET role = 'user'
WHERE role IS NULL OR role NOT IN ('user', 'admin');

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'profiles_role_check'
      AND conrelid = 'public.profiles'::regclass
  ) THEN
    ALTER TABLE public.profiles
      ADD CONSTRAINT profiles_role_check CHECK (role IN ('user', 'admin'));
  END IF;
END
$$;

CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);

CREATE OR REPLACE FUNCTION public.perbarui_updated_at_profiles()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_profiles_updated_at ON public.profiles;
CREATE TRIGGER trg_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.perbarui_updated_at_profiles();

CREATE OR REPLACE FUNCTION public.buat_profil_pengguna_baru()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, nama_lengkap, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(
      NULLIF(TRIM(NEW.raw_user_meta_data ->> 'nama_lengkap'), ''),
      NULLIF(TRIM(NEW.raw_user_meta_data ->> 'full_name'), ''),
      NULLIF(SPLIT_PART(COALESCE(NEW.email, ''), '@', 1), ''),
      'Peserta CPNS'
    ),
    'user'
  )
  ON CONFLICT (id) DO UPDATE
    SET email = COALESCE(EXCLUDED.email, public.profiles.email),
        updated_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created_profiles ON auth.users;
CREATE TRIGGER on_auth_user_created_profiles
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.buat_profil_pengguna_baru();

INSERT INTO public.profiles (id, email, nama_lengkap, role)
SELECT
  u.id,
  u.email,
  COALESCE(
    NULLIF(TRIM(u.raw_user_meta_data ->> 'nama_lengkap'), ''),
    NULLIF(TRIM(u.raw_user_meta_data ->> 'full_name'), ''),
    NULLIF(SPLIT_PART(COALESCE(u.email, ''), '@', 1), ''),
    'Peserta CPNS'
  ),
  'user'
FROM auth.users u
ON CONFLICT (id) DO NOTHING;

CREATE OR REPLACE FUNCTION public.apakah_admin_supabase()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles p
    WHERE p.id = auth.uid()
      AND p.role = 'admin'
  );
$$;

REVOKE ALL ON FUNCTION public.apakah_admin_supabase() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.apakah_admin_supabase() TO anon, authenticated;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Pengguna melihat profil sendiri" ON public.profiles;
CREATE POLICY "Pengguna melihat profil sendiri"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Hanya admin membaca bank soal" ON public.questions;
CREATE POLICY "Hanya admin membaca bank soal"
  ON public.questions FOR SELECT
  TO authenticated
  USING (public.apakah_admin_supabase());

DROP POLICY IF EXISTS "Hanya admin menambah bank soal" ON public.questions;
CREATE POLICY "Hanya admin menambah bank soal"
  ON public.questions FOR INSERT
  TO authenticated
  WITH CHECK (public.apakah_admin_supabase());

DROP POLICY IF EXISTS "Hanya admin mengubah bank soal" ON public.questions;
CREATE POLICY "Hanya admin mengubah bank soal"
  ON public.questions FOR UPDATE
  TO authenticated
  USING (public.apakah_admin_supabase())
  WITH CHECK (public.apakah_admin_supabase());

DROP POLICY IF EXISTS "Hanya admin menghapus bank soal" ON public.questions;
CREATE POLICY "Hanya admin menghapus bank soal"
  ON public.questions FOR DELETE
  TO authenticated
  USING (public.apakah_admin_supabase());

DROP POLICY IF EXISTS "Hanya admin membaca seluruh regulasi" ON public.regulations;
CREATE POLICY "Hanya admin membaca seluruh regulasi"
  ON public.regulations FOR SELECT
  TO authenticated
  USING (public.apakah_admin_supabase());

DROP POLICY IF EXISTS "Hanya admin menambah regulasi" ON public.regulations;
CREATE POLICY "Hanya admin menambah regulasi"
  ON public.regulations FOR INSERT
  TO authenticated
  WITH CHECK (public.apakah_admin_supabase());

DROP POLICY IF EXISTS "Hanya admin mengubah regulasi" ON public.regulations;
CREATE POLICY "Hanya admin mengubah regulasi"
  ON public.regulations FOR UPDATE
  TO authenticated
  USING (public.apakah_admin_supabase())
  WITH CHECK (public.apakah_admin_supabase());

DROP POLICY IF EXISTS "Hanya admin menghapus regulasi" ON public.regulations;
CREATE POLICY "Hanya admin menghapus regulasi"
  ON public.regulations FOR DELETE
  TO authenticated
  USING (public.apakah_admin_supabase());

DROP POLICY IF EXISTS "Hanya admin menambah paket tryout" ON public.tryout_packages;
CREATE POLICY "Hanya admin menambah paket tryout"
  ON public.tryout_packages FOR INSERT
  TO authenticated
  WITH CHECK (public.apakah_admin_supabase());

DROP POLICY IF EXISTS "Hanya admin mengubah paket tryout" ON public.tryout_packages;
CREATE POLICY "Hanya admin mengubah paket tryout"
  ON public.tryout_packages FOR UPDATE
  TO authenticated
  USING (public.apakah_admin_supabase())
  WITH CHECK (public.apakah_admin_supabase());

DROP POLICY IF EXISTS "Hanya admin menghapus paket tryout" ON public.tryout_packages;
CREATE POLICY "Hanya admin menghapus paket tryout"
  ON public.tryout_packages FOR DELETE
  TO authenticated
  USING (public.apakah_admin_supabase());

-- ------------------------------------------------------------------------------
-- BAGIAN 4D: PENETAPAN ADMIN (`honnecinnamon@gmail.com`) (0006_set_admin_honnecinnamon.sql)
-- ------------------------------------------------------------------------------
INSERT INTO public.profiles (id, email, nama_lengkap, role)
SELECT
  u.id,
  u.email,
  COALESCE(
    NULLIF(TRIM(u.raw_user_meta_data ->> 'nama_lengkap'), ''),
    NULLIF(TRIM(u.raw_user_meta_data ->> 'full_name'), ''),
    NULLIF(SPLIT_PART(COALESCE(u.email, ''), '@', 1), ''),
    'Administrator LOLOS CPNS'
  ),
  'admin'
FROM auth.users u
WHERE LOWER(TRIM(COALESCE(u.email, ''))) = 'honnecinnamon@gmail.com'
ON CONFLICT (id) DO UPDATE
  SET role = 'admin',
      email = COALESCE(EXCLUDED.email, public.profiles.email),
      updated_at = NOW();

-- ------------------------------------------------------------------------------
-- BAGIAN 5: KUERI VERIFIKASI OTOMATIS (PASTIKAN SELURUH TABEL `rowsecurity = true`)
-- ------------------------------------------------------------------------------
SELECT
  tablename AS nama_tabel,
  rowsecurity AS rls_aktif
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN (
    'profiles',
    'regulations',
    'questions',
    'tryout_packages',
    'tryout_attempts',
    'admin_accounts',
    'user_accounts',
    'payment_orders',
    'ai_usage_daily'
  )
ORDER BY tablename;
