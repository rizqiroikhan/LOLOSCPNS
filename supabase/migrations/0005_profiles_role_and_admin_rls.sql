-- ==============================================================================
-- LOLOS CPNS - MIGRASI 0005: TABEL PROFILES ROLE & KEBIJAKAN RLS KHUSUS ADMIN
-- ==============================================================================
-- Tujuan:
--   1. Menyediakan tabel `public.profiles` terhubung ke `auth.users` dengan kolom
--      `role` bertipe CHECK ('user', 'admin') yang baku bernilai `'user'`.
--   2. Memasang trigger otomatis pembuatan profil saat pendaftaran Supabase Auth
--      serta backfill akun `auth.users` yang sudah ada.
--   3. Memperketat RLS pada `profiles`, `questions`, `regulations`, dan
--      `tryout_packages` agar operasi INSERT/UPDATE/DELETE hanya diizinkan bila
--      pengguna terautentikasi memiliki `profiles.role = 'admin'`.
-- ==============================================================================

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

-- Fungsi pemeriksa peran admin berbasis `auth.uid()` tanpa rekursi RLS
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

-- ------------------------------------------------------------------------------
-- RLS TABEL PROFILES: pengguna terautentikasi hanya boleh membaca profil miliknya.
-- Perubahan kolom `role` hanya boleh dilakukan lewat SQL Editor / Service Role.
-- ------------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Pengguna melihat profil sendiri" ON public.profiles;
CREATE POLICY "Pengguna melihat profil sendiri"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- ------------------------------------------------------------------------------
-- RLS TABEL QUESTIONS: tulis (INSERT/UPDATE/DELETE) & SELECT klien hanya admin.
-- Akses `service_role` di backend API tetap berjalan normal mem-bypass RLS.
-- ------------------------------------------------------------------------------
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

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

-- ------------------------------------------------------------------------------
-- RLS TABEL REGULATIONS: publik hanya SELECT regulasi aktif; tulis hanya admin.
-- ------------------------------------------------------------------------------
ALTER TABLE public.regulations ENABLE ROW LEVEL SECURITY;

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

-- ------------------------------------------------------------------------------
-- RLS TABEL TRYOUT_PACKAGES: publik hanya SELECT katalog; tulis hanya admin.
-- ------------------------------------------------------------------------------
ALTER TABLE public.tryout_packages ENABLE ROW LEVEL SECURITY;

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
