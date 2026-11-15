/**
 * Bank Soal TIU (Tes Intelegensia Umum) Terkurasi — LOLOS CPNS.
 * Berisi 70 butir soal unik (35 untuk Paket Perdana & 35 untuk Paket Intensif/Terpadu),
 * mencakup seluruh kisi-kisi resmi Kepmenpan-RB Nomor 321 Tahun 2024:
 * Kemampuan Verbal (Analogi, Silogisme, Analitis), Kemampuan Numerik (Berhitung Cepat,
 * Deret Angka, Perbandingan Kuantitatif, Soal Cerita), dan Kemampuan Figural
 * (Analogi Pola, Ketidaksamaan Pola, Serial Pola Spasial).
 */

export interface DefinisiButirTIU {
  sub_topic: string;
  difficulty: "mudah" | "sedang" | "sulit";
  question_text: string;
  pilihan: [string, string, string, string, string];
  indeksBenar: 0 | 1 | 2 | 3 | 4;
  explanation: string;
  source_reference: string;
}

export const BANK_SOAL_TIU_SET_1: DefinisiButirTIU[] = [
  // 1-4: Kemampuan Verbal — Analogi
  {
    sub_topic: "Kemampuan Verbal (Analogi)",
    difficulty: "mudah",
    question_text: "ARSITEK : CETAK BIRU (BLUEPRINT) = KOMPONIS : ...",
    pilihan: [
      "Panggung pertunjukan",
      "Orkestra simfoni",
      "Partitur musik",
      "Alat musik gesek",
      "Penonton konser",
    ],
    indeksBenar: 2,
    explanation:
      "Arsitek menuangkan rancangan bangunan dalam bentuk cetak biru (blueprint) sebagai panduan pelaksanaan, sebagaimana komponis menuangkan gubahan lagu dalam bentuk partitur musik.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Analogi",
  },
  {
    sub_topic: "Kemampuan Verbal (Analogi)",
    difficulty: "mudah",
    question_text: "DESIBEL : INTENSITAS BUNYI = LUMEN : ...",
    pilihan: [
      "Fluks cahaya",
      "Suhu ruangan",
      "Massa jenis zat",
      "Tekanan udara",
      "Kuat arus listrik",
    ],
    indeksBenar: 0,
    explanation:
      "Desibel merupakan satuan ukur untuk intensitas bunyi, sedangkan lumen merupakan satuan ukur dalam sistem internasional untuk fluks cahaya.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Analogi",
  },
  {
    sub_topic: "Kemampuan Verbal (Analogi)",
    difficulty: "sedang",
    question_text: "ANEMOMETER : KECEPATAN ANGIN = HIGROMETER : ...",
    pilihan: [
      "Curah hujan tahunan",
      "Tekanan hidrostatis air",
      "Intensitas radiasi surya",
      "Kelembapan udara",
      "Amplitudo gempa bumi",
    ],
    indeksBenar: 3,
    explanation:
      "Anemometer adalah instrumen meteorologi untuk mengukur kecepatan angin, sedangkan higrometer digunakan untuk mengukur tingkat kelembapan udara.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Analogi",
  },
  {
    sub_topic: "Kemampuan Verbal (Analogi)",
    difficulty: "sedang",
    question_text: "VAKSIN : KEKEBALAN TUBUH = PUPUK : ...",
    pilihan: [
      "Musim panen raya",
      "Saluran irigasi desa",
      "Serangan hama wereng",
      "Jenis tanah lempung",
      "Kesuburan tanaman",
    ],
    indeksBenar: 4,
    explanation:
      "Hubungan sebab-akibat/tujuan pemberian: vaksin diberikan untuk membentuk atau meningkatkan kekebalan tubuh, sedangkan pupuk diberikan untuk meningkatkan kesuburan tanaman.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Analogi",
  },

  // 5-8: Kemampuan Verbal — Silogisme
  {
    sub_topic: "Kemampuan Verbal (Silogisme)",
    difficulty: "mudah",
    question_text:
      "Semua analis kepegawaian wajib memahami regulasi manajemen ASN. Sebagian pegawai di Biro SDM adalah analis kepegawaian. Simpulan yang paling tepat adalah...",
    pilihan: [
      "Semua pegawai di Biro SDM adalah analis kepegawaian.",
      "Sebagian pegawai di Biro SDM wajib memahami regulasi manajemen ASN.",
      "Semua yang memahami regulasi manajemen ASN bekerja di Biro SDM.",
      "Tidak ada pegawai di Biro SDM yang memahami regulasi manajemen ASN.",
      "Pegawai selain analis kepegawaian dilarang membaca regulasi manajemen ASN.",
    ],
    indeksBenar: 1,
    explanation:
      "Karena sebagian pegawai Biro SDM berstatus analis kepegawaian dan seluruh analis kepegawaian wajib memahami regulasi manajemen ASN, maka sebagian pegawai di Biro SDM tersebut pasti wajib memahami regulasi manajemen ASN.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Silogisme",
  },
  {
    sub_topic: "Kemampuan Verbal (Silogisme)",
    difficulty: "sedang",
    question_text:
      "Jika berkas peserta lengkap dan telah terverifikasi, maka peserta berhak mencetak kartu ujian CAT. Faktanya, Sinta tidak berhak mencetak kartu ujian CAT. Simpulan yang sah adalah...",
    pilihan: [
      "Berkas Sinta lengkap namun panitia lupa menerbitkan kartu ujian.",
      "Sinta sudah mengikuti simulasi CAT sebelum jadwal resmi.",
      "Berkas Sinta tidak lengkap atau belum terverifikasi.",
      "Sinta mengundurkan diri sebelum pengumuman hasil seleksi administrasi.",
      "Semua peserta lain juga tidak dapat mencetak kartu ujian CAT.",
    ],
    indeksBenar: 2,
    explanation:
      "Menggunakan kaidah Modus Tollens dan hukum De Morgan: jika (L dan V) -> C, sedangkan ~C terjadi, maka ~(L dan V) yang ekuivalen dengan (~L atau ~V), yaitu berkas tidak lengkap atau belum terverifikasi.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Silogisme",
  },
  {
    sub_topic: "Kemampuan Verbal (Silogisme)",
    difficulty: "sedang",
    question_text:
      "Semua penerima beasiswa tugas belajar instansi adalah PNS aktif. Semua PNS aktif telah lulus masa percobaan CPNS. Faktanya, Andi belum lulus masa percobaan CPNS. Simpulan yang paling tepat adalah...",
    pilihan: [
      "Andi bukan penerima beasiswa tugas belajar instansi.",
      "Andi sedang mengajukan cuti di luar tanggungan negara.",
      "Sebagian penerima beasiswa tugas belajar belum menjadi PNS aktif.",
      "Andi berhak mendaftar beasiswa tugas belajar jalur umum.",
      "Andi sudah menyelesaikan masa percobaan pada tahun sebelumnya.",
    ],
    indeksBenar: 0,
    explanation:
      "Secara transitif, setiap penerima beasiswa adalah PNS aktif dan telah lulus masa percobaan. Dengan Modus Tollens, karena Andi belum lulus masa percobaan, maka Andi bukan PNS aktif dan pasti bukan penerima beasiswa tugas belajar instansi.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Silogisme",
  },
  {
    sub_topic: "Kemampuan Verbal (Silogisme)",
    difficulty: "sulit",
    question_text:
      "Semua pelamar formasi lulusan terbaik (cumlaude) berasal dari perguruan tinggi terakreditasi unggul. Sebagian pelamar formasi lulusan terbaik memilih penempatan di kementerian pusat. Simpulan yang sah adalah...",
    pilihan: [
      "Semua pelamar yang memilih kementerian pusat berasal dari formasi lulusan terbaik.",
      "Sebagian pelamar dari perguruan tinggi terakreditasi unggul tidak mendaftar CPNS.",
      "Semua lulusan perguruan tinggi terakreditasi unggul pasti lulus SKD.",
      "Tidak ada pelamar formasi umum yang memilih penempatan kementerian pusat.",
      "Sebagian pelamar yang memilih penempatan di kementerian pusat berasal dari perguruan tinggi terakreditasi unggul.",
    ],
    indeksBenar: 4,
    explanation:
      "Sekelompok pelamar formasi cumlaude yang memilih kementerian pusat pasti termasuk kategori 'berasal dari perguruan tinggi terakreditasi unggul'. Jadi, pasti ada sebagian pemilih kementerian pusat yang berasal dari perguruan tinggi terakreditasi unggul.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Silogisme",
  },

  // 9-11: Kemampuan Verbal — Penalaran Analitis
  {
    sub_topic: "Kemampuan Verbal (Penalaran Analitis)",
    difficulty: "sedang",
    question_text:
      "Lima pejabat teknis (A, B, C, D, dan E) memaparkan rancangan kebijakan secara bergantian dari urutan ke-1 hingga ke-5 dengan syarat: C tampil pada urutan ke-1; A tampil tepat sebelum D; dan B tampil setelah E namun bukan pada urutan terakhir. Siapakah yang tampil pada urutan ke-3?",
    pilihan: ["A", "B", "D", "E", "Tidak dapat ditentukan"],
    indeksBenar: 1,
    explanation:
      "Dengan C = 1, tersisa posisi 2, 3, 4, 5. Karena B tidak boleh di posisi 5 dan harus setelah E, pasangan berurutan A-D wajib menempati posisi (4, 5) — sebab jika A-D di (2, 3) atau (3, 4), posisi 5 terisi oleh B yang melanggar syarat. Jadi susunan tunggalnya adalah C (1), E (2), B (3), A (4), D (5). Urutan ke-3 adalah B.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Penalaran Analitis",
  },
  {
    sub_topic: "Kemampuan Verbal (Penalaran Analitis)",
    difficulty: "sedang",
    question_text:
      "Lima loket layanan publik (Loket 1 sampai Loket 5 berurutan dari kiri ke kanan) dijaga oleh Rina, Soni, Tari, Udin, dan Vina. Tari bertugas di Loket 3. Rina tidak bertetangga dengan Tari. Soni bertugas tepat di sebelah kiri Vina. Udin tidak berada di Loket 5. Jika Rina bertugas di Loket 1, siapa yang bertugas di Loket 4?",
    pilihan: ["Rina", "Udin", "Tari", "Soni", "Vina"],
    indeksBenar: 3,
    explanation:
      "Tari di Loket 3 dan Rina di Loket 1 menyisakan Loket 2, 4, dan 5. Pasangan berurutan Soni-Vina hanya bisa mengisi Loket (4, 5), sehingga Soni berada di Loket 4, Vina di Loket 5, dan Udin di Loket 2.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Penalaran Analitis",
  },
  {
    sub_topic: "Kemampuan Verbal (Penalaran Analitis)",
    difficulty: "sulit",
    question_text:
      "Penerapan sistem kerja elektronik terdiri dari empat tahap inti: Analisis (A), Desain (D), Implementasi (I), dan Uji Coba (U) yang berurutan A lalu D lalu I lalu U, ditambah Audit Keamanan (K) dan Audit Kinerja (N). Audit Keamanan dilaksanakan di antara Desain dan Implementasi, sedangkan Audit Kinerja dilaksanakan setelah Implementasi dan sebelum Uji Coba. Kegiatan apakah yang dilaksanakan pada urutan ke-5?",
    pilihan: [
      "Desain (D)",
      "Audit Keamanan (K)",
      "Audit Kinerja (N)",
      "Implementasi (I)",
      "Uji Coba (U)",
    ],
    indeksBenar: 2,
    explanation:
      "Urutan baku lengkap dari ke-1 hingga ke-6 adalah: 1. Analisis (A), 2. Desain (D), 3. Audit Keamanan (K), 4. Implementasi (I), 5. Audit Kinerja (N), 6. Uji Coba (U). Urutan ke-5 adalah Audit Kinerja (N).",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Penalaran Analitis",
  },

  // 12-14: Kemampuan Numerik — Berhitung Cepat
  {
    sub_topic: "Kemampuan Numerik (Berhitung Cepat)",
    difficulty: "mudah",
    question_text: "Nilai dari (5/8) × 1,6 + 45% - (1/4) adalah...",
    pilihan: ["0,95", "1,15", "1,20", "1,25", "1,35"],
    indeksBenar: 2,
    explanation:
      "Hitung per bagian: (5/8) × 1,6 = 5 × 0,2 = 1,00. Ubah 45% = 0,45 dan 1/4 = 0,25. Maka 1,00 + 0,45 - 0,25 = 1,20.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Berhitung",
  },
  {
    sub_topic: "Kemampuan Numerik (Berhitung Cepat)",
    difficulty: "sedang",
    question_text:
      "Jika p = 37,5% dari 640 dan q = 5/6 dari 288, maka nilai p + q adalah...",
    pilihan: ["420", "450", "460", "480", "510"],
    indeksBenar: 3,
    explanation:
      "Ubah 37,5% menjadi pecahan istimewa 3/8. Maka p = (3/8) × 640 = 3 × 80 = 240. Sedangkan q = (5/6) × 288 = 5 × 48 = 240. Jadi p + q = 240 + 240 = 480.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Berhitung",
  },
  {
    sub_topic: "Kemampuan Numerik (Berhitung Cepat)",
    difficulty: "sedang",
    question_text:
      "Dengan memanfaatkan identitas selisih kuadrat, nilai dari (125² - 75²) / (25² - 15²) adalah...",
    pilihan: ["5", "15", "20", "25", "50"],
    indeksBenar: 3,
    explanation:
      "Pembilang = (125 - 75)(125 + 75) = 50 × 200 = 10.000. Penyebut = (25 - 15)(25 + 15) = 10 × 40 = 400. Hasilnya 10.000 / 400 = 25 (atau langsung 5² = 25 karena pembilang merupakan kelipatan 5 dari penyebut).",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Berhitung",
  },

  // 15-18: Kemampuan Numerik — Deret Angka
  {
    sub_topic: "Kemampuan Numerik (Deret Angka)",
    difficulty: "mudah",
    question_text:
      "Dua suku berikutnya pada barisan bilangan 3, 7, 15, 31, 63, ..., ... adalah...",
    pilihan: ["125, 251", "127, 255", "126, 252", "129, 257", "128, 256"],
    indeksBenar: 1,
    explanation:
      "Pola barisan menggunakan aturan ×2 + 1 (atau selisih kelipatan dua: +4, +8, +16, +32). Maka 63 × 2 + 1 = 127, dan 127 × 2 + 1 = 255.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Deret Angka",
  },
  {
    sub_topic: "Kemampuan Numerik (Deret Angka)",
    difficulty: "sedang",
    question_text:
      "Lengkapi deret larik ganda berikut: 4, 9, 6, 12, 8, 15, 10, ..., ...",
    pilihan: ["18, 12", "16, 12", "18, 14", "17, 13", "20, 12"],
    indeksBenar: 0,
    explanation:
      "Terdapat dua larik berselang-seling: suku ganjil (4, 6, 8, 10, ...) bertambah +2 sehingga suku ke-9 adalah 12; suku genap (9, 12, 15, ...) bertambah +3 sehingga suku ke-8 adalah 18. Urutan pengisian menjadi 18, 12.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Deret Angka",
  },
  {
    sub_topic: "Kemampuan Numerik (Deret Angka)",
    difficulty: "sedang",
    question_text:
      "Bilangan yang tepat untuk melengkapi deret 2, 5, 11, 20, 32, 47, ... adalah...",
    pilihan: ["60", "62", "64", "65", "68"],
    indeksBenar: 3,
    explanation:
      "Selisih antar-suku membentuk kelipatan tiga: +3, +6, +9, +12, +15. Maka selisih berikutnya adalah +18, sehingga 47 + 18 = 65.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Deret Angka",
  },
  {
    sub_topic: "Kemampuan Numerik (Deret Angka)",
    difficulty: "sulit",
    question_text:
      "Bilangan yang tepat untuk melengkapi barisan bertingkat 320, 160, 240, 120, 180, 90, ... adalah...",
    pilihan: ["45", "120", "135", "150", "180"],
    indeksBenar: 2,
    explanation:
      "Pola operasi bergantian: dibagi 2, kemudian dikali 1,5 (3/2). Cek: 320 ÷ 2 = 160; 160 × 1,5 = 240; 240 ÷ 2 = 120; 120 × 1,5 = 180; 180 ÷ 2 = 90. Langkah selanjutnya adalah 90 × 1,5 = 135.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Deret Angka",
  },

  // 19-21: Kemampuan Numerik — Perbandingan Kuantitatif
  {
    sub_topic: "Kemampuan Numerik (Perbandingan Kuantitatif)",
    difficulty: "mudah",
    question_text:
      "Diketahui x = (1/15) - (1/20) dan y = (1/12) - (1/15). Pernyataan hubungan antara x dan y yang paling tepat adalah...",
    pilihan: [
      "x > y",
      "x < y",
      "x = y",
      "2x < y",
      "Hubungan x dan y tidak dapat ditentukan",
    ],
    indeksBenar: 2,
    explanation:
      "Samakan penyebut ke 60: x = 4/60 - 3/60 = 1/60, sedangkan y = 5/60 - 4/60 = 1/60. Dengan demikian, nilai x = y.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Perbandingan Kuantitatif",
  },
  {
    sub_topic: "Kemampuan Numerik (Perbandingan Kuantitatif)",
    difficulty: "sedang",
    question_text:
      "Diketahui bilangan real x dan y memenuhi pertidaksamaan 2 < x < 5 dan -3 < y < 1. Jika P = x - y dan Q = 1, maka hubungan yang pasti benar antara P dan Q adalah...",
    pilihan: [
      "P > Q",
      "P < Q",
      "P = Q",
      "P = 2Q",
      "Hubungan P dan Q tidak dapat ditentukan",
    ],
    indeksBenar: 0,
    explanation:
      "Nilai batas bawah P = x - y diperoleh dari batas bawah x dikurangi batas atas y, yakni 2 - 1 = 1 (tidak termasuk). Jadi 1 < P < 8 untuk setiap pasangan (x, y) pada selang tersebut. Pasti berlaku P > Q.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Perbandingan Kuantitatif",
  },
  {
    sub_topic: "Kemampuan Numerik (Perbandingan Kuantitatif)",
    difficulty: "sedang",
    question_text:
      "Sebuah unit kerja merencanakan pengadaan kertas dengan total anggaran Q = Rp12.000.000. Karena penyesuaian pasar, harga per rim naik 20% sehingga jumlah rim yang dibeli dikurangi 20%. Jika P adalah total pengeluaran aktual setelah penyesuaian, maka...",
    pilihan: [
      "P > Q",
      "P < Q",
      "P = Q",
      "P = 1,2Q",
      "Hubungan P dan Q tidak dapat ditentukan",
    ],
    indeksBenar: 1,
    explanation:
      "Pengeluaran aktual P = 120% × 80% × Q = 1,2 × 0,8 × Q = 0,96Q = Rp11.520.000. Nilai 0,96Q lebih kecil daripada Q sehingga P < Q.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Perbandingan Kuantitatif",
  },

  // 22-25: Kemampuan Numerik — Soal Cerita
  {
    sub_topic: "Kemampuan Numerik (Soal Cerita)",
    difficulty: "mudah",
    question_text:
      "Tim analis data berjumlah 6 orang mampu menyelesaikan audit basis data kepegawaian dalam waktu 14 hari. Jika pekerjaan tersebut harus diselesaikan dalam waktu 6 hari dengan produktivitas setara, berapa tambahan tenaga analis yang diperlukan?",
    pilihan: ["6 orang", "8 orang", "10 orang", "12 orang", "14 orang"],
    indeksBenar: 1,
    explanation:
      "Perbandingan berbalik nilai: total beban kerja = 6 × 14 = 84 orang-hari. Untuk selesai dalam 6 hari diperlukan 84 ÷ 6 = 14 orang. Tambahan tenaga analis = 14 - 6 = 8 orang.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Soal Cerita",
  },
  {
    sub_topic: "Kemampuan Numerik (Soal Cerita)",
    difficulty: "sedang",
    question_text:
      "Riko mampu mengindeks satu bundel arsip kepegawaian seorang diri dalam 6 jam, sedangkan Sinta mampu menyelesaikannya dalam 3 jam. Apabila keduanya bekerja bersama-sama sejak pukul 08.00 WIB tanpa jeda, pukul berapa pekerjaan itu selesai?",
    pilihan: ["09.30 WIB", "10.00 WIB", "10.30 WIB", "11.00 WIB", "12.30 WIB"],
    indeksBenar: 1,
    explanation:
      "Kecepatan gabungan per jam = 1/6 + 1/3 = 3/6 = 1/2 bundel per jam. Maka waktu penyelesaian bersama adalah 2 jam. Mulai pukul 08.00 WIB + 2 jam = pukul 10.00 WIB.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Soal Cerita",
  },
  {
    sub_topic: "Kemampuan Numerik (Soal Cerita)",
    difficulty: "sedang",
    question_text:
      "Rata-rata skor SKD dari 18 peserta gelombang pertama adalah 395. Setelah nilai 2 peserta susulan digabungkan, rata-rata keseluruhan menjadi 400. Berapakah rata-rata nilai kedua peserta susulan tersebut?",
    pilihan: ["425", "435", "440", "445", "450"],
    indeksBenar: 3,
    explanation:
      "Jumlah nilai 18 peserta = 18 × 395 = 7.110. Jumlah nilai 20 peserta = 20 × 400 = 8.000. Selisih nilai 2 peserta susulan = 8.000 - 7.110 = 890, sehingga rata-ratanya adalah 890 ÷ 2 = 445.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Soal Cerita",
  },
  {
    sub_topic: "Kemampuan Numerik (Soal Cerita)",
    difficulty: "sedang",
    question_text:
      "Jarak antara kantor pusat dan kantor wilayah adalah 180 km. Kendaraan dinas berangkat pukul 07.30 WIB dengan kecepatan rata-rata 60 km/jam dan berhenti selama 20 menit di perjalanan untuk mengisi bahan bakar. Pukul berapakah kendaraan tersebut tiba di kantor wilayah?",
    pilihan: ["10.30 WIB", "10.45 WIB", "10.50 WIB", "11.00 WIB", "11.10 WIB"],
    indeksBenar: 2,
    explanation:
      "Waktu tempuh berkendara = 180 ÷ 60 = 3 jam. Ditambah jeda 20 menit menjadi total 3 jam 20 menit. Pukul 07.30 WIB + 3 jam 20 menit = pukul 10.50 WIB.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Soal Cerita",
  },

  // 26-35: Kemampuan Figural (Analogi Pola, Ketidaksamaan Pola, Serial Pola)
  {
    sub_topic: "Kemampuan Figural (Analogi Pola)",
    difficulty: "mudah",
    question_text:
      "Perhatikan transformasi pola gambar: Gambar Awal berisi '1 persegi kecil terisi warna hitam di sudut kiri-atas dengan panah menunjuk ke atas (↑)' berubah menjadi Gambar Hasil '2 persegi kecil kosong berwarna putih di sudut kanan-bawah dengan panah menunjuk ke bawah (↓)'. Dengan pola perubahan yang sama, Gambar Awal '2 segitiga kecil terisi hitam di sudut kanan-atas dengan panah menunjuk ke kanan (→)' akan berubah menjadi...",
    pilihan: [
      "4 segitiga kecil kosong putih di sudut kiri-bawah dengan panah menunjuk ke kiri (←)",
      "2 segitiga kecil kosong putih di sudut kiri-atas dengan panah menunjuk ke kiri (←)",
      "4 segitiga kecil terisi hitam di sudut kiri-bawah dengan panah menunjuk ke bawah (↓)",
      "4 segitiga kecil kosong putih di sudut kanan-bawah dengan panah menunjuk ke kanan (→)",
      "1 segitiga kecil kosong putih di sudut kiri-bawah dengan panah menunjuk ke atas (↑)",
    ],
    indeksBenar: 0,
    explanation:
      "Terdapat empat transformasi sekaligus: jumlah bentuk digandakan (×2, menjadi 4), warna terisi menjadi kosong, posisi berpindah secara diagonal berlawanan (kanan-atas menjadi kiri-bawah), dan arah panah berbalik 180° (kanan menjadi kiri).",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Analogi",
  },
  {
    sub_topic: "Kemampuan Figural (Analogi Pola)",
    difficulty: "mudah",
    question_text:
      "Diketahui pasangan pola figuratif: [Segitiga (3 sisi) berwarna putih tanpa titik] berpasangan dengan [Segi empat (4 sisi) berwarna hitam dengan 1 titik pusat]. Mengikuti aturan yang sama, pasangan untuk [Segi lima (5 sisi) berwarna putih tanpa titik] adalah...",
    pilihan: [
      "Segi empat berwarna hitam dengan 2 titik pusat",
      "Segi enam (6 sisi) berwarna putih dengan 1 titik pusat",
      "Segi enam (6 sisi) berwarna hitam dengan 1 titik pusat",
      "Segi lima berwarna hitam tanpa titik pusat",
      "Segi tujuh (7 sisi) berwarna hitam dengan 1 titik pusat",
    ],
    indeksBenar: 2,
    explanation:
      "Aturan transformasinya: jumlah sisi poligon bertambah 1 (5 menjadi 6), warna bidang berubah dari putih menjadi hitam, dan jumlah titik di pusat bertambah 1 (0 menjadi 1 titik).",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Analogi",
  },
  {
    sub_topic: "Kemampuan Figural (Analogi Pola)",
    difficulty: "sedang",
    question_text:
      "Bentuk huruf L dengan sudut siku mengarah ke kiri-bawah dan sebuah lingkaran kecil menempel di bagian sudut dalam diputar 90° berlawanan arah jarum jam pada bidang datar. Posisi hasil rotasinya adalah...",
    pilihan: [
      "Sudut siku mengarah ke kiri-atas dengan lingkaran tetap di sudut dalam",
      "Sudut siku mengarah ke kanan-bawah dengan lingkaran tetap di sudut dalam",
      "Sudut siku mengarah ke kanan-atas dengan lingkaran berada di sisi luar",
      "Sudut siku mengarah ke kanan-bawah dengan lingkaran berpindah ke sisi luar",
      "Sudut siku tetap di kiri-bawah dengan lingkaran berputar ke sudut luar",
    ],
    indeksBenar: 1,
    explanation:
      "Putaran 90° berlawanan arah jarum jam menggeser orientasi kuadran: kiri-bawah bergerak ke kanan-bawah. Karena hanya mengalami rotasi 2D murni, posisi relatif lingkaran di sudut dalam tidak berubah.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Analogi",
  },
  {
    sub_topic: "Kemampuan Figural (Ketidaksamaan Pola)",
    difficulty: "mudah",
    question_text:
      "Lima kartu motif bangun datar menampilkan keterangan berikut. Manakah kartu yang TIDAK sepola dengan keempat kartu lainnya?\nA: Segitiga (3 sisi) dengan 3 titik di dalamnya\nB: Persegi (4 sisi) dengan 4 titik di dalamnya\nC: Segi lima (5 sisi) dengan 5 titik di dalamnya\nD: Segi enam (6 sisi) dengan 4 titik di dalamnya\nE: Segi delapan (8 sisi) dengan 8 titik di dalamnya",
    pilihan: ["Kartu A", "Kartu B", "Kartu C", "Kartu D", "Kartu E"],
    indeksBenar: 3,
    explanation:
      "Pada Kartu A, B, C, dan E, jumlah titik di dalam bangun selalu sama persis dengan jumlah sisi poligonnya. Kartu D berbeda karena segi enam (6 sisi) hanya memuat 4 titik.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Ketidaksamaan",
  },
  {
    sub_topic: "Kemampuan Figural (Ketidaksamaan Pola)",
    difficulty: "sulit",
    question_text:
      "Lima ikon jarum penunjuk asimetris diamati dari pusat persegi. Empat ikon merupakan hasil rotasi bidang datar satu sama lain, sedangkan satu ikon merupakan hasil pencerminan. Manakah ikon yang berbeda?\nA: Jarum utama ke pukul 12, cabang tegak lurus mengarah +90° searah jarum jam (ke kanan)\nB: Jarum utama ke pukul 3, cabang tegak lurus mengarah +90° searah jarum jam (ke bawah)\nC: Jarum utama ke pukul 6, cabang tegak lurus mengarah +90° searah jarum jam (ke kiri)\nD: Jarum utama ke pukul 9, cabang tegak lurus mengarah +90° searah jarum jam (ke atas)\nE: Jarum utama ke pukul 12, cabang tegak lurus mengarah -90° berlawanan jarum jam (ke kiri)",
    pilihan: ["Ikon A", "Ikon B", "Ikon C", "Ikon D", "Ikon E"],
    indeksBenar: 4,
    explanation:
      "Pada Ikon A, B, C, dan D, arah cabang terhadap jarum utama selalu +90° searah jarum jam (merupakan rotasi 0°, 90°, 180°, dan 270°). Ikon E memiliki cabang -90° (ke kiri saat menunjuk pukul 12), sehingga merupakan hasil pencerminan.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Ketidaksamaan",
  },
  {
    sub_topic: "Kemampuan Figural (Ketidaksamaan Pola)",
    difficulty: "sedang",
    question_text:
      "Dari lima konfigurasi pembagian bidang datar berikut, manakah yang polanya BERBEDA sendiri?\nA: Persegi terbagi dua diagonal menjadi 4 segitiga kongruen\nB: Lingkaran terbagi dua diameter tegak lurus menjadi 4 juring kongruen\nC: Segi enam beraturan terbagi tiga diagonal utama menjadi 6 segitiga sama sisi kongruen\nD: Belah ketupat terbagi sebuah garis sembarang yang tidak melewati titik sudut menjadi dua bagian berbeda luas\nE: Persegi panjang terbagi dua sumbu simetri menjadi 4 persegi panjang kecil kongruen",
    pilihan: [
      "Konfigurasi A",
      "Konfigurasi B",
      "Konfigurasi C",
      "Konfigurasi D",
      "Konfigurasi E",
    ],
    indeksBenar: 3,
    explanation:
      "Konfigurasi A, B, C, dan E membagi bangun datar melalui sumbu/pusat simetri menghasilkan bagian-bagian yang kongruen dan sama luas. Hanya Konfigurasi D yang menghasilkan bagian tidak kongruen dengan luas berbeda.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Ketidaksamaan",
  },
  {
    sub_topic: "Kemampuan Figural (Serial Pola)",
    difficulty: "sedang",
    question_text:
      "Amati deret 4 panel gambar berurutan berikut:\nPanel 1: Panah Utara (↑), 1 lingkaran hitam di kanan-atas.\nPanel 2: Panah Timur (→), 2 lingkaran putih di kanan-bawah.\nPanel 3: Panah Selatan (↓), 3 lingkaran hitam di kiri-bawah.\nPanel 4: Panah Barat (←), 4 lingkaran putih di kiri-atas.\nGambar pada Panel 5 berikutnya adalah...",
    pilihan: [
      "Panah Utara (↑), 5 lingkaran hitam di kanan-atas",
      "Panah Utara (↑), 5 lingkaran putih di kanan-atas",
      "Panah Timur (→), 5 lingkaran hitam di kiri-atas",
      "Panah Selatan (↓), 4 lingkaran hitam di kanan-bawah",
      "Panah Utara (↑), 1 lingkaran hitam di kanan-bawah",
    ],
    indeksBenar: 0,
    explanation:
      "Pola tiap panel: (1) panah berputar 90° searah jarum jam (U -> T -> S -> B -> kembali ke Utara); (2) jumlah lingkaran naik +1 (menjadi 5); (3) warna bergantian hitam-putih-hitam-putih-hitam; (4) posisi sudut bergerak searah jarum jam kembali ke kanan-atas.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Serial",
  },
  {
    sub_topic: "Kemampuan Figural (Serial Pola)",
    difficulty: "sedang",
    question_text:
      "Amati deret figuratif berikut:\nPanel 1: Segitiga (3 sisi) dengan titik sudut penanda di arah pukul 12.\nPanel 2: Persegi (4 sisi) dengan penanda berputar ke arah pukul 3.\nPanel 3: Segi lima (5 sisi) dengan penanda di arah pukul 6.\nPanel 4: Segi enam (6 sisi) dengan penanda di arah pukul 9.\nKomposisi Panel 5 berikutnya adalah...",
    pilihan: [
      "Segi tujuh (7 sisi) dengan penanda di arah pukul 3",
      "Segi enam (6 sisi) dengan penanda di arah pukul 12",
      "Segi tujuh (7 sisi) dengan penanda di arah pukul 12",
      "Segi delapan (8 sisi) dengan penanda di arah pukul 12",
      "Segi tujuh (7 sisi) dengan penanda di arah pukul 6",
    ],
    indeksBenar: 2,
    explanation:
      "Jumlah sisi poligon bertambah 1 tiap langkah (3, 4, 5, 6 -> 7 sisi), sedangkan titik sudut penanda berputar 90° searah jarum jam (12 -> 3 -> 6 -> 9 -> kembali ke pukul 12).",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Serial",
  },
  {
    sub_topic: "Kemampuan Figural (Serial Pola)",
    difficulty: "sulit",
    question_text:
      "Pada matriks simbol 3×3, elemen kolom ke-3 dihasilkan dari gabungan kolom ke-1 dan kolom ke-2 dengan aturan elemen yang muncul sama pada kedua kolom akan saling meniadakan:\nBaris 1: [● ○] dipadukan [○ ▲] menghasilkan [● ▲]\nBaris 2: [■ ◆] dipadukan [◆ ★] menghasilkan [■ ★]\nBaris 3: [△ □] dipadukan [□ ◇] menghasilkan...",
    pilihan: ["[△ □]", "[□ ◇]", "[◇ △] tanpa □", "[● △]", "[□ ★]"],
    indeksBenar: 2,
    explanation:
      "Dengan logika meniadakan simbol yang sama (simbol □ muncul di kolom 1 dan kolom 2 pada Baris 3), simbol □ terhapus sehingga hanya menyisakan simbol △ dan ◇.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Serial",
  },
  {
    sub_topic: "Kemampuan Figural (Serial Pola)",
    difficulty: "sedang",
    question_text:
      "Selembar kertas berbentuk persegi dilipat menjadi dua secara vertikal dari kanan ke kiri, kemudian dilipat lagi secara horizontal dari bawah ke atas hingga membentuk seperempat ukuran semula. Selanjutnya dibuat satu lubang bundar utuh di bagian dalam bidang lipatan tersebut tanpa memotong garis tepi lipatan. Ketika kertas dibuka penuh kembali, berapa banyak lubang bundar yang tampak?",
    pilihan: [
      "1 lubang bundar di tengah kertas",
      "2 lubang bundar sejajar vertikal",
      "2 lubang bundar sejajar horizontal",
      "4 lubang bundar yang simetris di keempat kuadran kertas",
      "8 lubang bundar di sepanjang tepi kertas",
    ],
    indeksBenar: 3,
    explanation:
      "Dua kali lipatan tegak lurus melipat kertas menjadi 2 × 2 = 4 lapisan kuadran. Karena lubang bundar dibuat utuh di bagian dalam bidang seperempat tanpa memotong garis lipatan, pembukaan lipatan menghasilkan 4 lubang bundar simetris di tiap kuadran.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Spasial",
  },
];

