/**
 * Bank Soal TKP (Tes Karakteristik Pribadi) Terkurasi — LOLOS CPNS.
 * Berisi 90 butir soal unik (45 untuk Paket Perdana & 45 untuk Paket Intensif/Terpadu),
 * mencakup seluruh 6 kisi-kisi resmi Kepmenpan-RB Nomor 321 Tahun 2024:
 * Pelayanan Publik, Jejaring Kerja, Sosial Budaya, Teknologi Informasi dan Komunikasi (TIK),
 * Profesionalisme, serta Anti Radikalisme.
 * Setiap butir memiliki bobot 1–5 yang terdistribusi acak agar tidak dapat ditebak dari posisi huruf.
 */

export interface DefinisiOpsiTKP {
  teks: string;
  skor: 1 | 2 | 3 | 4 | 5;
}

export interface DefinisiButirTKP {
  sub_topic: string;
  difficulty: "mudah" | "sedang" | "sulit";
  question_text: string;
  pilihan: [
    DefinisiOpsiTKP,
    DefinisiOpsiTKP,
    DefinisiOpsiTKP,
    DefinisiOpsiTKP,
    DefinisiOpsiTKP,
  ];
  explanation: string;
  source_reference: string;
}

export const BANK_SOAL_TKP_SET_1: DefinisiButirTKP[] = [
  // 1-8: Pelayanan Publik (8 butir)
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "mudah",
    question_text:
      "Seorang warga lanjut usia kebingungan mengisi formulir pendaftaran layanan daring di loket kantor Anda sementara antrean di belakangnya mulai panjang. Sikap Anda yang paling tepat adalah...",
    pilihan: [
      {
        teks: "Memintanya pulang terlebih dahulu agar mempelajari panduan bersama anggota keluarga muda.",
        skor: 2,
      },
      {
        teks: "Mengabaikan kebingungannya dan memanggil nomor antrean berikutnya supaya tidak terhambat.",
        skor: 1,
      },
      {
        teks: "Memandunya mengisi poin penting secara ramah dan singkat, serta berkoordinasi dengan petugas pendamping jika diperlukan.",
        skor: 5,
      },
      {
        teks: "Memberinya brosur tertulis dan memintanya membaca sendiri di ruang tunggu.",
        skor: 3,
      },
      {
        teks: "Membantunya mengisi seluruh data sambil meminta warga di antrean belakang bersabar sejenak.",
        skor: 4,
      },
    ],
    explanation:
      "Pelayanan publik yang prima (BerAKHLAK — Berorientasi Pelayanan) mengutamakan bantuan ramah bagi kelompok rentan sambil menjaga kelancaran antrean melalui koordinasi petugas.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "sedang",
    question_text:
      "Pemohon izin usaha mengadu dengan nada tinggi karena pengajuannya tertunda akibat berkas unggahan tidak terbaca sistem. Padahal, jam pelayanan loket tinggal 15 menit lagi. Respons Anda adalah...",
    pilihan: [
      {
        teks: "Menyuruhnya kembali keesokan hari karena waktu pelayanan hampir habis.",
        skor: 2,
      },
      {
        teks: "Menenangkan pemohon dengan empati, memeriksa berkas yang bermasalah saat itu juga, dan memandu unggah ulang sesuai SOP.",
        skor: 5,
      },
      {
        teks: "Membalas dengan nada tegas bahwa kesalahan format file sepenuhnya tanggung jawab pemohon.",
        skor: 1,
      },
      {
        teks: "Mencatat nomor teleponnya lalu menjanjikan informasi lanjutan tanpa memeriksa penyebab teknis.",
        skor: 3,
      },
      {
        teks: "Mendengarkan keluhannya dengan sabar dan menjelaskan prosedur pengunggahan ulang untuk diproses pada antrean pagi.",
        skor: 4,
      },
    ],
    explanation:
      "Sikap solutif, empatik, dan segera menuntaskan akar masalah tanpa menyalahkan masyarakat merupakan standar tertinggi pelayanan publik.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "sedang",
    question_text:
      "Anda mendapati aturan standar pelayanan baru instansi ternyata menimbulkan kebingungan bagi pemohon daerah terpencil karena istilah teknis yang rumit. Langkah paling konstruktif yang Anda ambil adalah...",
    pilihan: [
      {
        teks: "Tetap menjalankan aturan apa adanya karena sudah ditandatangani pimpinan.",
        skor: 2,
      },
      {
        teks: "Menjelaskan langsung maksud formulir kepada pemohon yang bertanya dan mengusulkan penyederhanaan infografis panduan kepada atasan.",
        skor: 5,
      },
      {
        teks: "Menyampaikan keluhan masyarakat tersebut saat rapat evaluasi triwulan mendatang.",
        skor: 3,
      },
      {
        teks: "Membantu menerjemahkan istilah secara lisan kepada pemohon namun tidak mencatat kendala tersebut untuk perbaikan sistem.",
        skor: 4,
      },
      {
        teks: "Meminta pemohon mencari sendiri arti istilah teknis tersebut di laman kementerian.",
        skor: 1,
      },
    ],
    explanation:
      "Selain membantu pemohon seketika, ASN teladan proaktif memberikan masukan perbaikan berkesinambungan (continuous improvement) kepada pimpinan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "sedang",
    question_text:
      "Seorang kerabat dekat datang ke ruang layanan Anda dan meminta berkas administrasinya didahulukan melewati antrean reguler agar cepat selesai. Sikap Anda adalah...",
    pilihan: [
      {
        teks: "Membantu memproses di sela istirahat tanpa mencantumkan nomor antrean.",
        skor: 2,
      },
      {
        teks: "Menolak secara halus dan tegas, menjelaskan bahwa seluruh pemohon diperlakukan setara sesuai urutan antrean resmi.",
        skor: 5,
      },
      {
        teks: "Memintanya menunggu di ruang tamu kantor sampai jam layanan umum tutup.",
        skor: 3,
      },
      {
        teks: "Menyetujui permintaannya demi menjaga hubungan kekeluargaan asalkan berkasnya lengkap.",
        skor: 1,
      },
      {
        teks: "Mempersilakannya mengambil nomor antrean reguler namun tetap mengecek kelengkapan berkasnya lebih awal secara informal.",
        skor: 4,
      },
    ],
    explanation:
      "Prinsip keadilan dan anti-kolusi mewajibkan penolakan perlakuan istimewa berbasis relasi pribadi dengan tetap menjaga etika komunikasi yang santun.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "mudah",
    question_text:
      "Saat melayani penyandang disabilitas tunarungu di meja informasi, komunikasi lisan terhambat karena tidak tersedia penerjemah bahasa isyarat di tempat. Tindakan Anda...",
    pilihan: [
      {
        teks: "Meminta penyandang disabilitas tersebut datang lagi bersama pendamping yang bisa bicara.",
        skor: 2,
      },
      {
        teks: "Berbicara sangat keras agar gerakan bibir Anda mudah dibaca olehnya.",
        skor: 3,
      },
      {
        teks: "Menyiapkan alat tulis atau papan ketik gawai untuk berkomunikasi secara jelas, sabar, dan ramah hingga keperluannya tuntas.",
        skor: 5,
      },
      {
        teks: "Mengalihkan layanan kepadanya ke loket lain agar petugas lain yang menanganinya.",
        skor: 1,
      },
      {
        teks: "Menggunakan isyarat tangan sederhana sambil menunjukkan bagan alur layanan di dinding.",
        skor: 4,
      },
    ],
    explanation:
      "Layanan publik inklusif memanfaatkan media komunikasi alternatif tertulis atau digital secara cepat dan penuh penghormatan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "sulit",
    question_text:
      "Sistem antrean elektronik kantor mengalami gangguan jaringan selama 30 menit saat ruang tunggu penuh sesak. Sebagai koordinator loket layanan, apa keputusan Anda?",
    pilihan: [
      {
        teks: "Mengumumkan layanan ditunda total sampai jaringan internet pulih kembali.",
        skor: 1,
      },
      {
        teks: "Menunggu tim IT memperbaiki jaringan sambil meminta masyarakat duduk dengan tenang.",
        skor: 2,
      },
      {
        teks: "Segera mengaktifkan mekanisme pencatatan antrean manual sementara agar layanan tetap berjalan tertib sembari memantau perbaikan IT.",
        skor: 5,
      },
      {
        teks: "Menerima verifikasi berkas fisik tanpa mencatat urutan antrean terlebih dahulu.",
        skor: 3,
      },
      {
        teks: "Mengalihkan sebagian pemohon ke layanan pengaduan daring agar kerumunan berkurang.",
        skor: 4,
      },
    ],
    explanation:
      "Keberlanjutan layanan publik menuntut rencana kontingensi (pencatatan manual teratur) sehingga hak warga tetap terlayani tanpa kekacauan urutan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "sedang",
    question_text:
      "Seorang pengguna layanan mengucapkan terima kasih dengan menyerahkan amplop berisi uang tunai karena merasa terbantu dengan kecepatan pelayanan Anda. Sikap Anda yang paling berintegritas adalah...",
    pilihan: [
      {
        teks: "Menerimanya kemudian menyumbangkannya ke kotak amal masjid kantor.",
        skor: 2,
      },
      {
        teks: "Menolaknya dengan sopan dan menjelaskan bahwa pelayanan bebas biaya merupakan kewajiban ASN tanpa imbalan apa pun.",
        skor: 5,
      },
      {
        teks: "Menolaknya secara diam-diam tanpa memberi penjelasan agar pemohon tidak tersinggung.",
        skor: 4,
      },
      {
        teks: "Menerimanya sebagai bentuk rezeki tidak terduga karena tidak pernah meminta.",
        skor: 1,
      },
      {
        teks: "Menyarankan pemohon menaruhnya di meja rekan kerja saja.",
        skor: 3,
      },
    ],
    explanation:
      "Menolak gratifikasi secara tegas, sopan, dan edukatif mencerminkan komitmen zona integritas serta kode etik ASN.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "sedang",
    question_text:
      "Banyak keluhan di media sosial resmi instansi mengenai lambatnya balasan surat keterangan domisili kerja. Anda baru ditugaskan di bagian tata usaha yang menangani penerbitan surat tersebut. Apa prioritas Anda?",
    pilihan: [
      {
        teks: "Mengusulkan penutupan kolom komentar media sosial sementara agar citra instansi terjaga.",
        skor: 1,
      },
      {
        teks: "Memetakan alur waktu penyelesaian setiap berkas untuk menemukan titik sumbatan proses lalu mengajukan perbaikan alur kepada kepala subbagian.",
        skor: 5,
      },
      {
        teks: "Menjawab komentar masyarakat dengan permohonan maaf standar agar mereda.",
        skor: 3,
      },
      {
        teks: "Bekerja lembur sendiri setiap hari tanpa mengubah alur birokrasi yang lambat.",
        skor: 4,
      },
      {
        teks: "Menunggu arahan khusus kepala dinas sebelum mengubah cara kerja tim.",
        skor: 2,
      },
    ],
    explanation:
      "Perbaikan akar penyebab (root cause) hambatan birokrasi secara terukur jauh lebih berdampak daripada sekadar meminta maaf atau bekerja tanpa sistem.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },

  // 9-16: Jejaring Kerja (8 butir)
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "mudah",
    question_text:
      "Anda ditugaskan menjadi anggota tim lintas bidang untuk menyusun laporan anggaran tahunan. Namun, salah satu unit belum mengirimkan data hingga H-1 batas waktu rapat finalisasi. Langkah Anda...",
    pilihan: [
      {
        teks: "Melaporkan langsung kelambanan unit tersebut kepada pimpinan puncak tanpa menghubunginya dulu.",
        skor: 2,
      },
      {
        teks: "Mengosongkan bagian data unit tersebut dan mempresentasikan laporan seadanya.",
        skor: 1,
      },
      {
        teks: "Menghubungi narahubung unit tersebut secara baik-baik, menanyakan kendala penyusunan data, dan menawarkan bantuan teknis agar tepat waktu.",
        skor: 5,
      },
      {
        teks: "Mengirimkan surel pengingat singkat lalu menunggu balasan hingga jam kerja usai.",
        skor: 3,
      },
      {
        teks: "Meminta ketua tim menghubungi kepala bidang unit tersebut agar segera dikirimkan.",
        skor: 4,
      },
    ],
    explanation:
      "Kolaborasi produktif ditunjukkan melalui komunikasi aktif, empati terhadap kendala mitra kerja, dan dukungan solutif demi target bersama.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "sedang",
    question_text:
      "Rekan kerja satu divisi berbeda pendapat secara tajam dengan Anda mengenai metode verifikasi data lapangan sehingga suasana rapat menjadi tegang. Sikap terbaik Anda adalah...",
    pilihan: [
      {
        teks: "Mempertahankan usulan pribadi sekuat tenaga karena yakin paling sesuai pengalaman saya.",
        skor: 2,
      },
      {
        teks: "Memilih diam dan membiarkan rapat berjalan tanpa keputusan jelas.",
        skor: 1,
      },
      {
        teks: "Mengajak membahas kelebihan dan risiko kedua metode secara objektif berbasis sasaran kerja untuk merumuskan kesepakatan terbaik.",
        skor: 5,
      },
      {
        teks: "Mengalah sepenuhnya meskipun masih melihat kekurangan signifikan pada usulan rekan.",
        skor: 3,
      },
      {
        teks: "Mengusulkan pemungutan suara cepat tanpa membandingkan data risiko kedua opsi.",
        skor: 4,
      },
    ],
    explanation:
      "Mengelola perbedaan pandangan dengan berfokus pada data objektif dan tujuan tim menjaga keharmonisan sekaligus kualitas keputusan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "sedang",
    question_text:
      "Anda baru dipindahtugaskan ke subbagian baru yang anggotanya sudah bekerja bertahun-tahun dalam satu kelompok erat, sehingga Anda merasa belum banyak dilibatkan dalam diskusi informal. Upaya Anda...",
    pilihan: [
      {
        teks: "Fokus mengerjakan tugas individu saja agar tidak dianggap mengganggu kekompakan lama mereka.",
        skor: 2,
      },
      {
        teks: "Mengajukan permohonan mutasi kembali ke subbagian lama setelah tiga bulan.",
        skor: 1,
      },
      {
        teks: "Berinisiatif memperkenalkan diri dengan tulus, memahami alur kerja tim, dan aktif menawarkan dukungan pada proyek bersama.",
        skor: 5,
      },
      {
        teks: "Menunggu sampai senior mengajak berbicara atau mengundang makan siang bersama.",
        skor: 3,
      },
      {
        teks: "Berkomunikasi aktif hanya dengan atasan langsung untuk memperoleh kejelasan tugas.",
        skor: 4,
      },
    ],
    explanation:
      "Adaptabilitas dan keterbukaan dalam membangun jejaring baru dimulai dari inisiatif rendah hati dan kontribusi nyata kepada rekan kerja.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "sulit",
    question_text:
      "Program kolaborasi antara instansi Anda dan pemerintah daerah terancam mandek karena miskomunikasi pembagian tanggung jawab logistik. Sebagai penanggung jawab teknis penghubung, Anda sebaiknya...",
    pilihan: [
      {
        teks: "Meminta pihak pemda membaca ulang nota kesepahaman tanpa perlu bertemu lagi.",
        skor: 2,
      },
      {
        teks: "Menyalahkan pihak mitra dalam berita acara evaluasi internal.",
        skor: 1,
      },
      {
        teks: "Menginisiasi rapat koordinasi daring/luring bersama kedua pihak untuk memperjelas matriks peran serta jadwal aksi secara tertulis.",
        skor: 5,
      },
      {
        teks: "Mengambil alih seluruh logistik menggunakan anggaran unit Anda walau melebihi kewenangan.",
        skor: 3,
      },
      {
        teks: "Melaporkan kebuntuan ke atasan dan menunggu pertemuan tingkat pimpinan antar-instansi bulan depan.",
        skor: 4,
      },
    ],
    explanation:
      "Miskomunikasi lintas lembaga diselesaikan paling efektif melalui forum klarifikasi cepat dan penyusunan matriks pembagian tugas tertulis yang disepakati.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "sedang",
    question_text:
      "Seorang rekan satu tim sedang sakit mendadak dua hari sebelum paparan proyek penting ke pemangku kepentingan, sementara materinya belum selesai dirangkum. Tindakan tim yang Anda pelopori adalah...",
    pilihan: [
      {
        teks: "Meminta penundaan jadwal paparan sampai rekan tersebut sembuh total.",
        skor: 2,
      },
      {
        teks: "Menyerahkan kekosongan materi sebagai tanggung jawab pribadi rekan yang sakit.",
        skor: 1,
      },
      {
        teks: "Mengajak anggota tim membagi porsi penyelesaian materi tersebut dan menghubungi rekan yang sakit hanya untuk meminta akses draf tanpa membebaninya.",
        skor: 5,
      },
      {
        teks: "Mengerjakan seluruh bagian rekan itu sendirian tanpa memberi tahu anggota tim lain.",
        skor: 4,
      },
      {
        teks: "Tetap memintanya menyelesaikan presentasi dari rumah sakit demi profesionalisme.",
        skor: 3,
      },
    ],
    explanation:
      "Solidaritas jejaring kerja (gotong royong tim) melindungi keberhasilan target bersama sekaligus berempati kepada kondisi anggota tim.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "mudah",
    question_text:
      "Setelah mengikuti pelatihan analisis kebijakan nasional, Anda memperoleh banyak wawasan metode baru yang sangat berguna bagi kinerja unit kerja. Bagaimana Anda menindaklanjutinya?",
    pilihan: [
      {
        teks: "Menyimpan materi pelatihan untuk keperluan pribadi dan kenaikan jabatan kelak.",
        skor: 1,
      },
      {
        teks: "Menyusun ringkasan praktis lalu mengusulkan sesi berbagi pengetahuan singkat kepada rekan satu tim.",
        skor: 5,
      },
      {
        teks: "Membagikan salinan fail presentasi di grup chat hanya jika ada rekan yang bertanya.",
        skor: 3,
      },
      {
        teks: "Menyerahkan sertifikat pelatihan ke bagian kepegawaian dan mulai mempraktikkannya sendiri.",
        skor: 4,
      },
      {
        teks: "Mencatat hasil pelatihan dalam laporan perjalanan dinas tanpa berdiskusi dengan tim.",
        skor: 2,
      },
    ],
    explanation:
      "Berbagi pengetahuan (knowledge sharing) memperkuat kapasitas jejaring kerja dan melipatgandakan dampak pelatihan di lingkungan organisasi.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "sedang",
    question_text:
      "Dalam forum mitra swasta dan akademisi, usulan kebijakan instansi Anda mendapat kritik cukup keras karena dinilai kurang membumi. Sebagai perwakilan resmi yang hadir, sikap Anda adalah...",
    pilihan: [
      {
        teks: "Membela rancangan instansi dan menilai peserta forum kurang memahami aturan pusat.",
        skor: 1,
      },
      {
        teks: "Mencatat seluruh masukan dengan terbuka, mengapresiasi perspektif mitra, serta berjanji membawanya ke pembahasan penyempurnaan kebijakan.",
        skor: 5,
      },
      {
        teks: "Menghentikan sesi tanya jawab lebih awal agar suasana diskusi tetap kondusif.",
        skor: 2,
      },
      {
        teks: "Mendengarkan tanpa menanggapi dan langsung keluar ruangan setelah acara ditutup.",
        skor: 3,
      },
      {
        teks: "Langsung menjanjikan perubahan pasal peraturan di tempat tanpa konfirmasi tim perumus.",
        skor: 4,
      },
    ],
    explanation:
      "Keterbukaan kolaboratif menerima kritik substantif dari mitra eksternal dengan tetap menjaga kewenangan pengambilan keputusan internal.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "sedang",
    question_text:
      "Pimpinan meminta Anda bermitra erat dengan rekan kerja yang selama ini dikenal lamban dan kurang komunikatif pada tugas-tugas sebelumnya. Sikap Anda yang paling efektif adalah...",
    pilihan: [
      {
        teks: "Meminta pimpinan menukar pasangan kerja demi keamanan target pribadi.",
        skor: 2,
      },
      {
        teks: "Mengerjakan hampir semua bagian proyek sejak awal agar tidak bergantung padanya.",
        skor: 3,
      },
      {
        teks: "Menyamakan ekspektasi sejak hari pertama, menyepakati tenggat antar-tahap yang jelas, serta membangun komunikasi berkala yang suportif.",
        skor: 5,
      },
      {
        teks: "Mengerjakan bagian masing-masing secara terpisah dan mengevaluasinya saat tenggat akhir.",
        skor: 4,
      },
      {
        teks: "Menunggu rekan tersebut memulai inisiatif supaya tidak terkesan menggurui.",
        skor: 1,
      },
    ],
    explanation:
      "Struktur kerja yang jelas (milestone), komunikasi empatik, dan ekspektasi bersama efektif meningkatkan akuntabilitas mitra kerja.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },

  // 17-23: Sosial Budaya (7 butir)
  {
    sub_topic: "Sosial Budaya",
    difficulty: "mudah",
    question_text:
      "Anda ditempatkan di daerah dengan bahasa daerah dan adat sopan santun yang sangat berbeda dari tempat asal Anda, bahkan warga lebih nyaman berkomunikasi menggunakan bahasa lokal. Sikap Anda...",
    pilihan: [
      {
        teks: "Meminta warga wajib berbicara bahasa Indonesia baku kapan pun berinteraksi dengan Anda.",
        skor: 2,
      },
      {
        teks: "Belajar kosakata dasar dan tata krama setempat sambil tetap melayani dengan bahasa Indonesia yang ramah dan mudah dipahami.",
        skor: 5,
      },
      {
        teks: "Mengurangi interaksi dengan masyarakat lokal di luar urusan penandatanganan berkas.",
        skor: 1,
      },
      {
        teks: "Selalu meminta bantuan pegawai putra daerah untuk menerjemahkan tanpa mau belajar sendiri.",
        skor: 3,
      },
      {
        teks: "Menghormati adat setempat dalam kegiatan seremonial kantor saja.",
        skor: 4,
      },
    ],
    explanation:
      "Kecerdasan sosial budaya ASN tampak dari kesediaan belajar kearifan lokal untuk menjembatani pelayanan publik tanpa mengorbankan persatuan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },
  {
    sub_topic: "Sosial Budaya",
    difficulty: "sedang",
    question_text:
      "Di ruang makan kantor, beberapa rekan bercanda meniru logat daerah salah satu pegawai baru hingga tampak pegawai baru tersebut merasa canggung dan kurang nyaman. Tindakan Anda...",
    pilihan: [
      {
        teks: "Ikut tertawa ringan supaya suasana makan siang tidak terasa kaku.",
        skor: 1,
      },
      {
        teks: "Mengalihkan topik pembicaraan secara halus ke hal positif yang melibatkan pegawai baru tersebut, lalu mengingatkan rekan secara pribadi mengenai etika inklusif.",
        skor: 5,
      },
      {
        teks: "Segera meninggalkan ruang makan tanpa mengucapkan sepatah kata pun.",
        skor: 3,
      },
      {
        teks: "Memarahi rekan-rekan dengan suara keras di depan semua orang yang sedang makan.",
        skor: 4,
      },
      {
        teks: "Diam saja karena menganggap hal itu sekadar candaan keakraban biasa.",
        skor: 2,
      },
    ],
    explanation:
      "Menjaga martabat rekan dari stereotipe budaya dengan meredakan situasi seketika dan memberi edukasi etis secara elegan mencerminkan nilai harmonis.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },
  {
    sub_topic: "Sosial Budaya",
    difficulty: "sedang",
    question_text:
      "Acara rapat kerja tahunan bertepatan dengan hari besar keagamaan yang dijalankan sebagian pegawai minoritas di unit Anda. Sebagai ketua panitia acara, langkah Anda...",
    pilihan: [
      {
        teks: "Tetap menetapkan tanggal sesuai rencana awal karena mayoritas pegawai bisa hadir penuh.",
        skor: 2,
      },
      {
        teks: "Menyesuaikan jadwal ke hari kerja efektif lain agar seluruh pegawai dari berbagai latar belakang dapat berpartisipasi penuh.",
        skor: 5,
      },
      {
        teks: "Meminta pegawai yang merayakan hari besar tersebut mengajukan izin tidak hadir tanpa materi pengganti.",
        skor: 3,
      },
      {
        teks: "Mengubah format rapat menjadi setengah hari tanpa berkonsultasi dengan pimpinan.",
        skor: 4,
      },
      {
        teks: "Membatalkan seluruh agenda rapat kerja tahunan di bulan tersebut.",
        skor: 1,
      },
    ],
    explanation:
      "Menghormati keberagaman keyakinan dengan merancang jadwal kerja yang inklusif menjamin kesetaraan hak partisipasi seluruh aparatur.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },
  {
    sub_topic: "Sosial Budaya",
    difficulty: "sulit",
    question_text:
      "Masyarakat di wilayah proyek pembangunan jalan desa sempat menolak pembebasan lahan karena mengkhawatirkan terganggunya makam leluhur adat di pinggir jalur rencana. Sebagai tim sosialisasi pemerintah, pendekatan Anda...",
    pilihan: [
      {
        teks: "Menegaskan bahwa proyek strategis nasional tidak bisa diganggu kepentingan adat setempat.",
        skor: 1,
      },
      {
        teks: "Berdialog dengan tokoh adat, kepala desa, dan tim teknis guna mencari penyesuaian trase yang menghormati situs budaya sekaligus kelancaran proyek.",
        skor: 5,
      },
      {
        teks: "Menyerahkan ganti rugi tunai lebih besar tanpa membuka diskusi pelestarian situs.",
        skor: 3,
      },
      {
        teks: "Meminta aparat keamanan mendampingi pengukuran agar warga tidak menghalangi.",
        skor: 2,
      },
      {
        teks: "Menampung keberatan warga dalam notula rapat untuk diputuskan tahun anggaran berikutnya.",
        skor: 4,
      },
    ],
    explanation:
      "Musyawarah partisipatif bersama pemuka adat dan tim teknis menghasilkan solusi berkeadilan yang merawat nilai budaya sekaligus tujuan pembangunan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },
  {
    sub_topic: "Sosial Budaya",
    difficulty: "mudah",
    question_text:
      "Kantor Anda mengadakan kegiatan bakti sosial di lingkungan permukiman padat penduduk sekitar gedung kantor. Beberapa rekan tampak enggan turun langsung ke lapangan karena kondisi cuaca panas. Sikap Anda...",
    pilihan: [
      {
        teks: "Menyumbang dana saja dari meja kerja agar tidak perlu keluar ruangan.",
        skor: 3,
      },
      {
        teks: "Ikut hadir turun membantu penyaluran bantuan secara tulus serta mengajak rekan melihat langsung manfaat sosial kegiatan bagi warga.",
        skor: 5,
      },
      {
        teks: "Hadir sebentar hanya untuk sesi foto dokumentasi kegiatan kantor.",
        skor: 2,
      },
      {
        teks: "Menolak ikut serta dengan alasan pekerjaan administratif masih menumpuk.",
        skor: 1,
      },
      {
        teks: "Tetap bertugas di bagian administrasi posko pembagian logistik yang teduh.",
        skor: 4,
      },
    ],
    explanation:
      "Empati sosial ASN diwujudkan lewat keteladanan langsung di tengah masyarakat tanpa mencari alasan menghindar.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },
  {
    sub_topic: "Sosial Budaya",
    difficulty: "sedang",
    question_text:
      "Dalam rapat antar-daerah, terjadi salah paham akibat perbedaan gaya komunikasi rekan dari wilayah A yang lugas dan keras dengan rekan dari wilayah B yang halus dan tidak langsung. Sebagai moderator rapat, sikap Anda...",
    pilihan: [
      {
        teks: "Meminta peserta dari wilayah A mengubah nada bicaranya agar sesuai etika diskusi resmi.",
        skor: 3,
      },
      {
        teks: "Menengahi secara netral, menegaskan kembali substansi inti kedua usulan secara setara, dan menjaga iklim dialog yang saling menghargai.",
        skor: 5,
      },
      {
        teks: "Menghentikan pembahasan topik tersebut dan beralih ke agenda lain.",
        skor: 2,
      },
      {
        teks: "Membiarkan ketegangan berlangsung agar semua pihak cepat mengambil keputusan.",
        skor: 1,
      },
      {
        teks: "Menyimpulkan rapat berdasarkan pendapat peserta yang berbicara paling akhir.",
        skor: 4,
      },
    ],
    explanation:
      "Kepekaan lintas budaya memampukan fasilitator memisahkan gaya ekspresi kultural dari substansi gagasan sehingga komunikasi tetap produktif.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },
  {
    sub_topic: "Sosial Budaya",
    difficulty: "sedang",
    question_text:
      "Lingkungan tempat tinggal Anda mengadakan kerja bakti membersihkan saluran air pada Minggu pagi, bertepatan dengan waktu rencana istirahat Anda setelah sepekan dinas luar kota. Sikap Anda...",
    pilihan: [
      {
        teks: "Tidur sepanjang hari dan mengunci pintu rumah agar tidak terganggu.",
        skor: 1,
      },
      {
        teks: "Meluangkan waktu bergabung bekerja bakti semampunya serta turut berinteraksi hangat dengan tetangga sekitar.",
        skor: 5,
      },
      {
        teks: "Mengirimkan air minum kemasan ke pos RT sebagai pengganti kehadiran fisik.",
        skor: 4,
      },
      {
        teks: "Meminta izin kepada ketua RT untuk tidak hadir tanpa berkontribusi apa pun.",
        skor: 3,
      },
      {
        teks: "Keluar rumah sebentar menjelang acara selesai supaya terlihat hadir.",
        skor: 2,
      },
    ],
    explanation:
      "Semangat gotong royong dan membaur di masyarakat memperkuat kohesi sosial budaya seorang aparatur negara di luar jam kerja.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },

  // 24-30: Teknologi Informasi dan Komunikasi / TIK (7 butir)
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "mudah",
    question_text:
      "Instansi Anda mulai mewajibkan penggunaan aplikasi persuratan elektronik baru untuk menggantikan disposisi kertas manual, sementara beberapa pegawai senior kesulitan mengoperasikannya. Tindakan Anda...",
    pilihan: [
      {
        teks: "Meminta bagian IT menyelenggarakan pelatihan berulang sampai pegawai senior mahir.",
        skor: 3,
      },
      {
        teks: "Mempelajari aplikasi tersebut hingga menguasai, lalu mendampingi rekan senior secara sabar dengan panduan langkah sederhana.",
        skor: 5,
      },
      {
        teks: "Meneruskan penggunaan disposisi kertas bagi yang belum bisa agar tidak menghambat surat.",
        skor: 2,
      },
      {
        teks: "Mengerjakan akun disposisi milik rekan senior tersebut agar pekerjaan mereka cepat selesai.",
        skor: 1,
      },
      {
        teks: "Menggunakan aplikasi baru secara disiplin untuk urusan pekerjaan pribadi terlebih dahulu.",
        skor: 4,
      },
    ],
    explanation:
      "Adaptif terhadap transformasi digital berarti cepat menguasai perangkat baru sekaligus menularkan kemandirian digital tanpa mengambil alih akun pribadi rekan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "sedang",
    question_text:
      "Anda menerima surel berantai yang mengatasnamakan pimpinan instansi meminta pengisian kata sandi akun portal kepegawaian melalui tautan formulir eksternal untuk 'pembaruan server'. Sikap Anda...",
    pilihan: [
      {
        teks: "Segera mengisi data sebelum akun diblokir sistem keamanan.",
        skor: 1,
      },
      {
        teks: "Mengabaikan dan menghapus surel tersebut tanpa memberi tahu siapa pun.",
        skor: 3,
      },
      {
        teks: "Tidak mengeklik tautan atau membagikan kata sandi, memverifikasi keaslian kepada tim keamanan IT resmi, serta memperingatkan rekan kerja.",
        skor: 5,
      },
      {
        teks: "Meneruskan surel tersebut ke grup WhatsApp divisi untuk menanyakan apakah rekan lain juga mendapatkannya.",
        skor: 4,
      },
      {
        teks: "Mengisi data dengan kata sandi palsu untuk menguji keaslian tautan.",
        skor: 2,
      },
    ],
    explanation:
      "Kesadaran keamanan siber (anti-phishing) menuntut kewaspadaan menjaga kerahasiaan kredensial dan pelaporan cepat kepada tim pengelola TI resmi.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "sedang",
    question_text:
      "Untuk mempercepat rekapitulasi laporan bulanan yang selama ini memakan waktu 3 hari jika diolah manual, Anda melihat peluang memanfaatkan rumus otomatisasi pada lembar kerja dan dasbor daring internal. Langkah Anda...",
    pilihan: [
      {
        teks: "Tetap mengikuti cara manual yang lama karena takut hasil rumus baru dianggap tidak sesuai kebiasaan.",
        skor: 2,
      },
      {
        teks: "Merancang purwarupa otomatisasi, menguji akurasinya bersama rekan, dan mempresentasikan kemudahannya kepada pimpinan untuk diadopsi tim.",
        skor: 5,
      },
      {
        teks: "Memakainya secara diam-diam hanya untuk tugas sendiri supaya pekerjaan lebih ringan.",
        skor: 4,
      },
      {
        teks: "Menggunakan aplikasi pengolah pihak ketiga tidak resmi di internet untuk memproses data kepegawaian sensitif.",
        skor: 1,
      },
      {
        teks: "Menyampaikan ide tersebut secara lisan saat istirahat makan siang tanpa membuat contoh kerja.",
        skor: 3,
      },
    ],
    explanation:
      "Inovasi berbasis TIK yang divalidasi akurasinya, aman secara privasi data, dan dibagikan untuk kepentingan unit sangat mendorong efisiensi kinerja ASN.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "sulit",
    question_text:
      "Rekan kerja mengunggah tangkapan layar berisi nomor induk kependudukan dan daftar gaji warga penerima bantuan sosial ke akun media sosial pribadinya sebagai bukti kesibukan kerja. Respons Anda...",
    pilihan: [
      {
        teks: "Memberi tanda suka karena unggahan tersebut mempromosikan kinerja kantor.",
        skor: 1,
      },
      {
        teks: "Mengingatkan rekan tersebut dengan bijak namun segera agar menghapus unggahan demi perlindungan data pribadi, sekaligus menjaga keamanan informasi instansi.",
        skor: 5,
      },
      {
        teks: "Melaporkannya langsung ke polisi siber tanpa berbicara lebih dulu dengannya.",
        skor: 3,
      },
      {
        teks: "Meminta rekan mengaburkan sebagian gambar saja namun tetap membiarkan dokumen dinas diunggah.",
        skor: 2,
      },
      {
        teks: "Memberitahukan etika pelindungan data kepada kepala subbagian tanpa menegur langsung rekan.",
        skor: 4,
      },
    ],
    explanation:
      "Pelindungan data pribadi warga (UU PDP) dan kerahasiaan data instansi bersifat mutlak dalam tata kelola TIK pemerintahan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "mudah",
    question_text:
      "Selama rapat koordinasi daring lintas provinsi berlangsung, koneksi internet di wilayah Anda tiba-tiba melemah sehingga suara sering terputus. Tindakan paling profesional yang Anda lakukan adalah...",
    pilihan: [
      {
        teks: "Keluar dari ruang rapat daring hingga rapat selesai dan meminta notula besok.",
        skor: 2,
      },
      {
        teks: "Mematikan kamera video untuk menghemat bandwidth, beralih ke jaringan cadangan yang lebih stabil, serta memberi tahu moderator melalui kolom obrolan.",
        skor: 5,
      },
      {
        teks: "Tetap menyalakan kamera dan membiarkan suara terputus-putus saat berbicara.",
        skor: 1,
      },
      {
        teks: "Mengikuti rapat secara pasif tanpa menyampaikan konfirmasi kendala jaringan.",
        skor: 3,
      },
      {
        teks: "Meminta rekan di kota lain mewakili seluruh laporan divisi Anda mendadak.",
        skor: 4,
      },
    ],
    explanation:
      "Penguasaan etika dan solusi teknis rapat daring (mematikan video, beralih jaringan cadangan, komunikasi via chat) menjaga efektivitas koordinasi jarak jauh.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "sedang",
    question_text:
      "Beredar pesan berantai di grup pegawai berisi informasi mutasi pejabat dan tunjangan kinerja baru yang belum terverifikasi sumbernya. Sebagai ASN melek literasi digital, Anda sebaiknya...",
    pilihan: [
      {
        teks: "Segera meneruskan ke grup keluarga besar agar semua mengetahui isu terkini birokrasi.",
        skor: 1,
      },
      {
        teks: "Tidak ikut menyebarkan, mengecek kebenarannya melalui portal resmi kepegawaian/humas instansi, dan membantu meluruskan informasi berbasis sumber sah.",
        skor: 5,
      },
      {
        teks: "Menyimpan gambar tangkapan layar tersebut untuk dilihat perkembangannya sebulan lagi.",
        skor: 3,
      },
      {
        teks: "Mengomentari pesan tersebut dengan keraguan tanpa mencari rujukan portal resmi.",
        skor: 4,
      },
      {
        teks: "Bertanya kepada teman dari kantor lain apakah rumor tersebut juga beredar di sana.",
        skor: 2,
      },
    ],
    explanation:
      "Saring sebelum berbagi (verifikasi sumber otoritatif) mencegah penyebaran disinformasi di lingkungan birokrasi dan masyarakat.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "sedang",
    question_text:
      "Arsip digital hasil pindai dokumen perjanjian kerja selama ini disimpan acak di komputer pribadi masing-masing staf sehingga menyulitkan pencarian saat audit. Inisiatif TIK yang tepat adalah...",
    pilihan: [
      {
        teks: "Meminta setiap staf mengingat lokasi penyimpanan fail di komputer masing-masing.",
        skor: 1,
      },
      {
        teks: "Mengusulkan tata kelola penyimpanan cloud instansi terpusat dengan struktur penamaan baku dan hak akses berjenjang sesuai kewenangan.",
        skor: 5,
      },
      {
        teks: "Mencetak ulang seluruh dokumen ke dalam map kertas dan menyimpannya di lemari besi.",
        skor: 2,
      },
      {
        teks: "Mengumpulkan salinan fail lewat flashdisk seminggu sekali lalu menaruhnya di komputer Anda.",
        skor: 4,
      },
      {
        teks: "Membagikan tautan folder terbuka umum tanpa kata sandi agar semua orang mudah mengunduh.",
        skor: 3,
      },
    ],
    explanation:
      "Arsip digital terpusat yang terstruktur dan memiliki kontrol akses berjenjang memadukan kecepatan akses audit dengan keamanan dokumen.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },

  // 31-38: Profesionalisme (8 butir)
  {
    sub_topic: "Profesionalisme",
    difficulty: "mudah",
    question_text:
      "Menjelang akhir jam kerja pukul 16.45 WIB, pimpinan menugaskan revisi dokumen bahan paparan rapat esok pagi pukul 08.00 WIB yang harus dikirim malam ini. Pada saat yang sama Anda punya rencana menonton bersama teman. Sikap Anda...",
    pilihan: [
      {
        teks: "Menolak halus dan berjanji mengerjakannya besok pukul 07.00 WIB.",
        skor: 2,
      },
      {
        teks: "Menyelesaikan revisi dokumen secara teliti dan tuntas sesuai tenggat, lalu menjadwal ulang agenda pribadi.",
        skor: 5,
      },
      {
        teks: "Tetap pergi menonton dan menyalin dokumen lama tanpa revisi berarti.",
        skor: 1,
      },
      {
        teks: "Menyelesaikan revisi dengan tergesa-gesa dalam 15 menit tanpa memeriksa keakuratan angka.",
        skor: 3,
      },
      {
        teks: "Mengerjakan setengah bagian lalu meminta rekan kerja yang masih di kantor melanjutkan.",
        skor: 4,
      },
    ],
    explanation:
      "Akuntabilitas profesional menuntut kesiapan memprioritaskan tugas kedinasan mendesak dengan tetap menjaga ketelitian mutu.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "sedang",
    question_text:
      "Setelah laporan evaluasi anggaran triwulan dicetak dan dikirim ke pimpinan, Anda menyadari terdapat kekeliruan input pada dua angka pengeluaran di halaman lampiran. Langkah berintegritas Anda adalah...",
    pilihan: [
      {
        teks: "Membiarkannya berharap pembaca tidak memeriksa detail lampiran halaman belakang.",
        skor: 1,
      },
      {
        teks: "Segera mengakui kekeliruan secara jujur kepada pimpinan, menyampaikan angka koreksi yang valid, dan mengirimkan pembaruan dokumen secepatnya.",
        skor: 5,
      },
      {
        teks: "Menyalahkan sistem pengolah angka atau staf pengumpul data awal.",
        skor: 2,
      },
      {
        teks: "Memperbaiki data di komputer lokal tanpa menarik atau merevisi dokumen yang sudah dikirim.",
        skor: 3,
      },
      {
        teks: "Menunggu pimpinan menanyakan kejanggalan angka baru mengakuinya.",
        skor: 4,
      },
    ],
    explanation:
      "Keberanian mengakui kesalahan secara proaktif dan segera memperbaikinya mencegah keputusan keliru berbasis data yang salah.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "sedang",
    question_text:
      "Atasan meminta Anda menandatangani berita acara penerimaan barang pengadaan padahal sebagian perangkat yang tertera pada daftar belum tiba di gudang instansi. Tindakan Anda...",
    pilihan: [
      {
        teks: "Menandatanganinya karena atasan berjanji vendor pasti mengirim sisanya minggu depan.",
        skor: 2,
      },
      {
        teks: "Menolak menandatangani berita acara sampai seluruh barang diterima lengkap dan diperiksa fisiknya sesuai spesifikasi kontrak.",
        skor: 5,
      },
      {
        teks: "Menandatangani dengan memberikan catatan kecil di pojok kertas.",
        skor: 3,
      },
      {
        teks: "Meminta staf magang atau tenaga kontrak menandatangani atas nama tim.",
        skor: 1,
      },
      {
        teks: "Menghubungi vendor dulu dan bersedia menandatangani jika mereka mengirim foto barang di gudang pengirim.",
        skor: 4,
      },
    ],
    explanation:
      "Kepatuhan hukum dan akuntabilitas pengelolaan keuangan negara melarang keras pengesahan dokumen fiktif sebelum barang/jasa diterima secara nyata.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "sulit",
    question_text:
      "Anda mendapat dua penugasan besar bersamaan dari atasan langsung dan ketua tim lintas unit dengan tenggat waktu yang saling berdekatan. Cara Anda mengelola amanah tersebut adalah...",
    pilihan: [
      {
        teks: "Mengabaikan tugas dari tim lintas unit karena penilaian kinerja utama dari atasan langsung.",
        skor: 2,
      },
      {
        teks: "Mengerjakan keduanya secara asal jadi yang penting selesai sebelum waktu habis.",
        skor: 1,
      },
      {
        teks: "Menyusun daftar prioritas dan estimasi beban kerja, mengomunikasikan kondisi tersebut secara terbuka kepada kedua pemberi tugas untuk sinkronisasi jadwal, lalu menuntaskan sesuai kesepakatan.",
        skor: 5,
      },
      {
        teks: "Mengerjakan tugas yang paling disukai dulu hingga larut malam.",
        skor: 3,
      },
      {
        teks: "Meminta rekan kerja lain mengerjakan salah satu penugasan penuh atas nama Anda.",
        skor: 4,
      },
    ],
    explanation:
      "Manajemen prioritas dan komunikasi transparan menjaga kualitas luaran sekaligus kepercayaan seluruh pemangku kepentingan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "mudah",
    question_text:
      "Hasil penilaian kinerja Anda tahun ini sudah mencapai kategori baik, namun atasan memberi catatan bahwa ketelitian penulisan naskah dinas Anda masih perlu ditingkatkan. Respons Anda...",
    pilihan: [
      {
        teks: "Merasa atasan terlalu perfeksionis padahal substansi tulisan sudah benar.",
        skor: 2,
      },
      {
        teks: "Menerima umpan balik dengan lapang dada, mempelajari pedoman tata naskah dinas serta EYD V, dan rutin melakukan pemeriksaan ulang sebelum menyerahkan naskah.",
        skor: 5,
      },
      {
        teks: "Membela diri bahwa kesalahan ketik merupakan hal wajar saat beban kerja tinggi.",
        skor: 1,
      },
      {
        teks: "Mengandalkan rekan sekretariat untuk selalu mengoreksi tata bahasa setiap surat Anda.",
        skor: 3,
      },
      {
        teks: "Menggunakan pemeriksa ejaan otomatis komputer tanpa mendalami aturan tata naskah baku.",
        skor: 4,
      },
    ],
    explanation:
      "Sikap kompeten terus belajar memperbaiki kekurangan diri berlandaskan umpan balik objektif dan standar tata naskah resmi.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "sedang",
    question_text:
      "Menjelang pemilihan kepala daerah, seorang teman lama meminta Anda ikut menyebarkan poster kampanye calon tertentu melalui status media sosial karena menganggap Anda berpengaruh di masyarakat. Sikap Anda sebagai ASN...",
    pilihan: [
      {
        teks: "Membantu menyebarkannya di luar jam kerja dengan mengaburkan identitas instansi.",
        skor: 2,
      },
      {
        teks: "Menolaknya secara tegas dan sopan dengan menjelaskan kewajiban netralitas ASN dalam seluruh kontestasi politik.",
        skor: 5,
      },
      {
        teks: "Mengunggah poster tersebut sebentar lalu menghapusnya setelah beberapa jam.",
        skor: 1,
      },
      {
        teks: "Tidak membalas pesan teman tersebut tanpa memberikan pemahaman aturan netralitas.",
        skor: 4,
      },
      {
        teks: "Memberikan tanda suka saja pada unggahan akun kampanye teman tersebut tanpa mengunggah ulang.",
        skor: 3,
      },
    ],
    explanation:
      "UU ASN menegaskan kewajiban netralitas pegawai ASN dari keberpihakan politik praktis baik di jam kerja maupun di ruang media sosial.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "sedang",
    question_text:
      "Pada masa transisi perubahan struktur organisasi kementerian, pembagian beberapa pekerjaan baru terasa belum sepenuhnya terperinci dan terjadi kekosongan penanganan layanan berkala. Sikap Anda...",
    pilihan: [
      {
        teks: "Memilih duduk tenang tidak melakukan tugas tambahan sampai surat keputusan rincian terbit.",
        skor: 2,
      },
      {
        teks: "Mengambil inisiatif positif berkoordinasi dengan atasan untuk menangani tugas mendesak yang relevan agar layanan publik tidak terhenti.",
        skor: 5,
      },
      {
        teks: "Menyindir manajemen di ruang obrolan kantor karena lamban menyusun aturan.",
        skor: 1,
      },
      {
        teks: "Hanya mengerjakan pekerjaan rutin lama tanpa melaporkan adanya kekosongan tugas baru.",
        skor: 3,
      },
      {
        teks: "Menanyakan kepastian tugas seminggu sekali lalu tetap menunggu arahan lanjut.",
        skor: 4,
      },
    ],
    explanation:
      "Inisiatif adaptif dalam masa perubahan menjaga keberlangsungan layanan publik sekaligus menunjukkan profesionalisme tingkat tinggi.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "sulit",
    question_text:
      "Saat melakukan inspeksi lapangan ke daerah terpencil, fasilitas penginapan dan transportasi sangat terbatas dibanding standar perjalanan dinas kota besar. Sikap Anda...",
    pilihan: [
      {
        teks: "Mempercepat kepulangan lebih awal dari jadwal agar tidak terlalu lama berada di lokasi.",
        skor: 1,
      },
      {
        teks: "Tetap fokus menuntaskan seluruh agenda audit lapangan secara objektif dan beradaptasi dengan kondisi setempat tanpa mengeluh.",
        skor: 5,
      },
      {
        teks: "Meminta panitia daerah membiayai peningkatan fasilitas penginapan di luar anggaran dinas.",
        skor: 2,
      },
      {
        teks: "Menyelesaikan pengamatan utama secara singkat dan sisanya digali via telepon setelah pulang.",
        skor: 3,
      },
      {
        teks: "Tetap bertahan di lokasi namun menyampaikan keluhan berulang kali di hadapan staf daerah.",
        skor: 4,
      },
    ],
    explanation:
      "Ketangguhan mental dan dedikasi profesional ASN diuji melalui konsistensi mutu kerja meski bertugas dalam keterbatasan fasilitas.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },

  // 39-45: Anti Radikalisme (7 butir)
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "mudah",
    question_text:
      "Dalam sebuah grup diskusi komunitas di tempat tinggal, seseorang aktif menyebarkan gagasan bahwa dasar negara Pancasila harus diganti dengan sistem ideologi transnasional karena dinilai tidak sesuai lagi. Sikap Anda...",
    pilihan: [
      {
        teks: "Keluar diam-diam dari grup tanpa memberi tanggapan apa pun karena malas berdebat.",
        skor: 3,
      },
      {
        teks: "Menghadapi dengan argumen santun dan berbasis fakta sejarah serta konstitusi mengenai Pancasila sebagai pemersatu bangsa, serta melapor bila terdapat ancaman kekerasan nyata.",
        skor: 5,
      },
      {
        teks: "Ikut membagikan tautan tersebut untuk melihat reaksi anggota grup lainnya.",
        skor: 1,
      },
      {
        teks: "Membalas dengan kata-kata kasar dan ancaman agar orang tersebut segera diam.",
        skor: 2,
      },
      {
        teks: "Menyampaikan penolakan singkat bahwa topik ideologi dilarang di grup warga.",
        skor: 4,
      },
    ],
    explanation:
      "Ketegasan ideologis membela Pancasila dilakukan melalui kontra-narasi argumentatif yang santun dan kewaspadaan terhadap potensi eskalasi ekstremisme.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "sedang",
    question_text:
      "Seorang rekan kerja baru terlihat mulai menjauh dari pergaulan kantor, menolak menghadiri upacara bendera penghormatan negara, dan mengajak sebagian pegawai masuk kajian tertutup yang memusuhi kelompok berbeda. Langkah Anda...",
    pilihan: [
      {
        teks: "Membiarkannya karena menganggap pilihan keyakinan dan ketidakhadiran upacara adalah urusan pribadi.",
        skor: 2,
      },
      {
        teks: "Melakukan pendekatan personal penuh empati guna berdialog, menjaga suasana kerja tetap inklusif, serta melaporkan indikasi penolakan nilai kebangsaan secara berjenjang kepada atasan.",
        skor: 5,
      },
      {
        teks: "Mengucilkannya bersama teman sekantor supaya tidak menularkan pahamnya.",
        skor: 3,
      },
      {
        teks: "Menuduhnya sebagai pelaku teror di grup percakapan umum kantor.",
        skor: 1,
      },
      {
        teks: "Menegurnya ringan saat berpapasan tanpa menindaklanjuti indikasi eksklusivisme tersebut.",
        skor: 4,
      },
    ],
    explanation:
      "Pencegahan dini radikalisme di instansi memadukan pendekatan dialogis persuasif dan pelaporan terukur sesuai prosedur kepegawaian.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "sedang",
    question_text:
      "Saat mengawasi kegiatan pembinaan mahasiswa atau pelajar binaan instansi, Anda menemukan materi selebaran yang mengafirkan atau membenci penganut agama serta suku lain di luar kelompok tertentu. Sikap Anda...",
    pilihan: [
      {
        teks: "Membaca sekilas dan membiarkan panitia kegiatan membagikannya agar acara tidak kacau.",
        skor: 1,
      },
      {
        teks: "Menghentikan penyebaran materi intoleran tersebut secara tegas, berdialog dengan penanggung jawab untuk edukasi wawasan kebangsaan, dan melakukan pengawasan lanjutan.",
        skor: 5,
      },
      {
        teks: "Membuang seluruh selebaran ke tempat sampah secara diam-diam tanpa memberi penjelasan.",
        skor: 3,
      },
      {
        teks: "Mengambil satu lembar sebagai arsip pribadi lalu meninggalkan lokasi.",
        skor: 2,
      },
      {
        teks: "Meminta peserta kegiatan tidak membaca selebaran tersebut di lingkungan gedung kantor.",
        skor: 4,
      },
    ],
    explanation:
      "ASN wajib menjaga ruang binaan publik bebas dari ujaran kebencian serta paham intoleran melalui tindakan tegas sekaligus edukatif.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "sulit",
    question_text:
      "Sebuah organisasi kemasyarakatan yang tidak terdaftar secara hukum meminta izin meminjam aula kantor pemerintah untuk acara deklarasi penolakan hukum positif Indonesia. Sebagai pengelola fasilitas kantor, keputusan Anda...",
    pilihan: [
      {
        teks: "Mengizinkan asalkan membayar uang sewa fasilitas umum sesuai tarif gedung.",
        skor: 1,
      },
      {
        teks: "Menolak permohonan peminjaman fasilitas negara secara resmi berdasarkan ketentuan hukum dan menginformasikan temuan kegiatan kepada pimpinan.",
        skor: 5,
      },
      {
        teks: "Menunda jawaban sampai H-1 acara dengan alasan jadwal aula penuh.",
        skor: 3,
      },
      {
        teks: "Mengizinkan pemakaian hanya untuk setengah hari asal tidak memakai pengeras suara.",
        skor: 2,
      },
      {
        teks: "Menolak tanpa membuat catatan laporan kepada pimpinan atau unit pengamanan.",
        skor: 4,
      },
    ],
    explanation:
      "Fasilitas negara tidak boleh dimanfaatkan untuk agenda yang menentang konstitusi dan hukum positif NKRI; penolakan harus tegas, prosedural, dan terlaporkan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "mudah",
    question_text:
      "Ketika berselancar di media sosial, Anda menemukan unggahan bernada kebencian disertai hasutan kekerasan terhadap kelompok minoritas yang dibagikan kembali oleh beberapa akun pelajar. Peran preventif Anda...",
    pilihan: [
      {
        teks: "Mengabaikannya karena perdebatan media sosial sulit dikendalikan.",
        skor: 2,
      },
      {
        teks: "Melaporkan konten hasutan kekerasan melalui fitur pelaporan platform dan kanal resmi otoritas siber serta membagikan pesan literasi toleransi yang sejuk.",
        skor: 5,
      },
      {
        teks: "Membalas komentar pelaku dengan makian balik agar kapok.",
        skor: 1,
      },
      {
        teks: "Membagikan tangkapan layar unggahan tersebut dengan caption marah tanpa melaporkannya.",
        skor: 3,
      },
      {
        teks: "Menekan tombol lapor secara singkat lalu memblokir akun tersebut.",
        skor: 4,
      },
    ],
    explanation:
      "Melaporkan ujaran hasutan melalui mekanisme resmi sambil menyebarkan kontra-narasi damai merupakan kontribusi nyata menjaga ketertiban ruang digital.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "sedang",
    question_text:
      "Dalam rapat penyusunan program pembinaan pemuda desa, muncul usulan agar bantuan pelatihan hanya diprioritaskan bagi warga kelompok mayoritas supaya lebih homogen dan aman. Tanggapan Anda...",
    pilihan: [
      {
        teks: "Menyetujui usulan itu agar pelaksanaan program cepat mendapat dukungan terbanyak.",
        skor: 1,
      },
      {
        teks: "Menolak secara konstruktif dan memastikan program terbuka adil bagi seluruh pemuda desa lintas latar belakang demi memperkuat persatuan sosial.",
        skor: 5,
      },
      {
        teks: "Diam saja dan menyerahkan keputusan pada hasil pemungutan suara desa.",
        skor: 2,
      },
      {
        teks: "Meminta kuota simbolis sangat kecil untuk warga lain sekadar memenuhi syarat administrasi.",
        skor: 3,
      },
      {
        teks: "Menunda persetujuan anggaran sampai seluruh warga menandatangani surat persetujuan.",
        skor: 4,
      },
    ],
    explanation:
      "Kebijakan publik yang inklusif dan bebas diskriminasi mencegah tumbuhnya rasa keterpinggiran sosial yang sering memicu radikalisme.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "sedang",
    question_text:
      "Sepulang bertugas dari dinas ke luar negeri atau luar daerah, Anda mengetahui seorang tetangga yang dahulu akrab kini mengajak warga tidak mengakui bendera Merah Putih serta menolak membayar kewajiban publik kepada negara. Sikap bijak Anda...",
    pilihan: [
      {
        teks: "Memusuhinya secara terbuka di hadapan seluruh warga kompleks.",
        skor: 2,
      },
      {
        teks: "Mengajak dialog kekeluargaan untuk memahami latar belakang pemikirannya, tetap menjaga komunikasi kemasyarakatan yang damai, serta berkoordinasi dengan tokoh masyarakat dan perangkat berwenang untuk pembinaan.",
        skor: 5,
      },
      {
        teks: "Mengikuti ajakannya sebagai bentuk solidaritas bertetangga.",
        skor: 1,
      },
      {
        teks: "Pindah tempat tinggal agar tidak berurusan dengan permasalahan tersebut.",
        skor: 3,
      },
      {
        teks: "Menghindari berbicara dengannya namun tidak memberi tahu ketua RT sama sekali.",
        skor: 4,
      },
    ],
    explanation:
      "Kewaspadaan terhadap penolakan simbol dan kewenangan negara tetap mengedepankan dialog humanis dan koordinasi kelembagaan masyarakat.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
];

export const BANK_SOAL_TKP_SET_2: DefinisiButirTKP[] = [
  // 1-8: Pelayanan Publik Set 2 (8 butir — seluruh skenario baru)
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "mudah",
    question_text:
      "Seorang masyarakat salah masuk ke gedung instansi Anda padahal layanan yang ia cari berada di dinas lain di seberang jalan. Jam istirahat hampir tiba dan hujan turun deras. Sikap Anda...",
    pilihan: [
      {
        teks: "Mengatakan singkat bahwa gedungnya salah tanpa memberi petunjuk lokasi yang jelas.",
        skor: 1,
      },
      {
        teks: "Menjelaskan dengan ramah dinas yang tepat, menunjukkan arah gedung secara rinci, dan memberi tahu syarat umum layanan yang lazim dibawa agar tidak bolak-balik.",
        skor: 5,
      },
      {
        teks: "Menyuruhnya bertanya kepada petugas satpam di pintu gerbang depan.",
        skor: 3,
      },
      {
        teks: "Menunjukkan alamat dinas terkait di aplikasi peta daring lalu segera kembali ke meja.",
        skor: 4,
      },
      {
        teks: "Memintanya menunggu di teras sampai hujan berhenti baru mencari sendiri.",
        skor: 2,
      },
    ],
    explanation:
      "Pelayanan prima melampaui batas sekat instansi: memberi informasi arah yang akurat dan tips dokumen agar warga terbantu tuntas.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "sedang",
    question_text:
      "Saat waktu istirahat siang pukul 12.10 WIB, Anda melihat seorang ibu menggendong bayi sudah menunggu di loket sejak pagi namun baru mendapat nomor urut saat petugas loket mulai beristirahat. Sebagai pegawai loket tersebut, Anda...",
    pilihan: [
      {
        teks: "Menyuruhnya menunggu di kursi tunggu hingga pukul 13.00 WIB karena hak istirahat pegawai.",
        skor: 2,
      },
      {
        teks: "Mengatakan loket sudah ditutup dengan memasang papan istirahat tanpa menyapa.",
        skor: 1,
      },
      {
        teks: "Menuntaskan pelayanan ibu tersebut sejenak dengan tulus terlebih dahulu atau meminta pergantian petugas jaga istirahat sebelum beristirahat.",
        skor: 5,
      },
      {
        teks: "Mengambil berkasnya saja dan menyuruhnya kembali mengambil hasilnya pukul 15.00 WIB.",
        skor: 3,
      },
      {
        teks: "Menawarkan minum dan memintanya bersabar 45 menit menunggu loket buka kembali.",
        skor: 4,
      },
    ],
    explanation:
      "Kepekaan terhadap kelompok rentan (ibu membawa bayi) dengan tetap menjaga rotasi pelayanan berkesinambungan mencerminkan empati pelayan publik.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "sedang",
    question_text:
      "Seorang pengguna layanan mengeluhkan kualitas ruang tunggu kantor yang pengap karena pendingin ruangan rusak sejak kemarin. Sikap Anda yang bertugas di pelayanan pengaduan adalah...",
    pilihan: [
      {
        teks: "Menyatakan hal tersebut bukan urusan bagian pelayanan melainkan urusan bagian umum.",
        skor: 1,
      },
      {
        teks: "Menyampaikan permohonan maaf atas ketidaknyamanan, segera melaporkan perbaikan darurat ke unit perlengkapan, dan menyiapkan opsi kipas angin atau ventilasi sementara.",
        skor: 5,
      },
      {
        teks: "Mencatat keluhannya di buku saran dan membacakannya akhir bulan.",
        skor: 3,
      },
      {
        teks: "Mengaku bahwa suhu ruangan saat ini sebenarnya masih cukup nyaman.",
        skor: 2,
      },
      {
        teks: "Mengarahkan warga menunggu di luar gedung yang lebih berangin tanpa melapor ke teknisi.",
        skor: 4,
      },
    ],
    explanation:
      "Respons cepat memadukan empati, aksi mitigasi langsung sementara, dan eskalasi perbaikan kepada unit terkait.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "sulit",
    question_text:
      "Sebuah berkas perizinan mengalami keterlambatan penyelesaian dua hari melewati batas janji layanan akibat kesalahpahaman verifikasi di internal bagian Anda. Ketika pemohon datang menagih janji, sikap Anda...",
    pilihan: [
      {
        teks: "Menyalahkan bagian teknis lain sebagai penyebab utama keterlambatan berkas.",
        skor: 2,
      },
      {
        teks: "Mengakuinya dengan tulus atas nama pelayanan unit, segera memprioritaskan penuntasan berkas di hari yang sama, dan berkomunikasi jujur mengenai progres terbarunya.",
        skor: 5,
      },
      {
        teks: "Mengatakan bahwa janji waktu di loket hanyalah estimasi tidak mengikat.",
        skor: 1,
      },
      {
        teks: "Memintanya menghubungi pimpinan langsung jika ingin berkas segera selesai.",
        skor: 3,
      },
      {
        teks: "Memberi janji lisan akan selesai minggu depan agar pemohon tidak terus bertanya.",
        skor: 4,
      },
    ],
    explanation:
      "Akuntabilitas pelayanan menuntut pengakuan bertanggung jawab tanpa melempar kesalahan dan percepatan solusi nyata.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "mudah",
    question_text:
      "Survei kepuasan masyarakat semester lalu menunjukkan skor terendah pada indikator kejelasan informasi tarif serta jangka waktu layanan. Sebagai bagian tim pelayanan, gagasan Anda adalah...",
    pilihan: [
      {
        teks: "Mengubah format pertanyaan kuesioner survei agar hasilnya lebih bagus.",
        skor: 1,
      },
      {
        teks: "Membuat papan informasi dan laman ringkas yang memuat biaya resmi (Rp0 bila gratis), syarat lengkap, dan alur waktu layanan secara transparan.",
        skor: 5,
      },
      {
        teks: "Meminta petugas menjawab pertanyaan pemohon lebih cepat di loket.",
        skor: 4,
      },
      {
        teks: "Menganggap responden survei hanya kurang teliti membaca peraturan menteri.",
        skor: 2,
      },
      {
        teks: "Membagikan selebaran hanya kepada pemohon yang meminta penjelasan.",
        skor: 3,
      },
    ],
    explanation:
      "Transparansi standar pelayanan (maklumat biaya, syarat, waktu) yang mudah dibaca masyarakat menjadi inti reformasi pelayanan publik.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "sedang",
    question_text:
      "Anda melayani pemohon berpenampilan sangat sederhana sekaligus seorang pengusaha berpakaian rapi yang datang berselisih beberapa menit kemudian. Bagaimana perlakuan Anda?",
    pilihan: [
      {
        teks: "Menyapa dan mendahulukan pengusaha terlebih dahulu karena khawatir mendapat komplain besar.",
        skor: 1,
      },
      {
        teks: "Melayani keduanya dengan keramahan, kesopanan, dan standar kecepatan yang persis sama sesuai urutan kedatangan.",
        skor: 5,
      },
      {
        teks: "Memperlakukan pengusaha dengan sangat ramah sementara warga sederhana seadanya.",
        skor: 2,
      },
      {
        teks: "Mendahulukan warga sederhana melampaui hak antreannya hanya demi simpati.",
        skor: 3,
      },
      {
        teks: "Memproses keduanya sesuai urutan namun berkomunikasi lebih kaku kepada salah satunya.",
        skor: 4,
      },
    ],
    explanation:
      "Pelayanan publik wajib bebas diskriminasi status sosial ekonomi: setiap warga berhak menerima standar keramahan dan keadilan antrean yang setara.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "sedang",
    question_text:
      "Seorang warga datang membawa persyaratan yang kurang satu lembar fotokopi dokumen identitas, padahal rumahnya berada 30 km dari kantor dan layanan tutup satu jam lagi. Langkah solutif sesuai kewenangan Anda...",
    pilihan: [
      {
        teks: "Menolak memproses berkas dan memintanya kembali minggu depan.",
        skor: 2,
      },
      {
        teks: "Mengarahkan menggunakan layanan cetak/salin dokumen resmi yang tersedia atau memverifikasi dokumen digital resmi di aplikasi kependudukan nasional bila SOP mengizinkan.",
        skor: 5,
      },
      {
        teks: "Meloloskan pengajuan tanpa dokumen identitas sama sekali.",
        skor: 1,
      },
      {
        teks: "Memintanya mencari tukang fotokopi sendiri di luar kompleks tanpa bantuan informasi lokasi.",
        skor: 3,
      },
      {
        teks: "Menahan seluruh berkasnya hari ini dan memintanya mengirim sisa fotokopi lewat pos.",
        skor: 4,
      },
    ],
    explanation:
      "Mempermudah warga memenuhi syarat tanpa melanggar ketentuan verifikasi identitas merupakan wujud pelayanan prima yang solutif.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },
  {
    sub_topic: "Pelayanan Publik",
    difficulty: "mudah",
    question_text:
      "Saat menjawab sambungan telepon pengaduan warga yang berbicara tergesa-gesa karena panik dokumennya hilang, cara berkomunikasi Anda yang tepat adalah...",
    pilihan: [
      {
        teks: "Memutus pembicaraan dan memintanya menelepon lagi nanti setelah lebih tenang.",
        skor: 1,
      },
      {
        teks: "Mendengarkan penuh perhatian dengan nada tenang, mencatat inti permasalahan, dan memandu langkah pengurusan surat pengganti secara terstruktur.",
        skor: 5,
      },
      {
        teks: "Meminta penelpon menuliskan keluhannya melalui surat resmi agar terdokumentasi.",
        skor: 3,
      },
      {
        teks: "Menghubungkan langsung ke mesin penjawab otomatis agar mendapat nomor antrean.",
        skor: 2,
      },
      {
        teks: "Menjawab dengan cepat secara singkat agar panggilan telepon segera selesai.",
        skor: 4,
      },
    ],
    explanation:
      "Ketenangan, mendengarkan aktif, dan memberi panduan terstruktur mampu meredam kepanikan sekaligus menyelesaikan masalah warga.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Pelayanan Publik",
  },

  // 9-16: Jejaring Kerja Set 2 (8 butir)
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "mudah",
    question_text:
      "Saat merancang kegiatan sosialisasi publik skala besar, Anda menyadari ada dua rekan dari bagian humas dan keuangan yang bekerja luar biasa melampaui tugasnya. Bagaimana Anda memberi pengakuan?",
    pilihan: [
      {
        teks: "Mengakui keberhasilan acara sepenuhnya sebagai kerja keras pribadi sebagai ketua panitia.",
        skor: 1,
      },
      {
        teks: "Mengucapkan apresiasi tulus secara langsung dan menyebut kontribusi nyata tim humas serta keuangan dalam laporan maupun rapat evaluasi pimpinan.",
        skor: 5,
      },
      {
        teks: "Hanya memberi ucapan terima kasih singkat melalui pesan pribadi di malam hari.",
        skor: 4,
      },
      {
        teks: "Menganggap itu sudah menjadi kewajiban gaji mereka tanpa perlu pujian.",
        skor: 2,
      },
      {
        teks: "Memberikan apresiasi seadanya hanya saat bertemu di koridor kantor.",
        skor: 3,
      },
    ],
    explanation:
      "Mengapresiasi kontribusi mitra kerja secara terbuka membangun rasa saling percaya, motivasi tinggi, dan kolaborasi jangka panjang.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "sedang",
    question_text:
      "Anda diminta berkolaborasi dengan pegawai magang generasi muda yang sangat terampil di desain digital namun belum memahami alur birokrasi persuratan formal. Sikap Anda...",
    pilihan: [
      {
        teks: "Menyerahkan tugas administratif klise saja kepadanya dan tidak mendengarkan idenya.",
        skor: 2,
      },
      {
        teks: "Membimbingnya memahami tata cara birokrasi secara hangat sekaligus menyerap keunggulan kreativitas digitalnya agar pekerjaan tim makin bermutu.",
        skor: 5,
      },
      {
        teks: "Membiarkannya bekerja sendiri tanpa arahan supaya belajar dari kesalahan.",
        skor: 1,
      },
      {
        teks: "Memuji keterampilannya namun tetap membatasi keterlibatannya di luar proyek utama.",
        skor: 3,
      },
      {
        teks: "Memberinya buku pedoman persuratan untuk dibaca sendiri dalam sepekan.",
        skor: 4,
      },
    ],
    explanation:
      "Kolaborasi lintas generasi menggabungkan kekuatan pemahaman tata kelola formal dan kreativitas digital melalui mentoring dua arah.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "sedang",
    question_text:
      "Salah satu rekan kerja melakukan kekeliruan kecil saat presentasi kelompok di depan kepala biro, sehingga arah bahasan sedikit melenceng dari jadwal. Sikap Anda selaku anggota tim saat sesi berlangsung...",
    pilihan: [
      {
        teks: "Langsung memotong pembicaraannya di tempat sambil menyalahkan ketidaksiapan rekan.",
        skor: 1,
      },
      {
        teks: "Diam membisu dan membiarkan pimpinan menegur rekan tersebut di depan hadirin.",
        skor: 2,
      },
      {
        teks: "Membantu melengkapi informasi dengan bahasa kolaboratif ketika mendapat kesempatan berbicara tanpa mempermalukan rekan, lalu berdiskusi evaluasi bersama seusai rapat.",
        skor: 5,
      },
      {
        teks: "Mengirim pesan sindiran di grup chat internal saat presentasi masih berjalan.",
        skor: 3,
      },
      {
        teks: "Mencatat seluruh kesalahannya untuk dilaporkan ke atasan agar tidak terulang.",
        skor: 4,
      },
    ],
    explanation:
      "Melindungi wibawa tim secara elegan saat presentasi sambil memastikan pesan substansi tersampaikan utuh menunjukkan kedewasaan kolaborasi.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "sulit",
    question_text:
      "Dua subbagian di kantor Anda sering bersaing mendapatkan pujian pimpinan hingga enggan saling berbagi data lapangan yang sebenarnya saling melengkapi. Sebagai bagian staf perencana strategis, langkah Anda...",
    pilihan: [
      {
        teks: "Berpihak kepada salah satu subbagian yang paling akrab dengan Anda.",
        skor: 1,
      },
      {
        teks: "Menginisiasi forum penyelarasan sasaran bersama dengan menunjukkan bagaimana pertukaran data kedua tim mempercepat capaian kinerja organisasi secara menyeluruh.",
        skor: 5,
      },
      {
        teks: "Meminta atasan mengeluarkan surat teguran keras terhadap kedua kepala subbagian.",
        skor: 3,
      },
      {
        teks: "Membiarkan persaingan tersebut karena dianggap wajar memacu semangat.",
        skor: 2,
      },
      {
        teks: "Mengambil data dari kedua belah pihak secara terpisah tanpa pernah mempertemukan mereka.",
        skor: 4,
      },
    ],
    explanation:
      "Menghilangkan sekat ego sektoral (silo mentality) membutuhkan penyelarasan manfaat bersama (win-win) pada tujuan organisasi.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "mudah",
    question_text:
      "Anda diundang dalam pertemuan koordinasi komunitas penggiat lingkungan untuk membahas kampanye daur ulang di kompleks perkantoran pemerintah. Sikap membangun jejaring Anda adalah...",
    pilihan: [
      {
        teks: "Hadir sekadar mengisi daftar hadir lalu pulang sebelum diskusi kelompok dimulai.",
        skor: 1,
      },
      {
        teks: "Menyimak aspirasi komunitas dengan terbuka, menjelaskan dukungan realistis yang dapat difasilitasi kantor, dan merancang tindak lanjut terukur bersama.",
        skor: 5,
      },
      {
        teks: "Menuntut komunitas membiayai seluruh fasilitas tempat sampah kantor jika ingin bekerja sama.",
        skor: 2,
      },
      {
        teks: "Mencatat semua proposal mereka lalu menaruhnya di meja staf umum.",
        skor: 3,
      },
      {
        teks: "Mendukung ide tersebut secara lisan namun enggan menjadi penghubung koordinasi.",
        skor: 4,
      },
    ],
    explanation:
      "Jejaring kerja kolaboratif (pentahelix) dibangun di atas keterbukaan mendengar masyarakat dan komitmen tindak lanjut yang realistis.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "sedang",
    question_text:
      "Dalam rapat perencanaan proyek, ide cemerlang yang Anda ajukan ternyata ditolak oleh mayoritas anggota tim yang memilih metode lebih sederhana milik rekan lain. Respons Anda...",
    pilihan: [
      {
        teks: "Menarik diri dari seluruh tanggung jawab eksekusi karena merasa tidak dihargai.",
        skor: 1,
      },
      {
        teks: "Menghormati keputusan kolektif tim dengan lapang dada dan tetap berkontribusi maksimal menyukseskan metode yang telah disepakati.",
        skor: 5,
      },
      {
        teks: "Mengeluhkan keputusan rapat di belakang layar kepada staf unit lain.",
        skor: 2,
      },
      {
        teks: "Menyampaikan penolakan kembali di rapat berikutnya agar keputusan dibatalkan.",
        skor: 3,
      },
      {
        teks: "Bekerja sekadar memenuhi kewajiban minimum tanpa antusiasme.",
        skor: 4,
      },
    ],
    explanation:
      "Disagree and commit: setelah keputusan bersama diambil secara demokratis, profesional sejati mendukung pelaksanaannya dengan sepenuh hati.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "sedang",
    question_text:
      "Menjelang mutasi jabatan ke unit baru di provinsi lain, pekerjaan yang sedang Anda tangani tinggal menyisakan fase serah terima evaluasi akhir. Langkah etis Anda terhadap penerus tugas adalah...",
    pilihan: [
      {
        teks: "Langsung berangkat ke tempat baru dan menyuruh rekan baru mencari tahu sendiri berkasnya.",
        skor: 1,
      },
      {
        teks: "Menyusun catatan serah terima lengkap berisi status kemajuan, daftar kontak mitra, serta berkas rapi, lalu melakukan pendampingan transisi singkat.",
        skor: 5,
      },
      {
        teks: "Meninggalkan seluruh fail mentah di komputer tanpa daftar penomoran.",
        skor: 2,
      },
      {
        teks: "Mengirim nomor kontak mitra lewat pesan singkat di perjalanan pindah tugas.",
        skor: 3,
      },
      {
        teks: "Membuat ringkasan satu paragraf umum dan menitipkannya di meja sekretaris.",
        skor: 4,
      },
    ],
    explanation:
      "Serah terima pekerjaan yang sistematis (knowledge handover) menjaga kesinambungan program dan reputasi profesional saat berpindah tugas.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },
  {
    sub_topic: "Jejaring Kerja",
    difficulty: "sedang",
    question_text:
      "Sebuah perguruan tinggi menawarkan kerja sama riset pengembangan layanan publik tanpa memungut biaya konsultasi kepada instansi Anda, namun memerlukan akses data statistik non-rahasia. Sikap Anda...",
    pilihan: [
      {
        teks: "Menolak mentah-mentah karena khawatir kampus mengkritik hasil kerja dinas.",
        skor: 2,
      },
      {
        teks: "Membagikan seluruh data mentah berikut identitas warga di ruang tunggu melalui flashdisk.",
        skor: 1,
      },
      {
        teks: "Menyambut baik peluang kemitraan akademis tersebut, mengkaji kesesuaian kerangka kerja bersama atasan, serta menyepakati pertukaran data teragregasi sesuai regulasi.",
        skor: 5,
      },
      {
        teks: "Menyimpan surat penawaran tersebut sampai tahun anggaran berikutnya.",
        skor: 3,
      },
      {
        teks: "Menyetujui secara pribadi tanpa perjanjian tertulis maupun izin kepala unit.",
        skor: 4,
      },
    ],
    explanation:
      "Sinergi pemerintahan dan akademisi memperkaya inovasi kebijakan publik selama ditempuh melalui mekanisme persetujuan resmi dan data aman.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Jejaring Kerja",
  },

  // 17-23: Sosial Budaya Set 2 (7 butir)
  {
    sub_topic: "Sosial Budaya",
    difficulty: "mudah",
    question_text:
      "Saat berkunjung ke rumah dinas mitra kerja yang berasal dari latar belakang budaya berbeda, Anda dihidangkan makanan khas daerah tersebut yang tampilannya kurang familier bagi Anda. Sikap santun Anda...",
    pilihan: [
      {
        teks: "Menolak mencicipi sambil menunjukkan raut wajah kurang suka di hadapan tuan rumah.",
        skor: 1,
      },
      {
        teks: "Menghargai sambutan tuan rumah dengan mencicipinya secukupnya secara sopan atau menyampaikan alasan kesehatan dengan santun apabila ada pantangan medis.",
        skor: 5,
      },
      {
        teks: "Meminta tuan rumah mengganti seluruh hidangan dengan menu kota besar.",
        skor: 2,
      },
      {
        teks: "Mendiamkan makanan di piring sambil terus memesan makanan daring di ruang tamu.",
        skor: 3,
      },
      {
        teks: "Menyentuh makanan sebentar tanpa mengucapkan apresiasi kepada tuan rumah.",
        skor: 4,
      },
    ],
    explanation:
      "Menghormati jamuan budaya lokal adalah wujud apresiasi keberagaman yang memupuk keakraban antar-elemen bangsa.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },
  {
    sub_topic: "Sosial Budaya",
    difficulty: "sedang",
    question_text:
      "Di kantor Anda dibentuk tim pengadaan kegiatan seni budaya daerah untuk memperingati Hari Kemerdekaan RI. Sebagian rekan menginginkan hanya kesenian dari suku mayoritas di kota tersebut yang ditampilkan. Usulan Anda...",
    pilihan: [
      {
        teks: "Menyetujui usulan tersebut supaya persiapan kostum lebih seragam dan murah.",
        skor: 2,
      },
      {
        teks: "Mengusulkan penampilan kolaboratif aneka budaya Nusantara agar seluruh pegawai merasa terwakili dalam semangat Bhinneka Tunggal Ika.",
        skor: 5,
      },
      {
        teks: "Menghapus agenda pentas seni budaya dan menggantinya dengan lomba daring.",
        skor: 3,
      },
      {
        teks: "Melarang pegawai daerah lain mengajukan usulan kesenian lokal mereka.",
        skor: 1,
      },
      {
        teks: "Menyetujui dominasi satu budaya dengan satu sesi selingan lagu daerah lain.",
        skor: 4,
      },
    ],
    explanation:
      "Semangat kebhinnekaan ASN menempatkan perayaan budaya sebagai ruang apresiasi bersama seluruh kekayaan tradisi Nusantara.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },
  {
    sub_topic: "Sosial Budaya",
    difficulty: "sedang",
    question_text:
      "Seorang pegawai senior baru saja mengalami musibah kehilangan anggota keluarga inti. Anda dan rekan satu ruangan berencana mengunjungi rumah duka, namun letaknya cukup jauh dari kantor. Sikap Anda...",
    pilihan: [
      {
        teks: "Tidak ikut takziah maupun menyampaikan belasungkawa karena takut pulang larut malam.",
        skor: 1,
      },
      {
        teks: "Mengkoordinasikan perwakilan rekan melayat bersama setelah jam kerja sesuai adab duka keluarga sekaligus menyampaikan ucapan empati tulus.",
        skor: 5,
      },
      {
        teks: "Mengirim stiker duka cita singkat di grup kantor tanpa memberi perhatian lebih lanjut.",
        skor: 3,
      },
      {
        teks: "Menyumbang dana duka bersama lalu menitipkannya tanpa berkomunikasi personal sama sekali.",
        skor: 4,
      },
      {
        teks: "Menunda ucapan belasungkawa sampai rekan tersebut masuk kantor bulan depan.",
        skor: 2,
      },
    ],
    explanation:
      "Kepedulian kemanusiaan di saat rekan mengalami musibah memperkuat ikatan kekeluargaan yang sehat dalam lingkungan kerja.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },
  {
    sub_topic: "Sosial Budaya",
    difficulty: "sulit",
    question_text:
      "Salah satu syarat penyaluran bantuan sosial di suatu kecamatan mewajibkan kepemilikan akun perbankan digital, sementara kelompok masyarakat adat pedalaman belum terbiasa berinteraksi dengan teknologi perbankan modern. Langkah bijak tim dinas sosial Anda...",
    pilihan: [
      {
        teks: "Mencoret nama masyarakat adat tersebut dari daftar penerima karena tidak memenuhi syarat digital.",
        skor: 1,
      },
      {
        teks: "Berkolaborasi dengan bank penyalur dan pendamping sosial desa melakukan pendampingan langsung yang ramah budaya agar hak mereka tetap tersalurkan akuntabel.",
        skor: 5,
      },
      {
        teks: "Menyerahkan seluruh dana tunai melalui satu orang perantara tanpa pencatatan tanda terima.",
        skor: 2,
      },
      {
        teks: "Menyuruh warga pedalaman datang berbondong-bondong ke cabang bank di ibu kota kabupaten sendiri.",
        skor: 3,
      },
      {
        teks: "Menunda penyaluran bantuan mereka hingga tahun depan menunggu infrastruktur internet masuk.",
        skor: 4,
      },
    ],
    explanation:
      "Pendekatan jemput bola yang sensitif terhadap kondisi sosial budaya menjamin keadilan sosial sekaligus tertib administrasi keuangan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },
  {
    sub_topic: "Sosial Budaya",
    difficulty: "mudah",
    question_text:
      "Ketika mengantre mengambil makan siang di kantin kantor saat jam sibuk, ada rekan yang baru selesai menjalani pengobatan pemulihan berdiri sambil membawa tongkat di belakang Anda. Tindakan Anda...",
    pilihan: [
      {
        teks: "Pura-pura tidak melihat supaya Anda bisa segera makan dan kembali bekerja.",
        skor: 1,
      },
      {
        teks: "Mempersilakannya dengan hangat untuk mengambil makanan terlebih dahulu atau membantu membawakan nampan makannya ke meja yang nyaman.",
        skor: 5,
      },
      {
        teks: "Mengucapkan sapaan singkat lalu tetap mengantre dengan jarak berdekatan.",
        skor: 3,
      },
      {
        teks: "Menyuruh petugas kantin mengantarkan makanan ke ruang kerjanya tanpa bertanya.",
        skor: 4,
      },
      {
        teks: "Memberinya nasihat agar makan siang lebih awal sebelum jam sibuk.",
        skor: 2,
      },
    ],
    explanation:
      "Kesetiakawanan sosial dan kepekaan terhadap kondisi rekan yang membutuhkan prioritas fisik mewujudkan budaya kerja yang beradab.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },
  {
    sub_topic: "Sosial Budaya",
    difficulty: "sedang",
    question_text:
      "Lingkungan kerja Anda memiliki pegawai dari berbagai daerah Indonesia dengan kebiasaan cara berpakaian hari Jumat batik yang beragam coraknya. Suatu ketika muncul komentar merendahkan corak batik daerah tertentu di grup tidak resmi. Sikap Anda...",
    pilihan: [
      {
        teks: "Ikut mengunggah meme lelucon soal perbedaan motif pakaian daerah.",
        skor: 1,
      },
      {
        teks: "Menghargai seluruh kekayaan motif Nusantara dan mengingatkan secara positif bahwa setiap wastra daerah memiliki nilai sejarah yang layak dibanggakan.",
        skor: 5,
      },
      {
        teks: "Tidak memakai batik lagi pada hari Jumat supaya terhindar dari komentar.",
        skor: 2,
      },
      {
        teks: "Mengusulkan pelarangan batik selain motif kota setempat di kantor.",
        skor: 3,
      },
      {
        teks: "Mematikan notifikasi grup pesan dan tidak berkomentar apa pun.",
        skor: 4,
      },
    ],
    explanation:
      "Menumbuhkan rasa bangga bersama terhadap keanekaragaman warisan budaya bangsa meredam sikap etnosentrisme di ruang kerja.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },
  {
    sub_topic: "Sosial Budaya",
    difficulty: "sedang",
    question_text:
      "Dalam penyelenggaraan musyawarah perencanaan pembangunan (Musrenbang) kelurahan, kelompok perempuan dan penyandang disabilitas jarang diberi kesempatan menyampaikan usulan karena dominasi suara tokoh tertentu. Sebagai fasilitator pemerintah, Anda...",
    pilihan: [
      {
        teks: "Mencatat usulan dari pembicara dominan saja supaya rapat cepat selesai.",
        skor: 1,
      },
      {
        teks: "Membuka sesi dialog terstruktur yang secara khusus memberi ruang setara bagi perwakilan perempuan, lansia, dan disabilitas untuk menyampaikan prioritas kebutuhan mereka.",
        skor: 5,
      },
      {
        teks: "Meminta mereka menuliskan surat keluhan secara terpisah setelah acara ditutup.",
        skor: 3,
      },
      {
        teks: "Menggunakan mekanisme pemungutan suara cepat langsung di awal rapat.",
        skor: 2,
      },
      {
        teks: "Membagikan kotak saran anonim di sudut aula tanpa dibahas dalam rapat pleno.",
        skor: 4,
      },
    ],
    explanation:
      "Pembangunan berkeadilan menuntut tata kelola musyawarah yang inklusif dengan mendengar suara seluruh kelompok warga secara seimbang.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Sosial Budaya",
  },

  // 24-30: TIK Set 2 (7 butir)
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "mudah",
    question_text:
      "Saat menggunakan laptop inventaris kantor untuk dinas luar di ruang publik seperti bandara atau kafe, kebijakan keamanan informasi paling tepat yang Anda terapkan adalah...",
    pilihan: [
      {
        teks: "Menyambungkan laptop ke jaringan Wi-Fi terbuka gratis tanpa pelindung VPN untuk mengunduh laporan anggaran.",
        skor: 1,
      },
      {
        teks: "Memakai koneksi pribadi aman (tethering) atau VPN resmi instansi, mengaktifkan penguncian layar otomatis saat beranjak, serta menghindari tampilan dokumen rahasia di tempat ramai.",
        skor: 5,
      },
      {
        teks: "Membiarkan layar laptop tetap menyala saat pergi membeli minuman karena merasa hanya sebentar.",
        skor: 2,
      },
      {
        teks: "Menghapus kata sandi perangkat sementara supaya cepat membuka fail presentasi.",
        skor: 3,
      },
      {
        teks: "Bekerja luring saja namun tetap membagikan layar ke tempat duduk sebelahnya.",
        skor: 4,
      },
    ],
    explanation:
      "Higiene keamanan siber saat bekerja mobile melindungi data negara dari penyadapan jaringan publik dan pengintipan visual.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "sedang",
    question_text:
      "Instansi berencana beralih ke layanan tanda tangan elektronik tersertifikasi untuk seluruh surat tugas. Anda melihat rekan tim masih meragukan keabsahan hukum dokumen tanpa tanda tangan basah dan stempel tinta. Sikap Anda...",
    pilihan: [
      {
        teks: "Ikut menolak tanda tangan elektronik dan mencetak semua surat untuk distempel basah.",
        skor: 2,
      },
      {
        teks: "Menunjukkan dasar hukum resmi penyelenggaraan sistem elektronik serta mendemonstrasikan cara memindai kode verifikasi keaslian dokumen kepada rekan.",
        skor: 5,
      },
      {
        teks: "Memaksa rekan menerima perubahan tanpa menjelaskan dasar regulasinya.",
        skor: 3,
      },
      {
        teks: "Membiarkan rekan bekerja dengan cara lama meski berlawanan dengan surat edaran.",
        skor: 1,
      },
      {
        teks: "Memakai tanda tangan elektronik hanya untuk surat tugas milik diri sendiri.",
        skor: 4,
      },
    ],
    explanation:
      "Transformasi digital efektif didukung edukasi bukti autentikasi (QR verification) dan payung regulasi UU ITE / SPBE.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "sulit",
    question_text:
      "Anda diminta memanfaatkan perangkat kecerdasan buatan generatif untuk membantu menyusun kerangka awal rangkuman laporan evaluasi publik. Prinsip penggunaan TIK yang aman dan akuntabel adalah...",
    pilihan: [
      {
        teks: "Menempelkan seluruh dokumen rahasia instansi dan data identitas pribadi ke layanan AI publik gratis lalu langsung mengirim hasilnya ke pimpinan tanpa membaca.",
        skor: 1,
      },
      {
        teks: "Tidak memasukkan data sensitif/rahasia ke layanan publik, memverifikasi ulang seluruh fakta, kutipan regulasi, dan angka hasil olahan sebelum digunakan.",
        skor: 5,
      },
      {
        teks: "Menghindari seluruh alat bantu teknologi modern dengan mengetik ulang semuanya secara manual berhari-hari.",
        skor: 3,
      },
      {
        teks: "Menyuruh perangkat AI mengarang referensi hukum yang belum tentu ada demi mempercepat laporan.",
        skor: 2,
      },
      {
        teks: "Memakai draf AI tanpa memasukkan data rahasia namun tidak mengecek ulang konsistensi istilah baku bahasa Indonesia.",
        skor: 4,
      },
    ],
    explanation:
      "Etika pemanfaatan teknologi cerdas di pemerintahan menuntut pelindungan kerahasiaan data (human-in-the-loop) dan verifikasi fakta mutlak.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "sedang",
    question_text:
      "Situs web layanan informasi dinas Anda sempat tidak dapat diakses selama beberapa jam sehingga banyak pengguna menanyakannya lewat pesan resmi. Sebagai pengelola saluran komunikasi digital, tindakan Anda...",
    pilihan: [
      {
        teks: "Mematikan saluran pesan sementara hingga situs kembali aktif tanpa pengumuman.",
        skor: 1,
      },
      {
        teks: "Berkoordinasi dengan tim teknis untuk estimasi pemulihan, merilis pemberitahuan resmi transparan beserta jalur layanan alternatif sementara di kanal media sosial resmi.",
        skor: 5,
      },
      {
        teks: "Menyampaikan bahwa server memang sering lambat karena keterbatasan anggaran.",
        skor: 2,
      },
      {
        teks: "Menjawab pertanyaan warga satu per satu hanya dengan kata 'sedang perbaikan'.",
        skor: 3,
      },
      {
        teks: "Menunggu tim IT memulihkan situs tanpa menyiapkan kanal informasi darurat.",
        skor: 4,
      },
    ],
    explanation:
      "Komunikasi krisis TI yang proaktif, transparan, dan menyediakan kanal alternatif menjaga kepercayaan publik.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "mudah",
    question_text:
      "Untuk mengurangi penggunaan kertas secara bertahap (paperless office) saat rapat mingguan divisi, inisiatif digital yang paling efisien dan ramah seluruh peserta adalah...",
    pilihan: [
      {
        teks: "Membatalkan seluruh pembagian materi rapat sehingga peserta hanya mendengarkan lisan.",
        skor: 2,
      },
      {
        teks: "Membagikan berkas agenda dan bahan paparan dalam format PDF ringkas lewat tautan internal sebelum rapat dimulai sehingga dapat dipelajari di gawai peserta.",
        skor: 5,
      },
      {
        teks: "Tetap mencetak 50 eksemplar tebal bahan rapat setiap minggu sebagai tradisi.",
        skor: 1,
      },
      {
        teks: "Mengirim 20 fail gambar satu per satu secara terpisah saat rapat sudah berlangsung.",
        skor: 3,
      },
      {
        teks: "Menampilkan teks berukuran sangat kecil di proyektor tanpa membagikan fail bahan.",
        skor: 4,
      },
    ],
    explanation:
      "Digitalisasi materi rapat terstruktur sebelum acara meningkatkan efektivitas diskusi sekaligus efisiensi anggaran.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "sedang",
    question_text:
      "Anda mendapati sebuah fitur baru pada aplikasi kepegawaian mengalami bug (kesalahan hitung) saat digunakan menghitung cuti tahunan pegawai. Tindakan Anda...",
    pilihan: [
      {
        teks: "Memanfaatkan bug tersebut untuk menambah jatah cuti pribadi sebelum diketahui IT.",
        skor: 1,
      },
      {
        teks: "Mendokumentasikan tangkapan layar langkah terjadinya kesalahan secara rinci dan melaporkannya melalui tiket resmi tim pengembang aplikasi.",
        skor: 5,
      },
      {
        teks: "Mengeluh di grup pesan pegawai bahwa tim IT tidak kompeten membuat aplikasi.",
        skor: 2,
      },
      {
        teks: "Mengabaikannya selama jatah cuti milik pribadi tidak bermasalah.",
        skor: 3,
      },
      {
        teks: "Mengirim pesan singkat 'aplikasinya error' ke grup umum tanpa menjelaskan detail menu yang rusak.",
        skor: 4,
      },
    ],
    explanation:
      "Integritas digital dan pelaporan galat yang reproduktif mempercepat perbaikan keandalan sistem informasi organisasi.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    difficulty: "sedang",
    question_text:
      "Anda berencana mengganti ponsel pintar pribadi dengan unit baru, sedangkan ponsel lama masih terpasang akun surel dinas, aplikasi otentikasi dua faktor (2FA), serta grup koordinasi kerja. Langkah keamanan Anda...",
    pilihan: [
      {
        teks: "Langsung menjual ponsel lama tanpa menghapus data karena merasa ada kunci pola layar.",
        skor: 1,
      },
      {
        teks: "Memindahkan konfigurasi 2FA ke perangkat baru, keluar dari seluruh sesi akun dinas, lalu melakukan reset pabrik menyeluruh sebelum ponsel lama dilepas.",
        skor: 5,
      },
      {
        teks: "Menghapus ikon aplikasi surel dari layar depan saja tanpa keluar sesi atau reset pabrik.",
        skor: 2,
      },
      {
        teks: "Hanya menghapus riwayat percakapan grup pesan lalu menjual ponsel lama.",
        skor: 3,
      },
      {
        teks: "Keluar dari surel dinas tetapi lupa memindahkan aplikasi 2FA sehingga terkunci dari sistem.",
        skor: 4,
      },
    ],
    explanation:
      "Kesadaran siklus hidup perangkat (migrasi 2FA + pencabutan sesi + factory reset) mencegah kebocoran akses institusi.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — TIK",
  },

  // 31-38: Profesionalisme Set 2 (8 butir)
  {
    sub_topic: "Profesionalisme",
    difficulty: "mudah",
    question_text:
      "Di ruang kerja tersedia mesin pencetak dan persediaan kertas A4 kantor. Seorang rekan sering mencetak bahan tugas kuliah pribadi ratusan lembar menggunakan fasilitas kantor. Saat ia mengajak Anda ikut mencetak buku pribadi, sikap Anda...",
    pilihan: [
      {
        teks: "Ikut mencetak sedikit saja karena merasa jumlahnya tidak seberapa dibanding anggaran kantor.",
        skor: 2,
      },
      {
        teks: "Menolak secara tegas dengan tetap sopan, menggunakan fasilitas dinas murni untuk keperluan kerja, dan mengingatkan batas pemakaian aset negara.",
        skor: 5,
      },
      {
        teks: "Menyetujui mencetak di sore hari saat tidak ada atasan yang melihat.",
        skor: 1,
      },
      {
        teks: "Menolaknya tanpa memberi contoh atau alasan etika penggunaan aset negara.",
        skor: 4,
      },
      {
        teks: "Mencetak terlebih dahulu lalu mengganti dua lembar kertas dari rumah.",
        skor: 3,
      },
    ],
    explanation:
      "Disiplin pengelolaan barang milik negara memisahkan secara tegas aset dinas dari keperluan pribadi.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "sedang",
    question_text:
      "Sebuah peraturan menteri terbaru mengubah secara mendasar tata cara penilaian kinerja tahunan unit kerja Anda. Sementara sebagian rekan memilih menunggu tahun depan untuk menyesuaikan diri, langkah Anda...",
    pilihan: [
      {
        teks: "Tetap memakai format laporan lama hingga ditegur oleh inspektorat.",
        skor: 1,
      },
      {
        teks: "Segera mempelajari pasal per pasal aturan baru, menyesuaikan templat perencanaan kerja saat ini, dan menyelaraskannya dengan tim.",
        skor: 5,
      },
      {
        teks: "Mengeluh karena aturan terlalu sering berganti setiap pergantian periode.",
        skor: 2,
      },
      {
        teks: "Membaca ringkasan berita media saja tanpa membuka salinan peraturan aslinya.",
        skor: 3,
      },
      {
        teks: "Menyesuaikan seadanya hanya pada bagian sampul laporan kinerja.",
        skor: 4,
      },
    ],
    explanation:
      "Kepatuhan regulasi dan ketangkasan belajar (agile learning) mendorong eksekusi kebijakan baru secara akurat.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "sedang",
    question_text:
      "Ketika mengolah data lelang pengadaan barang jasa sebagai anggota panitia, salah satu peserta tender merupakan perusahaan milik kenalan akrab masa kuliah yang meminta bocoran nilai estimasi HPS internal. Sikap Anda...",
    pilihan: [
      {
        teks: "Memberi kisaran angka perkiraan secara lisan asalkan teman berjanji menang secara wajar.",
        skor: 1,
      },
      {
        teks: "Menolak tegas permintaan tersebut, menjaga kerahasiaan dokumen pengadaan sesuai pakta integritas, dan melaporkan potensi konflik kepentingan sesuai ketentuan.",
        skor: 5,
      },
      {
        teks: "Mengalihkan permintaan ke panitia lain agar Anda tidak merasa canggung.",
        skor: 2,
      },
      {
        teks: "Memblokir nomor teman tersebut tanpa menjelaskan aturan larangan konflik kepentingan.",
        skor: 4,
      },
      {
        teks: "Memberi nasihat umum mengenai strategi pengisian dokumen penawaran di luar jam kerja.",
        skor: 3,
      },
    ],
    explanation:
      "Pakta integritas pengadaan menuntut netralitas mutlak dan perlindungan rahasia jabatan dari segala bentuk benturan kepentingan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "sulit",
    question_text:
      "Proyek percontohan layanan terpadu yang Anda pimpin selama empat bulan belum menunjukkan peningkatan skor kepuasan sesuai target awal dalam evaluasi tengah periode. Sikap profesional Anda menghadapi kegagalan sementara tersebut...",
    pilihan: [
      {
        teks: "Menyerah dan meminta atasan menutup proyek percontohan karena dianggap tidak cocok.",
        skor: 1,
      },
      {
        teks: "Memanipulasi grafik evaluasi agar tetap tampak meningkat pada laporan bulanan.",
        skor: 2,
      },
      {
        teks: "Melakukan evaluasi jujur terhadap hambatan lapangan bersama tim dan pengguna layanan, merumuskan rencana perbaikan spesifik, dan mengeksekusi penyesuaian terukur.",
        skor: 5,
      },
      {
        teks: "Menunggu evaluasi akhir tahun dengan metode yang persis sama tanpa perbaikan.",
        skor: 3,
      },
      {
        teks: "Menyalahkan rendahnya partisipasi masyarakat setempat dalam mengisi survei.",
        skor: 4,
      },
    ],
    explanation:
      "Resiliensi dan orientasi perbaikan berbasis bukti mengubah kendala tengah periode menjadi peluang penyempurnaan layanan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "mudah",
    question_text:
      "Anda mendapat undangan menjadi narasumber seminar daring berbayar dari pihak swasta pada hari dan jam kerja efektif kantor dengan topik yang masih bersinggungan dengan tugas fungsi dinas. Tindakan sesuai etika ASN adalah...",
    pilihan: [
      {
        teks: "Mengikutinya diam-diam dari ruang kerja tanpa memberi tahu atasan agar mendapat penghasilan tambahan.",
        skor: 1,
      },
      {
        teks: "Meminta izin serta penugasan resmi atasan bila sesuai tugas kedinasan dan memastikan seluruh ketentuan pengelolaan honorarium/gratifikasi serta jam kerja dipatuhi.",
        skor: 5,
      },
      {
        teks: "Izin sakit palsu sehari penuh untuk mengisi acara tersebut.",
        skor: 2,
      },
      {
        teks: "Mengisi acara saat rapat penting kantor sedang berlangsung dengan mematikan kamera rapat.",
        skor: 3,
      },
      {
        teks: "Menolak seluruh kesempatan berbagi ilmu meskipun sebenarnya dapat dilakukan dengan cuti tahunan atau izin resmi di luar jam kerja.",
        skor: 4,
      },
    ],
    explanation:
      "Keterbukaan kepada atasan, kepatuhan disiplin jam kerja, dan kepatuhan aturan konflik kepentingan menjaga kehormatan profesi ASN.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "sedang",
    question_text:
      "Dalam rapat pimpinan, atasan memberikan kritik tajam terhadap draf kajian kebijakan yang Anda susun karena dinilai kurang mendalam pada analisis dampak anggarannya. Sikap mental Anda adalah...",
    pilihan: [
      {
        teks: "Tersinggung lalu bersikap defensif membandingkan kerja keras lembur Anda.",
        skor: 2,
      },
      {
        teks: "Menyimak seluruh poin kritik dengan kepala dingin, menanyakan ekspektasi indikator anggaran yang diharapkan, dan segera menyempurnakan draf kajian tersebut.",
        skor: 5,
      },
      {
        teks: "Menyalahkan rekan penyedia data yang terlambat menyerahkan angka APBN.",
        skor: 1,
      },
      {
        teks: "Mengubah draf seadanya tanpa mendalami metode perhitungan dampak fiskal.",
        skor: 3,
      },
      {
        teks: "Menerima catatan dengan wajah murung dan menghindari diskusi lanjutan dengan atasan.",
        skor: 4,
      },
    ],
    explanation:
      "Kecerdasan emosional dan komitmen mutu tampak dari sikap terbuka terhadap kritik substantif demi menghasilkan kajian unggul.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "sedang",
    question_text:
      "Sebagai pegawai fungsional perencana, target angka kredit tahunan Anda sudah terpenuhi pada bulan Oktober. Apa yang Anda lakukan pada dua bulan tersisa hingga akhir tahun?",
    pilihan: [
      {
        teks: "Mengurangi tempo kerja hingga batas minimal karena target pribadi sudah aman.",
        skor: 2,
      },
      {
        teks: "Menjaga produktivitas kerja secara konsisten, membantu penyelesaian target tim akhir tahun, serta mempersiapkan rencana kerja tahun berikutnya.",
        skor: 5,
      },
      {
        teks: "Mengambil seluruh sisa cuti tanpa menyelesaikan serah terima tugas mendesak.",
        skor: 1,
      },
      {
        teks: "Menunda penyerahan dokumen kerja baru ke bulan Januari agar masuk perhitungan angka kredit tahun depan.",
        skor: 3,
      },
      {
        teks: "Hanya mengerjakan tugas rutin ringan tanpa berinisiatif meningkatkan mutu laporan.",
        skor: 4,
      },
    ],
    explanation:
      "Etos kerja aparatur berorientasi pada keberhasilan misi organisasi sepanjang tahun, bukan sekadar memenuhi angka kredit pribadi.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },
  {
    sub_topic: "Profesionalisme",
    difficulty: "sedang",
    question_text:
      "Seorang rekan kerja sering datang terlambat 30 menit setiap pagi namun meminta Anda membantu melakukan pemindaian presensi atau menutupi keterlambatannya bila atasan mencari. Sikap Anda...",
    pilihan: [
      {
        teks: "Membantunya karena menganggap solidaritas pertemanan sekantor lebih utama.",
        skor: 1,
      },
      {
        teks: "Menolak permintaan manipulatif tersebut dengan baik-baik, menyampaikan kejujuran faktual tanpa bermaksud menjatuhkan, serta mengajaknya memperbaiki disiplin waktu.",
        skor: 5,
      },
      {
        teks: "Diam saja lalu diam-diam mencontoh kebiasaan datang terlambat tersebut.",
        skor: 2,
      },
      {
        teks: "Menolak membantunya namun tidak menegur sama sekali saat ia mengulangi lagi.",
        skor: 4,
      },
      {
        teks: "Melaporkan kebiasaannya ke seluruh grup pegawai kantor tanpa berbicara kepadanya.",
        skor: 3,
      },
    ],
    explanation:
      "Solidaritas yang sehat tidak pernah mengorbankan kejujuran dan integritas disiplin aparatur sipil negara.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Profesionalisme",
  },

  // 39-45: Anti Radikalisme Set 2 (7 butir)
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "mudah",
    question_text:
      "Sebuah buku bacaan di perpustakaan umum daerah binaan Anda ditemukan memuat ajakan menempuh cara kekerasan untuk menggulingkan pemerintahan sah. Tindakan cepat Anda selaku pembina perpustakaan...",
    pilihan: [
      {
        teks: "Membiarkannya di rak baca dengan dalih kebebasan membaca segala jenis buku.",
        skor: 1,
      },
      {
        teks: "Menarik sementara buku tersebut dari rak terbuka untuk diverifikasi berjenjang bersama pimpinan dan otoritas berwenang sekaligus memperkuat kurasi koleksi literasi kebangsaan.",
        skor: 5,
      },
      {
        teks: "Membakar buku tersebut di halaman kantor tanpa catatan berita acara.",
        skor: 3,
      },
      {
        teks: "Menyembunyikannya di laci pribadi untuk dibaca diam-diam di rumah.",
        skor: 2,
      },
      {
        teks: "Memindahkan buku tersebut ke rak paling atas yang sulit dijangkau pembaca anak.",
        skor: 4,
      },
    ],
    explanation:
      "Kurasi konten kekerasan ekstrem di fasilitas publik harus ditempuh lewat penarikan prosedural dan pelaporan terukur.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "sedang",
    question_text:
      "Dalam rapat pembinaan pegawai baru CPNS, muncul pertanyaan kritis dari salah satu peserta tentang mengapa loyalitas ASN harus diletakkan pada NKRI dan UUD 1945 di atas kepentingan kelompok tertentu. Jawaban paling mencerahkan dari Anda sebagai mentor...",
    pilihan: [
      {
        teks: "Menutup sesi diskusi dan mengancam memberi nilai merah pada peserta penanya.",
        skor: 2,
      },
      {
        teks: "Menjelaskan secara tenang dan jernih bahwa aparatur melayani seluruh rakyat yang majemuk sehingga kesetiaan pada konstitusi dan NKRI menjamin keadilan bagi semua golongan.",
        skor: 5,
      },
      {
        teks: "Menyuruhnya mencari sendiri jawaban di modul tanpa membahasnya di forum.",
        skor: 3,
      },
      {
        teks: "Membenarkan bahwa kepentingan kelompok tertentu memang boleh mengalahkan konstitusi negara.",
        skor: 1,
      },
      {
        teks: "Menjawab singkat bahwa hal itu sudah tercantum pada sumpah jabatan pegawai.",
        skor: 4,
      },
    ],
    explanation:
      "Dialog rasional dan mencerahkan membangun kesadaran ideologis yang kokoh jauh lebih efektif daripada pendekatan otoriter atau menghindar.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "sedang",
    question_text:
      "Anda mengetahui adanya penggalangan dana di lingkungan kantor tanpa izin pimpinan resmi yang ternyata tujuannya mencurigakan dan disalurkan kepada kelompok berafiliasi jaringan radikal terlarang. Sikap Anda...",
    pilihan: [
      {
        teks: "Ikut menyumbang sedikit karena merasa tidak enak menolak ajakan rekan.",
        skor: 1,
      },
      {
        teks: "Tidak ikut berdonasi, mengingatkan rekan mengenai risiko hukum serta kehati-hatian lembaga penyalur resmi, dan melaporkan indikasi penggalangan dana mencurigakan ke pimpinan/inspektorat.",
        skor: 5,
      },
      {
        teks: "Menolak menyumbang lalu langsung pulang tanpa memberi tahu bagian pengawasan internal.",
        skor: 4,
      },
      {
        teks: "Memotret kotak donasi dan menyebarkannya ke media sosial dengan narasi provokatif.",
        skor: 2,
      },
      {
        teks: "Menyarankan panitia mengganti nama kegiatan penggalangan dana menjadi acara sosial.",
        skor: 3,
      },
    ],
    explanation:
      "Memutus rantai pendanaan radikalisme melalui penolakan tegas dan pelaporan ke pengawasan internal melindungi instansi secara hukum dan keamanan.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "sulit",
    question_text:
      "Seorang warga mantan narapidana kasus ekstremisme yang telah menjalani program deradikalisasi resmi dan bebas murni pindah ke wilayah kelurahan Anda, sehingga sebagian tetangga menolak kehadirannya. Peran Anda sebagai ASN di masyarakat...",
    pilihan: [
      {
        teks: "Ikut menandatangani petisi pengusiran warga tersebut dari lingkungan RT.",
        skor: 2,
      },
      {
        teks: "Berperan menenangkan warga agar tidak main hakim sendiri, mendorong reintegrasi sosial yang sehat serta pengawasan humanis bersama perangkat desa dan pihak berwenang.",
        skor: 5,
      },
      {
        teks: "Memprovokasi warga agar menutup seluruh akses jalan menuju rumah orang tersebut.",
        skor: 1,
      },
      {
        teks: "Tidak peduli sama sekali terhadap konflik sosial di lingkungan tempat tinggal.",
        skor: 3,
      },
      {
        teks: "Menyarankan warga tersebut diam di dalam rumah saja sepanjang waktu agar aman.",
        skor: 4,
      },
    ],
    explanation:
      "Reintegrasi sosial yang humanis, terpantau, dan bebas stigma membantu memutus residivisme radikalisme sekaligus menjaga ketertiban hukum warga.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "mudah",
    question_text:
      "Saat menyusun modul pelatihan kepemimpinan tingkat dasar, Anda melihat contoh studi kasus mengandung stereotipe yang mendiskreditkan kelompok pemeluk agama atau suku tertentu sebagai sumber masalah. Sikap Anda sebagai tim penyusun...",
    pilihan: [
      {
        teks: "Membiarkan contoh kasus tersebut tetap dicetak agar tidak mengubah susunan halaman.",
        skor: 1,
      },
      {
        teks: "Merevisi redaksi studi kasus menjadi netral, objektif, dan fokus pada solusi tata kelola tanpa membawa label identitas SARA.",
        skor: 5,
      },
      {
        teks: "Menambahkan catatan kaki kecil bahwa hal tersebut hanya contoh fiktif.",
        skor: 3,
      },
      {
        teks: "Menukar label suku tersebut dengan label wilayah lain yang dianggap lebih netral.",
        skor: 2,
      },
      {
        teks: "Melaporkan penulis awal secara langsung ke media tanpa mengusulkan perbaikan naskah.",
        skor: 4,
      },
    ],
    explanation:
      "Menghilangkan bias stereotipe identitas SARA dalam materi kedinasan memperkuat wawasan kebangsaan yang inklusif.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "sedang",
    question_text:
      "Menjelang peringatan hari besar nasional, beredar seruan anonim di media sosial yang mengajak memboikot seluruh simbol negara dan tidak mengakui keabsahan upacara bendera. Tanggapan profesional dan bermartabat Anda...",
    pilihan: [
      {
        teks: "Merasa ragu lalu ikut absen upacara bendera bersama keluarga.",
        skor: 1,
      },
      {
        teks: "Tetap melaksanakan penghormatan kenegaraan dengan khidmat, menjaga stabilitas lingkungan kerja, serta mengajak masyarakat menyaring ajakan provokatif dengan bijak.",
        skor: 5,
      },
      {
        teks: "Membagikan tautan ajakan boikot itu agar dilihat teman-teman sekantor.",
        skor: 2,
      },
      {
        teks: "Mengajak rekan berdebat panjang di komentar akun anonim penyebar seruan.",
        skor: 3,
      },
      {
        teks: "Mengikuti upacara dengan tertib namun tidak peduli terhadap potensi provokasi di sekitar.",
        skor: 4,
      },
    ],
    explanation:
      "Keteladanan sikap patriotik yang tenang dan ajakan literasi kebangsaan yang menyejukkan menjadi benteng utama melawan provokasi anti-NKRI.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
  {
    sub_topic: "Anti Radikalisme",
    difficulty: "sedang",
    question_text:
      "Dalam pembinaan organisasi pemuda binaan pemerintah daerah, terjadi perselisihan antara dua faksi pemuda yang mengarah pada ancaman kekerasan fisik atas nama fanatisme golongan. Langkah mediasi Anda...",
    pilihan: [
      {
        teks: "Membekukan seluruh bantuan kepemudaan selamanya agar pemerintah aman.",
        skor: 2,
      },
      {
        teks: "Segera mempertemukan perwakilan kedua faksi dalam dialog damai netral, melibatkan tokoh pemersatu dan aparat berwenang bila ada ancaman pidana, serta menegaskan hukum di atas kekerasan.",
        skor: 5,
      },
      {
        teks: "Membela faksi yang memiliki jumlah anggota lebih banyak.",
        skor: 1,
      },
      {
        teks: "Menyuruh kedua faksi menyelesaikan urusan di luar gedung pemerintah saja.",
        skor: 3,
      },
      {
        teks: "Menunda mediasi hingga kedua belah pihak saling mengajukan permohonan maaf.",
        skor: 4,
      },
    ],
    explanation:
      "Meredam konflik golongan melalui dialog adil dan penegakan aturan tanpa kekerasan menjaga ketertiban sipil dan keutuhan NKRI.",
    source_reference: "Kisi-Kisi TKP Kepmenpan-RB 321/2024 — Anti Radikalisme",
  },
];
