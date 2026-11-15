-- ==============================================================================
-- DATA AWAL (SEED DATA) RESMI: LOLOS CPNS (FASE 1)
-- Regulasi Acuan: Keputusan Menteri PANRB Nomor 321 Tahun 2024
-- Nilai Ambang Batas Seleksi Kompetensi Dasar (SKD) Pengadaan PNS TA 2024
-- ==============================================================================

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
      "ambang_batas_subtes": {
        "TWK": 65,
        "TIU": 80,
        "TKP": 166
      }
    },
    "kalimantan": {
      "kode_formasi": "kalimantan",
      "nama_kategori": "Kebutuhan Khusus Putra/Putri Kalimantan",
      "mode_evaluasi": "per_subtes",
      "ambang_batas_subtes": {
        "TWK": 65,
        "TIU": 80,
        "TKP": 166
      }
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

-- Paket Simulasi SKD Perdana (Gratis)
INSERT INTO tryout_packages (
  id,
  stage,
  title,
  description,
  is_free,
  price_idr,
  regulation_id
) VALUES (
  '11111111-2222-4333-8444-555555555555',
  'SKD',
  'Simulasi Akbar CAT SKD CPNS — Paket Perdana Gratis',
  'Paket simulasi lengkap 110 soal (30 TWK, 35 TIU, 45 TKP) mengacu penuh pada Kepmenpan-RB Nomor 321 Tahun 2024.',
  TRUE,
  0,
  '32102024-0000-4000-8000-000000000321'
) ON CONFLICT (id) DO NOTHING;

-- Contoh Soal Terkurasi Awal (TWK, TIU, TKP) Berstatus 'disetujui'
INSERT INTO questions (
  stage,
  category,
  sub_topic,
  difficulty,
  question_text,
  options,
  explanation,
  source_reference,
  is_paraphrased,
  status
) VALUES
(
  'SKD',
  'TWK',
  'Integritas',
  'sedang',
  'Seorang pejabat pengadaan barang dan jasa di suatu kementerian menerima tawaran fasilitas perjalanan wisata keluarga dari salah satu calon penyedia yang sedang mengikuti proses lelang. Sikap yang paling mencerminkan nilai integritas aparatur sipil negara adalah...',
  '[
    {"kunci": "A", "teks": "Menerima fasilitas tersebut secara pribadi di luar jam dinas agar tidak mengganggu proses penilaian lelang.", "skor": 0},
    {"kunci": "B", "teks": "Menolak secara tegas tawaran tersebut dan melaporkan potensi benturan kepentingan serta upaya gratifikasi kepada Unit Pengendalian Gratifikasi (UPG).", "skor": 5},
    {"kunci": "C", "teks": "Mengalihkan fasilitas tersebut untuk kegiatan sosial di lingkungan kantor agar bermanfaat bagi seluruh pegawai.", "skor": 0},
    {"kunci": "D", "teks": "Menunda penerimaan fasilitas hingga pengumuman pemenang lelang resmi diterbitkan.", "skor": 0},
    {"kunci": "E", "teks": "Meminta pendapat rekan sejawat sebelum memutuskan untuk menerima atau menolak pemberian tersebut.", "skor": 0}
  ]'::jsonb,
  'Nilai integritas menuntut konsistensi antara tindakan dan aturan etika maupun hukum. Setiap pemberian yang berhubungan dengan jabatan dan berlawanan dengan kewajiban atau tugas merupakan gratifikasi yang wajib ditolak secara tegas dan dilaporkan ke Unit Pengendalian Gratifikasi (UPG) atau KPK.',
  'Undang-Undang Nomor 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi & Nilai Dasar ASN BerAKHLAK',
  TRUE,
  'disetujui'
),
(
  'SKD',
  'TIU',
  'Kemampuan Numerik - Deret Angka',
  'sedang',
  'Perhatikan barisan bilangan berikut: 4, 9, 19, 39, 79, ... Bilangan yang tepat untuk melanjutkan barisan tersebut adalah...',
  '[
    {"kunci": "A", "teks": "149", "skor": 0},
    {"kunci": "B", "teks": "158", "skor": 0},
    {"kunci": "C", "teks": "159", "skor": 5},
    {"kunci": "D", "teks": "161", "skor": 0},
    {"kunci": "E", "teks": "169", "skor": 0}
  ]'::jsonb,
  'Pola barisan tersebut adalah dikali 2 kemudian ditambah 1 (Un = 2 × Un-1 + 1) atau selisih bertingkat (+5, +10, +20, +40, +80). Dengan demikian, suku berikutnya adalah 79 + 80 = 159 (atau 79 × 2 + 1 = 159).',
  'Kisi-Kisi Resmi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Deret Angka)',
  TRUE,
  'disetujui'
),
(
  'SKD',
  'TKP',
  'Pelayanan Publik',
  'sedang',
  'Saat antrean layanan tatap muka sedang sangat padat menjelang jam istirahat, seorang warga lanjut usia tampak kebingungan mengoperasikan anjungan pendaftaran mandiri. Tindakan Anda sebagai petugas pelayanan adalah...',
  '[
    {"kunci": "A", "teks": "Menyapa dengan ramah, segera mendampingi warga lanjut usia tersebut mengisi pendaftaran di anjungan mandiri, serta mengarahkannya ke jalur prioritas.", "skor": 5},
    {"kunci": "B", "teks": "Meminta petugas keamanan untuk membantu warga tersebut agar antrean di loket utama tetap berjalan sesuai urutan.", "skor": 4},
    {"kunci": "C", "teks": "Memberikan petunjuk lisan dari meja layanan mengenai cara menggunakan layar sentuh pada anjungan mandiri.", "skor": 3},
    {"kunci": "D", "teks": "Menyarankan warga tersebut untuk meminta bantuan pengunjung lain yang sedang mengantre di dekat anjungan mandiri.", "skor": 2},
    {"kunci": "E", "teks": "Mempersilakan warga tersebut menunggu hingga antrean lengang setelah jam istirahat selesai.", "skor": 1}
  ]'::jsonb,
  'Aspek Pelayanan Publik mengukur keramahtamahan, kepekaan terhadap kelompok rentan (lansia/disabilitas), dan kesigapan memberikan solusi nyata secara langsung sesuai standar pelayanan prima.',
  'Kisi-Kisi Resmi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik',
  TRUE,
  'disetujui'
);