export const BANK_SOAL_TIU_SET_2: DefinisiButirTIU[] = [
  // 1-4: Kemampuan Verbal — Analogi
  {
    sub_topic: "Kemampuan Verbal (Analogi)",
    difficulty: "mudah",
    question_text: "TERMOMETER : SUHU = BAROMETER : ...",
    pilihan: [
      "Kelembapan relatif",
      "Tekanan udara",
      "Kecepatan angin",
      "Intensitas gempa",
      "Kedalaman laut",
    ],
    indeksBenar: 1,
    explanation:
      "Termometer merupakan alat ukur suhu, sedangkan barometer merupakan alat pengukur tekanan atmosfer/udara.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Analogi",
  },
  {
    sub_topic: "Kemampuan Verbal (Analogi)",
    difficulty: "mudah",
    question_text: "KAMUS : DEFINISI KATA = ATLAS : ...",
    pilihan: [
      "Sejarah peradaban",
      "Rumus matematika",
      "Peraturan hukum",
      "Kumpulan peta geografis",
      "Biografi tokoh",
    ],
    indeksBenar: 3,
    explanation:
      "Kamus adalah buku referensi berisi kumpulan definisi kata, sedangkan atlas adalah buku referensi berisi kumpulan peta geografis.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Analogi",
  },
  {
    sub_topic: "Kemampuan Verbal (Analogi)",
    difficulty: "sedang",
    question_text: "PONDASI : KEKOKOHAN GEDUNG = AKAR : ...",
    pilihan: [
      "Ketegakan pohon",
      "Warna daun muda",
      "Bentuk ranting kayu",
      "Proses penebangan",
      "Kemasan buah panen",
    ],
    indeksBenar: 0,
    explanation:
      "Pondasi merupakan struktur bawah penopang kekokohan gedung, sebagaimana akar menjadi struktur bawah penopang ketegakan pohon.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Analogi",
  },
  {
    sub_topic: "Kemampuan Verbal (Analogi)",
    difficulty: "sedang",
    question_text: "BENGKEL : MONTIR = OBSERVATORIUM : ...",
    pilihan: [
      "Nahkoda kapal",
      "Pilot komersial",
      "Kartografer",
      "Ahli botani",
      "Astronom",
    ],
    indeksBenar: 4,
    explanation:
      "Bengkel adalah tempat kerja spesifik seorang montir, sedangkan observatorium adalah tempat kerja dan pengamatan benda langit oleh seorang astronom.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Analogi",
  },

  // 5-8: Kemampuan Verbal — Silogisme
  {
    sub_topic: "Kemampuan Verbal (Silogisme)",
    difficulty: "mudah",
    question_text:
      "Tidak satu pun dokumen rahasia negara boleh diunggah ke penyimpanan publik tanpa enkripsi. Arsip data kepegawaian strategis merupakan dokumen rahasia negara. Simpulan yang sah adalah...",
    pilihan: [
      "Sebagian dokumen rahasia negara boleh diunggah tanpa enkripsi.",
      "Arsip data kepegawaian strategis bebas diakses publik melalui internet.",
      "Arsip data kepegawaian strategis tidak boleh diunggah ke penyimpanan publik tanpa enkripsi.",
      "Semua data yang sudah dienkripsi bukan dokumen rahasia negara.",
      "Hanya dokumen umum yang wajib dienkripsi sebelum disimpan.",
    ],
    indeksBenar: 2,
    explanation:
      "Karena tidak ada dokumen rahasia negara yang boleh diunggah tanpa enkripsi dan arsip strategis termasuk di dalamnya, maka arsip tersebut tidak boleh diunggah tanpa enkripsi (Silogisme Celarent).",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Silogisme",
  },
  {
    sub_topic: "Kemampuan Verbal (Silogisme)",
    difficulty: "sedang",
    question_text:
      "Jika inflasi bahan pangan meningkat tajam, maka daya beli masyarakat berpenghasilan tetap menurun. Jika daya beli masyarakat berpenghasilan tetap menurun, maka pemerintah memperluas bantuan stabilisasi harga. Diketahui inflasi bahan pangan saat ini meningkat tajam. Simpulannya adalah...",
    pilihan: [
      "Pemerintah memperluas bantuan stabilisasi harga.",
      "Pemerintah menghentikan program stabilisasi harga pangan.",
      "Daya beli masyarakat berpenghasilan tetap meningkat drastis.",
      "Inflasi bahan pangan tidak memengaruhi bantuan pemerintah.",
      "Sebagian masyarakat tidak terdampak inflasi bahan pangan.",
    ],
    indeksBenar: 0,
    explanation:
      "Dengan silogisme hipotetik (P -> Q, Q -> R, maka P -> R) dan Modus Ponens karena P terjadi, maka R pasti berlaku: pemerintah memperluas bantuan stabilisasi harga.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Silogisme",
  },
  {
    sub_topic: "Kemampuan Verbal (Silogisme)",
    difficulty: "sedang",
    question_text:
      "Setiap kandidat seleksi CPNS yang lolos tahap SKB wajib mengikuti pemeriksaan kesehatan menyeluruh. Sebagian kandidat yang lolos tahap SKB berasal dari jalur afirmasi putra/putri Papua. Simpulan yang tepat adalah...",
    pilihan: [
      "Semua kandidat jalur afirmasi putra/putri Papua langsung diangkat tanpa pemeriksaan kesehatan.",
      "Kandidat formasi umum tidak wajib mengikuti pemeriksaan kesehatan.",
      "Semua peserta pemeriksaan kesehatan berasal dari jalur afirmasi.",
      "Sebagian kandidat dari jalur afirmasi putra/putri Papua wajib mengikuti pemeriksaan kesehatan menyeluruh.",
      "Jalur afirmasi putra/putri Papua tidak memiliki tahapan SKB.",
    ],
    indeksBenar: 3,
    explanation:
      "Sebagian kandidat jalur afirmasi yang lolos tahap SKB termasuk dalam himpunan wajib periksa kesehatan, sehingga dapat disimpulkan sebagian kandidat jalur afirmasi putra/putri Papua wajib mengikuti pemeriksaan kesehatan menyeluruh.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Silogisme",
  },
  {
    sub_topic: "Kemampuan Verbal (Silogisme)",
    difficulty: "sulit",
    question_text:
      "Jika peserta ujian membawa alat komunikasi ke dalam ruang CAT, maka pengawas membatalkan kepesertaannya atau mengeluarkan peserta tersebut dari ruangan. Pengawas tidak membatalkan kepesertaan Andi dan tidak mengeluarkannya dari ruangan. Simpulannya adalah...",
    pilihan: [
      "Andi membawa alat komunikasi dalam keadaan mati.",
      "Pengawas tidak memeriksa barang bawaan Andi saat masuk ruangan.",
      "Andi adalah peserta cadangan yang datang terlambat.",
      "Alat komunikasi Andi dititipkan di dalam ruang ujian.",
      "Andi tidak membawa alat komunikasi ke dalam ruang CAT.",
    ],
    indeksBenar: 4,
    explanation:
      "Jika P -> (Q atau R) dan ternyata (~Q dan ~R) alias ~(Q atau R), maka menurut Modus Tollens kesimpulan pastinya adalah ~P, yakni Andi tidak membawa alat komunikasi ke dalam ruang CAT.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Verbal Silogisme",
  },

  // 9-11: Kemampuan Verbal — Penalaran Analitis
  {
    sub_topic: "Kemampuan Verbal (Penalaran Analitis)",
    difficulty: "sedang",
    question_text:
      "Tim inspektorat menjadwalkan kunjungan ke enam daerah (M, N, O, P, Q, dan R) dari hari Senin hingga Sabtu (satu daerah per hari). Daerah O dikunjungi pada hari Kamis; Daerah Q pada hari Sabtu; Daerah R dikunjungi sebelum Daerah O; dan Daerah M dikunjungi tepat satu hari setelah Daerah N. Daerah manakah yang pasti dikunjungi pada hari Jumat?",
    pilihan: ["Daerah M", "Daerah N", "Daerah R", "Daerah P", "Daerah O"],
    indeksBenar: 3,
    explanation:
      "Kamis = O dan Sabtu = Q menyisakan Senin, Selasa, Rabu, serta Jumat. Pasangan berurutan N-M dan daerah R (yang harus sebelum Kamis) semuanya menempati tiga hari awal (Senin-Rabu). Akibatnya satu-satunya daerah tersisa yaitu Daerah P pasti dijadwalkan pada hari Jumat.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Penalaran Analitis",
  },
  {
    sub_topic: "Kemampuan Verbal (Penalaran Analitis)",
    difficulty: "sedang",
    question_text:
      "Empat mata pelatihan ASN (Etika, Anggaran, Data, Komunikasi) ditempatkan di Ruang A dan Ruang B pada Sesi Pagi serta Sesi Siang (satu materi per ruang per sesi). Pelatihan Data tidak berlangsung pada Sesi Pagi; Pelatihan Anggaran berlangsung pada Sesi Pagi di Ruang A; sedangkan Etika dan Komunikasi dilaksanakan di ruangan yang berbeda. Jika Pelatihan Komunikasi ditempatkan pada Sesi Pagi di Ruang B, kapan dan di manakah Pelatihan Data dilaksanakan?",
    pilihan: [
      "Sesi Siang di Ruang A",
      "Sesi Siang di Ruang B",
      "Sesi Pagi di Ruang A",
      "Sesi Pagi di Ruang B",
      "Tidak dapat dijadwalkan",
    ],
    indeksBenar: 1,
    explanation:
      "Sesi Pagi penuh oleh Anggaran (Ruang A) dan Komunikasi (Ruang B). Karena Etika harus berbeda ruangan dengan Komunikasi (Ruang B), maka Etika wajib mengisi Sesi Siang Ruang A. Slot tersisa Sesi Siang Ruang B ditempati Pelatihan Data.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Penalaran Analitis",
  },
  {
    sub_topic: "Kemampuan Verbal (Penalaran Analitis)",
    difficulty: "sulit",
    question_text:
      "Dari lima kandidat (Aldi, Bima, Citra, Dewi, Eko), akan dibentuk tim inti beranggotakan tepat 3 orang dengan ketentuan: Eko wajib masuk tim; jika Aldi dipilih maka Bima wajib ikut dipilih; serta Citra dan Dewi tidak boleh dipilih secara bersamaan. Selain Eko, siapakah kandidat yang PASTI terpilih pada semua kemungkinan susunan tim?",
    pilihan: ["Aldi", "Bima", "Citra", "Dewi", "Tidak ada yang pasti"],
    indeksBenar: 1,
    explanation:
      "Dengan Eko sudah masuk, tersisa 2 kursi. Jika Aldi ikut, Bima wajib ikut -> {Eko, Aldi, Bima}. Jika Aldi tidak ikut, pilih 2 dari {Bima, Citra, Dewi}; karena Citra dan Dewi tidak bisa bersamaan, Bima selalu harus ikut ({Eko, Bima, Citra} atau {Eko, Bima, Dewi}). Pada seluruh kombinasi, Bima selalu terpilih.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Penalaran Analitis",
  },

  // 12-14: Kemampuan Numerik — Berhitung Cepat
  {
    sub_topic: "Kemampuan Numerik (Berhitung Cepat)",
    difficulty: "mudah",
    question_text: "Nilai dari (7/12) × 2,4 + 0,65 - 15% adalah...",
    pilihan: ["1,65", "1,75", "1,90", "2,05", "2,15"],
    indeksBenar: 2,
    explanation:
      "Hitung (7/12) × 2,4 = 7 × 0,2 = 1,40. Kemudian 1,40 + 0,65 - 0,15 = 1,90.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Berhitung",
  },
  {
    sub_topic: "Kemampuan Numerik (Berhitung Cepat)",
    difficulty: "sedang",
    question_text:
      "Jika 3/5 dari suatu bilangan adalah 108, maka 45% dari bilangan tersebut adalah...",
    pilihan: ["81", "72", "63", "54", "90"],
    indeksBenar: 0,
    explanation:
      "Bilangan N = 108 × (5/3) = 36 × 5 = 180. Nilai 45% × 180 = 0,45 × 180 = 81.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Berhitung",
  },
  {
    sub_topic: "Kemampuan Numerik (Berhitung Cepat)",
    difficulty: "sedang",
    question_text: "Hasil dari √(2,25) + (0,5)² × 8 - 3/4 adalah...",
    pilihan: ["1,75", "2,00", "2,25", "2,50", "2,75"],
    indeksBenar: 4,
    explanation:
      "√(2,25) = 1,5. Kemudian (0,5)² × 8 = 0,25 × 8 = 2, dan 3/4 = 0,75. Totalnya 1,5 + 2 - 0,75 = 2,75.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Berhitung",
  },

  // 15-18: Kemampuan Numerik — Deret Angka
  {
    sub_topic: "Kemampuan Numerik (Deret Angka)",
    difficulty: "mudah",
    question_text: "Tentukan angka berikutnya pada deret: 5, 6, 10, 19, 35, 60, ...",
    pilihan: ["85", "96", "98", "100", "105"],
    indeksBenar: 1,
    explanation:
      "Selisih antar-suku merupakan kuadrat bilangan asli berurutan: +1 (1²), +4 (2²), +9 (3²), +16 (4²), +25 (5²). Berikutnya +6² (+36), sehingga 60 + 36 = 96.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Deret Angka",
  },
  {
    sub_topic: "Kemampuan Numerik (Deret Angka)",
    difficulty: "mudah",
    question_text: "Angka pelengkap deret 2, 4, 12, 48, 240, ... adalah...",
    pilihan: ["720", "960", "1.200", "1.440", "1.680"],
    indeksBenar: 3,
    explanation:
      "Pola perkalian berturut-turut: ×2, ×3, ×4, ×5. Langkah selanjutnya adalah 240 × 6 = 1.440.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Deret Angka",
  },
  {
    sub_topic: "Kemampuan Numerik (Deret Angka)",
    difficulty: "sedang",
    question_text: "Lanjutkan deret menurun berikut: 81, 79, 75, 69, 61, ...",
    pilihan: ["49", "50", "51", "53", "55"],
    indeksBenar: 2,
    explanation:
      "Selisih pengurangannya bertambah genap berurutan: -2, -4, -6, -8. Maka pengurangan selanjutnya adalah -10, yakni 61 - 10 = 51.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Deret Angka",
  },
  {
    sub_topic: "Kemampuan Numerik (Deret Angka)",
    difficulty: "sedang",
    question_text: "Suku selanjutnya dari barisan 3, 5, 8, 13, 21, 34, ... adalah...",
    pilihan: ["55", "47", "52", "58", "68"],
    indeksBenar: 0,
    explanation:
      "Ini merupakan barisan penjumlahan dua suku sebelumnya (Fibonacci): 21 + 34 = 55.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Deret Angka",
  },

  // 19-21: Kemampuan Numerik — Perbandingan Kuantitatif
  {
    sub_topic: "Kemampuan Numerik (Perbandingan Kuantitatif)",
    difficulty: "mudah",
    question_text:
      "Jika x = (24 × 18) + (24 × 12) dan y = (24 × 31) - 24, hubungan yang benar antara x dan y adalah...",
    pilihan: [
      "x > y",
      "x < y",
      "x = y",
      "x = 2y",
      "Hubungan tidak dapat ditentukan",
    ],
    indeksBenar: 2,
    explanation:
      "Dengan sifat distributif: x = 24 × (18 + 12) = 24 × 30 = 720, sedangkan y = 24 × (31 - 1) = 24 × 30 = 720. Jadi x = y.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Perbandingan Kuantitatif",
  },
  {
    sub_topic: "Kemampuan Numerik (Perbandingan Kuantitatif)",
    difficulty: "sedang",
    question_text:
      "Sebuah unit kantor membeli proyektor dengan diskon 25% sehingga hanya membayar Rp4.500.000. Jika P adalah harga proyektor sebelum diskon dan Q = Rp5.800.000, maka...",
    pilihan: [
      "P > Q",
      "P < Q",
      "P = Q",
      "P = Q - Rp200.000",
      "Hubungan P dan Q tidak dapat ditentukan",
    ],
    indeksBenar: 0,
    explanation:
      "Setelah diskon 25%, harga bayar adalah 75% dari P: 0,75 × P = 4.500.000, sehingga P = 4.500.000 ÷ 0,75 = Rp6.000.000. Jelas bahwa P > Q (Rp6.000.000 > Rp5.800.000).",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Perbandingan Kuantitatif",
  },
  {
    sub_topic: "Kemampuan Numerik (Perbandingan Kuantitatif)",
    difficulty: "sedang",
    question_text:
      "Dua lingkaran A dan B memiliki perbandingan jari-jari rA : rB = 2 : 3. Jika P adalah rasio luas lingkaran A terhadap luas lingkaran B dan Q = 2/3, maka...",
    pilihan: [
      "P > Q",
      "P < Q",
      "P = Q",
      "P = 3/2 Q",
      "Hubungan P dan Q tidak dapat ditentukan",
    ],
    indeksBenar: 1,
    explanation:
      "Luas lingkaran sebanding dengan kuadrat jari-jari (πr²). Maka P = (2/3)² = 4/9. Bandingkan dengan Q = 2/3 = 6/9, sehingga P < Q.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Perbandingan Kuantitatif",
  },

  // 22-25: Kemampuan Numerik — Soal Cerita
  {
    sub_topic: "Kemampuan Numerik (Soal Cerita)",
    difficulty: "mudah",
    question_text:
      "Perbandingan tabungan Andi dan Budi adalah 5 : 3. Jika selisih tabungan mereka adalah Rp1.200.000, berapakah jumlah tabungan keduanya jika digabung?",
    pilihan: [
      "Rp3.000.000",
      "Rp3.600.000",
      "Rp4.200.000",
      "Rp4.800.000",
      "Rp5.400.000",
    ],
    indeksBenar: 3,
    explanation:
      "Selisih perbandingan = 5 - 3 = 2 bagian senilai Rp1.200.000 (1 bagian = Rp600.000). Jumlah gabungan = (5 + 3) × Rp600.000 = Rp4.800.000.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Soal Cerita",
  },
  {
    sub_topic: "Kemampuan Numerik (Soal Cerita)",
    difficulty: "mudah",
    question_text:
      "Sebuah tandon air gedung berkapasitas 1.800 liter diisi bersamaan oleh dua keran berdebit 25 liter/menit dan 20 liter/menit. Berapa menit waktu pengisian hingga tandon penuh dari keadaan kosong?",
    pilihan: ["35 menit", "40 menit", "45 menit", "50 menit", "60 menit"],
    indeksBenar: 1,
    explanation:
      "Debit total = 25 + 20 = 45 liter/menit. Waktu pengisian = 1.800 ÷ 45 = 40 menit.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Soal Cerita",
  },
  {
    sub_topic: "Kemampuan Numerik (Soal Cerita)",
    difficulty: "sedang",
    question_text:
      "Persediaan alat tulis di gudang cukup untuk memenuhi kebutuhan 24 staf selama 15 hari kerja. Apabila terdapat tambahan 6 staf baru dengan tingkat pemakaian harian sama rata, persediaan tersebut cukup untuk berapa hari?",
    pilihan: ["10 hari", "11 hari", "12 hari", "13 hari", "14 hari"],
    indeksBenar: 2,
    explanation:
      "Total stok tersedia untuk 24 × 15 = 360 staf-hari. Dengan 24 + 6 = 30 staf, persediaan bertahan selama 360 ÷ 30 = 12 hari.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Soal Cerita",
  },
  {
    sub_topic: "Kemampuan Numerik (Soal Cerita)",
    difficulty: "sulit",
    question_text:
      "Di koperasi pegawai, harga 3 buku nota dan 2 pulpen adalah Rp31.000, sedangkan harga 2 buku nota dan 4 pulpen adalah Rp34.000. Berapakah harga 1 buku nota ditambah 1 pulpen?",
    pilihan: ["Rp9.000", "Rp10.000", "Rp11.000", "Rp11.500", "Rp12.000"],
    indeksBenar: 4,
    explanation:
      "Dari 3b + 2p = 31.000 (kalikan 2 -> 6b + 4p = 62.000) dikurangi 2b + 4p = 34.000, diperoleh 4b = 28.000 sehingga b = Rp7.000. Substitusi menghasilkan 2p = 10.000 -> p = Rp5.000. Jadi b + p = Rp12.000.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Numerik Soal Cerita",
  },

  // 26-35: Kemampuan Figural Set 2
  {
    sub_topic: "Kemampuan Figural (Analogi Pola)",
    difficulty: "mudah",
    question_text:
      "Pada pasangan pola transformasi: [Persegi besar kosong mengelilingi 1 lingkaran kecil hitam] berubah menjadi [Lingkaran besar hitam mengelilingi 2 persegi kecil kosong]. Mengikuti aturan yang sama, bentuk [Segitiga besar kosong mengelilingi 1 belah ketupat kecil hitam] berubah menjadi...",
    pilihan: [
      "Belah ketupat besar hitam mengelilingi 2 segitiga kecil kosong",
      "Segitiga besar hitam mengelilingi 2 belah ketupat kecil kosong",
      "Belah ketupat besar kosong mengelilingi 1 segitiga kecil hitam",
      "Belah ketupat besar hitam mengelilingi 1 segitiga kecil hitam",
      "Lingkaran besar hitam mengelilingi 2 segitiga kecil kosong",
    ],
    indeksBenar: 0,
    explanation:
      "Transformasi menukar bentuk luar dan bentuk dalam, menukar warna (kosong menjadi hitam dan sebaliknya), serta menambah jumlah bentuk dalam dari 1 menjadi 2 buah.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Analogi",
  },
  {
    sub_topic: "Kemampuan Figural (Analogi Pola)",
    difficulty: "sulit",
    question_text:
      "Pada sebuah jaring-jaring kubus memanjang berbentuk salib, enam sisi berurutan pada sumbu vertikal diberi angka 1, 2, 3, 4 dari atas ke bawah, sementara sisi kiri menempel pada angka 2 (berkode A) dan sisi kanan menempel pada angka 2 (berkode B). Saat jaring-jaring dilipat menjadi kubus, pasangan sisi yang saling berhadapan (berseberangan) adalah...",
    pilihan: [
      "Sisi 1 dan Sisi 2",
      "Sisi A dan Sisi 3",
      "Sisi 2 dan Sisi 4",
      "Sisi 1 dan Sisi B",
      "Sisi 3 dan Sisi 4",
    ],
    indeksBenar: 2,
    explanation:
      "Pada deretan lurus empat sisi (1-2-3-4), sisi yang terpisah tepat 1 kotak saling berhadapan: Sisi 1 berhadapan dengan Sisi 3, Sisi 2 berhadapan dengan Sisi 4, dan sayap kiri-kanan (A dan B) saling berhadapan.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Spasial",
  },
  {
    sub_topic: "Kemampuan Figural (Analogi Pola)",
    difficulty: "sedang",
    question_text:
      "Suatu gambar persegi berisi diagonal utama dari kiri-atas ke kanan-bawah dengan setengah bagian atas berarsir garis mendatar dan 1 titik putih di kuadran kiri-bawah. Gambar diputar 180° mengelilingi pusat persegi dan warnanya dibalik (arsir menjadi putih, putih menjadi hitam). Hasil gambarnya adalah...",
    pilihan: [
      "Diagonal dari kiri-bawah ke kanan-atas dengan arsir di atas",
      "Diagonal tetap kiri-atas ke kanan-bawah, setengah bagian bawah tidak berarsir dan 1 titik putih di kanan-atas",
      "Diagonal tetap kiri-atas ke kanan-bawah, setengah bagian atas tetap berarsir penuh hitam",
      "Diagonal tetap kiri-atas ke kanan-bawah, setengah bagian bawah putih polos dan bagian atas polos berarsir titik hitam di kanan-atas",
      "Diagonal dari kiri-atas ke kanan-bawah, bagian atas tidak berarsir (putih) sedangkan bagian bawah berarsir dengan 1 titik hitam di kanan-atas",
    ],
    indeksBenar: 4,
    explanation:
      "Rotasi 180° mengembalikan diagonal kiri-atas–kanan-bawah ke orientasi yang sama, memindahkan bagian atas ke bawah dan memindahkan titik kiri-bawah ke kanan-atas. Pembalikan warna mengubah titik putih menjadi hitam.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Analogi",
  },
  {
    sub_topic: "Kemampuan Figural (Ketidaksamaan Pola)",
    difficulty: "mudah",
    question_text:
      "Dari lima bangun simbol huruf kapital tebal berikut, manakah yang TIDAK memiliki sumbu simetri lipat sama sekali?\nA: Huruf A\nB: Huruf H\nC: Huruf M\nD: Huruf T\nE: Huruf Z",
    pilihan: ["Simbol A", "Simbol H", "Simbol M", "Simbol T", "Simbol Z"],
    indeksBenar: 4,
    explanation:
      "Huruf A, H, M, dan T memiliki minimal satu sumbu simetri lipat (simetri vertikal pada A, M, T, serta vertikal dan horizontal pada H). Huruf Z hanya memiliki simetri putar 180°, tetapi tidak memiliki sumbu simetri lipat.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Ketidaksamaan",
  },
  {
    sub_topic: "Kemampuan Figural (Ketidaksamaan Pola)",
    difficulty: "sedang",
    question_text:
      "Amati lima komposisi gambar bangun kecil dan noktah berikut. Manakah gambar yang TIDAK mengikuti pola hubungan jumlah yang sama seperti keempat gambar lainnya?\nA: 2 lingkaran kecil dengan 4 noktah di dalamnya\nB: 3 segitiga kecil dengan 6 noktah di dalamnya\nC: 4 persegi kecil dengan 8 noktah di dalamnya\nD: 3 belah ketupat kecil dengan 5 noktah di dalamnya\nE: 5 bintang kecil dengan 10 noktah di dalamnya",
    pilihan: ["Gambar A", "Gambar B", "Gambar C", "Gambar D", "Gambar E"],
    indeksBenar: 3,
    explanation:
      "Pada A, B, C, dan E, jumlah titik selalu tepat 2 kali lipat jumlah bangun kecil (2->4, 3->6, 4->8, 5->10). Gambar D hanya memiliki 5 titik untuk 3 belah ketupat (seharusnya 6).",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Ketidaksamaan",
  },
  {
    sub_topic: "Kemampuan Figural (Ketidaksamaan Pola)",
    difficulty: "sedang",
    question_text:
      "Dalam lima bujur sangkar identik diletakkan sepasang panah pada sisi berhadapan:\nA: Panah sisi atas ke bawah dan sisi bawah ke atas (saling menuju pusat)\nB: Panah sisi kiri ke kanan dan sisi kanan ke kiri (saling menuju pusat)\nC: Panah sudut kiri-atas ke kanan-bawah dan kanan-bawah ke kiri-atas (saling menuju pusat)\nD: Panah sisi atas ke bawah dan sisi bawah juga ke bawah (searah menembus keluar)\nE: Panah sudut kanan-atas ke kiri-bawah dan kiri-bawah ke kanan-atas (saling menuju pusat)\nManakah yang berbeda?",
    pilihan: ["Konfigurasi A", "Konfigurasi B", "Konfigurasi C", "Konfigurasi D", "Konfigurasi E"],
    indeksBenar: 3,
    explanation:
      "Pada A, B, C, dan E kedua panah bergerak saling berlawanan arah menuju titik pusat bujur sangkar. Hanya Konfigurasi D yang memiliki kedua panah searah ke bawah.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Ketidaksamaan",
  },
  {
    sub_topic: "Kemampuan Figural (Serial Pola)",
    difficulty: "sedang",
    question_text:
      "Sebuah segi lima beraturan memiliki sudut bernomor 0 (atas), 1 (kanan-atas), 2 (kanan-bawah), 3 (kiri-bawah), dan 4 (kiri-atas). Sebuah noktah melompat searah jarum jam sebesar +2 sudut tiap panel:\nPanel 1: Sudut 0\nPanel 2: Sudut 2\nPanel 3: Sudut 4\nPanel 4: Sudut 1\nDi manakah posisi noktah pada Panel 5?",
    pilihan: [
      "Sudut 0 (atas)",
      "Sudut 1 (kanan-atas)",
      "Sudut 2 (kanan-bawah)",
      "Sudut 3 (kiri-bawah)",
      "Sudut 4 (kiri-atas)",
    ],
    indeksBenar: 3,
    explanation:
      "Dengan penjumlahan +2 modulo 5: 0 -> 2 -> 4 -> 1 (karena 4+2=6≡1) -> 3 (karena 1+2=3). Posisi pada Panel 5 adalah Sudut 3 (kiri-bawah).",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Serial",
  },
  {
    sub_topic: "Kemampuan Figural (Serial Pola)",
    difficulty: "sedang",
    question_text:
      "Sebuah segi enam beraturan mula-mula memiliki 6 ruas jari-jari dari titik pusat menuju sudut arah pukul 12, 2, 4, 6, 8, dan 10. Setiap panel berikutnya menghapus tepat satu jari-jari secara berurutan searah jarum jam:\nPanel 1: 6 jari-jari lengkap\nPanel 2: Jari-jari pukul 12 dihapus (sisa 5)\nPanel 3: Jari-jari pukul 12 dan 2 dihapus (sisa 4)\nPanel 4: Jari-jari pukul 12, 2, dan 4 dihapus (sisa 3)\nJari-jari mana sajakah yang masih tersisa pada Panel 5?",
    pilihan: [
      "Pukul 6, 8, dan 10",
      "Pukul 8 dan 10 saja",
      "Pukul 6 dan 8 saja",
      "Pukul 10 saja",
      "Pukul 2, 8, dan 10",
    ],
    indeksBenar: 1,
    explanation:
      "Pada Panel 5 dihapus satu lagi yaitu jari-jari pukul 6, sehingga tersisa tepat dua jari-jari yang mengarah ke pukul 8 dan pukul 10.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Serial",
  },
  {
    sub_topic: "Kemampuan Figural (Serial Pola)",
    difficulty: "mudah",
    question_text:
      "Pada barisan 4 panel: Panel 1 berisi 1 garis tegak + 0 titik; Panel 2 berisi 1 garis tegak + 1 garis datar + 1 titik; Panel 3 berisi segitiga tertutup + 2 titik; Panel 4 berisi segi empat tertutup + 3 titik. Isi Panel 5 berikutnya adalah...",
    pilihan: [
      "Segi lima tertutup + 4 titik",
      "Segi lima tertutup + 5 titik",
      "Segi empat tertutup + 4 titik",
      "Segi enam tertutup + 4 titik",
      "Segitiga tertutup + 4 titik",
    ],
    indeksBenar: 0,
    explanation:
      "Jumlah ruas garis pembentuk selalu bertambah +1 (1, 2, 3, 4 -> 5 membentuk segi lima tertutup) dan jumlah titik selalu bertambah +1 (0, 1, 2, 3 -> 4 titik).",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Serial",
  },
  {
    sub_topic: "Kemampuan Figural (Serial Pola)",
    difficulty: "sulit",
    question_text:
      "Sebuah susunan kubus satuan tiga dimensi tersusun dalam 3 tingkat simetris di pojok ruang (piramida tangga): tingkat paling bawah terdiri dari lapisan 3×3 kubus, tingkat tengah di atasnya berisi lapisan 2×2 kubus, dan tingkat puncak teratas berisi 1 kubus. Berapakah jumlah seluruh kubus satuan pada susunan tersebut (termasuk kubus penyangga yang tertutup di bagian bawah)?",
    pilihan: ["10 kubus", "12 kubus", "14 kubus", "15 kubus", "18 kubus"],
    indeksBenar: 2,
    explanation:
      "Hitung per tingkat dari bawah ke atas: tingkat dasar = 3×3 = 9 kubus; tingkat tengah = 2×2 = 4 kubus; tingkat puncak = 1×1 = 1 kubus. Total = 9 + 4 + 1 = 14 kubus satuan.",
    source_reference: "Kisi-Kisi TIU Kepmenpan-RB 321/2024 — Figural Spasial",
  },
];
