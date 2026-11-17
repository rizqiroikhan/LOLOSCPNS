import type { DefinisiButirTIU } from "./bank-soal-tiu.ts";

/**
 * Bank Soal TIU Akbar (Seri 1 s.d. 5 — 175 Butir Unik) — LOLOS CPNS.
 * Seluruh butir soal telah diparafrase semantik dan diverifikasi matematis mengacu pada Kepmenpan-RB Nomor 321 Tahun 2024.
 */
export const BANK_SOAL_TIU_AKBAR_SETS: DefinisiButirTIU[][] = [
  [
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "mudah",
      "question_text": "PATUNG : PEMAHAT = ... : ...",
      "pilihan": [
        "Penyair : Puisi",
        "Kuas : Pelukis",
        "Puisi : Penyair",
        "Panggung : Aktor",
        "Nada : Komponis"
      ],
      "indeksBenar": 2,
      "explanation": "Hubungan pada pasangan kata PATUNG : PEMAHAT adalah hasil karya dan penciptanya (patung dibuat oleh seorang pemahat). Pasangan yang sepadan dan searah adalah Puisi : Penyair (puisi diciptakan oleh seorang penyair). Opsi 'Penyair : Puisi' memiliki arah terbalik, 'Kuas : Pelukis' menyatakan alat dan pengguna, 'Panggung : Aktor' menyatakan tempat dan pelaku, sedangkan 'Nada : Komponis' menyatakan unsur karya dan pencipta.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "mudah",
      "question_text": "NEUROLOGI : SARAF = ... : ...",
      "pilihan": [
        "Dermatologi : Kulit",
        "Kulit : Dermatologi",
        "Pediatri : Lansia",
        "Ortopedi : Mata",
        "Hematologi : Ginjal"
      ],
      "indeksBenar": 0,
      "explanation": "Hubungan NEUROLOGI : SARAF adalah cabang ilmu kedokteran beserta objek kajian utamanya (neurologi mempelajari sistem saraf). Padanan yang tepat adalah Dermatologi : Kulit (dermatologi adalah cabang ilmu kedokteran yang mempelajari kulit). Pilihan lain memiliki arah terbalik atau memasangkan bidang ilmu dengan organ/kelompok usia yang keliru.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "mudah",
      "question_text": "Kata 'sarung tangan' berhubungan dengan kata 'tangan' sebagaimana kata ... berhubungan dengan kata ...",
      "pilihan": [
        "kaki : kaus kaki",
        "jari : cincin",
        "sepatu : tali",
        "kepala : rambut",
        "kaus kaki : kaki"
      ],
      "indeksBenar": 4,
      "explanation": "Urutan relasi pada premis adalah pelapis/penutup pelindung yang dikenakan langsung pada bagian tubuh (sarung tangan dikenakan untuk melapisi tangan). Padanan yang sejajar arahnya adalah kaus kaki : kaki (kaus kaki dikenakan untuk melapisi kaki). Opsi 'kaki : kaus kaki' terbalik urutannya, sedangkan opsi lainnya tidak menunjukkan relasi pelindung bagian tubuh.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sedang",
      "question_text": "KAKAO : COKELAT = ... : ...",
      "pilihan": [
        "Gula : Tebu",
        "Tebu : Gula",
        "Tepung : Gandum",
        "Kain : Kapas",
        "Susu : Sapi"
      ],
      "indeksBenar": 1,
      "explanation": "Hubungan KAKAO : COKELAT adalah bahan baku utama yang diolah menjadi produk akhir (biji kakao diolah menjadi cokelat). Pasangan yang sepadan dan searah adalah Tebu : Gula (tebu diolah menjadi gula). Tiga pengecoh pertama memiliki arah terbalik (produk : bahan), sedangkan 'Susu : Sapi' menyatakan hasil dan hewan penghasilnya.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "mudah",
      "question_text": "Semua peserta seleksi CPNS wajib mengikuti ujian berbasis komputer. Sebagian lulusan fakultas teknik adalah peserta seleksi CPNS. Simpulan yang paling tepat adalah ...",
      "pilihan": [
        "Semua lulusan fakultas teknik wajib mengikuti ujian berbasis komputer.",
        "Sebagian lulusan fakultas teknik wajib mengikuti ujian berbasis komputer.",
        "Semua yang mengikuti ujian berbasis komputer adalah lulusan fakultas teknik.",
        "Sebagian peserta seleksi CPNS pasti bukan lulusan fakultas teknik.",
        "Tidak ada lulusan fakultas teknik yang mengikuti ujian berbasis komputer."
      ],
      "indeksBenar": 1,
      "explanation": "Berdasarkan silogisme kategorik bentuk universal-partikular (Semua A adalah B; Sebagian C adalah A), simpulan sahih yang ditarik adalah Sebagian C adalah B. Dengan demikian, sebagian lulusan fakultas teknik wajib mengikuti ujian berbasis komputer.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "mudah",
      "question_text": "Setiap pegawai negeri sipil yang bertugas di loket pelayanan publik wajib mengenakan tanda pengenal dinas. Raka adalah pegawai negeri sipil yang bertugas di loket pelayanan publik. Pernyataan yang paling tepat adalah ...",
      "pilihan": [
        "Raka hanya mengenakan tanda pengenal dinas saat apel pagi.",
        "Semua pemakai tanda pengenal dinas bertugas di loket pelayanan publik.",
        "Raka tidak perlu mengenakan tanda pengenal dinas apabila sudah dikenal warga.",
        "Raka wajib mengenakan tanda pengenal dinas.",
        "Tanda pengenal dinas hanya dimiliki oleh Raka."
      ],
      "indeksBenar": 3,
      "explanation": "Premis mayor berlaku universal untuk seluruh PNS di loket pelayanan publik. Karena Raka termasuk ke dalam kelompok tersebut (Modus Ponens), maka secara deduktif Raka wajib mengenakan tanda pengenal dinas.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sedang",
      "question_text": "Jika usulan anggaran disetujui oleh dewan pengawas, pembangunan gedung arsip dimulai pada bulan Mei. Pada kenyataannya, pembangunan gedung arsip tidak dimulai pada bulan Mei. Simpulan yang tepat adalah ...",
      "pilihan": [
        "Usulan anggaran tidak disetujui oleh dewan pengawas.",
        "Dewan pengawas menyetujui usulan anggaran dengan syarat tertentu.",
        "Pembangunan gedung arsip akan dimulai pada bulan Juni.",
        "Proyek pembangunan gedung arsip dibatalkan secara permanen.",
        "Jika pembangunan tidak dimulai bulan Mei, anggaran langsung dicairkan."
      ],
      "indeksBenar": 0,
      "explanation": "Gunakan kaidah Modus Tollens: dari premis (p -> q) dan (~q), dapat disimpulkan (~p). Karena akibat (pembangunan dimulai pada bulan Mei) tidak terjadi, maka sebabnya (usulan anggaran disetujui oleh dewan pengawas) juga tidak terjadi.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sedang",
      "question_text": "Jika curah hujan di wilayah hulu tinggi, debit air sungai utama meningkat. Jika debit air sungai utama meningkat, petugas membuka pintu air bendungan. Ternyata petugas tidak membuka pintu air bendungan. Simpulan yang paling tepat adalah ...",
      "pilihan": [
        "Curah hujan di wilayah hulu tinggi tetapi debit sungai tetap rendah.",
        "Debit air sungai utama meningkat di luar dugaan petugas.",
        "Petugas lupa membuka pintu air meskipun sungai meluap.",
        "Tidak dapat ditarik simpulan mengenai curah hujan di wilayah hulu.",
        "Curah hujan di wilayah hulu tidak tinggi."
      ],
      "indeksBenar": 4,
      "explanation": "Dari silogisme hipotetis p -> q dan q -> r, diperoleh p -> r (jika curah hujan hulu tinggi, petugas membuka pintu air bendungan). Karena ~r terjadi (petugas tidak membuka pintu air), berdasarkan Modus Tollens disimpulkan ~p, yakni curah hujan di wilayah hulu tidak tinggi.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "mudah",
      "question_text": "Empat sepupu bernama Bayu, Citra, Dimas, dan Eka memiliki perbandingan usia sebagai berikut: Bayu lebih tua 3 tahun daripada Citra; Eka lebih muda 2 tahun daripada Citra; sedangkan Dimas lebih tua 4 tahun daripada Bayu. Bagaimanakah urutan mereka dari yang paling muda hingga yang paling tua?",
      "pilihan": [
        "Citra – Eka – Bayu – Dimas",
        "Dimas – Bayu – Citra – Eka",
        "Eka – Bayu – Citra – Dimas",
        "Bayu – Dimas – Eka – Citra",
        "Eka – Citra – Bayu – Dimas"
      ],
      "indeksBenar": 4,
      "explanation": "Misalkan usia Citra = c. Maka usia Eka = c - 2, usia Bayu = c + 3, dan usia Dimas = (c + 3) + 4 = c + 7. Dengan demikian, urutan dari yang paling muda hingga yang paling tua adalah Eka, Citra, Bayu, Dimas.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sedang",
      "question_text": "Tiga pustakawan, yakni Laras, Bagas, dan Tari, bertugas mengindeks arsip digital setiap pekan. Laras mengindeks 60 berkas setiap hari Senin, Selasa, dan Rabu. Bagas mengindeks 15 berkas lebih sedikit daripada Laras pada dua hari setelah jadwal Laras bertugas. Tari mengindeks 10 berkas lebih banyak daripada Bagas pada satu hari sebelum jadwal Bagas bertugas. Pada hari apa saja Tari bertugas dan berapa berkas yang ia indeks setiap kali bertugas?",
      "pilihan": [
        "Rabu, Kamis, dan Jumat sebanyak 45 berkas",
        "Selasa, Rabu, dan Kamis sebanyak 65 berkas",
        "Selasa, Rabu, dan Kamis sebanyak 55 berkas",
        "Senin, Selasa, dan Rabu sebanyak 55 berkas",
        "Kamis, Jumat, dan Sabtu sebanyak 55 berkas"
      ],
      "indeksBenar": 2,
      "explanation": "Jadwal Laras: Senin, Selasa, Rabu (60 berkas). Dua hari setelahnya adalah jadwal Bagas: Rabu, Kamis, Jumat (60 - 15 = 45 berkas). Satu hari sebelum jadwal Bagas adalah jadwal Tari: Selasa, Rabu, Kamis, dengan jumlah berkas = 45 + 10 = 55 berkas setiap kali bertugas.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sedang",
      "question_text": "Dua instansi daerah, Dinas A dan Dinas B, mengadakan latihan olahraga rutin setiap hari Senin sampai Sabtu untuk cabang bulu tangkis, tenis meja, dan catur dengan ketentuan berikut: (1) Dinas A berlatih bulu tangkis pada hari Senin dan Kamis, berlatih catur pada hari Sabtu, serta berlatih tenis meja pada hari selain yang disebutkan; (2) Dinas B berlatih bulu tangkis sehari setelah hari latihan tenis meja Dinas A, berlatih catur sehari sebelum jadwal catur Dinas A, dan berlatih tenis meja dua hari setelah hari latihan bulu tangkis Dinas B. Pada cabang olahraga apa saja dan hari apakah Dinas A dan Dinas B memiliki jadwal latihan bersama?",
      "pilihan": [
        "Bulu tangkis pada hari Senin dan catur pada hari Sabtu",
        "Bulu tangkis pada hari Kamis dan tenis meja pada hari Jumat",
        "Tenis meja pada hari Rabu dan bulu tangkis pada hari Kamis",
        "Catur pada hari Jumat dan tenis meja pada hari Senin",
        "Bulu tangkis pada hari Kamis saja tanpa cabang olahraga lain"
      ],
      "indeksBenar": 1,
      "explanation": "Jadwal Dinas A: bulu tangkis (Senin, Kamis), catur (Sabtu), tenis meja (Selasa, Rabu, Jumat). Jadwal Dinas B: bulu tangkis (Rabu, Kamis, Sabtu), catur (Jumat), tenis meja (Jumat, Sabtu, Senin). Irisan jadwal yang bertepatan pada hari yang sama adalah bulu tangkis di hari Kamis dan tenis meja di hari Jumat.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sulit",
      "question_text": "Panitia bakti sosial membeli logistik berupa beras putih 4 kg, beras merah 5 kg, minyak goreng dengan berat dua kali berat beras merah dikurangi 1 kg, serta 5 dus gula pasir yang masing-masing beratnya 3 kg. Setiap kardus pengemasan tidak boleh memuat lebih dari 4 kg barang dan tidak boleh mencampur bahan kering (beras dan gula) dengan bahan cair (minyak goreng). Berapakah jumlah minimal kardus yang dibutuhkan panitia?",
      "pilihan": [
        "7 kardus",
        "8 kardus",
        "10 kardus",
        "9 kardus",
        "11 kardus"
      ],
      "indeksBenar": 3,
      "explanation": "Total bahan kering = beras putih (4 kg) + beras merah (5 kg) + gula pasir (5 × 3 = 15 kg) = 24 kg. Dengan kapasitas maksimal 4 kg per kardus, bahan kering membutuhkan 24 : 4 = 6 kardus. Berat minyak goreng = (2 × 5) - 1 = 9 kg. Untuk memuat 9 kg bahan cair dengan batas 4 kg per kardus dibutuhkan 3 kardus (4 kg + 4 kg + 1 kg). Jadi, total minimal adalah 6 + 3 = 9 kardus.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "mudah",
      "question_text": "Hasil dari (47 + 28)^2 - 3.625 adalah ...",
      "pilihan": [
        "1.900",
        "2.000",
        "2.025",
        "2.125",
        "2.250"
      ],
      "indeksBenar": 1,
      "explanation": "Hitung terlebih dahulu operasi di dalam tanda kurung: 47 + 28 = 75. Kemudian kuadratkan dengan trik bilangan berakhiran 5: 75^2 = (7 × 8)25 = 5.625. Langkah akhir: 5.625 - 3.625 = 2.000.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "mudah",
      "question_text": "Nilai dari (136^2 - 64^2) : 200 adalah ...",
      "pilihan": [
        "64",
        "68",
        "76",
        "82",
        "72"
      ],
      "indeksBenar": 4,
      "explanation": "Gunakan identitas selisih dua kuadrat: a^2 - b^2 = (a - b)(a + b). Maka (136^2 - 64^2) / 200 = (136 - 64)(136 + 64) / 200 = (72 × 200) / 200 = 72.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sedang",
      "question_text": "Hasil perhitungan dari (12,25 : 0,25) : 3,5 adalah ...",
      "pilihan": [
        "14",
        "7",
        "12",
        "16",
        "28"
      ],
      "indeksBenar": 0,
      "explanation": "Sederhanakan pembagian pertama dengan mengalikan pembilang dan penyebut dengan 4: 12,25 : 0,25 = 49. Selanjutnya bagi hasil tersebut dengan 3,5: 49 : 3,5 = 490 : 35 = 14.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sedang",
      "question_text": "Nilai dari 3,75 + 5/8 - (1,25 × 2) adalah ...",
      "pilihan": [
        "1,375",
        "1,625",
        "1,875",
        "2,125",
        "2,375"
      ],
      "indeksBenar": 2,
      "explanation": "Ubah pecahan 5/8 menjadi bentuk desimal yaitu 0,625, serta hitung perkaliannya: 1,25 × 2 = 2,5. Maka 3,75 + 0,625 - 2,5 = 4,375 - 2,5 = 1,875.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "mudah",
      "question_text": "Tentukan angka yang tepat untuk melengkapi deret berikut: 4, 7, 12, 19, 28, 39, ...",
      "pilihan": [
        "48",
        "50",
        "54",
        "52",
        "56"
      ],
      "indeksBenar": 3,
      "explanation": "Pola selisih antarsuku bertambah 2 secara teratur berupa barisan bilangan ganjil: +3, +5, +7, +9, +11, dan seterusnya. Suku selanjutnya adalah 39 + 13 = 52.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "mudah",
      "question_text": "Tentukan angka berikutnya pada barisan: 3, 7, 14, 18, 36, 40, ...",
      "pilihan": [
        "44",
        "80",
        "60",
        "76",
        "84"
      ],
      "indeksBenar": 1,
      "explanation": "Pola operasi bergantian secara tetap yaitu +4 lalu ×2: 3 (+4) -> 7 (×2) -> 14 (+4) -> 18 (×2) -> 36 (+4) -> 40. Langkah selanjutnya adalah 40 × 2 = 80.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "mudah",
      "question_text": "Angka yang tepat untuk mengisi titik-titik pada barisan 12, 44, 17, 40, 22, 36, 27, ... adalah ...",
      "pilihan": [
        "30",
        "31",
        "33",
        "34",
        "32"
      ],
      "indeksBenar": 4,
      "explanation": "Barisan terdiri atas dua larik berselang. Larik ganjil bertambah tetap (+5): 12, 17, 22, 27. Larik genap berkurang tetap (-4): 44, 40, 36. Maka suku ke-8 (larik genap) adalah 36 - 4 = 32.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sedang",
      "question_text": "Isilah bagian yang rumpang pada deret berikut: 240, 240, 120, 40, ..., 2",
      "pilihan": [
        "10",
        "8",
        "12",
        "15",
        "20"
      ],
      "indeksBenar": 0,
      "explanation": "Pola pembagian bertingkat secara berurutan dari dibagi 1 sampai dibagi 5: 240 : 1 = 240; 240 : 2 = 120; 120 : 3 = 40; 40 : 4 = 10; lalu diperiksa ke suku terakhir 10 : 5 = 2. Jadi angka yang tepat adalah 10.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "mudah",
      "question_text": "Diketahui P adalah bilangan yang menyatakan 0,84% dari 3,75 dan Q adalah bilangan yang menyatakan 3,75% dari 0,84. Pernyataan hubungan yang benar antara P dan Q adalah...",
      "pilihan": [
        "P > Q",
        "P < Q",
        "P = Q",
        "P = 2Q",
        "Hubungan P dan Q tidak dapat ditentukan"
      ],
      "indeksBenar": 2,
      "explanation": "Dengan sifat komutatif perkalian: P = (0,84/100) × 3,75 = (0,84 × 3,75)/100, sedangkan Q = (3,75/100) × 0,84 = (3,75 × 0,84)/100. Keduanya bernilai sama persis (0,0315), sehingga P = Q.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "mudah",
      "question_text": "Untuk sembarang bilangan real a, diketahui nilai P = 5a² + 7 dan Q = 2a² + 4. Hubungan kuantitatif antara P dan Q yang selalu berlaku adalah...",
      "pilihan": [
        "P > Q",
        "P < Q",
        "P = Q",
        "P + Q = 11",
        "Hubungan P dan Q tidak dapat ditentukan"
      ],
      "indeksBenar": 0,
      "explanation": "Hitung selisihnya: P - Q = (5a² + 7) - (2a² + 4) = 3a² + 3. Karena kuadrat bilangan real selalu tidak negatif (a² ≥ 0), maka 3a² + 3 ≥ 3 > 0 untuk setiap a. Dengan demikian, selalu berlaku P > Q.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "mudah",
      "question_text": "Diketahui persamaan eksponen 3ˣ = 243 dan 2ʸ = 64. Hubungan nilai yang benar antara x dan y adalah...",
      "pilihan": [
        "x > y",
        "x < y",
        "x = y",
        "x = 2y",
        "Hubungan x dan y tidak dapat ditentukan"
      ],
      "indeksBenar": 1,
      "explanation": "Karena 3⁵ = 243 maka x = 5, sedangkan 2⁶ = 64 maka y = 6. Dengan demikian, 5 < 6 sehingga x < y.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "mudah",
      "question_text": "Seorang pedagang komoditas membeli satu stok kopi sangrai seharga Rp640.000, lalu seluruhnya habis terjual dengan total penerimaan Rp800.000. Berapa persen keuntungan yang diperoleh pedagang tersebut dari harga belinya?",
      "pilihan": [
        "25%",
        "18%",
        "20%",
        "22,5%",
        "28%"
      ],
      "indeksBenar": 0,
      "explanation": "Besar keuntungan = Rp800.000 - Rp640.000 = Rp160.000. Persentase keuntungan = (Rp160.000 ÷ Rp640.000) × 100% = (1/4) × 100% = 25%.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "mudah",
      "question_text": "Satu karung beras bantuan memiliki berat kotor (bruto) 75 kg. Setelah ditimbang kembali tanpa kemasan karungnya, berat bersih (neto) beras di dalamnya adalah 73,5 kg. Berapa persen tara karung tersebut terhadap brutonya?",
      "pilihan": [
        "1,5%",
        "2%",
        "2,5%",
        "3%",
        "3,5%"
      ],
      "indeksBenar": 1,
      "explanation": "Berat kemasan (tara) = bruto - neto = 75 - 73,5 = 1,5 kg. Persentase tara = (1,5 ÷ 75) × 100% = 0,02 × 100% = 2%.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "mudah",
      "question_text": "Sebuah toko perlengkapan kantor menjual tas kerja seharga Rp324.000 dan memperoleh keuntungan sebesar 20% dari harga pembeliannya. Berapakah harga beli tas kerja tersebut?",
      "pilihan": [
        "Rp250.000",
        "Rp259.200",
        "Rp270.000",
        "Rp265.000",
        "Rp280.000"
      ],
      "indeksBenar": 2,
      "explanation": "Harga jual mencakup 100% harga beli + 20% untung = 120% dari harga beli. Maka harga beli = Rp324.000 ÷ 1,2 = Rp270.000.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "mudah",
      "question_text": "Sebuah kendaraan dinas bak terbuka harus mengangkut 8,5 ton logistik bencana dari gudang daerah menuju posko kecamatan. Jika kapasitas muatan maksimal sekali angkut adalah 600 kg, berapa kali perjalanan paling sedikit yang harus ditempuh agar seluruh logistik terangkut?",
      "pilihan": [
        "13 kali",
        "14 kali",
        "16 kali",
        "15 kali",
        "17 kali"
      ],
      "indeksBenar": 3,
      "explanation": "Konversi satuan berat: 8,5 ton = 8.500 kg. Banyaknya perjalanan = 8.500 ÷ 600 = 14,17 kali. Karena sisa muatan 100 kg tetap wajib diangkut, diperlukan minimal 15 kali perjalanan.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "mudah",
      "question_text": "Amati analogi pola berikut: [▲ hitam di sisi atas + 1 persegi putih (□) di sisi bawah] berpasangan dengan [▲ hitam di sisi atas + 2 persegi putih sejajar (□ □) di sisi bawah]. Mengikuti aturan yang sama, pasangan untuk [● hitam di sisi atas + 1 belah ketupat putih (◇) di sisi bawah] adalah...",
      "pilihan": [
        "● hitam di sisi atas + 2 belah ketupat putih sejajar (◇ ◇) di sisi bawah",
        "○ putih di sisi atas + 2 belah ketupat putih sejajar (◇ ◇) di sisi bawah",
        "● hitam di sisi atas + 2 belah ketupat hitam sejajar (◆ ◆) di sisi bawah",
        "● hitam di sisi bawah + 2 belah ketupat putih sejajar (◇ ◇) di sisi atas",
        "2 lingkaran hitam (● ●) di sisi atas + 1 belah ketupat putih (◇) di sisi bawah"
      ],
      "indeksBenar": 0,
      "explanation": "Transformasi hanya menggandakan jumlah elemen di sisi bawah dari 1 buah menjadi 2 buah sejajar tanpa mengubah bentuk, warna, maupun posisi elemen di sisi atas.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "mudah",
      "question_text": "Diketahui pasangan figur: [Segi enam beraturan (6 sisi) berlatar putih berisi 4 bintang putih (☆)] berubah menjadi [Segi lima beraturan (5 sisi) berlatar hitam berisi 5 bintang putih (☆)]. Dengan aturan yang sama, [Segi lima beraturan (5 sisi) berlatar putih berisi 3 bintang putih (☆)] berubah menjadi...",
      "pilihan": [
        "Segi enam (6 sisi) berlatar hitam berisi 4 bintang putih (☆)",
        "Persegi (4 sisi) berlatar hitam berisi 4 bintang putih (☆)",
        "Persegi (4 sisi) berlatar putih berisi 4 bintang putih (☆)",
        "Persegi (4 sisi) berlatar hitam berisi 2 bintang putih (☆)",
        "Segitiga (3 sisi) berlatar hitam berisi 4 bintang putih (☆)"
      ],
      "indeksBenar": 1,
      "explanation": "Aturan perubahan meliputi tiga hal: (1) jumlah sisi bangun luar berkurang 1 (5 menjadi 4, yaitu persegi), (2) warna latar bangun luar berubah dari putih menjadi hitam, dan (3) jumlah bintang di dalam bertambah 1 (3 menjadi 4 bintang putih).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "mudah",
      "question_text": "Pola pertama menunjukkan [panah menghadap kanan (→) di sudut kiri-atas + ■ hitam di sudut kanan-bawah] berubah melalui pencerminan sumbu vertikal menjadi [panah menghadap kiri (←) di sudut kanan-atas + ■ hitam di sudut kiri-bawah]. Menggunakan aturan pencerminan yang sama, [panah menghadap kanan-atas (↗) di sudut kiri-bawah + ● hitam di sudut kanan-atas] akan menjadi...",
      "pilihan": [
        "Panah menghadap kiri-bawah (↙) di sudut kanan-bawah + ● hitam di sudut kiri-atas",
        "Panah menghadap kanan-bawah (↘) di sudut kiri-atas + ● hitam di sudut kanan-bawah",
        "Panah menghadap kiri-atas (↖) di sudut kanan-bawah + ● hitam di sudut kiri-atas",
        "Panah menghadap kiri-atas (↖) di sudut kiri-bawah + ● hitam di sudut kanan-atas",
        "Panah menghadap kanan-atas (↗) di sudut kanan-bawah + ● hitam di sudut kiri-atas"
      ],
      "indeksBenar": 2,
      "explanation": "Pencerminan terhadap sumbu vertikal membalik posisi kiri dan kanan: sudut kiri-bawah pindah ke kanan-bawah, sudut kanan-atas pindah ke kiri-atas, dan arah panah kanan-atas (↗) berbalik secara horizontal menjadi kiri-atas (↖).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "mudah",
      "question_text": "Amati lima kartu bergambar belah ketupat yang memuat lingkaran dan garis lurus berikut. Manakah kartu yang TIDAK sepola dengan keempat kartu lainnya?\nA: Belah ketupat berisi lingkaran dan 1 garis pendek di pusat yang tidak menyentuh tepi lingkaran\nB: Belah ketupat berisi lingkaran dan 1 garis vertikal yang memotong dua titik keliling lingkaran\nC: Belah ketupat berisi lingkaran dan 1 garis horizontal yang memotong dua titik keliling lingkaran\nD: Belah ketupat berisi lingkaran dan 1 garis diagonal yang memotong dua titik keliling lingkaran\nE: Belah ketupat berisi lingkaran dan 1 tali busur miring yang memotong dua titik keliling lingkaran",
      "pilihan": [
        "Kartu A",
        "Kartu B",
        "Kartu C",
        "Kartu D",
        "Kartu E"
      ],
      "indeksBenar": 0,
      "explanation": "Pada Kartu B, C, D, dan E, garis lurus memotong tepat dua titik pada keliling lingkaran. Hanya Kartu A yang memuat garis pendek di dalam lingkaran tanpa memotong kelilingnya.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "mudah",
      "question_text": "Lima kartu berikut masing-masing memuat susunan simbol bintang hitam (★). Manakah kartu yang polanya BERBEDA sendiri?\nA: Kartu memuat 3 bintang (★) dalam satu kolom vertikal\nB: Kartu memuat 6 bintang (★) dalam susunan 2 kolom sejajar\nC: Kartu memuat 5 bintang (★) dalam susunan tanda silang\nD: Kartu memuat 7 bintang (★) dalam susunan simetris\nE: Kartu memuat 9 bintang (★) dalam susunan matriks 3×3",
      "pilihan": [
        "Kartu A",
        "Kartu B",
        "Kartu C",
        "Kartu D",
        "Kartu E"
      ],
      "indeksBenar": 1,
      "explanation": "Kartu A (3), C (5), D (7), dan E (9) seluruhnya memuat jumlah bintang bernilai ganjil. Hanya Kartu B yang memiliki jumlah bintang bernilai genap (6 bintang).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "mudah",
      "question_text": "Perhatikan lima pasang poligon dan titik hitam (●) di dalamnya berikut. Manakah gambar yang TIDAK mengikuti aturan yang sama?\nA: Segitiga (3 sisi) memuat 2 titik hitam (●)\nB: Persegi (4 sisi) memuat 3 titik hitam (●)\nC: Segi lima (5 sisi) memuat 5 titik hitam (●)\nD: Segi enam (6 sisi) memuat 5 titik hitam (●)\nE: Segi delapan (8 sisi) memuat 7 titik hitam (●)",
      "pilihan": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E"
      ],
      "indeksBenar": 2,
      "explanation": "Pada Gambar A, B, D, dan E, jumlah titik hitam selalu tepat satu lebih sedikit daripada jumlah sisi poligonnya (n - 1). Gambar C menyimpang karena segi lima (5 sisi) justru memuat 5 titik hitam.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Serial Pola)",
      "difficulty": "mudah",
      "question_text": "Perhatikan deret 3 panel kisi simbol 3×4 berikut:\nPanel 1: Baris atas [■ □ □ □], Baris tengah [○ ○ ○ ○], Baris bawah [▲ ▲ ▲ ▲]\nPanel 2: Baris atas [■ ■ □ □], Baris tengah [○ ○ ○ ○], Baris bawah [▲ ▲ ▲ △]\nPanel 3: Baris atas [■ ■ ■ □], Baris tengah [○ ○ ○ ○], Baris bawah [▲ ▲ △ △]\nSusunan simbol pada Panel 4 berikutnya adalah...",
      "pilihan": [
        "Baris atas [■ ■ ■ ■], Baris tengah [○ ○ ○ ○], Baris bawah [▲ △ △ △]",
        "Baris atas [■ ■ ■ ■], Baris tengah [● ○ ○ ○], Baris bawah [▲ △ △ △]",
        "Baris atas [■ ■ ■ □], Baris tengah [○ ○ ○ ○], Baris bawah [▲ △ △ △]",
        "Baris atas [■ ■ ■ ■], Baris tengah [○ ○ ○ ○], Baris bawah [△ △ △ △]",
        "Baris atas [□ ■ ■ ■], Baris tengah [○ ○ ○ ○], Baris bawah [▲ ▲ △ △]"
      ],
      "indeksBenar": 0,
      "explanation": "Pada setiap perpindahan panel: baris atas menambah 1 persegi hitam dari kiri (1 → 2 → 3 → 4 hitam [■ ■ ■ ■]); baris tengah selalu tetap putih semua [○ ○ ○ ○]; dan baris bawah mengurangi 1 segitiga hitam dari kanan (4 → 3 → 2 → 1 hitam [▲ △ △ △]).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Serial Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Serial Pola)",
      "difficulty": "mudah",
      "question_text": "Amati deret 4 panel bangun sepusat berikut:\nPanel 1: Segitiga (3 sisi) berbingkai putih mengelilingi 1 segitiga kecil hitam di tengah.\nPanel 2: Persegi (4 sisi) berbingkai putih mengelilingi 1 persegi kecil putih di tengah.\nPanel 3: Segi lima (5 sisi) berbingkai putih mengelilingi 1 segi lima kecil hitam di tengah.\nPanel 4: Segi enam (6 sisi) berbingkai putih mengelilingi 1 segi enam kecil putih di tengah.\nGambar pada Panel 5 berikutnya adalah...",
      "pilihan": [
        "Segi tujuh (7 sisi) berbingkai putih mengelilingi 1 segi tujuh kecil putih di tengah",
        "Segi tujuh (7 sisi) berbingkai putih mengelilingi 1 segi tujuh kecil hitam di tengah",
        "Segi delapan (8 sisi) berbingkai putih mengelilingi 1 segi delapan kecil hitam di tengah",
        "Segi tujuh (7 sisi) berbingkai hitam mengelilingi 1 segi enam kecil hitam di tengah",
        "Segi enam (6 sisi) berbingkai putih mengelilingi 1 segi tujuh kecil hitam di tengah"
      ],
      "indeksBenar": 1,
      "explanation": "Bentuk bangun luar dan dalam selalu sama dengan jumlah sisi bertambah +1 setiap langkah (3, 4, 5, 6 → 7 sisi), sementara warna bangun kecil di tengah bergantian hitam-putih-hitam-putih-hitam.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Serial Pola)"
    }
  ],
  [
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sedang",
      "question_text": "Pilihlah pasangan kata yang memiliki hubungan setara dengan pasangan kata: HAMA : PESTISIDA",
      "pilihan": [
        "Insektisida : Serangga",
        "Pupuk : Tanaman",
        "Tanaman : Gulma",
        "Gulma : Herbisida",
        "Penyakit : Gejala"
      ],
      "indeksBenar": 3,
      "explanation": "Hubungan HAMA : PESTISIDA adalah organisme pengganggu tanaman beserta zat pembasminya (hama dibasmi menggunakan pestisida). Padanan yang tepat adalah Gulma : Herbisida (gulma atau tumbuhan pengganggu dibasmi menggunakan herbisida). 'Insektisida : Serangga' terbalik urutannya, 'Pupuk : Tanaman' bukan pembasmi, sedangkan opsi lainnya tidak sepadan.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "mudah",
      "question_text": "KOBALT : LOGAM = ... : ...",
      "pilihan": [
        "Batuan : Granit",
        "Marmer : Batuan",
        "Perak : Perhiasan",
        "Kayu : Mebel",
        "Oksigen : Hidrogen"
      ],
      "indeksBenar": 1,
      "explanation": "Hubungan KOBALT : LOGAM adalah jenis khusus terhadap kategori umumnya (hiponim : hipernim), yakni kobalt merupakan salah satu jenis logam. Pasangan yang sepadan adalah Marmer : Batuan (marmer merupakan salah satu jenis batuan). 'Batuan : Granit' terbalik urutannya, 'Perak : Perhiasan' dan 'Kayu : Mebel' menyatakan bahan dan produk, sedangkan 'Oksigen : Hidrogen' setara.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sedang",
      "question_text": "BAROMETER : TEKANAN = ... : ...",
      "pilihan": [
        "Suhu : Termometer",
        "Seismograf : Banjir",
        "Kalorimeter : Massa",
        "Kompas : Jarak",
        "Higrometer : Kelembapan"
      ],
      "indeksBenar": 4,
      "explanation": "Barometer adalah alat ukur untuk mengukur tekanan udara. Pasangan alat ukur dan besaran yang tepat adalah Higrometer : Kelembapan (higrometer digunakan untuk mengukur kelembapan udara). Opsi 'Suhu : Termometer' terbalik urutannya, sedangkan opsi lainnya memasangkan alat dengan besaran yang keliru.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sulit",
      "question_text": "Kata 'pelangi' berhubungan dengan kata 'pembiasan' sebagaimana kata ... berhubungan dengan kata ...",
      "pilihan": [
        "pemuaian : panas",
        "petir : hujan",
        "gema : pemantulan",
        "listrik : konduktor",
        "bayangan : cermin"
      ],
      "indeksBenar": 2,
      "explanation": "Pelangi merupakan fenomena fisis yang terjadi akibat proses pembiasan cahaya. Padanan yang tepat secara searah adalah gema : pemantulan, karena gema merupakan fenomena fisis yang terjadi akibat proses pemantulan bunyi. 'Pemuaian : panas' terbalik arah proses-penyebabnya dan 'bayangan : cermin' memasangkan fenomena dengan bendanya, bukan proses fisiknya.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sulit",
      "question_text": "Sebuah dokumen pengadaan barang dapat dicairkan dananya hanya jika dokumen tersebut ditandatangani pejabat pembuat komitmen dan lolos verifikasi inspektorat. Pernyataan yang ekuivalen (setara) secara logika dengan ketentuan tersebut adalah ...",
      "pilihan": [
        "Jika dokumen tidak ditandatangani pejabat pembuat komitmen dan tetap lolos verifikasi, dananya tetap cair.",
        "Jika dananya tidak dapat dicairkan, pasti dokumen tersebut tidak lolos verifikasi inspektorat.",
        "Jika dokumen pengadaan tidak ditandatangani pejabat pembuat komitmen atau tidak lolos verifikasi inspektorat, dananya tidak dapat dicairkan.",
        "Setiap dokumen yang ditandatangani pejabat pembuat komitmen pasti dananya langsung cair.",
        "Jika dokumen tidak lolos verifikasi inspektorat, dokumen harus tetap dicairkan sebagian."
      ],
      "indeksBenar": 2,
      "explanation": "Bentuk 'P hanya jika Q' berarti implikasi P -> Q. Di sini: Cair -> (TTD dan Verifikasi). Kontraposisi yang ekuivalen adalah ~(TTD dan Verifikasi) -> ~Cair. Dengan hukum De Morgan, ~(TTD dan Verifikasi) menjadi (~TTD atau ~Verifikasi). Jadi, jika tidak ditandatangani atau tidak lolos verifikasi, dananya tidak dapat dicairkan.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "mudah",
      "question_text": "Semua arsip rahasia negara disimpan di brankas khusus berlapis baja. Tidak ada buletin publikasi humas yang disimpan di brankas khusus berlapis baja. Simpulan yang sahih adalah ...",
      "pilihan": [
        "Tidak ada buletin publikasi humas yang merupakan arsip rahasia negara.",
        "Sebagian buletin publikasi humas termasuk arsip rahasia negara.",
        "Semua barang di dalam brankas khusus berlapis baja adalah buletin humas.",
        "Sebagian arsip rahasia negara disimpan bersama buletin publikasi humas.",
        "Buletin publikasi humas disimpan di ruang kepala dinas."
      ],
      "indeksBenar": 0,
      "explanation": "Seluruh arsip rahasia negara berada di dalam himpunan benda di brankas baja, sedangkan himpunan buletin publikasi humas sama sekali terpisah dari brankas baja. Oleh karena itu, kedua himpunan tidak beririsan: tidak ada buletin publikasi humas yang merupakan arsip rahasia negara.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sedang",
      "question_text": "Semua mahasiswa penerima beasiswa prestasi memiliki indeks prestasi kumulatif minimal 3,60. Dodi memiliki indeks prestasi kumulatif 3,82. Simpulan yang paling tepat adalah ...",
      "pilihan": [
        "Dodi pasti merupakan mahasiswa penerima beasiswa prestasi.",
        "Semua mahasiswa yang berindeks prestasi 3,82 menerima beasiswa prestasi.",
        "Dodi tidak memenuhi syarat menerima beasiswa prestasi.",
        "Hanya mahasiswa berindeks prestasi di atas 3,80 yang boleh mendaftar beasiswa.",
        "Dodi belum tentu mahasiswa penerima beasiswa prestasi."
      ],
      "indeksBenar": 4,
      "explanation": "Premis berbentuk implikasi satu arah: Penerima beasiswa -> IPK >= 3,60. Memiliki IPK 3,82 hanya memenuhi syarat perlu (konsekuen), bukan jaminan otomatis bahwa Dodi tergabung sebagai penerima beasiswa (menghindari kesesatan afirmasi konsekuen). Jadi, Dodi belum tentu penerima beasiswa prestasi.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sedang",
      "question_text": "Semua pegawai di bagian kepegawaian menguasai aplikasi pengolah angka. Sebagian pegawai di bagian kepegawaian tidak mengikuti bimbingan teknis kearsipan. Simpulan yang tepat adalah ...",
      "pilihan": [
        "Semua pegawai yang tidak mengikuti bimbingan teknis kearsipan bekerja di bagian kepegawaian.",
        "Sebagian pegawai yang menguasai aplikasi pengolah angka tidak mengikuti bimbingan teknis kearsipan.",
        "Pegawai yang menguasai aplikasi pengolah angka dilarang mengikuti bimbingan teknis kearsipan.",
        "Tidak ada pegawai bagian kepegawaian yang mengikuti bimbingan teknis kearsipan.",
        "Semua peserta bimbingan teknis kearsipan tidak menguasai aplikasi pengolah angka."
      ],
      "indeksBenar": 1,
      "explanation": "Misalkan pegawai bagian kepegawaian = K, penguasai pengolah angka = A, dan peserta bimtek = B. Diketahui K bagian dari A, dan ada anggota K yang bukan anggota B. Karena anggota K tersebut juga merupakan anggota A, maka pasti ada sebagian anggota A yang bukan anggota B.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sedang",
      "question_text": "Empat pelamar kerja—Nadia, Fajar, Putra, dan Siska—mengikuti wawancara berurutan satu per satu sebelum waktu istirahat pukul 12.00. Fajar memulai wawancara 45 menit sebelum waktu istirahat. Putra memulai wawancara tepat 90 menit sebelum Fajar. Siska memulai wawancara 60 menit setelah Putra memulai, sedangkan Nadia memulai wawancara 75 menit sebelum Siska memulai. Apabila waktu wawancara tiap peserta berakhir tepat saat peserta berikutnya masuk atau saat jam istirahat tiba, siapakah yang menjalani wawancara paling lama dan paling singkat secara berturut-turut?",
      "pilihan": [
        "Putra dan Nadia",
        "Fajar dan Nadia",
        "Putra dan Siska",
        "Fajar dan Siska",
        "Siska dan Nadia"
      ],
      "indeksBenar": 0,
      "explanation": "Waktu mulai masing-masing: Fajar = 12.00 - 45 menit = 11.15; Putra = 11.15 - 90 menit = 09.45; Siska = 09.45 + 60 menit = 10.45; Nadia = 10.45 - 75 menit = 09.30. Durasi wawancara: Nadia (09.30–09.45 = 15 menit), Putra (09.45–10.45 = 60 menit), Siska (10.45–11.15 = 30 menit), dan Fajar (11.15–12.00 = 45 menit). Jadi, paling lama Putra dan paling singkat Nadia.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "mudah",
      "question_text": "Lima peserta seleksi pasukan pengibar bendera (Rina, Santi, Tika, Umi, dan Vina) memiliki tinggi badan yang berbeda-beda. Santi lebih tinggi daripada Tika, tetapi lebih pendek daripada Rina. Tika lebih tinggi daripada Vina, tetapi lebih pendek daripada Umi. Diketahui pula bahwa Umi tidak lebih tinggi daripada Santi. Apabila Tika dinyatakan gugur karena belum memenuhi batas tinggi badan minimal, siapakah peserta yang lolos?",
      "pilihan": [
        "Rina dan Santi saja",
        "Rina, Santi, Umi, dan Vina",
        "Rina, Santi, dan Umi",
        "Santi, Umi, dan Vina",
        "Rina, Umi, dan Vina"
      ],
      "indeksBenar": 2,
      "explanation": "Dari informasi soal diperoleh hubungan: Rina > Santi > Tika dan Umi > Tika > Vina, serta Umi < Santi (karena tinggi badan berbeda-beda dan Umi tidak lebih tinggi daripada Santi). Jadi urutan dari tertinggi ke terpendek adalah Rina – Santi – Umi – Tika – Vina. Jika Tika tidak memenuhi batas tinggi minimal, maka peserta yang lebih pendek darinya (Vina) juga gugur, sehingga yang lolos adalah Rina, Santi, dan Umi.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sedang",
      "question_text": "Arman, Bintang, Candra, dan Dika berlomba lari menuju garis finis yang gerbangnya ditutup tepat pukul 08.00. Candra berhasil menyalip Arman yang sebelumnya berada di posisi depan. Dika mampu menyalip Candra, tetapi ia tidak pernah mampu menyalip Bintang. Gerbang finis ditutup tepat sesaat setelah Dika melintasinya. Siapakah peserta yang gagal memasuki garis finis sebelum gerbang ditutup?",
      "pilihan": [
        "Candra dan Arman",
        "Bintang dan Dika",
        "Arman saja",
        "Candra saja",
        "Dika, Candra, dan Arman"
      ],
      "indeksBenar": 0,
      "explanation": "Urutan pelari dari yang paling depan hingga paling belakang adalah Bintang – Dika – Candra – Arman. Karena gerbang ditutup sesaat setelah Dika melewatinya, maka peserta yang berada di belakang Dika, yaitu Candra dan Arman, terlambat dan gagal memasuki garis finis.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sulit",
      "question_text": "Tim teknologi informasi mengevaluasi empat modul layanan (P, Q, R, dan S) berdasarkan waktu pemrosesan dan stabilitas sistem. Waktu pemrosesan modul P lebih cepat daripada modul Q. Waktu pemrosesan modul R lebih lambat daripada P, tetapi lebih cepat daripada Q. Modul S memiliki waktu pemrosesan paling cepat di antara keempatnya. Untuk aspek stabilitas, modul P lebih stabil daripada Q namun di bawah R, sedangkan modul S lebih stabil daripada Q namun di bawah P. Jika dipilih modul yang menempati peringkat kedua terbaik baik pada kecepatan maupun stabilitas, modul manakah yang terpilih?",
      "pilihan": [
        "Modul Q",
        "Modul R",
        "Modul S",
        "Modul P",
        "Modul P dan Modul R"
      ],
      "indeksBenar": 3,
      "explanation": "Urutan kecepatan pemrosesan (tercepat ke terlambat): S – P – R – Q (peringkat kedua = P). Urutan stabilitas sistem (terbaik ke terendah): R – P – S – Q (peringkat kedua = P). Dengan demikian, modul yang menempati peringkat kedua pada kedua kriteria tersebut adalah Modul P.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sedang",
      "question_text": "Hasil dari (348 × 27) + (348 × 73) - (148 × 100) adalah ...",
      "pilihan": [
        "14.800",
        "18.000",
        "22.000",
        "20.000",
        "24.800"
      ],
      "indeksBenar": 3,
      "explanation": "Gunakan sifat distributif perkalian terhadap penjumlahan: (348 × 27) + (348 × 73) = 348 × (27 + 73) = 348 × 100. Selanjutnya: (348 × 100) - (148 × 100) = (348 - 148) × 100 = 200 × 100 = 20.000.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sulit",
      "question_text": "Diketahui persamaan (185 + 299) × p = (537 - 185) × 22. Berapakah nilai p yang memenuhi persamaan tersebut?",
      "pilihan": [
        "16",
        "14",
        "18",
        "20",
        "22"
      ],
      "indeksBenar": 0,
      "explanation": "Hitung ruas kiri dan kanan secara cepat: 185 + 299 = 484 = 22 × 22, dan 537 - 185 = 352. Persamaan menjadi (22 × 22) × p = 352 × 22. Bagi kedua ruas dengan 22, sehingga 22p = 352. Diperoleh p = 352 / 22 = 16.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "mudah",
      "question_text": "Hasil dari 37,5% dari 640 ditambah 12,5% dari 320 adalah ...",
      "pilihan": [
        "240",
        "260",
        "300",
        "280",
        "320"
      ],
      "indeksBenar": 3,
      "explanation": "Konversikan persentase istimewa ke pecahan sederhana: 37,5% = 3/8 dan 12,5% = 1/8. Hitung masing-masing: (3/8 × 640) + (1/8 × 320) = (3 × 80) + 40 = 240 + 40 = 280.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sedang",
      "question_text": "Nilai dari √2.025 + √1.296 - 3^3 adalah ...",
      "pilihan": [
        "45",
        "54",
        "48",
        "52",
        "64"
      ],
      "indeksBenar": 1,
      "explanation": "Tentukan nilai masing-masing akar dan pangkat: √2.025 = 45 (karena 4 × 5 = 20 dan akhiran 5), √1.296 = 36 (karena 30^2 = 900, 40^2 = 1.600, dan berakhiran 6), serta 3^3 = 27. Maka 45 + 36 - 27 = 54.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sedang",
      "question_text": "Tentukan angka lanjutan dari deret: 3, 4, 7, 11, 18, 29, 47, ...",
      "pilihan": [
        "65",
        "72",
        "76",
        "78",
        "84"
      ],
      "indeksBenar": 2,
      "explanation": "Deret mengikuti pola Fibonacci, yaitu setiap suku diperoleh dari penjumlahan dua suku tepat di depannya: 3 + 4 = 7, 4 + 7 = 11, 7 + 11 = 18, 11 + 18 = 29, 18 + 29 = 47. Maka suku berikutnya adalah 29 + 47 = 76.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sedang",
      "question_text": "Angka yang tepat untuk melengkapi deret 2, 5, 6, 11, 18, 17, 54, 23, ... adalah ...",
      "pilihan": [
        "29",
        "108",
        "144",
        "168",
        "162"
      ],
      "indeksBenar": 4,
      "explanation": "Deret memiliki dua larik berselang. Larik suku ganjil dikalikan 3: 2, 6, 18, 54. Larik suku genap ditambah 6: 5, 11, 17, 23. Suku ke-9 termasuk larik ganjil, yaitu 54 × 3 = 162.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sulit",
      "question_text": "Nilai yang tepat untuk menggantikan tanda titik-titik pada barisan 3, 7, 16, 35, ..., 153 adalah ...",
      "pilihan": [
        "68",
        "72",
        "74",
        "75",
        "78"
      ],
      "indeksBenar": 2,
      "explanation": "Pola dari suku ke suku berikutnya adalah dikalikan 2 lalu ditambah bilangan asli berurutan (+1, +2, +3, +4, +5): 3×2+1 = 7; 7×2+2 = 16; 16×2+3 = 35; 35×2+4 = 74. Verifikasi ke suku terakhir: 74×2+5 = 153 (cocok).",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "mudah",
      "question_text": "Tentukan angka selanjutnya pada deret: 8, 11, 17, 20, 26, 29, 35, ...",
      "pilihan": [
        "38",
        "37",
        "39",
        "41",
        "44"
      ],
      "indeksBenar": 0,
      "explanation": "Pola penambahan berselang-seling tetap yaitu +3 dan +6: 8 (+3) -> 11 (+6) -> 17 (+3) -> 20 (+6) -> 26 (+3) -> 29 (+6) -> 35. Maka suku berikutnya adalah 35 + 3 = 38.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "mudah",
      "question_text": "Besar ketiga sudut dalam suatu segitiga berturut-turut adalah 2x°, 3x°, dan 4x°. Jika P = x dan Q = 25, maka hubungan yang tepat antara P dan Q adalah...",
      "pilihan": [
        "P > Q",
        "P = Q",
        "2P = Q",
        "P < Q",
        "Hubungan P dan Q tidak dapat ditentukan"
      ],
      "indeksBenar": 3,
      "explanation": "Jumlah sudut dalam segitiga adalah 180°, sehingga 2x + 3x + 4x = 180 → 9x = 180 → x = 20. Maka P = 20 dan Q = 25, sehingga P < Q.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "sedang",
      "question_text": "Diketahui P adalah luas belah ketupat yang memiliki panjang diagonal 24 cm dan 18 cm, sedangkan Q adalah luas segitiga siku-siku dengan panjang kedua sisi penyiku 16 cm dan 27 cm. Pernyataan yang benar adalah...",
      "pilihan": [
        "P > Q",
        "P < Q",
        "P = 2Q",
        "Hubungan P dan Q tidak dapat ditentukan",
        "P = Q"
      ],
      "indeksBenar": 4,
      "explanation": "Luas belah ketupat P = ½ × d₁ × d₂ = ½ × 24 × 18 = 216 cm². Luas segitiga siku-siku Q = ½ × alas × tinggi = ½ × 16 × 27 = 216 cm². Jadi nilai P = Q.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "sedang",
      "question_text": "Jika P adalah keliling persegi yang memiliki luas 196 cm² dan Q adalah keliling lingkaran berdiameter 14 cm (gunakan π = 22/7), maka hubungan yang tepat antara P dan Q adalah...",
      "pilihan": [
        "P < Q",
        "P = Q",
        "P > Q",
        "P = 2Q",
        "Hubungan P dan Q tidak dapat ditentukan"
      ],
      "indeksBenar": 2,
      "explanation": "Sisi persegi s = √196 = 14 cm, sehingga kelilingnya P = 4 × 14 = 56 cm. Keliling lingkaran Q = π × d = (22/7) × 14 = 44 cm. Jelas bahwa 56 > 44, sehingga P > Q.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "mudah",
      "question_text": "Seorang pegawai tata usaha membuat bingkai peta wilayah berbentuk persegi panjang dengan perbandingan panjang dan lebar sebesar 7 : 4. Jika panjang sisi yang lebih pendek berukuran 48 cm, berapa cm total panjang bingkai kayu yang diperlukan untuk mengelilingi seluruh tepi peta?",
      "pilihan": [
        "132 cm",
        "224 cm",
        "248 cm",
        "256 cm",
        "264 cm"
      ],
      "indeksBenar": 4,
      "explanation": "Panjang peta = (7/4) × 48 = 84 cm. Total kayu untuk tepi bingkai sama dengan keliling persegi panjang = 2 × (84 + 48) = 2 × 132 = 264 cm.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "mudah",
      "question_text": "Sebuah blok peraga berbentuk kubus berusuk 12 cm dipotong tepat menjadi 8 kubus kecil yang sama besar. Berapa cm jumlah panjang seluruh rusuk dari kedelapan kubus kecil hasil pemotongan tersebut?",
      "pilihan": [
        "576 cm",
        "288 cm",
        "384 cm",
        "480 cm",
        "640 cm"
      ],
      "indeksBenar": 0,
      "explanation": "Pembelahan menjadi 8 kubus kecil membagi setiap rusuk menjadi 2 bagian sama panjang, sehingga rusuk tiap kubus kecil = 12 ÷ 2 = 6 cm. Setiap kubus memiliki 12 rusuk, maka total panjang rusuk untuk 8 kubus kecil = 8 × 12 × 6 = 576 cm.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sedang",
      "question_text": "Pemasukan harian gerai koperasi kantor dari hari Senin hingga Jumat berturut-turut tercatat Rp145.000, Rp180.000, Rp135.000, Rp160.000, dan Rp150.000. Berapakah pemasukan yang harus dicapai pada hari Sabtu agar rata-rata pemasukan harian selama 6 hari tersebut menjadi Rp165.000?",
      "pilihan": [
        "Rp195.000",
        "Rp220.000",
        "Rp210.000",
        "Rp235.000",
        "Rp250.000"
      ],
      "indeksBenar": 1,
      "explanation": "Total pemasukan 5 hari = 145.000 + 180.000 + 135.000 + 160.000 + 150.000 = Rp770.000. Target total selama 6 hari = 6 × Rp165.000 = Rp990.000. Kekurangan yang harus dipenuhi pada hari Sabtu = Rp990.000 - Rp770.000 = Rp220.000.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sedang",
      "question_text": "Proyek renovasi gedung arsip direncanakan selesai dalam 60 hari oleh 18 orang pekerja. Setelah pekerjaan berlangsung 20 hari, proyek terpaksa dihentikan selama 10 hari karena keterlambatan pasokan bahan. Berapa orang pekerja tambahan yang dibutuhkan agar proyek tetap selesai tepat pada waktunya?",
      "pilihan": [
        "4 orang",
        "5 orang",
        "6 orang",
        "8 orang",
        "9 orang"
      ],
      "indeksBenar": 2,
      "explanation": "Total beban kerja = 18 × 60 = 1.080 orang-hari. Pekerjaan yang telah selesai selama 20 hari = 18 × 20 = 360 orang-hari, sehingga tersisa 1.080 - 360 = 720 orang-hari. Sisa hari efektif = 60 - 20 - 10 = 30 hari. Pekerja yang diperlukan = 720 ÷ 30 = 24 orang, sehingga tambahannya 24 - 18 = 6 orang.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "mudah",
      "question_text": "Suatu gambar berisi [segitiga mengarah ke atas (▲) di kuadran kiri-atas + panah mengarah ke kanan-atas (↗) di kuadran kanan-atas + 1 garis mendatar di tepi bawah] berubah melalui pencerminan sumbu horizontal menjadi [segitiga mengarah ke bawah (▼) di kuadran kiri-bawah + panah mengarah ke kanan-bawah (↘) di kuadran kanan-bawah + 1 garis mendatar di tepi atas]. Dengan pencerminan yang sama, [segitiga putih mengarah ke atas (△) di kuadran kanan-atas + panah mengarah ke kiri-atas (↖) di kuadran kiri-atas + 2 titik hitam (● ●) di tepi bawah] berubah menjadi...",
      "pilihan": [
        "Segitiga putih mengarah ke bawah (▽) di kiri-bawah + panah (↙) di kanan-bawah + 2 titik (● ●) di tepi atas",
        "Segitiga putih mengarah ke atas (△) di kanan-bawah + panah (↖) di kiri-bawah + 2 titik (● ●) di tepi atas",
        "Segitiga putih mengarah ke bawah (▽) di kanan-bawah + panah (↗) di kiri-bawah + 2 titik (● ●) di tepi atas",
        "Segitiga putih mengarah ke bawah (▽) di kuadran kanan-bawah + panah mengarah ke kiri-bawah (↙) di kuadran kiri-bawah + 2 titik hitam (● ●) di tepi atas",
        "Segitiga hitam (▼) di kuadran kanan-bawah + panah (↙) di kiri-bawah + 2 titik (● ●) di tepi bawah"
      ],
      "indeksBenar": 3,
      "explanation": "Pencerminan terhadap sumbu horizontal menukar posisi atas dan bawah tanpa menukar kiri dan kanan: kuadran kanan-atas pindah ke kanan-bawah dan △ berbalik menjadi ▽; kuadran kiri-atas pindah ke kiri-bawah dan panah ↖ berbalik vertikal menjadi ↙; serta 2 titik di tepi bawah pindah ke tepi atas.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "sedang",
      "question_text": "Dalam sebuah bingkai persegi, posisi [■ hitam di sudut kiri-atas + panah menunjuk ke atas (↑) di tengah sisi kanan] diputar 90° searah jarum jam menjadi [■ hitam di sudut kanan-atas + panah menunjuk ke kanan (→) di tengah sisi bawah]. Jika pola rotasi yang sama diterapkan pada [◆ hitam di sudut kanan-atas + panah menunjuk ke kiri (←) di tengah sisi bawah], hasilnya adalah...",
      "pilihan": [
        "◆ hitam di sudut kiri-bawah + panah menunjuk ke atas (↑) di tengah sisi kanan",
        "◆ hitam di sudut kanan-bawah + panah menunjuk ke bawah (↓) di tengah sisi kiri",
        "◆ hitam di sudut kiri-atas + panah menunjuk ke atas (↑) di tengah sisi kiri",
        "◆ hitam di sudut kanan-bawah + panah menunjuk ke kanan (→) di tengah sisi atas",
        "◆ hitam di sudut kanan-bawah + panah menunjuk ke atas (↑) di tengah sisi kiri"
      ],
      "indeksBenar": 4,
      "explanation": "Rotasi 90° searah jarum jam menggeser sudut kanan-atas menjadi kanan-bawah (posisi ◆) dan menggeser tengah sisi bawah menjadi tengah sisi kiri. Secara bersamaan, arah panah ← berputar 90° searah jarum jam menjadi ↑.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "sedang",
      "question_text": "Sebuah kompas figuratif memperlihatkan [panah di pusat menunjuk ke Utara (↑) + ikon ★ di arah Timur (kanan)] berubah menjadi [panah di pusat menunjuk ke Timur Laut (↗) + ikon ★ di arah Tenggara (kanan-bawah)]. Mengikuti pergeseran sudut yang sama, [panah di pusat menunjuk ke Barat (←) + ikon ● di arah Selatan (bawah)] berubah menjadi...",
      "pilihan": [
        "Panah di pusat menunjuk ke Barat Laut (↖) + ikon ● di arah Barat Daya (kiri-bawah)",
        "Panah di pusat menunjuk ke Barat Daya (↙) + ikon ● di arah Tenggara (kanan-bawah)",
        "Panah di pusat menunjuk ke Barat Laut (↖) + ikon ● di arah Timur Laut (kanan-atas)",
        "Panah di pusat menunjuk ke Utara (↑) + ikon ● di arah Barat (kiri)",
        "Panah di pusat menunjuk ke Tenggara (↘) + ikon ● di arah Barat Daya (kiri-bawah)"
      ],
      "indeksBenar": 0,
      "explanation": "Seluruh elemen berputar 45° searah jarum jam (Utara → Timur Laut, Timur → Tenggara). Oleh karena itu, arah Barat (←) berputar 45° searah jarum jam menjadi Barat Laut (↖), dan posisi Selatan (bawah) berpindah menjadi Barat Daya (kiri-bawah).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "mudah",
      "question_text": "Lima ikon huruf kapital berdesain garis lurus geometris berikut diputar sebesar 180° di bidang datar. Empat huruf menghasilkan bentuk yang sama persis dengan kondisi awalnya, sedangkan satu huruf berubah bentuk. Manakah ikon huruf yang berbeda?\nA: Huruf kapital H\nB: Huruf kapital I\nC: Huruf kapital N\nD: Huruf kapital M\nE: Huruf kapital Z",
      "pilihan": [
        "Ikon A",
        "Ikon B",
        "Ikon C",
        "Ikon D",
        "Ikon E"
      ],
      "indeksBenar": 3,
      "explanation": "Huruf kapital H, I, N, dan Z memiliki simetri putar setengah putaran (180°), sehingga bentuknya tetap sama setelah diputar 180°. Sebaliknya, huruf M apabila diputar 180° akan terbalik menyerupai huruf W.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "mudah",
      "question_text": "Amati lima komposisi bangun datar yang disertai ikon persegi hitam (■) dan lingkaran putih (○) berikut. Manakah komposisi yang BERBEDA sendiri?\nA: Segitiga dengan ■ berada di dalam dan ○ berada di luar sudut atas\nB: Persegi dengan ■ berada di dalam dan ○ berada di luar sudut kanan-atas\nC: Segi lima dengan ■ berada di dalam dan ○ berada di luar sisi kanan\nD: Lingkaran dengan ■ berada di dalam dan ○ berada di luar tepi kiri\nE: Segi enam dengan ■ dan ○ keduanya berada di dalam",
      "pilihan": [
        "Komposisi A",
        "Komposisi B",
        "Komposisi C",
        "Komposisi D",
        "Komposisi E"
      ],
      "indeksBenar": 4,
      "explanation": "Pada Komposisi A, B, C, dan D, satu ikon (■) berada di dalam bangun utama dan satu ikon lainnya (○) berada di luar. Hanya Komposisi E yang menempatkan kedua ikon sekaligus di dalam bangun utama.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "sedang",
      "question_text": "Lima gambar tiang bendera asimetris diamati pada bidang datar. Empat gambar merupakan hasil rotasi 2D satu sama lain, sedangkan satu gambar merupakan hasil pencerminan. Manakah gambar yang berbeda?\nA: Tiang vertikal berpangkal di bawah dan berujung di atas, dengan bendera menempel di sisi kiri ujung atas\nB: Tiang vertikal berpangkal di bawah dan berujung di atas, dengan bendera menempel di sisi kanan ujung atas\nC: Tiang mendatar berpangkal di kiri dan berujung di kanan, dengan bendera menempel di sisi bawah ujung kanan\nD: Tiang vertikal berpangkal di atas dan berujung di bawah, dengan bendera menempel di sisi kiri ujung bawah\nE: Tiang mendatar berpangkal di kanan dan berujung di kiri, dengan bendera menempel di sisi atas ujung kiri",
      "pilihan": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E"
      ],
      "indeksBenar": 0,
      "explanation": "Pada Gambar B (rotasi 0°), C (rotasi 90° searah jarum jam), D (180°), dan E (270° searah jarum jam), bendera selalu menempel pada sisi searah jarum jam dari ujung tiangnya. Gambar A menempel di sisi kiri ujung atas (berlawanan arah), sehingga merupakan hasil pencerminan.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Serial Pola)",
      "difficulty": "mudah",
      "question_text": "Perhatikan rangkaian 4 panel berurutan berikut:\nPanel 1: Panah Utara (↑), titik hitam (●) di sisi atas, dan 1 garis tegak (|).\nPanel 2: Panah Barat Laut (↖), titik hitam (●) di sisi bawah, dan 2 garis tegak (||).\nPanel 3: Panah Barat (←), titik hitam (●) di sisi atas, dan 3 garis tegak (|||).\nPanel 4: Panah Barat Daya (↙), titik hitam (●) di sisi bawah, dan 4 garis tegak (||||).\nKomposisi Panel 5 berikutnya adalah...",
      "pilihan": [
        "Panah Selatan (↓), titik hitam (●) di sisi bawah, dan 5 garis tegak (|||||)",
        "Panah Tenggara (↘), titik hitam (●) di sisi atas, dan 5 garis tegak (|||||)",
        "Panah Selatan (↓), titik hitam (●) di sisi atas, dan 5 garis tegak (|||||)",
        "Panah Selatan (↓), titik hitam (●) di sisi atas, dan 4 garis tegak (||||)",
        "Panah Utara (↑), titik hitam (●) di sisi atas, dan 5 garis tegak (|||||)"
      ],
      "indeksBenar": 2,
      "explanation": "Terdapat tiga pola konsisten: (1) arah panah berputar 45° berlawanan arah jarum jam (↑ → ↖ → ← → ↙ → ↓ Selatan), (2) posisi titik ● bergantian atas-bawah-atas-bawah-atas, dan (3) jumlah garis tegak bertambah 1 tiap panel (menjadi 5 garis tegak).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Serial Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Serial Pola)",
      "difficulty": "sedang",
      "question_text": "Sebuah segi enam beraturan memiliki 6 titik sudut berurutan searah jarum jam: Sudut 1 (atas), 2 (kanan-atas), 3 (kanan-bawah), 4 (bawah), 5 (kiri-bawah), dan 6 (kiri-atas). Amati perpindahan titik hitam (●) dan lingkaran putih (○) berikut:\nPanel 1: ● di Sudut 1, ○ di Sudut 6\nPanel 2: ● di Sudut 2, ○ di Sudut 5\nPanel 3: ● di Sudut 4, ○ di Sudut 4\nPanel 4: ● di Sudut 1, ○ di Sudut 3\nDi manakah posisi ● dan ○ pada Panel 5?",
      "pilihan": [
        "● di Sudut 4 (bawah), ○ di Sudut 2 (kanan-atas)",
        "● di Sudut 5 (kiri-bawah), ○ di Sudut 1 (atas)",
        "● di Sudut 6 (kiri-atas), ○ di Sudut 2 (kanan-atas)",
        "● di Sudut 5 (kiri-bawah), ○ di Sudut 2 (kanan-atas)",
        "● di Sudut 3 (kanan-bawah), ○ di Sudut 2 (kanan-atas)"
      ],
      "indeksBenar": 3,
      "explanation": "Titik ● bergerak searah jarum jam dengan besar langkah bertambah 1 tiap panel (+1, +2, +3, +4): dari 1 → 2 (+1) → 4 (+2) → 1 (+3, karena 4 + 3 = 7 ≡ 1 pada segi enam) → 5 (+4). Sementara ○ bergerak berlawanan arah jarum jam secara tetap sebesar -1 tiap panel: 6 → 5 → 4 → 3 → 2.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Serial Pola)"
    }
  ],
  [
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sedang",
      "question_text": "DERMAGA : KAPAL = ... : ...",
      "pilihan": [
        "Bandara : Pesawat",
        "Pesawat : Bandara",
        "Garasi : Jalan",
        "Nakhoda : Kapal",
        "Pelabuhan : Laut"
      ],
      "indeksBenar": 0,
      "explanation": "Dermaga adalah tempat bersandar sekaligus menaikkan dan menurunkan penumpang atau muatan kapal. Pasangan yang paling sepadan adalah Bandara : Pesawat (bandar udara adalah tempat pesawat mendarat, bersandar di anjungan, serta menaikkan dan menurunkan penumpang).",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sulit",
      "question_text": "BISIK : TERIAK = ... : ...",
      "pilihan": [
        "Tidur : Bangun",
        "Lari : Lelah",
        "Dengar : Suara",
        "Jalan : Lari",
        "Cepat : Lambat"
      ],
      "indeksBenar": 3,
      "explanation": "Hubungan BISIK : TERIAK adalah aktivitas sejenis dalam bentuk kata kerja dengan peningkatan intensitas (berbicara pelan menuju berbicara sangat keras). Padanan yang tepat adalah Jalan : Lari (aktivitas berpindah tempat dengan kaki dari intensitas pelan menuju cepat). 'Tidur : Bangun' dan 'Cepat : Lambat' merupakan antonim, bukan gradasi intensitas aktivitas.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "mudah",
      "question_text": "HEKTARE : LUAS = ... : ...",
      "pilihan": [
        "Panjang : Meter",
        "Kilogram : Berat jenis",
        "Detik : Kecepatan",
        "Suhu : Kelvin",
        "Liter : Volume"
      ],
      "indeksBenar": 4,
      "explanation": "Hektare adalah satuan ukuran untuk menyatakan luas, sedangkan Liter adalah satuan ukuran untuk menyatakan volume (isi). Opsi 'Panjang : Meter' dan 'Suhu : Kelvin' arahnya terbalik, sedangkan 'Kilogram : Berat jenis' dan 'Detik : Kecepatan' memasangkan satuan dengan besaran yang salah.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sedang",
      "question_text": "ATOM : MOLEKUL = ... : ...",
      "pilihan": [
        "Kalimat : Kata",
        "Buku : Perpustakaan",
        "Kata : Kalimat",
        "Halaman : Sampul",
        "Angka : Matematika"
      ],
      "indeksBenar": 2,
      "explanation": "Atom merupakan satuan penyusun dasar yang bergabung membentuk molekul; demikian pula kata merupakan satuan bahasa yang bergabung membentuk kalimat. Opsi 'Kalimat : Kata' memiliki arah terbalik, sedangkan opsi lainnya tidak menyatakan relasi unsur penyusun langsung.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sulit",
      "question_text": "Jika rapat pimpinan dipimpin oleh kepala badan, notulensi disusun oleh sekretaris utama. Jika rapat pimpinan dipimpin oleh wakil kepala badan, notulensi disusun oleh kepala bagian tata usaha. Pada hari ini, rapat pimpinan dipimpin oleh kepala badan atau wakil kepala badan. Simpulan yang sahih adalah ...",
      "pilihan": [
        "Sekretaris utama dan kepala bagian tata usaha menyusun notulensi bersama-sama setiap rapat.",
        "Kepala badan tidak pernah hadir bersamaan dengan wakil kepala badan.",
        "Notulensi pasti hanya disusun oleh sekretaris utama karena jabatan kepala badan lebih tinggi.",
        "Notulensi hari ini disusun oleh sekretaris utama atau kepala bagian tata usaha.",
        "Jika sekretaris utama tidak hadir, rapat pimpinan otomatis dibatalkan."
      ],
      "indeksBenar": 3,
      "explanation": "Pola ini menggunakan aturan Dilema Konstruktif: (p -> q) dan (r -> s), ditambah premis (p atau r), maka simpulannya pasti (q atau s). Karena pemimpin rapat salah satu dari kepala badan atau wakil kepala badan, penyusun notulensi pasti sekretaris utama atau kepala bagian tata usaha.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sedang",
      "question_text": "Jika jaringan pengaduan daring mengalami gangguan, warga dapat menyampaikan laporan langsung melalui loket terpadu. Saat ini, warga tidak dapat menyampaikan laporan langsung melalui loket terpadu. Simpulan yang tepat adalah ...",
      "pilihan": [
        "Loket terpadu selalu tutup setiap jaringan daring beroperasi normal.",
        "Saat ini jaringan pengaduan daring sedang mengalami gangguan berat.",
        "Saat ini jaringan pengaduan daring tidak mengalami gangguan.",
        "Warga tidak memiliki cara lain untuk menyampaikan laporan pengaduan.",
        "Petugas loket terpadu sedang melakukan pemeliharaan jaringan daring."
      ],
      "indeksBenar": 2,
      "explanation": "Bentuk pernyataan pertama adalah implikasi: Gangguan -> Bisa melalui loket terpadu. Faktanya, warga tidak dapat melalui loket terpadu (~konsekuen). Berdasarkan Modus Tollens, anteseden bernilai salah, sehingga jaringan pengaduan daring saat ini tidak mengalami gangguan.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "mudah",
      "question_text": "Seluruh pegawai tetap di kantor perwakilan memperoleh fasilitas tunjangan kesehatan keluarga. Seluruh analis kebijakan di kantor perwakilan berstatus sebagai pegawai tetap. Simpulan yang paling tepat adalah ...",
      "pilihan": [
        "Hanya analis kebijakan yang berstatus pegawai tetap di kantor perwakilan.",
        "Semua penerima tunjangan kesehatan keluarga di kantor perwakilan adalah analis kebijakan.",
        "Seluruh analis kebijakan di kantor perwakilan memperoleh fasilitas tunjangan kesehatan keluarga.",
        "Sebagian analis kebijakan di kantor perwakilan tidak memperoleh tunjangan kesehatan keluarga.",
        "Pegawai honorer di kantor perwakilan juga menjabat sebagai analis kebijakan."
      ],
      "indeksBenar": 2,
      "explanation": "Dengan silogisme kategorik berantai: Semua Analis Kebijakan adalah Pegawai Tetap, dan Semua Pegawai Tetap memperoleh Tunjangan Kesehatan Keluarga, maka seluruh analis kebijakan pasti memperoleh fasilitas tunjangan kesehatan keluarga.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sulit",
      "question_text": "Semua peserta yang lulus seleksi administrasi berhak mengikuti ujian kompetensi dasar. Sebagian pelamar dari jalur umum tidak berhak mengikuti ujian kompetensi dasar. Simpulan yang paling tepat adalah ...",
      "pilihan": [
        "Semua pelamar dari jalur umum tidak lulus seleksi administrasi.",
        "Sebagian peserta yang tidak lulus seleksi administrasi tetap boleh mengikuti ujian.",
        "Semua peserta ujian kompetensi dasar berasal dari jalur khusus.",
        "Pelamar dari jalur umum yang lulus seleksi administrasi jumlahnya lebih sedikit.",
        "Sebagian pelamar dari jalur umum tidak lulus seleksi administrasi."
      ],
      "indeksBenar": 4,
      "explanation": "Himpunan peserta yang lulus seleksi administrasi (L) termuat seluruhnya di dalam himpunan yang berhak mengikuti ujian kompetensi dasar (U). Karena ada sebagian pelamar jalur umum yang tidak termasuk dalam U, maka mereka pasti tidak termasuk pula dalam L (tidak lulus seleksi administrasi).",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sulit",
      "question_text": "Sebuah proyek digitalisasi terdiri atas delapan tahap (A, B, C, D, E, F, G, dan H) yang dikerjakan satu tahap setiap pekan selama 8 pekan berurutan tanpa pengulangan, dengan ketentuan: H selalu dikerjakan pada pekan ke-1; B harus dikerjakan segera setelah A; C harus dikerjakan sebelum B; D dan G harus dipisahkan tepat oleh dua pekan di antara keduanya. Apabila tahap D dikerjakan pada pekan ke-4, pada pekan ke berapakah tahap A harus dikerjakan?",
      "pilihan": [
        "Pekan ke-2",
        "Pekan ke-3",
        "Pekan ke-6",
        "Pekan ke-7",
        "Pekan ke-5"
      ],
      "indeksBenar": 4,
      "explanation": "Diketahui Pekan 1 = H dan Pekan 4 = D. Karena D dan G dipisahkan tepat 2 pekan di antaranya, G hanya mungkin di Pekan 1 atau Pekan 7; karena Pekan 1 sudah ditempati H, maka Pekan 7 = G. Pasangan berurutan (A, B) hanya memiliki dua peluang tempat berurutan yang tersisa, yakni (2, 3) atau (5, 6). Jika (A, B) di (2, 3), syarat 'C sebelum B' tidak dapat terpenuhi karena pekan ke-1 sudah diisi H dan pekan ke-2 sudah diisi A. Maka (A, B) wajib menempati pekan (5, 6), sehingga A dikerjakan pada pekan ke-5.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sedang",
      "question_text": "Enam warga (Andi, Budi, Cici, Dani, Eka, dan Feri) mengantre di loket pelayanan kependudukan pada posisi 1 (terdepan) hingga posisi 6 (paling belakang). Andi berdiri di posisi ke-1. Cici berdiri tepat dua posisi di belakang warga pada posisi ke-1. Feri berdiri tepat di belakang Budi. Budi berdiri dua posisi setelah Cici. Dani tidak berdiri di posisi ke-2. Apabila Feri bertukar posisi dengan warga yang berada tiga posisi di depannya, siapakah yang berada di posisi paling belakang sekarang?",
      "pilihan": [
        "Feri",
        "Cici",
        "Budi",
        "Dani",
        "Eka"
      ],
      "indeksBenar": 1,
      "explanation": "Susunan awal: posisi 1 = Andi, posisi 3 = Cici, posisi 5 = Budi, posisi 6 = Feri. Karena Dani tidak di posisi 2, maka posisi 4 = Dani dan posisi 2 = Eka. Urutan awal: Andi – Eka – Cici – Dani – Budi – Feri. Tiga posisi di depan Feri (posisi 6) adalah posisi 3 (Cici). Setelah bertukar, Cici menempati posisi ke-6 (paling belakang).",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "mudah",
      "question_text": "Lima pos pemantau (P1, P2, P3, P4, dan P5) terletak pada satu garis lurus dari barat ke timur dengan urutan P1 – P3 – P5 – P4 – P2. Diketahui jarak antara P1 dan P2 adalah dua kali jarak antara P3 dan P4. Pos P5 terletak tepat di tengah-tengah antara P3 dan P4. Selain itu, jarak P3 ke P1 sama dengan jarak P4 ke P2, yaitu setengah dari jarak P1 ke P5. Pos manakah yang berjarak paling jauh dari P3?",
      "pilihan": [
        "Pos P1",
        "Pos P2",
        "Pos P4",
        "Pos P5",
        "Pos P1 dan Pos P4 sama jauh"
      ],
      "indeksBenar": 1,
      "explanation": "Misalkan jarak P3 ke P4 = 2x, maka P3 ke P5 = x dan P5 ke P4 = x. Karena jarak P1 ke P3 = setengah dari jarak P1 ke P5, diperoleh jarak P1 ke P3 = x, sehingga jarak P4 ke P2 juga = x. Jadi jarak keempat ruas berurutan sama besar (x). Jarak dari P3 ke P1 = x, ke P5 = x, ke P4 = 2x, dan ke P2 = 3x. Pos terjauh dari P3 adalah P2.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sulit",
      "question_text": "Enam pimpinan rapat—Adi, Bela, Cakra, Dinda, Edo, dan Farah—duduk mengelilingi sebuah meja bundar dengan jarak antarkursi sama. Adi duduk berhadapan langsung dengan Dinda. Bela duduk tepat di sebelah Adi. Edo tidak duduk bersebelahan dengan Dinda maupun dengan Bela. Cakra tidak duduk bersebelahan dengan Adi, dan Farah tidak duduk bersebelahan dengan Edo. Siapakah yang duduk tepat berhadapan dengan Bela?",
      "pilihan": [
        "Edo",
        "Farah",
        "Adi",
        "Cakra",
        "Dinda"
      ],
      "indeksBenar": 3,
      "explanation": "Tetapkan kursi 1 sampai 6 melingkar berurutan. Adi di kursi 1, maka Dinda berhadapan dengannya di kursi 4. Bela di sebelah Adi, misal kursi 6 (atau 2; keduanya simetris). Edo tidak boleh di sebelah Dinda (bukan 3 atau 5) maupun Bela (bukan 5 atau 1), sehingga Edo wajib menempati kursi 2 (sisi berlawanan dari Bela terhadap Adi). Farah tidak bersebelahan dengan Edo (bukan 1 atau 3), maka Farah menempati kursi 5 (di antara Dinda dan Bela). Kursi tersisa, yaitu kursi 3, ditempati Cakra. Kursi 3 berhadapan langsung dengan kursi 6 (Bela).",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sulit",
      "question_text": "Jika diketahui m + n = 19 dan m × n = 60, berapakah nilai dari m^2 + n^2?",
      "pilihan": [
        "221",
        "231",
        "261",
        "301",
        "241"
      ],
      "indeksBenar": 4,
      "explanation": "Gunakan identitas aljabar (m + n)^2 = m^2 + 2mn + n^2, sehingga m^2 + n^2 = (m + n)^2 - 2mn. Substitusikan nilai yang diketahui: m^2 + n^2 = 19^2 - 2(60) = 361 - 120 = 241.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sedang",
      "question_text": "Hasil perhitungan dari (5/4 + 1/2) : (3/8 + 1/16) adalah ...",
      "pilihan": [
        "2",
        "3",
        "4",
        "6",
        "8"
      ],
      "indeksBenar": 2,
      "explanation": "Samakan penyebut masing-masing kelompok: 5/4 + 1/2 = 5/4 + 2/4 = 7/4, dan 3/8 + 1/16 = 6/16 + 1/16 = 7/16. Maka pembagiannya menjadi (7/4) : (7/16) = (7/4) × (16/7) = 4.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "mudah",
      "question_text": "Nilai rata-rata dari 8 bilangan adalah 32,5. Setelah satu bilangan dikeluarkan, nilai rata-rata dari 7 bilangan yang tersisa menjadi 30. Berapakah nilai bilangan yang dikeluarkan tersebut?",
      "pilihan": [
        "42",
        "45",
        "50",
        "48",
        "52"
      ],
      "indeksBenar": 2,
      "explanation": "Jumlah 8 bilangan mula-mula = 8 × 32,5 = 260. Jumlah 7 bilangan setelah satu bilangan dikeluarkan = 7 × 30 = 210. Bilangan yang dikeluarkan adalah selisih keduanya, yaitu 260 - 210 = 50.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sulit",
      "question_text": "Sebuah roda penggerak berdiameter 48 cm berputar sebanyak 60 kali untuk menempuh panjang lintasan tertentu. Apabila digunakan roda berukuran diameter 32 cm untuk menempuh lintasan yang sama persis, berapakah selisih banyak putaran antara kedua roda tersebut?",
      "pilihan": [
        "30 kali",
        "20 kali",
        "25 kali",
        "35 kali",
        "90 kali"
      ],
      "indeksBenar": 0,
      "explanation": "Panjang lintasan kedua roda sama (π × d1 × n1 = π × d2 × n2). Maka 48 × 60 = 32 × n2, sehingga jumlah putaran roda kedua n2 = (48 × 60) / 32 = 90 kali. Selisih putaran kedua roda adalah 90 - 60 = 30 kali.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sedang",
      "question_text": "Angka yang tepat untuk melengkapi deret 2, 9, 28, 65, 126, ... adalah ...",
      "pilihan": [
        "189",
        "217",
        "215",
        "216",
        "225"
      ],
      "indeksBenar": 1,
      "explanation": "Setiap suku memenuhi rumus n^3 + 1 untuk n = 1, 2, 3, 4, 5, 6: 1^3+1 = 2, 2^3+1 = 9, 3^3+1 = 28, 4^3+1 = 65, 5^3+1 = 126. Suku ke-6 adalah 6^3 + 1 = 216 + 1 = 217.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sulit",
      "question_text": "Tentukan angka yang hilang pada deret berikut: 5, 40, 3, 10, 34, 6, 15, 28, ..., 20",
      "pilihan": [
        "9",
        "10",
        "18",
        "12",
        "22"
      ],
      "indeksBenar": 3,
      "explanation": "Deret terbagi menjadi tiga larik berselang setiap 3 langkah: Larik pertama (suku 1, 4, 7, 10) bertambah 5: 5, 10, 15, 20; Larik kedua (suku 2, 5, 8) berkurang 6: 40, 34, 28; Larik ketiga (suku 3, 6, 9) dikalikan 2: 3, 6, maka suku ke-9 adalah 6 × 2 = 12.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sedang",
      "question_text": "Angka berikutnya dari barisan 140, 70, 210, 105, 315, ... adalah ...",
      "pilihan": [
        "157,5",
        "152,5",
        "155,5",
        "162,5",
        "945"
      ],
      "indeksBenar": 0,
      "explanation": "Pola operasi bergantian secara tetap yaitu dibagi 2 lalu dikali 3: 140 (:2) -> 70 (×3) -> 210 (:2) -> 105 (×3) -> 315. Langkah berikutnya adalah 315 : 2 = 157,5.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sulit",
      "question_text": "Tentukan nilai yang tepat untuk melengkapi deret: 2, 4, 12, 8, 10, 30, 26, 28, ...",
      "pilihan": [
        "24",
        "30",
        "78",
        "88",
        "84"
      ],
      "indeksBenar": 4,
      "explanation": "Barisan menggunakan siklus tiga operasi berulang (+2, ×3, -4): 2 (+2) -> 4 (×3) -> 12 (-4) -> 8 (+2) -> 10 (×3) -> 30 (-4) -> 26 (+2) -> 28. Operasi berikutnya adalah 28 × 3 = 84.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "sedang",
      "question_text": "Diketahui x adalah bilangan real yang memenuhi persamaan x² - 9 = 0 dan y = 3. Hubungan antara x dan y yang paling tepat adalah...",
      "pilihan": [
        "x > y",
        "x < y",
        "x = y",
        "x = -y",
        "Hubungan x dan y tidak dapat ditentukan"
      ],
      "indeksBenar": 4,
      "explanation": "Persamaan x² - 9 = 0 memiliki dua solusi, yaitu x = 3 atau x = -3. Jika x = 3 maka x = y, sedangkan jika x = -3 maka x < y. Karena nilai x tidak tunggal dan menghasilkan hubungan berbeda, hubungan x dan y tidak dapat ditentukan secara pasti.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "sedang",
      "question_text": "Bilangan real a dan b memenuhi pertidaksamaan 3 < a < 8 dan 4 < b < 9. Jika P = a - b dan Q = 0, maka hubungan antara P dan Q yang paling tepat adalah...",
      "pilihan": [
        "P > Q",
        "P < Q",
        "P = Q",
        "Hubungan P dan Q tidak dapat ditentukan",
        "P = -Q"
      ],
      "indeksBenar": 3,
      "explanation": "Batas selisih P = a - b berada pada selang (3 - 9) < P < (8 - 4), yakni -6 < P < 4. Karena nilai P bisa negatif (misalnya a = 4, b = 7 → P = -3 < Q), bisa nol (a = 5, b = 5 → P = 0 = Q), ataupun positif (a = 7, b = 5 → P = 2 > Q), maka hubungan P dan Q tidak dapat ditentukan.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "sedang",
      "question_text": "Diketahui P adalah rata-rata dari (4k + 5), (6k - 1), dan (2k + 8), sedangkan Q adalah rata-rata dari (5k + 3), (7k + 1), dan 8 untuk sembarang bilangan real k. Hubungan yang tepat antara P dan Q adalah...",
      "pilihan": [
        "P = Q",
        "P > Q",
        "P < Q",
        "P = kQ",
        "Hubungan P dan Q tidak dapat ditentukan"
      ],
      "indeksBenar": 0,
      "explanation": "Hitung masing-masing rata-rata: P = [(4k + 5) + (6k - 1) + (2k + 8)] / 3 = (12k + 12) / 3 = 4k + 4. Sementara Q = [(5k + 3) + (7k + 1) + 8] / 3 = (12k + 12) / 3 = 4k + 4. Untuk setiap nilai k, selalu berlaku P = Q.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sedang",
      "question_text": "Lima orang kandidat yang bersaudara memiliki selisih usia yang sama secara berurutan. Jika kandidat termuda berusia 19 tahun dan yang tertua berusia 31 tahun, berapakah jumlah keseluruhan usia kelima orang tersebut?",
      "pilihan": [
        "115 tahun",
        "120 tahun",
        "130 tahun",
        "125 tahun",
        "135 tahun"
      ],
      "indeksBenar": 3,
      "explanation": "Karena selisih usianya konstan, usia mereka membentuk barisan aritmetika dengan n = 5, U₁ = 19, dan U₅ = 31. Jumlah deret aritmetika S₅ = (n/2) × (U₁ + U₅) = (5/2) × (19 + 31) = 2,5 × 50 = 125 tahun.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sedang",
      "question_text": "Enam tahun yang lalu, usia seorang kepala seksi tepat 4 kali usia stafnya. Apabila saat ini usia kepala seksi tersebut tepat 3 kali usia stafnya, berapakah selisih usia keduanya 5 tahun yang akan datang?",
      "pilihan": [
        "24 tahun",
        "30 tahun",
        "32 tahun",
        "41 tahun",
        "36 tahun"
      ],
      "indeksBenar": 4,
      "explanation": "Misalkan usia saat ini adalah K dan S. Diketahui K = 3S dan (K - 6) = 4(S - 6). Substitusi menghasilkan 3S - 6 = 4S - 24, sehingga S = 18 tahun dan K = 54 tahun. Selisih usia bersifat tetap sepanjang waktu, yakni 54 - 18 = 36 tahun (5 tahun lagi: 59 - 23 = 36 tahun).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sedang",
      "question_text": "Dalam pendataan minat pelatihan teknis terhadap 65 pegawai di sebuah dinas, tercatat 34 orang memilih pelatihan analisis data, 38 orang memilih pelatihan manajemen proyek, dan 9 orang memilih pelatihan lain di luar kedua pilihan tersebut. Berapa orang pegawai yang memilih kedua pelatihan tersebut sekaligus?",
      "pilihan": [
        "16 orang",
        "12 orang",
        "14 orang",
        "18 orang",
        "20 orang"
      ],
      "indeksBenar": 0,
      "explanation": "Jumlah pegawai yang memilih minimal satu dari dua pelatihan = 65 - 9 = 56 orang. Dengan prinsip inklusi-eksklusi himpunan: n(A ∩ B) = n(A) + n(B) - n(A ∪ B) = 34 + 38 - 56 = 16 orang.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sedang",
      "question_text": "Dari 60 peserta orientasi pegawai baru, tercatat 26 orang bergabung dalam kelas Hukum Administrasi, 24 orang di kelas Keuangan Publik, dan 18 orang di kelas Kebijakan Digital. Sebanyak 8 orang mengikuti Hukum Administrasi dan Keuangan Publik, 6 orang mengikuti Hukum Administrasi dan Kebijakan Digital, 5 orang mengikuti Keuangan Publik dan Kebijakan Digital, serta 3 orang mengikuti ketiganya. Berapa peserta yang tidak mengikuti satu pun dari ketiga kelas tersebut?",
      "pilihan": [
        "4 peserta",
        "8 peserta",
        "6 peserta",
        "10 peserta",
        "12 peserta"
      ],
      "indeksBenar": 1,
      "explanation": "Jumlah peserta yang mengikuti minimal satu kelas = 26 + 24 + 18 - 8 - 6 - 5 + 3 = 52 peserta. Dengan demikian, jumlah peserta yang tidak mengikuti satu pun kelas tersebut adalah 60 - 52 = 8 peserta.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "sedang",
      "question_text": "Diketahui aturan transformasi: [poligon 3 sisi (△) berwarna putih berisi 2 lingkaran hitam (●)] berubah menjadi [poligon 6 sisi (segi enam) berwarna hitam berisi 1 lingkaran putih (○)]. Dengan aturan yang identik, [poligon 4 sisi (□) berwarna putih berisi 4 lingkaran hitam (●)] berubah menjadi...",
      "pilihan": [
        "Poligon 6 sisi berwarna hitam berisi 2 lingkaran putih (○)",
        "Poligon 8 sisi (segi delapan) berwarna hitam berisi 2 lingkaran putih (○)",
        "Poligon 8 sisi (segi delapan) berwarna putih berisi 2 lingkaran hitam (●)",
        "Poligon 8 sisi (segi delapan) berwarna hitam berisi 8 lingkaran putih (○)",
        "Poligon 5 sisi (segi lima) berwarna hitam berisi 2 lingkaran putih (○)"
      ],
      "indeksBenar": 1,
      "explanation": "Terdapat empat aturan serentak: (1) jumlah sisi bangun luar dikalikan dua (4 × 2 = 8 sisi), (2) warna bangun luar berbalik dari putih menjadi hitam, (3) jumlah lingkaran di dalam dibagi dua (4 ÷ 2 = 2 buah), dan (4) warna lingkaran di dalam berbalik dari hitam (●) menjadi putih (○).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "sedang",
      "question_text": "Pada kisi persegi 2×2, pola [▲ di petak kiri-atas, tiga petak lainnya kosong] berpasangan dengan [▲ di petak kiri-atas dan ▼ berlawanan arah di petak kanan-bawah]. Menggunakan logika simetri yang sama, pasangan untuk [→ di petak kanan-atas, tiga petak lainnya kosong] adalah...",
      "pilihan": [
        "→ di petak kanan-atas dan → searah di petak kiri-bawah",
        "→ di petak kanan-atas dan ← berlawanan arah di petak kanan-bawah",
        "→ di petak kanan-atas dan ← berlawanan arah di petak kiri-bawah",
        "← di petak kanan-atas dan → di petak kiri-bawah",
        "→ di petak kiri-atas dan ← di petak kanan-bawah"
      ],
      "indeksBenar": 2,
      "explanation": "Aturannya adalah menggandakan simbol ke petak diagonal yang berseberangan sekaligus membalik arahnya 180°. Petak berseberangan diagonal dengan kanan-atas adalah kiri-bawah, dan kebalikan arah → adalah ←.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "sedang",
      "question_text": "Sebuah bingkai terbagi menjadi 4 kuadran. Pola awal [△ (3 sisi) di kuadran kiri-atas dan □ (4 sisi) di kuadran kanan-bawah] berubah menjadi [□ (4 sisi) di kuadran kanan-atas dan segi lima (5 sisi) di kuadran kiri-bawah]. Jika aturan yang sama diterapkan pada [□ (4 sisi) di kuadran kanan-atas dan segi lima (5 sisi) di kuadran kiri-bawah], hasilnya adalah...",
      "pilihan": [
        "Segi lima (5 sisi) di kuadran kiri-bawah dan segi enam (6 sisi) di kuadran kanan-atas",
        "Segi empat (4 sisi) di kuadran kanan-bawah dan segi lima (5 sisi) di kuadran kiri-atas",
        "Segi lima (5 sisi) di kuadran kanan-atas dan segi enam (6 sisi) di kuadran kiri-bawah",
        "Segi lima (5 sisi) di kuadran kanan-bawah dan segi enam (6 sisi) di kuadran kiri-atas",
        "Segi enam (6 sisi) di kuadran kanan-bawah dan segi lima (5 sisi) di kuadran kiri-atas"
      ],
      "indeksBenar": 3,
      "explanation": "Setiap bangun berpindah satu kuadran searah jarum jam dan jumlah sisinya bertambah 1. Persegi (4 sisi) di kanan-atas bergerak ke kanan-bawah menjadi segi lima (5 sisi), sedangkan segi lima (5 sisi) di kiri-bawah bergerak ke kiri-atas menjadi segi enam (6 sisi).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "sedang",
      "question_text": "Lima bangun datar berikut dibagi menjadi bagian-bagian kongruen dengan sebagian di antaranya diarsir gelap. Manakah gambar yang TIDAK memiliki proporsi luas arsir yang sama dengan keempat gambar lainnya?\nA: Lingkaran dibagi menjadi 4 juring sama besar, dengan 1 juring diarsir\nB: Segi enam beraturan dibagi menjadi 6 segitiga sama sisi kongruen, dengan 2 segitiga diarsir\nC: Persegi dibagi menjadi 8 segitiga siku-siku kongruen, dengan 2 segitiga diarsir\nD: Persegi panjang dibagi menjadi 12 petak persegi kongruen, dengan 3 petak diarsir\nE: Lingkaran dibagi menjadi 8 juring sama besar, dengan 2 juring diarsir",
      "pilihan": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E"
      ],
      "indeksBenar": 1,
      "explanation": "Proporsi daerah terarsir pada Gambar A (1/4), C (2/8 = 1/4), D (3/12 = 1/4), dan E (2/8 = 1/4) seluruhnya tepat bernilai seperempat (25%) dari luas bangun. Hanya Gambar B yang berarsir 2/6 = 1/3 bagian.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "sedang",
      "question_text": "Lima gambar menampilkan poligon konveks beserta garis-garis diagonal di dalamnya. Manakah gambar yang polanya TIDAK konsisten dengan gambar lainnya?\nA: Segitiga (3 sisi) dengan 0 garis diagonal di dalamnya\nB: Segi empat (4 sisi) dengan 2 garis diagonal di dalamnya\nC: Segi lima (5 sisi) dengan 3 garis diagonal di dalamnya\nD: Segi enam (6 sisi) dengan 9 garis diagonal di dalamnya\nE: Segi tujuh (7 sisi) dengan 14 garis diagonal di dalamnya",
      "pilihan": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E"
      ],
      "indeksBenar": 2,
      "explanation": "Jumlah seluruh diagonal poligon bersisi n mengikuti rumus n(n - 3)/2, yaitu 0 (n=3), 2 (n=4), 5 (n=5), 9 (n=6), dan 14 (n=7). Gambar A, B, D, dan E menampilkan seluruh diagonal secara lengkap, sedangkan Gambar C hanya memuat 3 dari 5 diagonal yang seharusnya dimiliki segi lima.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "sedang",
      "question_text": "Perhatikan lima pasang arah panah yang berpangkal dari satu titik pusat berikut. Manakah pasangan panah yang memiliki hubungan sudut BERBEDA sendiri?\nA: Panah mengarah ke atas (↑) dan panah mengarah ke kanan (→)\nB: Panah mengarah ke kanan (→) dan panah mengarah ke bawah (↓)\nC: Panah mengarah ke bawah (↓) dan panah mengarah ke kiri (←)\nD: Panah mengarah ke atas (↑) dan panah mengarah ke bawah (↓)\nE: Panah mengarah ke kiri (←) dan panah mengarah ke atas (↑)",
      "pilihan": [
        "Pasangan A",
        "Pasangan B",
        "Pasangan C",
        "Pasangan D",
        "Pasangan E"
      ],
      "indeksBenar": 3,
      "explanation": "Pasangan A, B, C, dan E masing-masing membentuk sudut siku-siku (90° atau saling tegak lurus). Sebaliknya, Pasangan D (↑ dan ↓) membentuk sudut lurus 180° (saling berlawanan arah).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Serial Pola)",
      "difficulty": "sedang",
      "question_text": "Amati deret 4 panel berikut:\nPanel 1: Barisan simbol [○, +, −] dan ikon ▲ di sudut kiri-atas.\nPanel 2: Barisan simbol [+, −, ○] dan ikon ▲ di sudut kiri-bawah.\nPanel 3: Barisan simbol [−, ○, +] dan ikon ▲ di sudut kanan-bawah.\nPanel 4: Barisan simbol [○, +, −] dan ikon ▲ di sudut kanan-atas.\nGambar pada Panel 5 berikutnya adalah...",
      "pilihan": [
        "Barisan simbol [−, ○, +] dan ikon ▲ di sudut kiri-atas",
        "Barisan simbol [+, −, ○] dan ikon ▲ di sudut kiri-bawah",
        "Barisan simbol [○, +, −] dan ikon ▲ di sudut kiri-atas",
        "Barisan simbol [+, ○, −] dan ikon ▲ di sudut kiri-atas",
        "Barisan simbol [+, −, ○] dan ikon ▲ di sudut kiri-atas"
      ],
      "indeksBenar": 4,
      "explanation": "Ketiga simbol dalam barisan bergeser satu langkah ke kiri secara siklis (dari [○, +, −] pada Panel 4 menjadi [+, −, ○] pada Panel 5), sedangkan ikon ▲ bergerak berlawanan arah jarum jam di sudut bingkai (kiri-atas → kiri-bawah → kanan-bawah → kanan-atas → kembali ke kiri-atas).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Serial Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Serial Pola)",
      "difficulty": "sedang",
      "question_text": "Perhatikan deret 5 panel yang belum lengkap pada Panel 4 berikut:\nPanel 1: Persegi hitam (■) di sudut kiri-atas, 1 garis miring (/), segitiga putih (△) di sudut kanan-bawah.\nPanel 2: Persegi putih (□) di sudut kiri-atas, 2 garis miring (//), segitiga putih (△) di tengah sisi kanan.\nPanel 3: Persegi hitam (■) di sudut kiri-atas, 3 garis miring (///), segitiga putih (△) di sudut kanan-atas.\nPanel 4: [ ? ]\nPanel 5: Persegi hitam (■) di sudut kiri-atas, 5 garis miring (/////), segitiga putih (△) di sudut kiri-atas.\nGambar yang tepat untuk mengisi Panel 4 adalah...",
      "pilihan": [
        "Persegi putih (□) di sudut kiri-atas, 4 garis miring (////), segitiga putih (△) di tengah sisi atas",
        "Persegi hitam (■) di sudut kiri-atas, 4 garis miring (////), segitiga putih (△) di tengah sisi atas",
        "Persegi putih (□) di sudut kiri-atas, 4 garis miring (////), segitiga putih (△) di sudut kiri-atas",
        "Persegi putih (□) di sudut kiri-atas, 3 garis miring (///), segitiga putih (△) di tengah sisi bawah",
        "Persegi putih (□) di sudut kiri-atas, 4 garis miring (////), segitiga putih (△) di tengah sisi kanan"
      ],
      "indeksBenar": 0,
      "explanation": "Persegi di sudut kiri-atas bergantian warna hitam-putih-hitam-putih-hitam (sehingga Panel 4 berupa □ putih). Jumlah garis miring bertambah 1 tiap panel (1, 2, 3, 4, 5 → ////). Segitiga △ bergerak berlawanan jarum jam di sepanjang tepi bingkai: kanan-bawah → tengah-kanan → kanan-atas → tengah-atas (Panel 4) → kiri-atas.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Serial Pola)"
    }
  ],
  [
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sedang",
      "question_text": "Kata 'kurator' berhubungan dengan kata 'museum' sebagaimana kata ... berhubungan dengan kata ...",
      "pilihan": [
        "pustakawan : perpustakaan",
        "perpustakaan : buku",
        "apotek : apoteker",
        "pasien : rumah sakit",
        "arsitek : gedung"
      ],
      "indeksBenar": 0,
      "explanation": "Kurator adalah tenaga profesional pengelola koleksi yang bertugas di museum, sebagaimana pustakawan adalah tenaga profesional pengelola koleksi literatur yang bertugas di perpustakaan. Opsi 'apotek : apoteker' berurutan terbalik.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sulit",
      "question_text": "GANDUM : TEPUNG : ROTI = ... : ... : ...",
      "pilihan": [
        "Kain : Benang : Kapas",
        "Susu : Sapi : Keju",
        "Padi : Beras : Sawah",
        "Kapas : Benang : Kain",
        "Kulit : Sepatu : Pengrajin"
      ],
      "indeksBenar": 3,
      "explanation": "Pola tiga kata tersebut adalah bahan mentah -> bahan setengah jadi -> produk jadi (gandum digiling menjadi tepung lalu diolah menjadi roti). Pasangan yang tepat dan searah adalah Kapas : Benang : Kain (kapas dipintal menjadi benang lalu ditenun menjadi kain).",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sedang",
      "question_text": "CENDERAWASIH : BURUNG : HUTAN = ... : ... : ...",
      "pilihan": [
        "Paus : Ikan : Laut",
        "Arwana : Ikan : Sungai",
        "Komodo : Mamalia : Sabana",
        "Kuda : Kandang : Rumput",
        "Teratai : Bunga : Gurun"
      ],
      "indeksBenar": 1,
      "explanation": "Pola tiga kata tersebut adalah nama spesies hewan : kelas/kelompoknya : habitat alaminya (cenderawasih adalah jenis burung yang hidup di hutan). Padanan yang tepat secara ilmiah dan searah adalah Arwana : Ikan : Sungai. Paus termasuk mamalia (bukan ikan) dan komodo termasuk reptil (bukan mamalia).",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sulit",
      "question_text": "CAHAYA : GELAP = ... : ...",
      "pilihan": [
        "Panas : Dingin",
        "Gelap : Malam",
        "Bising : Telinga",
        "Suara : Hening",
        "Ramai : Pasar"
      ],
      "indeksBenar": 3,
      "explanation": "Hubungan CAHAYA : GELAP adalah unsur fisik beserta kondisi akibat ketiadaan total unsur tersebut (ketiadaan cahaya menyebabkan kondisi gelap). Padanan yang tepat adalah Suara : Hening (ketiadaan suara menyebabkan kondisi hening). 'Panas : Dingin' hanyalah pasangan lawan kata sifat.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sedang",
      "question_text": "Berkas pendaftaran yang kurang lengkap akan dikembalikan melalui pos atau ditolak langsung oleh sistem verifikasi. Berkas pendaftaran milik Bagas kurang lengkap, namun tidak dikembalikan melalui pos. Simpulan yang tepat adalah ...",
      "pilihan": [
        "Berkas pendaftaran milik Bagas sebenarnya sudah lengkap.",
        "Berkas pendaftaran milik Bagas ditolak langsung oleh sistem verifikasi.",
        "Bagas dapat mengambil kembali berkasnya di kantor pos terdekat.",
        "Sistem verifikasi meloloskan berkas milik Bagas karena kesalahan teknis.",
        "Tidak ada berkas pendaftaran yang ditolak oleh sistem verifikasi."
      ],
      "indeksBenar": 1,
      "explanation": "Karena berkas Bagas kurang lengkap, disjungsi 'dikembalikan melalui pos atau ditolak sistem' berlaku. Dengan silogisme disjungtif ((p atau q) dan ~p -> q), karena tidak dikembalikan melalui pos, maka berkas Bagas ditolak langsung oleh sistem verifikasi.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sulit",
      "question_text": "Jika pasar tradisional direvitalisasi, jumlah pengunjung meningkat. Jika jumlah pengunjung meningkat, omzet pedagang bertambah. Apabila tarif sewa kios dinaikkan terlalu tinggi, sebagian pedagang menutup lapaknya. Diketahui pasar tradisional telah direvitalisasi dan tarif sewa kios tidak dinaikkan terlalu tinggi. Simpulan yang paling tepat adalah ...",
      "pilihan": [
        "Jumlah pengunjung meningkat dan omzet pedagang bertambah.",
        "Seluruh pedagang membuka lapak tambahan di pasar tersebut.",
        "Tarif sewa kios justru diturunkan oleh pengelola pasar.",
        "Tidak ada satu pun pedagang yang mungkin menutup lapaknya karena alasan lain.",
        "Omzet pedagang bertambah meskipun jumlah pengunjung menurun."
      ],
      "indeksBenar": 0,
      "explanation": "Dari premis 'pasar direvitalisasi', menurut Modus Ponens berantai diperoleh 'jumlah pengunjung meningkat' dan akibatnya 'omzet pedagang bertambah'. Sementara premis tentang tarif sewa hanya memberi akibat jika tarif dinaikkan terlalu tinggi; negasi anteseden tidak membolehkan kita menyimpulkan tidak ada pedagang yang tutup karena alasan lain.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "mudah",
      "question_text": "Semua desa binaan di Kabupaten Lembah Hijau memiliki kelompok sadar wisata dan pos pelayanan terpadu. Pernyataan berikut yang TIDAK sesuai dengan ketentuan tersebut adalah ...",
      "pilihan": [
        "Setiap desa binaan di Kabupaten Lembah Hijau mempunyai kelompok sadar wisata.",
        "Tidak ada desa binaan di Kabupaten Lembah Hijau yang tanpa pos pelayanan terpadu.",
        "Desa Maju, apabila berstatus desa binaan di kabupaten tersebut, pasti memiliki kelompok sadar wisata.",
        "Ada desa binaan di Kabupaten Lembah Hijau yang tidak memiliki pos pelayanan terpadu.",
        "Seluruh desa binaan di kabupaten tersebut memiliki kedua fasilitas yang disebutkan."
      ],
      "indeksBenar": 3,
      "explanation": "Negasi dari pernyataan kuantor universal 'Semua A memiliki P dan Q' adalah 'Ada A yang tidak memiliki P atau tidak memiliki Q'. Oleh sebab itu, pernyataan bahwa ada desa binaan yang tidak memiliki pos pelayanan terpadu bertentangan langsung dengan premis.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sedang",
      "question_text": "Sebagian arsiparis di kantor pusat menguasai bahasa asing. Sebagian pegawai yang menguasai bahasa asing ditugaskan mengikuti forum internasional. Simpulan yang paling sahih dari kedua pernyataan tersebut adalah ...",
      "pilihan": [
        "Sebagian arsiparis di kantor pusat pasti ditugaskan mengikuti forum internasional.",
        "Semua pegawai yang mengikuti forum internasional adalah arsiparis di kantor pusat.",
        "Tidak ada arsiparis di kantor pusat yang mengikuti forum internasional.",
        "Semua arsiparis yang menguasai bahasa asing wajib mengikuti forum internasional.",
        "Tidak dapat ditarik simpulan pasti apakah ada arsiparis yang ditugaskan mengikuti forum internasional."
      ],
      "indeksBenar": 4,
      "explanation": "Dalam kaidah silogisme kategorik, tidak ada simpulan sahih yang dapat ditarik dari dua premis partikular ('Sebagian ...' dan 'Sebagian ...'). Pegawai penguasai bahasa asing yang ditugaskan ke forum internasional bisa saja bukan berasal dari kelompok arsiparis.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sedang",
      "question_text": "Dari enam analis—Gita, Hadi, Indah, Jaka, Kartika, dan Lukman—akan dipilih tepat 4 orang untuk tim audit lapangan dengan ketentuan berikut: (1) Jika Gita dipilih, Hadi harus dipilih; (2) Indah dan Jaka tidak dapat bergabung dalam tim yang sama; (3) Kartika dan Lukman tidak dapat bergabung dalam tim yang sama; (4) Jika Hadi dipilih, Kartika harus dipilih; (5) Jika Gita dipilih, Jaka tidak boleh dipilih. Apabila seluruh anggota tim berjumlah 4 orang dan Gita ikut terpilih, siapa saja keempat anggota tim tersebut?",
      "pilihan": [
        "Gita, Hadi, Jaka, dan Kartika",
        "Gita, Hadi, Indah, dan Lukman",
        "Gita, Hadi, Indah, dan Kartika",
        "Gita, Indah, Jaka, dan Kartika",
        "Hadi, Indah, Kartika, dan Lukman"
      ],
      "indeksBenar": 2,
      "explanation": "Karena Gita terpilih: berdasarkan syarat (1), Hadi wajib terpilih; berdasarkan syarat (4), Kartika wajib terpilih; berdasarkan syarat (3), Lukman tidak terpilih; berdasarkan syarat (5), Jaka tidak terpilih. Karena tersisa 4 orang yang belum gugur (Gita, Hadi, Indah, Kartika) dan syarat (2) terpenuhi sebab Jaka tidak ikut, maka komposisi tim tunggal adalah Gita, Hadi, Indah, dan Kartika.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "mudah",
      "question_text": "Empat rekan kerja (Rani, Sinta, Tono, dan Umar) memesan makanan dan minuman di kantin. Rani dan Umar masing-masing memesan semangkuk bakso dan segelas es jeruk. Sinta memesan semangkuk bakso dan segelas jus alpukat, sedangkan Tono hanya memesan segelas jus alpukat. Tono membayar Rp20.000,00 dan menerima kembalian Rp8.000,00. Sinta membayar Rp30.000,00 tanpa kembalian, sedangkan Umar membayar Rp23.000,00 tanpa kembalian. Jika seseorang membeli 2 mangkuk bakso dan 1 gelas jus alpukat untuk dibawa pulang dengan tambahan biaya kemasan Rp1.500,00 per item, berapakah total yang harus dibayar?",
      "pilihan": [
        "Rp48.000,00",
        "Rp49.500,00",
        "Rp51.000,00",
        "Rp54.000,00",
        "Rp52.500,00"
      ],
      "indeksBenar": 4,
      "explanation": "Harga jus alpukat (pesanan Tono) = Rp20.000,00 - Rp8.000,00 = Rp12.000,00. Dari pesanan Sinta, harga bakso = Rp30.000,00 - Rp12.000,00 = Rp18.000,00. Untuk membeli 2 bakso + 1 jus alpukat = (2 × Rp18.000,00) + Rp12.000,00 = Rp48.000,00. Ditambah biaya kemasan untuk 3 item = 3 × Rp1.500,00 = Rp4.500,00, total menjadi Rp52.500,00.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sedang",
      "question_text": "Lomba karya tulis daerah dibagi menjadi kategori Pemula (usia 12–15 tahun) dan kategori Madya (usia 16–18 tahun), dan setiap peserta hanya boleh mengikuti satu lomba. Lima pemuda mendaftar: Nando, Oki, Putri, Qori, dan Riko. Usia Qori tepat berada pada batas minimal kategori Pemula. Putri berusia 3 tahun lebih tua daripada Qori. Oki berusia 2 tahun lebih tua daripada Putri. Nando berusia 1 tahun lebih tua daripada Oki dan 3 tahun lebih muda daripada Riko. Siapa saja yang memenuhi syarat mengikuti kategori Madya?",
      "pilihan": [
        "Oki dan Nando",
        "Putri, Oki, dan Nando",
        "Oki, Nando, dan Riko",
        "Nando dan Riko",
        "Oki saja"
      ],
      "indeksBenar": 0,
      "explanation": "Usia masing-masing: Qori = 12 tahun; Putri = 12 + 3 = 15 tahun; Oki = 15 + 2 = 17 tahun; Nando = 17 + 1 = 18 tahun; Riko = 18 + 3 = 21 tahun. Kategori Madya menerima rentang usia 16–18 tahun, sehingga peserta yang memenuhi syarat adalah Oki (17 tahun) dan Nando (18 tahun).",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sedang",
      "question_text": "Seorang petugas ekspedisi dinas harus mengunjungi enam instansi (K, L, M, N, O, dan P) dalam satu hari dengan ketentuan berikut: (1) Instansi O tidak dikunjungi paling awal maupun paling akhir; (2) Instansi P dikunjungi tepat sebelum instansi K; (3) Instansi N dikunjungi tepat setelah instansi M; (4) Instansi L dikunjungi lebih awal daripada instansi P dan M. Urutan kunjungan dari pertama hingga terakhir yang memenuhi seluruh ketentuan tersebut adalah ...",
      "pilihan": [
        "L – P – K – O – M – N",
        "O – L – P – K – M – N",
        "L – K – P – O – M – N",
        "L – P – K – M – O – N",
        "P – K – L – M – N – O"
      ],
      "indeksBenar": 0,
      "explanation": "Periksa syarat: Opsi 'O – L – P – K – M – N' dan 'P – K – L – M – N – O' menempatkan O di awal atau akhir (melanggar syarat 1). Opsi 'L – K – P – O – M – N' melanggar syarat (2) karena P tidak sebelum K. Opsi 'L – P – K – M – O – N' melanggar syarat (3) karena N tidak tepat setelah M. Hanya 'L – P – K – O – M – N' yang memenuhi keempat syarat sekaligus.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sedang",
      "question_text": "Sebuah kereta cepat menempuh jarak 2,4 kilometer dalam waktu 40 detik. Berapakah kecepatan rata-rata kereta tersebut jika dinyatakan dalam satuan kilometer per jam (km/jam)?",
      "pilihan": [
        "192 km/jam",
        "204 km/jam",
        "224 km/jam",
        "240 km/jam",
        "216 km/jam"
      ],
      "indeksBenar": 4,
      "explanation": "Konversikan waktu 40 detik menjadi jam: 40 / 3.600 = 1 / 90 jam. Kecepatan = jarak / waktu = 2,4 : (1/90) = 2,4 × 90 = 216 km/jam.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sulit",
      "question_text": "Setelah memperoleh kenaikan sebesar 25% dari nilai semula, tunjangan kinerja seorang aparatur sipil negara menjadi Rp3.750.000,00. Berapakah besaran tunjangan kinerja tersebut mula-mula sebelum kenaikan?",
      "pilihan": [
        "Rp2.800.000,00",
        "Rp3.000.000,00",
        "Rp2.950.000,00",
        "Rp3.125.000,00",
        "Rp3.250.000,00"
      ],
      "indeksBenar": 1,
      "explanation": "Nilai setelah naik 25% setara dengan 125% (atau 5/4) dari nilai awal. Maka nilai mula-mula = Rp3.750.000,00 : 125% = Rp3.750.000,00 × (4/5) = Rp3.000.000,00.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sedang",
      "question_text": "Kolam pembibitan A saat ini berisi 12.000 ekor ikan dan bertambah secara tetap 450 ekor tiap pekan, sedangkan kolam pembibitan B berisi 26.400 ekor ikan dan berkurang secara tetap 350 ekor tiap pekan. Dalam berapa pekan lagi jumlah ikan di kedua kolam tersebut menjadi sama banyak?",
      "pilihan": [
        "14 pekan",
        "16 pekan",
        "20 pekan",
        "18 pekan",
        "22 pekan"
      ],
      "indeksBenar": 3,
      "explanation": "Misalkan waktu bertemu = t pekan. Persamaannya: 12.000 + 450t = 26.400 - 350t. Pindahkan suku variabel dan konstanta: (450 + 350)t = 26.400 - 12.000, sehingga 800t = 14.400. Diperoleh t = 14.400 / 800 = 18 pekan.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "mudah",
      "question_text": "Hasil dari (38 + 27)² - 1.875 adalah...",
      "pilihan": [
        "2.350",
        "2.250",
        "2.425",
        "2.450",
        "2.550"
      ],
      "indeksBenar": 0,
      "explanation": "Hitung penjumlahan dalam kurung terlebih dahulu: 38 + 27 = 65. Dengan trik kuadrat bilangan berakhiran 5, 65² = (6 × 7)25 = 4.225. Selanjutnya, 4.225 - 1.875 = 2.350.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sedang",
      "question_text": "Tentukan angka yang melengkapi deret berikut: 4, 6, 9, 14, 21, 32, ...",
      "pilihan": [
        "41",
        "43",
        "44",
        "45",
        "47"
      ],
      "indeksBenar": 3,
      "explanation": "Selisih antarsuku secara berurutan merupakan barisan bilangan prima mulai dari 2: +2, +3, +5, +7, +11. Bilangan prima setelah 11 adalah 13, sehingga suku berikutnya adalah 32 + 13 = 45.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sulit",
      "question_text": "Angka berikutnya pada barisan 50, 51, 47, 56, 40, 65, ... adalah ...",
      "pilihan": [
        "24",
        "28",
        "29",
        "31",
        "101"
      ],
      "indeksBenar": 2,
      "explanation": "Pola perubahan antarsuku adalah kuadrat bilangan asli dengan tanda positif dan negatif bergantian: +1^2 (+1), -2^2 (-4), +3^2 (+9), -4^2 (-16), +5^2 (+25). Langkah berikutnya adalah dikurangi 6^2 (-36), yaitu 65 - 36 = 29.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sulit",
      "question_text": "Tentukan angka lanjutan yang tepat untuk deret: 8, 8, 12, 24, 60, 180, ...",
      "pilihan": [
        "540",
        "630",
        "600",
        "660",
        "720"
      ],
      "indeksBenar": 1,
      "explanation": "Rasio perkalian dari satu suku ke suku berikutnya naik secara teratur sebesar 0,5: 8 × 1 = 8; 8 × 1,5 = 12; 12 × 2 = 24; 24 × 2,5 = 60; 60 × 3 = 180. Maka suku berikutnya adalah 180 × 3,5 = 630.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "mudah",
      "question_text": "Tentukan dua bilangan berikutnya pada deret: 31, 9, 27, 13, 23, 17, 19, ..., ...",
      "pilihan": [
        "21 dan 15",
        "15 dan 21",
        "20 dan 15",
        "21 dan 16",
        "19 dan 21"
      ],
      "indeksBenar": 0,
      "explanation": "Deret terdiri atas dua larik berselang-seling. Suku ganjil (31, 27, 23, 19, ...) berkurang 4 setiap langkah sehingga suku ke-9 adalah 19 - 4 = 15. Suku genap (9, 13, 17, ...) bertambah 4 setiap langkah sehingga suku ke-8 adalah 17 + 4 = 21. Secara berurutan hasilnya adalah 21 dan 15.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "sedang",
      "question_text": "Diketahui x adalah rata-rata dari (3m + 4), (5m - 2), dan 10, sedangkan y adalah rata-rata dari (6m + 5), (2m + 1), dan 12 untuk sembarang bilangan real m. Hubungan antara x dan y yang selalu benar adalah...",
      "pilihan": [
        "x > y",
        "x < y",
        "x = y",
        "x = 2y",
        "Hubungan x dan y tidak dapat ditentukan"
      ],
      "indeksBenar": 1,
      "explanation": "Hitung x = (3m + 4 + 5m - 2 + 10) / 3 = (8m + 12) / 3 = (8/3)m + 4. Hitung y = (6m + 5 + 2m + 1 + 12) / 3 = (8m + 18) / 3 = (8/3)m + 6. Selisih y - x = 6 - 4 = 2 > 0, sehingga x < y berlaku untuk semua nilai m.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "sedang",
      "question_text": "Diketahui P = (1/41) - (1/47) dan Q = (1/43) - (1/45). Pernyataan hubungan antara P dan Q yang tepat adalah...",
      "pilihan": [
        "P < Q",
        "P = Q",
        "P = 3Q",
        "P > Q",
        "Hubungan P dan Q tidak dapat ditentukan"
      ],
      "indeksBenar": 3,
      "explanation": "Sederhanakan kedua pecahan: P = (47 - 41) / (41 × 47) = 6 / 1.927, sedangkan Q = (45 - 43) / (43 × 45) = 2 / 1.935 = 6 / 5.805. Karena pembilangnya sama (6) sementara penyebut P lebih kecil daripada penyebut Q (1.927 < 5.805), maka P > Q.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "sulit",
      "question_text": "Harga beli sebuah tas kerja adalah Rp160.000 dan dijual kembali dengan keuntungan 25% dari harga beli. Jika P adalah total hasil penjualan 8 buah tas kerja tersebut dan Q = Rp1.550.000, maka...",
      "pilihan": [
        "P > Q",
        "P < Q",
        "P = Q",
        "2P = 3Q",
        "Hubungan P dan Q tidak dapat ditentukan"
      ],
      "indeksBenar": 0,
      "explanation": "Harga jual 1 tas = 125% × Rp160.000 = Rp200.000. Total hasil penjualan 8 tas P = 8 × Rp200.000 = Rp1.600.000. Dibandingkan Q = Rp1.550.000, jelas bahwa P > Q.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sedang",
      "question_text": "Jarak antara kantor cabang dan pusat layanan pada peta berskala 1 : 600.000 terukur sepanjang 9 cm. Seorang kurir menempuh rute sebenarnya menggunakan sepeda motor dengan kecepatan rata-rata 45 km/jam tanpa berhenti. Berapa menit waktu tempuh kurir tersebut?",
      "pilihan": [
        "60 menit",
        "64 menit",
        "72 menit",
        "75 menit",
        "80 menit"
      ],
      "indeksBenar": 2,
      "explanation": "Jarak sebenarnya = 9 cm × 600.000 = 5.400.000 cm = 54 km. Waktu tempuh = 54 km ÷ 45 km/jam = 1,2 jam = 1,2 × 60 menit = 72 menit.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sedang",
      "question_text": "Kendaraan patroli A berangkat dari pos induk dengan kecepatan rata-rata 45 km/jam. Empat puluh menit kemudian, kendaraan patroli B berangkat menyusul dari titik dan rute yang sama dengan kecepatan rata-rata 60 km/jam. Pada jarak berapa kilometer dari pos induk kendaraan B tepat menyusul kendaraan A?",
      "pilihan": [
        "90 km",
        "105 km",
        "135 km",
        "120 km",
        "150 km"
      ],
      "indeksBenar": 3,
      "explanation": "Selama 40 menit (2/3 jam), kendaraan A telah menempuh jarak awal = 45 × (2/3) = 30 km. Selisih kecepatan = 60 - 45 = 15 km/jam. Waktu yang dibutuhkan B untuk menyusul = 30 ÷ 15 = 2 jam, sehingga jarak titik susul = 2 × 60 = 120 km.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sedang",
      "question_text": "Ratna menyimpan dana sebesar Rp4.500.000 di sebuah koperasi pegawai yang memberikan bunga tunggal sebesar 8% per tahun. Setelah menabung selama 10 bulan penuh, berapakah total saldo tabungan Ratna seluruhnya?",
      "pilihan": [
        "Rp4.740.000",
        "Rp4.780.000",
        "Rp4.860.000",
        "Rp4.900.000",
        "Rp4.800.000"
      ],
      "indeksBenar": 4,
      "explanation": "Bunga selama 10 bulan = (10/12) × 8% × Rp4.500.000 = (10/12) × Rp360.000 = Rp300.000. Total saldo tabungan menjadi Rp4.500.000 + Rp300.000 = Rp4.800.000.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sedang",
      "question_text": "Sebuah kolam taman balai kota berbentuk persegi panjang berukuran panjang 22 m dan lebar 14 m. Di sekeliling luar tepi kolam dibangun jalur pejalan kaki selebar 2 m. Berapakah luas jalur pejalan kaki tersebut?",
      "pilihan": [
        "160 m²",
        "144 m²",
        "152 m²",
        "168 m²",
        "176 m²"
      ],
      "indeksBenar": 0,
      "explanation": "Ukuran persegi panjang terluar = (22 + 2 + 2) × (14 + 2 + 2) = 26 × 18 = 468 m². Luas kolam = 22 × 14 = 308 m². Maka luas jalur pejalan kaki = 468 - 308 = 160 m².",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "sedang",
      "question_text": "Sebuah jaring-jaring kubus berbentuk huruf T tersusun atas 3 persegi di baris paling atas (bernomor 1, 2, dan 3 dari kiri ke kanan) serta 3 persegi berurutan ke bawah tepat di bawah persegi 2 (bernomor 4, 5, dan 6 dari atas ke bawah). Ketika jaring-jaring dilipat menjadi kubus utuh dengan Persegi 2 sebagai sisi ATAS dan Persegi 4 sebagai sisi DEPAN, pasangan sisi yang menjadi sisi ALAS dan sisi BELAKANG kubus secara berturut-turut adalah...",
      "pilihan": [
        "Sisi 6 sebagai alas dan Sisi 5 sebagai sisi belakang",
        "Sisi 5 sebagai alas dan Sisi 3 sebagai sisi belakang",
        "Sisi 1 sebagai alas dan Sisi 6 sebagai sisi belakang",
        "Sisi 3 sebagai alas dan Sisi 5 sebagai sisi belakang",
        "Sisi 5 sebagai alas dan Sisi 6 sebagai sisi belakang"
      ],
      "indeksBenar": 4,
      "explanation": "Dari posisi Persegi 2 di atas: Persegi 1 dan 3 menjadi sisi kiri dan kanan; Persegi 4 terlipat ke bawah menjadi sisi depan; Persegi 5 terlipat ke bagian bawah berhadapan dengan Persegi 2 menjadi sisi alas; dan Persegi 6 terlipat naik di belakang berhadapan dengan Persegi 4 menjadi sisi belakang.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "sedang",
      "question_text": "Pada pasangan pola: [lingkaran berisi 1 garis mendatar di tengah dengan panah menunjuk kanan (→) di luar] berubah menjadi [lingkaran berisi 2 garis mendatar sejajar di tengah dengan panah menunjuk kiri (←) di luar]. Dengan aturan serupa, [persegi berisi 2 garis tegak sejajar di tengah dengan panah menunjuk atas (↑) di luar] akan berubah menjadi...",
      "pilihan": [
        "Persegi berisi 3 garis tegak sejajar di tengah dengan panah menunjuk bawah (↓) di luar",
        "Persegi berisi 4 garis tegak sejajar di tengah dengan panah menunjuk bawah (↓) di luar",
        "Persegi berisi 3 garis mendatar sejajar di tengah dengan panah menunjuk bawah (↓) di luar",
        "Persegi berisi 3 garis tegak sejajar di tengah dengan panah menunjuk kanan (→) di luar",
        "Persegi berisi 1 garis tegak di tengah dengan panah menunjuk bawah (↓) di luar"
      ],
      "indeksBenar": 0,
      "explanation": "Aturan transformasinya: bangun utama tetap, jumlah garis sejajar di dalamnya bertambah 1 (dari 2 menjadi 3 garis tegak), dan arah panah berbalik 180° (dari ke atas ↑ menjadi ke bawah ↓).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "sulit",
      "question_text": "Sebuah persegi terbagi oleh garis diagonal dari kiri-bawah ke kanan-atas dengan separuh segitiga kanan-bawah diarsir gelap dan 1 bintang putih (☆) di sudut kiri-atas, berubah menjadi persegi terbagi diagonal kiri-atas ke kanan-bawah dengan separuh segitiga kiri-bawah diarsir gelap dan 1 bintang hitam (★) di sudut kanan-atas. Jika aturan transformasi yang persis sama diterapkan pada [persegi terbagi diagonal kiri-atas ke kanan-bawah, separuh segitiga kanan-atas diarsir gelap, dan 1 bintang hitam (★) di sudut kiri-bawah], gambar hasilnya adalah...",
      "pilihan": [
        "Persegi terbagi diagonal kiri-bawah ke kanan-atas, separuh kiri-atas diarsir gelap, dan 1 bintang putih (☆) di sudut kiri-atas",
        "Persegi terbagi diagonal kiri-bawah ke kanan-atas, separuh segitiga kanan-bawah diarsir gelap, dan 1 bintang putih (☆) di sudut kiri-atas",
        "Persegi terbagi diagonal kiri-atas ke kanan-bawah, separuh segitiga kanan-bawah diarsir gelap, dan 1 bintang putih (☆) di sudut kanan-atas",
        "Persegi terbagi diagonal kiri-bawah ke kanan-atas, separuh segitiga kanan-bawah diarsir gelap, dan 1 bintang hitam (★) di sudut kiri-atas",
        "Persegi terbagi diagonal kiri-bawah ke kanan-atas, separuh segitiga kiri-atas diarsir gelap, dan 1 bintang putih (☆) di sudut kanan-bawah"
      ],
      "indeksBenar": 1,
      "explanation": "Transformasi memutar seluruh persegi 90° searah jarum jam dan membalik warna bintang. Rotasi 90° searah jarum jam mengubah diagonal kiri-atas–kanan-bawah menjadi kiri-bawah–kanan-atas, memindahkan arsiran kanan-atas menjadi kanan-bawah, dan memindahkan bintang di sudut kiri-bawah ke sudut kiri-atas sambil membalik warnanya dari hitam (★) menjadi putih (☆).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "sedang",
      "question_text": "Setiap kartu berikut menampilkan tepat tiga poligon terpisah. Manakah kartu yang TIDAK mengikuti aturan jumlah total sisi yang sama dengan kartu lainnya?\nA: Segitiga (3 sisi), persegi (4 sisi), dan segi tujuh (7 sisi)\nB: Segitiga (3 sisi), segi lima (5 sisi), dan segi enam (6 sisi)\nC: Persegi (4 sisi), persegi (4 sisi), dan segi enam (6 sisi)\nD: Persegi (4 sisi), segi lima (5 sisi), dan segi lima (5 sisi)\nE: Persegi (4 sisi), segi lima (5 sisi), dan segi enam (6 sisi)",
      "pilihan": [
        "Kartu A",
        "Kartu B",
        "Kartu C",
        "Kartu D",
        "Kartu E"
      ],
      "indeksBenar": 4,
      "explanation": "Jumlah total sisi ketiga poligon pada Kartu A (3 + 4 + 7), B (3 + 5 + 6), C (4 + 4 + 6), dan D (4 + 5 + 5) semuanya tepat berjumlah 14 sisi. Hanya Kartu E yang berjumlah 4 + 5 + 6 = 15 sisi.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "sedang",
      "question_text": "Pada lima pelat penunjuk lingkaran bernomor 1 hingga 12 seperti muka jam, terdapat dua ruas garis jari-jari yang mengarah tepat ke dua angka tertentu. Manakah pelat yang sudut antara kedua garisnya BERBEDA dari keempat pelat lainnya?\nA: Garis mengarah tepat ke angka 1 dan angka 5\nB: Garis mengarah tepat ke angka 12 dan angka 3\nC: Garis mengarah tepat ke angka 2 dan angka 5\nD: Garis mengarah tepat ke angka 4 dan angka 7\nE: Garis mengarah tepat ke angka 9 dan angka 12",
      "pilihan": [
        "Pelat A",
        "Pelat B",
        "Pelat C",
        "Pelat D",
        "Pelat E"
      ],
      "indeksBenar": 0,
      "explanation": "Setiap jarak 1 angka pada lingkaran bernomor 1–12 setara dengan 30°. Pada Pelat B, C, D, dan E, selisih kedua angka adalah 3 langkah (membentuk sudut 3 × 30° = 90°). Hanya Pelat A yang berjarak 4 langkah (membentuk sudut 4 × 30° = 120°).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "sulit",
      "question_text": "Lima kisi persegi berukuran 3×3 (baris 1–3 dari atas ke bawah, kolom 1–3 dari kiri ke kanan) masing-masing memuat 3 kotak hitam (■) dan 1 lingkaran hitam (●) yang membentuk huruf L. Empat kisi merupakan hasil rotasi 2D satu sama lain, sedangkan satu kisi merupakan hasil pencerminan. Manakah kisi yang berbeda?\nA: Kotak ■ di (1,1), (2,1), (3,1) dan lingkaran ● di (3,2)\nB: Kotak ■ di (1,3), (2,3), (3,3) dan lingkaran ● di (3,2)\nC: Kotak ■ di (1,1), (1,2), (1,3) dan lingkaran ● di (2,1)\nD: Kotak ■ di (1,3), (2,3), (3,3) dan lingkaran ● di (1,2)\nE: Kotak ■ di (3,1), (3,2), (3,3) dan lingkaran ● di (2,3)",
      "pilihan": [
        "Kisi A",
        "Kisi B",
        "Kisi C",
        "Kisi D",
        "Kisi E"
      ],
      "indeksBenar": 1,
      "explanation": "Jika menelusuri batang 3 kotak ■ dari ujung bebas menuju ujung siku yang menyentuh ●, pada Kisi A (0°), C (90° searah jarum jam), D (180°), dan E (270° searah jarum jam), arah belok ke ● selalu 90° berlawanan arah jarum jam (belok kiri). Pada Kisi B, dari (1,3)→(2,3)→(3,3) menuju (3,2) justru berbelok 90° searah jarum jam (belok kanan), sehingga merupakan hasil pencerminan.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Serial Pola)",
      "difficulty": "sedang",
      "question_text": "Sebuah kisi persegi 3×3 memiliki 8 petak tepi. Amati pola pergerakan dan penambahan petak hitam (■) serta perpindahan lingkaran putih (○) berikut:\nPanel 1: ■ di petak {kiri-atas}; ○ di petak {tengah-kanan}.\nPanel 2: ■ di petak {kiri-atas, tengah-atas}; ○ di petak {kanan-bawah}.\nPanel 3: ■ di petak {kiri-atas, tengah-atas, kanan-atas}; ○ di petak {tengah-bawah}.\nPosisi ■ dan ○ pada Panel 4 berikutnya adalah...",
      "pilihan": [
        "■ di petak {kiri-atas, tengah-atas, kanan-atas, kanan-bawah}; ○ di petak {kiri-bawah}",
        "■ di petak {kiri-atas, tengah-atas, kanan-atas, tengah-kanan}; ○ di petak {kiri-bawah}",
        "■ di petak {tengah-atas, kanan-atas, tengah-kanan}; ○ di petak {kiri-bawah}",
        "■ di petak {kiri-atas, tengah-atas, kanan-atas, tengah-kanan}; ○ di petak {tengah-kiri}",
        "■ di petak {kiri-atas, tengah-atas, kanan-atas, tengah-kanan}; ○ di petak {kanan-bawah}"
      ],
      "indeksBenar": 1,
      "explanation": "Setiap pergantian panel, semua petak hitam ■ yang sudah ada berputar 1 petak searah jarum jam sepanjang tepi kisi lalu ditambahkan 1 petak ■ baru di kiri-atas, sehingga pada Panel 4 petak hitam mengisi {kiri-atas, tengah-atas, kanan-atas, tengah-kanan}. Sementara itu, lingkaran ○ bergerak 1 petak searah jarum jam: tengah-kanan → kanan-bawah → tengah-bawah → kiri-bawah.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Serial Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Serial Pola)",
      "difficulty": "sulit",
      "question_text": "Cermati deret 5 panel dengan satu panel hilang (Panel 4) berikut:\nPanel 1: Bentuk pusat ▲, 1 titik kecil di sisi atas (pukul 12), ★ hitam di pojok kiri-atas.\nPanel 2: Bentuk pusat ■, 1 titik kecil di sisi kanan (pukul 3), ☆ putih di pojok kiri-atas.\nPanel 3: Bentuk pusat ●, 1 titik kecil di sisi bawah (pukul 6), ★ hitam di pojok kiri-atas.\nPanel 4: [ ? ]\nPanel 5: Bentuk pusat ■, 1 titik kecil di sisi atas (pukul 12), ★ hitam di pojok kiri-atas.\nKomposisi yang tepat untuk Panel 4 adalah...",
      "pilihan": [
        "Bentuk pusat ▲, 1 titik kecil di sisi kiri (pukul 9), ★ hitam di pojok kiri-atas",
        "Bentuk pusat ●, 1 titik kecil di sisi kiri (pukul 9), ☆ putih di pojok kiri-atas",
        "Bentuk pusat ▲, 1 titik kecil di sisi kiri (pukul 9), ☆ putih di pojok kiri-atas",
        "Bentuk pusat ■, 1 titik kecil di sisi kanan (pukul 3), ☆ putih di pojok kiri-atas",
        "Bentuk pusat ▲, 1 titik kecil di sisi bawah (pukul 6), ☆ putih di pojok kiri-atas"
      ],
      "indeksBenar": 2,
      "explanation": "Bentuk pusat berulang dengan periode 3 (▲ → ■ → ● → ▲ → ■), yang terkonfirmasi oleh Panel 5 yang kembali ke ■, sehingga Panel 4 pasti ▲. Titik kecil berputar 90° searah jarum jam tiap panel (12 → 3 → 6 → 9 [kiri] → 12). Bintang di pojok kiri-atas berganti warna selang-seling hitam-putih-hitam-putih-hitam, sehingga Panel 4 berwarna putih (☆).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Serial Pola)"
    }
  ],
  [
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sedang",
      "question_text": "REKTOR : UNIVERSITAS = ... : ...",
      "pilihan": [
        "Gubernur : Kota",
        "Bupati : Kabupaten",
        "Kabupaten : Bupati",
        "Menteri : Provinsi",
        "Parlemen : Presiden"
      ],
      "indeksBenar": 1,
      "explanation": "Rektor merupakan pimpinan tertinggi eksekutif di lingkungan universitas, sebagaimana Bupati merupakan kepala daerah (pimpinan eksekutif) pada tingkat kabupaten. Opsi 'Kabupaten : Bupati' berurutan terbalik, sedangkan gubernur memimpin provinsi dan wali kota memimpin kota.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sulit",
      "question_text": "Pasangan kata yang memiliki padanan hubungan paling tepat dengan REBOISASI : PENANAMAN KEMBALI adalah ...",
      "pilihan": [
        "Evakuasi : Pengungsian",
        "Imigrasi : Kepergian ke luar negeri",
        "Inflasi : Penurunan harga",
        "Urbanisasi : Pedesaan",
        "Degradasi : Peningkatan mutu"
      ],
      "indeksBenar": 0,
      "explanation": "Reboisasi bermakna sinonim atau padanan arti dengan penanaman kembali (hutan gundul). Evakuasi memiliki padanan arti yang tepat dengan pengungsian (pemindahan penduduk dari tempat berbahaya ke tempat aman). Keempat opsi lain memaparkan definisi yang keliru atau berlawanan.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "mudah",
      "question_text": "PETA : ATLAS = ... : ...",
      "pilihan": [
        "Ensiklopedia : Istilah",
        "Kamus : Angka",
        "Indeks : Sampul",
        "Biografi : Lukisan",
        "Sinonim : Tesaurus"
      ],
      "indeksBenar": 4,
      "explanation": "Kumpulan peta dihimpun dalam buku rujukan bernama atlas, sebagaimana kumpulan sinonim atau kata yang berkerabat maknanya dihimpun dalam buku rujukan bernama tesaurus. 'Ensiklopedia : Istilah' memiliki urutan terbalik, sedangkan opsi lainnya salah pasangan isi.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Analogi)",
      "difficulty": "sulit",
      "question_text": "BIOLA : GESEK = ... : ...",
      "pilihan": [
        "Gitar : Gesek",
        "Gendang : Tiup",
        "Harpa : Petik",
        "Tiup : Terompet",
        "Piano : Senar"
      ],
      "indeksBenar": 2,
      "explanation": "Hubungan BIOLA : GESEK adalah alat musik beserta teknik/cara memainkannya untuk menghasilkan bunyi (biola dibunyikan dengan cara digesek). Padanan yang tepat adalah Harpa : Petik (harpa dibunyikan dengan cara dipetik). 'Gitar : Gesek' dan 'Gendang : Tiup' salah cara, 'Tiup : Terompet' terbalik arahnya, dan 'Piano : Senar' menyatakan alat beserta komponen dalamnya.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Analogi)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sulit",
      "question_text": "Jika tim pemeriksa menemukan selisih laporan keuangan dan bukti transaksi tidak lengkap, maka pencairan dana tahap kedua ditangguhkan. Diketahui pencairan dana tahap kedua tidak ditangguhkan, padahal bukti transaksi ternyata tidak lengkap. Simpulan yang tepat adalah ...",
      "pilihan": [
        "Tim pemeriksa tetap menemukan selisih laporan keuangan namun menoleransinya.",
        "Bukti transaksi telah dilengkapi sebelum pencairan dana tahap kedua.",
        "Tim pemeriksa tidak menemukan selisih laporan keuangan.",
        "Pencairan dana tahap kedua tetap ditangguhkan sampai laporan lengkap.",
        "Tidak dapat disimpulkan apakah tim pemeriksa menemukan selisih laporan keuangan."
      ],
      "indeksBenar": 2,
      "explanation": "Secara logika formal: (S dan B) -> T. Diketahui ~T dan B bernilai benar. Menurut Modus Tollens, karena T salah maka (S dan B) harus salah. Agar (S dan B) salah padahal B benar, maka S harus bernilai salah. Artinya, tim pemeriksa tidak menemukan selisih laporan keuangan.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sedang",
      "question_text": "Semua peserta yang diperbolehkan memasuki ruang ujian CAT wajib membawa kartu peserta cetak dan kartu identitas asli. Bima hendak mengikuti ujian, tetapi kartu identitas aslinya tertinggal di rumah. Simpulan yang paling tepat adalah ...",
      "pilihan": [
        "Bima diperbolehkan masuk asalkan membawa kartu peserta cetak.",
        "Bima tidak memiliki kartu peserta cetak untuk mengikuti ujian.",
        "Panitia wajib membuatkan kartu identitas baru bagi Bima di lokasi.",
        "Bima tidak diperbolehkan memasuki ruang ujian CAT.",
        "Semua peserta selain Bima membawa kedua kartu tersebut secara lengkap."
      ],
      "indeksBenar": 3,
      "explanation": "Implikasi premis: Diizinkan masuk -> (Membawa kartu peserta DAN Membawa identitas asli). Karena Bima tidak membawa kartu identitas asli, konjungsi syarat tidak terpenuhi. Berdasarkan Modus Tollens, Bima tidak diperbolehkan memasuki ruang ujian CAT.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "mudah",
      "question_text": "Jika seorang pegawai meraih predikat kinerja sangat baik selama dua tahun berturut-turut, ia berhak diusulkan memperoleh penghargaan teladan. Tahun lalu dan tahun ini, Rendra meraih predikat kinerja sangat baik secara berturut-turut. Simpulan yang tepat adalah ...",
      "pilihan": [
        "Rendra pasti langsung ditetapkan sebagai pemenang tunggal penghargaan teladan.",
        "Rendra berhak diusulkan memperoleh penghargaan teladan.",
        "Semua peraih penghargaan teladan merupakan rekan satu divisi dengan Rendra.",
        "Rendra belum berhak diusulkan karena masa kerjanya belum dihitung.",
        "Penghargaan teladan hanya diberikan dua tahun sekali kepada seluruh pegawai."
      ],
      "indeksBenar": 1,
      "explanation": "Syarat (anteseden) berupa perolehan predikat kinerja sangat baik dua tahun berturut-turut telah dipenuhi oleh Rendra. Berdasarkan Modus Ponens, konsekuennya berlaku: Rendra berhak diusulkan memperoleh penghargaan teladan.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Silogisme)",
      "difficulty": "sedang",
      "question_text": "Tidak ada tenaga kontrak yang dapat menduduki jabatan pimpinan tinggi pratama. Sebagian lulusan program magister adalah tenaga kontrak. Simpulan yang tepat adalah ...",
      "pilihan": [
        "Sebagian lulusan program magister tidak dapat menduduki jabatan pimpinan tinggi pratama.",
        "Semua lulusan program magister tidak dapat menduduki jabatan pimpinan tinggi pratama.",
        "Semua tenaga kontrak adalah lulusan program magister.",
        "Sebagian tenaga kontrak dapat menduduki jabatan pimpinan tinggi pratama.",
        "Tidak ada lulusan program magister yang bekerja sebagai pegawai tetap."
      ],
      "indeksBenar": 0,
      "explanation": "Seluruh tenaga kontrak dikecualikan dari jabatan pimpinan tinggi pratama. Karena sebagian lulusan program magister merupakan tenaga kontrak, maka kelompok tersebut tidak dapat menduduki jabatan pimpinan tinggi pratama.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Silogisme)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "mudah",
      "question_text": "Dalam evaluasi kinerja lima pegawai (A, B, C, D, dan E), diketahui bahwa skor B lebih tinggi daripada D, tetapi tidak lebih tinggi daripada A. Skor C lebih rendah daripada D. Skor E lebih tinggi daripada B, tetapi masih berada di bawah A. Tidak ada pegawai yang memperoleh skor sama. Urutan dari skor tertinggi hingga skor terendah adalah ...",
      "pilihan": [
        "A – B – E – D – C",
        "E – A – B – D – C",
        "A – E – D – B – C",
        "A – E – B – C – D",
        "A – E – B – D – C"
      ],
      "indeksBenar": 4,
      "explanation": "Diketahui A > B > D > C, serta A > E > B. Menggabungkan seluruh ketidaksamaan menghasilkan urutan tunggal dari tertinggi ke terendah: A – E – B – D – C.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sulit",
      "question_text": "Sebuah lemari arsip berbentuk bujur sangkar 3 × 3 memiliki sembilan loker (baris atas, tengah, bawah; kolom kiri, tengah, kanan). Loker tengah (baris tengah, kolom tengah) diisi Arsip Keuangan. Loker pojok kiri atas diisi Arsip Kepegawaian. Ketiga loker pada baris paling bawah diisi berturut-turut dari kiri ke kanan oleh Arsip Humas, Arsip Protokol, dan Arsip Rumah Tangga. Arsip Hukum ditempatkan tepat di sebelah kanan Arsip Kepegawaian. Apabila Arsip Perencanaan harus ditempatkan bersebelahan langsung (secara horizontal atau vertikal) dengan Arsip Hukum, sedangkan sisa loker diisi Arsip Pengawasan, di loker manakah Arsip Perencanaan harus ditempatkan?",
      "pilihan": [
        "Baris tengah, kolom kiri",
        "Pojok kanan atas (baris atas, kolom kanan)",
        "Baris tengah, kolom kanan",
        "Tepat di sebelah kiri Arsip Keuangan",
        "Tidak dapat ditempatkan di loker mana pun"
      ],
      "indeksBenar": 1,
      "explanation": "Posisi terisi: (atas, kiri)=Kepegawaian, (atas, tengah)=Hukum, (tengah, tengah)=Keuangan, (bawah, kiri)=Humas, (bawah, tengah)=Protokol, (bawah, kanan)=Rumah Tangga. Loker yang masih kosong hanya (atas, kanan), (tengah, kiri), dan (tengah, kanan). Tetangga horizontal dan vertikal dari Arsip Hukum (atas, tengah) adalah (atas, kiri), (tengah, tengah), dan (atas, kanan). Satu-satunya yang masih kosong adalah pojok kanan atas.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sedang",
      "question_text": "Langit di Kota X dan Kota Y mulai mendung pada waktu yang sama, yakni 45 menit yang lalu. Dua puluh menit yang lalu, Kota Z sudah mulai turun hujan. Lima belas menit setelah saat ini, Kota X dan Kota Y mulai hujan secara bersamaan. Jika selang waktu antara awal mendung dan turunnya hujan di setiap kota sama lamanya, kapan Kota Z mulai mengalami mendung?",
      "pilihan": [
        "25 menit sebelum Kota X dan Kota Y mulai mendung",
        "45 menit sebelum Kota X dan Kota Y mulai mendung",
        "35 menit sebelum Kota X dan Kota Y mulai mendung",
        "60 menit sebelum Kota X dan Kota Y mulai mendung",
        "45 menit sebelum Kota Z mulai turun hujan"
      ],
      "indeksBenar": 2,
      "explanation": "Tetapkan waktu saat ini sebagai menit ke-0. Kota X dan Kota Y mendung pada menit ke-(-45) dan hujan pada menit ke-(+15), sehingga jeda dari mendung menuju hujan di tiap kota adalah 15 - (-45) = 60 menit. Karena Kota Z hujan pada menit ke-(-20), maka Kota Z mulai mendung pada menit ke-(-20 - 60) = menit ke-(-80). Selisih waktu antara Kota Z mendung (-80) dan Kota X/Y mendung (-45) adalah 35 menit sebelum Kota X dan Kota Y mulai mendung.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Verbal (Penalaran Analitis)",
      "difficulty": "sulit",
      "question_text": "Pimpinan unit kerja akan memilih satu dari tiga kandidat (Arif, Bima, dan Cakra) untuk menjadi ketua tim berdasarkan 4 aspek dengan sistem skor peringkat tiap aspek: peringkat ke-1 mendapat 3 poin, peringkat ke-2 mendapat 2 poin, dan peringkat ke-3 mendapat 1 poin (tidak ada nilai imbang). Diketahui: (1) Bima menempati peringkat ke-1 pada aspek integritas, kepemimpinan, dan ketelitian; (2) Cakra menempati peringkat ke-2 pada aspek kepemimpinan dan kecepatan, serta selalu di peringkat ke-3 pada aspek lainnya; (3) Arif menempati peringkat ke-1 pada aspek kecepatan, dan pada aspek yang tidak ditempati Bima atau Cakra ia mengisi peringkat tersisa. Berdasarkan total poin keempat aspek tersebut, bagaimanakah urutan kandidat dari total poin tertinggi ke terendah?",
      "pilihan": [
        "Bima (10 poin) – Cakra (8 poin) – Arif (6 poin)",
        "Arif (10 poin) – Bima (8 poin) – Cakra (6 poin)",
        "Bima (9 poin) – Arif (9 poin) – Cakra (6 poin)",
        "Bima (10 poin) – Arif (8 poin) – Cakra (6 poin)",
        "Cakra (9 poin) – Bima (8 poin) – Arif (7 poin)"
      ],
      "indeksBenar": 3,
      "explanation": "Rincian peringkat (poin): Integritas: Bima (3), Arif (2), Cakra (1). Kepemimpinan: Bima (3), Cakra (2), Arif (1). Ketelitian: Bima (3), Arif (2), Cakra (1). Kecepatan: Arif (3), Cakra (2), Bima (1). Total poin: Bima = 3+3+3+1 = 10; Arif = 2+1+2+3 = 8; Cakra = 1+2+1+2 = 6.",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024 — TIU Kemampuan Verbal (Penalaran Analitis)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "mudah",
      "question_text": "Nilai dari 5,04 ÷ 0,08 + 1,25 × 24 adalah...",
      "pilihan": [
        "87",
        "93",
        "90",
        "96",
        "103"
      ],
      "indeksBenar": 1,
      "explanation": "Kerjakan pembagian dan perkalian secara terpisah: 5,04 ÷ 0,08 = 504 ÷ 8 = 63. Lalu 1,25 × 24 = (5/4) × 24 = 30. Jumlahkan keduanya: 63 + 30 = 93.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sedang",
      "question_text": "Nilai dari 0,4 × {(2⅖ × 35) - (135 ÷ 2,25)} adalah...",
      "pilihan": [
        "8,4",
        "9,2",
        "9,6",
        "10,4",
        "12,4"
      ],
      "indeksBenar": 2,
      "explanation": "Ubah pecahan campuran dan desimal ke bentuk sederhana: 2⅖ = 12/5, sehingga (12/5) × 35 = 12 × 7 = 84. Untuk 135 ÷ 2,25 = 135 ÷ (9/4) = 135 × (4/9) = 15 × 4 = 60. Maka hasil akhirnya 0,4 × (84 - 60) = 0,4 × 24 = 9,6.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sedang",
      "question_text": "Diketahui p = 40% dari (7³ - 3³) dan q = 20% dari (6³ + 4²). Nilai dari p - q adalah...",
      "pilihan": [
        "72",
        "76",
        "78",
        "80",
        "84"
      ],
      "indeksBenar": 3,
      "explanation": "Hitung p = 0,4 × (343 - 27) = 0,4 × 316 = 126,4. Hitung q = 0,2 × (216 + 16) = 0,2 × 232 = 46,4. Maka p - q = 126,4 - 46,4 = 80.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Berhitung Cepat)",
      "difficulty": "sulit",
      "question_text": "Jika diketahui 4ⁿ = 12, maka nilai dari 4^(n + 2) - 4^(n - 1) adalah...",
      "pilihan": [
        "169",
        "177",
        "185",
        "186",
        "189"
      ],
      "indeksBenar": 4,
      "explanation": "Gunakan sifat perpangkatan: 4^(n + 2) = 4ⁿ × 4² = 12 × 16 = 192, dan 4^(n - 1) = 4ⁿ ÷ 4 = 12 ÷ 4 = 3. Jadi 4^(n + 2) - 4^(n - 1) = 192 - 3 = 189.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Berhitung Cepat)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "mudah",
      "question_text": "Bilangan yang tepat untuk melengkapi deret 14, 16, 19, 24, 31, 42, ... adalah...",
      "pilihan": [
        "53",
        "55",
        "54",
        "57",
        "59"
      ],
      "indeksBenar": 1,
      "explanation": "Selisih antar-suku merupakan barisan bilangan prima berurutan: +2, +3, +5, +7, +11. Bilangan prima setelah 11 adalah 13, sehingga suku berikutnya adalah 42 + 13 = 55.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sedang",
      "question_text": "Lanjutkan barisan bilangan desimal berikut: 24,5; 11,2; 21,8; 14,6; 19,1; 18,0; ...; ...",
      "pilihan": [
        "16,7 dan 21,4",
        "16,4 dan 21,6",
        "16,4 dan 21,4",
        "17,4 dan 20,4",
        "15,4 dan 21,4"
      ],
      "indeksBenar": 2,
      "explanation": "Terdapat dua larik berselang-seling: larik ganjil (24,5; 21,8; 19,1) selalu berkurang 2,7 sehingga berikutnya 19,1 - 2,7 = 16,4; larik genap (11,2; 14,6; 18,0) selalu bertambah 3,4 sehingga berikutnya 18,0 + 3,4 = 21,4.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sedang",
      "question_text": "Bilangan yang tepat untuk melengkapi deret 0, 6, 24, 60, 120, 210, ... adalah...",
      "pilihan": [
        "300",
        "320",
        "330",
        "336",
        "342"
      ],
      "indeksBenar": 3,
      "explanation": "Pola dapat dilihat dari rumus n³ - n untuk n = 1, 2, 3, 4, 5, 6 (yakni 0, 6, 24, 60, 120, 210), atau melalui selisih bertingkat: tingkat-1 (+6, +18, +36, +60, +90) dan tingkat-2 (+12, +18, +24, +30, berikutnya +36). Maka suku ke-7 adalah 210 + (90 + 36) = 336 (atau 7³ - 7 = 343 - 7 = 336).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Deret Angka)",
      "difficulty": "sulit",
      "question_text": "Suku berikutnya pada barisan bertingkat 3, 4, 9, 28, 113, ... adalah...",
      "pilihan": [
        "453",
        "546",
        "561",
        "565",
        "566"
      ],
      "indeksBenar": 4,
      "explanation": "Setiap suku dihasilkan dari pola perkalian berurutan lalu ditambah 1: (3 × 1) + 1 = 4; (4 × 2) + 1 = 9; (9 × 3) + 1 = 28; (28 × 4) + 1 = 113. Langkah berikutnya adalah (113 × 5) + 1 = 565 + 1 = 566.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Deret Angka)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "sulit",
      "question_text": "Mesin cetak A berkecepatan konstan 45 lembar per menit digunakan mencetak 1.350 lembar dokumen selama P menit. Mesin cetak B berkecepatan konstan 50 lembar per menit digunakan mencetak 1.600 lembar dokumen selama Q menit. Hubungan antara P dan Q adalah...",
      "pilihan": [
        "P > Q",
        "P < Q",
        "P = Q",
        "P - Q = 2",
        "Hubungan P dan Q tidak dapat ditentukan"
      ],
      "indeksBenar": 1,
      "explanation": "Waktu cetak mesin A adalah P = 1.350 ÷ 45 = 30 menit. Waktu cetak mesin B adalah Q = 1.600 ÷ 50 = 32 menit. Karena 30 < 32, maka P < Q.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "sulit",
      "question_text": "Diketahui x > 0 dan y < 0. Jika P = x² + y² dan Q = (x + y)², maka hubungan kuantitatif antara P dan Q yang pasti benar adalah...",
      "pilihan": [
        "P < Q",
        "P = Q",
        "P > Q",
        "P + Q = 0",
        "Hubungan P dan Q tidak dapat ditentukan"
      ],
      "indeksBenar": 2,
      "explanation": "Uraikan Q = x² + 2xy + y². Selisihnya P - Q = (x² + y²) - (x² + 2xy + y²) = -2xy. Karena x positif dan y negatif, maka xy < 0 sehingga -2xy > 0. Akibatnya P > Q selalu terpenuhi.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Perbandingan Kuantitatif)",
      "difficulty": "sulit",
      "question_text": "Dua bilangan positif x dan y memenuhi perbandingan x : y = 3 : 4. Jika P = (2x + y) / (x + 2y) dan Q = 1, maka pernyataan yang benar adalah...",
      "pilihan": [
        "P > Q",
        "P = Q",
        "P = 2Q",
        "Hubungan P dan Q tidak dapat ditentukan",
        "P < Q"
      ],
      "indeksBenar": 4,
      "explanation": "Misalkan x = 3k dan y = 4k dengan k > 0. Substitusikan ke P: P = (2(3k) + 4k) / (3k + 2(4k)) = 10k / 11k = 10/11. Karena 10/11 < 1, maka P < Q.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Perbandingan Kuantitatif)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sulit",
      "question_text": "Bagian perlengkapan membeli 4 rim kertas HVS dan 3 pak map arsip seharga Rp315.000. Di toko yang sama, unit lain membeli 2 rim kertas HVS dan 5 pak map arsip seharga Rp245.000. Jika unit ketiga membeli 3 rim kertas HVS dan 2 pak map arsip, berapa rupiah total biaya yang harus dibayar?",
      "pilihan": [
        "Rp215.000",
        "Rp230.000",
        "Rp225.000",
        "Rp240.000",
        "Rp255.000"
      ],
      "indeksBenar": 1,
      "explanation": "Misalkan harga kertas HVS per rim = k dan map arsip per pak = m. Dari 4k + 3m = 315.000 dan 2k + 5m = 245.000 (kalikan 2 menjadi 4k + 10m = 490.000), eliminasi k menghasilkan 7m = 175.000 → m = Rp25.000. Substitusi ke persamaan pertama: 4k + 75.000 = 315.000 → k = Rp60.000. Biaya pembelian unit ketiga = 3(60.000) + 2(25.000) = Rp230.000.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sulit",
      "question_text": "Koperasi kuliner kantor menjual rata-rata 500 porsi paket makan siang per hari dengan harga normal Rp24.000 per porsi. Untuk meningkatkan penjualan, pengelola memberikan potongan harga 15% untuk setiap porsi. Jika pajak final UMKM sebesar 0,5% dikenakan atas total omzet selama 30 hari penuh, berapakah pajak yang harus dibayarkan dalam sebulan?",
      "pilihan": [
        "Rp1.440.000",
        "Rp1.500.000",
        "Rp1.530.000",
        "Rp1.620.000",
        "Rp1.800.000"
      ],
      "indeksBenar": 2,
      "explanation": "Harga per porsi setelah diskon 15% = 85% × Rp24.000 = Rp20.400. Omzet harian = 500 × Rp20.400 = Rp10.200.000. Omzet 30 hari = 30 × Rp10.200.000 = Rp306.000.000. Pajak UMKM 0,5% = 0,005 × Rp306.000.000 = Rp1.530.000.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sulit",
      "question_text": "Dari 8 orang pegawai berprestasi akan dipilih secara acak 3 orang untuk menduduki posisi berbeda, yakni ketua tim, sekretaris, dan bendahara tanpa perangkapan jabatan. Berapa banyak susunan kepengurusan berbeda yang dapat dibentuk?",
      "pilihan": [
        "56 susunan",
        "168 susunan",
        "312 susunan",
        "336 susunan",
        "504 susunan"
      ],
      "indeksBenar": 3,
      "explanation": "Karena jabatan berbeda memperhatikan urutan, gunakan permutasi P(8, 3) = 8 × 7 × 6 = 336 susunan berbeda.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Numerik (Soal Cerita)",
      "difficulty": "sulit",
      "question_text": "Sebuah wadah penampung berbentuk kerucut mempunyai luas permukaan total (alas dan selimut) sebesar 704 cm² dan jari-jari alas 7 cm (gunakan π = 22/7). Berapa cm³ volume kerucut tersebut?",
      "pilihan": [
        "1.056 cm³",
        "1.144 cm³",
        "1.408 cm³",
        "1.540 cm³",
        "1.232 cm³"
      ],
      "indeksBenar": 4,
      "explanation": "Luas permukaan kerucut L = πr(r + s) → 704 = (22/7) × 7 × (7 + s) → 704 = 22(7 + s) → 7 + s = 32 → garis pelukis s = 25 cm. Tinggi kerucut t = √(s² - r²) = √(25² - 7²) = √576 = 24 cm. Volume = (1/3) × π × r² × t = (1/3) × (22/7) × 49 × 24 = 22 × 7 × 8 = 1.232 cm³.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Soal Cerita)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "sulit",
      "question_text": "Disediakan dua keping bangun datar terpisah yang tidak boleh dipotong atau ditumpuk: (1) satu persegi panjang berukuran 6 cm × 4 cm, dan (2) satu segitiga siku-siku dengan panjang kedua sisi siku-sikunya 3 cm dan 4 cm. Apabila tepat satu sisi sepanjang 4 cm dari kedua bangun tersebut dihimpitkan sempurna menjadi bangun datar baru yang utuh, bangun apakah yang terbentuk?",
      "pilihan": [
        "Persegi panjang berukuran 9 cm × 4 cm",
        "Trapesium sama kaki dengan panjang sisi sejajar 6 cm dan 12 cm serta tinggi 4 cm",
        "Trapesium siku-siku dengan panjang sisi sejajar 6 cm dan 9 cm serta tinggi 4 cm",
        "Segitiga siku-siku dengan alas 9 cm dan tinggi 4 cm",
        "Jajaran genjang dengan panjang alas 9 cm dan tinggi 4 cm"
      ],
      "indeksBenar": 2,
      "explanation": "Saat sisi tegak 4 cm pada segitiga siku-siku menempel pada sisi lebar 4 cm persegi panjang, sisi alasnya membentuk satu garis lurus berpanjang 6 + 3 = 9 cm yang sejajar dengan sisi atas sepanjang 6 cm, sementara sisi di ujung lainnya tetap tegak lurus (siku-siku) setinggi 4 cm dan sisi satunya miring. Hasilnya tepat membentuk trapesium siku-siku.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "sulit",
      "question_text": "Perhatikan analogi penghapusan bingkai berikut: [Bingkai persegi luar berisi 1 panah menghadap atas (↑)] berubah menjadi [2 panah sejajar menghadap kanan (→ →) tanpa bingkai persegi]. Mengikuti pola perubahan yang identik, [Bingkai segitiga luar berisi 1 panah menghadap kanan (→)] berubah menjadi...",
      "pilihan": [
        "2 panah sejajar menghadap kiri (← ←) tanpa bingkai segitiga",
        "2 panah sejajar menghadap atas (↑ ↑) dengan tetap memakai bingkai segitiga",
        "1 panah menghadap bawah (↓) tanpa bingkai segitiga",
        "2 panah sejajar menghadap bawah (↓ ↓) tanpa bingkai segitiga",
        "2 panah sejajar menghadap bawah (↓ ↓) di dalam bingkai persegi"
      ],
      "indeksBenar": 3,
      "explanation": "Ada tiga transformasi: (1) bingkai poligon luar dihapus seluruhnya, (2) jumlah panah di dalam digandakan dari 1 menjadi 2 buah sejajar, dan (3) arah panah diputar 90° searah jarum jam (dari ↑ ke →, sehingga → menjadi ↓).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Analogi Pola)",
      "difficulty": "sulit",
      "question_text": "Sebuah jaring-jaring kubus berbentuk salib memiliki baris tengah horizontal berisi 3 persegi (Kiri: ▲, Tengah: □, Kanan: ★), 1 persegi tepat di atas Tengah (bermotif ●), dan 2 persegi berurutan ke bawah tepat di bawah Tengah (Bawah-1: ◇, lalu paling bawah Bawah-2: ■). Jika jaring-jaring dilipat ke atas sehingga semua motif berada di permukaan luar kubus, dengan persegi □ menjadi alas bawah dan persegi ◇ menghadap tepat ke depan (arah pengamat), susunan motif pada sisi ATAS, sisi KIRI, dan sisi KANAN kubus secara berturut-turut adalah...",
      "pilihan": [
        "Sisi atas ●, sisi kiri ▲, dan sisi kanan ★",
        "Sisi atas ■, sisi kiri ★, dan sisi kanan ▲",
        "Sisi atas ●, sisi kiri ★, dan sisi kanan ▲",
        "Sisi atas ◇, sisi kiri ▲, dan sisi kanan ★",
        "Sisi atas ■, sisi kiri ▲, dan sisi kanan ★"
      ],
      "indeksBenar": 4,
      "explanation": "Dengan □ di alas dan ◇ dilipat tegak menghadap ke depan pengamat: Bawah-2 (■) terlipat menjadi tutup atas berhadapan dengan □; sayap kiri (▲) terlipat menjadi sisi kiri pengamat; sayap kanan (★) terlipat menjadi sisi kanan pengamat; dan ● menjadi sisi belakang.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Analogi Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "sulit",
      "question_text": "Lima rangkaian 6 petak persegi berikut direncanakan untuk dilipat membentuk sebuah kubus utuh. Manakah rangkaian yang TIDAK DAPAT dilipat menjadi kubus (bukan jaring-jaring kubus yang sah)?\nA: Baris 1 memuat petak kolom 2; Baris 2 memuat petak kolom 1, 2, 3, 4; Baris 3 memuat petak kolom 2\nB: Baris 1 memuat petak kolom 1, 2; Baris 2 memuat petak kolom 2, 3; Baris 3 memuat petak kolom 3, 4\nC: Baris 1 memuat petak kolom 1, 2; Baris 2 memuat petak kolom 1, 2; Baris 3 memuat petak kolom 2, 3\nD: Baris 1 memuat petak kolom 1; Baris 2 memuat petak kolom 1, 2, 3, 4; Baris 3 memuat petak kolom 4\nE: Baris 1 memuat petak kolom 1, 2, 3; Baris 2 memuat petak kolom 3, 4, 5",
      "pilihan": [
        "Rangkaian A",
        "Rangkaian B",
        "Rangkaian C",
        "Rangkaian D",
        "Rangkaian E"
      ],
      "indeksBenar": 2,
      "explanation": "Rangkaian A (bentuk salib), B (bentuk tangga 2-2-2), D (pola Z 1-4-1), dan E (pola 3-3) semuanya merupakan jaring-jaring kubus yang sah. Rangkaian C mengandung blok persegi 2×2 pada petak (1,1), (1,2), (2,1), (2,2), yang membuat empat sisi bertemu di satu titik sudut sehingga mustahil membentuk kubus.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "sulit",
      "question_text": "Amati lima komposisi poligon dan garis tegak di sebelah kanannya berikut. Manakah komposisi yang melanggar pola keselarasan jumlah sisi, warna isi, dan jumlah garis luar?\nA: Segitiga (3 sisi) terisi warna hitam disertai 1 garis tegak di sebelah kanan\nB: Persegi (4 sisi) kosong berwarna putih disertai 2 garis tegak di sebelah kanan\nC: Segi lima (5 sisi) terisi warna hitam disertai 3 garis tegak di sebelah kanan\nD: Segi enam (6 sisi) terisi warna hitam disertai 4 garis tegak di sebelah kanan\nE: Segi tujuh (7 sisi) terisi warna hitam disertai 5 garis tegak di sebelah kanan",
      "pilihan": [
        "Komposisi A",
        "Komposisi B",
        "Komposisi C",
        "Komposisi D",
        "Komposisi E"
      ],
      "indeksBenar": 3,
      "explanation": "Aturan yang berlaku pada empat komposisi lainnya adalah: (1) jumlah garis tegak di luar sama dengan jumlah sisi dikurangi dua (n - 2), dan (2) poligon bersisi ganjil terisi warna hitam, sedangkan poligon bersisi genap kosong putih. Pada Komposisi D, segi enam memiliki jumlah sisi genap (6) namun justru terisi warna hitam.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Ketidaksamaan Pola)",
      "difficulty": "sulit",
      "question_text": "Pada lima bingkai lingkaran berpenanda arah kompas berikut, titik hitam (●) diletakkan di tepi lingkaran dan sebuah panah diletakkan tepat di sebelahnya sejajar garis singgung tepi. Manakah bingkai yang arah panahnya BERBEDA pola dari keempat bingkai lainnya?\nA: Titik ● di sisi Utara (atas) dengan panah mengarah ke Timur (→)\nB: Titik ● di sisi Timur (kanan) dengan panah mengarah ke Selatan (↓)\nC: Titik ● di sisi Selatan (bawah) dengan panah mengarah ke Barat (←)\nD: Titik ● di sisi Timur Laut (kanan-atas) dengan panah mengarah ke Tenggara (↘)\nE: Titik ● di sisi Barat (kiri) dengan panah mengarah ke Selatan (↓)",
      "pilihan": [
        "Bingkai A",
        "Bingkai B",
        "Bingkai C",
        "Bingkai D",
        "Bingkai E"
      ],
      "indeksBenar": 4,
      "explanation": "Pada Bingkai A, B, C, dan D, arah panah selalu bergerak menyusuri keliling lingkaran searah jarum jam (Utara → Timur, Timur → Selatan, Selatan → Barat, Timur Laut → Tenggara). Hanya Bingkai E yang mengarah ke Selatan dari sisi Barat, yang berarti berputar berlawanan arah jarum jam (seharusnya ke Utara ↑).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Ketidaksamaan Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Serial Pola)",
      "difficulty": "sulit",
      "question_text": "Pada matriks 3×3 berikut, setiap gambar tersusun dari kombinasi ruas garis tepi bingkai persegi (Atas, Kanan, Bawah, Kiri). Gambar pada Kolom 3 di setiap baris dihasilkan dari penggabungan Kolom 1 dan Kolom 2 dengan aturan bahwa ruas garis yang muncul sama pada kedua kolom akan saling menghapus:\nBaris 1: Kolom 1 {Atas, Kanan, Bawah} dipadukan Kolom 2 {Kanan, Bawah, Kiri} → Kolom 3 {Atas, Kiri}.\nBaris 2: Kolom 1 {Atas, Bawah} dipadukan Kolom 2 {Atas, Kanan} → Kolom 3 {Kanan, Bawah}.\nBaris 3: Kolom 1 {Atas, Kanan, Kiri} dipadukan Kolom 2 {Kiri, Bawah} → Kolom 3 menghasilkan...",
      "pilihan": [
        "{Atas, Kanan, Bawah, Kiri} (persegi tertutup penuh)",
        "{Kiri} (hanya garis sisi kiri)",
        "{Atas, Bawah} (dua garis mendatar sejajar)",
        "{Atas, Kanan, Bawah} (persegi terbuka di sisi kiri)",
        "{Atas, Kiri, Bawah} (persegi terbuka di sisi kanan)"
      ],
      "indeksBenar": 3,
      "explanation": "Gunakan logika peniadaan elemen kembar (XOR): pada Baris 3, ruas Kiri muncul di Kolom 1 maupun Kolom 2 sehingga saling menghapus. Ruas yang tersisa (hanya muncul di salah satu kolom) adalah Atas (dari Kolom 1), Kanan (dari Kolom 1), dan Bawah (dari Kolom 2), membentuk bangun persegi terbuka di sisi kiri.",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Serial Pola)"
    },
    {
      "sub_topic": "Kemampuan Figural (Serial Pola)",
      "difficulty": "sulit",
      "question_text": "Amati perubahan 4 panel berurutan pada bingkai persegi berikut:\nPanel 1: Panah mengarah keluar di tengah sisi atas (↑), 1 kotak ■ di sudut kiri-atas, dan ◆ hitam di pusat.\nPanel 2: Panah mengarah masuk di tengah sisi kiri (→), 2 kotak ■ di sudut kanan-atas, dan ◇ putih di pusat.\nPanel 3: Panah mengarah keluar di tengah sisi bawah (↓), 3 kotak ■ di sudut kanan-bawah, dan ◆ hitam di pusat.\nPanel 4: Panah mengarah masuk di tengah sisi kanan (←), 4 kotak ■ di sudut kiri-bawah, dan ◇ putih di pusat.\nKomposisi pada Panel 5 berikutnya adalah...",
      "pilihan": [
        "Panah mengarah masuk di tengah sisi atas (↓), 5 kotak ■ di sudut kiri-atas, dan ◆ hitam di pusat",
        "Panah mengarah keluar di tengah sisi atas (↑), 5 kotak ■ di sudut kanan-atas, dan ◆ hitam di pusat",
        "Panah mengarah keluar di tengah sisi atas (↑), 5 kotak ■ di sudut kiri-atas, dan ◇ putih di pusat",
        "Panah mengarah keluar di tengah sisi kiri (←), 5 kotak ■ di sudut kiri-atas, dan ◆ hitam di pusat",
        "Panah mengarah keluar di tengah sisi atas (↑), 5 kotak ■ di sudut kiri-atas, dan ◆ hitam di pusat"
      ],
      "indeksBenar": 4,
      "explanation": "Terdapat empat pola serentak: (1) posisi panah berpindah 90° berlawanan jarum jam pada sisi bingkai (atas → kiri → bawah → kanan → kembali ke atas) dengan orientasi bergantian keluar-masuk-keluar-masuk-keluar (sehingga Panel 5 mengarah keluar ↑); (2) sudut kotak ■ berpindah 90° searah jarum jam (kiri-atas → kanan-atas → kanan-bawah → kiri-bawah → kembali ke kiri-atas); (3) jumlah kotak ■ bertambah 1 tiap panel menjadi 5 kotak; dan (4) belah ketupat di pusat bergantian warna hitam-putih-hitam-putih-hitam (◆).",
      "source_reference": "Kisi-Kisi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Figural (Serial Pola)"
    }
  ]
];
