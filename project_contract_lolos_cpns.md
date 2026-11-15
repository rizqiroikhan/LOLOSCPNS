# KONTRAK PROYEK: LOLOS CPNS

**Versi:** 1.4.0

**Status:** Cetak Biru Aktif (Siap Dieksekusi Agen di Google Antigravity)

**Visi Produk:** Platform Persiapan & Simulasi CAT CPNS Menyeluruh (*End-to-End*) Berbasis Rekayasa AI (**LOLOS CPNS**). Dimulai dari modul inti **Seleksi Kompetensi Dasar (SKD)** berbasis regulasi resmi terstruktur (Kepmenpan-RB Nomor 321 Tahun 2024), bank soal dinamis (ekstraksi multimodal & parafrase), dan Tutor AI interaktif, serta dirancang modular agar dapat diperluas ke tahapan seleksi CPNS berikutnya (SKB, Psikotes/Wawancara, dan Pemberkasan).

## 1. Prinsip Utama Arsitektur (Batasan Sistem)

1. **Modularitas Menyeluruh (Fokus Awal SKD, Siap Diperluas ke Seluruh Tahap CPNS):**
   * Arsitektur basis data, rute halaman aplikasi (`/simulasi/skd/...`), dan mesin evaluasi dirancang dengan kolom `stage` (`SKD`, dan siap diperluas ke `SKB`, `PSIKOTES`, `LAINNYA`) agar pengembangan awal fokus 100% pada **SKD**, namun siap dikembangkan menjadi ekosistem persiapan CPNS menyeluruh tanpa migrasi ulang struktur inti.

