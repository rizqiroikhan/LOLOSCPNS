-- ==============================================================================
-- MIGRASI P0 KESIAPAN KOMERSIAL & KEAMANAN — LOLOS CPNS
-- 1. Mengaktifkan Row Level Security (RLS) pada seluruh tabel inti.
-- 2. Menambahkan tabel `user_accounts`, `payment_orders`, `ai_usage_daily`.
-- 3. Memperbarui `tryout_attempts` serta mengisi 3 paket resmi di `tryout_packages`.
-- ==============================================================================

-- ==============================================================================
-- A. AKTIVASI ROW LEVEL SECURITY (RLS) PADA TABEL EKSISTING
-- ==============================================================================
ALTER TABLE regulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE tryout_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE tryout_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_accounts ENABLE ROW LEVEL SECURITY;

-- Policy `regulations`: publik hanya boleh membaca regulasi aktif
DROP POLICY IF EXISTS "publik_baca_regulasi_aktif" ON regulations;
CREATE POLICY "publik_baca_regulasi_aktif"
  ON regulations FOR SELECT
  USING (is_active = TRUE);

-- Policy `tryout_packages`: publik hanya boleh melihat katalog paket
DROP POLICY IF EXISTS "publik_baca_katalog_paket" ON tryout_packages;
CREATE POLICY "publik_baca_katalog_paket"
  ON tryout_packages FOR SELECT
  USING (TRUE);

-- Catatan: Tabel `questions`, `tryout_attempts`, dan `admin_accounts` tidak diberikan
-- policy baca/tulis publik (`anon`/`authenticated`), sehingga hanya dapat diakses
-- oleh backend terautentikasi menggunakan `service_role` (mencegah kebocoran hash kata
-- sandi admin, soal berstatus 'draf', dan kunci jawaban sebelum ujian selesai).

-- ==============================================================================
-- B. TABEL AKUN PESERTA KOMERSIAL (`user_accounts`)
-- ==============================================================================
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

-- ==============================================================================
-- C. TABEL PESANAN & TRANSAKSI PEMBAYARAN (`payment_orders`)
-- ==============================================================================
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

-- ==============================================================================
-- D. TABEL PENCATATAN KUOTA HARIAN AI (`ai_usage_daily`)
-- ==============================================================================
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

-- ==============================================================================
-- E. PENYELARASAN `tryout_attempts` & KATALOG `tryout_packages`
-- ==============================================================================
ALTER TABLE tryout_attempts
  ADD COLUMN IF NOT EXISTS package_slug VARCHAR(60),
  ADD COLUMN IF NOT EXISTS duration_seconds INT DEFAULT 0;

INSERT INTO tryout_packages (
  id,
  stage,
  title,
  description,
  is_free,
  price_idr,
  regulation_id
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
