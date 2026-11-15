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

## 4. Skema Basis Data (Supabase PostgreSQL — Siap Diperluas Menyeluruh)

> **Catatan Standarisasi Bahasa di Basis Data (DB):** Seluruh nilai data, *enum* (`stage`, `difficulty`, `status`, `formasi_type`), kunci dan label di dalam JSONB (`sections_json`, `passing_grades_json`, `options`), serta teks materi yang disimpan di DB dan ditampilkan ke Pengunjung Web maupun Admin **WAJIB** menggunakan Bahasa Indonesia yang baik dan benar.

### A. `regulations` (Aturan Resmi Kelulusan per Tahapan Seleksi CPNS)

```sql
CREATE TABLE regulations (
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
```

### B. `questions` (Bank Soal Terkurasi & Vektor Pencarian)

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE questions (
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
  is_sensory_blind BOOLEAN DEFAULT FALSE,
  answers_json JSONB DEFAULT '{}'::jsonb,
  section_scores_json JSONB DEFAULT '{"TWK": 0, "TIU": 0, "TKP": 0}'::jsonb,
  total_score INT DEFAULT 0,
  is_passed BOOLEAN DEFAULT FALSE,
  ai_diagnostic_summary TEXT,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  finished_at TIMESTAMPTZ
);
```

## 5. Peta Jalan Pengembangan Bertahap & Git Push

Lihat rincian Fase 1 s.d. Fase 5 di `project_contract_lolos_cpns.md`.

## 6. Instruksi untuk Agen Google Antigravity

1. Selalu baca `project_contract_lolos_cpns.md` / `CONTRACT.md` sebelum membuat berkas baru atau mengubah skema basis data.
2. **Aturan Ketat Penggunaan Bahasa Indonesia (UI, FE, BE, & DB):** Pastikan **SELURUH** teks, label, status, pesan validasi/kesalahan, instruksi dan keluaran AI, rute halaman yang dilihat peserta/Admin, serta nilai data/*enum* di basis data yang tampil kepada pengunjung web maupun Admin menggunakan **Bahasa Indonesia yang baik dan benar** (sesuai PUEBI/EYD dan terminologi resmi BKN/Kemenpan-RB). Istilah bahasa Inggris hanya diperbolehkan di luar itu, yakni pada lapisan teknis internal di balik layar yang tidak pernah dilihat oleh pengunjung web maupun Admin (sintaks bahasa pemrograman, nama pustaka/*package*, variabel kode internal, dan nama variabel `.env`).
3. Jangan pernah menanamkan (*hardcode*) kunci API atau mengunci kode pada satu SDK AI berbayar; selalu arahkan pemanggilan LLM/Vision/Embedding melalui Adaptor AI kompatibel OpenAI berbasis `.env` (`AI_BASE_URL`, `AI_API_KEY`, `AI_CHAT_MODEL`, `AI_VISION_MODEL`, `AI_EMBEDDING_MODEL`).
4. Jaga agar seluruh tipe TypeScript selalu tersinkronisasi penuh dengan skema PostgreSQL pada Bagian 4, dengan mempertahankan abstraksi tahapan `stage` (`SKD` terlebih dahulu, dapat diperluas ke `SKB`/`LAINNYA`) serta dua mode evaluasi Nilai Ambang Batas SKD (`per_subtes` vs `kumulatif_dan_tiu`).
5. Di akhir setiap Fase, rangkum seluruh berkas yang dibuat/diubah dan berikan perintah `git` lengkap untuk memverifikasi serta melakukan *push* tonggak pencapaian tersebut.