2. **Standarisasi Bahasa Indonesia yang Baik dan Benar (UI, FE, BE, & DB):**
   * Seluruh teks, label, data, rute halaman, dan pesan yang dapat dilihat oleh pengunjung web (peserta) maupun Admin—baik di **UI/Frontend** (navigasi, tombol, label formulir, status, lencana, grafik, laporan nilai), **Backend/API** (pesan respons JSON, pesan validasi, peringatan/kesalahan, serta instruksi dan keluaran AI), maupun **Database** (nilai *enum* seperti tingkat kesulitan `mudah`/`sedang`/`sulit`, status soal `draf`/`disetujui`/`diarsipkan`, tahapan `SKD`/`SKB`/`LAINNYA`/`TERPADU`, mode kelulusan `per_subtes`/`kumulatif_dan_tiu`, serta seluruh isi materi)—**WAJIB** menggunakan Bahasa Indonesia yang baku, baik, dan benar sesuai PUEBI/EYD serta terminologi resmi BKN/Kemenpan-RB.
   * Istilah bahasa Inggris **HANYA** diperbolehkan di luar lapisan tersebut, yakni pada lapisan kode teknis internal yang sama sekali tidak terlihat oleh pengunjung web maupun Admin (seperti sintaks bahasa pemrograman, nama pustaka/*package*, variabel kode internal, dan kunci konfigurasi `.env`).

3. **Independensi Penyedia AI & Tanpa Biaya Langganan Awal (Pluggable AI Adapter):**
   * Sistem AI **TIDAK BOLEH** terkunci pada satu SDK penyedia berbayar. Seluruh pemanggilan model AI (Diskusi Tutor, Ekstraksi JSON Terstruktur, Pembacaan Gambar/OCR, dan *Embedding*) wajib dibungkus dalam **Adaptor AI Terpadu** berbasis `.env` (`AI_PROVIDER`, `AI_BASE_URL`, `AI_API_KEY`, `AI_CHAT_MODEL`, `AI_VISION_MODEL`, `AI_EMBEDDING_MODEL`).
   * **Konfigurasi Awal (Gratis Tanpa Kartu Kredit):** Menggunakan **Google AI Studio Free Tier** (API Key gratis melalui akun Gmail tanpa aktivasi tagihan Google Cloud) atau penyedia kompatibel OpenAI gratis seperti **Groq Free Tier** / **OpenRouter Free Models** / **Ollama (Lokal)**.

4. **Penilaian Deterministik vs. AI Probabilistik:**
   * Penilaian skor CAT SKD, perhitungan waktu (100 menit reguler / 130 menit disabilitas sensorik netra), bobot jawaban (TWK/TIU: benar +5, salah/kosong 0; TKP: skala 1–5, kosong 0), dan pengecekan Nilai Ambang Batas berdasarkan kategori formasi **WAJIB** dieksekusi oleh kode deterministik (TypeScript/Python) dari tabel `regulations`.
   * Model AI **DILARANG** menghitung skor ujian atau menentukan status kelulusan secara mandiri untuk mencegah kesalahan hitung.

5. **Ekstraksi Konten Aman Hak Cipta (Anti-Salin Persis):**
   * Semua soal yang diekstrak dari dokumen PDF atau hasil pindaian buku cetak wajib melewati tahap *Parafrase & Variasi Semantik* dalam Bahasa Indonesia yang baik dan benar sebelum dipublikasikan kepada peserta.
   * Kalimat soal dan angka hitungan diubah untuk menghasilkan soal orisinal yang tetap mempertahankan konsep pengujian dan tingkat kesulitan yang setara.

6. **Penyajian Soal Hibrida (Kendali Biaya & Mutu):**
   * Sesi Simulasi SKD Utama (110 soal) menggunakan bank soal terkurasi yang sudah berstatus `disetujui` di basis data (tanpa biaya token AI saat ujian berlangsung).
   * Pembuatan soal baru secara langsung oleh AI hanya diaktifkan pada fitur **Latihan Perbaikan Adaptif** berdasarkan sub-topik terlemah peserta.

7. **Eksekusi Bertahap (Commit & Push per Fase):**
   * Agen di Antigravity **WAJIB** mengerjakan serta melakukan `git commit` dan `git push` per fase. Tidak diperkenankan melompat ke fase berikutnya sebelum seluruh kriteria selesai pada fase aktif terpenuhi.

## 2. Acuan Regulasi Resmi — Modul SKD (Kepmenpan-RB Nomor 321 Tahun 2024)

Seluruh logika Mesin Penilaian, Klasifikasi Otomatis soal, dan Analisis Kesenjangan Nilai pada modul **SKD** mengacu pada ketentuan resmi **Keputusan Menteri PANRB Nomor 321 Tahun 2024** (ditetapkan 29 Juli 2024):

### A. Struktur Soal, Durasi, dan Pembobotan SKD

* **Total Soal SKD:** 110 butir soal.
* **Durasi Pengerjaan:**
  * **Reguler / Umum & Kebutuhan Khusus Lainnya:** 100 menit.
  * **Khusus Penyandang Disabilitas Sensorik Netra (pada kebutuhan khusus disabilitas):** 130 menit.
* **Rincian Materi SKD, Jumlah Soal, Bobot, & Skor Maksimal (Kumulatif Maksimal = 550):**
  1. **Tes Wawasan Kebangsaan (TWK):**
     * Jumlah: 30 butir | Benar: `+5`, Salah/Kosong: `0` | Skor Maksimal: `150`.
     * Kisi-kisi Resmi (`sub_topic`): *Nasionalisme, Integritas, Bela Negara, Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika), Bahasa Negara*.
  2. **Tes Intelegensia Umum (TIU):**
     * Jumlah: 35 butir | Benar: `+5`, Salah/Kosong: `0` | Skor Maksimal: `175`.
     * Kisi-kisi Resmi (`sub_topic`):
       * *Kemampuan Verbal:* Analogi, Silogisme, Analitis.
       * *Kemampuan Numerik:* Berhitung, Deret Angka, Perbandingan Kuantitatif, Soal Cerita.
       * *Kemampuan Figural:* Analogi Gambar, Ketidaksamaan Gambar, Serial Gambar.
  3. **Tes Karakteristik Pribadi (TKP):**
     * Jumlah: 45 butir | Jawaban: skala `1` s.d. `5`, Kosong: `0` | Skor Maksimal: `225`.
     * Kisi-kisi Resmi (`sub_topic`): *Pelayanan Publik, Jejaring Kerja, Sosial Budaya, Teknologi Informasi dan Komunikasi (TIK), Profesionalisme, Anti Radikalisme*.

### B. Kategorisasi Nilai Ambang Batas SKD per Jenis Kebutuhan

| Kode Formasi (`formasi_type`) | Kategori Kebutuhan Resmi | Syarat Nilai Ambang Batas Kelulusan SKD | Mode Evaluasi (`mode_evaluasi`) |
| :--- | :--- | :--- | :--- |
| `umum` | Kebutuhan Umum | **TWK ≥ 65**, **TIU ≥ 80**, **TKP ≥ 166** (Per sub-tes) | `per_subtes` |
| `kalimantan` | Kebutuhan Khusus Putra/Putri Kalimantan | **TWK ≥ 65**, **TIU ≥ 80**, **TKP ≥ 166** (Per sub-tes) | `per_subtes` |
| `cumlaude` | Kebutuhan Khusus Lulusan Terbaik (*Cumlaude*) | **Kumulatif SKD ≥ 311** dan **TIU ≥ 85** | `kumulatif_dan_tiu` |
| `diaspora` | Kebutuhan Khusus Diaspora | **Kumulatif SKD ≥ 311** dan **TIU ≥ 85** | `kumulatif_dan_tiu` |
| `disabilitas` | Kebutuhan Khusus Penyandang Disabilitas | **Kumulatif SKD ≥ 286** dan **TIU ≥ 60** | `kumulatif_dan_tiu` |
| `papua` | Kebutuhan Khusus Putra/Putri Papua | **Kumulatif SKD ≥ 286** dan **TIU ≥ 60** | `kumulatif_dan_tiu` |
| `daerah_tertinggal` | Kebutuhan Khusus Putra/Putri Daerah Tertinggal | **Kumulatif SKD ≥ 286** dan **TIU ≥ 60** | `kumulatif_dan_tiu` |

## 3. Tumpukan Teknologi & Arsitektur Adaptor AI

* **Aplikasi Web Utama (Frontend/FE):** Next.js (App Router, TypeScript), Tailwind CSS, Shadcn UI, Framer Motion — seluruh teks antarmuka (UI) dan rute halaman menggunakan Bahasa Indonesia yang baik dan benar.
* **Layanan AI & Ekstraksi (Backend/BE):** Python 3.11+ (FastAPI), PyMuPDF / Pillow, **Klien Kompatibel OpenAI** (memungkinkan pergantian model & penyedia cukup dari `.env`, dengan pesan respons API dan keluaran AI 100% berbahasa Indonesia baku).
* **Basis Data, Autentikasi & Penyimpanan (DB):** Supabase Free Tier (PostgreSQL, `pgvector` untuk RAG, autentikasi Google OAuth, serta penyimpanan berkas untuk gambar soal figural & dokumen regulasi).
* **Peluncuran & Pembayaran (Produksi):** Vercel (Frontend), Railway/Render (Layanan FastAPI), Midtrans / Mayar (QRIS & Akun Virtual).

### Konfigurasi `.env` AI Adapter (Bebas Ganti Provider Tanpa Ubah Kode)

```env
# Pilihan Provider: "gemini_free" | "groq_free" | "openrouter_free" | "ollama_local" | "custom_openai"
AI_PROVIDER="gemini_free"

# Default Tahap Awal: Google AI Studio Free Tier (Tanpa Billing/Kartu Kredit)
# Cukup buat API Key gratis di aistudio.google.com
AI_BASE_URL="https://generativelanguage.googleapis.com/v1beta/openai/"
AI_API_KEY="your_free_aistudio_api_key"
AI_CHAT_MODEL="gemini-2.5-flash"
AI_VISION_MODEL="gemini-2.5-flash"
AI_EMBEDDING_MODEL="text-embedding-004"

# Alternatif 100% Gratis Lainnya (Tinggal uncomment jika ingin pindah):
# AI_PROVIDER="groq_free"
# AI_BASE_URL="https://api.groq.com/openai/v1"
# AI_API_KEY="your_free_groq_api_key"
# AI_CHAT_MODEL="llama-3.3-70b-versatile"
# AI_VISION_MODEL="llama-3.2-90b-vision-preview"
```

## 4. Skema Basis Data (Supabase PostgreSQL — Siap Diperluas Menyeluruh)

> **Catatan Standarisasi Bahasa di Basis Data (DB):** Seluruh nilai data, *enum* (`stage`, `difficulty`, `status`, `formasi_type`), kunci dan label di dalam JSONB (`sections_json`, `passing_grades_json`, `options`), serta teks materi yang disimpan di DB dan ditampilkan ke Pengunjung Web maupun Admin **WAJIB** menggunakan Bahasa Indonesia yang baik dan benar.

### A. `regulations` (Aturan Resmi Kelulusan per Tahapan Seleksi CPNS)

Menyimpan hasil ekstraksi terstruktur dari Kepmenpan-RB terbaru dengan kolom `stage` (`SKD` saat ini, siap diperluas ke `SKB` di masa depan):

```sql
CREATE TABLE regulations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stage VARCHAR(20) NOT NULL DEFAULT 'SKD' CHECK (stage IN ('SKD', 'SKB', 'LAINNYA')),
  title TEXT NOT NULL, -- contoh: "Kepmenpan-RB Nomor 321 Tahun 2024"
  year INT NOT NULL,
  default_duration_minutes INT DEFAULT 100,
  blind_disability_duration_minutes INT DEFAULT 130,
  total_questions INT DEFAULT 110,
  max_cumulative_score INT DEFAULT 550,
  sections_json JSONB NOT NULL,
  passing_grades_json JSONB NOT NULL, -- mode evaluasi: 'per_subtes' atau 'kumulatif_dan_tiu'
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### B. `questions` (Bank Soal Terkurasi & Vektor Pencarian)

Mendukung pemisahan tahapan (`stage`) dan kategori tes (`category`), sehingga bank soal SKD dan modul lanjutan (SKB/Jabatan) terisolasi rapi dalam satu mesin RAG:

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stage VARCHAR(20) NOT NULL DEFAULT 'SKD' CHECK (stage IN ('SKD', 'SKB', 'LAINNYA')),
  category VARCHAR(30) NOT NULL, -- Untuk SKD: 'TWK', 'TIU', 'TKP' (Dapat diperluas untuk sub-tes SKB)
  sub_topic TEXT NOT NULL, -- Wajib mengacu pada daftar sub-topik resmi berbahasa Indonesia
  difficulty VARCHAR(15) DEFAULT 'sedang' CHECK (difficulty IN ('mudah', 'sedang', 'sulit')),
  question_text TEXT NOT NULL,
  image_url TEXT, -- Opsional untuk TIU Figural atau ilustrasi teknis
  options JSONB NOT NULL,
  -- Format options (pilihan jawaban berbahasa Indonesia):
  -- [{"kunci": "A", "teks": "...", "skor": 0}, {"kunci": "B", "teks": "...", "skor": 5}, ...]
  explanation TEXT NOT NULL,
  source_reference TEXT, -- Referensi pasal/konsep dasar dalam Bahasa Indonesia
  is_paraphrased BOOLEAN DEFAULT FALSE,
  status VARCHAR(15) DEFAULT 'draf' CHECK (status IN ('draf', 'disetujui', 'diarsipkan')),
  embedding VECTOR(768),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### C. `tryout_packages` & `tryout_attempts` (Paket Simulasi & Riwayat Ujian Peserta)

```sql
CREATE TABLE tryout_packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stage VARCHAR(20) NOT NULL DEFAULT 'SKD' CHECK (stage IN ('SKD', 'SKB', 'TERPADU')),
  title TEXT NOT NULL,
  description TEXT,
  is_free BOOLEAN DEFAULT FALSE,
  price_idr INT DEFAULT 0,
  regulation_id UUID REFERENCES regulations(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE tryout_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  package_id UUID REFERENCES tryout_packages(id),
  stage VARCHAR(20) NOT NULL DEFAULT 'SKD',
  formasi_type VARCHAR(25) DEFAULT 'umum' CHECK (
    formasi_type IN ('umum', 'kalimantan', 'cumlaude', 'diaspora', 'disabilitas', 'papua', 'daerah_tertinggal')
  ),
  is_sensory_blind BOOLEAN DEFAULT FALSE, -- Jika TRUE pada formasi disabilitas, durasi = 130 menit
  answers_json JSONB DEFAULT '{}'::jsonb,
  section_scores_json JSONB DEFAULT '{"TWK": 0, "TIU": 0, "TKP": 0}'::jsonb,
  total_score INT DEFAULT 0,
  is_passed BOOLEAN DEFAULT FALSE,
  ai_diagnostic_summary TEXT, -- Ringkasan evaluasi AI dalam Bahasa Indonesia yang baku
  started_at TIMESTAMPTZ DEFAULT NOW(),
  finished_at TIMESTAMPTZ
);
```

## 5. Peta Jalan Pengembangan Bertahap & Git Push

Setiap fase di bawah ini adalah satu siklus kerja di Google Antigravity. Lakukan `git push` setelah setiap fase selesai diuji secara lokal.

### Fase 1: Penyiapan Repositori, Skema Basis Data, Adaptor AI & Mesin Penilaian Deterministik SKD

* **Cakupan Kerja:**
  * Inisialisasi monorepo (`/web` untuk Next.js dan `/ai-service` untuk Python FastAPI).
  * Buat templat `.env.example` dan modul **Adaptor Penyedia AI Terpadu** (`/ai-service/app/ai_provider.py` dan `/web/src/lib/ai-client.ts`) yang menggunakan standar *endpoint* kompatibel OpenAI sehingga dapat memakai **Google AI Studio Free Tier**, **Groq Free Tier**, **OpenRouter**, atau **Ollama** cukup dengan mengubah `.env`.
  * Siapkan koneksi Supabase dan jalankan migrasi SQL (`regulations`, `questions`, `tryout_packages`, `tryout_attempts`) beserta data awal (*seed data*) regulasi **SKD Kepmenpan-RB Nomor 321 Tahun 2024** dengan seluruh nilai status (`draf`, `disetujui`, `diarsipkan`), tingkat kesulitan (`mudah`, `sedang`, `sulit`), dan label dalam Bahasa Indonesia yang baik dan benar.
  * Buat fungsi murni yang teruji (*unit-tested*) di `/web/src/lib/scoring-engine.ts` yang mengevaluasi kelulusan **SKD** secara deterministik dalam dua mode (`per_subtes` vs `kumulatif_dan_tiu`) beserta keterangan hasil evaluasi dalam Bahasa Indonesia baku.
* **Kriteria Selesai:** Struktur folder rapi, adaptor AI berjalan lancar dengan API Key gratis tanpa tagihan, basis data termigrasi dengan data awal regulasi SKD 321/2024 berbahasa Indonesia, pengujian unit mesin skor SKD untuk ke-7 kategori formasi lulus 100%.
* **Tonggak Git:** `git commit -m "feat(phase-1): setup LOLOS CPNS monorepo, pluggable free-tier AI adapter, and deterministic SKD core"` -> `git push`

### Fase 2: Studio Kurasi & Ekstraksi Soal Multimodal (Regulasi & Bank Soal)

* **Cakupan Kerja:**
  * Bangun endpoint FastAPI `/ingest/regulation` (melalui `AI_CHAT_MODEL` di `.env`) untuk mengekstrak PDF aturan seleksi CPNS menjadi JSON terstruktur ke tabel `regulations` dengan pesan respons berbahasa Indonesia yang baik dan benar.
  * Bangun endpoint FastAPI `/ingest/questions` (melalui `AI_VISION_MODEL` & `AI_EMBEDDING_MODEL` di `.env`) untuk memproses PDF/pindaian buku cetak:
    1. Ekstrak soal, pilihan jawaban A–E (`kunci`, `teks`, `skor`), dan kunci jawaban secara terstruktur.
    2. Klasifikasikan otomatis `stage` (`SKD`), `category` (`TWK`/`TIU`/`TKP`), tingkat kesulitan (`mudah`/`sedang`/`sulit`), dan `sub_topic` sesuai kisi-kisi resmi Diktum KEDUA Kepmenpan-RB 321/2024.
    3. Potong gambar soal figural jika ada dan unggah ke Supabase Storage.
    4. Jalankan parafrase otomatis + penyusunan pembahasan mendalam dalam Bahasa Indonesia yang baik dan benar (jika pembahasan belum ada di sumber).
    5. Buat vektor *embedding* untuk RAG (dengan cadangan otomatis ke pencarian teks penuh / `tsvector` Bahasa Indonesia jika menggunakan penyedia AI gratis tanpa fitur *embedding*).
  * Bangun halaman Admin UI `/admin/kurasi-soal` di Next.js dengan antarmuka 100% Bahasa Indonesia untuk unggah dokumen, tinjauan berdampingan (**Naskah Asli** vs **Hasil Parafrase AI**), penyuntingan, dan tombol **Setujui**.
* **Kriteria Selesai:** Admin dapat mengunggah PDF aturan SKD + 1 halaman pindaian soal menggunakan API gratis, melihat hasil klasifikasi kisi-kisi & parafrase dalam Bahasa Indonesia baku, dan menyetujuinya masuk ke basis data (`status = 'disetujui'`).
* **Tonggak Git:** `git commit -m "feat(phase-2): add multimodal AI ingestion pipeline and admin review studio"` -> `git push`

### Fase 3: Simulator CAT SKD & Halaman Utama Berkonversi Tinggi

* **Cakupan Kerja:**
  * Bangun Halaman Utama **LOLOS CPNS** (`/`) sepenuhnya dalam Bahasa Indonesia yang baik dan benar: bagian Utama, widget **Kuis Singkat Interaktif 3 Soal SKD** (TWK, TIU, TKP) langsung di halaman depan, alur persiapan (*Mulai dari Nol -> Lolos SKD -> Siap Tahap Lanjutan*), perbandingan fitur, dan pilihan paket belajar.
  * Bangun antarmuka **Simulator CAT SKD** (`/simulasi/skd/[id]`) sesuai standar BKN (istilah resmi: *Sisa Waktu*, *Nilai Ambang Batas*, *Simpan & Lanjutkan*, *Ragu-ragu*, *Lewati Soal*, *Selesai Ujian*) lengkap dengan pemilihan 7 kategori formasi, opsi aksesibilitas disabilitas sensorik netra (130 menit), hitung mundur waktu, navigasi 110 soal, dan penyimpanan jawaban otomatis.
* **Kriteria Selesai:** Pengunjung dapat memilih kategori formasi, mencoba kuis singkat SKD, masuk akun, mengerjakan simulasi CAT SKD 110 soal hingga selesai, dan melihat rincian skor deterministik dalam Bahasa Indonesia sesuai kategori formasinya.
* **Tonggak Git:** `git commit -m "feat(phase-3): build LOLOS CPNS landing page with SKD mini-quiz and BKN-standard CAT simulator"` -> `git push`

### Fase 4: Analisis Kesenjangan Nilai, Tutor AI Sokratik & Latihan Perbaikan Adaptif

* **Cakupan Kerja:**
  * **Analisis Kesenjangan Nilai SKD:** Grafik perbandingan skor peserta terhadap *Nilai Ambang Batas* resmi SKD sesuai kategori formasi pilihannya serta daftar sub-topik kisi-kisi (`sub_topic`) dengan akurasi terendah.
  * **Tutor AI Sokratik:** Widget diskusi interaktif di halaman pembahasan soal yang terhubung ke `AI_CHAT_MODEL` (bebas ganti penyedia melalui `.env`) menggunakan RAG untuk membimbing peserta secara bertahap dengan Bahasa Indonesia yang sopan, jelas, dan edukatif.
  * **Latihan Perbaikan Adaptif:** Tombol *"Latih Kelemahanmu"* yang membuat 5–10 soal variasi baru secara dinamis pada `sub_topic` resmi SKD terlemah peserta.
* **Kriteria Selesai:** Fitur analisis kelemahan SKD, tanya-jawab Tutor AI pada pembahasan soal, dan latihan perbaikan adaptif berfungsi lancar dalam Bahasa Indonesia menggunakan model gratis di `.env`.
* **Tonggak Git:** `git commit -m "feat(phase-4): integrate RAG Socratic AI tutor, SKD gap analyzer, and adaptive drill"` -> `git push`

### Fase 5: Monetisasi, Kendali Akses & Peluncuran Produksi

* **Cakupan Kerja:**
  * Implementasi kendali akses paket: 1 paket *Simulasi SKD* gratis + kuota terbatas diskusi Tutor AI; paket lengkap terbuka setelah pembayaran (siap untuk paket terpadu modul lanjutan SKB di masa depan).
  * Integrasi gerbang pembayaran (Midtrans/Mayar *webhook*) untuk aktivasi akses otomatis dengan notifikasi dan status transaksi berbahasa Indonesia.
  * Optimasi performa, metadata SEO berbahasa Indonesia untuk **LOLOS CPNS**, pembatasan laju permintaan (*rate limiting*) endpoint AI dengan pesan peringatan berbahasa Indonesia, dan peluncuran ke produksi.
* **Kriteria Selesai:** Alur pembayaran menyeluruh (mode pengujian) berhasil membuka akses paket berbayar dan aplikasi **LOLOS CPNS** siap melayani pengunjung publik dengan Bahasa Indonesia yang baik dan benar di seluruh lini.
* **Tonggak Git:** `git commit -m "feat(phase-5): add payment gateway integration, freemium access guard, and prod config"` -> `git push`

## 6. Instruksi untuk Agen Google Antigravity

Saat mengeksekusi tugas dari kontrak proyek ini:

1. Selalu baca `project_contract_lolos_cpns.md` sebelum membuat berkas baru atau mengubah skema basis data.
2. **Aturan Ketat Penggunaan Bahasa Indonesia (UI, FE, BE, & DB):** Pastikan **SELURUH** teks, label, status, pesan validasi/kesalahan, instruksi dan keluaran AI, rute halaman yang dilihat peserta/Admin, serta nilai data/*enum* di basis data yang tampil kepada pengunjung web maupun Admin menggunakan **Bahasa Indonesia yang baik dan benar** (sesuai PUEBI/EYD dan terminologi resmi BKN/Kemenpan-RB). Istilah bahasa Inggris hanya diperbolehkan di luar itu, yakni pada lapisan teknis internal di balik layar yang tidak pernah dilihat oleh pengunjung web maupun Admin (sintaks bahasa pemrograman, nama pustaka/*package*, variabel kode internal, dan nama variabel `.env`).
3. Jangan pernah menanamkan (*hardcode*) kunci API atau mengunci kode pada satu SDK AI berbayar; selalu arahkan pemanggilan LLM/Vision/Embedding melalui Adaptor AI kompatibel OpenAI berbasis `.env` (`AI_BASE_URL`, `AI_API_KEY`, `AI_CHAT_MODEL`, `AI_VISION_MODEL`, `AI_EMBEDDING_MODEL`).
4. Jaga agar seluruh tipe TypeScript selalu tersinkronisasi penuh dengan skema PostgreSQL pada Bagian 4, dengan mempertahankan abstraksi tahapan `stage` (`SKD` terlebih dahulu, dapat diperluas ke `SKB`/`LAINNYA`) serta dua mode evaluasi Nilai Ambang Batas SKD (`per_subtes` vs `kumulatif_dan_tiu`).
5. Di akhir setiap Fase, rangkum seluruh berkas yang dibuat/diubah dan berikan perintah `git` lengkap untuk memverifikasi serta melakukan *push* tonggak pencapaian tersebut.