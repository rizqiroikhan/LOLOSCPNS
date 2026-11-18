-- ==============================================================================
-- LOLOS CPNS - MIGRASI 0006: PENETAPAN ADMIN (`honnecinnamon@gmail.com`)
-- ==============================================================================
-- Catatan Operasional:
--   1. Pastikan `0005_profiles_role_and_admin_rls.sql` sudah dijalankan.
--   2. Pastikan akun `honnecinnamon@gmail.com` sudah terdaftar pada Supabase
--      Auth (`auth.users`) lewat menu Authentication -> Users atau `/masuk`.
--   3. Skrip ini bersifat idempoten dan aman dijalankan berulang kali.
-- ==============================================================================

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

DO $$
DECLARE
  jumlah_admin INT;
BEGIN
  SELECT COUNT(*)
  INTO jumlah_admin
  FROM public.profiles
  WHERE LOWER(TRIM(COALESCE(email, ''))) = 'honnecinnamon@gmail.com'
    AND role = 'admin';

  IF jumlah_admin = 0 THEN
    RAISE NOTICE 'Akun honnecinnamon@gmail.com belum ditemukan di auth.users. Daftarkan akun ini terlebih dahulu di Supabase Authentication -> Users atau /masuk, lalu jalankan ulang migrasi 0006.';
  END IF;
END
$$;

SELECT id, email, role, updated_at
FROM public.profiles
WHERE LOWER(TRIM(COALESCE(email, ''))) = 'honnecinnamon@gmail.com';
