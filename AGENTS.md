# Aturan Kerja Agen — Proyek LOLOS CPNS

Dokumen ini berlaku otomatis untuk seluruh sesi agen (Antigravity Desktop, IDE, maupun CLI) di repositori **LOLOS CPNS**.

## 1. Acuan Kontrak & Standar Proyek

1. **Baca Kontrak Sebelum Mengubah Inti Sistem:** Selalu rujuk `CONTRACT.md` dan `project_contract_lolos_cpns.md` sebelum membuat fitur baru, rute baru, atau mengubah skema basis data.
2. **100% Bahasa Indonesia Baku:** Seluruh teks antarmuka (UI), pesan API yang tampil ke peserta/admin, dan nilai/label basis data wajib menggunakan Bahasa Indonesia yang baik dan benar sesuai EYD/PUEBI serta terminologi resmi BKN/Kemenpan-RB.
3. **Penilaian Deterministik:** Perhitungan durasi ujian (100 / 130 menit disabilitas sensorik netra), pembobotan TWK/TIU/TKP, dan evaluasi Nilai Ambang Batas 7 kategori formasi mengacu pada **Kepmenpan-RB Nomor 321 Tahun 2024** dan wajib dieksekusi oleh kode deterministik (bukan AI).
4. **Standar Antarmuka:** Perubahan UI/Frontend wajib mengacu pada panduan skill `.agent/skills/taste-ui-lolos-cpns/SKILL.md` (`tabular-nums`, ikon `lucide-react`, hierarki visual konsisten).

## 2. Disiplin Lingkup Kerja (*Scope Control*)

- Kerjakan **satu perbaikan atau satu fitur secara tuntas dan terfokus** (hindari perombakan puluhan berkas di luar lingkup tugas dalam satu commit).
- Jangan memodifikasi modul `auth`, `payment`, atau `supabase` di luar kebutuhan tugas aktif.
- Di Windows PowerShell, gunakan `npm.cmd` (bukan `npm`) bila `npm.ps1` diblokir *ExecutionPolicy*.

## 3. Quality Gate Wajib Sebelum `git commit` & `git push`

Setiap selesai debugging atau mengubah kode, **WAJIB** menjalankan verifikasi berikut sebelum melakukan commit dan push:

1. **Audit Keamanan, TypeScript, & Unit Test (Wajib Selalu):**
   - Jalankan `node scripts/cek-kesiapan-produksi.mjs` dari akar repo dan pastikan `tsc --noEmit` serta seluruh unit test lulus 100%.
2. **Evaluasi AI (Wajib bila menyentuh AI, RAG, soal, atau tutor):**
   - Jalankan `node scripts/jalankan-eval-ai.mjs` dan pastikan 36/36 skenario evaluasi lulus.
3. **Build & Layanan Python (Bila relevan dengan perubahan):**
   - Jika mengubah rute/komponen Next.js atau konfigurasi build, verifikasi kompilasi dengan `npm.cmd --prefix web run build` (atau `node scripts/cek-kesiapan-produksi.mjs --dengan-build`) bila lingkungan mengizinkan.
   - Jika mengubah `ai-service/`, jalankan pengujian unit Python di `ai-service/tests`.

**Aturan Keras:** Dilarang keras melakukan `git push` apabila salah satu pemeriksaan wajib di atas masih gagal. Perbaiki terlebih dahulu hingga lulus, atau laporkan kegagalan secara jujur beserta penyebabnya.

## 4. Guard Keamanan Produksi & Larangan Perintah Destruktif

1. **Larangan Melonggarkan Keamanan Produksi:**
   - Dilarang menanamkan kata sandi bawaan atau kunci sesi (*session secret*) statis yang tetap diterima pada `NODE_ENV === "production"`.
   - Dilarang melewati verifikasi tanda tangan webhook pembayaran (`signature_key`) atau membiarkan endpoint uji coba lokal aktif di produksi.
   - Dilarang menurunkan *fail-closed guard* (misalnya fallback diam-diam ke penyimpanan memori/berkas lokal atau memakai `ANON_KEY` saat `SUPABASE_SERVICE_ROLE_KEY` bermasalah) di produksi—perbaiki konfigurasi atau tampilkan galat server yang jelas.
2. **Larangan Kebersihan Git:**
   - Jangan pernah men-commit `.env`, `.env.local`, `web/.data/`, atau berkas kredensial/sertifikat (`*.pem`).
3. **Larangan Perintah Destruktif:**
   - Dilarang menjalankan `git push --force`, `git reset --hard` pada riwayat remote, penghapusan massal di luar lingkup tugas (`rm -rf`), atau menghapus data/tabel produksi tanpa instruksi eksplisit pengguna.

## 5. Alur Commit & Push Otomatis Setelah Debugging

Apabila pengguna meminta eksekusi otonom/debugging sampai tuntas dan seluruh **Quality Gate (Bagian 3)** telah lulus 100%:

1. Periksa `git status` dan `git diff --stat` untuk memastikan hanya berkas terkait tugas yang ikut berubah.
2. Lakukan `git add` secara selektif (hanya berkas yang relevan).
3. Lakukan `git commit` dengan pesan konvensional yang ringkas dan akurat (contoh: `fix(payment): ...` atau `fix(auth): ...`).
4. Jalankan `git push` ke remote aktif dan catat hash commit yang berhasil ter-push.

## 6. Format Laporan Akhir Wajib

Setiap kali menyelesaikan debugging atau pekerjaan fitur (terutama saat mode otonom/`Turbo`), tutup respons akhir dengan struktur tetap berikut—berbasis fakta dari berkas dan output perintah yang benar-benar dijalankan:

1. **Apa yang Dilakukan**
   - Akar masalah yang ditemukan dan ringkasan perubahan per berkas.
   - Hasil aktual verifikasi/tes yang dijalankan (sebutkan jika ada pemeriksaan yang terblokir lingkungan).
   - Hash commit dan status `git push`.
2. **Benefit Nyata bagi Peserta**
   - Dampak langsung yang dirasakan peserta CPNS (misal: kelancaran pembayaran, keandalan penyimpanan akun & riwayat tryout, akurasi penilaian/pembahasan, kenyamanan tampilan CAT).
3. **Benefit Nyata bagi Admin / Operasional**
   - Dampak nyata bagi pengelola platform (misal: kecepatan kurasi soal, keamanan akses admin, kejelasan diagnosis galat, kestabilan rilis produksi).
