-- ==============================================================================
-- MIGRASI TABEL AKUN ADMIN PANEL — LOLOS CPNS
-- Menyimpan daftar username dan kata sandi (hash scrypt terenkripsi) untuk
-- mengakses Menu Admin (Kurasi Soal & Manajemen Akun Admin).
-- ==============================================================================

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
