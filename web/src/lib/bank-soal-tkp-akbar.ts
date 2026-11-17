import type { DefinisiButirTKP } from "./bank-soal-tkp.ts";

/**
 * Bank Soal TKP Akbar (Seri 1 s.d. 5 — 225 Butir Unik) — LOLOS CPNS.
 * Seluruh butir soal memiliki bobot 1–5 teracak dan terkurasi mengacu pada Kepmenpan-RB Nomor 321 Tahun 2024.
 */
export const BANK_SOAL_TKP_AKBAR_SETS: DefinisiButirTKP[][] = [
  [
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Damar bertugas sebagai operator penginputan data kependudukan di Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil). Karena pembatasan kuota layanan harian, suasana loket cukup padat. Saat melayani, seorang ibu menegur Damar dengan nada tinggi karena ia dua kali keliru mengetik Nomor Induk Kependudukan dan nama anak pemohon sehingga proses dinilai lamban dan kurang profesional. Sikap yang paling tepat dilakukan Damar adalah...",
      "pilihan": [
        {
          "teks": "Menjelaskan dengan tenang bahwa proses verifikasi dan input data memang memerlukan kehati-hatian agar dokumen tidak bermasalah di kemudian hari.",
          "skor": 3
        },
        {
          "teks": "Meminta maaf dengan santun atas kekeliruan pengetikan dan segera menuntaskan penginputan data secara teliti hingga berkas selesai.",
          "skor": 5
        },
        {
          "teks": "Mengabaikan teguran ibu tersebut karena beranggapan kesalahan ketik hanya menambah waktu tunggu beberapa menit saja.",
          "skor": 1
        },
        {
          "teks": "Mengarahkan ibu tersebut untuk menyampaikan keluhannya melalui kotak pengaduan atau kanal aduan daring yang tersedia di ruang tunggu.",
          "skor": 2
        },
        {
          "teks": "Mengendalikan emosi dengan sabar, menyampaikan permohonan maaf, dan bertekad meningkatkan ketelitian serta kecepatan layanan pada pemohon berikutnya.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – E (4) – A (3) – D (2) – C (1). Dalam pelayanan publik, mengakui kesalahan secara santun dan langsung menuntaskan perbaikan layanan dengan teliti menunjukkan orientasi tinggi terhadap kepuasan serta ketepatan layanan bagi masyarakat (skor 5). Menahan emosi dan berjanji memperbaiki kapasitas di masa depan bernilai baik namun belum langsung menuntaskan persoalan di loket (skor 4). Menjelaskan kehati-hatian terkesan normatif/defensif (skor 3), mengarahkan ke kotak saran menunda penyelesaian langsung (skor 2), sedangkan mengabaikan keluhan mencerminkan ketidakpedulian terhadap mutu layanan (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sulit",
      "question_text": "Anda bertugas sebagai dokter jaga di unit gawat darurat Puskesmas kecamatan. Tepat ketika ambulans datang membawa pasien korban kecelakaan lalu lintas yang membutuhkan pertolongan darurat segera, Kepala Puskesmas memanggil Anda ke ruangannya untuk membahas tugas kedinasan mendesak. Tindakan yang seharusnya Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Langsung menangani pasien korban kecelakaan terlebih dahulu tanpa menunda, lalu segera menghadap dan menjelaskan situasi darurat tersebut kepada Kepala Puskesmas seusai tindakan.",
          "skor": 4
        },
        {
          "teks": "Memastikan terlebih dahulu ada rekan dokter lain yang siap menangani pasien kecelakaan tersebut sebelum Anda memenuhi panggilan Kepala Puskesmas secara singkat.",
          "skor": 3
        },
        {
          "teks": "Segera memberikan pertolongan gawat darurat kepada pasien sambil menitipkan pesan melalui rekan perawat agar Kepala Puskesmas mengetahui Anda sedang menangani keadaan darurat dan akan segera menghadap setelah pasien tertangani.",
          "skor": 5
        },
        {
          "teks": "Segera menghadap ke ruangan Kepala Puskesmas dengan harapan pembicaraan berlangsung cepat agar dapat lekas kembali ke ruang gawat darurat.",
          "skor": 2
        },
        {
          "teks": "Meminta keluarga atau pengantar pasien menunggu beberapa saat di ruang gawat darurat karena Anda harus memenuhi panggilan pimpinan terlebih dahulu.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – A (4) – B (3) – D (2) – E (1). Keselamatan nyawa pasien merupakan prioritas tertinggi dalam pelayanan publik medis, disertai komunikasi koordinatif kepada pimpinan agar tanggung jawab struktural tetap terjaga (skor 5). Langsung menolong tanpa koordinasi pesan tetap mendahulukan urgensi layanan meski komunikasinya menyusul (skor 4). Mengalihkan ke dokter lain masih menjaga keselamatan pasien namun kurang mengambil peran utama di unit jaga (skor 3). Menghadap pimpinan lebih dulu (skor 2) apalagi meminta pasien darurat menunggu (skor 1) membahayakan keselamatan penerima layanan.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sulit",
      "question_text": "Tari bertugas di meja layanan nasabah sebuah bank milik negara (BUMN). Suatu siang, seorang nasabah datang dalam keadaan panik dan memohon diberikan nomor telepon serta alamat lengkap pemilik rekening tujuan yang baru saja menipunya dalam kerja sama usaha. Dari cerita dan bukti percakapan yang ditunjukkan, Tari yakin nasabah tersebut memang menjadi korban penipuan. Keputusan yang tepat bagi Tari adalah...",
      "pilihan": [
        {
          "teks": "Memohon nasabah menunggu sejenak sementara ia berkonsultasi terlebih dahulu dengan kepala cabang mengenai kebijakan yang dapat ditempuh.",
          "skor": 3
        },
        {
          "teks": "Memberikan informasi nomor telepon dan alamat pemilik rekening terduga penipu kepada nasabah atas dasar empati agar masalah cepat selesai.",
          "skor": 1
        },
        {
          "teks": "Menolak permintaan pembukaan data pribadi nasabah lain secara tegas namun santun sesuai aturan kerahasiaan bank, serta memandu nasabah mengenai prosedur resmi pelaporan ke kepolisian agar penelusuran rekening dapat diproses secara hukum.",
          "skor": 5
        },
        {
          "teks": "Menolak permintaan tersebut dengan tegas dan ramah karena perlindungan data nasabah merupakan ketentuan hukum yang berada di luar kewenangan petugas layanan.",
          "skor": 4
        },
        {
          "teks": "Merasa bimbang dan ragu mengambil keputusan antara rasa empati terhadap korban dan kewajiban menjaga aturan kerahasiaan perbankan.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – D (4) – A (3) – E (2) – B (1). Pelayanan publik menuntut kepatuhan penuh pada prosedur hukum dan perlindungan data pribadi sekaligus sikap solutif dengan memberikan edukasi jalur pelaporan resmi (skor 5). Menolak tegas sesuai aturan tanpa arahan tindak lanjut tetap patuh SOP namun kurang solutif (skor 4). Berkonsultasi untuk aturan yang sudah jelas memperlambat kepastian layanan (skor 3), bersikap ragu menunjukkan ketidaksiapan menjalankan SOP (skor 2), dan membocorkan data nasabah melanggar hukum perbankan serta privasi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Bagus bekerja sebagai tenaga pendamping usaha mikro, kecil, dan menengah (UMKM) di Dinas Koperasi dan UKM dengan jam layanan pukul 07.30 hingga 16.00. Ketika pukul 16.05 saat Bagus bersiap pulang untuk beristirahat bersama keluarga, datang seorang pelaku usaha kecil yang sangat membutuhkan pendampingan pengurusan sertifikasi halal dan perbaikan desain kemasan. Sikap Bagus sebaiknya adalah...",
      "pilihan": [
        {
          "teks": "Meminta bantuan rekan pendamping lain yang kebetulan masih lembur untuk melayani pelaku usaha tersebut apabila ia benar-benar memiliki keperluan keluarga yang mendesak.",
          "skor": 4
        },
        {
          "teks": "Memberikan nomor telepon layanan dinas agar pelaku usaha dapat menghubungi kembali esok hari karena ia hendak segera pulang.",
          "skor": 2
        },
        {
          "teks": "Tetap menyambut pelaku usaha tersebut dengan ramah dan memberikan pendampingan konsultasi awal secara tuntas sebelum pulang.",
          "skor": 5
        },
        {
          "teks": "Meminta pelaku usaha pulang dan kembali lagi keesokan hari karena loket jam layanan resmi sudah ditutup.",
          "skor": 1
        },
        {
          "teks": "Melayani pelaku usaha tersebut secara singkat dan tergesa-gesa agar urusan selesai dan ia dapat segera pulang.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – A (4) – E (3) – B (2) – D (1). Responsivitas pelayan publik tercermin dari kesediaan mendahulukan kebutuhan mendesak masyarakat yang sudah hadir di kantor dengan sikap ramah dan tuntas (skor 5). Memastikan pelaku usaha tetap terlayani melalui rekan yang masih bertugas juga menjaga mutu layanan (skor 4). Melayani tergesa-gesa mengurangi kualitas pendampingan (skor 3), menunda via nomor kontak kurang responsif (skor 2), sedangkan menolak langsung memperlihatkan kekakuan birokrasi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Puskesmas tempat Anda bertugas menetapkan aturan wajib mengenakan masker medis di area ruang tunggu poli infeksi demi keselamatan pasien lain dan tenaga kesehatan. Saat antrean berlangsung, seorang pemohon layanan datang ke loket pendaftaran tanpa mengenakan masker. Tindakan Anda sebagai petugas loket adalah...",
      "pilihan": [
        {
          "teks": "Meminta petugas keamanan klinik untuk memberikan penjelasan aturan keselamatan dan menertibkan pemohon apabila tetap menolak.",
          "skor": 3
        },
        {
          "teks": "Bersikap acuh tak acuh terhadap pelanggaran aturan tersebut karena merasa diri Anda sendiri sudah memakai pelindung lengkap.",
          "skor": 1
        },
        {
          "teks": "Tetap melayani pendaftaran pemohon tersebut secepatnya meskipun tanpa masker agar tidak memicu perdebatan di ruang tunggu.",
          "skor": 2
        },
        {
          "teks": "Menjelaskan dengan ramah pentingnya pemakaian masker untuk keselamatan bersama di fasilitas kesehatan dan membantu menyediakan masker cadangan agar pemohon tetap dapat dilayani sesuai ketentuan.",
          "skor": 5
        },
        {
          "teks": "Menunda pelayanan untuk sementara dengan tutur kata santun hingga pemohon mengenakan masker sembari mengedukasi manfaat aturan keselamatan tersebut.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – E (4) – A (3) – C (2) – B (1). Menegakkan SOP keselamatan publik secara persuasif, ramah, dan disertai solusi praktis berupa penyediaan masker agar hak layanan warga tetap terpenuhi meraih poin tertinggi (skor 5). Menolak sementara disertai edukasi tetap menjaga aturan namun belum memberi kemudahan solusi (skor 4). Menyerahkan ke petugas keamanan menunda interaksi persuasif petugas layanan (skor 3), melayani tanpa aturan mengabaikan keselamatan umum (skor 2), dan bersikap acuh merupakan bentuk abai terhadap tanggung jawab lingkungan kerja (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Antrean pengurusan dokumen kependudukan di kantor kecamatan sangat padat sejak pagi. Pada tengah hari, rekan kerja di meja sebelah mendadak mengalami pusing berat dan lemas sehingga harus beristirahat. Koordinator pelayanan melimpahkan sementara tugas rekan tersebut kepada Anda karena mencari petugas pengganti membutuhkan waktu lama, padahal Anda sendiri sudah cukup lelah. Sikap yang Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Menerima penugasan tersebut dengan tetap melayani masyarakat sebaik mungkin, lalu memohon izin istirahat bergantian sejenak setelah antrean mulai mereda.",
          "skor": 4
        },
        {
          "teks": "Tetap membantu mengerjakan sebagian berkas sembari terus mendesak koordinator agar segera mencari pegawai pengganti secepatnya.",
          "skor": 2
        },
        {
          "teks": "Menolak pelimpahan tugas tersebut dengan alasan kelelahan dan ingin menemani rekan kerja yang sedang beristirahat.",
          "skor": 1
        },
        {
          "teks": "Menerima pelimpahan tugas dari koordinator dengan lapang dada dan melayani seluruh warga di kedua antrean secara ramah, teliti, serta tertib.",
          "skor": 5
        },
        {
          "teks": "Memberikan penjelasan secara jujur kepada warga yang mengantre agar bersabar menunggu giliran karena adanya penyesuaian petugas.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – A (4) – E (3) – B (2) – C (1). Keikhlasan mengesampingkan rasa lelah pribadi demi kelancaran pelayanan publik yang sedang padat menunjukkan dedikasi tinggi sebagai pelayan masyarakat (skor 5). Menerima tugas dengan rencana jeda istirahat saat antrean melandai tetap profesional dan realistis (skor 4). Sekadar meminta masyarakat bersabar tanpa ketegasan menerima tanggung jawab masih kurang proaktif (skor 3), terus mendesak koordinator menunjukkan ketidaksiapan membantu situasi darurat (skor 2), dan menolak tugas langsung mengorbankan kepentingan masyarakat (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Galih, seorang ASN baru berlatar belakang teknik informatika, ditugaskan sementara sebagai petugas gerai informasi publik pada pameran layanan pemerintah daerah untuk menjelaskan inovasi aplikasi dan melayani pertanyaan masyarakat. Karena berkepribadian pendiam, Galih merasa kurang nyaman harus terus berhadapan dengan banyak pengunjung. Sikap yang paling tepat bagi Galih adalah...",
      "pilihan": [
        {
          "teks": "Melayani dan menjelaskan setiap informasi layanan instansi kepada seluruh pengunjung dengan ramah, jelas, dan sebaik mungkin.",
          "skor": 5
        },
        {
          "teks": "Tetap menjalankan tugas menjaga gerai sesuai panduan standar meskipun masih berusaha membiasakan diri berinteraksi dengan keramaian.",
          "skor": 4
        },
        {
          "teks": "Menjelaskan materi layanan secara lengkap hanya kepada pengunjung yang tampak sangat membutuhkan atau bertanya berulang kali.",
          "skor": 3
        },
        {
          "teks": "Menjalankan tugas melayani pengunjung sekadarnya saja sembari berharap segera dipindahkan ke bagian teknis di belakang layar.",
          "skor": 2
        },
        {
          "teks": "Meminta atasan mengganti penugasannya saat itu juga karena merasa pelayanan tatap muka tidak sesuai dengan karakter pribadinya.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – B (4) – C (3) – D (2) – E (1). Profesionalisme pelayan publik menuntut kemampuan menempatkan kepentingan pelayanan masyarakat di atas preferensi kenyamanan pribadi (skor 5). Menjalankan tugas sesuai prosedur meski masih beradaptasi cukup baik namun kurang optimal dalam kehangatan layanan (skor 4). Memilih-milih pengunjung mencerminkan layanan tidak merata (skor 3), melayani sekadarnya menurunkan citra instansi (skor 2), dan meminta ganti posisi saat bertugas menunjukkan rendahnya komitmen pelayanan (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Di sebuah kantor pelayanan perizinan wilayah, Anda mengetahui sebagian pegawai terbiasa menerima uang 'tanda terima kasih' dari pemohon setelah berkas izin selesai diterbitkan, padahal peraturan instansi melarang keras segala bentuk pungutan liar maupun gratifikasi. Sebagai ASN yang bertugas di loket pelayanan, sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Hanya mau menerima imbalan apabila diberikan secara sukarela setelah dokumen selesai tanpa pernah meminta terlebih dahulu.",
          "skor": 2
        },
        {
          "teks": "Menolak tegas segala bentuk imbalan dari pemohon, memberikan pelayanan prima sesuai standar biaya resmi, dan mengajak rekan kerja menjaga integritas pelayanan bebas pungutan.",
          "skor": 5
        },
        {
          "teks": "Sama sekali tidak pernah mau menerima uang terima kasih dalam kondisi apa pun dan melayani masyarakat murni sesuai ketentuan resmi.",
          "skor": 4
        },
        {
          "teks": "Ikut menerima uang tanda terima kasih seperti kebiasaan pegawai lain untuk menambah kebutuhan biaya hidup keluarga.",
          "skor": 1
        },
        {
          "teks": "Berusaha sekuat tenaga menolak pemberian pemohon meskipun terkadang merasa sungkan apabila pemohon mendesak.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – C (4) – E (3) – A (2) – D (1). Pelayanan publik yang berintegritas wajib bersih dari gratifikasi dan pungutan liar serta mampu menjadi penggerak keteladanan di unit kerja (skor 5). Menolak secara pribadi tanpa pernah tergoda sudah sangat berintegritas namun lingkupnya sebatas diri sendiri (skor 4). Masih merasa sungkan atau ragu membuka celah kompromi (skor 3), menerima secara sukarela tetap tergolong gratifikasi terlarang (skor 2), dan ikut-ikutan melanggar aturan jelas mencederai etika pelayanan publik (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sulit",
      "question_text": "Dimas berhasil meraih posisi kepala seksi termuda melalui seleksi kompetensi terbuka yang ketat. Namun, ia mendengar kabar bahwa beberapa rekan sejawat yang lebih lama bekerja merasa iri dan meragukan kepemimpinannya sehingga komunikasi serta koordinasi tugas mulai renggang. Sikap yang paling tepat diambil Dimas adalah...",
      "pilihan": [
        {
          "teks": "Membentuk lingkup komunikasi akrab bersama beberapa pegawai yang memiliki pengaruh kuat saja agar program kerja tetap berjalan.",
          "skor": 2
        },
        {
          "teks": "Tetap bersikap mengayomi seluruh rekan kerja tanpa pandang bulu demi menjaga profesionalisme dan keharmonisan lingkungan kantor.",
          "skor": 4
        },
        {
          "teks": "Membiarkan seluruh desas-desus dan sikap dingin rekan kerja tanpa pendekatan apa pun karena merasa pengangkatan jabatan sudah sah.",
          "skor": 1
        },
        {
          "teks": "Membangun komunikasi terbuka untuk merangkul seluruh anggota tim dan menumbuhkan soliditas kerja sama agar tercipta rasa saling percaya di unit kerja.",
          "skor": 5
        },
        {
          "teks": "Menunjukkan ketegasan pembagian wewenang sesuai struktur organisasi agar rekan-rekan menyadari tanggung jawab masing-masing dalam pekerjaan.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – B (4) – E (3) – A (2) – C (1). Membangun kepercayaan dan soliditas lintas tim melalui komunikasi terbuka menunjukkan kecerdasan kolaboratif dalam jejaring kerja (skor 5). Mengayomi tanpa pandang bulu mencerminkan sikap netral yang baik namun belum secara aktif menggerakkan keakraban tim (skor 4). Mengandalkan otoritas struktural berisiko memperlebar jarak emosional (skor 3), membangun kelompok eksklusif memperparah friksi internal (skor 2), dan bersikap acuh membuat koordinasi terus terganggu (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Anda ditunjuk oleh Sekretaris Daerah sebagai ketua panitia peringatan hari ulang tahun daerah yang melibatkan pegawai lintas dinas sebagai anggota panitia. Sebagian besar anggota tim tersebut belum Anda kenal secara pribadi, padahal keberhasilan acara sangat bergantung pada kerja sama cepat seluruh bidang. Langkah awal Anda adalah...",
      "pilihan": [
        {
          "teks": "Memfokuskan koordinasi pada beberapa anggota tim yang sudah dikenal terlebih dahulu sebagai penggerak awal panitia.",
          "skor": 2
        },
        {
          "teks": "Mencari informasi mengenai gaya kerja masing-masing perwakilan dinas melalui rekan sejawat guna memudahkan pendekatan komunikasi.",
          "skor": 3
        },
        {
          "teks": "Memanfaatkan agenda pembukaan rapat kerja perdana untuk saling memperkenalkan diri dan membangun keakraban sebelum membahas teknis acara.",
          "skor": 4
        },
        {
          "teks": "Berinisiatif mengadakan pertemuan informal atau sesi perkenalan lebih awal sebelum rapat kerja resmi dimulai agar seluruh anggota saling mengenal dan nyaman berkoordinasi.",
          "skor": 5
        },
        {
          "teks": "Langsung membagikan daftar tugas tertulis melalui grup pesan karena meyakini kekompakan tim akan tumbuh dengan sendirinya seiring waktu.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – C (4) – B (3) – A (2) – E (1). Inisiatif menciptakan ruang keakraban awal sebelum rapat teknis mempermudah pencairan sekat antarinstansi dan mempercepat kolaborasi (skor 5). Memanfaatkan rapat perdana untuk perkenalan juga baik namun waktunya lebih terbatas (skor 4). Mengamati profil dari jauh belum membangun relasi dua arah (skor 3), hanya mendekati yang dikenal melemahkan solidaritas menyeluruh (skor 2), dan menunggu kekompakan tumbuh otomatis tanpa fasilitasi berisiko menghambat koordinasi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "mudah",
      "question_text": "Seluruh target pekerjaan harian Anda telah selesai tepat waktu dan Anda tinggal menunggu jam pulang untuk berkumpul dengan keluarga. Namun, Anda melihat rekan satu tim di meja sebelah tampak kewalahan karena tenggat laporan bulanan tinggal dua jam lagi dan masih banyak data yang belum dirampungkan. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Meminta izin kepada rekan tersebut dan atasan untuk langsung membantu mengerjakan bagian laporan yang masih tertinggal sesuai kapasitas Anda.",
          "skor": 4
        },
        {
          "teks": "Segera bersiap pulang sesuai jam kerja karena meyakini setiap pegawai memiliki uraian tugas dan tenggat masing-masing.",
          "skor": 1
        },
        {
          "teks": "Menawarkan bantuan setelah meminta izin koordinator, serta mengajak rekan lain yang pekerjaannya sudah selesai untuk bersama-sama membantu meringankan beban rekan tersebut.",
          "skor": 5
        },
        {
          "teks": "Memberikan semangat serta menyarankan rekan tersebut agar meminta bantuan staf lain yang pekerjaannya lebih ringan.",
          "skor": 2
        },
        {
          "teks": "Melihat dan mempelajari terlebih dahulu jenis kendala pekerjaannya sebelum memutuskan apakah Anda dapat membantu.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – A (4) – E (3) – D (2) – B (1). Kepedulian terhadap rekan satu tim yang diwujudkan dengan tindakan membantu sekaligus menggerakkan solidaritas rekan lain memperlihatkan kekuatan jejaring kerja dan kolaborasi (skor 5). Membantu secara pribadi setelah berkoordinasi juga bernilai sangat baik (skor 4). Mempelajari tugas dulu menunjukkan kehati-hatian namun agak lamban (skor 3), sekadar memberi saran kurang berdampak langsung (skor 2), dan bersikap individualistis melemahkan kinerja kolektif tim (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sulit",
      "question_text": "Dinas tempat Anda bekerja pernah melakukan pemeriksaan kesehatan massal terhadap pegawai, dan salah seorang staf bernama Laras sempat menjalani pengobatan penyakit menular hingga kini dinyatakan sembuh total oleh dokter. Namun, setelah kembali masuk kerja, banyak rekan tetap menjauhinya sehingga koordinasi tugas menjadi terganggu. Sebagai kepala bidang, langkah Anda adalah...",
      "pilihan": [
        {
          "teks": "Menyarankan Laras untuk selalu membawa salinan surat keterangan sehat dari dokter guna meyakinkan rekan kerja saat berkoordinasi.",
          "skor": 3
        },
        {
          "teks": "Menghibur Laras secara pribadi serta memintanya tetap bersabar dan fokus pada pekerjaannya sendiri.",
          "skor": 2
        },
        {
          "teks": "Menggelar rapat koordinasi bidang yang menghadirkan penjelasan medis terpercaya guna meluruskan kesalahpahaman mengenai status kesembuhan Laras serta memulihkan kerja sama tim.",
          "skor": 5
        },
        {
          "teks": "Bersikap biasa saja karena beranggapan prasangka rekan-rekan kerja akan mereda dan terlupakan dengan sendirinya.",
          "skor": 1
        },
        {
          "teks": "Memberikan edukasi yang jelas kepada seluruh pegawai di unit Anda untuk menghapus stigma keliru terhadap penyintas penyakit yang sudah dinyatakan sembuh.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – E (4) – A (3) – B (2) – D (1). Sebagai pimpinan unit, memfasilitasi forum komunikasi dua arah dengan informasi valid untuk meluruskan stigma sekaligus mengembalikan keharmonisan jejaring kerja tim adalah solusi sistemik terbaik (skor 5). Memberikan edukasi langsung kepada pegawai bernilai positif meski kurang dialogis (skor 4). Membebankan pembuktian kepada korban stigma kurang adil dan tidak menyelesaikan akar masalah sosial tim (skor 3), sekadar menyemangati belum memulihkan alur kerja (skor 2), sedangkan membiarkan masalah berlarut merusak produktivitas tim (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sulit",
      "question_text": "Dalam rapat penyusunan program kerja instansi, rekan kerja Anda mengajukan sebuah konsep acara yang disukai sebagian besar peserta rapat. Namun, Anda melihat beberapa poin dalam konsep tersebut tidak selaras dengan pedoman anggaran sehingga menyampaikan keberatan objektif yang akhirnya disetujui pimpinan rapat. Rekan Anda merasa Anda sengaja menjatuhkannya di forum dan menjadi tersinggung. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Tidak merasa perlu berkomunikasi lebih lanjut karena menilai perbedaan pandangan dalam forum kerja merupakan hal yang lumrah.",
          "skor": 1
        },
        {
          "teks": "Menemuinya secara tulus untuk meminta maaf atas ketidaknyamanan penyampaian dan menjelaskan bahwa masukan tersebut murni demi kelancaran program bersama tanpa maksud pribadi, lalu mengajaknya berkolaborasi menyempurnakan konsep.",
          "skor": 5
        },
        {
          "teks": "Memohon kepada pimpinan rapat agar menganulir keberatan Anda dan kembali memakai konsep awal rekan tersebut demi menjaga hubungan baik.",
          "skor": 2
        },
        {
          "teks": "Meminta maaf dengan tulus secara pribadi kepada rekan tersebut atas ketegangan yang muncul selama rapat agar hubungan kerja tetap baik.",
          "skor": 4
        },
        {
          "teks": "Menyampaikan permintaan maaf setelah diingatkan rekan lain agar koordinasi persiapan program tidak mengalami kendala.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – D (4) – E (3) – C (2) – A (1). Menjaga kualitas kerja sekaligus merawat hubungan baik melalui permintaan maaf tulus, klarifikasi objektif, dan ajakan berkolaborasi kembali menandakan kedewasaan jejaring kerja (skor 5). Meminta maaf tulus tanpa klarifikasi substansi tetap baik untuk meredakan emosi (skor 4). Meminta maaf karena dorongan orang lain menunjukkan kurangnya inisiatif pribadi (skor 3), menarik pendapat benar demi menghindari gesekan mengorbankan integritas program (skor 2), dan mengabaikan perasaan rekan memperuncing keretakan tim (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Raka ditempatkan sebagai CPNS di kantor cabang luar provinsi yang memiliki latar belakang budaya serta kebiasaan pergaulan yang jauh berbeda dari daerah asalnya. Akibat gegar budaya, Raka merasa canggung membaur dengan rekan kantor sehingga koordinasi pekerjaan pun ikut tersendat. Tindakan yang paling tepat dilakukan Raka adalah...",
      "pilihan": [
        {
          "teks": "Mencurahkan rasa kesepian hanya kepada sahabat lama di luar kantor tanpa berupaya menjalin kedekatan dengan lingkungan kerja baru.",
          "skor": 1
        },
        {
          "teks": "Menunggu rekan kerja di kantor tersebut yang terlebih dahulu menyapa dan mengajak Raka terlibat dalam percakapan.",
          "skor": 2
        },
        {
          "teks": "Mendekati satu atau dua rekan kerja yang dirasa paling mudah diajak berkomunikasi sebagai langkah awal membangun jejaring di kantor.",
          "skor": 3
        },
        {
          "teks": "Berinisiatif membuka percakapan ringan dengan rekan sekantor pada waktu senggang serta aktif mengikuti kegiatan kebersamaan pegawai untuk membangun relasi kerja.",
          "skor": 5
        },
        {
          "teks": "Menetapkan tekad untuk mulai membuka diri dan menyapa rekan-rekan kerja secara hangat guna mempercepat proses adaptasi tim.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – E (4) – C (3) – B (2) – A (1). Mengambil langkah konkret untuk berinteraksi aktif dan berpartisipasi dalam kegiatan bersama tim mempercepat terciptanya kepercayaan serta kelancaran koordinasi kerja (skor 5). Niat membuka diri merupakan sikap mental baik namun belum berwujud tindakan kolektif (skor 4). Mendekati satu orang saja membatasi keluwesan jejaring kerja (skor 3), menunggu didekati bersifat pasif (skor 2), dan menutup diri hanya pada lingkaran luar kantor memperburuk hambatan koordinasi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sulit",
      "question_text": "Sebagai ketua tim proyek pembangunan fasilitas layanan terpadu daerah, Anda menerima masukan dari tim pengawas teknis untuk mengubah metode pemasangan struktur demi efisiensi operasional jangka panjang. Namun, penyesuaian itu menuntut perubahan bagian bangunan yang sudah terpasang dan berdampak pada penambahan biaya. Sikap Anda dalam mengambil keputusan adalah...",
      "pilihan": [
        {
          "teks": "Langsung menerapkan perubahan metode proyek tersebut di lapangan saat itu juga tanpa menghitung risiko maupun melibatkan pihak terkait.",
          "skor": 1
        },
        {
          "teks": "Mencatat rekomendasi efisiensi tersebut sebagai bahan rujukan perbaikan untuk diterapkan pada proyek pembangunan berikutnya.",
          "skor": 3
        },
        {
          "teks": "Melaporkan usulan tim pengawas tersebut kepada pimpinan instansi dan pejabat pembuat komitmen untuk memperoleh arahan kebijakan lebih lanjut.",
          "skor": 4
        },
        {
          "teks": "Tetap bertahan sepenuhnya pada perencanaan awal dan mengesampingkan masukan tim pengawas demi menjaga kelancaran administrasi.",
          "skor": 2
        },
        {
          "teks": "Menghargai kajian teknis tim pengawas dan memaparkan seluruh opsi efisiensi beserta konsekuensi biaya dalam rapat koordinasi resmi yang dihadiri seluruh pemangku kepentingan terkait.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – C (4) – B (3) – D (2) – A (1). Kolaborasi proyek yang efektif menghargai analisis profesional anggota tim namun tetap menempuh komunikasi lintas pemangku kepentingan sebelum mengubah keputusan strategis berisiko anggaran (skor 5). Melapor berjenjang kepada atasan juga prosedural meski belum menyatukan semua pihak terkait sekaligus (skor 4). Menunda untuk proyek berikutnya mengabaikan peluang efisiensi saat ini (skor 3), menolak masukan menutup kolaborasi pengawasan (skor 2), dan mengeksekusi sepihak tanpa persetujuan membahayakan akuntabilitas proyek (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Saat menonton televisi di ruang keluarga, Anda mendapati sebuah program siaran nasional menayangkan banyak adegan dan gurauan yang tidak pantas serta bertentangan dengan nilai kesopanan dan norma budaya masyarakat Indonesia. Melihat kondisi tersebut, sikap yang sebaiknya Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Mengirimkan pengaduan resmi melalui kanal aduan Komisi Penyiaran Indonesia (KPI) agar tayangan mendapat pengawasan dan teguran, sekaligus memilihkan tontonan yang mendidik bagi keluarga.",
          "skor": 5
        },
        {
          "teks": "Menghentikan menonton tayangan tersebut dan menggantinya dengan program bermuatan budaya lokal serta edukasi agar keluarga tidak terpengaruh nilai negatif.",
          "skor": 4
        },
        {
          "teks": "Tetap menikmati tayangan tersebut dan sekadar melarang anak di bawah umur ikut menontonnya.",
          "skor": 1
        },
        {
          "teks": "Mengunggah status keluhan mengenai buruknya tayangan televisi tersebut di media sosial pribadi.",
          "skor": 2
        },
        {
          "teks": "Turut mendukung petisi atau kampanye masyarakat yang menuntut lembaga penyiaran menghadirkan program ramah keluarga dan beradab.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – B (4) – E (3) – D (2) – C (1). Menjaga norma sosial budaya tidak cukup dengan menghindari secara pasif, melainkan menempuh langkah korektif yang resmi dan konstruktif melalui lembaga pengawas penyiaran (skor 5). Menghindari demi melindungi keluarga bernilai baik pada ranah privat (skor 4). Mendukung petisi membantu mendorong suara publik secara umum (skor 3), mengeluh di media sosial kurang terarah (skor 2), sedangkan tetap menontonnya menunjukkan lemahnya keteladanan menjaga norma budaya (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sulit",
      "question_text": "Bayu bekerja pada sebuah lembaga kerja sama multinasional yang pegawainya berasal dari berbagai negara dan daerah. Meskipun bangga dapat berkontribusi di sana, Bayu beberapa kali mendapat sindiran bernada rasial dari sejumlah rekan yang menganggap orang dari latar belakang suku dan negara asalnya kurang cakap bekerja. Sikap Bayu yang paling bijaksana adalah...",
      "pilihan": [
        {
          "teks": "Menjawab prasangka tersebut melalui prestasi dan etos kerja nyata yang unggul sambil tetap bersikap ramah serta profesional sehingga mengubah cara pandang mereka.",
          "skor": 5
        },
        {
          "teks": "Memilih berdiam diri saja agar tidak memicu perdebatan mengingat statusnya masih pegawai baru.",
          "skor": 2
        },
        {
          "teks": "Tetap berfokus mengerjakan seluruh tanggung jawab tugas pribadi tanpa menghiraukan komentar bernada prasangka tersebut.",
          "skor": 3
        },
        {
          "teks": "Membalas sindiran tersebut dengan melontarkan lelucon yang merendahkan negara atau budaya asal mereka.",
          "skor": 1
        },
        {
          "teks": "Menegur rekan-rekan tersebut secara santun namun tegas bahwa komentar yang merendahkan suku atau ras tertentu tidak dapat dibenarkan di lingkungan kerja.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – E (4) – C (3) – B (2) – D (1). Membuktikan kesetaraan kapasitas melalui kinerja nyata sekaligus membalas prasangka dengan sikap ramah dan bermartabat efektif meruntuhkan stereotip etnosentrisme tanpa memperkeruh harmoni (skor 5). Menegur secara tegas menjaga harga diri dengan baik namun kurang membangun jembatan budaya (skor 4). Fokus bekerja tanpa merespons kurang mengoreksi budaya kerja (skor 3), diam pasif membiarkan diskriminasi berlanjut (skor 2), dan membalas penghinaan sama-sama mencerminkan sikap intoleran (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Dua warga di lingkungan perumahan yang juga bekerja di instansi yang sama, Arman dan Doni, terlibat ketegangan karena Doni menuduh Arman menggunakan dana kas kegiatan sosial untuk keperluan pribadi tanpa bukti jelas. Apabila Anda berada pada posisi Arman, langkah bijaksana yang Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Tetap menahan diri dan menunggu hingga emosi Doni benar-benar mereda terlebih dahulu sebelum berbicara.",
          "skor": 2
        },
        {
          "teks": "Memutuskan menjauhi dan memutus interaksi sosial dengan Doni karena merasa nama baik telah dicemarkan.",
          "skor": 1
        },
        {
          "teks": "Menjelaskan kepada Doni bahwa tuduhan tersebut tidak benar meski Anda sempat merasa kesal oleh prasangkanya.",
          "skor": 3
        },
        {
          "teks": "Menjelaskan langsung duduk perkara penggunaan dana secara transparan kepada Doni agar kesalahpahaman segera berakhir.",
          "skor": 4
        },
        {
          "teks": "Menemui Doni secara tenang, meminta penjelasan sumber keraguannya, serta menunjukkan catatan pembukuan secara terbuka guna meluruskan kesalahpahaman di antara keduanya.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – D (4) – C (3) – A (2) – B (1). Menyelesaikan konflik sosial melalui dialog dua arah yang tenang, mendengarkan alasan pihak lain, dan membuktikan transparansi fakta memulihkan kerukunan lingkungan secara cepat (skor 5). Menjelaskan secara langsung sudah baik meski kurang menggali akar kekeliruan informasi lawan bicara (skor 4). Menjelaskan sambil kesal berisiko memicu debat emosional (skor 3), menunggu terlalu pasif membuat rumor berkembang (skor 2), dan menjauhi memperpanjang perpecahan sosial (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Ketika membaca berita mancanegara di pagi hari, Anda mengetahui ribuan warga sipil terpaksa mengungsi akibat konflik bersenjata di negara lain dan sangat membutuhkan bantuan pangan serta layanan kesehatan. Sikap Anda yang mencerminkan kesadaran sosial budaya dan nilai kemanusiaan adalah...",
      "pilihan": [
        {
          "teks": "Menumbuhkan empati serta kesadaran hak asasi manusia dan menyalurkan donasi kemanusiaan melalui lembaga penyalur bantuan resmi terpercaya seperti Palang Merah atau badan pengungsi internasional.",
          "skor": 5
        },
        {
          "teks": "Menolak segala bentuk bantuan atau penerimaan pengungsi kemanusiaan dengan alasan berpotensi mengancam tatanan budaya setempat.",
          "skor": 1
        },
        {
          "teks": "Sekadar bersyukur bahwa negara Indonesia dalam keadaan aman dan damai tanpa terdorong melakukan aksi kepedulian apa pun.",
          "skor": 2
        },
        {
          "teks": "Mengajak komunitas atau organisasi sosial tempat Anda bergabung untuk menggalang bantuan dana guna meringankan beban para korban konflik tersebut.",
          "skor": 4
        },
        {
          "teks": "Mempercayakan sepenuhnya penanganan para pengungsi kepada organisasi kemanusiaan internasional yang memang bertugas di bidang tersebut.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – D (4) – E (3) – C (2) – B (1). Empati kemanusiaan yang disertai penyaluran bantuan melalui lembaga resmi yang tepat sasaran dan akuntabel menandai kepekaan sosial budaya global yang matang (skor 5). Menggalang donasi bersama komunitas bernilai sosial tinggi meski skalanya terbatas (skor 4). Menyerahkan pada lembaga internasional bersifat pasif (skor 3), hanya bersyukur tanpa empati kurang peduli (skor 2), dan menolak atas dasar prasangka bertentangan dengan nilai kemanusiaan Pancasila (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sulit",
      "question_text": "Di lingkungan kantor yang majemuk, terdapat seorang rekan kerja baru dari daerah terpencil yang memiliki logat bahasa khas, kebiasaan mengenakan atribut adat tertentu pada hari besar, serta pembawaan yang berbeda dari mayoritas pegawai lain. Sebagian rekan kerja tampak canggung atau menjadikannya bahan candaan. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Memperlakukan rekan tersebut secara setara, ramah, dan inklusif, serta mengajak rekan-rekan lain membangun suasana kerja yang menghargai keunikan latar belakang setiap individu.",
          "skor": 5
        },
        {
          "teks": "Menjaga jarak dan membatasi pergaulan dengannya karena menganggap kebiasaannya kurang sesuai dengan lingkungan perkotaan.",
          "skor": 1
        },
        {
          "teks": "Menyarankannya untuk segera menanggalkan kebiasaan daerah asalnya agar tidak terus menjadi bahan pembicaraan rekan kantor.",
          "skor": 2
        },
        {
          "teks": "Bersikap wajar dan menghormati kebiasaan budayanya serta tetap menjalin kerja sama tim secara profesional.",
          "skor": 4
        },
        {
          "teks": "Tetap memperlakukannya sesuai etika formal pekerjaan tanpa ikut menyinggung atau mengomentari perbedaannya.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – D (4) – E (3) – C (2) – B (1). Kemampuan bekerja efektif dalam masyarakat majemuk menuntut sikap inklusif aktif yang tidak hanya menghormati perbedaan, tetapi juga menciptakan iklim saling menghargai di lingkungan sekitar (skor 5). Bersikap wajar dan profesional sudah baik secara pribadi (skor 4). Sebatas formalitas kurang menumbuhkan kehangatan sosial (skor 3), memintanya mengubah identitas budaya menekan keberagaman (skor 2), dan menjauhi merupakan perilaku diskriminatif (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Pada hari Minggu pagi, masyarakat di kelurahan tempat Anda bermukim menggelar kerja bakti membersihkan saluran air dan merenovasi rumah warga kurang mampu yang hampir roboh. Namun, beberapa teman sebaya Anda menilai kegiatan gotong royong sudah ketinggalan zaman karena di negara maju semua layanan dikerjakan secara komersial. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Memilih tidak mengikuti kerja bakti dan tetap berada di rumah menikmati hiburan gawai karena setuju dengan anggapan teman sebaya.",
          "skor": 1
        },
        {
          "teks": "Turut hadir dan berperan aktif dalam kerja bakti bersama warga sebagai wujud nyata pelestarian budaya gotong royong bangsa Indonesia.",
          "skor": 5
        },
        {
          "teks": "Tetap datang ke lokasi kerja bakti menjelang kegiatan berakhir agar tetap menyapa dan terlihat hadir oleh pengurus warga.",
          "skor": 3
        },
        {
          "teks": "Mengikuti kegiatan kerja bakti dan gotong royong tersebut sebagai bentuk partisipasi kewajiban sosial di lingkungan tempat tinggal.",
          "skor": 4
        },
        {
          "teks": "Sekadar menitipkan sumbangan makanan atau minuman ringan untuk warga yang bekerja tanpa meluangkan waktu turun langsung.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – D (4) – C (3) – E (2) – A (1). Memiliki ketahanan budaya di tengah arus modernisasi ditunjukkan dengan kesadaran aktif melestarikan gotong royong sebagai jati diri bangsa (skor 5). Berpartisipasi sebagai kewajiban warga bernilai baik namun kesadaran nilai budayanya lebih rendah dari pelestarian aktif (skor 4). Hadir saat hampir selesai kurang tulus (skor 3), sekadar mengirim konsumsi mengurangi interaksi kebersamaan warga (skor 2), dan absen karena merasa tradisi kuno mengikis nilai sosial budaya (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sulit",
      "question_text": "Surya mendapat penugasan baru di wilayah pesisir yang memiliki adat istiadat masyarakat yang sangat khas. Di sana, warga terbiasa berdiskusi hingga malam hari di balai adat serta berbicara dengan intonasi suara yang keras dan lugas, berbeda jauh dengan lingkungan asal Surya yang serba tenang dan halus. Sikap yang paling tepat ditunjukkan Surya adalah...",
      "pilihan": [
        {
          "teks": "Menyarankan tokoh setempat agar warga menggunakan intonasi suara lebih pelan ketika berbicara dengan pendatang.",
          "skor": 2
        },
        {
          "teks": "Mempelajari makna sosial di balik tradisi pertemuan serta gaya tutur warga setempat dengan pikiran terbuka, dan menyesuaikan diri secara santun tanpa berprasangka.",
          "skor": 5
        },
        {
          "teks": "Menganggap masyarakat setempat kurang sopan dan memilih menjauh dari kegiatan kemasyarakatan di luar jam kantor.",
          "skor": 1
        },
        {
          "teks": "Mengikuti ketentuan tugas dinas secara wajar sambil membatasi interaksi sosial dengan warga hanya pada urusan resmi saja.",
          "skor": 3
        },
        {
          "teks": "Menghargai keunikan adat komunikasi serta kebiasaan masyarakat lokal tersebut dan tetap bersikap ramah saat berinteraksi dengan warga.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – E (4) – D (3) – A (2) – C (1). Adaptasi sosial budaya yang matang tampak dari kesediaan memahami konteks tradisi lokal secara terbuka dan berbaur secara hormat tanpa menghakimi dengan standar daerah asal (skor 5). Menghormati dan bersikap ramah sudah baik meski belum mendalami makna budaya lokal (skor 4). Membatasi pergaulan menghambat kedekatan sosial (skor 3), meminta warga mengubah cara bicara terkesan etnosentris (skor 2), dan mencap kasar jelas menunjukkan kegagalan adaptasi budaya (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sedang",
      "question_text": "Mulai bulan depan, seluruh unit kerja di instansi Anda diwajibkan beralih ke sistem digitalisasi terpadu sehingga seluruh capaian tugas harian harus dilaporkan melalui aplikasi kepegawaian daring. Pada pekan uji coba, Anda masih kesulitan memahami alur menu aplikasi sehingga pengisian laporan terasa melambat. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Memanfaatkan kelemahan atau celah teknis pada aplikasi sebagai alasan agar kantor kembali memakai laporan manual.",
          "skor": 1
        },
        {
          "teks": "Tetap bersemangat menggunakan aplikasi laporan tersebut setiap hari agar keterampilan digital semakin terasah.",
          "skor": 4
        },
        {
          "teks": "Terus mencoba mengoperasikan aplikasi pelaporan tanpa mengeluh meskipun sesekali masih kebingungan.",
          "skor": 3
        },
        {
          "teks": "Mendukung penuh transformasi digital tersebut dengan berkomitmen mempelajari panduan sistem secara tekun serta berdiskusi dengan tim teknis hingga mahir menggunakannya.",
          "skor": 5
        },
        {
          "teks": "Menaati kebijakan penggunaan aplikasi sekadar sebagai formalitas pelaporan rutin tanpa berupaya mendalami fitur efisiensi lainnya.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – B (4) – C (3) – E (2) – A (1). Sikap terbuka disertai komitmen belajar aktif untuk menguasai sistem teknologi baru merupakan wujud pemanfaatan TIK guna meningkatkan kinerja ASN (skor 5). Semangat berlatih secara mandiri juga baik meski tanpa dukungan konsultasi teknis (skor 4). Mencoba tanpa mengeluh bernilai cukup (skor 3), sekadar patuh formalitas tidak mendorong peningkatan efisiensi (skor 2), dan mencari celah sistem untuk menghindari digitalisasi menghambat kemajuan instansi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sulit",
      "question_text": "Sebagai pimpinan di sebuah instansi layanan publik yang menerapkan kebijakan kerja fleksibel jarak jauh (separuh pegawai bekerja dari rumah secara bergantian), seorang staf mengusulkan pemakaian aplikasi manajemen proyek daring untuk memantau progres pekerjaan seluruh anggota tim secara terpadu. Tanggapan Anda adalah...",
      "pilihan": [
        {
          "teks": "Meminta staf pengusul melakukan riset perbandingan beberapa aplikasi manajemen kerja terlebih dahulu untuk dibahas pada rapat berikutnya.",
          "skor": 3
        },
        {
          "teks": "Menyetujui penggunaan perangkat lunak pemantauan daring dengan memprioritaskan aplikasi yang biaya langganannya paling terjangkau bagi anggaran unit.",
          "skor": 4
        },
        {
          "teks": "Menolak usulan teknologi pemantauan tersebut dan memilih mengurangi jumlah pegawai kontrak agar beban pengawasan lebih ringan.",
          "skor": 1
        },
        {
          "teks": "Menyetujui gagasan pemanfaatan aplikasi pemantauan kerja tersebut dengan menugaskan tim terkait mengkaji platform yang paling sesuai alur kerja instansi, terjamin keamanan datanya, dan efisien.",
          "skor": 5
        },
        {
          "teks": "Memilih mengeluarkan aturan presensi manual saja agar unit kerja tidak perlu mengeluarkan biaya pengadaan aplikasi baru.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – B (4) – A (3) – E (2) – C (1). Memanfaatkan peluang teknologi informasi secara selektif dengan memperhatikan kesesuaian alur kerja dan keamanan data instansi menunjukkan kepemimpinan TIK yang efektif dan bijak (skor 5). Menyetujui dengan fokus efisiensi biaya tetap mendukung digitalisasi meski mengesampingkan aspek kecocokan fitur dan keamanan (skor 4). Menyuruh riset tanpa ketegasan arah kebijakan memperlambat respons (skor 3), bertahan dengan cara manual menolak inovasi (skor 2), dan memangkas pegawai bukan solusi manajemen kerja (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Dewasa ini hampir seluruh proses pencarian informasi karier, pelatihan peningkatan kompetensi, hingga pendaftaran sertifikasi profesi dilakukan melalui portal berbasis internet, sementara Aditya yang baru lulus kuliah merasa belum terbiasa memanfaatkan sistem informasi daring. Langkah tepat yang sebaiknya diambil Aditya adalah...",
      "pilihan": [
        {
          "teks": "Menyeleksi informasi dari beberapa lembaga besar saja karena merasa lebih yakin terhadap kejelasan prosedurnya.",
          "skor": 3
        },
        {
          "teks": "Tetap hanya mengandalkan pengumuman cetak di surat kabar lokal atau papan informasi fisik karena enggan belajar sistem daring.",
          "skor": 1
        },
        {
          "teks": "Mulai membiasakan diri mencari informasi peluang pengembangan karier di situs web resmi serta kanal digital tepercaya dan melamar melalui sistem daring.",
          "skor": 4
        },
        {
          "teks": "Meminta informasi lowongan dan pengumuman pelatihan secara lisan dari kenalan yang sudah bekerja di instansi besar.",
          "skor": 2
        },
        {
          "teks": "Mengikuti pelatihan peningkatan keterampilan kerja secara daring sembari aktif menelusuri informasi dan mengajukan pendaftaran melalui portal resmi berbasis internet.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – C (4) – A (3) – D (2) – B (1). Memanfaatkan teknologi digital tidak hanya untuk mengakses sistem pendaftaran daring, tetapi juga aktif mengikuti pelatihan daring demi meningkatkan kapabilitas diri meraih skor maksimal (skor 5). Mulai beralih ke sistem portal resmi mencerminkan kesiapan adaptasi yang baik (skor 4). Terlalu membatasi pilihan tanpa belajar menguasai sistem membatasi peluang (skor 3), mengandalkan kenalan bersifat pasif (skor 2), dan bertahan pada cara cetak menghambat perkembangan diri di era digital (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sedang",
      "question_text": "Sejumlah rekan di kantor kerap menyarankan Anda agar segera mengganti telepon pintar bermodel lama milik Anda dengan seri terbaru yang lebih modern. Padahal, perangkat yang Anda miliki saat ini masih berjalan lancar untuk mendukung aplikasi surat dinas, pesan koordinasi, dan otentikasi kerja harian. Sikap bijak Anda adalah...",
      "pilihan": [
        {
          "teks": "Tetap mengoptimalkan perangkat yang ada secara bijaksana dan baru mempertimbangkan pembelian gawai baru apabila perangkat lama sudah tidak kompatibel mendukung sistem aplikasi kerja.",
          "skor": 5
        },
        {
          "teks": "Mulai menyisihkan tabungan secara terencana untuk berjaga-jaga membeli perangkat baru di waktu mendatang.",
          "skor": 3
        },
        {
          "teks": "Tidak terpengaruh dorongan rekan kerja dan tetap mempertahankan perangkat lama selama masih layak serta aman menunjang tugas kedinasan.",
          "skor": 4
        },
        {
          "teks": "Langsung membeli gawai keluaran terbaru yang mahal demi melampaui ekspektasi dan gaya hidup rekan-rekan kantor.",
          "skor": 1
        },
        {
          "teks": "Meminta rekomendasi spesifikasi telepon pintar keluaran terbaru kepada rekan kerja agar tidak ketinggalan tren.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – C (4) – B (3) – E (2) – D (1). Literasi TIK yang sehat bagi ASN menekankan fungsi guna dan kompatibilitas teknologi terhadap produktivitas kerja, bukan perilaku konsumtif mengikuti tren (skor 5). Mengabaikan godaan gengsi dan tetap memakai perangkat yang layak bernilai tinggi meski kurang antisipatif terhadap pembaruan sistem mendatang (skor 4). Menabung terencana bersifat netral (skor 3), mengikuti saran tren tanpa kebutuhan kerja (skor 2), dan membeli demi gengsi (skor 1) tidak bijak secara finansial maupun fungsional.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sulit",
      "question_text": "Citra ditugaskan menyelenggarakan rapat koordinasi strategis lintas unit secara virtual dalam dua hari ke depan. Namun, akun aplikasi konferensi video gratis miliknya membatasi durasi dan jumlah peserta rapat. Seorang rekan menawarkan akun berbayar pribadi miliknya agar rapat dapat berlangsung tanpa batas waktu. Keputusan terbaik Citra adalah...",
      "pilihan": [
        {
          "teks": "Beralih menggunakan aplikasi rapat daring gratis lain meskipun kualitas suara dan kestabilan tampilannya kurang memadai.",
          "skor": 3
        },
        {
          "teks": "Memanfaatkan sementara akun berbayar rekan kerja karena waktunya mendesak agar persiapan cepat selesai sambil memastikan akses ruang rapat tetap terkendali.",
          "skor": 4
        },
        {
          "teks": "Melaporkan kendala akun gratis tersebut kepada atasan dan meminta rapat koordinasi strategis ditunda sampai waktu yang belum ditentukan.",
          "skor": 1
        },
        {
          "teks": "Tetap memaksakan penggunaan akun pribadi gratis dengan membagi rapat menjadi beberapa sesi terputus meski berisiko mengganggu alur pembahasan.",
          "skor": 2
        },
        {
          "teks": "Mengusulkan kepada bagian pengelola TI kantor untuk segera menyediakan lisensi akun resmi berbayar milik instansi sehingga rapat berjalan lancar sekaligus menjamin keamanan data kedinasan.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – B (4) – A (3) – D (2) – C (1). Mengupayakan infrastruktur akun resmi milik instansi memadukan solusi teknologi jangka panjang, kelancaran koordinasi, serta tata kelola keamanan informasi kedinasan (skor 5). Meminjam akun berbayar rekan menjadi alternatif taktis yang cepat namun kurang ideal dari sisi tata kelola data resmi (skor 4). Aplikasi berkualitas rendah menurunkan efektivitas komunikasi (skor 3), rapat terputus mengganggu fokus (skor 2), dan menunda agenda strategis menghambat kinerja organisasi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Dalam beberapa pekan terakhir, kawasan tempat tinggal Anda kerap mengalami tindak pencurian kendaraan bermotor maupun barang berharga warga. Sebagai warga yang melek teknologi informasi dan komunikasi, usulan yang paling tepat Anda sampaikan dalam forum musyawarah warga adalah...",
      "pilihan": [
        {
          "teks": "Menunggu warga lain menyampaikan gagasan pemasangan kamera pengawas dalam rapat, baru kemudian menyatakan dukungan penuh.",
          "skor": 3
        },
        {
          "teks": "Menyarankan pengurus lingkungan agar lebih rajin mencari informasi mengenai perkembangan teknologi keamanan perumahan modern.",
          "skor": 2
        },
        {
          "teks": "Mengusulkan pengadaan patungan pemasangan kamera pengawas (CCTV) di titik-titik akses strategis lingkungan yang dipadukan dengan pengaktifan kembali ronda malam warga.",
          "skor": 5
        },
        {
          "teks": "Mengusulkan agar setiap warga memasang kamera pengawas mandiri di depan rumah masing-masing sesuai kemampuan guna memantau jalan lingkungan.",
          "skor": 4
        },
        {
          "teks": "Memilih tidak mengusulkan apa pun karena rumah pribadi Anda sudah aman terpasang sistem kamera pengawas sendiri.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – D (4) – A (3) – B (2) – E (1). Mengintegrasikan pemanfaatan teknologi pengawasan digital (CCTV) dengan kearifan kolaborasi warga (ronda malam) memberikan perlindungan keamanan lingkungan yang komprehensif dan partisipatif (skor 5). Pemasangan per rumah membantu namun pengawasan akses kolektif kurang terpadu (skor 4). Menunggu usulan orang lain bersifat pasif (skor 3), sekadar menyarankan pengurus belajar teknologi tidak memberi solusi konkret (skor 2), dan bersikap masa bodoh karena diri sendiri sudah aman menunjukkan rendahnya kepedulian lingkungan (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sulit",
      "question_text": "Belakangan ini beredar luas tautan undangan digital, pesan tawaran aplikasi investasi menguntungkan, serta berkas lampiran mencurigakan di berbagai grup percakapan pegawai. Sebagian rekan kerja tampak tergoda mengeklik dan mengisi data pada tautan tersebut karena dijanjikan kemudahan akses layanan serta keuntungan cepat. Sikap Anda menghadapi fenomena digital tersebut adalah...",
      "pilihan": [
        {
          "teks": "Menyimpan tautan tersebut sementara waktu sembari mengamati dampak yang dialami rekan lain sebelum memutuskan ikut mencoba.",
          "skor": 2
        },
        {
          "teks": "Tidak mengeklik tautan mencurigakan tersebut, memeriksa kebenarannya lewat saluran resmi lembaga berwenang, serta mengedukasi rekan kerja mengenai risiko pencurian data dan keamanan siber.",
          "skor": 5
        },
        {
          "teks": "Menahan diri untuk tidak langsung mengakses tautan tersebut dan meminta pendapat petugas keamanan TI kantor guna memastikan keamanannya sebelum dibagikan.",
          "skor": 4
        },
        {
          "teks": "Menolak mengikuti ajakan pada tautan tersebut untuk diri sendiri karena menyadari tingginya risiko kejahatan siber pada aplikasi tak resmi.",
          "skor": 3
        },
        {
          "teks": "Langsung mengeklik tautan tersebut dan mengisi data pribadi maupun akun kantor agar tidak tertinggal informasi peluang terbaru.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – C (4) – D (3) – A (2) – E (1). Kewaspadaan terhadap kejahatan siber (pengelabuan data), verifikasi ke sumber resmi, dan inisiatif mengedukasi lingkungan kerja melindungi keamanan informasi individu maupun instansi (skor 5). Berkonsultasi dengan tim keamanan TI mencerminkan kehati-hatian yang baik (skor 4). Menjaga diri sendiri tetap aman namun tidak melindungi rekan lain (skor 3), menunggu korban lain berisiko kurang etis (skor 2), dan mengisi data sembarangan membahayakan keamanan sistem informasi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Saat menyelesaikan rancangan laporan infografis capaian kinerja dinas untuk diserahkan kepada pimpinan daerah, Irfan menemukan satu kekeliruan angka indikator di bagian lampiran yang sebenarnya dapat disamarkan secara tampilan sehingga kecil kemungkinan disadari pembaca. Keputusan yang paling mencerminkan profesionalisme Irfan adalah...",
      "pilihan": [
        {
          "teks": "Menyerahkan laporan apa adanya dan berdalih bahwa kekeliruan berasal dari unit penyedia data awal apabila kelak ditemukan.",
          "skor": 1
        },
        {
          "teks": "Membiarkan kesalahan kecil tersebut tetap tercantum selama atasan maupun pihak eksternal tidak menanyakannya.",
          "skor": 2
        },
        {
          "teks": "Mengakui kekeliruan tersebut kepada pimpinan dan menawarkan opsi revisi segera sebelum bahan laporan dicetak serta dipublikasikan.",
          "skor": 4
        },
        {
          "teks": "Memperbaiki kesalahan angka tersebut secara diam-diam meskipun harus menggeser sedikit jadwal penyerahan tanpa memberi tahu pihak lain.",
          "skor": 3
        },
        {
          "teks": "Segera melaporkan kekeliruan data tersebut secara jujur kepada atasan, langsung memperbaikinya dengan angka valid, dan bertanggung jawab penuh atas mutu hasil laporan.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – C (4) – D (3) – B (2) – A (1). Profesionalisme menuntut integritas terhadap kesempurnaan dan akurasi hasil kerja serta keberanian bertanggung jawab secara transparan tanpa menyembunyikan kekeliruan (skor 5). Mengakui dan menawarkan revisi juga berintegritas tinggi meski belum menekankan penyelesaian perbaikan seketika (skor 4). Memperbaiki diam-diam tanpa komunikasi mengorbankan ketepatan informasi jadwal (skor 3), membiarkan kesalahan mencerminkan ketidakpedulian mutu (skor 2), dan menyalahkan pihak lain bertentangan dengan akuntabilitas profesional (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Fajar dikenal disiplin menyelesaikan seluruh pekerjaannya di kantor sehingga jarang sekali membawa tugas ke rumah. Namun, tepat saat hendak pulang untuk menghadiri makan malam peringatan hari ulang tahun pernikahan yang sudah dijanjikan kepada istrinya, atasan memberikan tugas mendesak yang wajib diselesaikan malam itu juga. Sikap Fajar adalah...",
      "pilihan": [
        {
          "teks": "Meminta izin kepada atasan untuk menemani istrinya makan malam sebentar lalu berjanji menyelesaikan tugas tersebut keesokan pagi lebih awal.",
          "skor": 3
        },
        {
          "teks": "Langsung kembali ke meja kerja untuk menuntaskan tugas lembur mendadak dari atasan tersebut sebaik-baiknya.",
          "skor": 4
        },
        {
          "teks": "Tetap pulang secara diam-diam tanpa sepengetahuan atasan karena menganggap janji makan malam keluarga jauh lebih penting.",
          "skor": 1
        },
        {
          "teks": "Menghubungi istrinya dengan penuh pengertian untuk mengabarkan dan memohon maaf bahwa ia harus pulang terlambat karena tugas dinas mendesak, kemudian fokus menyelesaikan pekerjaan tersebut hingga tuntas.",
          "skor": 5
        },
        {
          "teks": "Menyampaikan kepada atasan bahwa kondisi badannya sedang kurang sehat agar memperoleh izin pulang tepat waktu.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – B (4) – A (3) – E (2) – C (1). Menjaga komitmen penyelesaian tugas kedinasan yang mendesak sekaligus berkomunikasi dengan hangat serta bertanggung jawab kepada keluarga merupakan bentuk keseimbangan profesionalisme yang matang (skor 5). Langsung bekerja lembur memenuhi tanggung jawab pekerjaan namun kurang menjaga komunikasi keluarga (skor 4). Menunda hingga besok berisiko menghambat kebutuhan mendesak pimpinan (skor 3), berpura-pura sakit tidak jujur (skor 2), dan pulang diam-diam melanggar etika tanggung jawab jabatan (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Setiap proyek yang Anda pimpin selalu berhasil meraih target terbaik instansi. Namun, seorang rekan dekat menyampaikan secara jujur bahwa banyak anggota tim merasa tertekan karena sikap Anda dinilai terlalu kaku dan keras kepala dalam memimpin. Menyadari perlunya evaluasi diri, langkah yang paling tepat Anda tempuh adalah...",
      "pilihan": [
        {
          "teks": "Tetap memfokuskan perhatian pada pembuktian capaian kinerja tim sebagai prioritas utama dalam evaluasi jabatan.",
          "skor": 3
        },
        {
          "teks": "Mengubah pendekatan komunikasi menjadi lebih terbuka terhadap kritik serta saran konstruktif anggota tim sembari tetap menjaga ketegasan terhadap kesesuaian prosedur (SOP) dan tenggat kerja.",
          "skor": 5
        },
        {
          "teks": "Bersikap biasa saja dan menganggap penilaian tersebut sebagai risiko wajar seorang pemimpin selama target tercapai.",
          "skor": 2
        },
        {
          "teks": "Mempertahankan gaya kepemimpinan yang keras dan menegur secara konfrontatif rekan-rekan yang kedapatan membicarakan sikap Anda.",
          "skor": 1
        },
        {
          "teks": "Mulai membangun kedekatan dialogis yang lebih ramah dengan seluruh anggota tim tanpa melonggarkan standar kualitas hasil kerja.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – E (4) – A (3) – C (2) – D (1). Kemampuan merefleksikan diri dengan memperbaiki gaya komunikasi agar inklusif dan terbuka pada saran tanpa mengorbankan ketegasan SOP menandai profesionalisme kepemimpinan tingkat tinggi (skor 5). Membuka kedekatan ramah juga positif namun belum menekankan keterbukaan terhadap kritik (skor 4). Hanya berorientasi hasil mengabaikan keberlanjutan iklim tim (skor 3), bersikap apatis menghambat perbaikan diri (skor 2), dan mengonfrontasi pegawai merusak profesionalitas serta kohesi kantor (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "mudah",
      "question_text": "Selama sepuluh tahun bekerja di instansi pemerintah daerah, Anda telah mengalami pergantian kepala kantor sebanyak lima kali dengan gaya kepemimpinan dan kebijakan prioritas yang berbeda-beda. Banyak rekan kerja mengeluh merasa tertekan oleh perubahan tersebut. Sikap profesional yang sebaiknya Anda tunjukkan adalah...",
      "pilihan": [
        {
          "teks": "Mendukung setiap pemimpin baru hanya pada kebijakan-kebijakan yang sejalan dengan pola kerja nyaman yang sudah biasa Anda jalankan.",
          "skor": 3
        },
        {
          "teks": "Merasa semakin bersemangat bekerja karena setiap pergantian pimpinan membawa penyegaran etos kerja dan gagasan baru yang baik.",
          "skor": 4
        },
        {
          "teks": "Menunjukkan respons positif dan sikap adaptif terhadap setiap kebijakan serta gaya kepemimpinan kepala kantor baru demi menjaga kelancaran kinerja organisasi.",
          "skor": 5
        },
        {
          "teks": "Bekerja secara datar seperti rutinitas biasa tanpa berupaya menyesuaikan diri dengan arah kebijakan pimpinan yang baru.",
          "skor": 2
        },
        {
          "teks": "Menyadari diri sendiri juga merasa tertekan sehingga turut mengeluhkan gaya kepemimpinan baru bersama rekan-rekan kantor.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – B (4) – A (3) – D (2) – E (1). Salah satu indikator inti profesionalisme ASN adalah ketangguhan dan adaptabilitas tinggi terhadap perubahan kebijakan serta kepemimpinan demi keberlanjutan pelayanan publik (skor 5). Bersemangat menyambut pembaruan sangat positif meski perlu diiringi penyesuaian konkret pada kebijakan (skor 4). Mendukung secara selektif terkesan setengah hati (skor 3), bekerja datar tanpa adaptasi kurang responsif (skor 2), dan larut dalam keluhan menurunkan etos kerja unit (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Anda baru dilantik sebagai Kepala Bidang dengan membawahi lima pegawai ASN tetap dan lima tenaga kontrak. Pada minggu pertama bertugas, Anda mendapati para pegawai tetap sering bersantai di luar jam istirahat sementara sebagian besar tugas administrasi utama bidang dibebankan kepada para tenaga kontrak. Langkah profesional Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengadakan rapat koordinasi bidang untuk mengevaluasi beban tugas secara objektif dan menetapkan pembagian kerja yang adil serta proporsional sesuai uraian tugas masing-masing.",
          "skor": 5
        },
        {
          "teks": "Mengadakan kegiatan kebersamaan di luar kantor guna mencairkan hubungan antarpegawai tanpa menyentuh penataan ulang beban kerja.",
          "skor": 2
        },
        {
          "teks": "Langsung melakukan penataan ulang pembagian tugas secara tegas sesuai uraian jabatan dan proporsi tanggung jawab tiap pegawai tetap maupun kontrak.",
          "skor": 4
        },
        {
          "teks": "Membiarkan kondisi tersebut berlangsung apa adanya karena menganggap tenaga kontrak memang bertugas membantu seluruh pekerjaan pegawai tetap.",
          "skor": 1
        },
        {
          "teks": "Meminta para pegawai tetap lebih disiplin sembari menyemangati para tenaga kontrak agar terus meningkatkan kompetensi untuk mengikuti seleksi ASN berikutnya.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – C (4) – E (3) – B (2) – D (1). Menegakkan keadilan organisasi melalui komunikasi koordinatif dan penetapan ulang pembagian tugas sesuai tupoksi menjamin transparansi serta akuntabilitas kerja seluruh jajaran (skor 5). Menata ulang tugas secara langsung tetap tegas dan adil namun kurang menggali masukan tim lewat koordinasi (skor 4). Memberi nasihat umum tidak menyelesaikan ketimpangan struktural (skor 3), kegiatan hiburan tidak menyentuh akar masalah (skor 2), dan membiarkan ketimpangan jelas melanggar prinsip keadilan manajerial (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Sebagai ketua pengurus lingkungan warga yang juga mengabdi sebagai ASN, Anda diminta menengahi perselisihan batas akses jalan antara dua tetangga yang saling bersitegang dan merasa paling benar. Salah satu pihak kebetulan merupakan sahabat dekat Anda. Tindakan profesional yang Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Menolak terlibat dalam penyelesaian sengketa tersebut dengan alasan pertikaian antarindividu bukan merupakan urusan kepentingan umum.",
          "skor": 2
        },
        {
          "teks": "Membela argumen pihak yang menjadi sahabat dekat Anda agar hubungan pertemanan pribadi tetap terjaga baik.",
          "skor": 1
        },
        {
          "teks": "Meminta penjelasan serta bukti pendukung dari kedua belah pihak secara objektif dan bersikap seadil-adilnya sesuai aturan tanpa memihak siapa pun.",
          "skor": 5
        },
        {
          "teks": "Menunggu kedua belah pihak tenang terlebih dahulu lalu memfasilitasi dialog musyawarah untuk mencari jalan keluar bersama.",
          "skor": 4
        },
        {
          "teks": "Mengadakan rapat pengurus warga secara lengkap untuk membahas dan memutuskan penyelesaian persoalan tersebut secara kolektif.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – D (4) – E (3) – A (2) – B (1). Objektivitas, keberimbangan menggali fakta dari kedua pihak, serta sikap adil tanpa konflik kepentingan merupakan perwujudan utama profesionalisme (skor 5). Menenangkan suasana dan memfasilitasi dialog juga konstruktif meski tidak menonjolkan ketegasan prinsip keadilan (skor 4). Membawa ke forum besar mengalihkan peran mediator langsung (skor 3), menghindar melepaskan tanggung jawab amanah (skor 2), dan memihak sahabat merupakan bentuk nepotisme serta ketidakadilan (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "mudah",
      "question_text": "Ketika masih berstatus mahasiswa, Anda sesekali membolos kuliah saat terdapat hari kerja yang terjepit di antara dua hari libur nasional. Kini setelah resmi bekerja sebagai aparatur negara dan memiliki hak cuti tahunan, sikap Anda menghadapi fenomena 'hari kejepit nasional' adalah...",
      "pilihan": [
        {
          "teks": "Tetap masuk kantor pada pagi hari namun berencana pulang lebih awal apabila kondisi pekerjaan sudah sepi.",
          "skor": 2
        },
        {
          "teks": "Mengajukan permohonan izin cuti resmi kepada atasan sesuai prosedur kepegawaian apabila benar-benar memiliki kebutuhan keluarga, dan tetap bekerja jika tidak mendesak.",
          "skor": 4
        },
        {
          "teks": "Berprinsip tetap masuk kerja seperti biasa sesuai ketentuan jadwal dinas dan hanya menggunakan hak cuti secara resmi apabila ada kepentingan mendesak atau terencana.",
          "skor": 5
        },
        {
          "teks": "Mempelajari terlebih dahulu ketentuan aturan kepegawaian dan sanksi presensi mengenai pengajuan cuti pada hari terjepit sebelum mengambil keputusan.",
          "skor": 3
        },
        {
          "teks": "Mengikuti kebiasaan pegawai di sekitar; jika banyak yang absen tanpa keterangan, Anda ikut tidak masuk kerja.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – B (4) – D (3) – A (2) – E (1). Integritas dan disiplin tinggi dalam menjaga komitmen jam kerja serta memanfaatkan cuti secara bertanggung jawab merupakan cerminan profesionalisme ASN (skor 5). Mengikuti prosedur izin atasan sudah tertib aturan meski prinsip komitmennya tidak setegas opsi utama (skor 4). Sekadar mempelajari aturan masih menunjukkan keraguan prinsip (skor 3), pulang lebih awal saat kantor sepi melanggar jam kerja (skor 2), dan ikut-ikutan mangkir merupakan pelanggaran disiplin berat (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "mudah",
      "question_text": "Dalam rapat evaluasi program tahunan yang menerapkan pengisian daftar hadir resmi, Anda melihat seorang teman satu bidang menandatangani daftar hadir lalu langsung meninggalkan ruangan untuk urusan pribadi tanpa seizin pimpinan rapat. Sikap yang paling tepat Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Menegur dan mengingatkan teman tersebut secara tegas namun sopan agar kembali mengikuti rapat, serta melaporkannya kepada pimpinan rapat apabila ia tetap melakukan kecurangan presensi.",
          "skor": 5
        },
        {
          "teks": "Melaporkan pelanggaran kehadiran tersebut secara objektif kepada pimpinan atau ketua rapat sesuai tata tertib instansi.",
          "skor": 4
        },
        {
          "teks": "Memilih berdiam diri dan pura-pura tidak melihat kejadian itu demi menjaga hubungan pertemanan.",
          "skor": 2
        },
        {
          "teks": "Membiarkannya dan ikut meninggalkan rapat lebih awal setelah mengisi daftar hadir terlebih dahulu.",
          "skor": 1
        },
        {
          "teks": "Memberi tahu teman dekat lain di kantor mengenai perbuatan tersebut setelah rapat berakhir agar ia mendapat teguran sosial.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – B (4) – E (3) – C (2) – D (1). Profesionalisme menuntut keberanian menjaga kedisiplinan kolektif melalui teguran korektif yang santun sekaligus pelaporan berjenjang bila diabaikan (skor 5). Melaporkan langsung kepada ketua rapat juga menegakkan aturan meski melewati langkah mengingatkan personal (skor 4). Membicarakan dengan teman lain tidak menyelesaikan pelanggaran (skor 3), pura-pura tidak lihat menoleransi kecurangan (skor 2), dan ikut curang jelas merusak integritas ASN (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Anda ditunjuk memberikan kata sambutan pembukaan dalam rapat koordinasi kantor yang dihadiri pegawai dan tamu undangan dengan latar belakang agama yang beragam. Selama ini Anda terbiasa memulai sambutan dengan salam satu agama tertentu saja saat berada di lingkungan yang homogen. Sikap paling bijaksana saat membuka sambutan di forum majemuk tersebut adalah...",
      "pilihan": [
        {
          "teks": "Memilih tidak mengucapkan salam pembuka sama sekali dan langsung membaca agenda rapat dengan alasan menjaga netralitas.",
          "skor": 1
        },
        {
          "teks": "Membuka sambutan dengan mengucapkan salam nasional dan salam penghormatan seluruh agama yang hadir secara inklusif sebagai wujud toleransi.",
          "skor": 5
        },
        {
          "teks": "Mengucapkan sapaan pembuka berdasarkan ungkapan adat atau salam resmi kenegaraan saja tanpa salam keagamaan apa pun.",
          "skor": 3
        },
        {
          "teks": "Tetap mengucapkan salam satu agama pribadi Anda saja karena menganggap hadirin lain sudah memakluminya.",
          "skor": 2
        },
        {
          "teks": "Mengucapkan salam dari beberapa agama yang mewakili keragaman peserta forum dengan penuh rasa hormat.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – E (4) – C (3) – D (2) – A (1). Menghormati keberagaman agama dalam forum resmi melalui salam kebangsaan dan salam inklusif lintas agama menguatkan kerukunan serta menangkal sikap eksklusif (skor 5). Mengucapkan salam beberapa agama secara tulus juga baik meski kurang merangkul keseluruhan (skor 4). Salam adat/kenegaraan bersifat aman namun kurang memberi sentuhan penghormatan lintas keyakinan (skor 3), memakai satu salam pribadi di forum majemuk kurang inklusif (skor 2), dan meniadakan salam sama sekali terasa kaku serta kurang ramah (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Di tengah dinamika ketahanan nasional, muncul kelompok separatis bersenjata yang aktif menyebarkan propaganda untuk memisahkan diri dari Negara Kesatuan Republik Indonesia (NKRI) serta melakukan aksi kekerasan terhadap warga dan fasilitas umum. Sikap Anda yang mencerminkan kesadaran antiradikalisme dan wawasan kebangsaan adalah...",
      "pilihan": [
        {
          "teks": "Menolak tegas segala bentuk separatisme dan kekerasan, mendukung penindakan hukum tegas terhadap pelaku, serta mendukung upaya deradikalisasi dan pembinaan agar mantan anggota kembali setia pada NKRI.",
          "skor": 5
        },
        {
          "teks": "Menolak keras seluruh tindakan kekerasan kelompok bersenjata karena membahayakan keamanan dan keselamatan warga sipil.",
          "skor": 3
        },
        {
          "teks": "Membenarkan aksi perlawanan kelompok separatis tersebut karena meyakini mereka semata-mata kecewa terhadap kebijakan pemerintah pusat.",
          "skor": 1
        },
        {
          "teks": "Memandang kelompok separatis tersebut sebagai ancaman serius terhadap keutuhan NKRI yang pelakunya harus diproses hukum seberat-beratnya sesuai aturan.",
          "skor": 4
        },
        {
          "teks": "Menganggap kemunculan gerakan separatis bersenjata tersebut masih dapat dimaklumi sebagai bagian dari kebebasan berpendapat politik.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – D (4) – B (3) – E (2) – C (1). Penanganan ancaman radikalisme dan separatisme menuntut sikap tegas menegakkan hukum demi kedaulatan NKRI sekaligus mendukung pendekatan deradikalisasi berkelanjutan guna memutus rantai kekerasan (skor 5). Menuntut hukuman tegas saja tetap pro-NKRI namun belum menyentuh aspek pemulihan ideologi (skor 4). Sekadar menolak kekerasan fisiknya kurang menyasar ancaman kedaulatan negara (skor 3), sedangkan memaklumi atau membenarkan gerakan separatis bersenjata bertentangan dengan nilai Pancasila serta kesetiaan terhadap NKRI (skor 2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "mudah",
      "question_text": "Kawasan tempat tinggal Anda merupakan perumahan majemuk yang dihuni oleh keluarga dari berbagai latar belakang suku dan agama. Hari ini tetangga tepat di sebelah rumah Anda, Pak Subagyo, merayakan hari besar keagamaannya yang berbeda dengan keyakinan Anda. Sikap yang mencerminkan toleransi beragama adalah...",
      "pilihan": [
        {
          "teks": "Memberikan ucapan selamat semata-mata agar kelak Pak Subagyo juga mengucapkan hal yang sama pada hari besar agama Anda.",
          "skor": 2
        },
        {
          "teks": "Menyampaikan ucapan selamat merayakan hari raya disertai bingkisan silaturahmi wajar antarwarga bertetangga.",
          "skor": 4
        },
        {
          "teks": "Turut memberikan ucapan selamat apabila tetangga-tetangga lain di blok perumahan juga melakukan hal serupa.",
          "skor": 3
        },
        {
          "teks": "Memilih bersikap dingin dan menghindari pertemuan dengan keluarga Pak Subagyo sepanjang perayaan berlangsung karena berbeda keyakinan.",
          "skor": 1
        },
        {
          "teks": "Menyampaikan ucapan selamat hari raya dengan tulus kepada Pak Subagyo serta turut menjaga ketenangan lingkungan sebagai wujud penghormatan dan toleransi beragama.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – B (4) – C (3) – A (2) – D (1). Ketulusan menghormati perayaan umat beragama lain dengan ucapan penuh hormat serta menjaga ketertiban bersama menjadi benteng alami melawan sikap intoleran (skor 5). Memberikan ucapan beserta bingkisan silaturahmi juga baik namun esensi utamanya berada pada ketulusan sikap toleran (skor 4). Mengikuti tetangga kurang memiliki inisiatif prinsip (skor 3), mengharapkan balasan bersifat pamrih (skor 2), dan menjauh karena perbedaan agama merupakan benih intoleransi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Dalam proyek kerja sama di sebuah instansi riset berjejaring global, Anda melihat dua rekan kerja peneliti dalam negeri mendapat pelecehan verbal secara berulang dari tenaga ahli asing yang menyebut mereka berasal dari bangsa terbelakang. Kebetulan Anda sendiri tidak menjadi sasaran ejekan karena latar belakang penampilan Anda berbeda. Sikap Anda menyaksikan hal itu adalah...",
      "pilihan": [
        {
          "teks": "Tetap fokus bekerja profesional menyelesaikan tugas pribadi tanpa terpengaruh oleh persoalan asal-usul dan ras.",
          "skor": 2
        },
        {
          "teks": "Menunjukkan teladan dengan bergaul akrab dan adil terhadap tenaga kerja lokal maupun asing agar suasana mereda.",
          "skor": 3
        },
        {
          "teks": "Menengahi situasi pelecehan tersebut dan berupaya meluruskan martabat rekan kerja guna memulihkan hubungan kerja kedua belah pihak.",
          "skor": 4
        },
        {
          "teks": "Segera menegur tenaga ahli asing tersebut secara tegas dan bermartabat agar menghentikan ucapan diskriminatifnya, serta melaporkan kejadian itu kepada penanggung jawab proyek untuk ditindak sesuai kode etik.",
          "skor": 5
        },
        {
          "teks": "Membiarkan kedua rekan kerja tersebut dilecehkan dengan anggapan hal itu merupakan persoalan komunikasi antarpribadi mereka.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – C (4) – B (3) – A (2) – E (1). Menentang segala bentuk rasisme, etnosentrisme, dan merendahkan martabat sesama manusia membutuhkan ketegasan korektif sekaligus pelaporan prosedural agar lingkungan kerja tetap bermartabat (skor 5). Menengahi saja membantu meredakan suasana meski belum memberi sanksi etik pencegahan ulang (skor 4). Memberi contoh akrab bersifat terlalu halus menghadapi pelecehan terbuka (skor 3), fokus diri sendiri mengabaikan ketidakadilan (skor 2), dan membiarkan pelecehan berlangsung jelas salah (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Konten bermuatan ekstremisme, ujaran kebencian, serta ajakan intoleransi kini sangat mudah tersebar melalui media sosial dan ruang percakapan digital. Anda khawatir paparan informasi sesat tersebut memengaruhi cara berpikir anggota keluarga terdekat di rumah. Langkah pencegahan paling tepat yang Anda terapkan adalah...",
      "pilihan": [
        {
          "teks": "Membimbing anggota keluarga untuk selalu berpikir kritis dan bijak memeriksa kebenaran berita maupun artikel yang sumbernya tidak jelas.",
          "skor": 4
        },
        {
          "teks": "Membiarkan saja tanpa arahan karena meyakini keluarga Anda sudah cukup cerdas menyaring informasi di dunia maya.",
          "skor": 1
        },
        {
          "teks": "Menerapkan aturan pengawasan ketat bagi anak-anak di rumah dalam mengakses internet dan media sosial.",
          "skor": 3
        },
        {
          "teks": "Melarang sementara seluruh anggota keluarga menggunakan akun media sosial agar tidak terpapar konten berbahaya.",
          "skor": 2
        },
        {
          "teks": "Memberikan edukasi berkala kepada anggota keluarga mengenai pencegahan radikalisme melalui penanaman pemahaman keagamaan yang moderat, nilai Pancasila, dan literasi media.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – A (4) – C (3) – D (2) – B (1). Pencegahan radikalisme yang paling kokoh dalam keluarga adalah membangun ketahanan ideologi melalui edukasi pemahaman agama yang moderat dan wawasan kebangsaan (skor 5). Membiasakan verifikasi sumber berita merupakan pelengkap literasi yang penting namun belum menyentuh penanaman nilai moderasi (skor 4). Pengawasan gawai anak masih bersifat membatasi (skor 3), melarang total tidak realistis di era digital (skor 2), dan abai karena terlalu percaya diri sangat berisiko (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Sebagai ASN yang bertugas di lingkungan perguruan tinggi negeri, pimpinan kampus mengajak seluruh sivitas akademika aktif membendung penyebaran paham radikal di lingkungan pendidikan. Karena Anda memiliki kemampuan kepenulisan yang baik, kontribusi terbaik yang dapat Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Memilih fokus menjaga dan membentengi pemikiran diri sendiri saja dari pengaruh paham radikal tanpa menulis opini publik.",
          "skor": 1
        },
        {
          "teks": "Menulis artikel kontra-narasi radikalisme berdasarkan sumber ilmiah yang tepercaya, analisis komprehensif, serta hasil diskusi bersama berbagai ahli dan pihak terkait.",
          "skor": 5
        },
        {
          "teks": "Mengajak rekan-rekan kerja di kampus berdiskusi bertukar pandangan terlebih dahulu mengenai konsep radikalisme yang berkembang.",
          "skor": 3
        },
        {
          "teks": "Menyusun opini dan artikel edukatif mengenai pencegahan radikalisme dengan berlandaskan referensi valid serta kajian regulasi yang mendalam.",
          "skor": 4
        },
        {
          "teks": "Menulis catatan opini singkat yang hanya bersumber dari pengalaman pribadi tanpa rujukan data atau kajian literatur.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – D (4) – C (3) – E (2) – A (1). Membangun kontra-narasi radikalisme secara ilmiah melalui tulisan yang bersumber jelas, teranalisis mendalam, dan diperkaya diskusi lintas pihak menghasilkan edukasi publik yang sangat kredibel (skor 5). Menulis berdasarkan sumber jelas tanpa forum diskusi tetap bermutu tinggi (skor 4). Berdiskusi tanpa menghasilkan karya nyata kurang optimal bagi penguasaan kompetensi penulis (skor 3), tulisan tanpa dasar sumber kurang meyakinkan (skor 2), dan pasif membentengi diri tidak berdampak bagi lingkungan kampus (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Seorang teman dekat Anda sejak lama berubah drastis setelah aktif mengikuti suatu perkumpulan eksklusif beraliran ekstrem. Ia mulai membujuk Anda agar ikut bergabung dengan perkumpulan tersebut serta menuding bahwa masyarakat di luar kelompoknya tersesat dan layak dimusuhi. Sikap Anda menghadapi ajakan tersebut adalah...",
      "pilihan": [
        {
          "teks": "Ikut menghadiri kegiatan perkumpulan ekstrem tersebut beberapa kali dengan alasan sekadar ingin memperoleh gambaran langsung.",
          "skor": 1
        },
        {
          "teks": "Bersikap pasif dan memilih diam saja karena menganggap pilihan aliran kelompok merupakan kebebasan pribadi masing-masing.",
          "skor": 2
        },
        {
          "teks": "Menolak ajakan tersebut dengan tegas dan mengajaknya berdiskusi secara tenang mengenai pemahaman keagamaan yang moderat serta pentingnya persatuan dalam Wawasan Kebangsaan.",
          "skor": 5
        },
        {
          "teks": "Menolak bergabung dan mengajak teman tersebut bertukar pikiran dengan argumen-argumen berlandaskan nilai moderasi serta toleransi.",
          "skor": 4
        },
        {
          "teks": "Bersemangat mengajak teman tersebut berdebat keras guna mematahkan seluruh argumen eksklusifnya saat itu juga.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – D (4) – E (3) – B (2) – A (1). Menangkal radikalisme di lingkaran terdekat membutuhkan ketegasan menolak paham eksklusif sekaligus kemampuan berdialog persuasif berbekal pemahaman moderat dan Wawasan Kebangsaan (skor 5). Berdiskusi dengan argumen moderat juga baik meski belum memadukan penguatan nilai kebangsaan (skor 4). Debat keras untuk mematikan argumen berisiko memicu pembelaan emosional dan menutup komunikasi (skor 3), pasif membiarkan teman semakin terjerumus (skor 2), dan ikut bergabung meski sekadar ingin tahu sangat berisiko terinfiltrasi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Dalam grup percakapan alumni SMA, salah seorang anggota menyebarkan berita bohong (hoaks) yang menyebut penangkapan jaringan teroris oleh aparat negara hanyalah rekayasa dan fitnah. Meski berita tersebut telah terbukti tidak benar, ia tetap bersikukuh membenarkannya di grup. Sikap yang paling tepat Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Memilih tetap menjadi pembaca pasif tanpa menuliskan tanggapan apa pun di dalam grup.",
          "skor": 2
        },
        {
          "teks": "Membagikan fakta dan tautan sumber informasi resmi yang kredibel guna meluruskan berita bohong tersebut serta mengajak anggota grup berdiskusi bijak dalam menyaring informasi.",
          "skor": 5
        },
        {
          "teks": "Aktif membagikan berbagai berita bermanfaat dari sumber resmi yang sah tanpa langsung menanggapi perdebatan hoaks tersebut.",
          "skor": 3
        },
        {
          "teks": "Langsung keluar dari grup percakapan tersebut karena merasa isi obrolan sudah melenceng dari tujuan silaturahmi awal.",
          "skor": 1
        },
        {
          "teks": "Mengingatkan dan mengarahkan anggota grup secara santun agar selalu bersikap cermat serta memverifikasi informasi sensitif sebelum menyebarkannya.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – E (4) – C (3) – A (2) – D (1). Peran aktif melawan disinformasi terkait isu terorisme melalui penyajian fakta resmi yang terverifikasi disertai ajakan diskusi sehat efektif mengedukasi lingkungan tanpa menghakimi secara kasar (skor 5). Mengarahkan agar bijak menyaring info bernilai positif namun belum menyajikan fakta pembanding (skor 4). Membagikan info valid lain secara tidak langsung kurang menyasar koreksi atas hoaks yang beredar (skor 3), diam pasif membiarkan hoaks dipercaya anggota lain (skor 2), dan keluar grup tanpa klarifikasi melepaskan peran edukasi sosial (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    }
  ],
  [
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Maya bekerja sebagai apoteker di Instalasi Farmasi rumah sakit daerah. Suatu hari seorang warga memaksa membeli obat keras tertentu tanpa membawa resep dokter, padahal obat tersebut berbahaya jika dikonsumsi tanpa pengawasan medis. Warga tersebut bahkan menyodorkan sejumlah uang tambahan agar Maya mau meloloskan permintaannya. Sikap Maya yang paling tepat adalah...",
      "pilihan": [
        {
          "teks": "Merasa ragu-ragu dalam mengambil keputusan karena tidak enak hati melihat warga yang sangat memaksa di loket obat.",
          "skor": 2
        },
        {
          "teks": "Menahan pelayanan sementara dan berkonsultasi terlebih dahulu dengan kepala instalasi farmasi atau rekan apoteker senior.",
          "skor": 3
        },
        {
          "teks": "Menerima uang tersebut dan tetap menyerahkan obat yang diminta dengan anggapan tidak ada orang lain yang mengetahui.",
          "skor": 1
        },
        {
          "teks": "Menolak uang maupun permintaan pembelian obat dengan tegas serta santun, lalu mengedukasi warga mengenai risiko kesehatan dan prosedur pemeriksaan dokter untuk memperoleh resep sah.",
          "skor": 5
        },
        {
          "teks": "Menolak dengan mantap permintaan beserta uang tersebut karena penyerahan obat tanpa resep dokter melanggar regulasi kefarmasian dan keselamatan pasien.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – E (4) – B (3) – A (2) – C (1). Menolak suap dengan tegas demi keselamatan warga disertai edukasi prosedural agar warga tetap memperoleh solusi pengobatan yang aman menunjukkan kualitas layanan publik yang paripurna (skor 5). Penolakan mantap sesuai aturan tanpa edukasi berada satu tingkat di bawahnya (skor 4). Konsultasi untuk aturan yang sudah baku kurang cekatan (skor 3), ragu-ragu membuka peluang pelanggaran (skor 2), sedangkan menerima suap dan menyerahkan obat berbahaya mengancam keselamatan publik serta melanggar hukum (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Saat melakukan pengawasan transaksi di loket layanan mitra penyaluran bantuan sosial tunai, Anda menyaksikan petugas loket sengaja menyerahkan uang bantuan kurang dari nominal hak seharusnya kepada seorang penerima manfaat penyandang disabilitas netra. Tindakan yang sebaiknya Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Melaporkan langsung kecurangan tersebut kepada koordinator lapangan atau pimpinan unit layanan agar petugas segera ditindak dan kekurangan dana dikembalikan.",
          "skor": 4
        },
        {
          "teks": "Membiarkan kejadian tersebut berlalu karena merasa pengawasan nominal di loket bukan merupakan uraian tugas utama Anda.",
          "skor": 1
        },
        {
          "teks": "Segera menegur petugas loket dengan tegas namun tertib agar mengembalikan hak penerima secara utuh saat itu juga, serta mendampingi penerima memastikan jumlah uang yang diterima sudah tepat.",
          "skor": 5
        },
        {
          "teks": "Membicarakan kejanggalan tersebut dengan rekan kerja lain tanpa menyampaikan teguran maupun laporan resmi.",
          "skor": 2
        },
        {
          "teks": "Memberi tahu langsung warga penyandang disabilitas netra tersebut bahwa nominal uang yang diterimanya telah dikurangi oleh petugas loket.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – A (4) – E (3) – D (2) – B (1). Melindungi hak kelompok rentan dalam pelayanan publik melalui tindakan korektif langsung yang tertib serta pendampingan nyata bernilai paling tinggi (skor 5). Melaporkan ke atasan berwenang adalah langkah korektif yang baik namun penyelesaian hak penerima bisa tertunda (skor 4). Memberi tahu korban tanpa intervensi kepada petugas berisiko menyulitkan korban menuntut haknya sendiri (skor 3), sekadar menggunjingkan tidak menyelesaikan masalah (skor 2), dan bersikap apatis bertentangan dengan nilai kemanusiaan pelayanan publik (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sulit",
      "question_text": "Bima ditugaskan di meja layanan depan untuk melayani tamu pimpinan instansi. Suatu pagi hadir tamu perwakilan kementerian mitra yang membutuhkan persetujuan administratif segera untuk kelanjutan kegiatan bersama, sementara pimpinan sedang berada di lokasi tanpa sinyal dan sama sekali tidak dapat dihubungi. Sikap Bima seharusnya adalah...",
      "pilihan": [
        {
          "teks": "Menjelaskan kondisi pimpinan dan berupaya menghubungi pejabat pengganti sementara atau sekretaris utama sebelum memberikan kepastian kepada tamu.",
          "skor": 3
        },
        {
          "teks": "Merasa ragu mengambil tindakan apa pun dan meminta tamu menunggu tanpa batas waktu yang pasti hingga pimpinan kembali.",
          "skor": 2
        },
        {
          "teks": "Mengambil langkah keputusan sementara yang diperlukan tanpa petunjuk langsung pimpinan karena situasi pelayanan sangat mendesak.",
          "skor": 4
        },
        {
          "teks": "Menolak memberikan tanggapan atau langkah fasilitasi sama sekali karena tidak berani bertindak tanpa perintah tertulis pimpinan.",
          "skor": 1
        },
        {
          "teks": "Mengambil keputusan taktis guna memfasilitasi kebutuhan tamu secara cepat sepanjang tetap selaras dengan ketentuan umum instansi dan wewenang pimpinan, lalu segera melaporkan hasilnya begitu pimpinan dapat dihubungi.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – C (4) – A (3) – B (2) – D (1). Kemampuan mengambil inisiatif pelayanan yang cepat dalam koridor kebijakan umum dan akuntabilitas pelaporan merupakan ciri pelayan publik yang tangkas dan bertanggung jawab (skor 5). Mengambil keputusan darurat tanpa menggarisbawahi koridor kebijakan umum masih berisiko administratif (skor 4). Menunda sambil mencari pejabat lain kurang responsif untuk keadaan mendesak (skor 3), ragu-ragu menghambat layanan (skor 2), dan menolak memfasilitasi mencerminkan kekakuan birokrasi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sulit",
      "question_text": "Unit layanan pengaduan terpadu tempat Anda bertugas menghadapi lonjakan persoalan teknis warga yang cukup kompleks dan membutuhkan arahan penyelesaian segera, padahal kepala unit baru dapat tiba di kantor empat jam lagi karena kegiatan dinas di luar kota. Sikap Anda sebagai staf pelaksana yang sedang bertugas adalah...",
      "pilihan": [
        {
          "teks": "Meminta bantuan rekan staf lain yang lebih lama bertugas untuk mengambil keputusan darurat demi mencegah kesalahan prosedur.",
          "skor": 3
        },
        {
          "teks": "Menunda seluruh proses pengambilan keputusan hingga empat jam ke depan karena enggan menanggung risiko kesalahan pribadi.",
          "skor": 1
        },
        {
          "teks": "Mengambil keputusan penanganan awal sesuai batas kewenangan dan SOP yang berlaku agar persoalan warga tetap tertangani sambil menyiapkan laporan bagi kepala unit.",
          "skor": 4
        },
        {
          "teks": "Menghubungi kepala unit melalui sambungan telepon untuk memaparkan situasi dan meminta arahan, lalu mengeksekusi solusi pelayanan sesuai petunjuk pimpinan serta kondisi riil masyarakat.",
          "skor": 5
        },
        {
          "teks": "Menjelaskan secara terus terang kepada masyarakat agar menunggu di ruang tunggu hingga kepala unit datang.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – C (4) – A (3) – E (2) – B (1). Mengupayakan komunikasi jarak jauh dengan pimpinan sebagai dasar pijakan legal lalu mengeksekusinya secara tanggap sesuai kondisi lapangan memadukan kepatuhan prosedur dan kecepatan pelayanan (skor 5). Menangani langsung berdasar SOP awal tetap menjaga layanan berjalan meski tanpa konfirmasi pimpinan (skor 4). Melempar tanggung jawab ke rekan menunjukkan kurangnya keberanian akuntabel (skor 3), meminta warga menunggu empat jam menurunkan kepuasan publik (skor 2), dan menunda karena takut risiko karier mencerminkan egoisme birokrasi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Sebagai analis layanan usaha di Dinas Perdagangan daerah, Anda mencermati bahwa sejumlah produk kerajinan rotan dan olahan rempah lokal memiliki keunggulan mutu serta harga bersaing untuk pasar internasional, namun pelaku usaha belum tersentuh layanan fasilitasi pameran dan ekspor dinas. Visi layanan yang sebaiknya Anda wujudkan adalah...",
      "pilihan": [
        {
          "teks": "Tetap berfokus melayani pelaku usaha yang kebetulan datang mengurus surat ke kantor karena merasa usulan baru belum tentu disetujui.",
          "skor": 2
        },
        {
          "teks": "Menyusun kajian singkat mengenai potensi komoditas unggulan daerah untuk diserahkan kepada pimpinan sebagai masukan pengembangan program layanan.",
          "skor": 4
        },
        {
          "teks": "Mengusulkan program pendampingan perizinan dan klinik ekspor kepada pimpinan serta memetakan pelaku usaha unggulan agar layanan fasilitasi dinas menjangkau masyarakat secara optimal.",
          "skor": 5
        },
        {
          "teks": "Mengabaikan potensi tersebut karena meyakini di dinas sudah ada pejabat lain yang mengurusi bidang perdagangan luar negeri.",
          "skor": 1
        },
        {
          "teks": "Menanyakan pendapat rekan-rekan kerja lain di kantor terlebih dahulu mengenai apakah potensi produk tersebut pernah dibahas sebelumnya.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – B (4) – E (3) – A (2) – D (1). Inisiatif proaktif membangun rancangan layanan pemberdayaan masyarakat dan menyampaikannya secara terstruktur kepada pimpinan memperlihatkan orientasi pelayanan publik yang visioner (skor 5). Menyusun kajian awal sudah positif namun belum mencakup langkah pendampingan konkret (skor 4). Sekadar bertanya tanpa aksi nyata berjalan lambat (skor 3), bersikap pasif menunggu pemohon kurang berinisiatif (skor 2), dan melempar tanggung jawab ke pihak lain menunjukkan apati terhadap misi pelayanan instansi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Pagi hari sebelum loket pelayanan masyarakat dibuka, Anda mendapati mesin pencetak nomor antrean dan satu unit komputer loket tidak berfungsi sebagaimana mestinya, dan hanya Anda yang mengetahuinya saat itu. Tindakan pertama yang paling tepat Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Memberi tahu rekan kerja terdekat mengenai kerusakan tersebut lalu bersama-sama menelusuri siapa petugas yang terakhir menggunakannya.",
          "skor": 3
        },
        {
          "teks": "Memilih diam dan tidak melaporkannya karena khawatir dicurigai sebagai pegawai yang telah merusak fasilitas kantor tersebut.",
          "skor": 1
        },
        {
          "teks": "Berdiam diri saja karena merasa tugas pelayanan Anda di loket sendiri sudah sangat menyita waktu.",
          "skor": 2
        },
        {
          "teks": "Segera melaporkan kondisi kerusakan peralatan tersebut kepada bagian perlengkapan dan sarana prasarana kantor agar segera ditindaklanjuti.",
          "skor": 4
        },
        {
          "teks": "Segera melaporkan kerusakan tersebut kepada bagian perlengkapan dan tim teknis agar lekas diperbaiki, sembari menyiapkan nomor antrean cadangan agar pelayanan warga tidak terganggu.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – D (4) – A (3) – C (2) – B (1). Menjaga kelancaran sarana pelayanan dengan pelaporan cepat kepada unit terkait disertai rencana mitigasi sementara agar warga tetap terlayani meraih nilai sempurna (skor 5). Melapor segera ke bagian perlengkapan sudah bertanggung jawab namun belum menyiapkan langkah antisipasi antrean (skor 4). Menyelidiki pelaku bersama teman membuang waktu layanan (skor 3), bersikap acuh karena sibuk (skor 2), apalagi menyembunyikan kerusakan karena takut disalahkan (skor 1) mengorbankan kepentingan masyarakat.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Saat bertugas di loket informasi rumah sakit daerah, Anda melayani seorang keluarga pasien dari desa terpencil yang masih tampak kebingungan memahami alur rujukan JKN meskipun sudah Anda jelaskan perlahan. Kebetulan ia datang bersama keponakannya yang lebih terbiasa membaca dokumen administrasi. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Meminta petugas jaga lain yang lebih senior untuk menggantikan Anda menjelaskan prosedur kepada keluarga pasien tersebut.",
          "skor": 2
        },
        {
          "teks": "Meminta izin dengan sopan untuk turut menjelaskan alur rujukan secara ringkas kepada keponakan yang mendampinginya sambil memastikan keduanya memahami poin penting.",
          "skor": 5
        },
        {
          "teks": "Menuliskan urutan loket yang harus dituju pada selembar kertas agar dapat dibaca ulang oleh pihak keluarga.",
          "skor": 3
        },
        {
          "teks": "Memerinci kembali tahapan administrasi secara bertahap menggunakan bahasa yang lebih sederhana hingga warga tersebut mengangguk paham.",
          "skor": 4
        },
        {
          "teks": "Menyerahkan brosur alur rujukan lalu meminta mereka membacanya sendiri di ruang tunggu agar antrean tidak tertahan.",
          "skor": 1
        }
      ],
      "explanation": "Daya tanggap pelayanan publik yang prima mengutamakan tersampaikannya informasi secara efektif dan cepat melalui pendampingan keluarga agar pasien segera tertangani (skor 5). Mengulang penjelasan pribadi tetap baik namun memakan waktu antrean lebih lama (4), catatan tertulis cukup membantu (3), melimpahkan ke rekan kurang mandiri (2), dan membiarkan membaca brosur sendiri kurang empatik (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Dalam rapat evaluasi Dinas Perhubungan mengenai peningkatan mutu layanan angkutan umum perkotaan agar masyarakat semakin nyaman beralih ke transportasi publik, setiap staf diminta mengajukan usulan yang sesuai standar operasional. Gagasan terbaik yang Anda sampaikan adalah...",
      "pilihan": [
        {
          "teks": "Mengusulkan potongan tarif hingga separuh harga setiap akhir pekan tanpa mengkaji keberlanjutan subsidi operasional.",
          "skor": 2
        },
        {
          "teks": "Mengusulkan penetapan jalur antrean khusus yang tertib di terminal bagi kelompok penumpang prioritas pada jam sibuk.",
          "skor": 4
        },
        {
          "teks": "Mengusulkan penyediaan fasilitas kursi prioritas dan akses ramah bagi ibu hamil, penyandang disabilitas, serta warga lanjut usia di setiap armada dan halte.",
          "skor": 5
        },
        {
          "teks": "Mengusulkan peningkatan frekuensi pembersihan armada serta penjadwalan keberangkatan tepat waktu sesuai kemampuan anggaran operasional.",
          "skor": 3
        },
        {
          "teks": "Mengusulkan agar petugas armada memenuhi seluruh permintaan pribadi penumpang tanpa terkecuali meski melampaui aturan keselamatan.",
          "skor": 1
        }
      ],
      "explanation": "Inovasi layanan publik terbaik menyasar inklusivitas kelompok rentan secara realistis dan terukur sesuai standar operasional (skor 5). Jalur antrean khusus di terminal juga mendukung prioritas namun cakupannya lebih sempit (4), pembersihan dan jadwal merupakan layanan dasar (3), diskon drastis berisiko mengganggu keuangan layanan (2), dan memenuhi keinginan tanpa batas menyalahi SOP keselamatan (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Direktur lembaga pemerintahan tempat Anda mengabdi menunjuk Anda sebagai ketua sekaligus penanggung jawab tim penyusunan program strategis, padahal di unit tersebut masih ada pejabat manajer senior yang menurut Anda sangat kompeten. Sikap yang seharusnya Anda tunjukkan adalah...",
      "pilihan": [
        {
          "teks": "Menolak permintaan direktur secara langsung karena merasa belum pantas memimpin tim di atas rekan yang lebih senior.",
          "skor": 1
        },
        {
          "teks": "Mempertimbangkan penugasan tersebut terlebih dahulu sambil meminta masukan dari manajer senior mengenai pembagian peran yang tepat.",
          "skor": 3
        },
        {
          "teks": "Menerima amanah tersebut dengan tanggung jawab penuh dan segera berkoordinasi meminta saran serta dukungan kolaboratif dari manajer senior tersebut agar tim berjalan optimal.",
          "skor": 5
        },
        {
          "teks": "Menerima penunjukan direktur dengan senang hati dan berkomitmen menggerakkan seluruh anggota tim untuk menyukseskan program.",
          "skor": 4
        },
        {
          "teks": "Mengajukan keberatan secara halus dan mengusulkan kepada direktur agar manajer senior saja yang ditunjuk sebagai ketua tim.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – D (4) – B (3) – E (2) – A (1). Menerima kepercayaan pimpinan sekaligus merangkul senior secara kolaboratif untuk memadukan otoritas dan pengalaman tim merupakan wujud kepemimpinan jejaring kerja yang matang (skor 5). Menerima dengan senang hati mencerminkan kesiapan diri namun kurang menonjolkan sinergi dengan senior (skor 4). Ragu dan mempertimbangkan dulu memperlambat respons organisasi (skor 3), mengusulkan pengalihan atau menolak langsung mencerminkan rendahnya kesiapan mengemban kepercayaan tim (skor 2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "mudah",
      "question_text": "Dalam suatu rapat diskusi penentuan strategi pelayanan unit kerja, gagasan yang Anda usulkan tidak disetujui oleh pimpinan rapat dan forum lebih memilih usulan rekan kerja lain. Sikap Anda menghadapi hasil diskusi tersebut adalah...",
      "pilihan": [
        {
          "teks": "Menerima hasil rapat dengan tenang dan menanyakan poin-poin perbaikan agar ide Anda dapat disempurnakan pada kesempatan mendatang.",
          "skor": 4
        },
        {
          "teks": "Menerima keputusan forum dengan lapang dada, meminta masukan konstruktif mengenai kekurangan usulan Anda sebagai pembelajaran, dan mendukung penuh pelaksanaan keputusan tim.",
          "skor": 5
        },
        {
          "teks": "Merasa kecewa dalam hati dan memutuskan tidak akan sering menyampaikan pendapat pada rapat-rapat berikutnya.",
          "skor": 2
        },
        {
          "teks": "Menerima keputusan pimpinan dengan tenang dan tetap menjalankan peran sesuai pembagian tugas yang diputuskan.",
          "skor": 3
        },
        {
          "teks": "Tidak terima atas penolakan tersebut dan memaksa pimpinan rapat mengulang pemungutan suara demi membela usulan Anda.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – A (4) – D (3) – C (2) – E (1). Keterbukaan menerima masukan sekaligus komitmen menyukseskan keputusan kolektif tim membuktikan sikap kolaboratif yang sehat dalam jejaring kerja (skor 5). Menerima sambil mencari penjelasan perbaikan menunjukkan sikap pembelajar yang baik (skor 4). Menerima tenang tanpa dialog lanjutan cukup memadai (skor 3), memendam kecewa hingga enggan berpendapat memutus kontribusi ide (skor 2), dan memaksakan kehendak merusak iklim musyawarah tim (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "mudah",
      "question_text": "Unit kerja Anda berpartisipasi dalam turnamen olahraga dan lomba kebersamaan antarbidang di instansi. Banyak pihak memprediksi tim unit Anda tidak akan menang melawan tim dari bidang lain yang diisi atlet-atlet berbakat. Sikap Anda terhadap tim unit kerja Anda adalah...",
      "pilihan": [
        {
          "teks": "Tetap hadir memberikan dukungan penuh, menyemangati rekan setim sepanjang pertandingan, dan menjaga kekompakan unit kerja.",
          "skor": 5
        },
        {
          "teks": "Memilih bersembunyi atau tidak hadir di arena lomba karena malu jika diketahui mendukung tim yang kalah.",
          "skor": 1
        },
        {
          "teks": "Turut mendukung dan mendampingi tim unit kerja saat bertanding sebagai wujud kebersamaan dalam instansi.",
          "skor": 4
        },
        {
          "teks": "Memberikan dukungan sekadarnya supaya tidak dianggap kurang memiliki rasa setia kawan oleh rekan kerja.",
          "skor": 3
        },
        {
          "teks": "Bersikap pasif dan menganggap wajar apabila tim kalah karena kekuatan lawan memang jauh lebih unggul.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – C (4) – D (3) – E (2) – B (1). Solidaritas tanpa syarat kepada tim dalam situasi apa pun memperkuat kohesi sosial dan kepercayaan antaranggota organisasi (skor 5). Hadir mendukung cukup baik meski semangat penggeraknya tidak setinggi opsi tertinggi (skor 4). Mendukung karena sungkan bersifat pamrih sosial (skor 3), bersikap pasif mengurangi semangat tim (skor 2), dan menghindar karena malu memperlihatkan rendahnya loyalitas jejaring kerja (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Saat pimpinan unit Anda sedang menyampaikan paparan penting di hadapan perwakilan instansi mitra, Anda melihat kancing kemeja bagian tengah beliau terlepas sehingga tampak kurang rapi dan mengganggu fokus hadirin, namun tidak seorang pun rekan lain berani mengingatkannya. Sikap yang paling bijaksana Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Menyela paparan pimpinan secara langsung di hadapan tamu agar beliau segera membetulkan kancing pakaiannya.",
          "skor": 1
        },
        {
          "teks": "Memilih ikut berdiam diri seperti rekan lainnya karena takut pimpinan merasa tersinggung bila diingatkan.",
          "skor": 2
        },
        {
          "teks": "Memberikan isyarat tatapan atau gestur pelan dari kursi Anda dengan harapan pimpinan menyadari bagian pakaiannya tersebut.",
          "skor": 3
        },
        {
          "teks": "Menunggu jeda transisi materi sebentar untuk mendekati pimpinan secara berbisik dan menyampaikannya dengan penuh kesantunan.",
          "skor": 4
        },
        {
          "teks": "Menuliskan catatan pemberitahuan singkat secara sopan di secarik kertas atau pesan pribadi lalu menyerahkannya secara halus kepada pimpinan tanpa mengganggu jalannya paparan.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – D (4) – C (3) – B (2) – A (1). Komunikasi interpersonal yang cerdas menjaga kehormatan rekan atau atasan di forum publik sekaligus menyelesaikan masalah dengan cepat tanpa memicu kegaduhan (skor 5). Menunggu jeda sedikit memperlambat perbaikan namun tetap santun (skor 4). Isyarat pasif sering tidak dipahami (skor 3), berdiam diri membiarkan citra pimpinan terganggu (skor 2), sedangkan menyela langsung di depan tamu membuat pimpinan malu (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "mudah",
      "question_text": "Seorang rekan kerja baru di bidang Anda berulang kali meminta diajari cara menyusun laporan evaluasi kegiatan yang belum pernah ia tangani sebelumnya. Sikap Anda menghadapi permintaannya adalah...",
      "pilihan": [
        {
          "teks": "Mengajarinya sekali secara garis besar lalu memintanya mencatat dengan baik agar tidak bertanya kembali.",
          "skor": 3
        },
        {
          "teks": "Membantunya memahami alur penyusunan laporan tersebut ketika beban tugas pribadi Anda sedang tidak mendesak.",
          "skor": 4
        },
        {
          "teks": "Menolak membantunya dengan alasan penguasaan teknis pekerjaan adalah bentuk tanggung jawab pribadi masing-masing pegawai.",
          "skor": 1
        },
        {
          "teks": "Menyarankannya membaca buku panduan atau berkas laporan tahun lalu secara mandiri tanpa bimbingan langsung.",
          "skor": 2
        },
        {
          "teks": "Meluangkan waktu mengajarinya langkah demi langkah secara sabar serta membagikan bahan referensi dan panduan kerja agar ia segera terampil bekerja mandiri.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – B (4) – A (3) – D (2) – C (1). Kemauan berbagi pengetahuan dan membekali rekan kerja dengan referensi terstruktur mempercepat peningkatan kapasitas kolektif tim (skor 5). Membantu saat senggang tetap positif namun kurang proaktif (skor 4). Membatasi hanya sekali menunjukkan kesabaran yang terbatas (skor 3), meminta belajar sendiri memperlambat adaptasi kerja (skor 2), dan menolak berbagi ilmu menghambat sinergi tim (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Dalam rapat koordinasi lintas bidang untuk merumuskan program peningkatan kinerja pelayanan masyarakat, gagasan yang Anda sampaikan sebagai perwakilan subbagian kurang mendapat dukungan karena dinilai belum membawa perubahan signifikan. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Membuka diskusi dengan perwakilan bidang lain untuk memadukan poin kuat gagasan Anda dengan masukan mereka agar menjadi rencana kerja bersama yang lebih matang.",
          "skor": 5
        },
        {
          "teks": "Langsung mencabut gagasan awal Anda dan menggantinya sepenuhnya dengan usulan bidang lain agar rapat cepat selesai.",
          "skor": 1
        },
        {
          "teks": "Menjelaskan kembali secara rinci kerangka pelaksanaan serta proyeksi dampak gagasan Anda agar perwakilan bidang lain memahaminya secara utuh.",
          "skor": 4
        },
        {
          "teks": "Mengajak perwakilan bidang lain berbincang lebih mendalam seusai rapat guna mengetahui sudut pandang serta kebutuhan unit mereka.",
          "skor": 3
        },
        {
          "teks": "Mengumpulkan data pendukung tambahan untuk disampaikan kepada pemimpin rapat agar gagasan awal Anda tetap dipertimbangkan.",
          "skor": 2
        }
      ],
      "explanation": "Kemampuan berkolaborasi dalam jejaring kerja tercermin dari keterbukaan memadukan gagasan diri dengan perspektif lintas unit demi solusi yang lebih berdampak (skor 5). Menjelaskan lebih rinci atau melobi pemimpin masih fokus mempertahankan ide sendiri (4 dan 2), diskusi informal pascarapat menunda sinergi di forum utama (3), dan menyerah total tanpa dialog kehilangan kontribusi konstruktif (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "mudah",
      "question_text": "Pimpinan menugaskan tim kerja Anda menyusun program lintas sektor dengan format baru yang belum pernah dikerjakan sebelumnya, sehingga Anda maupun rekan-rekan satu tim masih merasa kebingungan memahami alur pengerjaannya. Langkah Anda adalah...",
      "pilihan": [
        {
          "teks": "Mempelajari pedoman tugas baru tersebut secara mandiri terlebih dahulu, kemudian membagikan rangkuman caranya kepada rekan-rekan satu tim.",
          "skor": 4
        },
        {
          "teks": "Meminta bantuan rekan yang dinilai paling menguasai bidang terkait untuk mendalami tugas tersebut lalu menjelaskannya kepada seluruh anggota.",
          "skor": 3
        },
        {
          "teks": "Mengajak seluruh anggota tim berdiskusi memetakan tugas sesuai pemahaman awal masing-masing, lalu berbagi referensi untuk memecahkan setiap kendala secara bersama-sama.",
          "skor": 5
        },
        {
          "teks": "Mengusulkan kepada pimpinan pemberi tugas agar terlebih dahulu memberikan penjelasan teknis rinci sebelum tim mulai bekerja.",
          "skor": 2
        },
        {
          "teks": "Membiarkan setiap anggota belajar sendiri-sendiri memahami bagiannya masing-masing sesuai inisiatif pribadi.",
          "skor": 1
        }
      ],
      "explanation": "Kolaborasi aktif seluruh anggota tim sejak tahap awal menyatukan pemahaman sekaligus memperkuat rasa kepemilikan terhadap tugas bersama (skor 5). Belajar duluan lalu berbagi juga baik namun kurang partisipatif di awal (4), membebankan ke satu orang pandai kurang adil (3), langsung meminta penjelasan ulang ke pimpinan kurang inisiatif (2), dan membiarkan berjalan sendiri-sendiri menghambat sinergi tim (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Anda menerima kabar bahwa ayah dari salah seorang rekan kerja sekantor baru saja mengalami sakit keras dan harus dirawat inap, sementara kondisi ekonomi rekan tersebut sedang kesulitan menanggung biaya perawatan tambahan. Sikap Anda yang paling tepat adalah...",
      "pilihan": [
        {
          "teks": "Melaporkan kondisi darurat rekan tersebut kepada pimpinan unit agar dapat dibantu melalui dana sosial paguyuban pegawai.",
          "skor": 3
        },
        {
          "teks": "Memberikan bantuan dana pribadi sesuai kemampuan secara tulus dan menyempatkan diri menjenguk untuk memberi dukungan moral.",
          "skor": 4
        },
        {
          "teks": "Mengucapkan simpati singkat saja karena merasa urusan kesehatan keluarga bukan merupakan tanggung jawab lingkungan kantor.",
          "skor": 1
        },
        {
          "teks": "Menasihatinya agar segera mendaftarkan seluruh anggota keluarga ke asuransi kesehatan untuk mengantisipasi kejadian di masa depan.",
          "skor": 2
        },
        {
          "teks": "Mengajak dan mengoordinasikan rekan-rekan kerja di kantor untuk menggalang bantuan sukarela bersama sekaligus menginformasikan prosedur akses bantuan jaminan kesehatan resmi (JKN-KIS/BPJS Kesehatan).",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – B (4) – A (3) – D (2) – C (1). Kepedulian sosial yang menggerakkan solidaritas kolektif rekan kerja sekaligus menawarkan solusi akses jaminan kesehatan resmi memberi dampak bantuan paling luas (skor 5). Membantu secara pribadi dan menjenguk menunjukkan empati tulus dalam lingkup individu (skor 4). Meneruskan ke pimpinan mengandalkan jalur struktural tanpa aksi langsung (skor 3), memberi nasihat saat rekan tertimpa musibah kurang peka secara emosional (skor 2), dan sekadar simpati pasif mencerminkan rendahnya kepedulian sosial (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Seorang sahabat baik mendatangi Anda untuk meminjam uang guna biaya persalinan istrinya yang mendadak harus dirawat di rumah sakit. Namun, uang yang Anda simpan saat ini hanya cukup untuk memenuhi kebutuhan pokok keluarga Anda sendiri hingga gajian berikutnya. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menolak permintaannya secara singkat karena kebutuhan sehari-hari Anda sendiri masih pas-pasan.",
          "skor": 1
        },
        {
          "teks": "Memohon maaf sambil menjelaskan keadaan sebenarnya secara baik-baik dan berupaya menghubungkannya dengan rekan lain yang sekiranya memiliki kelonggaran dana.",
          "skor": 4
        },
        {
          "teks": "Tetap meminjamkan seluruh sisa uang kebutuhan sehari-hari Anda meskipun berisiko mengorbankan pemenuhan kebutuhan pokok keluarga sendiri.",
          "skor": 3
        },
        {
          "teks": "Menyarankannya secara langsung untuk mencoba meminjam uang kepada kerabat atau teman lain yang lebih mampu.",
          "skor": 2
        },
        {
          "teks": "Menyampaikan kondisi keuangan pribadi dengan jujur dan empatik, lalu berusaha mencarikan jalan keluar dengan membantunya menggalang pinjaman dari sahabat lain atau menanyakan fasilitas jaminan persalinan yang dapat diakses.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – B (4) – C (3) – D (2) – A (1). Empati sosial budaya yang bijak memadukan kejujuran atas batas kemampuan pribadi dengan inisiatif nyata mencari solusi gotong royong bersama lingkungan sahabat (skor 5). Menghubungkan ke kenalan lain juga membantu meski kurang intensif (skor 4). Meminjamkan kebutuhan pokok pribadi kurang realistis bagi tanggung jawab keluarga (skor 3), sekadar menyarankan tanpa membantu kurang solutif (skor 2), dan menolak dingin tanpa empati melemahkan ikatan persaudaraan (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Ketika melakukan perjalanan menggunakan transportasi umum kereta api atau bus antarkota, Anda duduk bersebelahan dengan penumpang yang belum Anda kenal dan berasal dari latar belakang daerah yang berbeda. Sikap sosial Anda selama perjalanan adalah...",
      "pilihan": [
        {
          "teks": "Segera mengenakan penyuara telinga dan memejamkan mata agar terhindar dari keharusan berbasa-basi dengan orang asing.",
          "skor": 2
        },
        {
          "teks": "Tetap berdiam diri secara kaku dan menjaga jarak karena merasa berinteraksi dengan orang baru bukan urusan Anda.",
          "skor": 1
        },
        {
          "teks": "Menunjukkan keramahan dengan tersenyum saat duduk dan siap berbincang santun apabila orang di sebelah memulai pembicaraan.",
          "skor": 4
        },
        {
          "teks": "Menyapa dengan senyum ramah dan terbuka menjalin percakapan hangat yang saling menghormati apabila penumpang tersebut tampak nyaman diajak berbincang.",
          "skor": 5
        },
        {
          "teks": "Bersikap wajar dan memilih tenang membaca buku, namun tetap sigap membantu apabila penumpang di sebelah memerlukan informasi perjalanan.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – C (4) – E (3) – A (2) – B (1). Keterbukaan sosial dan keramahan dalam ruang publik majemuk tanpa mengabaikan batas kenyamanan lawan bicara mencerminkan karakter sosial budaya yang adaptif (skor 5). Menunggu disapa sambil tetap ramah tergolong sopan namun lebih pasif (skor 4). Bersikap netral dan siap menolong saat dibutuhkan cukup baik (skor 3), menghindari interaksi sejak awal terlalu tertutup (skor 2), dan bersikap kaku menandakan rendahnya kepekaan sosial (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Bencana banjir dan tanah longsor baru saja melanda beberapa wilayah kecamatan di daerah tempat Anda bekerja sehingga ratusan warga harus mengungsi. Sikap kepedulian sosial yang paling tepat Anda tunjukkan adalah...",
      "pilihan": [
        {
          "teks": "Memilih tidak terlibat karena meyakini musibah tersebut tidak berdampak langsung pada kawasan tempat tinggal Anda.",
          "skor": 1
        },
        {
          "teks": "Memercayakan sepenuhnya penanganan logistik dan penyaluran bantuan kepada pemerintah daerah karena sudah menjadi tugas badan kebencanaan.",
          "skor": 2
        },
        {
          "teks": "Melaporkan situasi dampak bencana kepada pimpinan unit kerja agar kantor menyalurkan bantuan kemanusiaan terpusat.",
          "skor": 3
        },
        {
          "teks": "Menyumbangkan bantuan sesuai kemampuan serta mengajak rekan kerja, kerabat, dan tetangga bergotong royong menghimpun bantuan logistik untuk disalurkan melalui posko resmi.",
          "skor": 5
        },
        {
          "teks": "Menyisihkan sebagian penghasilan pribadi untuk disumbangkan melalui lembaga penanggulangan bencana resmi sambil tetap memperhatikan kebutuhan pokok keluarga.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – E (4) – C (3) – B (2) – A (1). Mengambil bagian secara pribadi sekaligus menggerakkan partisipasi gotong royong rekan kerja dan masyarakat untuk membantu korban bencana menunjukkan kepedulian sosial yang kuat (skor 5). Menyumbang secara proporsional sesuai kemampuan juga baik dalam skala individu (skor 4). Mengandalkan atasan atau pemerintah semata menunjukkan minimnya inisiatif pribadi (skor 3 dan 2), sementara bersikap acuh mencerminkan egoisme sosial (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Di ruang kerja bersama instansi Anda, dua rekan dari suku yang berbeda sempat bersitegang ringan saat jam makan siang akibat perbedaan kebiasaan menyantap makanan beraroma tajam dan cara bergurau khas daerah masing-masing. Sebagai rekan satu ruangan yang menjunjung tinggi kebinekaan, sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menjaga sikap netral serta toleran agar ketegangan kecil tersebut tidak meluas ke urusan pekerjaan tim.",
          "skor": 3
        },
        {
          "teks": "Memihak rekan yang kebetulan memiliki kebiasaan budaya paling mirip dengan daerah asal Anda.",
          "skor": 1
        },
        {
          "teks": "Menjadi penengah yang hangat untuk menjembatani pemahaman budaya kedua pihak dan mengajak bersama-sama menyepakati tata krama ruang bersama yang saling menghormati.",
          "skor": 5
        },
        {
          "teks": "Mengingatkan rekan-rekan dengan santun tentang pentingnya toleransi tinggi dan saling menghargai kebiasaan budaya daerah dalam ruang kerja majemuk.",
          "skor": 4
        },
        {
          "teks": "Meminta salah satu rekan yang paling dekat dengan Anda agar mengalah demi menjaga ketenangan ruangan.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – D (4) – A (3) – E (2) – B (1). Berperan aktif menjembatani dialog lintas budaya dan menghasilkan kesepakatan bersama yang adil mencerminkan kemampuan mengelola keberagaman secara konstruktif (skor 5). Mengingatkan pentingnya toleransi bernilai baik meski belum memfasilitasi kesepakatan ruang bersama (skor 4). Bersikap netral pasif hanya mencegah eskalasi tanpa menyelesaikan akar gesekan (skor 3), meminta satu pihak mengalah kurang berimbang (skor 2), dan bersikap memihak menunjukkan sentimen kedaerahan sempit (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Setelah resmi diangkat sebagai ASN, Anda ditempatkan di unit pelaksana teknis daerah pinggiran yang transportasi umumnya masih terbatas dan jauh dari pusat hiburan kota, meski lokasinya sangat dekat dengan tempat tinggal sementara Anda. Sikap adaptif Anda adalah...",
      "pilihan": [
        {
          "teks": "Mencari sisi positif serta aktivitas bermanfaat agar dapat menikmati kehidupan di wilayah pinggiran tersebut sambil memanfaatkan kedekatan jarak untuk selalu tiba tepat waktu di kantor.",
          "skor": 5
        },
        {
          "teks": "Menerima kondisi penempatan ini sebagai bagian dari risiko tugas pengabdian negara dan membiasakan diri hingga merasa nyaman.",
          "skor": 4
        },
        {
          "teks": "Berusaha bertahan semampunya tinggal di wilayah tersebut agar tetap dekat dengan lokasi kantor selama masa tugas.",
          "skor": 3
        },
        {
          "teks": "Segera mencari tempat tinggal baru di pusat kota yang lebih ramai dan lengkap fasilitasnya meski jarak tempuh ke kantor menjadi jauh.",
          "skor": 1
        },
        {
          "teks": "Bekerja lebih giat dengan harapan segera memperoleh usulan mutasi atau fasilitas rumah dinas di pusat kota.",
          "skor": 2
        }
      ],
      "explanation": "Kemampuan beradaptasi yang unggul ditunjukkan dengan sikap proaktif menemukan cara menikmati dan menyatu dengan lingkungan sosial baru sekaligus mendukung disiplin kerja (skor 5). Menerima sebagai risiko atau bertahan semampunya masih bersifat pasif (4 dan 3), mengharapkan mutasi atau pindah ke pusat kota menunjukkan kesulitan beradaptasi dengan kondisi lapangan (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Seorang rekan kerja yang akrab mengundang Anda menghadiri acara syukuran ulang tahun anaknya di sebuah rumah makan tidak jauh dari tempat tinggal Anda pada akhir pekan. Anda pribadi sebenarnya kurang nyaman dengan keramaian acara anak-anak, namun rekan tersebut sangat mengharapkan kehadiran Anda. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Memilih tidak datang tanpa memberi konfirmasi apa pun karena merasa akan terganggu oleh suasana ramai anak-anak.",
          "skor": 1
        },
        {
          "teks": "Tetap hadir sebentar untuk bersilaturahmi dan menyerahkan kado lalu berpamitan secara santun agar rekan tetap merasa dihargai.",
          "skor": 4
        },
        {
          "teks": "Menghubunginya melalui telepon untuk memohon maaf tidak dapat hadir sekaligus berjanji memberikan kado di kesempatan kerja berikutnya.",
          "skor": 3
        },
        {
          "teks": "Datang menghadiri acara tersebut namun tampak kurang antusias dan menjaga jarak dari suasana keramaian tamu lain.",
          "skor": 2
        },
        {
          "teks": "Tetap hadir memenuhi undangan dengan sikap ramah, membawakan tanda mata, serta mengikuti rangkaian acara hingga selesai sebagai bentuk penghargaan terhadap rekan.",
          "skor": 5
        }
      ],
      "explanation": "Kemampuan beradaptasi sosial berarti bersedia menyesuaikan diri di tengah suasana berbeda demi menghormati ikatan kekeluargaan dan undangan rekan hingga tuntas dengan sikap positif (skor 5). Hadir sebentar tetap menghargai meski terbatas (4), memohon maaf via telepon mengurangi kehangatan silaturahmi (3), hadir dengan ekspresi tidak ramah mengganggu tuan rumah (2), dan absen tanpa kabar melanggar etika sosial (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Instansi Anda menerbitkan kebijakan ketat yang melarang pemakaian fasilitas jaringan internet kantor untuk mengunduh berkas hiburan maupun mengakses situs pribadi agar kapasitas jaringan sistem pelayanan publik tidak melambat. Namun, Anda melihat cukup banyak pegawai masih melanggarnya. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Mematuhi larangan pemanfaatan jaringan kantor untuk kepentingan pribadi secara konsisten dan turut mengajak rekan kerja menggunakan infrastruktur internet hanya untuk tugas pelayanan.",
          "skor": 5
        },
        {
          "teks": "Ikut menggunakan internet kantor untuk keperluan hiburan pribadi karena beranggapan percuma menaati aturan jika pegawai lain melanggar.",
          "skor": 1
        },
        {
          "teks": "Mengusulkan agar peraturan pembatasan internet kantor diubah saja karena dinilai terlalu sulit dipatuhi oleh pegawai.",
          "skor": 2
        },
        {
          "teks": "Tetap mematuhi peraturan penggunaan fasilitas internet kantor tersebut sepenuhnya meskipun mayoritas pegawai di ruangan belum tertib.",
          "skor": 4
        },
        {
          "teks": "Hanya memanfaatkan fasilitas internet kantor untuk pekerjaan resmi, kecuali sesekali membuka keperluan pribadi singkat pada jam istirahat.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – D (4) – E (3) – C (2) – B (1). Kepatuhan berintegritas terhadap tata kelola TI kantor disertai dorongan positif kepada rekan kerja menjaga kinerja dan keamanan jaringan layanan instansi (skor 5). Mematuhi secara konsisten meski lingkungan melanggar tetap sangat terpuji secara pribadi (skor 4). Mengambil kelonggaran pada jam istirahat masih berisiko membebani jaringan jika tidak perlu (skor 3), meminta pelonggaran aturan demi kenyamanan melemahkan disiplin (skor 2), dan ikut melanggar merusak tata kelola teknologi instansi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Seluruh tugas pengolahan data kinerja yang menjadi target hari ini telah diselesaikan Reza dengan tuntas, sementara jam kerja kantor masih menyisakan waktu sekitar dua jam. Cara paling produktif yang dapat dilakukan Reza menggunakan fasilitas teknologi komputer kantor adalah...",
      "pilihan": [
        {
          "teks": "Membuka situs berita hiburan atau artikel ringan daring sekadar untuk mengisi waktu hingga jam kerja berakhir.",
          "skor": 2
        },
        {
          "teks": "Mengakses portal pembelajaran daring resmi pemerintah atau membaca buku elektronik pengembangan kompetensi yang relevan dengan tugas jabatannya.",
          "skor": 5
        },
        {
          "teks": "Merapikan pengarsipan berkas digital unit kerja dan mempelajari fitur aplikasi perkantoran baru yang berguna untuk mempercepat tugas mendatang.",
          "skor": 4
        },
        {
          "teks": "Beristirahat sejenak di meja kerja sambil berbincang santai dengan rekan kerja lain yang tugasnya juga telah selesai.",
          "skor": 3
        },
        {
          "teks": "Memanfaatkan akses komputer dan internet kantor untuk membuka media sosial pribadi serta mengobrol daring dengan kawan lama.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – C (4) – D (3) – A (2) – E (1). Memanfaatkan sisa jam kerja secara produktif melalui pembelajaran digital daring untuk meningkatkan kompetensi profesional menunjukkan pemanfaatan TIK yang efektif dan berorientasi kinerja (skor 5). Merapikan arsip digital dan belajar fitur baru juga produktif namun lebih berfokus administratif rutin (skor 4). Mengobrol santai kurang produktif (skor 3), sementara mengakses hiburan (skor 2) apalagi media sosial pribadi menggunakan fasilitas kantor (skor 1) bertentangan dengan disiplin penggunaan aset TIK dinas.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sedang",
      "question_text": "Saat sedang bertugas di kantor, Anda teringat membutuhkan salinan cetak tiga lembar dokumen pribadi yang sama sekali tidak berkaitan dengan urusan dinas, sedangkan instansi sedang menggalakkan penghematan anggaran cetak dan efisiensi kertas. Sikap yang paling tepat Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Langsung mencetak dokumen pribadi tersebut memakai mesin pencetak serta persediaan kertas kantor tanpa berpikir panjang.",
          "skor": 1
        },
        {
          "teks": "Menyimpan berkas tersebut secara digital dan mencetaknya di rumah menggunakan perangkat pribadi atau di jasa pencetakan umum dengan biaya sendiri.",
          "skor": 5
        },
        {
          "teks": "Mencetak dokumen pribadi tersebut di sela jam kerja ketika mesin pencetak kantor sedang tidak dipakai pegawai lain.",
          "skor": 2
        },
        {
          "teks": "Menunda pencetakan hingga di luar jam kerja atau mencetak di tempat lain agar fasilitas kantor tetap terjaga penggunaannya khusus untuk dinas.",
          "skor": 4
        },
        {
          "teks": "Meminta izin terlebih dahulu dan mencetaknya di kantor pada jam istirahat dengan menggunakan lembar kertas milik pribadi.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – D (4) – E (3) – C (2) – A (1). Menjaga pemisahan tegas antara kebutuhan pribadi dan penggunaan perangkat TI maupun bahan habis pakai kantor mencerminkan akuntabilitas aset negara dan budaya kerja digital yang efisien (skor 5). Menunda ke luar jam kerja di luar kantor juga menjaga integritas aset (skor 4). Mencetak di kantor memakai kertas pribadi tetap memakai tinta dan daya listrik kantor (skor 3), memanfaatkan jeda saat printer kosong tetap menyalahgunakan fasilitas dinas (skor 2), dan memakai langsung seluruh inventaris kantor jelas melanggar etika kerja (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sedang",
      "question_text": "Di bidang Anda terdapat seorang rekan pegawai senior yang memiliki dedikasi kerja tinggi, namun kinerjanya kerap terlambat karena ia belum terbiasa mengoperasikan sistem persuratan elektronik dan tanda tangan digital yang baru diterapkan instansi. Sebagai rekan kerja yang lebih menguasai teknologi informasi, sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Membiarkannya mengatasi kesulitannya sendiri atau mengusulkan agar ia dipindahkan ke bagian tugas yang tidak memakai komputer.",
          "skor": 1
        },
        {
          "teks": "Membantu mengambil alih pekerjaan penginputan elektroniknya setiap hari tanpa perlu mengajarinya karena khawatir memakan waktu lama.",
          "skor": 2
        },
        {
          "teks": "Mengingatkannya secara sopan agar mengikuti pelatihan ulang yang diselenggarakan bagian kepegawaian karena penguasaan aplikasi bersifat wajib.",
          "skor": 3
        },
        {
          "teks": "Membantu mengarahkan dan membimbingnya mengoperasikan aplikasi persuratan tersebut ketika pekerjaan utama Anda telah terkendali.",
          "skor": 4
        },
        {
          "teks": "Membimbingnya dengan sabar melalui praktik langsung secara bertahap dan membuatkan panduan ringkas langkah demi langkah agar ia segera terampil mengoperasikan sistem secara mandiri.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – D (4) – C (3) – B (2) – A (1). Memadukan kompetensi TIK dengan semangat kolaborasi melalui pembimbingan sabar dan panduan terstruktur menciptakan peningkatan kinerja tim yang berkelanjutan (skor 5). Membantu saat pekerjaan utama longgar juga positif meski belum dilengkapi bahan panduan kemandirian (skor 4). Mengarahkan ke diklat saja kurang membantu kebutuhan mendesak harian (skor 3), mengambil alih tugas membuat ketergantungan (skor 2), dan membiarkan atau mengusulkan pemindahan mencerminkan ketidakpedulian terhadap penguatan SDM digital (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sulit",
      "question_text": "Pimpinan unit menugaskan Anda dan tim memindahkan ribuan arsip surat layanan fisik yang mulai usang ke dalam sistem arsip digital berbasis penyimpanan awan. Namun, sebagian anggota tim mengkhawatirkan kerumitan proses pemindaian serta potensi kebocoran data arsip sensitif di ruang digital. Langkah terbaik Anda adalah...",
      "pilihan": [
        {
          "teks": "Memulai pengarsipan digital untuk dokumen-dokumen tahun berjalan saja sembari tetap mempertahankan pengelolaan arsip fisik seperti biasa.",
          "skor": 3
        },
        {
          "teks": "Menyusun tahapan alih media digital secara sistematis disertai pengaturan hak akses, enkripsi, serta pencadangan data bersama tim TI, lalu mendampingi rekan kerja dalam uji coba sistem baru.",
          "skor": 5
        },
        {
          "teks": "Melaksanakan digitalisasi arsip sesuai arahan pimpinan dan membatasi akses akun penyimpanan hanya kepada petugas yang ditunjuk resmi.",
          "skor": 4
        },
        {
          "teks": "Menyerahkan seluruh proses pemindaian dan pengunggahan data tersebut kepada tenaga kontrak baru tanpa melibatkan anggota tim lainnya.",
          "skor": 2
        },
        {
          "teks": "Mengusulkan penundaan proyek digitalisasi arsip tersebut karena khawatir menimbulkan penolakan dan risiko kebocoran data.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – C (4) – A (3) – D (2) – E (1). Mengelola transformasi arsip digital dengan perencanaan bertahap, pengendalian keamanan data terstandar, dan pendampingan tim menjawab kekhawatiran teknis sekaligus menjamin keberhasilan modernisasi kinerja (skor 5). Menjalankan instruksi dengan membatasi akun sudah aman namun belum memfasilitasi adaptasi anggota tim (skor 4). Membatasi hanya tahun berjalan membiarkan arsip lama rentan rusak (skor 3), membebankan ke staf baru tanpa kolaborasi tidak efektif (skor 2), dan menunda proyek menghambat reformasi birokrasi digital (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sedang",
      "question_text": "Instansi Anda berinvestasi mengadopsi sistem aplikasi layanan kepegawaian modern untuk mempercepat kinerja birokrasi. Namun setelah beberapa bulan berjalan, dampaknya belum signifikan karena masih banyak pegawai bingung mengoperasikan fitur perangkat berteknologi tinggi tersebut. Sikap Anda sebagai koordinator unit adalah...",
      "pilihan": [
        {
          "teks": "Mengevaluasi kendala teknis yang paling sering dialami pegawai lalu mengupayakan penyederhanaan antarmuka sistem agar lebih mudah diterapkan.",
          "skor": 4
        },
        {
          "teks": "Memberikan motivasi serta menyelenggarakan pelatihan praktik bertahap bagi seluruh pegawai agar penguasaan literasi teknologi informasi mereka meningkat.",
          "skor": 5
        },
        {
          "teks": "Menghentikan penggunaan sistem aplikasi teknologi informasi tersebut dan kembali sepenuhnya pada pencatatan manual lama.",
          "skor": 1
        },
        {
          "teks": "Memperbolehkan pencatatan manual sementara sembari mencari alternatif metode pendukung lain yang tidak menghambat layanan.",
          "skor": 2
        },
        {
          "teks": "Menyosialisasikan secara berkala manfaat strategis teknologi informasi bagi kecepatan kerja dan akurasi layanan unit.",
          "skor": 3
        }
      ],
      "explanation": "Kendala pemanfaatan sistem TI umumnya bersumber dari kesiapan kompetensi pengguna, sehingga memberi motivasi dan pelatihan terstruktur menjadi solusi paling efektif (skor 5). Mengganti atau menyederhanakan sistem perlu waktu dan biaya baru (4), sekadar menjelaskan manfaat kurang menyelesaikan masalah teknis (3), kembali ke manual sebagian maupun total menandai kegagalan transformasi digital (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sulit",
      "question_text": "Penerapan jaringan teknologi informasi mempercepat pertukaran data antar-bagian di kantor Anda, namun di sisi lain berpotensi disalahgunakan sebagian pegawai untuk mengakses konten hiburan atau kepentingan di luar tujuan organisasi pada jam kerja. Langkah tepat Anda sebagai pimpinan unit adalah...",
      "pilihan": [
        {
          "teks": "Langsung memperluas pemanfaatan sistem komunikasi antar-bagian sembari mengimbau pegawai menggunakannya secara bertanggung jawab.",
          "skor": 2
        },
        {
          "teks": "Mempelajari seluk-beluk potensi penyalahgunaan sistem, menyusun pembatasan akses yang proporsional, lalu menerapkannya secara bertahap.",
          "skor": 4
        },
        {
          "teks": "Mencari informasi mengenai panduan penggunaan dan tata cara pengaturan pembatasan akses teknologi informasi dari tenaga ahli sebelum diterapkan.",
          "skor": 3
        },
        {
          "teks": "Mempelajari sistem teknologi tersebut dan menerapkannya secara terbuka tanpa batasan akses demi kemudahan komunikasi kerja.",
          "skor": 1
        },
        {
          "teks": "Menetapkan batasan aturan akses serta kontrol keamanan pada sistem teknologi informasi kantor terlebih dahulu sebelum memperluas penerapannya ke seluruh proses kerja.",
          "skor": 5
        }
      ],
      "explanation": "Pengelolaan TIK yang matang menyeimbangkan kemudahan akses dengan tata kelola keamanan melalui penetapan batasan kebijakan sejak penerapan sistem (skor 5). Mengkaji dulu lalu membatasi tetap baik namun lebih lambat merespons risiko aktif (4 dan 3), sedangkan menerapkan tanpa pengamanan membiarkan celah penyalahgunaan terbuka (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "mudah",
      "question_text": "Saat mengikuti tahapan seleksi terbuka penerimaan pegawai di suatu instansi pemerintah, seorang oknum bagian kepegawaian menghubungi Anda secara rahasia dan menawarkan kepastian kelulusan asalkan Anda bersedia menyerahkan sejumlah dana pelicin. Sikap berintegritas yang Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Menolak tawaran tidak sah tersebut dengan tegas dan tetap berusaha melamar serta mengikuti seluruh ujian seleksi secara bersih.",
          "skor": 4
        },
        {
          "teks": "Menyatakan akan mempertimbangkan tawaran tersebut terlebih dahulu sambil mengukur seberapa ketat persaingan seleksi resmi.",
          "skor": 3
        },
        {
          "teks": "Menerima tawaran itu dan segera menyerahkan dana yang diminta dengan anggapan tidak ada peserta lain yang mengetahuinya.",
          "skor": 1
        },
        {
          "teks": "Menolak tegas tawaran suap tersebut, tetap menempuh proses seleksi secara jujur sesuai kemampuan pribadi, dan melaporkan ulah oknum tersebut kepada pimpinan instansi atau kanal pengawasan resmi.",
          "skor": 5
        },
        {
          "teks": "Meminta nasihat orang tua atau kenalan berpengalaman sebelum memutuskan menolak atau menerima tawaran oknum tersebut.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – A (4) – B (3) – E (2) – C (1). Menolak praktik suap secara mutlak, menempuh kompetisi secara bersih, dan turut memberantas percaloan melalui pelaporan resmi ke pimpinan atau sistem pengawasan menunjukkan integritas profesional tertinggi (skor 5). Menolak dengan teguh tanpa melapor tetap jujur secara personal (skor 4). Mempertimbangkan (skor 3) atau berkonsultasi perihal suap (skor 2) menandakan lemahnya keteguhan prinsip, sementara menyuap jelas merupakan tindak pidana korupsi (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Sebagai kepala instansi daerah yang memiliki reputasi baik, Anda kedatangan sahabat karib semasa kuliah yang memohon bantuan agar anaknya dapat langsung diterima bekerja sebagai pegawai di instansi Anda tanpa mengikuti seleksi resmi, seraya menawarkan imbalan dana serta fasilitas tertentu. Sikap Anda seharusnya adalah...",
      "pilihan": [
        {
          "teks": "Meluluskan permintaannya secara langsung tanpa menerima imbalan uang atas dasar menghormati persahabatan lama.",
          "skor": 1
        },
        {
          "teks": "Menolak mentah-mentah tawaran imbalan tersebut dan menegaskan bahwa sistem kepegawaian tidak dapat diintervensi oleh siapa pun.",
          "skor": 4
        },
        {
          "teks": "Merasa sungkan kepada sahabat karib sehingga mengizinkannya mengikuti ujian seleksi sebagai formalitas saja sambil memantau prosesnya.",
          "skor": 2
        },
        {
          "teks": "Menolak permintaan beserta tawaran imbalan tersebut secara santun namun tegas sesuai prinsip keadilan, serta menyarankan agar anak sahabat Anda mengikuti seluruh tahapan seleksi terbuka seperti pelamar lain.",
          "skor": 5
        },
        {
          "teks": "Menerima berkas anak sahabat tersebut dengan syarat tetap harus mengikuti proses seleksi umum, tanpa jaminan kelulusan apa pun.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah D (5) – B (4) – E (3) – C (2) – A (1). Menegakkan sistem merit bebas nepotisme dan gratifikasi dengan komunikasi penolakan yang tetap menjaga etika serta mengarahkan pada jalur seleksi adil merupakan cerminan pimpinan yang profesional (skor 5). Menolak mentah-mentah sudah berintegritas namun penyampaiannya kurang persuasif edukatif (skor 4). Memberi ruang keraguan atau formalitas membuka celah kecurangan (skor 3 dan 2), dan meluluskan tanpa tes walaupun tanpa uang merupakan bentuk penyalahgunaan wewenang dan nepotisme (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Atasan langsung Anda di unit keuangan mengarahkan Anda untuk memodifikasi angka realisasi anggaran kegiatan pada laporan pertanggungjawaban akhir tahun agar serapan terlihat sempurna, padahal terdapat beberapa pos kegiatan yang belum terealisasi penuh. Sikap profesional Anda adalah...",
      "pilihan": [
        {
          "teks": "Menolak secara tegas namun santun perintah rekayasa laporan keuangan tersebut, mengingatkan potensi pelanggaran hukumnya, dan melaporkan penyimpangan melalui mekanisme pengawasan internal yang berwenang.",
          "skor": 5
        },
        {
          "teks": "Tidak menyetujui tindakan tersebut dalam hati namun memilih meminta pengalihan tugas penyusunan laporan keuangan ke bagian lain.",
          "skor": 3
        },
        {
          "teks": "Mengikuti perintah penyesuaian angka laporan tersebut karena menganggap risiko hukum sepenuhnya menjadi tanggung jawab atasan.",
          "skor": 2
        },
        {
          "teks": "Menuruti arahan rekayasa laporan tersebut dengan beranggapan bahwa praktik penyesuaian anggaran sudah menjadi hal lumrah di berbagai kantor.",
          "skor": 1
        },
        {
          "teks": "Menolak terlibat sama sekali dalam penyusunan rekayasa angka laporan tersebut dan tetap menyajikan data sesuai bukti pengeluaran sah.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – E (4) – B (3) – C (2) – D (1). Keberanian menolak perintah yang melanggar hukum, menjaga akuntabilitas data keuangan negara, serta memanfaatkan jalur pelaporan pengawasan internal merupakan puncak integritas profesional ASN (skor 5). Menolak terlibat untuk menjaga kejujuran pribadi bernilai baik meski tidak mencegah potensi penyimpangan lebih jauh (skor 4). Menghindar dari tugas tanpa sikap tegas (skor 3) serta menuruti perintah ilegal (skor 2 dan 1) merupakan pelanggaran berat etika jabatan.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Anda ditugaskan menjadi sekretaris notulen dalam rapat tertutup Tim Penilai Kinerja Kepegawaian yang membahas daftar nama pejabat yang direkomendasikan untuk promosi dan mutasi jabatan. Seusai rapat, beberapa rekan kerja akrab mendesak Anda memberitahukan isi keputusan rapat tersebut sebelum pengumuman resmi terbit. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Berusaha sopan menghindar dari rekan-rekan yang terus membujuk agar rahasia hasil rapat kepegawaian tetap aman.",
          "skor": 4
        },
        {
          "teks": "Menceritakan daftar nama hasil keputusan rapat tersebut kepada rekan sejawat di ruangan dengan rasa bangga sebagai pemegang informasi penting.",
          "skor": 1
        },
        {
          "teks": "Tidak akan membocorkan informasi maupun hasil keputusan rapat kepada siapa pun karena menjaga kerahasiaan dokumen tersebut adalah kewajiban jabatan hingga diumumkan secara resmi.",
          "skor": 5
        },
        {
          "teks": "Meminta rekan-rekan kerja bersabar menanti surat keputusan resmi dari pimpinan tanpa memberikan petunjuk apa pun.",
          "skor": 3
        },
        {
          "teks": "Memberitahukan hanya kepada pasangan di rumah atau sahabat paling dipercaya saja dengan pesan agar tidak diteruskan ke orang lain.",
          "skor": 2
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah C (5) – A (4) – D (3) – E (2) – B (1). Keteguhan memegang amanah rahasia jabatan secara mutlak tanpa kompromi merupakan syarat fundamental profesionalisme aparatur pengelola informasi sensitif (skor 5). Menghindari bujukan secara halus tetap menjaga kerahasiaan meski kurang menunjukkan ketegasan prinsip (skor 4). Menyuruh bersabar cukup netral (skor 3), membocorkan ke keluarga/sahabat tetap melanggar sumpah rahasia jabatan (skor 2), dan membanggakan bocoran rapat kepada rekan kerja sangat tidak profesional (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "mudah",
      "question_text": "Setelah menyelesaikan penyusunan draf naskah dinas atau laporan evaluasi bulanan lebih cepat daripada batas waktu yang ditentukan atasan, langkah kerja yang paling mencerminkan sikap profesional Anda adalah...",
      "pilihan": [
        {
          "teks": "Menunda penyerahan laporan tersebut hingga mendekati jam pulang agar terlihat bekerja penuh, sembari mengisi waktu membaca berita hiburan.",
          "skor": 1
        },
        {
          "teks": "Meneliti kembali seluruh bagian pekerjaan secara cermat guna memastikan tidak ada kekeliruan pengetikan maupun hitungan sebelum menyerahkannya dan beralih ke aktivitas lain.",
          "skor": 5
        },
        {
          "teks": "Langsung mengirim draf tersebut apa adanya tanpa diperiksa ulang dan segera melakukan aktivitas pribadi lain.",
          "skor": 2
        },
        {
          "teks": "Memeriksa sekilas kelengkapan berkas utama tersebut agar tidak ada lampiran yang tertinggal sebelum diserahkan kepada pimpinan.",
          "skor": 4
        },
        {
          "teks": "Beristirahat sejenak di ruang kerja sambil menunggu rekan tim lain menyelesaikan bagian tugasnya.",
          "skor": 3
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah B (5) – D (4) – E (3) – C (2) – A (1). Pengendalian mutu mandiri melalui pemeriksaan ulang secara menyeluruh sebelum pekerjaan dinyatakan selesai menjamin keandalan hasil kerja ASN profesional (skor 5). Pemeriksaan sekilas sudah berupaya menjaga kualitas namun belum mendetail (skor 4). Beristirahat menunggu tanpa kendali mutu berisiko menyisakan kesalahan (skor 3), mengirim tanpa verifikasi ceroboh (skor 2), dan menahan laporan demi pencitraan waktu kerja tidak efisien (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Meningkatnya kebutuhan hidup membuat sejumlah rekan kerja Anda mengeluhkan gaji bulanan yang terasa pas-pasan dan mulai ramai menggunakan pinjaman daring tidak resmi dengan denda bunga tinggi hingga mengganggu ketenangan mereka bekerja. Sikap dewasa dan profesional Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengatur perencanaan keuangan pribadi secara disiplin agar terhindar dari jeratan utang, serta meneliti legalitas dan rincian lembaga keuangan resmi jika sewaktu-waktu terpaksa membutuhkan pembiayaan.",
          "skor": 5
        },
        {
          "teks": "Menolak keras gagasan meminjam uang dalam kondisi terdesak sekalipun tanpa diiringi perencanaan pengelolaan anggaran pribadi yang jelas.",
          "skor": 2
        },
        {
          "teks": "Mengingatkan rekan-rekan kerja agar selalu berhati-hati meneliti legalitas penyedia layanan keuangan sebelum mengajukan pinjaman meskipun prosesnya tampak mudah.",
          "skor": 4
        },
        {
          "teks": "Berusaha menahan diri agar tidak melakukan peminjaman dalam bentuk apa pun demi menghindari beban pembayaran angsuran setiap bulan.",
          "skor": 3
        },
        {
          "teks": "Ikut memanfaatkan pinjaman daring berizin tidak jelas demi menutupi gaya hidup konsumtif selagi proses pencairannya cepat.",
          "skor": 1
        }
      ],
      "explanation": "Kedewasaan mengendalikan diri dalam aspek finansial melindungi stabilitas profesionalisme kerja ASN melalui perencanaan matang dan verifikasi legalitas lembaga resmi (skor 5). Mengingatkan rekan kerja sangat baik (4), menahan diri tanpa perencanaan keuangan terukur kurang antisipatif untuk kondisi darurat (3 dan 2), dan terjerat pinjaman ilegal merusak integritas serta kinerja pegawai (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Anda memiliki seorang staf bawahan yang masih berstatus keponakan pimpinan puncak instansi. Suatu hari ia melakukan kesalahan kerja berulang dan tidak menjalankan pemeriksaan dokumen penting yang Anda tugaskan dengan alasan kurang masuk akal. Sikap tegas dan profesional Anda adalah...",
      "pilihan": [
        {
          "teks": "Memilih diam dan tidak berani menegur karena khawatir karier Anda terhambat atau dimutasi akibat menyinggung kerabat pimpinan.",
          "skor": 1
        },
        {
          "teks": "Menasihatinya secara pribadi namun memintanya tidak menceritakan teguran tersebut kepada pamannya yang menjadi pimpinan.",
          "skor": 3
        },
        {
          "teks": "Meminta rekan kerja lain yang lebih akrab dengannya untuk membantu menasihati agar ia tidak tersinggung.",
          "skor": 2
        },
        {
          "teks": "Berani menegurnya secara tegas namun santun serta memberikan pembinaan langsung agar ia bertanggung jawab penuh terhadap tugas kedinasannya.",
          "skor": 5
        },
        {
          "teks": "Mencatat pelanggaran disiplin tersebut secara objektif dan melaporkannya secara berjenjang kepada pimpinan apabila teguran lisan tidak diindahkan.",
          "skor": 4
        }
      ],
      "explanation": "Profesionalisme kepemimpinan menuntut objektivitas dan keberanian menegakkan disiplin kepada bawahan tanpa memandang hubungan kekerabatan dengan pejabat tinggi (skor 5). Melapor berjenjang baik jika pembinaan awal tidak efektif (4), meminta merahasiakan teguran menunjukkan keraguan prinsip (3), meminta orang lain menegur melepas tanggung jawab atasan langsung (2), dan takut bertindak melunturkan integritas jabatan (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Anda bertugas sebagai aparatur sipil negara yang selama ini aktif menyuarakan gerakan antikorupsi dan anti-nepotisme di lingkungan instansi. Belakangan Anda baru mengetahui fakta bahwa kelulusan Anda dahulu ternyata melibatkan campur tangan orang tua melalui jalur tidak resmi tanpa sepengetahuan Anda. Sikap berintegritas Anda adalah...",
      "pilihan": [
        {
          "teks": "Tetap bersikap tenang seolah tidak mengetahui apa-apa dan menyimpannya rapat karena menganggap proses pemecatan pegawai negeri sulit dilakukan.",
          "skor": 1
        },
        {
          "teks": "Meminta maaf kepada jajaran pimpinan instansi dan meneruskan informasi pelanggaran oknum tersebut kepada pihak pengawas berwenang.",
          "skor": 4
        },
        {
          "teks": "Mengakui secara jujur fakta kecurangan tersebut kepada otoritas instansi terkait serta bersedia menerima apa pun keputusan hukum dan kepegawaian yang ditetapkan.",
          "skor": 5
        },
        {
          "teks": "Menyesali kejadian tersebut dengan cara memperbanyak amal sosial dan bekerja lebih tekun demi menebus kesalahan keluarga.",
          "skor": 2
        },
        {
          "teks": "Menasihati orang tua bahwa praktik jalur belakang tersebut keliru lalu melaporkannya kepada pejabat berwenang.",
          "skor": 3
        }
      ],
      "explanation": "Integritas sejati menuntut keselarasan antara prinsip antikorupsi yang diyakini dengan keberanian mengakui kenyataan secara terbuka dan tunduk pada keputusan institusi (skor 5). Meminta maaf sambil melapor juga menunjukkan tanggung jawab namun pengakuan langsung dan kesiapan menerima konsekuensi lebih utama (4 dan 3), sedangkan menyesali dalam diam atau menyembunyikan kebenaran bertentangan dengan nilai kejujuran (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "mudah",
      "question_text": "Anda menghadiri acara syukuran rekan kerja sekantor yang turut mengundang seluruh pegawai dari berbagai agama dan kepercayaan. Tiba-tiba tuan rumah meminta Anda memimpin doa bersama di tengah acara. Sikap paling tepat yang mencerminkan toleransi di lingkungan majemuk adalah...",
      "pilihan": [
        {
          "teks": "Menginstruksikan hadirin untuk berdoa sesuai agama serta kepercayaan masing-masing secara khidmat, sembari Anda memimpin doa menurut keyakinan Anda dengan penuh ketenangan dan penghormatan.",
          "skor": 5
        },
        {
          "teks": "Mempersilakan seluruh hadirin menundukkan kepala untuk berdoa dalam hati menurut agama serta kepercayaan masing-masing secara hening.",
          "skor": 4
        },
        {
          "teks": "Menyerahkan mandat memimpin doa kepada rekan lain karena merasa belum siap berada di hadapan audiens lintas agama.",
          "skor": 2
        },
        {
          "teks": "Langsung memimpin doa dengan lantang semata-mata menggunakan tata cara agama Anda tanpa menyapa keragaman keyakinan peserta.",
          "skor": 3
        },
        {
          "teks": "Menolak permintaan tersebut dengan mengusulkan agar sesi doa bersama ditiadakan dan langsung menuju acara santap siang.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – B (4) – D (3) – C (2) – E (1). Menjalankan keyakinan diri dengan khidmat sekaligus memberi ruang setara bagi pemeluk agama lain untuk berdoa sesuai kepercayaannya menampakkan keharmonisan toleransi beragama yang sejati (skor 5). Mengajak berdoa dalam hati masing-masing juga inklusif namun peran kepemimpinan doa kurang tampak (skor 4). Berdoa sepihak tanpa menyinggung keberagaman kurang peka terhadap hadirin majemuk (skor 3), menolak karena canggung kurang percaya diri (skor 2), dan menghapus sesi doa sama sekali kurang menghargai tuan rumah maupun nilai ketuhanan (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Sebagai ketua pengurus warga di lingkungan Anda, Anda menghadapi aksi protes sebagian warga yang menolak kepulangan seorang mantan narapidana kasus terorisme yang telah menyelesaikan masa pembinaan di lembaga pemasyarakatan. Warga khawatir paham radikal masih melekat dan membahayakan keamanan sekitar. Sikap bijak Anda adalah...",
      "pilihan": [
        {
          "teks": "Bekerja sama dengan aparat terkait dan mengajak warga membangun lingkungan sosial yang kondusif serta suportif guna meneruskan pendampingan proses deradikalisasi dan reintegrasi mantan narapidana tersebut.",
          "skor": 5
        },
        {
          "teks": "Menjelaskan kepada warga bahwa yang bersangkutan telah dinyatakan lulus dan selesai menjalani pembinaan resmi dari pemerintah.",
          "skor": 3
        },
        {
          "teks": "Menegaskan bahwa setiap warga negara yang telah bebas secara hukum berhak tinggal di properti miliknya tanpa perlu dibahas lebih jauh.",
          "skor": 2
        },
        {
          "teks": "Memberikan pemahaman kepada warga bahwa lingkungan masyarakat memiliki peran penting dalam membina dan mengawasi keberlanjutan deradikalisasi mantan narapidana.",
          "skor": 4
        },
        {
          "teks": "Mendukung petisi penolakan warga untuk tidak menerima kehadirannya demi menghindari gejolak di lingkungan perumahan.",
          "skor": 1
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – D (4) – B (3) – C (2) – E (1). Program deradikalisasi menuntut keterlibatan berkelanjutan masyarakat untuk menciptakan lingkungan inklusif yang mengawasi sekaligus merangkul mantan narapidana agar tidak kembali ke jaringan ekstremis (skor 5). Mengedukasi warga tentang peran pembinaan masyarakat cukup baik namun belum berupa aksi penciptaan lingkungan kondusif bersama aparat (skor 4). Menyampaikan status pembinaan lapas bersifat informatif semata (skor 3), berargumen hak tinggal secara kaku tidak meredakan kecemasan warga (skor 2), dan ikut menolak justru mendorong mantan narapidana kembali terkucil ke lingkungan radikal (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Anda mendapati seorang rekan ASN satu instansi kerap mengunggah tulisan maupun tautan bermuatan ujaran kebencian terhadap kelompok agama tertentu serta menyatakan bahwa ideologi Pancasila sudah tidak layak dipertahankan di akun media sosial pribadinya. Tindakan tepat yang mencerminkan integritas antiradikalisme ASN adalah...",
      "pilihan": [
        {
          "teks": "Mengajak rekan tersebut berdialog secara personal mengenai kewajiban kesetiaan ASN pada Pancasila dan NKRI, serta melaporkan bukti pelanggaran secara objektif melalui saluran pembinaan kepegawaian resmi apabila ia tetap berlanjut.",
          "skor": 5
        },
        {
          "teks": "Memilih membisukan atau memutus pertemanan media sosial dengan rekan tersebut agar Anda tidak ikut terseret polemik.",
          "skor": 2
        },
        {
          "teks": "Mengirimkan tautan aturan resmi mengenai penanganan radikalisme ASN melalui pesan pribadi sebagai bentuk peringatan tidak langsung.",
          "skor": 3
        },
        {
          "teks": "Menekan tanda suka atau turut meneruskan unggahannya karena beranggapan setiap ASN bebas berpendapat di akun pribadi.",
          "skor": 1
        },
        {
          "teks": "Mengingatkannya secara langsung dengan santun bahwa tindakan menyebarkan ujaran kebencian serta menentang ideologi negara melanggar kode etik dan disiplin ASN.",
          "skor": 4
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah A (5) – E (4) – C (3) – B (2) – D (1). Berdasarkan ketentuan pembinaan ASN antiradikalisme, penyebaran ujaran kebencian dan penolakan ideologi Pancasila merupakan pelanggaran serius yang wajib ditangani lewat teguran persuasif dan pelaporan objektif melalui saluran resmi bila berulang (skor 5). Mengingatkan langsung secara santun sudah berani dan etis namun kurang diikuti tindak lanjut penegakan disiplin bila membandel (skor 4). Mengirim tautan kurang dialogis (skor 3), membisukan akun membiarkan ancaman radikalisme terus berjalan (skor 2), sedangkan mendukung atau menyebarkan ulang turut melanggar sumpah setia ASN pada Pancasila (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Ketika sedang mencari lembaga pendidikan atau kegiatan pembinaan karakter bagi adik atau putra Anda, Anda menemukan informasi tepercaya bahwa sebuah lembaga pendidikan tertentu melarang siswa melaksanakan penghormatan bendera Merah Putih dan menyanyikan lagu kebangsaan Indonesia Raya karena dianggap tidak sejalan dengan paham pengelolanya. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Diam-diam langsung memilih lembaga pendidikan lain tanpa mencari kejelasan maupun melaporkannya kepada pihak terkait.",
          "skor": 2
        },
        {
          "teks": "Memastikan anggota keluarga batal mendaftar dan mengingatkan pihak pengelola secara tegas bahwa penolakan terhadap simbol resmi negara bertentangan dengan nilai Pancasila.",
          "skor": 4
        },
        {
          "teks": "Tetap mendaftarkan anggota keluarga ke lembaga tersebut karena menganggap kualitas pelajaran akademiknya lebih penting daripada kegiatan upacara.",
          "skor": 1
        },
        {
          "teks": "Membatalkan rencana pendaftaran ke lembaga itu sambil menjelaskan kepada keluarga bahwa sikap menolak lagu kebangsaan mengarah pada paham intoleran.",
          "skor": 3
        },
        {
          "teks": "Tidak mendaftarkan anggota keluarga ke lembaga tersebut, memberikan penguatan wawasan kebangsaan serta moderasi yang benar kepada keluarga, dan melaporkan indikasi penyimpangan prinsip kebangsaan itu kepada dinas berwenang.",
          "skor": 5
        }
      ],
      "explanation": "Urutan peringkat skor tertinggi hingga terendah adalah E (5) – B (4) – D (3) – A (2) – C (1). Melindungi anggota keluarga dengan menanamkan nilai moderasi dan wawasan kebangsaan sekaligus melaporkan indikasi infiltrasi paham anti-NKRI di lembaga pendidikan kepada otoritas berwenang memberikan perlindungan menyeluruh bagi generasi muda (skor 5). Menolak mendaftar dan menegur pengelola tegas sudah berani meski tidak mengaktifkan pengawasan otoritas pendidikan (skor 4). Membatalkan sambil mengedukasi keluarga terbatas di ruang privat (skor 3), menghindar diam-diam membiarkan siswa lain terpapar (skor 2), dan tetap mendaftar mengabaikan bahaya ideologi radikal (skor 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Di dalam grup percakapan resmi pegawai satu instansi, seorang rekan mengirimkan tautan video ceramah yang secara terang-terangan menyebut sistem pemerintahan sah berdasarkan Pancasila sebagai sistem sesat yang wajib diganti melalui perlawanan. Sikap tegas dan bijak Anda adalah...",
      "pilihan": [
        {
          "teks": "Meminta pengelola grup percakapan segera menghapus pesan tautan tersebut tanpa menyampaikan edukasi atau laporan tindak lanjut.",
          "skor": 3
        },
        {
          "teks": "Memberikan tanggapan setuju secara diam-diam terhadap sebagian isi video tersebut agar tidak dianggap kurang sepaham oleh pengirimnya.",
          "skor": 1
        },
        {
          "teks": "Mengabaikan tautan tersebut karena beranggapan setiap pegawai memiliki kebebasan pribadi dalam mengikuti kajian keagamaan maupun pandangan politik.",
          "skor": 2
        },
        {
          "teks": "Mengingatkan secara santun di grup mengenai kode etik ASN dan larangan penyebaran paham anti-Pancasila, menyimpan bukti tangkapan layar, serta melaporkannya kepada atasan atau pejabat pengawas internal.",
          "skor": 5
        },
        {
          "teks": "Menghubungi rekan tersebut secara pribadi untuk mengklarifikasi maksud unggahan dan menegurnya agar tidak menyebarkan konten bermuatan radikalisme di ruang kerja.",
          "skor": 4
        }
      ],
      "explanation": "Sebagai ASN yang setia pada Pancasila dan UUD 1945, penangkalan radikalisme di ruang kerja digital dilakukan lewat pengingat beretika, pengamanan bukti, serta pelaporan berjenjang kepada pejabat pembina kepegawaian (skor 5). Teguran pribadi tidak menjamin eskalasi terkendali di tingkat instansi (4), sekadar menghapus tanpa laporan memutus deteksi dini (3), mengabaikan membiarkan paham radikal menyebar (2), dan menyetujui mencederai sumpah setia ASN (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Ketika bertugas di meja pelayanan administrasi kependudukan, Anda menyaksikan rekan satu meja sengaja memperlambat dan mempersulit berkas seorang pemohon yang mengenakan simbol keagamaan minoritas dengan alasan sepele, sementara pemohon lain dilayani cepat. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Membenarkan tindakan rekan tersebut karena beranggapan pelayanan daerah sebaiknya memang memprioritaskan warga dari kelompok mayoritas setempat.",
          "skor": 1
        },
        {
          "teks": "Mencatat perlakuan diskriminatif tersebut secara diam-diam lalu langsung menyerahkan laporan kejadian kepada kepala seksi di akhir jam kerja.",
          "skor": 3
        },
        {
          "teks": "Segera membantu mempercepat atau mengambil alih pemeriksaan berkas warga tersebut secara setara sesuai SOP, lalu mengingatkan rekan Anda setelah layanan usai tentang asas non-diskriminasi dan melaporkannya jika terus berulang.",
          "skor": 5
        },
        {
          "teks": "Menegur rekan tersebut secara halus di sela layanan agar bersikap adil terhadap seluruh warga tanpa membeda-bedakan latar belakang keyakinan.",
          "skor": 4
        },
        {
          "teks": "Merasa prihatin melihat kejadian tersebut namun memilih tidak ikut campur karena itu merupakan kewenangan meja layanan rekan Anda.",
          "skor": 2
        }
      ],
      "explanation": "Tindakan nyata melawan intoleransi di sektor pelayanan publik memadukan pemulihan hak warga secara cepat, teguran edukatif kepada rekan, dan pelaporan berjenjang bila berulang (skor 5). Menegur saja belum tentu menjamin berkas warga langsung tertangani cepat (4), mencatat tanpa membantu saat itu membiarkan warga dirugikan (3), diam apatis memelihara diskriminasi (2), dan mendukung sikap eksklusif bertentangan dengan nilai kebhinekaan (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "mudah",
      "question_text": "Seorang kenalan lama mengajak Anda bergabung dalam pertemuan kajian tertutup pada akhir pekan. Saat Anda menanyakan materinya, ia menjelaskan bahwa forum tersebut mengajarkan bekerja sebagai pegawai pemerintah berarti mengabdi pada hukum batil dan seluruh aparat negara harus dimusuhi. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menolak hadir dengan mencari alasan sibuk mengurus pekerjaan keluarga agar kenalan lama tersebut tidak tersinggung.",
          "skor": 3
        },
        {
          "teks": "Memutuskan hadir sekali saja karena merasa tidak enak menolak ajakan teman lama sembari berniat tidak terlalu menyimak materinya.",
          "skor": 2
        },
        {
          "teks": "Menolak secara tegas undangan pertemuan tersebut dan menjaga jarak dari ajakan diskusi yang bertentangan dengan dasar negara.",
          "skor": 4
        },
        {
          "teks": "Menolak ajakan tersebut secara tegas namun santun, meluruskan pemahaman bahwa pengabdian ASN selaras dengan nilai kebaikan dan konstitusi, serta mewaspadai penyebaran paham tersebut di lingkungan sekitar.",
          "skor": 5
        },
        {
          "teks": "Merasa penasaran lalu ikut bergabung secara rutin karena meyakini setiap forum kajian tertutup pasti membawa kebaikan.",
          "skor": 1
        }
      ],
      "explanation": "Ketahanan diri terhadap rekrutmen radikalisme dibangun melalui penolakan tegas penuh kesantunan, kontra-narasi bahwa pengabdian negara adalah amanah mulia, dan kewaspadaan dini (skor 5). Menolak tanpa meluruskan belum memberikan kontra-pemahaman (4), beralasan sibuk kurang menunjukkan ketegasan prinsip (3), dan menghadiri atau bergabung membuka celah terpapar paham takfiri anti-NKRI (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Saat memantau fasilitas komputer layanan publik dan perpustakaan digital kantor kecamatan, Anda mendapati seorang pengunjung sengaja mengakses dan mengunduh materi propaganda organisasi ekstremis terlarang berisi panduan perakitan bahan peledak. Tindakan paling tepat Anda adalah...",
      "pilihan": [
        {
          "teks": "Tetap bersikap tenang agar tidak memicu kepanikan umum, menghentikan akses serta mengamankan riwayat perangkat secara prosedural, lalu segera berkoordinasi dengan atasan dan aparat keamanan setempat.",
          "skor": 5
        },
        {
          "teks": "Meminta staf teknologi informasi kantor untuk memblokir alamat situs terlarang tersebut pada jaringan lokal setelah pengunjung pulang.",
          "skor": 3
        },
        {
          "teks": "Menegur pengunjung tersebut dengan suara lantang di tengah ruang pelayanan sehingga menarik perhatian dan keributan warga lain.",
          "skor": 2
        },
        {
          "teks": "Segera memutus koneksi internet perangkat komputer tersebut dan meminta pengunjung meninggalkan area ruang baca demi keamanan fasilitas.",
          "skor": 4
        },
        {
          "teks": "Membiarkannya saja dengan alasan kebebasan mencari informasi di ruang digital merupakan hak pribadi setiap pengguna komputer umum.",
          "skor": 1
        }
      ],
      "explanation": "Deteksi ancaman terorisme dan konten berbahaya di fasilitas publik wajib ditangani tenang, menjaga bukti digital untuk ditindaklanjuti otoritas berwenang, tanpa memicu kepanikan massal (skor 5). Memutus koneksi tanpa koordinasi pengamanan melewatkan pelacakan ancaman nyata (4), sekadar memblokir situs terlambat mencegah penyebaran fisik (3), membentak keras dapat memicu risiko konfrontasi berbahaya (2), dan membiarkannya merupakan kelalaian keamanan negara (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    }
  ],
  [
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Akibat kemacetan parah di jalan utama, Anda tiba di kantor dinas dua menit menjelang batas akhir presensi elektronik pagi. Saat bergegas menuju mesin presensi, seorang warga tampak kebingungan mencari lokasi loket pengaduan sementara petugas keamanan sedang berpatroli di halaman belakang. Tindakan Anda adalah...",
      "pilihan": [
        {
          "teks": "Langsung berjalan cepat menuju mesin presensi tanpa menyapa agar catatan kehadiran Anda tidak berstatus terlambat.",
          "skor": 1
        },
        {
          "teks": "Menyapa warga tersebut dengan ramah, menunjukkan arah ruang loket yang dituju secara jelas, lalu segera melakukan presensi sebelum batas waktu berakhir.",
          "skor": 5
        },
        {
          "teks": "Mengantarkannya terlebih dahulu sampai ke pintu ruang loket di lantai atas meskipun berisiko tercatat terlambat presensi.",
          "skor": 2
        },
        {
          "teks": "Mengajak warga tersebut berjalan searah menuju lobi utama sambil menunjukkan lokasi loket sekaligus langsung melakukan presensi.",
          "skor": 4
        },
        {
          "teks": "Menyapa singkat dan memintanya menunggu beberapa menit di lobi sampai petugas keamanan kembali ke pos jaga.",
          "skor": 3
        }
      ],
      "explanation": "Memberikan petunjuk arah secara ramah sekaligus tetap menunaikan kewajiban presensi tepat waktu mencerminkan keseimbangan orientasi pelayanan dan kedisiplinan (skor 5). Mengajak berjalan searah sedikit memperlambat langkah namun tetap positif (4), menyuruh menunggu petugas kurang sigap (3), mengantar hingga terlambat presensi mengorbankan disiplin pribadi (2), dan mengabaikan warga sama sekali melanggar etika pelayanan (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sulit",
      "question_text": "Saat Anda sedang merapikan berkas di dekat meja layanan terpadu, seorang pemohon tiba-tiba meluapkan kemarahan dengan nada tinggi dan kata-kata kasar karena menilai penerbitan surat izinnya terlalu lama. Sikap paling tepat yang Anda tunjukkan adalah...",
      "pilihan": [
        {
          "teks": "Meminta maaf atas ketidaknyamanan yang dirasakan, mendengarkan keluhannya dengan tenang, lalu memeriksa status berkasnya untuk mencarikan solusi segera.",
          "skor": 5
        },
        {
          "teks": "Tersenyum sopan dan menyimak seluruh keluhannya hingga selesai tanpa menyela, kemudian mengarahkannya ke meja pengaduan resmi.",
          "skor": 3
        },
        {
          "teks": "Meminta pemohon tersebut menunggu petugas lain karena menilai keterlambatan proses bukan bagian dari tanggung jawab langsung Anda.",
          "skor": 1
        },
        {
          "teks": "Mengingatkan pemohon tersebut agar berbicara lebih santun sebelum Anda bersedia membantu memeriksa berkas permohonannya.",
          "skor": 2
        },
        {
          "teks": "Mengendalikan emosi meskipun menerima ucapan kurang pantas serta tetap menelusuri progres berkas pemohon sesuai prosedur.",
          "skor": 4
        }
      ],
      "explanation": "Pelayanan prima dalam situasi penuh tekanan menuntut empati awal melalui permohonan maaf, ketenangan mendengar, dan tindakan cepat memeriksa akar masalah (skor 5). Menahan emosi sambil tetap melayani cukup baik namun kurang sentuhan empati (4), mengarahkan ke meja pengaduan menunda penyelesaian (3), mendahulukan teguran dapat memicu eskalasi emosi (2), dan melempar ke petugas lain menghambat pelayanan (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Anda bertugas sebagai kurir resmi pengantar dokumen kedinasan antar-kecamatan yang hanya menerima amplop tersegel dari bagian tata usaha. Saat tiba di lokasi tujuan, penerima berkas memprotes keras karena isi dokumen di dalam amplop ternyata tertukar dengan berkas milik wilayah lain. Respons Anda adalah...",
      "pilihan": [
        {
          "teks": "Mendengarkan protesnya sekilas lalu segera pamit meninggalkan lokasi karena masih harus mengejar jadwal pengantaran ke kecamatan lain.",
          "skor": 1
        },
        {
          "teks": "Meminta maaf dengan santun, menyimak keluhan penerima, lalu segera menelepon koordinator tata usaha di kantor untuk mengonfirmasi kekeliruan dan mekanisme pengiriman pengganti.",
          "skor": 5
        },
        {
          "teks": "Menjelaskan secara rinci bahwa tugas Anda sebatas mengantarkan amplop tersegel sehingga kesalahan penyortiran terjadi di ruang tata usaha.",
          "skor": 2
        },
        {
          "teks": "Mendengarkan keluhannya dengan saksama dan menyampaikan akan menanyakan persoalannya ke bagian tata usaha setelah seluruh rute hari itu selesai.",
          "skor": 3
        },
        {
          "teks": "Meminta maaf, mencatat nomor registrasi berkas yang tertukar, dan berjanji segera mengantarkan dokumen yang benar begitu penukaran di kantor selesai.",
          "skor": 4
        }
      ],
      "explanation": "Daya tanggap tinggi ditunjukkan dengan meminta maaf, mendengarkan keluhan, dan langsung menghubungi koordinator unit pengirim saat itu juga agar solusi cepat berjalan (skor 5). Menjanjikan pengantaran ulang tanpa koordinasi langsung kurang cepat (4), menunda pengecekan hingga akhir rute memperlambat koreksi (3), membela diri dengan menyalahkan bagian lain terkesan lepas tangan (2), dan langsung pergi tanpa solusi sangat buruk (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Dalam acara rapat kerja daerah yang Anda fasilitasi sebagai penanggung jawab konsumsi, seorang peserta dari instansi mitra mengeluhkan hidangan yang disajikan mengandung cabai pedas padahal ia sudah mencantumkan catatan pantangan makanan pedas saat registrasi. Tindakan Anda adalah...",
      "pilihan": [
        {
          "teks": "Meminta maaf terlebih dahulu, kemudian berkoordinasi dengan bagian dapur untuk mengecek ketersediaan bahan pengganti sebelum melapor ke tamu.",
          "skor": 4
        },
        {
          "teks": "Mencatat keluhan tersebut dan melaporkannya kepada ketua panitia agar menjadi bahan evaluasi kontrak vendor konsumsi.",
          "skor": 2
        },
        {
          "teks": "Menjelaskan bahwa seluruh menu telah dimasak seragam dalam jumlah besar sehingga tidak memungkinkan penyesuaian per peserta.",
          "skor": 1
        },
        {
          "teks": "Meminta maaf dengan tulus dan segera meminta tim penyedia dapur menyiapkan hidangan pengganti yang tidak pedas sesuai permintaan tamu tersebut.",
          "skor": 5
        },
        {
          "teks": "Memohon tamu bersabar menunggu sambil menawarkan pilihan lauk netral atau buah segar yang tersedia di meja sajian.",
          "skor": 3
        }
      ],
      "explanation": "Menyampaikan permohonan maaf disertai tindakan langsung meminta dapur menyiapkan menu pengganti merupakan respons pelayanan yang cepat dan solutif (skor 5). Melapor dan mengecek ketersediaan sedikit lebih lambat (4), menawarkan opsi darurat belum menuntaskan keluhan utama (3), hanya mencatat untuk evaluasi tidak menyelesaikan kebutuhan saat itu (2), dan menolak penyesuaian mengabaikan kebutuhan penerima layanan (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Pada siang hari yang padat di loket layanan administrasi terpadu, antrean warga mengular panjang. Anda melihat seorang warga lanjut usia berusia sekitar 75 tahun ikut berdiri mengantre hingga tampak kelelahan dan memohon agar berkasnya dapat dilayani lebih dahulu. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Memberikan penjelasan singkat dengan santun kepada para pengantre lain mengenai kebijakan prioritas kelompok rentan, lalu segera melayani warga lanjut usia tersebut.",
          "skor": 5
        },
        {
          "teks": "Meminta maaf secara sopan dan menyampaikan bahwa pelayanan tetap wajib mengikuti urutan nomor antrean kedatangan agar adil.",
          "skor": 2
        },
        {
          "teks": "Langsung memanggil warga lanjut usia tersebut ke meja layanan karena usianya sudah tua tanpa memberi tahu pengantre lain.",
          "skor": 3
        },
        {
          "teks": "Mempersilakan warga lanjut usia tersebut duduk di kursi prioritas dan langsung memproses berkasnya sambil menjelaskan alasannya kepada pengantre di belakang.",
          "skor": 4
        },
        {
          "teks": "Meminta warga lanjut usia tersebut menunggu hingga antrean agak lengang pada sore hari atau kembali esok pagi.",
          "skor": 1
        }
      ],
      "explanation": "Kelompok rentan seperti lansia berhak memperoleh prioritas layanan publik, namun petugas wajib mengomunikasikannya terlebih dahulu kepada pengantre lain agar tercipta rasa keadilan dan ketertiban (skor 5). Mendahulukan baru menjelaskan berisiko memicu protes sesaat (4), mendahulukan tanpa penjelasan dapat menimbulkan kesalahpahaman (3), kaku pada nomor antrean kurang peka terhadap kondisi lansia (2), dan menunda ke sore atau esok hari menyulitkan warga (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Selama sebulan terakhir, unit layanan perizinan tempat Anda bertugas menerima sejumlah keluhan masyarakat mengenai kurang jelasnya alur pengisian formulir. Ketika seorang pemohon datang menyampaikan keluhan serupa secara langsung di hadapan Anda, tindakan terbaik Anda adalah...",
      "pilihan": [
        {
          "teks": "Menjaga sikap tetap tenang dan ramah selama berhadapan dengan pemohon agar suasana di ruang layanan tetap kondusif.",
          "skor": 3
        },
        {
          "teks": "Meminta pemohon tersebut menuliskan keluhannya pada formulir kotak saran agar dapat dibaca pimpinan pada rapat evaluasi akhir bulan.",
          "skor": 1
        },
        {
          "teks": "Mendengarkan seluruh keluhannya dengan penuh perhatian dan tetap fokus mengawal penyelesaian berkasnya hingga tuntas sesuai ketentuan.",
          "skor": 4
        },
        {
          "teks": "Menanyakan rincian kendala yang dialaminya secara empatik, memberikan bantuan penyelesaian atas berkasnya saat itu juga, serta mencatat masukannya untuk perbaikan panduan layanan.",
          "skor": 5
        },
        {
          "teks": "Mencoba memahami kekecewaan pemohon sambil menjelaskan secara sopan keterbatasan jumlah petugas yang menangani verifikasi berkas.",
          "skor": 2
        }
      ],
      "explanation": "Menggali detail keluhan untuk dijadikan solusi konkret sekaligus bahan perbaikan sistem pelayanan menunjukkan orientasi pelayanan berkelanjutan (skor 5). Mendengar dan menyelesaikan berkas baik namun belum berdampak pada perbaikan sistem (4), menjaga ketenangan bersifat pasif (3), membela diri dengan keterbatasan personel kurang solutif (2), dan sekadar menyuruh menulis di kotak saran menunda penanganan masalah (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Saat Anda sedang berkonsentrasi menyelesaikan draf laporan evaluasi triwulan yang harus diserahkan kepada atasan satu jam lagi, seorang tamu warga datang ke meja kerja Anda dan menanyakan syarat pengurusan surat keterangan resmi. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menyapa tamu tersebut dengan sopan lalu menghubungi petugas bagian pelayanan informasi melalui telepon internal agar segera datang mendampinginya.",
          "skor": 4
        },
        {
          "teks": "Meminta rekan kerja di meja sebelah yang terlihat lebih senggang untuk menggantikan Anda melayani pertanyaan tamu tersebut.",
          "skor": 2
        },
        {
          "teks": "Menjelaskan secara singkat bahwa Anda sedang mengejar tenggat laporan penting dari pimpinan sehingga memintanya menunggu sebentar.",
          "skor": 3
        },
        {
          "teks": "Tetap memusatkan pandangan ke layar komputer dan membiarkannya berdiri hingga ia menyadari bahwa Anda sedang sibuk bertugas.",
          "skor": 1
        },
        {
          "teks": "Menghentikan pekerjaan sejenak dengan ramah, memberikan informasi persyaratan sejelas mungkin serta mengarahkannya ke loket terkait, lalu segera melanjutkan laporan Anda.",
          "skor": 5
        }
      ],
      "explanation": "Memberikan informasi yang dibutuhkan masyarakat secara jelas, cepat, dan ramah lalu kembali menuntaskan pekerjaan utama memadukan pelayanan prima dengan tanggung jawab tugas (skor 5). Menghubungi petugas lain tetap membantu meski tidak langsung (4), menyuruh menunggu atau mengalihkan tanpa memberi jawaban awal kurang sigap (3 dan 2), dan mengabaikan tamu melanggar etika dasar ASN (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Selepas jam kerja berakhir, Anda berjalan menuju area parkir kantor untuk bersiap pulang. Di sana Anda melihat seorang ibu pengunjung layanan yang menggendong balita tampak kesulitan mengeluarkan sepeda motornya yang terhimpit kendaraan lain. Tindakan Anda adalah...",
      "pilihan": [
        {
          "teks": "Segera menghampiri dengan ramah dan membantu mengeluarkan sepeda motor tersebut ke posisi aman sementara sang ibu tetap menggendong anaknya.",
          "skor": 5
        },
        {
          "teks": "Menanyakan keperluannya dengan sopan sekaligus memanggil petugas keamanan parkir terdekat agar turut membantu menata ruang gerak kendaraan.",
          "skor": 4
        },
        {
          "teks": "Menanyakan dari jarak dekat apakah ia memerlukan bantuan, lalu langsung melanjutkan perjalanan pulang apabila ia tampak sungkan menjawab.",
          "skor": 2
        },
        {
          "teks": "Segera memanggil petugas keamanan di pos depan untuk datang ke area parkir dan membantu ibu tersebut.",
          "skor": 3
        },
        {
          "teks": "Segera menuju kendaraan pribadi Anda dan pulang karena sudah di luar jam pelayanan serta bukan bagian dari tugas meja Anda.",
          "skor": 1
        }
      ],
      "explanation": "Ketanggapan menolong warga yang mengalami kesulitan di lingkungan instansi meskipun di luar jam layanan resmi menunjukkan jiwa pelayan publik sejati (skor 5). Membantu sambil memanggil petugas keamanan tetap positif (4), hanya memanggil petugas kurang inisiatif langsung (3), bertanya tanpa tindak lanjut kurang empatik (2), dan bersikap apatis bertentangan dengan nilai BerAKHLAK (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sulit",
      "question_text": "Sebagai kepala bidang, Anda menemukan bukti awal bahwa seorang rekan kerja yang cukup dekat dengan Anda melakukan pelanggaran berat terkait pengelolaan anggaran kegiatan. Sikap yang paling tepat dalam tata kelola organisasi adalah...",
      "pilihan": [
        {
          "teks": "Langsung menjatuhkan keputusan pemberhentian secara sepihak tanpa berkoordinasi dengan jajaran pimpinan maupun tim pemeriksa.",
          "skor": 1
        },
        {
          "teks": "Mengundang seluruh pimpinan subbagian terkait dan unsur pengawas internal untuk mengkaji bukti secara objektif serta menentukan langkah penyelesaian organisasi bersama.",
          "skor": 5
        },
        {
          "teks": "Memanggil rekan tersebut untuk berdiskusi empat mata, menasihatinya agar bersikap jujur, dan memintanya kooperatif mengikuti proses pemeriksaan.",
          "skor": 4
        },
        {
          "teks": "Mengumpulkan informasi serta menelusuri kronologi pelanggaran secara menyeluruh sebelum menentukan langkah koordinasi berikutnya.",
          "skor": 3
        },
        {
          "teks": "Menelaah terlebih dahulu motif pelanggaran yang dilakukan sebelum memutuskan apakah perlu dibahas bersama jajaran pimpinan.",
          "skor": 2
        }
      ],
      "explanation": "Meskipun menyangkut rekan dekat, persoalan pelanggaran berat keuangan menyangkut tata kelola organisasi sehingga wajib dikoordinasikan secara terbuka bersama jajaran pimpinan terkait sesuai mekanisme pengawasan (skor 5). Pembinaan empat mata tidak cukup untuk pelanggaran berat keuangan (4), pengumpulan bukti tanpa segera melibatkan forum pimpinan memperlambat penanganan (3 dan 2), dan tindakan sepihak melanggar prosedur kepegawaian (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Anda ditunjuk memimpin tim proyek strategis dengan tenggat penyelesaian yang sempit. Namun seorang anggota tim berulang kali menunjukkan sikap tidak peduli dan menunda tugas sehingga menghambat jadwal rekan lain. Tindakan Anda sebagai pemimpin tim adalah...",
      "pilihan": [
        {
          "teks": "Mengancam akan mengeluarkannya dari keanggotaan tim apabila pekerjaannya kembali terlambat pada pekan berikutnya.",
          "skor": 2
        },
        {
          "teks": "Menasihatinya secara terbuka mengenai pentingnya kesadaran bersama dalam menuntaskan target proyek yang telah disepakati.",
          "skor": 4
        },
        {
          "teks": "Memilih mengambil alih dan mengerjakan sendiri seluruh bagian tugasnya yang tertunda agar proyek cepat selesai.",
          "skor": 1
        },
        {
          "teks": "Segera melaporkan ketidakpedulian anggota tersebut kepada pimpinan instansi agar diberikan teguran resmi.",
          "skor": 3
        },
        {
          "teks": "Mengevaluasi pembagian tugas secara adil, menegurnya dengan tegas namun konstruktif, memotivasi agar bertanggung jawab, serta mendokumentasikan progres pembinaannya.",
          "skor": 5
        }
      ],
      "explanation": "Pemimpin jejaring tim yang efektif memadukan keadilan pembagian peran, komunikasi tegas-konstruktif, motivasi, dan akuntabilitas dokumentasi (skor 5). Menasihati tanpa ketegasan evaluasi kurang efektif (4), langsung melapor tanpa membina dulu melewatkan peran ketua tim (3), mengancam merusak iklim kerja sama (2), dan mengerjakan sendiri seluruh tugas anggota gagal menggerakkan tim (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Di subbagian yang Anda pimpin terjadi persoalan koordinasi internal yang menurunkan semangat kerja pegawai. Setelah menganalisis situasi secara objektif dan memetakan pihak-pihak yang terdampak, langkah kepemimpinan Anda selanjutnya adalah...",
      "pilihan": [
        {
          "teks": "Meminta masukan dari para staf, melakukan penyesuaian rencana kerja seperlunya berdasarkan usulan tersebut, lalu mengajak mereka melaksanakan solusi yang disepakati bersama.",
          "skor": 5
        },
        {
          "teks": "Merumuskan keputusan perbaikan secepatnya secara mandiri lalu menyampaikannya kepada seluruh staf agar tidak terjadi kebingungan.",
          "skor": 2
        },
        {
          "teks": "Mengimbau seluruh staf untuk meningkatkan partisipasi dan kepatuhan penuh terhadap kebijakan pemulihan kinerja yang akan diambil.",
          "skor": 3
        },
        {
          "teks": "Menugaskan para staf agar mematuhi aturan baru sekaligus mencari sendiri solusi atas hambatan koordinasi masing-masing.",
          "skor": 1
        },
        {
          "teks": "Menghimpun masukan singkat dari para pegawai kemudian segera menetapkan keputusan final agar seluruh staf langsung mematuhinya.",
          "skor": 4
        }
      ],
      "explanation": "Keterlibatan aktif anggota dalam memberi masukan hingga merawat komitmen implementasi bersama membangun rasa memiliki dan efektivitas kerja tim (skor 5). Meminta masukan tanpa penyesuaian bersama masih cenderung satu arah (4), sekadar meminta kepatuhan kurang menggali akar masalah staf (3), dan memutus sepihak tanpa melibatkan tim melemahkan sinergi (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Anda dimutasi untuk memimpin kantor unit layanan cabang baru di daerah dengan target kinerja tahunan yang cukup tinggi, sementara hampir seluruh staf di sana merupakan pegawai baru yang belum berpengalaman. Langkah strategis pertama Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengajak mereka membangun loyalitas tim serta mengerahkan kemampuan kerja terbaik demi kemajuan unit layanan baru.",
          "skor": 3
        },
        {
          "teks": "Langsung membagikan daftar target pekerjaan yang harus diselesaikan masing-masing pegawai sejak hari pertama.",
          "skor": 1
        },
        {
          "teks": "Mendorong seluruh pegawai baru agar lebih berinisiatif mengembangkan potensi diri dan terus meningkatkan kualitas kerja mereka.",
          "skor": 4
        },
        {
          "teks": "Mengomunikasikan secara jelas sasaran kinerja instansi serta membimbing dan memotivasi para staf baru secara bertahap untuk mencapainya bersama.",
          "skor": 5
        },
        {
          "teks": "Menginstruksikan seluruh staf membaca dokumen panduan tugas yang tersedia dan menanyakan bagian yang kurang jelas.",
          "skor": 2
        }
      ],
      "explanation": "Sebagai pemimpin sekaligus katalisator jejaring tim baru, langkah terpenting adalah menyelaraskan pemahaman atas visi-sasaran organisasi disertai pendampingan dan motivasi aktif (skor 5). Sekadar mendorong inisiatif atau loyalitas tanpa arah sasaran yang jelas belum memandu staf baru secara konkret (4 dan 3), sedangkan menyuruh membaca panduan atau langsung memberi daftar target kurang membina tim (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sulit",
      "question_text": "Tim Anda sedang melaksanakan penugasan audit lapangan ke luar daerah dengan standar operasional yang ketat. Di tengah kegiatan, salah seorang anggota tim melakukan kesalahan prosedur yang cukup fatal dan berpotensi mengganggu validitas laporan tim. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Langsung mengeluarkannya dari keanggotaan tim di lapangan agar kesalahan tersebut tidak dikaitkan dengan kinerja Anda.",
          "skor": 1
        },
        {
          "teks": "Mengajak seluruh anggota tim berdiskusi secara terbuka untuk memetakan solusi perbaikan bersama sekaligus mengomunikasikan penanganannya secara akuntabel kepada atasan.",
          "skor": 5
        },
        {
          "teks": "Segera melaporkan kesalahan prosedur tersebut kepada atasan penugasan agar mendapatkan arahan koreksi resmi.",
          "skor": 4
        },
        {
          "teks": "Meminta rekan yang berbuat keliru tersebut untuk bertanggung jawab langsung menyampaikan kesalahannya kepada atasan.",
          "skor": 3
        },
        {
          "teks": "Mendalami rincian kekeliruan yang dibuat rekan tersebut terlebih dahulu secara diam-diam tanpa melibatkan anggota tim lain.",
          "skor": 2
        }
      ],
      "explanation": "Transparansi dan komunikasi terbuka di dalam tim saat terjadi krisis memungkinkan koreksi cepat secara kolektif sekaligus menjaga akuntabilitas kepada pimpinan (skor 5). Melapor langsung atau menyuruh mengaku sendiri tanpa konsolidasi tim kurang membangun solidaritas perbaikan (4 dan 3), mendalami diam-diam membuang waktu kritis (2), dan mengeluarkan sepihak merusak kekompakan tim (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sulit",
      "question_text": "Dalam diskusi penyusunan program kerja sama mitra, seorang rekan mengusulkan rencana yang menurut analisis Anda memiliki risiko pelanggaran prosedur tinggi. Namun saat Anda memberi masukan, ia bereaksi defensif dan enggan gagasannya dikritik. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengusulkan alternatif gagasan yang lebih realistis dan berisiko rendah sebagai bahan pertimbangan bersama dalam rapat.",
          "skor": 3
        },
        {
          "teks": "Memilih diam dan menyetujui seluruh usulannya agar diskusi tidak memicu ketegangan hubungan antar-rekan.",
          "skor": 2
        },
        {
          "teks": "Mengajaknya berdiskusi santai dengan kepala dingin setelah ketegangan mereda untuk menyelaraskan pemahaman dan tetap berfokus pada tujuan keamanan program bersama.",
          "skor": 5
        },
        {
          "teks": "Keluar dari ruang diskusi lebih awal dan langsung mengadukan sikap keras kepala rekan tersebut kepada pimpinan.",
          "skor": 1
        },
        {
          "teks": "Memintanya dengan sopan untuk meninjau ulang perbandingan manfaat serta potensi risiko gagasannya secara objektif.",
          "skor": 4
        }
      ],
      "explanation": "Mengendalikan suasana komunikasi dengan mengajak berdialog santai dan mengembalikan fokus pada tujuan bersama mampu meredam ego tanpa mengorbankan prinsip kehati-hatian (skor 5). Meminta meninjau ulang atau mengajukan alternatif di saat emosi rekan sedang tinggi kurang efektif meredam resistensi (4 dan 3), diam menyetujui risiko berbahaya bagi organisasi (2), dan keluar ruangan memperburuk konflik (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "mudah",
      "question_text": "Dalam turnamen olahraga antar-unit kerja memperingati hari ulang tahun instansi, tim voli dari bidang Anda diprediksi kalah telak karena lawan berasal dari unit kerja yang dihuni pemain berpengalaman. Sikap Anda sebagai bagian dari bidang tersebut adalah...",
      "pilihan": [
        {
          "teks": "Memilih tidak menghadiri arena pertandingan supaya tidak ikut merasa malu jika tim bidang Anda mengalami kekalahan.",
          "skor": 1
        },
        {
          "teks": "Ikut menonton sekadarnya demi menjaga citra agar tidak dinilai rekan kerja sebagai pribadi yang kurang setia kawan.",
          "skor": 2
        },
        {
          "teks": "Tetap menyemangati tim dan menerima apa pun hasil akhirnya dengan lapang dada karena telah menyadari keunggulan lawan.",
          "skor": 4
        },
        {
          "teks": "Hadir menyaksikan pertandingan dengan tenang tanpa perlu menunjukkan ekspresi dukungan yang terlalu mencolok.",
          "skor": 3
        },
        {
          "teks": "Tetap hadir memberikan dukungan moral dengan penuh semangat dan sportivitas agar rekan-rekan satu tim merasa dihargai dan tampil percaya diri.",
          "skor": 5
        }
      ],
      "explanation": "Solidaritas sejati dalam jejaring kerja diuji justru saat tim berada pada posisi tidak diunggulkan; dukungan tulus dan sportivitas memperkuat kekompakan unit (skor 5). Menerima kekalahan sambil menyemangati cukup baik namun kurang energik (4), bersikap datar atau hadir karena takut dicap buruk kurang tulus (3 dan 2), dan menghindar melemahkan semangat kebersamaan (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sulit",
      "question_text": "Saat ditugaskan membina masyarakat di suatu daerah terpencil, Anda mendapati adanya tradisi adat setempat yang melakukan pembantaian satwa tertentu karena diyakini membawa pertanda buruk, padahal pemerintah gencar mengampanyekan pelindungan satwa dan perbuatan tersebut melanggar hukum positif. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Mendokumentasikan peristiwa tersebut secara tertib untuk dilaporkan secara internal tanpa melakukan komunikasi sepihak yang memicu penolakan.",
          "skor": 3
        },
        {
          "teks": "Bersikap seolah tidak mengetahui pelanggaran hukum tersebut agar kehadiran Anda tetap diterima baik oleh masyarakat adat.",
          "skor": 2
        },
        {
          "teks": "Ikut membiarkan bahkan mendukung pelaksanaan tradisi tersebut sebagai bentuk penghormatan mutlak terhadap adat daerah.",
          "skor": 1
        },
        {
          "teks": "Berkoordinasi dan melaporkan kondisi tersebut kepada instansi konservasi dan aparat berwenang agar dilakukan pendampingan hukum yang tepat.",
          "skor": 4
        },
        {
          "teks": "Mengomunikasikan secara persuasif dan penuh hormat kepada pemangku adat setempat mengenai ketentuan hukum pelindungan satwa serta mengajak mencari alternatif simbol budaya yang selaras aturan.",
          "skor": 5
        }
      ],
      "explanation": "Menjembatani kearifan lokal dan hukum nasional secara dialogis, santun, dan edukatif bersama tokoh adat merupakan pendekatan sosial budaya yang paling bijak (skor 5). Langsung melapor ke pihak berwenang tanpa dialog kultural berisiko menimbulkan gesekan sosial (4), dokumentasi pasif memperlambat edukasi (3), pura-pura tidak tahu atau ikut melanggar berarti abai terhadap supremasi hukum (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Dalam rangka mendukung gerakan pelestarian lingkungan hidup, pemerintah mengarahkan seluruh instansi untuk membangun budaya kerja hemat kertas dalam aktivitas administrasi sehari-hari. Tindakan nyata yang paling tepat Anda lakukan sebagai pegawai adalah...",
      "pilihan": [
        {
          "teks": "Tetap mencetak seluruh konsep naskah kerja di atas kertas seperti biasa dengan alasan lebih nyaman dibaca.",
          "skor": 1
        },
        {
          "teks": "Menyampaikan dukungan penuh terhadap kebijakan pemerintah tersebut pada saat rapat rutin unit kerja.",
          "skor": 2
        },
        {
          "teks": "Menggunakan surat elektronik untuk seluruh korespondensi internal dan mengoptimalkan pelaksanaan alur persetujuan secara daring.",
          "skor": 4
        },
        {
          "teks": "Memilah jenis kegiatan administrasi yang dapat disederhanakan tanpa kertas secara inovatif dan mencetak dokumen fisik hanya bila diwajibkan aturan formal.",
          "skor": 5
        },
        {
          "teks": "Mengajak rekan-rekan satu bidang untuk mulai membiasakan perilaku kerja peduli lingkungan di kantor.",
          "skor": 3
        }
      ],
      "explanation": "Mendukung kebijakan publik secara cerdas dilakukan melalui pemilahan proses kerja secara inovatif sehingga penghematan kertas berjalan nyata tanpa melanggar dokumen yang wajib cetak (skor 5). Penggunaan surat elektronik penuh masih terbentur dokumen yang wajib arsip fisik (4), mengajak rekan baik namun perlu contoh tindakan langsung (3), sekadar mendukung lisan kurang berdampak (2), dan menolak perubahan menghambat budaya kerja hijau (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Keluarga kerabat Anda yang sudah lama bermukim di luar negeri menitipkan putra mereka untuk tinggal di rumah Anda selama masa liburan sekolah. Untuk mengenalkan makna keberagaman sosial budaya Indonesia kepadanya secara berkesan, langkah terbaik Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengajaknya mengunjungi berbagai lokasi bersejarah serta menceritakan latar belakang kekayaan budaya daerah di sepanjang perjalanan.",
          "skor": 3
        },
        {
          "teks": "Mengajaknya mengenal berbagai rumah ibadah dan aktivitas sosial masyarakat lintas latar belakang di sekitar lingkungan tempat tinggal.",
          "skor": 2
        },
        {
          "teks": "Mengajak warga dan tetangga sekitar yang beragam latar belakangnya berinteraksi hangat dengannya agar ia merasakan langsung kerukunan bermasyarakat.",
          "skor": 4
        },
        {
          "teks": "Menjadi perpanjangan tangan orang tuanya dengan menanamkan nilai toleransi, saling menghormati perbedaan suku, dan keberagaman melalui teladan tindakan sehari-hari.",
          "skor": 5
        },
        {
          "teks": "Menyerahkan kepadanya berbagai bahan bacaan tentang keragaman budaya Nusantara agar dipelajari sendiri di waktu luang.",
          "skor": 1
        }
      ],
      "explanation": "Pembiasaan nilai keberagaman dan toleransi dalam praktik interaksi sehari-hari membentuk pemahaman karakter yang paling kuat dan autentik dibanding kunjungan sesaat (skor 5). Melibatkan lingkungan tetangga sangat mendukung (4), wisata sejarah atau pengenalan tempat ibadah memberi wawasan visual terbatas (3 dan 2), dan sekadar memberi bacaan kurang membangkitkan penghayatan sosial (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Instansi Anda memiliki pegawai dari beragam latar belakang agama dan adat istiadat. Belakangan sejumlah pegawai mengeluhkan kurang memadainya ruang ibadah serta jadwal kegiatan rutin yang sering berbenturan dengan waktu ibadah utama mereka. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Mendiskusikan persoalan tersebut secara konstruktif bersama jajaran pimpinan unit agar disusun solusi penyediaan fasilitas dan penjadwalan kerja yang inklusif.",
          "skor": 5
        },
        {
          "teks": "Menunjukkan sikap toleran secara pribadi tanpa mengusulkan perbaikan fasilitas di tingkat manajemen organisasi.",
          "skor": 2
        },
        {
          "teks": "Mendorong penerapan kebijakan kerja yang toleran dan menghormati waktu beribadah seluruh pegawai di lingkungan kantor.",
          "skor": 4
        },
        {
          "teks": "Berpendapat bahwa seluruh pegawai cukup menyesuaikan diri dengan jadwal dan fasilitas kantor yang sudah ada tanpa perlu perubahan.",
          "skor": 1
        },
        {
          "teks": "Berupaya membantu mencarikan ruang sementara yang layak digunakan untuk beribadah sembari menunggu keputusan resmi pimpinan.",
          "skor": 3
        }
      ],
      "explanation": "Dalam struktur organisasi, penyelesaian kebutuhan fasilitas dan jadwal ibadah lintas keyakinan paling tepat diperjuangkan melalui diskusi resmi bersama jajaran pimpinan agar lahir kebijakan permanen yang adil (skor 5). Mengimbau kebijakan toleran atau memfasilitasi sementara membantu namun kurang mengikat secara kelembagaan (4 dan 3), toleran pasif tidak menyelesaikan kendala (2), dan menolak penyesuaian mengabaikan hak beribadah (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Pemerintah mengimbau seluruh aparatur sipil negara menjadi teladan dalam menekan dampak pemanasan global serta emisi gas rumah kaca. Kontribusi rutin paling relevan yang dapat Anda terapkan setiap hari terkait aktivitas perjalanan berangkat ke kantor adalah...",
      "pilihan": [
        {
          "teks": "Menanami pekarangan tempat tinggal dengan berbagai tanaman hijau guna membantu penyerapan karbon lingkungan.",
          "skor": 2
        },
        {
          "teks": "Membatasi penggunaan plastik sekali pakai dengan rutin membawa wadah makan dan botol minum sendiri dari rumah.",
          "skor": 3
        },
        {
          "teks": "Membiasakan membuang sampah pribadi ke tempat sampah yang sesuai pada saat berada di lingkungan kantor.",
          "skor": 1
        },
        {
          "teks": "Mengimbangi aktivitas harian di kantor dengan mematikan peralatan listrik dan pendingin ruangan yang tidak terpakai.",
          "skor": 4
        },
        {
          "teks": "Membiasakan diri menggunakan transportasi umum yang tersedia atau berbagi tumpangan bersama rekan searah untuk menuju tempat kerja.",
          "skor": 5
        }
      ],
      "explanation": "Penekanan imbauan terkait aktivitas harian berangkat bekerja terjawab paling langsung melalui pengalihan moda kendaraan pribadi ke transportasi umum atau berbagi perjalanan untuk menekan emisi gas buang (skor 5). Penghematan listrik dan pengurangan plastik tetap berkontribusi signifikan di lingkungan kerja (4 dan 3), penghijauan rumah melengkapi upaya pribadi (2), dan membuang sampah pada tempatnya merupakan kewajiban kebersihan dasar (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Anda baru saja dimutasi ke unit kerja lain yang masih serumpun tugasnya, namun budaya kerja di ruangan baru tersebut sangat serius, tertib, dan nyaris tidak pernah terdengar candaan di jam dinas. Sikap adaptasi sosial budaya yang paling tepat Anda tunjukkan adalah...",
      "pilihan": [
        {
          "teks": "Mengajak rekan-rekan baru di ruangan tersebut agar sesekali bersikap lebih santai dan tidak terlalu kaku dalam bekerja.",
          "skor": 1
        },
        {
          "teks": "Tetap menjaga kualitas etos kerja sesuai jati diri profesional Anda tanpa mudah terpengaruh suasana yang berbeda.",
          "skor": 4
        },
        {
          "teks": "Menanyakan secara sopan kepada rekan kerja baru mengenai aturan tidak tertulis serta ritme kerja di ruangan tersebut.",
          "skor": 3
        },
        {
          "teks": "Mengamati norma interaksi yang berlaku dan membiasakan diri menyesuaikan gaya kerja dengan budaya serius di unit baru tersebut.",
          "skor": 5
        },
        {
          "teks": "Tetap menjalankan pola kerja santai seperti kebiasaan Anda di unit lama selama target pekerjaan tercapai.",
          "skor": 2
        }
      ],
      "explanation": "Adaptabilitas sosial budaya menuntut kepekaan membaca norma lingkungan baru dan kesediaan menyesuaikan diri terlebih dahulu agar diterima harmonis dalam tim (skor 5). Bekerja konsisten atau bertanya kepada rekan cukup baik namun belum sepenuhnya menyelaraskan ritme bersama (4 dan 3), membawa kebiasaan lama atau meminta lingkungan mengubah budayanya justru memicu gesekan (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Anggota keluarga Anda di rumah merasa terganggu dengan aroma dupa yang cukup pekat dari mahasiswa indekos di sebelah rumah saat menjalankan ibadah rutin mereka, lalu meminta Anda menegur dan melarang mahasiswa tersebut. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Tidak mencampuri aktivitas ibadah tetangga tersebut karena menyadari keberatan keluarga Anda tidak berdasar pada pelanggaran hukum.",
          "skor": 3
        },
        {
          "teks": "Langsung mendatangi mahasiswa indekos tersebut dan meminta mereka menghentikan penggunaan dupa saat beribadah.",
          "skor": 1
        },
        {
          "teks": "Mengaku juga sempat merasa kurang nyaman dengan asap tersebut namun memilih menahan diri demi kerukunan.",
          "skor": 2
        },
        {
          "teks": "Menolak menyuruh mereka berhenti dengan tegas karena menghormati praktik ibadah keyakinan masing-masing warga.",
          "skor": 4
        },
        {
          "teks": "Menolak permintaan tersebut secara santun serta memberikan pengertian kepada keluarga tentang pentingnya menghargai hak kebebasan beribadah tetangga, sambil tetap menjaga komunikasi baik antartetangga.",
          "skor": 5
        }
      ],
      "explanation": "Toleransi beragama yang aktif tidak hanya menolak tindakan intoleran, tetapi juga mengedukasi lingkungan keluarga sendiri agar memahami keberagaman cara beribadah dengan tetap menjaga harmoni bertetangga (skor 5). Menolak secara tegas tanpa memberi pemahaman belum mendidik keluarga (4), bersikap acuh kurang meredam keluhan keluarga (3), ikut terganggu berisiko memupuk prasangka (2), dan melarang ibadah melanggar hak beragama (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Sebagai pegawai muda di instansi yang mewajibkan transformasi sistem kerja berbasis teknologi informasi—mulai dari persuratan elektronik hingga pelaporan daring—Anda melihat seorang pegawai senior di ruangan masih tetap bekerja secara manual karena kesulitan beradaptasi. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menyampaikan di ruang kerja bahwa pegawai senior seharusnya berinisiatif mawas diri mengikuti perkembangan teknologi kantor.",
          "skor": 1
        },
        {
          "teks": "Mengingatkan secara halus bahwa pimpinan instansi telah menginstruksikan seluruh alur kerja beralih ke sistem digital.",
          "skor": 3
        },
        {
          "teks": "Menawarkan bantuan dengan sopan untuk mendampingi pengoperasian sistem digital saat tugas utama Anda tidak mendesak tanpa bersikap menggurui.",
          "skor": 5
        },
        {
          "teks": "Menjelaskan dengan santun mengenai kewajiban penggunaan sistem digital kantor dan menawarkan panduan belajar bersama apabila ia berkenan.",
          "skor": 4
        },
        {
          "teks": "Membiarkan pegawai senior tersebut bekerja secara manual hingga kelak ia merasakan sendiri kebutuhan terhadap sistem digital.",
          "skor": 2
        }
      ],
      "explanation": "Sebagai junior, membantu pendampingan secara tulus dan tidak menggurui menjaga etika sosial sekaligus mempercepat adopsi teknologi di unit kerja (skor 5). Menjelaskan atau mengingatkan kewajiban berisiko terkesan menggurui bila tidak hati-hati (4 dan 3), membiarkan menghambat alur kerja digital (2), dan menyalahkan senior di ruang kerja menciptakan ketidakharmonisan (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Sebagai ASN di era informasi digital yang dituntut cermat bermedia sosial, Anda kerap menjumpai berita bohong dan konten berjudulkan sensasional di ruang digital yang membuat banyak pengguna mudah terprovokasi dan berdebat kusir. Kebiasaan bijak yang Anda terapkan adalah...",
      "pilihan": [
        {
          "teks": "Mengenali dan memeriksa kredibilitas sumber resmi berita guna memastikan keakuratannya sebelum memercayai ataupun membagikan ulang informasi.",
          "skor": 5
        },
        {
          "teks": "Membatasi penggunaan media sosial pribadi hanya untuk mengakses informasi kedinasan yang sangat penting.",
          "skor": 2
        },
        {
          "teks": "Membaca sekilas informasi tersebut lalu membiarkannya berlalu tanpa memeriksa kebenaran sumber beritanya.",
          "skor": 1
        },
        {
          "teks": "Mengamati kecenderungan judul berita yang bersifat provokatif sebagai langkah kewaspadaan awal terhadap potensi hoaks.",
          "skor": 3
        },
        {
          "teks": "Membaca keseluruhan isi informasi secara lengkap hingga tuntas agar tidak terjebak pada kesimpulan sepihak dari potongan berita.",
          "skor": 4
        }
      ],
      "explanation": "Verifikasi sumber kredibel merupakan benteng literasi digital terpenting untuk menangkal berita bohong sebelum informasi dikonsumsi atau diteruskan (skor 5). Membaca utuh dan mewaspadai judul provokatif adalah langkah pendukung yang baik (4 dan 3), membatasi aktivitas bersifat defensif (2), dan sekadar membaca sekilas tanpa verifikasi kurang kritis di era informasi (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sedang",
      "question_text": "Pimpinan menugaskan Anda menyusun bahan paparan digital yang menarik untuk pertemuan penentuan kelanjutan kerja sama dengan mitra strategis besok pagi. Cara paling efektif menyiapkan salindia presentasi berbasis teknologi agar audiens antusias dan cepat memahami inti paparan adalah...",
      "pilihan": [
        {
          "teks": "Memasukkan salinan teks laporan lengkap sepanjang beberapa paragraf pada tiap salindia agar tidak ada detail informasi yang terlewat.",
          "skor": 1
        },
        {
          "teks": "Menyusun paparan dengan gaya bahasa komunikatif serta ilustrasi ringan di sela pembahasan teknis saat mempresentasikannya.",
          "skor": 3
        },
        {
          "teks": "Menyajikan teks singkat pada setiap salindia yang dipadukan dengan beberapa gambar atau grafik pendukung agar tidak membosankan.",
          "skor": 4
        },
        {
          "teks": "Merancang salindia presentasi yang memuat inti gagasan setiap poin secara ringkas, terstruktur, dan didukung visualisasi yang mudah dipahami.",
          "skor": 5
        },
        {
          "teks": "Membuat salindia yang memuat uraian penjelasan lengkap secara sangat terperinci di layar agar seluruh rincian terbaca jelas.",
          "skor": 2
        }
      ],
      "explanation": "Komunikasi presentasi digital yang efektif menonjolkan inti sari gagasan secara ringkas dan visual terstruktur agar audiens fokus pada pembicara serta cepat menangkap pesan utama (skor 5). Teks singkat dengan gambar mendukung hal serupa meski kurang terstruktur pada inti poin (4), gaya santai membantu penyampaian lisan (3), sedangkan layar penuh teks rinci membuat audiens jenuh (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Tugas Anda sebagai analis lapangan menuntut perjalanan dinas luar kota hampir setiap pekan beserta sejumlah dokumen penting yang wajib siap digunakan. Karena merasa terkadang pelupa dan khawatir perangkat penyimpanan fisik rusak atau tertinggal di perjalanan, solusi TIK paling andal Anda adalah...",
      "pilihan": [
        {
          "teks": "Menyimpan dan mencadangkan dokumen kerja penting pada layanan penyimpanan awan resmi yang terenkripsi sehingga dapat diakses aman dari mana saja.",
          "skor": 5
        },
        {
          "teks": "Mempersiapkan seluruh dokumen perjalanan dinas jauh-jauh hari sebelum jadwal keberangkatan agar tidak ada yang tertinggal.",
          "skor": 2
        },
        {
          "teks": "Menyimpan salinan dokumen kerja penting di dalam cakram keras eksternal portabel yang selalu dimasukkan ke tas dinas.",
          "skor": 4
        },
        {
          "teks": "Selalu menyiapkan dan membawa salinan fisik dokumen cadangan pada map terpisah untuk mengantisipasi kehilangan.",
          "skor": 3
        },
        {
          "teks": "Menyiapkan berkas dinas dengan cara biasa menjelang keberangkatan seperti rutinitas tugas sebelumnya.",
          "skor": 1
        }
      ],
      "explanation": "Pemanfaatan penyimpanan awan terenkripsi menjamin ketersediaan, pembaruan waktu nyata, serta ketahanan data dari risiko perangkat fisik hilang atau tertinggal (skor 5). Cakram keras eksternal dan map cadangan masih rentan tertinggal atau rusak (4 dan 3), persiapan lebih awal membantu manajemen waktu namun tidak mengatasi risiko kerusakan di perjalanan (2), dan cara biasa mengabaikan risiko berulang (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Saat Anda sedang menuntaskan penyusunan ringkasan kebijakan di perpustakaan instansi dengan batas waktu pengumpulan satu jam lagi, seorang rekan sejawat menghampiri dan menanyakan letak buku referensi tertentu. Tindakan paling tepat dan efisien Anda adalah...",
      "pilihan": [
        {
          "teks": "Menyampaikan dengan sopan bahwa Anda sedang sangat sibuk mengejar tenggat tugas sehingga belum bisa mencarikan bukunya.",
          "skor": 2
        },
        {
          "teks": "Mengarahkannya menelusuri pengelompokan buku berdasarkan kode bidang kajian pada papan petunjuk rak perpustakaan.",
          "skor": 4
        },
        {
          "teks": "Memberitahukan perkiraan letak nomor rak dan posisi buku tersebut berdasarkan pengetahuan Anda secara singkat.",
          "skor": 3
        },
        {
          "teks": "Menghentikan pengerjaan tugas mendesak Anda dan ikut berkeliling menelusuri rak buku hingga ditemukan meskipun tenggat Anda terancam terlewat.",
          "skor": 1
        },
        {
          "teks": "Menyarankannya memanfaatkan terminal komputer katalog digital perpustakaan yang tersedia untuk melacak lokasi rak buku secara cepat dan akurat.",
          "skor": 5
        }
      ],
      "explanation": "Memanfaatkan perangkat katalog komputer memberdayakan rekan sekaligus memberikan hasil pencarian paling cepat dan tepat tanpa mengganggu penyelesaian tugas tenggat Anda (skor 5). Menunjukkan indeks bidang atau mengingat letak rak lebih lambat dan kurang akurat (4 dan 3), menolak tanpa memberi alternatif teknologi kurang solutif (2), dan meninggalkan tugas mendesak berisiko gagal tenggat (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sedang",
      "question_text": "Di tengah berlangsungnya rapat koordinasi resmi bidang yang membahas target kinerja triwulan, Anda melihat rekan di sebelah Anda terus asyik memainkan gawainya untuk membuka media sosial dan percakapan pribadi di luar topik rapat. Sikap yang paling bijak adalah...",
      "pilihan": [
        {
          "teks": "Memberikan isyarat sopan secara halus saat ada jeda agar ia mengutamakan agenda pembahasan rapat terlebih dahulu.",
          "skor": 4
        },
        {
          "teks": "Tetap menyimak serta berkontribusi aktif dalam pembahasan rapat bersama pimpinan tanpa terpancing oleh aktivitas rekan tersebut.",
          "skor": 3
        },
        {
          "teks": "Menegurnya dengan suara keras di hadapan peserta rapat lain agar ia segera meletakkan gawainya di meja pimpinan.",
          "skor": 1
        },
        {
          "teks": "Tetap fokus mengikuti jalannya rapat dan seusai rapat usai mengingatkan rekan tersebut secara santun mengenai etika penggunaan gawai saat forum resmi.",
          "skor": 5
        },
        {
          "teks": "Memakluminya saja karena beranggapan penggunaan gawai untuk bersosialisasi di ruang digital merupakan kebebasan masing-masing.",
          "skor": 2
        }
      ],
      "explanation": "Menjaga fokus forum resmi lalu mengedukasi etika penggunaan gawai secara personal dan santun setelah rapat usai menunjukkan kedewasaan komunikasi digital (skor 5). Memberi isyarat saat jeda cukup baik (4), fokus tanpa mengingatkan membiarkan kebiasaan buruk berulang (3), memaklumi sepenuhnya kurang tepat di forum resmi (2), dan menegur keras di depan umum mempermalukan rekan (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sedang",
      "question_text": "Anda masuk dalam daftar kandidat promosi jabatan fungsional dan pimpinan memberikan penugasan analisis kebijakan menggunakan perangkat lunak pengolah data baru yang belum pernah Anda gunakan sebelumnya. Langkah Anda untuk menghasilkan kinerja optimal adalah...",
      "pilihan": [
        {
          "teks": "Meminta arahan serta penjelasan rinci langsung dari pimpinan mengenai cara pengoperasian perangkat lunak untuk tugas tersebut.",
          "skor": 2
        },
        {
          "teks": "Menelusuri sumber referensi kredibel berupa jurnal ilmiah daring, dokumentasi teknis resmi, serta panduan digital terpercaya dan menerapkannya untuk hasil maksimal.",
          "skor": 5
        },
        {
          "teks": "Membeli buku panduan praktis di toko buku terdekat guna mempelajari langkah pengerjaannya secara bertahap.",
          "skor": 3
        },
        {
          "teks": "Membaca berbagai buku pedoman dan modul teknis pendukung yang berkaitan langsung dengan metode penyelesaian tugas tersebut.",
          "skor": 4
        },
        {
          "teks": "Mengajak sesama kandidat promosi lain untuk saling berbagi dan menyalin hasil pekerjaan agar lebih cepat selesai.",
          "skor": 1
        }
      ],
      "explanation": "Mengoptimalkan sumber daya digital terpercaya seperti jurnal daring dan dokumentasi teknis resmi memberikan wawasan paling mutakhir, cepat, dan mandiri (skor 5). Membaca referensi cetak atau membeli buku di toko buku tetap baik meski aksesnya lebih lambat (4 dan 3), bergantung pada penjelasan pimpinan menunjukkan kurangnya kemandirian belajar (2), dan menyalin hasil kandidat lain melanggar integritas evaluasi (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Hari ini adalah hari kerja terakhir Anda sebelum mengambil cuti tahunan selama sepekan untuk mendampingi keluarga yang mengalami musibah, sehingga banyak berkas serah terima penting yang wajib Anda tuntaskan. Tiba-tiba di tengah jam kerja, atasan mengajak Anda pergi ke kantin untuk makan sambil mengobrol santai mengenai pekerjaan. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Meminta bantuan rekan kerja yang telah menyelesaikan bebannya untuk mendampingi atasan sementara Anda merampungkan berkas sebelum cuti.",
          "skor": 3
        },
        {
          "teks": "Menyelesaikan tugas-tugas penting serah terima secepat mungkin di meja kerja lalu segera menyusul untuk memenuhi panggilan diskusi atasan.",
          "skor": 4
        },
        {
          "teks": "Menolak ajakan ke kantin dengan sangat sopan sambil mengingatkan pentingnya menjaga profesionalisme jam kerja, dan memohon izin menuntaskan berkas serah terima terlebih dahulu sebelum berdiskusi di ruang kerja.",
          "skor": 5
        },
        {
          "teks": "Langsung melaporkan perilaku atasan tersebut kepada inspektorat kepegawaian agar diberikan sanksi disiplin.",
          "skor": 1
        },
        {
          "teks": "Mengikuti ajakan atasan menuju kantin saat itu juga meskipun sadar berkas serah terima tugas Anda belum terselesaikan.",
          "skor": 2
        }
      ],
      "explanation": "Komitmen profesional menjaga kedisiplinan jam kerja sekaligus memastikan tanggung jawab berkas sebelum cuti rampung dengan penyampaian yang tetap santun kepada atasan (skor 5). Menyelesaikan tugas baru menyusul ke kantin tetap menjaga prioritas tugas meski masih berada di jam dinas (4), meminta rekan menggantikan menghindari komunikasi langsung (3), langsung ikut meninggalkan tugas mengabaikan amanah (2), dan melapor tanpa komunikasi terlebih dahulu bersifat gegabah (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Pimpinan unit berhalangan hadir karena tugas mendadak di luar kota dan memberikan mandat penuh kepada Anda untuk menyeleksi sekaligus memutuskan kelulusan pelamar tenaga teknis yang telah lolos tahap administrasi. Tindakan profesional Anda adalah...",
      "pilihan": [
        {
          "teks": "Melaksanakan tes tertulis serta wawancara saja lalu menunda seluruh keputusan penerimaan hingga pimpinan kembali bertugas.",
          "skor": 1
        },
        {
          "teks": "Meminta bantuan beberapa rekan kerja untuk ikut menyeleksi calon pelamar yang dinilai sesuai kebutuhan ruangan.",
          "skor": 2
        },
        {
          "teks": "Melaksanakan tes tertulis dan wawancara sesuai standar lalu melaporkan seluruh nilai dan rekomendasi keputusannya untuk diketahui pimpinan.",
          "skor": 4
        },
        {
          "teks": "Menyelenggarakan tahapan seleksi sebagaimana prosedur baku yang lazim diterapkan di instansi dalam perekrutan sebelumnya.",
          "skor": 3
        },
        {
          "teks": "Menyelenggarakan tes tertulis dan wawancara secara objektif, lalu memutuskan pelamar yang diterima atau ditolak berdasarkan kriteria kualifikasi resmi instansi.",
          "skor": 5
        }
      ],
      "explanation": "Kepercayaan berupa pelimpahan wewenang dari pimpinan wajib dijalankan secara mandiri, tuntas, dan objektif sesuai kriteria resmi organisasi (skor 5). Menyerahkan kembali keputusan akhir kepada atasan padahal sudah diberi mandat menunjukkan keraguan mengambil tanggung jawab (4 dan 1), sekadar mengikuti kebiasaan atau melibatkan rekan tanpa keputusan tegas kurang tuntas (3 dan 2).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "mudah",
      "question_text": "Saat Anda sedang bekerja lembur menyelesaikan berkas laporan tahunan di kantor hingga petang, pasangan Anda menelepon meminta Anda segera menjemput anak dari rumah temannya. Sikap profesional yang paling tepat Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Menyelesaikan pekerjaan lembur yang tersisa secepat mungkin sesuai target waktu lalu segera menjemput anak sebelum terlalu larut.",
          "skor": 4
        },
        {
          "teks": "Mencoba menghubungi kerabat terdekat atau layanan antar tepercaya agar dapat menjemput anak sementara Anda menyelesaikan lembur.",
          "skor": 3
        },
        {
          "teks": "Diam-diam meninggalkan ruang kerja untuk menjemput anak tanpa izin atasan dan kembali bekerja seolah tidak terjadi apa-apa.",
          "skor": 1
        },
        {
          "teks": "Meminta izin secara jujur kepada atasan di kantor untuk menjemput dan memastikan keselamatan anak terlebih dahulu, lalu segera kembali melanjutkan pekerjaan lembur hingga tuntas.",
          "skor": 5
        },
        {
          "teks": "Menolak permintaan pasangan secara mentah-mentah dengan alasan penjemputan anak sepenuhnya kewajiban pihak di rumah.",
          "skor": 2
        }
      ],
      "explanation": "Kombinasi etika keterbukaan kepada atasan, tanggung jawab keluarga, dan komitmen menuntaskan tugas lembur hingga selesai mencerminkan profesionalisme yang matang (skor 5). Menyelesaikan lembur dulu atau meminta bantuan kerabat menjaga pekerjaan namun kurang responsif bila situasi mendesak di malam hari (4 dan 3), menolak kasar merusak keharmonisan (2), dan keluar diam-diam melanggar disiplin kerja (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Sebagai pegawai yang berdedikasi tinggi, suatu hari Anda dihadapkan pada sejumlah tugas analisis kebijakan dengan tenggat waktu pengumpulan yang bersamaan sehingga melampaui kapasitas penyelesaian seorang diri dengan hasil bermutu. Langkah profesional Anda adalah...",
      "pilihan": [
        {
          "teks": "Memilih bekerja lembur hingga malam dengan harapan selain tugas selesai juga memperoleh tambahan honor lembur.",
          "skor": 3
        },
        {
          "teks": "Tetap pulang tepat waktu sesuai jam kantor dan membiarkan sisa pekerjaan yang belum rampung untuk dikerjakan esok hari.",
          "skor": 1
        },
        {
          "teks": "Melaporkan kondisi beban kerja secara terbuka kepada atasan bahwa Anda memerlukan dukungan tambahan personel tim agar seluruh berkas tuntas bermutu dan tepat waktu.",
          "skor": 5
        },
        {
          "teks": "Berupaya menyelesaikan seluruh tumpukan tugas tepat pada tenggat waktu dengan mutu pengerjaan seadanya saja.",
          "skor": 2
        },
        {
          "teks": "Mengatur ulang prioritas pengerjaan dan mengajukan izin kerja lembur resmi agar dapat menyelesaikan bagian terpenting dengan optimal.",
          "skor": 4
        }
      ],
      "explanation": "Profesionalisme menuntut keberanian berkomunikasi secara objektif dengan pimpinan saat volume tugas melebihi kapasitas individu demi menjaga mutu luaran instansi (skor 5). Lembur resmi cukup baik namun tetap berisiko kelelahan dan penurunan mutu (4), mengejar uang lembur menggeser orientasi pengabdian (3), bekerja asal jadi mengorbankan kualitas (2), dan mengabaikan tenggat tidak bertanggung jawab (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "mudah",
      "question_text": "Seusai melakukan tugas pemeriksaan lapangan penggunaan dana operasional di sebuah sekolah terpencil, kepala sekolah menyelipkan amplop berisi sejumlah uang kepada Anda sebagai pengganti uang lelah dan biaya perjalanan. Sikap berintegritas Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengembalikan langsung amplop uang tersebut dengan sopan tanpa perlu memperpanjang perdebatan di lokasi.",
          "skor": 4
        },
        {
          "teks": "Menerima uang tersebut sekadar untuk menutup biaya tak terduga selama tidak diketahui oleh anggota tim lain.",
          "skor": 1
        },
        {
          "teks": "Menolak dengan nada marah dan menuduh kepala sekolah berupaya menyuap tim pemeriksa di hadapan para guru.",
          "skor": 2
        },
        {
          "teks": "Menolak pemberian tersebut dengan alasan pimpinan instansi melarang keras pegawai menerima imbalan dalam bentuk apa pun.",
          "skor": 3
        },
        {
          "teks": "Menolak pemberian uang tersebut secara tegas namun santun sambil menjelaskan bahwa hal itu termasuk gratifikasi yang dilarang ketentuan hukum ASN.",
          "skor": 5
        }
      ],
      "explanation": "Menolak secara tegas namun santun berbasis kesadaran aturan anti-gratifikasi menjaga marwah integritas pribadi sekaligus memberi edukasi hukum kepada mitra kerja (skor 5). Mengembalikan halus atau sekadar membawa nama pimpinan tetap baik namun edukasi prinsipnya kurang kuat (4 dan 3), marah di depan umum tidak profesional (2), dan menerima gratifikasi merupakan pelanggaran hukum berat (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "mudah",
      "question_text": "Di lingkungan kantor Anda beredar isu bahwa seorang rekan kerja bagian keuangan menyalahgunakan uang kas bulanan dan kebetulan sudah beberapa hari tidak masuk kerja. Ketika kabar tersebut menjadi bahan perbincangan hangat antar-pegawai, sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menahan diri untuk tidak memberikan komentar maupun ikut menyebarkan kabar yang belum terbukti kebenarannya serta tetap fokus menjalankan tugas sendiri.",
          "skor": 5
        },
        {
          "teks": "Menanyakan status pembagian tugas rekan yang bersangkutan kepada atasan langsung jika ketidakhadirannya menghambat layanan tim.",
          "skor": 3
        },
        {
          "teks": "Ikut menanyakan dan membahas isu penggelapan dana tersebut kepada rekan dari berbagai unit lain untuk mencari tahu kabar terbaru.",
          "skor": 1
        },
        {
          "teks": "Menyampaikan pendapat di lingkungan kerja bahwa pegawai tersebut layak diberi sanksi berat karena mencoreng nama instansi.",
          "skor": 2
        },
        {
          "teks": "Berupaya memverifikasi kepastian informasi kedinasan hanya melalui jalur resmi apabila hal tersebut berhubungan langsung dengan kelancaran pekerjaan Anda.",
          "skor": 4
        }
      ],
      "explanation": "Pegawai profesional menjaga etika kerja dengan tidak ikut menyebarkan gosip atau menghakimi sebelum adanya putusan pemeriksaan resmi guna mencegah fitnah dan konflik kerja (skor 5). Mencari kejelasan lewat jalur resmi sebatas kebutuhan pekerjaan cukup wajar (4 dan 3), sedangkan langsung menuntut sanksi atau ikut menggosip memperkeruh suasana kerja (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Selama ini Anda bekerja disiplin mengikuti buku Standar Operasional Prosedur (SOP) resmi instansi. Namun pada suatu kesempatan muncul kasus pelayanan mendesak di lapangan yang penyelesaian spesifiknya belum diatur dalam dokumen SOP tersebut. Langkah paling bijak Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengajak rekan sejawat berdiskusi terlebih dahulu guna menyepakati langkah penanganan terbaik sebelum bertindak.",
          "skor": 3
        },
        {
          "teks": "Tetap terpaku secara kaku pada langkah SOP lama meskipun menyebabkan proses pekerjaan terhenti cukup lama dan merugikan masyarakat.",
          "skor": 1
        },
        {
          "teks": "Mengkaji kondisi lapangan dengan cermat, mengambil solusi penyelesaian yang selaras dengan tujuan pelayanan dan koridor hukum instansi, lalu mendokumentasikannya sebagai bahan usulan pembaruan SOP.",
          "skor": 5
        },
        {
          "teks": "Meminta atasan segera mengkaji ulang dan merevisi dokumen SOP terlebih dahulu sebelum kasus mendesak tersebut ditangani.",
          "skor": 2
        },
        {
          "teks": "Memikirkan langkah penyelesaian paling aman yang sesuai batas kemampuan dan misi pelayanan instansi agar masalah tidak berlarut.",
          "skor": 4
        }
      ],
      "explanation": "Profesionalisme yang tangkas memadukan kepatuhan terhadap koridor hukum/misi instansi dengan kebijaksanaan solusi lapangan serta usulan perbaikan dokumen SOP (skor 5). Mengambil langkah sesuai misi tanpa dokumentasi pembaruan tetap solutif (4), berdiskusi dengan rekan atau meminta revisi SOP terlebih dahulu memperlambat layanan mendesak (3 dan 2), dan bersikap kaku menghambat pelayanan publik (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Ketua kelompok kerja Anda dimarahi oleh atasan karena menyerahkan kompilasi berkas proyek melewati tenggat waktu. Padahal keterlambatan itu terjadi karena seluruh anggota tim—termasuk Anda—terlambat mengumpulkan bagian masing-masing kepadanya untuk disatukan. Sikap ksatria Anda adalah...",
      "pilihan": [
        {
          "teks": "Memilih diam saja karena menganggap ketua tim secara struktural memang pihak yang paling bertanggung jawab atas keterlambatan laporan akhir.",
          "skor": 1
        },
        {
          "teks": "Meminta maaf dengan tulus kepada ketua tim atas keterlambatan penyerahan bagian tugas Anda dan berjanji memperbaiki ketepatan waktu ke depan.",
          "skor": 4
        },
        {
          "teks": "Mengajak rekan tim bersama-sama mengevaluasi jadwal koordinasi serta menyemangati ketua tim agar tidak berkecil hati atas teguran tersebut.",
          "skor": 3
        },
        {
          "teks": "Mendengarkan teguran atasan sambil menghibur ketua tim seusai rapat tanpa mengakui keterlambatan kontribusi Anda secara langsung.",
          "skor": 2
        },
        {
          "teks": "Mengakui secara jujur kepada atasan bahwa keterlambatan pengumpulan berkas tersebut juga disebabkan oleh kontribusi keterlambatan bagian tugas Anda.",
          "skor": 5
        }
      ],
      "explanation": "Integritas dan tanggung jawab sejati tampak dari keberanian mengakui andil kesalahan sendiri secara jujur di hadapan atasan agar penilaian tidak timpang menimpa satu rekan saja (skor 5). Meminta maaf kepada teman atau mengevaluasi tim tetap positif namun belum meluruskan fakta di hadapan atasan (4 dan 3), sekadar menghibur atau diam melepas tanggung jawab kolektif (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Pemerintah daerah melantik camat baru yang memiliki prestasi kerja sangat baik di wilayah tempat Anda bertugas. Namun sekelompok warga berunjuk rasa menolak pelantikan tersebut hanya karena latar belakang agama sang camat berbeda dengan mayoritas warga serta mengancam memblokade kantor kecamatan. Sikap Anda sebagai staf kecamatan adalah...",
      "pilihan": [
        {
          "teks": "Memberikan pemahaman kepada rekan kerja dan warga di sekitar kantor bahwa penempatan pejabat publik berdasar pada sistem merit dan kinerja, bukan identitas agama.",
          "skor": 4
        },
        {
          "teks": "Mengusulkan kepada pimpinan daerah agar mempertimbangkan pemindahan camat baru tersebut demi meredakan desakan massa.",
          "skor": 2
        },
        {
          "teks": "Tetap menjalankan tugas pelayanan masyarakat secara profesional di bawah pimpinan sah, mendukung upaya dialog tokoh lintas agama bersama aparat untuk meredam ketegangan, serta meneguhkan semangat Bhinneka Tunggal Ika.",
          "skor": 5
        },
        {
          "teks": "Turut mendukung penolakan kelompok warga dengan alasan kepala wilayah memang lebih cocok berasal dari latar belakang mayoritas penduduk.",
          "skor": 1
        },
        {
          "teks": "Tetap bekerja di dalam ruangan seperti biasa sambil menunggu instruksi penyelesaian langsung dari pemerintah kabupaten.",
          "skor": 3
        }
      ],
      "explanation": "Menghadapi tekanan intoleransi terhadap pejabat sah negara membutuhkan loyalitas pada meritokrasi ASN, keberlangsungan layanan publik, serta dukungan dialog lintas tokoh masyarakat (skor 5). Memberi pemahaman secara informal membantu namun kurang menyeluruh tanpa dialog tokoh (4), bersikap menunggu pasif tidak membantu meredam situasi (3), dan menyerah pada tuntutan intoleran mencederai konstitusi (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Pada jam istirahat siang di kantin kantor, seorang rekan kerja menanggapi berita penangkapan pelaku aksi terorisme dengan berkomentar bahwa kekerasan bersenjata tersebut wajar dilakukan sebagai jalan perlawanan terhadap ketimpangan sosial. Mendengar hal itu, sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menyampaikan ketidaksetujuan Anda secara langsung bahwa perbaikan ketimpangan sosial wajib diperjuangkan melalui mekanisme hukum dan demokrasi yang sah, bukan kekerasan.",
          "skor": 4
        },
        {
          "teks": "Menanggapi secara tenang dan tegas bahwa segala bentuk teror serta kekerasan tidak pernah dapat dibenarkan dengan alasan apa pun karena merampas nyawa dan merusak persatuan bangsa, serta memantau kecenderungan sikapnya untuk pembinaan.",
          "skor": 5
        },
        {
          "teks": "Mengangguk membenarkan sebagian pendapatnya bahwa tindakan ekstrem terkadang memang diperlukan agar suara protes didengar.",
          "skor": 1
        },
        {
          "teks": "Mengalihkan topik pembicaraan menuju urusan teknis pekerjaan kantor agar diskusi tidak mengarah pada pembenaran aksi kekerasan.",
          "skor": 3
        },
        {
          "teks": "Memilih diam mendengarkan ucapannya tanpa memberikan tanggapan apa pun demi menjaga keakraban suasana makan siang.",
          "skor": 2
        }
      ],
      "explanation": "Menolak secara tegas setiap pembenaran terhadap aksi terorisme secara tenang sambil mewaspadai benih radikalisme merupakan sikap anti-kekerasan yang kokoh (skor 5). Menjelaskan jalur hukum tanpa kewaspadaan pembinaan tetap baik (4), mengalihkan topik atau diam berarti tidak meluruskan narasi berbahaya (3 dan 2), dan membenarkan kekerasan merupakan bentuk dukungan terhadap paham radikal (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Panitia kegiatan eksternal yang meminjam lapangan olahraga kantor Anda untuk acara akhir pekan meminta izin memasang spanduk bertuliskan kalimat provokatif yang menyudutkan kelompok masyarakat lain sebagai pihak sesat. Sebagai penanggung jawab sarana prasarana kantor, keputusan Anda adalah...",
      "pilihan": [
        {
          "teks": "Meminta panitia mengubah seluruh redaksi spanduk menjadi pesan persatuan dan informasi kegiatan yang netral sebelum diizinkan dipasang.",
          "skor": 4
        },
        {
          "teks": "Melarang pemasangan spanduk di gerbang utama kantor namun membiarkannya dipasang terbatas di area dalam tenda acara.",
          "skor": 3
        },
        {
          "teks": "Menyerahkan izin pemasangan spanduk sepenuhnya kepada petugas keamanan lapangan tanpa memeriksa isi pesannya.",
          "skor": 2
        },
        {
          "teks": "Mengizinkan pemasangan spanduk tersebut demi menjaga kelancaran hubungan baik dengan panitia penyewa lapangan kantor.",
          "skor": 1
        },
        {
          "teks": "Menolak pemasangan spanduk tersebut secara tegas berdasarkan ketentuan ketertiban umum dan netralitas aset pemerintah, serta memeriksa ulang seluruh materi publikasi kegiatan mereka.",
          "skor": 5
        }
      ],
      "explanation": "Aset negara wajib steril dari segala bentuk ujaran kebencian maupun provokasi sektarian melalui penolakan tegas dan verifikasi menyeluruh atas materi kegiatan eksternal (skor 5). Meminta penggantian redaksi tetap positif namun perlu pengawasan menyeluruh terhadap materi lain (4), membolehkan di dalam tenda tetap melanggar prinsip netralitas ruang publik (3), dan menyerahkan tanpa periksa atau mengizinkan sangat berisiko (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Anda dipercaya menjadi tim juri lomba esai pelajar tingkat provinsi bertema wawasan kebangsaan. Saat membaca salah satu naskah peserta, Anda menemukan argumen terselubung yang mempromosikan penggantian dasar negara Pancasila dengan ideologi transnasional yang membenarkan kekerasan. Langkah Anda adalah...",
      "pilihan": [
        {
          "teks": "Tetap menilai keindahan tata bahasa dan kerapian penulisan naskah secara teknis tanpa mempermasalahkan substansi ideologi yang diusungnya.",
          "skor": 2
        },
        {
          "teks": "Memberikan penilaian objektif sesuai rubrik lomba sehingga naskah tidak lolos, lalu berkoordinasi dengan panitia serta pihak sekolah pembina untuk memberikan edukasi kebangsaan kepada pelajar secara persuasif tanpa mempermalukannya.",
          "skor": 5
        },
        {
          "teks": "Mencantumkan catatan koreksi kritis mengenai kekeliruan pemahaman ideologi negara pada lembar evaluasi dan melaporkannya kepada ketua panitia lomba.",
          "skor": 4
        },
        {
          "teks": "Menggugurkan naskah peserta tersebut pada tahap seleksi tanpa menyampaikan laporan temuan maupun tindak lanjut pembinaan ke pihak sekolah.",
          "skor": 3
        },
        {
          "teks": "Meloloskan naskah tersebut menuju babak final dengan alasan menghormati keberanian dan kebebasan berpendapat generasi muda.",
          "skor": 1
        }
      ],
      "explanation": "Penanganan gejala radikalisme pada pelajar menggabungkan ketegasan seleksi objektif dengan koordinasi pembinaan edukatif yang manusiawi bersama sekolah agar pelajar tidak semakin terjerumus (skor 5). Memberi catatan dan melapor ke panitia baik namun belum menjangkau pembinaan sekolah (4), sekadar menggugurkan kehilangan peluang pencegahan dini (3), dan menilai teknis bahasa atau meloloskan justru memberi panggung bagi paham anti-Pancasila (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "mudah",
      "question_text": "Di lingkungan perumahan tempat Anda tinggal, beberapa warga mulai menaruh curiga dan berencana mengusir sekelompok mahasiswa perantau asal daerah lain hanya karena perbedaan dialek, cara berpakaian, dan tata cara ibadah mereka tanpa bukti pelanggaran hukum. Sebagai ASN sekaligus pengurus warga, sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Mendatangi para mahasiswa perantau guna memastikan kelengkapan administrasi kependudukan mereka sekaligus menenangkan warga agar tidak bertindak main hakim sendiri.",
          "skor": 4
        },
        {
          "teks": "Memfasilitasi pertemuan musyawarah warga bersama tokoh masyarakat untuk meluruskan prasangka, memperkenalkan para mahasiswa secara terbuka, dan memperkuat budaya gotong royong lintas latar belakang.",
          "skor": 5
        },
        {
          "teks": "Mengingatkan pengurus warga lain agar tidak melakukan tindakan pengusiran sepihak tanpa koordinasi resmi bersama kelurahan dan aparat keamanan.",
          "skor": 3
        },
        {
          "teks": "Memilih bersikap netral dengan tidak menghadiri pertemuan warga agar tidak dituduh membela salah satu pihak.",
          "skor": 2
        },
        {
          "teks": "Mendukung rencana pengusiran tersebut demi menciptakan lingkungan perumahan yang seragam latar belakang sosial budayanya.",
          "skor": 1
        }
      ],
      "explanation": "Peran ASN sebagai perekat dan pemersatu bangsa diwujudkan dengan membuka dialog musyawarah warga guna meruntuhkan prasangka intoleran serta membangun kebersamaan inklusif (skor 5). Mengecek administrasi dan menenangkan warga membantu meredam gejolak (4), mengingatkan batas hukum menghindari tindakan anarkis (3), absen menunjukkan sikap apatis (2), dan mendukung pengusiran bertentangan dengan nilai Bhinneka Tunggal Ika (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Seorang pegawai dari subbagian lain mendatangi ruang kerja Anda sambil membawa lembar petisi yang isinya menentang keras kebijakan resmi pemerintah sekaligus menghasut pegawai melakukan mogok kerja massal dan menyabotase sistem pelayanan publik. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menunda menandatangani petisi tersebut sambil mengamati terlebih dahulu apakah mayoritas rekan kerja di ruangan ikut menyetujuinya.",
          "skor": 2
        },
        {
          "teks": "Menolak tegas menandatangani petisi tersebut, mengingatkan bahwa penyaluran aspirasi ASN harus mengikuti prosedur sah tanpa merugikan masyarakat, serta melaporkan indikasi ajakan sabotase kepada pimpinan.",
          "skor": 5
        },
        {
          "teks": "Ikut menandatangani petisi tersebut atas nama solidaritas sesama pegawai meskipun memuat seruan penghentian layanan publik.",
          "skor": 1
        },
        {
          "teks": "Menolak ikut serta dalam penandatanganan petisi maupun ajakan mogok kerja dan tetap menjalankan tugas pelayanan masyarakat sebagaimana mestinya.",
          "skor": 4
        },
        {
          "teks": "Menolak secara halus dengan beralasan belum sempat membaca isi petisi dan sedang fokus merampungkan tugas mendesak.",
          "skor": 3
        }
      ],
      "explanation": "Menolak ajakan pembangkangan dan sabotase layanan publik disertai pelaporan potensi gangguan ketertiban kerja melindungi kepentingan masyarakat serta keutuhan birokrasi (skor 5). Menolak tanpa melapor tidak mencegah penyebaran ajakan sabotase ke unit lain (4), mencari alasan kurang tegas pada prinsip (3), melihat sikap mayoritas mencerminkan ketiadaan pendirian (2), dan ikut menandatangani melanggar sumpah ASN (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "mudah",
      "question_text": "Instansi Anda menyelenggarakan pembekalan penguatan wawasan kebangsaan, moderasi beragama, serta deteksi dini radikalisme digital bagi seluruh aparatur. Beberapa rekan mengajak Anda meninggalkan acara setelah mengisi daftar hadir dengan alasan materinya membosankan dan tidak berkaitan langsung dengan tugas teknis. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengikuti acara setengah sesi saja lalu izin kembali ke meja kerja dengan alasan menyelesaikan pekerjaan teknis rutin.",
          "skor": 2
        },
        {
          "teks": "Mengikuti ajakan rekan untuk meninggalkan acara setelah mengisi daftar hadir dan bersantai di kantin hingga selesai.",
          "skor": 1
        },
        {
          "teks": "Tetap bertahan duduk di ruang acara hingga penutupan meski kurang antusias mengikuti diskusi materi yang disampaikan.",
          "skor": 3
        },
        {
          "teks": "Tetap mengikuti seluruh sesi pembekalan dari awal hingga akhir dengan penuh tanggung jawab sebagai bagian dari kewajiban ASN.",
          "skor": 4
        },
        {
          "teks": "Menolak ajakan membolos, mengajak rekan-rekan tetap mengikuti pembekalan hingga tuntas, serta menyimak materi secara aktif untuk memperkuat ketahanan ideologi di lingkungan kerja.",
          "skor": 5
        }
      ],
      "explanation": "Partisipasi aktif serta ajakan positif kepada rekan untuk menuntaskan pembekalan ketahanan ideologi menunjukkan komitmen kuat ASN dalam pencegahan radikalisme (skor 5). Hadir penuh secara mandiri juga bertanggung jawab (4), hadir pasif mengurangi serapan pemahaman (3), keluar lebih awal tidak menghargai program pembinaan (2), dan membolos setelah presensi melanggar integritas dan kedisiplinan (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Saat memantau akun media sosial pribadi, Anda mendapati salah satu anggota keluarga dekat rutin membagikan unggahan video yang menghina lambang negara, menyebarkan ujaran kebencian antar-umat beragama, serta mengagumi kelompok ekstremis bersenjata. Tindakan paling tepat yang Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Meluangkan waktu berdialog secara persuasif, hangat, dan berbasis fakta hukum serta nilai persatuan bangsa agar ia menyadari bahaya paham ekstremisme sebelum berdampak hukum maupun sosial.",
          "skor": 5
        },
        {
          "teks": "Memilih membisukan atau memblokir akun media sosial anggota keluarga tersebut agar konten kebenciannya tidak tampil di beranda Anda.",
          "skor": 3
        },
        {
          "teks": "Menghubunginya melalui pesan pribadi dengan tegas namun sopan agar segera menghapus unggahan provokatif tersebut karena melanggar hukum dan membahayakan masa depan keluarga.",
          "skor": 4
        },
        {
          "teks": "Mendiamkan unggahan tersebut karena merasa canggung menegur anggota keluarga yang usianya lebih tua atau cukup dekat.",
          "skor": 2
        },
        {
          "teks": "Ikut menyukai atau membagikan ulang unggahan tersebut sebagai bentuk dukungan solidaritas keluarga tanpa memikirkan dampaknya.",
          "skor": 1
        }
      ],
      "explanation": "Deteksi dini radikalisme di lingkar keluarga ditangani paling efektif lewat dialog empatik namun berprinsip agar kesadaran kembali ke pangkuan nilai kebangsaan tumbuh dari dalam (skor 5). Teguran pesan singkat tegas dapat memicu sikap defensif jika tanpa dialog (4), memblokir atau mendiamkan membiarkan proses radikalisasi berlanjut (3 dan 2), dan ikut menyebarkan berarti terlibat dalam diseminasi ekstremisme (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    }
  ],
  [
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sulit",
      "question_text": "Lima menit menjelang waktu istirahat siang, antrean di loket layanan hampir habis namun masih tersisa satu warga pembawa berkas permohonan izin usaha yang proses verifikasinya membutuhkan waktu sekitar lima belas menit. Sikap yang paling tepat Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Tetap memproses permohonannya hingga selesai namun dengan ekspresi kurang ramah karena waktu istirahat Anda terpakai.",
          "skor": 2
        },
        {
          "teks": "Meminta tolong rekan petugas loket lain yang jadwal istirahatnya berbeda giliran untuk menggantikan Anda menangani berkas warga tersebut.",
          "skor": 3
        },
        {
          "teks": "Tetap melayani warga tersebut dengan ramah, teliti, dan sepenuh hati hingga prosesnya tuntas sebelum Anda mengambil waktu istirahat siang.",
          "skor": 5
        },
        {
          "teks": "Segera memproses berkas warga tersebut dengan tempo sangat cepat dan terburu-buru agar waktu istirahat Anda tidak terlalu banyak berkurang.",
          "skor": 4
        },
        {
          "teks": "Mengakhiri layanan tepat pada menit pergantian jam dan meminta warga tersebut menunggu satu jam hingga loket dibuka kembali.",
          "skor": 1
        }
      ],
      "explanation": "Mengutamakan ketuntasan dan kualitas pelayanan kepada masyarakat yang sudah hadir di loket meskipun menyita awal jam istirahat menunjukkan integritas dan orientasi pelayanan prima (skor 5). Melayani tergesa-gesa berisiko menurunkan ketelitian (4), mengalihkan ke rekan masih menjaga layanan tetap berjalan (3), melayani dengan raut kesal mengurangi kepuasan publik (2), dan langsung menutup loket menyulitkan masyarakat (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Sebagai pegawai baru yang ditempatkan di bagian pelayanan pengaduan instansi, suatu pagi Anda menerima keluhan keras dari seorang pengunjung yang merasa sangat tidak puas terhadap kualitas layanan loket sebelumnya. Langkah Anda adalah...",
      "pilihan": [
        {
          "teks": "Menjelaskan secara tenang alur standar operasional prosedur yang berlaku di instansi agar pengunjung memahami tahapan layanan.",
          "skor": 3
        },
        {
          "teks": "Menjelaskan posisi dan keterbatasan wewenang Anda sebagai pegawai baru di instansi tersebut sebelum mengarahkannya ke bagian lain.",
          "skor": 2
        },
        {
          "teks": "Meminta maaf terlebih dahulu lalu berupaya menyelesaikan langsung persoalan berkas pengunjung tersebut sesuai prosedur yang berlaku.",
          "skor": 4
        },
        {
          "teks": "Membiarkannya meluapkan keluhan tanpa mencatat apa pun karena Anda masih harus mengerjakan tugas administrasi lain yang menumpuk.",
          "skor": 1
        },
        {
          "teks": "Meminta maaf dengan tulus atas ketidaknyamanan yang terjadi, mencatat secara rinci keluhan tersebut, membantu solusi sesuai kewenangan, serta melaporkannya kepada pimpinan unit.",
          "skor": 5
        }
      ],
      "explanation": "Sebagai pegawai baru, respons terlengkap adalah meminta maaf secara empatik, menampung dan membantu penyelesaian awal sesuai wewenang, serta meneruskan catatan keluhan ke pimpinan untuk evaluasi layanan (skor 5). Menyelesaikan sendiri tanpa melapor ke pimpinan kurang mendukung perbaikan sistemik (4), menjelaskan SOP atau peran diri terkesan defensif (3 dan 2), dan mengabaikan keluhan sangat tidak profesional (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Unit layanan kesehatan tempat Anda bertugas memberlakukan kewajiban memakai masker di ruang tunggu guna mencegah penularan penyakit pernapasan, dan papan pengumuman aturan tersebut sudah terpasang jelas di pintu masuk. Namun seorang pengunjung datang ke loket tanpa mengenakan masker. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Memberitahukan secara sopan bahwa berkasnya baru dapat dilayani setelah yang bersangkutan mengenakan masker sesuai ketentuan keselamatan ruang layanan.",
          "skor": 4
        },
        {
          "teks": "Tetap memproses permohonannya saat itu juga sambil mengingatkan agar pada kunjungan berikutnya wajib mematuhi aturan memakai masker.",
          "skor": 3
        },
        {
          "teks": "Memintanya menjaga jarak dan tidak mendekati meja loket dengan nada ketus tanpa menjelaskan alasan peraturannya.",
          "skor": 1
        },
        {
          "teks": "Menyapa dengan santun, mengingatkan kembali ketentuan pada papan pengumuman demi keselamatan bersama, serta menawarkan masker cadangan dari loket sebelum memproses layanannya.",
          "skor": 5
        },
        {
          "teks": "Langsung melayani pengunjung tersebut tanpa menegur demi menghindari perdebatan di hadapan pemohon lain.",
          "skor": 2
        }
      ],
      "explanation": "Mengomunikasikan aturan keselamatan secara persuasif sambil menyediakan solusi masker cadangan membuat ketentuan tetap ditegakkan dan masyarakat tetap terlayani baik (skor 5). Menunda layanan sambil mengingatkan dengan sopan tetap menegakkan SOP (4), melayani sambil mengingatkan masih kompromis terhadap aturan keselamatan (3), diam saja berarti abai terhadap SOP (2), dan bersikap ketus merusak citra pelayanan publik (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Pagi ini jalan raya menuju kantor mengalami kemacetan parah sehingga Anda tiba di lobi gedung pelayanan hanya beberapa menit sebelum batas akhir presensi elektronik. Ketika Anda berjalan bergegas menuju mesin presensi, seorang warga lanjut usia menyapa dan tampak kebingungan mencari letak loket pengaduan layanan. Sikap Anda yang paling tepat adalah...",
      "pilihan": [
        {
          "teks": "Mengantarkan warga lanjut usia tersebut langsung hingga ke depan loket pengaduan terlebih dahulu meskipun berisiko tercatat terlambat pada mesin presensi.",
          "skor": 3
        },
        {
          "teks": "Menyapa dengan santun, menjelaskan arah menuju loket pengaduan secara jelas hingga beliau paham, lalu segera melakukan presensi tepat waktu.",
          "skor": 5
        },
        {
          "teks": "Menanyakan keperluannya secara singkat lalu memintanya duduk menunggu di kursi lobi sampai petugas informasi tiba.",
          "skor": 2
        },
        {
          "teks": "Terus berjalan cepat menuju mesin presensi tanpa berhenti agar catatan kehadiran Anda tidak terkena pemotongan disiplin.",
          "skor": 1
        },
        {
          "teks": "Menghampiri sebentar dan meminta petugas keamanan lobi yang sedang berjaga untuk langsung mendampingi beliau menuju loket, lalu segera menuju mesin presensi.",
          "skor": 4
        }
      ],
      "explanation": "Dalam Pelayanan Publik yang prima, ASN wajib bersikap responsif dan ramah kepada pengguna layanan sekaligus menjaga profesionalisme disiplin kerja. Menjelaskan arah secara jelas hingga dipahami lalu segera melakukan presensi (skor 5) menyelesaikan dua kewajiban sekaligus secara efektif. Meminta petugas keamanan yang berjaga langsung mendampingi (skor 4) juga solutif meski tidak melayani arahan awal secara langsung. Mengantarkan langsung hingga mengorbankan ketepatan waktu presensi (skor 3) menunjukkan empati namun kurang efisien dalam manajemen waktu. Memintanya menunggu tanpa kepastian (skor 2) kurang responsif, sedangkan mengabaikannya demi presensi pribadi (skor 1) bertentangan dengan etika pelayanan publik.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sulit",
      "question_text": "Sebagai petugas meja informasi di pusat layanan kesehatan terpadu, Anda melayani seorang warga lanjut usia yang hendak mengaktifkan layanan kepesertaan jaminan kesehatan daring pada ponselnya. Setelah Anda menjelaskan prosedur langkah demi langkah secara perlahan dan menggunakan bahasa yang mudah dipahami, beliau tetap tampak kebingungan mengoperasikan aplikasinya. Tindakan terbaik yang seharusnya Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Mengulangi kembali penjelasan tahap demi tahap dengan intonasi sabar sambil menunjuk langsung menu pada layar ponsel beliau.",
          "skor": 3
        },
        {
          "teks": "Menyarankan beliau untuk mempelajari brosur panduan di rumah dan kembali lagi pada hari berikutnya bersama keluarga.",
          "skor": 1
        },
        {
          "teks": "Menanyakan dengan ramah apakah beliau datang bersama anggota keluarga atau pendamping agar Anda dapat menjelaskan alur aktivasinya sekaligus kepada pendampingnya.",
          "skor": 5
        },
        {
          "teks": "Mengambil alih ponsel beliau untuk langsung mengisikan seluruh data aktivasi tanpa menjelaskan ulang prosedurnya agar antrean cepat bergerak.",
          "skor": 2
        },
        {
          "teks": "Meminta bantuan rekan petugas layanan lain yang sedang tidak menangani antrean untuk mendampingi proses aktivasi beliau secara khusus hingga selesai.",
          "skor": 4
        }
      ],
      "explanation": "Pelayanan publik menuntut daya tanggap dan solusi nyata agar kebutuhan masyarakat benar-benar terpenuhi. Melibatkan anggota keluarga yang mendampingi (skor 5) memastikan pemohon lanjut usia mendapat bantuan berkelanjutan tidak hanya saat aktivasi, tetapi juga saat memakai aplikasi di kemudian hari. Meminta bantuan rekan yang luang untuk pendampingan khusus (skor 4) merupakan alternatif baik bila pemohon datang sendiri. Mengulang penjelasan dengan cara yang sama (skor 3) berisiko tetap membingungkan karena kendala penguasaan gawai. Langsung mengisi tanpa edukasi (skor 2) kurang memberdayakan pengguna, sedangkan menyuruh pulang dan kembali esok hari (skor 1) menunda hak pelayanan warga.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Dinas tempat Anda bertugas baru saja meluncurkan sistem pelayanan perizinan usaha versi terbaru untuk mempercepat penerbitan dokumen. Namun, pada minggu pertama peluncuran, banyak keluhan masuk dari masyarakat terkait kendala pengisian formulir dan lambatnya proses verifikasi berkas. Sebagai bagian dari tim layanan, sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menangani setiap keluhan yang masuk dengan tetap tenang, fokus mencari jalan keluar sementara bagi berkas warga yang tertunda.",
          "skor": 4
        },
        {
          "teks": "Proaktif menanyakan rincian kendala yang dialami para pemohon serta menjadikannya dasar penyusunan solusi dan perbaikan alur layanan.",
          "skor": 5
        },
        {
          "teks": "Mendengarkan setiap keluhan pemohon dengan saksama dan mencatatnya dalam buku laporan harian pelayanan.",
          "skor": 3
        },
        {
          "teks": "Memaklumi banyaknya keluhan karena masyarakat belum terbiasa beradaptasi dengan sistem baru yang diterapkan instansi.",
          "skor": 1
        },
        {
          "teks": "Meminta pemohon menyampaikan keluhan secara tertulis melalui kotak saran agar dapat dibahas pada evaluasi akhir bulan.",
          "skor": 2
        }
      ],
      "explanation": "Pelayanan publik yang berorientasi mutu menuntut langkah cepat, terbuka terhadap umpan balik, dan berorientasi solusi. Proaktif menggali kendala pemohon dan langsung menjadikannya dasar solusi serta perbaikan (skor 5) menunjukkan kepedulian dan responsivitas tertinggi. Menangani dengan tenang dan fokus solusi sementara (skor 4) sangat baik, namun belum menekankan penggalian akar keluhan untuk perbaikan menyeluruh. Sekadar mendengarkan dan mencatat (skor 3) bersifat pasif. Mengarahkan ke evaluasi akhir bulan (skor 2) memperlambat penyelesaian, dan hanya memaklumi tanpa bertindak (skor 1) menunjukkan lemahnya orientasi pelayanan.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Dalam pengurusan suatu dokumen administrasi kependudukan di daerah, masyarakat sering mengeluhkan proses verifikasi berjenjang antarunit kerja yang memakan waktu lama, bahkan terkadang terhambat karena persediaan blangko cetak habis. Menanggapi keluhan masyarakat tersebut, sikap Anda sebagai pegawai unit pelayanan adalah...",
      "pilihan": [
        {
          "teks": "Mengusulkan kepada pimpinan agar disediakan papan informasi dan kanal penjelasan terbuka mengenai syarat, alur, solusi dokumen sementara, serta perkiraan waktu penyelesaian.",
          "skor": 5
        },
        {
          "teks": "Menginformasikan kepada pemohon bahwa kondisi kekosongan blangko memang sering terjadi di berbagai daerah sehingga warga dimohon bersabar.",
          "skor": 2
        },
        {
          "teks": "Menjelaskan langsung kepada warga yang bertanya bahwa proses berjenjang dan ketersediaan blangko merupakan ketentuan mekanisme yang sedang diupayakan percepatannya.",
          "skor": 4
        },
        {
          "teks": "Memaklumi keluhan masyarakat dan menyampaikannya secara lisan apabila ada petugas bagian pengadaan yang berkunjung.",
          "skor": 3
        },
        {
          "teks": "Membiarkan warga mencari tahu sendiri perkembangan berkasnya melalui loket antrean karena hal itu di luar kewenangan pribadi Anda.",
          "skor": 1
        }
      ],
      "explanation": "Transparansi dan kepastian informasi merupakan asas utama dalam Undang-Undang Pelayanan Publik. Mengusulkan penyediaan penjelasan terbuka mengenai syarat, alur, opsi pengganti sementara, dan estimasi waktu (skor 5) memberikan solusi sistemik bagi seluruh pemohon. Menjelaskan secara lisan per individu (skor 4) baik, namun jangkauannya terbatas. Bersikap pasif hanya menyampaikan ke rekan saat bertemu (skor 3) kurang terstruktur. Meminta warga sekadar bersabar tanpa solusi (skor 2) tidak memberi kepastian, dan membiarkan warga tanpa informasi (skor 1) mencerminkan sikap apatis.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sulit",
      "question_text": "Pada kegiatan pelayanan kesehatan dan pemeriksaan gratis di balai warga, antrean pendaftaran tampak sangat panjang karena tingginya antusiasme masyarakat. Di antara pengantre, tampak seorang kakek berusia lanjut yang terlihat lemah dan memohon agar dapat dilayani lebih dahulu. Sebagai petugas loket pendaftaran, tindakan yang Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Langsung memproses pendaftaran kakek tersebut terlebih dahulu dengan cepat, lalu menyampaikan penjelasan kepada warga yang mengantre di barisan depan.",
          "skor": 4
        },
        {
          "teks": "Memberikan penjelasan secara santun dan meminta pengertian kepada para pengantre lain mengenai prioritas kelompok rentan, kemudian segera melayani kakek tersebut.",
          "skor": 5
        },
        {
          "teks": "Menyiapkan kursi tunggu yang teduh untuk kakek tersebut sambil membantu mempercepat alur antrean di depan agar gilirannya segera tiba.",
          "skor": 3
        },
        {
          "teks": "Meminta maaf dengan halus dan mengarahkan kakek tersebut tetap menunggu sesuai nomor urut demi menjaga ketertiban antrean.",
          "skor": 2
        },
        {
          "teks": "Menolak permohonannya secara tegas karena seluruh warga datang sejak pagi dan berhak mendapat giliran yang sama tanpa pengecualian.",
          "skor": 1
        }
      ],
      "explanation": "Sesuai prinsip pelayanan publik yang inklusif dan berkeadilan, kelompok rentan seperti lansia, ibu hamil, dan penyandang disabilitas berhak memperoleh prioritas layanan tanpa memicu konflik sosial. Memberikan pengertian kepada pengantre lain terlebih dahulu sebelum melayani kakek tersebut (skor 5) menjaga transparansi dan ketertiban sosial. Mendahulukan baru menjelaskan (skor 4) baik niatnya, namun berisiko memunculkan kesalahpahaman sesaat di antrean. Memberikan kursi tunggu tanpa mendahulukan (skor 3) membantu kenyamanan namun kurang responsif terhadap kondisi fisiknya. Meminta menunggu sesuai nomor urut (skor 2) mengabaikan aspek kelompok rentan, sedangkan menolak tegas tanpa empati (skor 1) jauh dari nilai pelayanan humanis.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "mudah",
      "question_text": "Ketika kelompok kerja Anda sedang merampungkan penyusunan dokumen paparan yang wajib diserahkan hari itu juga, seorang anggota tim tiba-tiba meminta izin pulang lebih awal karena urusan pribadi. Sikap Anda dalam menjaga kerja sama tim adalah...",
      "pilihan": [
        {
          "teks": "Memaksanya tetap bertahan di ruangan dengan nada keras karena menganggap ia tidak peduli pada tenggat tim.",
          "skor": 1
        },
        {
          "teks": "Menanyakan keperluannya dengan baik dan mengajaknya mempertimbangkan ulang atau memastikan penyelesaian pembagian sisa tugasnya terlebih dahulu.",
          "skor": 5
        },
        {
          "teks": "Membujuknya dengan halus agar menunda kepulangannya barang sebentar sampai bagian tugas intinya tuntas dikerjakan.",
          "skor": 3
        },
        {
          "teks": "Mengizinkannya langsung pulang begitu saja tanpa membahas kelanjutan bagian tugas yang ditinggalkannya.",
          "skor": 2
        },
        {
          "teks": "Mengajak anggota tim lain berdiskusi bersama mengenai pengaturan ulang sisa beban tugas jika rekan tersebut benar-benar harus pulang.",
          "skor": 4
        }
      ],
      "explanation": "Jejaring kerja sehat mengedepankan saling memahami dan menghargai tanpa memaksa, sembari tetap menjaga komitmen penyelesaian tugas lewat pertimbangan yang bijak (skor 5). Melibatkan pertimbangan tim lainnya juga positif (4), membujuk menunda masih fokus pada kepentingan tim namun agak menekan (3), membiarkan tanpa pembagian tugas berisiko mengganggu target (2), dan memaksa dengan keras merusak relasi kerja (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "mudah",
      "question_text": "Di ruang kerja unit baru Anda, sebagian besar rekan sejawat berusia jauh lebih senior dibandingkan Anda. Cara berinteraksi yang paling tepat Anda bangun untuk menciptakan hubungan kerja yang harmonis dan efektif adalah...",
      "pilihan": [
        {
          "teks": "Menjaga sikap sangat formal dan kaku dalam setiap kesempatan karena khawatir dianggap kurang sopan oleh senior.",
          "skor": 2
        },
        {
          "teks": "Menjalin keakraban secara wajar layaknya rekan kerja sambil tetap menjaga rasa hormat terhadap perbedaan usia.",
          "skor": 4
        },
        {
          "teks": "Bersikap santun, hangat, menghargai pengalaman kerja mereka, serta sesekali bercanda ringan dalam batas etika kesopanan.",
          "skor": 5
        },
        {
          "teks": "Bersikap netral dan berkomunikasi seperlunya sesuai topik pekerjaan agar terhindar dari salah paham.",
          "skor": 3
        },
        {
          "teks": "Sering melontarkan candaan bebas tanpa batasan agar suasana ruangan cepat cair dan tidak terasa canggung.",
          "skor": 1
        }
      ],
      "explanation": "Komunikasi interpersonal yang hangat, menghormati senioritas, dan tahu batas kewajaran menciptakan jejaring kerja lintas generasi yang nyaman dan produktif (skor 5). Akrab seperti teman sebaya tetap baik bila beradab namun bisa kurang peka tata krama (4), bersikap biasa saja atau kaku membatasi kolaborasi (3 dan 2), dan bercanda kelewatan melanggar etika pergaulan kantor (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Pada saat Anda dikejar tenggat waktu penyelesaian laporan anggaran yang padat, seorang rekan kerja menghampiri dan meminta bantuan Anda menjelaskan cara menyusun format analisis data yang belum ia pahami. Tindakan Anda adalah...",
      "pilihan": [
        {
          "teks": "Memintanya langsung bertanya kepada atasan saja karena Anda sedang sibuk mengejar tenggat pekerjaan pribadi.",
          "skor": 1
        },
        {
          "teks": "Memberinya petunjuk ringkas serta bahan contoh agar ia dapat mencoba terlebih dahulu, lalu meluangkan waktu membimbingnya lebih detail setelah tenggat Anda rampung atau selepas jam kerja.",
          "skor": 5
        },
        {
          "teks": "Menghentikan sementara pengerjaan laporan tenggat Anda untuk mengajarinya secara penuh hingga benar-benar paham.",
          "skor": 2
        },
        {
          "teks": "Memintanya menunggu dengan sabar hingga berkas tenggat Anda terkirim agar Anda dapat membantunya secara fokus.",
          "skor": 4
        },
        {
          "teks": "Memberikan arahan langkah teknis secara singkat di sela kesibukan tanpa memintanya menunggu hingga pekerjaan Anda selesai.",
          "skor": 3
        }
      ],
      "explanation": "Kepedulian kepada rekan kerja tetap selaras dengan tanggung jawab tenggat pribadi apabila disiasati dengan panduan awal serta komitmen pembimbingan penuh setelah target prioritas aman (skor 5). Meminta menunggu hingga pekerjaan selesai juga menjaga tanggung jawab (4), arahan singkat membantu meski kurang tuntas (3), menghentikan tugas tenggat berisiko menggagalkan target dinas (2), dan menolak mentah-mentah merusak kerja sama tim (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Dalam menjalankan kerja sama lintas bidang di instansi pemerintah, komunikasi yang terbuka sangat diperlukan agar koordinasi berjalan harmonis dan target tercapai. Ketika berinteraksi dengan mitra atau anggota tim lain untuk memecahkan masalah program, pola komunikasi yang paling efektif Anda gunakan adalah...",
      "pilihan": [
        {
          "teks": "Mengajukan pertanyaan terbuka yang menggali sudut pandang mitra sehingga terbangun diskusi dua arah yang konstruktif.",
          "skor": 5
        },
        {
          "teks": "Mengadakan forum diskusi kelompok untuk menampung berbagai gagasan dari seluruh anggota yang terlibat.",
          "skor": 4
        },
        {
          "teks": "Menyampaikan instruksi langsung mengenai langkah yang harus dikerjakan agar alur koordinasi berjalan cepat.",
          "skor": 1
        },
        {
          "teks": "Memberikan imbauan umum mengenai pentingnya keselarasan target agar setiap unit menjalankan bagiannya.",
          "skor": 2
        },
        {
          "teks": "Menyampaikan argumentasi berbasis data agar pihak lain memahami dasar pemikiran yang Anda tawarkan.",
          "skor": 3
        }
      ],
      "explanation": "Membangun jejaring kerja membutuhkan komunikasi timbal balik yang setara dan partisipatif. Menggunakan pola pertanyaan terbuka (skor 5) mendorong pihak lain aktif berbicara, memicu klarifikasi, serta melahirkan diskusi dan solusi bersama. Pola diskusi langsung (skor 4) sangat baik, namun sering kali diawali dengan pertanyaan yang memancing keterlibatan aktif. Mengedepankan argumentasi sepihak (skor 3) cenderung persuasif satu arah, imbauan (skor 2) kurang operasional, sedangkan perintah (skor 1) tidak sesuai prinsip kemitraan setara.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Unit kerja Anda sedang menghadapi tumpukan beberapa proyek penyusunan laporan kinerja dengan tenggat waktu penyerahan yang bersamaan. Anda menyadari bahwa beban tugas tersebut mustahil diselesaikan optimal bila dikerjakan seorang diri tanpa dukungan tim. Langkah yang paling tepat Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Membawa seluruh berkas pekerjaan tersebut ke rumah untuk dikerjakan hingga larut malam seorang diri.",
          "skor": 1
        },
        {
          "teks": "Menyelesaikan pekerjaan yang paling mendesak terlebih dahulu dan menjadwalkan sisanya untuk dikerjakan keesokan hari.",
          "skor": 2
        },
        {
          "teks": "Segera berkoordinasi dengan pimpinan untuk mengusulkan pembagian tugas serta pelibatan rekan kerja lintas tim agar seluruh laporan selesai tepat waktu.",
          "skor": 5
        },
        {
          "teks": "Mengajukan izin kerja lembur agar beban pekerjaan tambahan dapat dikejar di luar jam kerja reguler.",
          "skor": 3
        },
        {
          "teks": "Berupaya keras menyelesaikan seluruh pekerjaan sesuai tenggat waktu dengan pembagian fokus prioritas pada bagian terpenting.",
          "skor": 4
        }
      ],
      "explanation": "Kemampuan memanfaatkan jejaring kerja dan koordinasi tim sangat penting ketika menghadapi beban kerja melebihi kapasitas individu. Melapor kepada pimpinan untuk meminta dukungan pembagian tugas tim (skor 5) menjaga kualitas hasil dan ketepatan waktu secara realistis. Bekerja keras mandiri dengan fokus prioritas (skor 4) menunjukkan dedikasi, namun berisiko menurunkan mutu jika beban terlalu berat. Mengandalkan lembur (skor 3) kurang efisien secara manajemen tim, menunda keesokan hari (skor 2) berisiko melewati tenggat, dan membawa dokumen kerja ke rumah (skor 1) berisiko melanggar keamanan data serta keseimbangan kerja.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "mudah",
      "question_text": "Lembaga pelatihan keterampilan kerja yang Anda kelola bersama rekan-rekan telah berkembang pesat dan dipercaya masyarakat. Suatu hari, sebuah pemerintah daerah di kabupaten tetangga menawarkan kerja sama kemitraan untuk membuka pusat pelatihan cabang di wilayah mereka. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menerima tawaran tersebut serta menjadikannya momentum strategis untuk memperkuat citra dan kualitas program kerja sama.",
          "skor": 4
        },
        {
          "teks": "Menyambut dan menerima peluang kemitraan tersebut dengan penuh tanggung jawab sebagai wujud kepercayaan sekaligus sarana memperluas manfaat layanan.",
          "skor": 5
        },
        {
          "teks": "Menolak tawaran kemitraan tersebut karena merasa belum yakin mampu mengelola koordinasi di dua wilayah sekaligus.",
          "skor": 1
        },
        {
          "teks": "Meminta masukan dari keluarga serta kerabat terlebih dahulu sebelum mengambil keputusan terkait rencana kerja sama baru.",
          "skor": 2
        },
        {
          "teks": "Mempertimbangkan tawaran tersebut secara serius bersama tim pengelola dengan mencermati kesiapan jarak dan sumber daya.",
          "skor": 3
        }
      ],
      "explanation": "Jejaring kerja menekankan keterbukaan dalam membangun dan memperluas kemitraan strategis yang saling menguntungkan. Menerima peluang kemitraan atas dasar kepercayaan yang telah terbangun (skor 5) menunjukkan kesiapan berkolaborasi dan memperluas dampak positif. Melihatnya sebagai penguatan citra program (skor 4) baik, namun fokus utamanya masih pada penguatan nama sendiri dibanding kemitraan. Terlalu lama menimbang karena faktor jarak (skor 3) atau meminta pertimbangan non-profesional (skor 2) memperlambat peluang, dan menolak karena kurang percaya diri (skor 1) menghambat pengembangan jejaring.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sulit",
      "question_text": "Anda bekerja sebagai tenaga administrasi teknis di apotek unit layanan kesehatan daerah. Suatu pagi, seorang pasien datang membawa resep obat racikan mendesak, namun apoteker penanggung jawab belum tiba di lokasi. Kebetulan Anda pernah melihat dan mengetahui komposisi racikan serupa. Tindakan yang seharusnya Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Menjelaskan dengan jujur kepada pasien bahwa apoteker yang berwenang meracik obat saat ini masih dalam perjalanan.",
          "skor": 3
        },
        {
          "teks": "Langsung meracik sendiri obat tersebut atas dasar rasa iba kepada pasien agar tidak menunggu terlalu lama.",
          "skor": 1
        },
        {
          "teks": "Mempersilakan pasien menunggu di ruang tunggu dengan nyaman hingga apoteker datang guna menjamin keamanan racikan.",
          "skor": 4
        },
        {
          "teks": "Meminta pertimbangan rekan bagian administrasi lainnya mengenai apakah resep tersebut dapat ditangani terlebih dahulu.",
          "skor": 2
        },
        {
          "teks": "Segera menghubungi apoteker penanggung jawab untuk memastikan posisi dan perkiraan waktu kedatangannya sembari menjelaskan situasi kepada pasien.",
          "skor": 5
        }
      ],
      "explanation": "Kolaborasi dan jejaring kerja yang sehat mengharuskan setiap pegawai berkomunikasi efektif dan menghormati batas kewenangan profesi serta standar keselamatan. Menghubungi langsung apoteker yang berwenang untuk kepastian waktu tiba (skor 5) merupakan bentuk komunikasi koordinatif yang proaktif tanpa melanggar kode etik. Meminta pasien menunggu dengan nyaman (skor 4) aman secara prosedur, namun kurang aktif berkoordinasi. Sekadar menjelaskan apoteker belum datang (skor 3) tidak memberi kepastian waktu. Bertanya kepada rekan non-apoteker (skor 2) tidak tepat sasaran, sedangkan meracik tanpa kompetensi dan wewenang (skor 1) sangat berbahaya bagi keselamatan pasien.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sulit",
      "question_text": "Dalam penyusunan tim proyek lapangan ke wilayah perbukitan, atasan Anda tidak menyertakan seorang rekan kerja perempuan dengan alasan pekerjaan lapangan yang berat dianggap kurang pantas bagi perempuan, padahal rekan tersebut paling kompeten dan berpengalaman di bidangnya. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengunggah kisah ketidakadilan penugasan di kantor tersebut ke media sosial pribadi untuk mendapat dukungan opini publik.",
          "skor": 1
        },
        {
          "teks": "Menyampaikan secara objektif dan santun kepada atasan mengenai rekam jejak kompetensi rekan perempuan tersebut agar diberikan kesempatan yang setara tanpa bias gender.",
          "skor": 5
        },
        {
          "teks": "Menyatakan secara tegas dalam forum pertimbangan tim bahwa pembagian tugas profesional semestinya didasarkan pada kecakapan, bukan jenis kelamin.",
          "skor": 4
        },
        {
          "teks": "Menjelaskan kondisi pertimbangan atasan secara bijak kepada rekan perempuan tersebut sambil menyemangatinya agar terus menunjukkan karya terbaik.",
          "skor": 3
        },
        {
          "teks": "Mempertanyakan keputusan atasan di belakang forum lalu melaporkannya secara diam-diam tanpa dialog internal terlebih dahulu.",
          "skor": 2
        }
      ],
      "explanation": "Menolak diskriminasi berbasis gender secara profesional dilakukan dengan mengadvokasi kompetensi rekan secara santun dan objektif langsung kepada pengambil keputusan (skor 5). Menyebut ketidakadilan secara umum atau menjelaskan ke rekan belum memulihkan kesempatan kerjanya secara langsung (4 dan 3), melapor diam-diam sebelum dialog kurang konstruktif (2), dan menyebar ke media sosial melanggar etika ASN (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Saat menerima kabar mendadak dari keluarga bahwa anak Anda mengalami demam tinggi di rumah, Anda bergegas menuju ruangan pimpinan untuk meminta izin pulang. Setibanya di depan pintu, Anda melihat pimpinan sedang berdiskusi serius dengan tamu dari dinas lain. Tindakan yang sesuai tata krama adalah...",
      "pilihan": [
        {
          "teks": "Langsung bergegas pulang meninggalkan kantor begitu saja tanpa meminta izin resmi kepada pimpinan.",
          "skor": 1
        },
        {
          "teks": "Langsung masuk ke ruang pimpinan dan mengutarakan keperluan izin pulang tanpa memperhatikan tamu yang hadir.",
          "skor": 2
        },
        {
          "teks": "Menunggu dengan tenang di dekat pintu hingga pembicaraan mereka selesai atau mengetuk santun saat ada jeda percakapan sambil memohon maaf untuk menyampaikan kondisi darurat.",
          "skor": 5
        },
        {
          "teks": "Menyimak sekilas situasi ruangan untuk menimbang tingkat urgensi diskusi mereka sebelum menyela dengan sangat sopan jika situasi semakin genting.",
          "skor": 4
        },
        {
          "teks": "Mengetuk pintu dan menyela pembicaraan secara singkat setelah memohon maaf terlebih dahulu karena keadaan mendesak.",
          "skor": 3
        }
      ],
      "explanation": "Dalam budaya kerja dan tata krama Indonesia, menghormati tamu dan pembicaraan pimpinan tetap dijaga melalui sikap sabar menunggu atau meminta maaf penuh santun saat jeda (skor 5). Menimbang situasi sebelum menyela tetap menjaga etika (4), langsung menyela meski minta maaf agak memotong diskusi tamu (3), langsung masuk tanpa adab kurang sopan (2), dan pulang tanpa izin melanggar disiplin (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Anda ditugaskan mengikuti pelatihan teknis di balai diklat nasional dan oleh panitia ditempatkan sekamar dengan peserta dari provinsi lain yang memiliki logat serta adat kebiasaan berbeda dan belum pernah Anda kenal sebelumnya. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengajukan keberatan kepada panitia dan meminta ditempatkan sekamar dengan peserta yang berasal dari wilayah atau instansi yang sama.",
          "skor": 2
        },
        {
          "teks": "Menerima sepenuhnya aturan pembagian kamar yang telah ditetapkan panitia penyelenggara tanpa mempermasalahkannya.",
          "skor": 4
        },
        {
          "teks": "Memprotes keras pengaturan panitia dan menuntut diberikan kamar khusus seorang diri demi kenyamanan pribadi.",
          "skor": 1
        },
        {
          "teks": "Menerima penempatan kamar dari panitia dengan senang hati serta berinisiatif berkenalan, mengenal budaya daerahnya, dan menjalin kebersamaan yang hangat.",
          "skor": 5
        },
        {
          "teks": "Sempat menanyakan kemungkinan penyesuaian kamar kepada panitia namun tetap menerima keputusan akhir panitia dengan baik.",
          "skor": 3
        }
      ],
      "explanation": "Kemampuan sosial budaya dan adaptabilitas unggul terlihat dari penerimaan tulus atas penempatan panitia sekaligus sikap proaktif membangun perkenalan lintas daerah (skor 5). Menerima tanpa inisiatif berkenalan masih pasif (4), sempat mengajukan keberatan lalu menerima atau meminta satu daerah menunjukkan sikap kurang inklusif (3 dan 2), dan memprotes keras bertentangan dengan nilai keterbukaan ASN (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Pemerintah mengimbau masyarakat dan aparatur sipil negara untuk aktif menekan laju emisi gas rumah kaca guna mengurangi dampak pemanasan global dalam kehidupan bermasyarakat. Kontribusi nyata yang paling tepat Anda terapkan secara konsisten dalam rutinitas perjalanan kerja sehari-hari adalah...",
      "pilihan": [
        {
          "teks": "Mematikan lampu, pendingin ruangan, dan perangkat listrik kerja lainnya apabila tidak sedang digunakan.",
          "skor": 4
        },
        {
          "teks": "Membiasakan memanfaatkan transportasi umum atau berbagi kendaraan untuk mengurangi emisi bahan bakar dari kendaraan pribadi.",
          "skor": 5
        },
        {
          "teks": "Mengurangi penggunaan kemasan plastik sekali pakai dengan membawa botol minum dan wadah bekal sendiri.",
          "skor": 3
        },
        {
          "teks": "Membuang sampah pada tempatnya agar lingkungan sekitar kantor tetap bersih dan nyaman.",
          "skor": 1
        },
        {
          "teks": "Menanam tanaman hijau di pekarangan rumah serta sudut ruang kerja agar lingkungan lebih asri.",
          "skor": 2
        }
      ],
      "explanation": "Kepekaan terhadap isu sosial dan lingkungan global menuntut langkah dengan dampak pengurangan emisi terbesar dalam aktivitas harian pegawai. Beralih menggunakan transportasi umum saat berangkat kerja (skor 5) secara langsung menekan emisi karbon dioksida dari pembakaran bahan bakar fosil harian. Menghemat penggunaan listrik (skor 4) dan membatasi plastik (skor 3) juga berkontribusi besar terhadap pengurangan jejak karbon. Menanam tanaman di pekarangan (skor 2) membantu penyerapan karbon dalam skala kecil, sedangkan membuang sampah pada tempatnya (skor 1) lebih terkait kebersihan dasar daripada pengurangan emisi gas rumah kaca.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Anda dan seorang rekan dari daerah yang sama terpilih mengikuti bimbingan teknis tingkat nasional di kota lain, yang mewajibkan peserta membaur guna menyosialisasikan program ke daerah masing-masing. Panitia menempatkan Anda berdua di kamar yang masih menyisakan satu tempat tidur kosong untuk peserta dari provinsi lain. Rekan Anda mengusulkan agar meminta panitia mengisi tempat kosong itu dengan peserta asal daerah yang sama supaya lebih mudah berkoordinasi. Tanggapan Anda adalah...",
      "pilihan": [
        {
          "teks": "Menolak usulan tersebut secara santun dan menyatakan bersedia satu kamar dengan peserta dari provinsi mana pun guna memperluas wawasan kebinekaan.",
          "skor": 5
        },
        {
          "teks": "Menyetujui usulan rekan Anda untuk meminta panitia menukar penghuni kamar agar hanya berkumpul dengan sesama asal daerah.",
          "skor": 1
        },
        {
          "teks": "Menyetujui ditempatkan sekamar dengan peserta daerah lain hanya apabila memang tidak ada peserta sedaerah yang tersedia.",
          "skor": 2
        },
        {
          "teks": "Mengajak rekan Anda untuk terbuka berinteraksi serta berbaur bersama peserta dari daerah lain selama kegiatan berlangsung.",
          "skor": 4
        },
        {
          "teks": "Menjelaskan bahwa Anda tetap nyaman sekamar dengan peserta dari daerah lain sepanjang pembahasannya sejalan dengan tujuan acara.",
          "skor": 3
        }
      ],
      "explanation": "Kompetensi Sosial Budaya menuntut kemampuan beradaptasi dan membangun relasi harmonis dalam masyarakat yang majemuk. Menyatakan kesediaan tulus untuk sekamar dengan rekan dari daerah lain (skor 5) menunjukkan keterbukaan terhadap keberagaman suku dan budaya Nusantara. Mengajak rekan lain berbaur (skor 4) mendukung harmoni sosial, namun belum secara eksplisit menjawab pilihan penempatan kamar pada usulan teman. Bersedia dengan syarat tertentu (skor 3) atau karena terpaksa (skor 2) menunjukkan keterbukaan setengah hati, sedangkan hanya ingin berkelompok dengan sesama daerah (skor 1) mencerminkan sikap eksklusif.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sulit",
      "question_text": "Menjelang peringatan hari kemerdekaan di kompleks tempat tinggal Anda, rapat warga menyepakati besaran iuran gotong royong yang sama rata bagi setiap kepala keluarga. Salah seorang warga berpenghasilan rendah sangat ingin berpartisipasi bersama keluarga, tetapi hanya mampu membayar separuh dari iuran tersebut. Beberapa warga lain keberatan karena khawatir menjadi preseden bagi warga lainnya. Sebagai ketua panitia lingkungan, keputusan terbaik yang Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Mengajak warga yang keberatan untuk menghitung ulang skema anggaran kegiatan dengan mempertimbangkan daya bayar warga yang kurang mampu.",
          "skor": 4
        },
        {
          "teks": "Menetapkan besaran iuran secara kaku harus dibayar penuh oleh semua warga tanpa pengecualian demi keadilan formal.",
          "skor": 1
        },
        {
          "teks": "Langsung mendukung keringanan iuran warga tersebut dan menyarankan sisa kekurangannya dibebankan secara merata ke seluruh warga.",
          "skor": 2
        },
        {
          "teks": "Mempertimbangkan keringanan bagi warga tersebut dengan syarat keseluruhan target biaya acara lingkungan tetap dapat terpenuhi.",
          "skor": 3
        },
        {
          "teks": "Tetap menghormati ketetapan iuran hasil musyawarah sekaligus menerima niat baik warga tersebut sambil mengimbau warga lain yang mampu untuk berkontribusi sukarela menutup kekurangannya.",
          "skor": 5
        }
      ],
      "explanation": "Kehidupan sosial budaya Indonesia bertumpu pada musyawarah mufakat yang diimbangi solidaritas gotong royong dan empati sosial. Mempertahankan kesepakatan musyawarah sembari memfasilitasi subsidi silang sukarela bagi warga prasejahtera (skor 5) menjaga keadilan aturan sekaligus memastikan tidak ada warga yang tersisihkan karena kondisi ekonomi. Mengajak menghitung ulang anggaran (skor 4) partisipatif, namun berisiko membuka ulang kesepakatan yang sudah sah. Menerima secara bersyarat tanpa mekanisme jelas (skor 3) atau membebankan sepihak (skor 2) berpotensi memicu keberatan baru, sedangkan bersikap kaku tanpa empati (skor 1) mengabaikan nilai solidaritas.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Anda menjalin persahabatan akrab dengan salah seorang rekan di lingkungan komunitas sosial sejak lama. Suatu hari, Anda mendengar desas-desus dari kenalan lain bahwa sahabat tersebut kerap membicarakan keburukan Anda di belakang. Agar hubungan sosial tetap terjaga sehat, sikap pertama Anda adalah...",
      "pilihan": [
        {
          "teks": "Menemuinya untuk mengungkapkan rasa kecewa atas kabar yang beredar dengan nada emosional.",
          "skor": 2
        },
        {
          "teks": "Menyikapi kabar tersebut dengan menjaga jarak terlebih dahulu sambil mengamati sikapnya sehari-hari tanpa memicu konflik.",
          "skor": 3
        },
        {
          "teks": "Menemuinya secara langsung dalam suasana santai untuk mengklarifikasi maksud kabar tersebut dengan kepala dingin.",
          "skor": 4
        },
        {
          "teks": "Membalas membicarakan kekurangannya di hadapan teman-teman lain agar ia merasakan hal yang sama.",
          "skor": 1
        },
        {
          "teks": "Menelusuri dan memeriksa kebenaran informasi tersebut secara tenang sebelum mengambil kesimpulan apa pun.",
          "skor": 5
        }
      ],
      "explanation": "Kedewasaan sosial dalam masyarakat menuntut sikap cermat memeriksa fakta (*tabayyun*) agar tidak terpecah oleh kesalahpahaman atau adu domba. Menelusuri kebenaran kabar terlebih dahulu (skor 5) mencegah tuduhan keliru sebelum berhadapan langsung. Klarifikasi tatap muka secara tenang (skor 4) baik dilakukan setelah memastikan kejelasan konteksnya. Menjaga jarak atau menjauh tanpa klarifikasi (skor 3) berisiko merenggangkan silaturahmi akibat kabar yang belum tentu benar. Melampiaskan amarah (skor 2) dan membalas perbuatan negatif (skor 1) merusak etika pergaulan sosial.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sulit",
      "question_text": "Pada evaluasi bulanan, bagian tata usaha mendapati lonjakan drastis tagihan layanan komunikasi dan kuota data dinas kantor akibat banyak panggilan serta akses di luar keperluan pekerjaan. Pimpinan lalu mengumpulkan seluruh pegawai untuk menelusurinya, sementara Anda sendiri sempat memakainya saat urusan keluarga mendesak. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menyarankan agar bagian tata usaha melakukan verifikasi log pemakaian setiap pegawai guna menemukan penyebab lonjakan tagihan secara objektif.",
          "skor": 3
        },
        {
          "teks": "Berpendapat bahwa lonjakan tagihan tersebut cukup dibayarkan saja selama pagu anggaran operasional unit kerja masih mencukupi.",
          "skor": 1
        },
        {
          "teks": "Berterus terang secara jujur mengenai pemakaian fasilitas komunikasi kantor untuk keperluan pribadi tersebut, siap mengganti biayanya, serta mendukung penertiban kode akses pengguna.",
          "skor": 5
        },
        {
          "teks": "Mengusulkan kepada jajaran pimpinan agar diterapkan sistem pencatatan atau kode otorisasi per pegawai demi transparansi pemakaian fasilitas komunikasi.",
          "skor": 4
        },
        {
          "teks": "Memilih diam terlebih dahulu dan baru siap menerima sanksi apabila tim pemeriksa menemukan catatan pemakaian atas nama Anda.",
          "skor": 2
        }
      ],
      "explanation": "Integritas dalam pemanfaatan fasilitas TIK kedinasan ditunjukkan dengan pengakuan jujur atas pemakaian pribadi, kesiapan bertanggung jawab, serta dukungan pada tata kelola akses yang lebih aman (skor 5). Mengusulkan perbaikan sistem tanpa mengaku pribadi masih menyembunyikan kekeliruan diri (4 dan 3), menunggu pembuktian menunjukkan kurangnya kesadaran moral (2), dan membebankan ke anggaran negara merupakan penyalahgunaan wewenang (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sulit",
      "question_text": "Anda dipercaya atasan merancang sistem alur formulir pelaporan daring untuk mempercepat pengumpulan data layanan wilayah. Namun pada uji coba lapangan, rancangan sistem tersebut ternyata sedikit kurang optimal menampung beberapa kondisi khusus di daerah. Langkah kreatif dan efektif Anda adalah...",
      "pilihan": [
        {
          "teks": "Membatalkan seluruh sistem pelaporan daring yang telah dibuat dan merancang ulang sistem baru sama sekali dari awal.",
          "skor": 2
        },
        {
          "teks": "Melakukan modifikasi dan penyempurnaan terarah pada bagian fitur formulir yang kurang optimal agar langsung selaras dengan kebutuhan data lapangan.",
          "skor": 5
        },
        {
          "teks": "Mengevaluasi akar kendala pada alur masukan sistem dan memikirkan cara penyempurnaan yang lebih efektif dibanding rancangan awal.",
          "skor": 4
        },
        {
          "teks": "Mengembalikan penugasan pengembangan sistem elektronik tersebut kepada atasan agar dialihkan ke pegawai lain.",
          "skor": 1
        },
        {
          "teks": "Meminta tambahan waktu kepada atasan untuk mengkaji kembali bagian rancangan formulir yang belum berjalan maksimal.",
          "skor": 3
        }
      ],
      "explanation": "Kemampuan inovasi TIK yang gesit terlihat dari kesanggupan melakukan modifikasi terukur pada bagian yang kurang optimal tanpa membuang seluruh hasil kerja yang sudah berjalan baik (skor 5). Memikirkan cara lebih efektif dan meminta waktu tambahan tetap konstruktif namun lebih lambat (4 dan 3), merombak total tidak efisien sumber daya (2), dan mengembalikan tugas mencerminkan rendahnya ketangguhan (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Anda ditunjuk menjadi ketua pelaksana kegiatan rapat kerja tahunan lintas bidang di instansi. Karena padatnya agenda koordinasi, Anda beberapa kali hampir melewatkan jadwal pertemuan penting. Rekan kerja menyarankan Anda memanfaatkan aplikasi pengelola agenda dan pengingat otomatis pada ponsel pintar. Sikap Anda seharusnya adalah...",
      "pilihan": [
        {
          "teks": "Menggali informasi mengenai fitur-fitur utama pada aplikasi pengingat yang sesuai dengan kebutuhan jadwal koordinasi harian.",
          "skor": 4
        },
        {
          "teks": "Menggunakan aplikasi pengingat tersebut sebatas untuk mencatat daftar rincian agenda tiap rapat agar tersimpan rapi.",
          "skor": 3
        },
        {
          "teks": "Segera mengunduh dan memanfaatkan aplikasi pengingat digital tersebut untuk mengatur seluruh jadwal rapat dan kegiatan kerja harian.",
          "skor": 5
        },
        {
          "teks": "Memilih tetap mencatat jadwal kegiatan secara manual pada buku agenda mingguan karena terasa lebih nyaman.",
          "skor": 1
        },
        {
          "teks": "Mencoba mengaktifkan aplikasi pengingat hanya pada saat jadwal rapat sedang terasa sangat padat saja.",
          "skor": 2
        }
      ],
      "explanation": "Pemanfaatan TIK dalam pekerjaan ditujukan untuk mengatasi kendala ketepatan waktu dan manajemen agenda. Langsung memanfaatkan aplikasi pengingat digital untuk menata seluruh jadwal kerja (skor 5) menjawab persoalan lupa jadwal secara konkret dan berkelanjutan. Baru menggali informasi fitur (skor 4) masih di tahap awal belum berupa penerapan. Memakainya sebatas merinci agenda tanpa fungsi pengingat (skor 3) maupun memakai secara situasional (skor 2) belum optimal, sementara bertahan dengan buku agenda manual (skor 1) menolak kemudahan teknologi.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Perkembangan media sosial saat ini sangat memudahkan interaksi masyarakat, namun di sisi lain kerap menjadi sarana penyebaran berita bohong, ujaran kebencian, dan gangguan privasi. Sebagai calon ASN yang bijak dalam bermedia sosial, langkah yang Anda lakukan untuk meminimalkan dampak negatif tersebut adalah...",
      "pilihan": [
        {
          "teks": "Tidak menanggapi atau ikut menyebarkan komentar provokatif dan konten negatif yang muncul di linimasa.",
          "skor": 3
        },
        {
          "teks": "Menggunakan nama samaran pada akun media sosial agar identitas pribadi tidak mudah dikenali orang lain.",
          "skor": 1
        },
        {
          "teks": "Membatasi penggunaan hanya pada platform media sosial resmi dan tepercaya sesuai keperluan informasi publik.",
          "skor": 4
        },
        {
          "teks": "Menggunakan media sosial secara produktif dan selektif untuk berbagi informasi positif, pengembangan wawasan kerja, serta menjalin silaturahmi.",
          "skor": 5
        },
        {
          "teks": "Membuat dua akun media sosial terpisah antara keperluan urusan kedinasan dan urusan pribadi.",
          "skor": 2
        }
      ],
      "explanation": "Literasi digital yang matang tecermin dari kemampuan mengarahkan penggunaan teknologi pada hal-hal positif dan produktif. Memanfaatkan media sosial untuk informasi kerja, edukasi, dan silaturahmi sehat (skor 5) memaksimalkan sisi konstruktif ruang digital. Membatasi platform tertentu (skor 4) dan tidak terpancing komentar negatif (skor 3) membantu pencegahan, namun bersifat defensif. Memisahkan akun tanpa etika konten (skor 2) maupun memakai akun anonim/samaran (skor 1) justru tidak mencerminkan tanggung jawab digital.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sulit",
      "question_text": "Instansi tempat Anda bekerja mewajibkan seluruh pegawai lapangan mengirimkan laporan pemantauan kegiatan secara daring setiap hari kerja. Sementara itu, wilayah tugas Anda sebagian besar berada di kawasan perbukitan dengan cakupan sinyal internet yang sering hilang timbul. Sikap paling solutif yang Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Mengajukan permohonan pengecualian kepada pimpinan agar tetap diperbolehkan menyerahkan laporan dalam bentuk berkas fisik manual saja.",
          "skor": 1
        },
        {
          "teks": "Berkoordinasi memohon izin pimpinan untuk mengirimkan laporan harian secara daring segera saat berada di titik bersinyal baik pada hari yang sama.",
          "skor": 5
        },
        {
          "teks": "Menyusun laporan secara luring di lokasi tugas dan meminta bantuan rekan unit di wilayah bersinyal stabil untuk membantu mengunggah sementara bila mendesak.",
          "skor": 4
        },
        {
          "teks": "Menunda pengiriman laporan harian hingga keesokan harinya ketika Anda kembali berada di kantor yang terhubung jaringan.",
          "skor": 3
        },
        {
          "teks": "Meluangkan waktu mencari lokasi dengan sinyal internet memadai di luar jalur tugas agar laporan tetap terkirim sesuai jam pelaporan.",
          "skor": 2
        }
      ],
      "explanation": "Kepatuhan pada sistem kerja berbasis teknologi harus diimbangi solusi operasional yang realistis. Memohon izin fleksibilitas waktu kirim pada hari yang sama ketika sinyal tersedia (skor 5) menjaga ketepatan laporan digital harian tanpa meninggalkan lokasi tugas atau menyalahi prosedur. Berkoordinasi dengan rekan berjaringan stabil (skor 4) juga solutif meski menyertakan perantara. Menunda hingga esok hari (skor 3) mengurangi aktualitas data harian, mencari sinyal terlalu jauh dari rute kerja (skor 2) mengganggu efisiensi lapangan, sedangkan kembali ke sistem manual (skor 1) menghambat digitalisasi instansi.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sedang",
      "question_text": "Untuk meningkatkan kecepatan layanan administrasi kepegawaian, kantor Anda baru saja mengganti perangkat lunak operasional lama dengan sistem informasi baru yang memiliki antarmuka dan alur kerja jauh berbeda. Sikap Anda bersama rekan kerja dalam menghadapi pembaruan sistem tersebut adalah...",
      "pilihan": [
        {
          "teks": "Mengajak rekan kerja berdiskusi dan mempelajari sistem baru bersama setelah jam kerja kantor selesai.",
          "skor": 3
        },
        {
          "teks": "Menunggu petugas teknologi informasi datang ke ruangan untuk mengajarkan cara pengoperasian sistem baru dari awal.",
          "skor": 1
        },
        {
          "teks": "Mencari tahu sendiri secara umum gambaran cara kerja sistem baru tersebut tanpa mempraktikkannya secara langsung.",
          "skor": 2
        },
        {
          "teks": "Mengajak rekan kerja meluangkan waktu di sela jam senggang untuk mencoba langsung fitur-fitur pengoperasian sistem baru tersebut.",
          "skor": 4
        },
        {
          "teks": "Aktif menelusuri buku panduan resmi maupun tutorial daring terkait sistem baru tersebut lalu mempelajarinya bersama rekan satu tim.",
          "skor": 5
        }
      ],
      "explanation": "Adaptasi terhadap inovasi teknologi menuntut inisiatif cepat, sumber belajar yang akurat, serta semangat berbagi pengetahuan dengan tim. Mencari panduan resmi dan mempelajarinya bersama rekan kerja (skor 5) mempercepat penguasaan kolektif secara tepat sasaran. Menunggu waktu kosong (skor 4) atau usai jam kantor (skor 3) lebih lambat karena sistem mendesak digunakan untuk layanan. Mencari tahu secara abstrak (skor 2) dan bersikap pasif menunggu diajari (skor 1) menunjukkan rendahnya kesiapan beradaptasi terhadap TIK.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sulit",
      "question_text": "Saat ini seluruh alur persuratan dan pengarsipan di unit kerja Anda dilakukan melalui sistem aplikasi daring terintegrasi. Karena baru saja beralih dari pola konvensional, Anda masih beradaptasi dan suatu hari tanpa sengaja melakukan kesalahan penginputan data krusial yang berdampak pada alur persetujuan berkas. Tindakan yang paling tepat Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Mengundang petugas atau ahli TI instansi untuk memberikan bimbingan teknis pengoperasian fitur sistem agar kesalahan tidak terulang.",
          "skor": 4
        },
        {
          "teks": "Meminta staf bidang TI memberikan paparan ulang mengenai manfaat penerapan sistem digital di ruang kerja.",
          "skor": 2
        },
        {
          "teks": "Segera melapor kepada atasan mengenai kesalahan input tersebut dan mengikuti arahan koreksi bersama pendampingan petugas ahli TI instansi.",
          "skor": 5
        },
        {
          "teks": "Berusaha memperbaiki sendiri data pada sistem tanpa melapor agar kesalahan tersebut tidak diketahui pimpinan.",
          "skor": 1
        },
        {
          "teks": "Mengajak rekan kerja yang lebih menguasai sistem tersebut untuk memeriksa penyebab kesalahan dan mencari jalan perbaikannya.",
          "skor": 3
        }
      ],
      "explanation": "Ketika terjadi kesalahan fatal pada sistem informasi resmi, tanggung jawab profesional mengharuskan pelaporan segera serta perbaikan oleh pihak yang memiliki otoritas teknis. Melapor ke atasan dan meminta pendampingan ahli TI untuk koreksi serta belajar prosedur yang benar (skor 5) mencegah kerusakan data lebih luas dan membangun kompetensi. Mengundang ahli TI untuk pelatihan teknis langsung (skor 4) sangat baik secara edukatif, namun pelaporan insiden ke pimpinan tetap krusial untuk transparansi alur persetujuan. Berdiskusi dengan rekan (skor 3) membantu sementara, materi umum manfaat TI (skor 2) tidak menyelesaikan error teknis, dan menutupi kesalahan sendiri (skor 1) berisiko memperparah kerusakan sistem.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Anda memperoleh penugasan resmi untuk mengikuti pendidikan dan pelatihan teknis selama tiga bulan di luar kota guna meningkatkan kompetensi jabatan, sementara pada saat bersamaan ibu Anda di kampung halaman sedang sakit dan membutuhkan perhatian. Keputusan paling profesional yang Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Mengusulkan kepada pimpinan agar tugas pelatihan tersebut dialihkan kepada rekan kerja lain yang tidak sedang memiliki kendala keluarga.",
          "skor": 2
        },
        {
          "teks": "Mengajukan negosiasi kepada bagian kepegawaian agar keberangkatan pelatihan Anda ditunda sampai kondisi kesehatan ibu pulih sepenuhnya.",
          "skor": 3
        },
        {
          "teks": "Tetap berangkat mengikuti pelatihan dengan sungguh-sungguh sebagai wujud tanggung jawab kedinasan serta menyempatkan pulang menjenguk ibu pada akhir pekan atau hari libur resmi.",
          "skor": 5
        },
        {
          "teks": "Tetap melaksanakan seluruh rangkaian tugas pelatihan di luar kota karena hal tersebut merupakan kewajiban amanah pekerjaan.",
          "skor": 4
        },
        {
          "teks": "Menolak surat tugas pelatihan tersebut secara langsung karena menganggap kepentingan keluarga selalu berada di atas tugas instansi.",
          "skor": 1
        }
      ],
      "explanation": "Profesionalisme ASN diuji melalui kemampuan menunaikan amanah tugas pengembangan kompetensi dengan tetap menjaga bakti kepada orang tua secara proporsional di waktu libur resmi (skor 5). Mengikuti pelatihan tanpa perhatian terjadwal sedikit kaku (4), menunda atau melimpahkan ke rekan menunjukkan kurangnya manajemen tanggung jawab (3 dan 2), dan menolak langsung surat tugas melanggar komitmen profesi (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Seorang atasan langsung di unit kerja meminta Anda memalsukan angka pengeluaran pada laporan pertanggungjawaban keuangan kegiatan agar sisa anggaran dapat dicairkan penuh. Sikap berintegritas dan profesional Anda adalah...",
      "pilihan": [
        {
          "teks": "Menolak permintaan tersebut dengan tegas, mengingatkan atasan secara santun mengenai pelanggaran hukumnya, serta melaporkan indikasi kecurangan kepada unit pengawasan berwenang.",
          "skor": 5
        },
        {
          "teks": "Berusaha menghindari tugas penyusunan laporan keuangan tersebut dengan beralasan tidak menguasai detail berkas kuitansi.",
          "skor": 3
        },
        {
          "teks": "Melaksanakan perintah tersebut dengan rasa terpaksa karena meyakini pengubahan angka pertanggungjawaban sudah sering terjadi.",
          "skor": 2
        },
        {
          "teks": "Langsung memalsukan laporan keuangan sesuai perintah karena takut dimarahi atau mendapat penilaian buruk dari atasan.",
          "skor": 1
        },
        {
          "teks": "Menolak secara tegas untuk terlibat sedikit pun dalam rekayasa laporan keuangan dan tetap menyusun data sesuai bukti transaksi riil.",
          "skor": 4
        }
      ],
      "explanation": "Menjaga integritas keuangan negara menuntut penolakan tegas, keberanian mengingatkan atasan, dan pelaporan melalui saluran pengawasan resmi agar praktik korupsi tidak berlanjut (skor 5). Menolak terlibat secara pasif melindungi diri namun membiarkan potensi pelaku mencari orang lain (4), menghindar kurang tegas (3), dan menuruti perintah ilegal menjadikan Anda turut serta dalam tindak pidana korupsi (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Anda dipercaya pimpinan masuk ke dalam tim perumus program strategis instansi yang materinya belum dipublikasikan dan bersifat sangat rahasia. Ketika makan siang bersama beberapa rekan dekat di kantor, mereka terus mendesak Anda menceritakan bocoran isi rencana tersebut. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Merasa kurang nyaman dan memilih mempercepat makan siang lalu kembali ke ruang kerja sebelum desakan berlanjut.",
          "skor": 3
        },
        {
          "teks": "Menunjukkan kemarahan di meja makan karena menganggap rekan-rekan Anda tidak menghormati integritas tugas Anda.",
          "skor": 1
        },
        {
          "teks": "Menceritakan sedikit gambaran umum secara samar saja tanpa rincian teknis demi menjaga keharmonisan pertemanan.",
          "skor": 2
        },
        {
          "teks": "Tetap teguh menjaga kerahasiaan seluruh informasi program strategis tersebut meski rekan-rekan dekat mendesak, serta mengalihkan topik pembicaraan secara santun.",
          "skor": 5
        },
        {
          "teks": "Menolak menceritakan isinya dengan menjelaskan baik-baik bahwa informasi tersebut terikat kode etik kerahasiaan kedinasan.",
          "skor": 4
        }
      ],
      "explanation": "Integritas dan profesionalisme menjaga kerahasiaan jabatan tetap kokoh di tengah tekanan kedekatan sosial dengan sikap tenang dan santun (skor 5). Menjelaskan aturan secara baik-baik tetap profesional (4), menghindar cepat kurang komunikatif (3), membocorkan sebagian kecil tetap merupakan pelanggaran kerahasiaan (2), dan bereaksi marah merusak hubungan antarkolega (1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "mudah",
      "question_text": "Kepala bidang Anda dikenal sangat disiplin dan teliti dalam memantau kinerja staf. Suatu pekan, beliau mendapat tugas perjalanan dinas ke luar kota selama lima hari sehingga tidak berada di kantor. Melihat kesempatan itu, seorang rekan kerja mengajak Anda bersantai sejenak dan menunda target harian karena tidak ada pengawasan langsung. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengingatkan rekan tersebut dengan tenang bahwa tugas tetap harus selesai sebelum tenggat meski pimpinan sedang dinas luar.",
          "skor": 3
        },
        {
          "teks": "Menolak ajakan tersebut secara santun serta tetap duduk di meja kerja menyelesaikan seluruh tugas harian sesuai standar operasional prosedur.",
          "skor": 5
        },
        {
          "teks": "Mengikuti ajakan rekan untuk bersantai sepanjang hari dengan anggapan pekerjaan dapat dikejar menjelang kepulangan atasan.",
          "skor": 1
        },
        {
          "teks": "Tetap fokus menuntaskan target pekerjaan pribadi tepat waktu tanpa terpengaruh oleh suasana santai rekan sekitar.",
          "skor": 4
        },
        {
          "teks": "Merasa ragu-ragu lalu bekerja lebih lambat dari biasanya karena melihat sebagian besar rekan kerja lainnya bersantai.",
          "skor": 2
        }
      ],
      "explanation": "Profesionalisme dan integritas kerja diuji terutama ketika tidak ada pengawasan langsung dari pimpinan. Menolak ajakan bersantai secara santun sambil tetap menuntaskan pekerjaan sesuai prosedur (skor 5) menjaga disiplin diri sekaligus hubungan baik. Tetap fokus bekerja sendiri (skor 4) baik, namun belum menunjukkan ketegasan menolak pengaruh negatif rekan. Sekadar mengingatkan tanpa ketegasan sikap kerja sendiri (skor 3) kurang lengkap, sedangkan ragu lalu ikut melambat (skor 2) dan menunda pekerjaan (skor 1) melanggar etos kerja.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Pagi ini Anda dijadwalkan memimpin rapat penting penandatanganan nota kesepahaman dengan mitra lintas lembaga yang tidak dapat ditunda. Di tengah perjalanan menuju kantor, Anda melihat kecelakaan lalu lintas ringan yang sudah dikerumuni warga dan tampak petugas kepolisian lalu lintas telah tiba menangani korban. Tindakan yang paling tepat Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Memastikan situasi di lokasi sudah tertangani oleh petugas dan warga yang menolong, lalu segera melanjutkan perjalanan agar hadir tepat waktu dalam rapat penting.",
          "skor": 5
        },
        {
          "teks": "Melambatkan kendaraan sebentar guna menanyakan apakah masih dibutuhkan bantuan mendesak sebelum bergegas menuju kantor.",
          "skor": 3
        },
        {
          "teks": "Mengabaikan agenda rapat penting dan memilih ikut mengawal proses evakuasi ke kantor polisi tanpa menghubungi kantor atau mitra.",
          "skor": 1
        },
        {
          "teks": "Berhenti sejenak di pinggir jalan untuk mencari tahu kronologi kejadian di lokasi meskipun jadwal rapat sudah sangat mepet.",
          "skor": 2
        },
        {
          "teks": "Tetap melanjutkan perjalanan dengan tertib agar komitmen pertemuan strategis bersama mitra tidak mengalami keterlambatan.",
          "skor": 4
        }
      ],
      "explanation": "Salah satu indikator profesionalisme adalah ketepatan waktu dan kemampuan menentukan skala prioritas tugas secara rasional. Memastikan kondisi korban sudah aman ditangani pihak berwenang lalu segera melanjutkan perjalanan agar rapat strategis tidak terlambat (skor 5) memadukan kepekaan situasi dan tanggung jawab jabatan. Langsung melanjutkan perjalanan fokus rapat (skor 4) tepat waktu namun kurang mengecek kepastian penanganan. Bertanya singkat (skor 3) berisiko terlambat, berhenti karena penasaran (skor 2) tidak efektif, dan meninggalkan rapat sepihak saat sudah ada petugas berwenang (skor 1) mengabaikan tanggung jawab dinas.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Saat pelaksanaan kegiatan penyuluhan publik di lapangan berlangsung, salah satu koordinator seksi tidak dapat hadir mendadak karena mengalami musibah keluarga sehingga sebagian tugas teknis lapangan terancam terbengkalai. Sebagai anggota tim pelaksana, sikap yang paling tepat Anda tunjukkan adalah...",
      "pilihan": [
        {
          "teks": "Melapor segera kepada ketua pelaksana dan menjalankan penuh arahan pembagian tugas pengganti yang ditetapkan oleh ketua.",
          "skor": 4
        },
        {
          "teks": "Mengusulkan nama rekan lain yang dianggap cakap untuk ditunjuk oleh ketua pelaksana tanpa menawarkan keterlibatan diri sendiri.",
          "skor": 2
        },
        {
          "teks": "Langsung mengerjakan tugas mendesak yang terbengkalai tersebut agar acara tidak terganggu, lalu segera melapor kepada ketua pelaksana.",
          "skor": 3
        },
        {
          "teks": "Segera mengusulkan rencana langkah penanganan yang diperlukan dan meminta persetujuan ketua pelaksana sebelum mengeksekusi tugas pengganti sesuai wewenang.",
          "skor": 5
        },
        {
          "teks": "Menunggu rekan lain mengambil inisiatif karena penanganan tugas koordinator lain bukan merupakan bagian tanggung jawab Anda.",
          "skor": 1
        }
      ],
      "explanation": "Profesionalisme mencakup inisiatif konstruktif yang tetap menghormati batas wewenang dan tata kelola tim. Mengajukan rekomendasi langkah solusi dan meminta persetujuan ketua pelaksana sebelum bertindak (skor 5) memadukan kepedulian cepat dengan kepatuhan prosedur. Menjalankan arahan ketua secara pasif (skor 4) tertib prosedur tetapi kurang proaktif memberi solusi. Langsung bertindak tanpa koordinasi awal (skor 3) berisiko menimbulkan tumpang tindih peran. Menunjuk orang lain saja (skor 2) dan bersikap acuh (skor 1) tidak membantu penyelesaian krisis operasional.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Anda tengah fokus menyusun laporan evaluasi capaian program yang harus dipaparkan di hadapan pimpinan dua minggu lagi. Tiba-tiba atasan meminta Anda menyelesaikan berkas mendesak milik rekan satu divisi yang baru saja mengundurkan diri, dengan batas waktu penyerahan dua hari ke depan. Langkah yang Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Berdiskusi secara profesional dengan atasan mengenai penyesuaian jadwal atau dukungan sumber daya agar kualitas kedua tugas tetap terjaga.",
          "skor": 4
        },
        {
          "teks": "Menunda pengerjaan tugas alihan tersebut karena bukan merupakan uraian tugas pokok pribadi sejak awal.",
          "skor": 1
        },
        {
          "teks": "Segera memulai pengerjaan tugas alihan tersebut dengan mengatur ulang skala prioritas waktu agar selesai maksimal dan tepat tenggat.",
          "skor": 5
        },
        {
          "teks": "Segera mengerjakan tugas baru tersebut semampunya karena waktunya sangat mendesak sambil tetap mempertahankan jadwal laporan utama.",
          "skor": 3
        },
        {
          "teks": "Meminta bantuan rekan lain untuk menyelesaikan sebagian tugas baru tersebut agar beban pekerjaan pribadi tidak terlalu berat.",
          "skor": 2
        }
      ],
      "explanation": "Kesigapan menerima penugasan tambahan dalam kondisi darurat organisasi serta mengaturnya secara sistematis merupakan ciri pegawai profesional. Langsung memulai dengan pengaturan prioritas kerja agar selesai optimal tepat waktu (skor 5) menunjukkan ketangguhan dan dedikasi tinggi. Berdiskusi soal penyesuaian dengan atasan (skor 4) baik secara komunikasi, namun menunjukkan sedikit keraguan sebelum memulai. Bekerja seadanya (skor 3), mengalihkan tanggung jawab ke orang lain (skor 2), dan menunda dengan dalih bukan tugas pokok (skor 1) mengganggu kelangsungan kinerja instansi.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Pimpinan instansi menginstruksikan agar seluruh staf pada unit layanan internasional dan penanaman modal mampu menguasai kemampuan komunikasi bahasa asing secara aktif guna meningkatkan kualitas layanan. Sebagai kepala bagian kepegawaian dan pengembangan SDM, kebijakan pelatihan yang paling profesional Anda rancang adalah...",
      "pilihan": [
        {
          "teks": "Menyelenggarakan pelatihan intensif pada akhir pekan atau hari libur nasional agar seluruh pegawai dapat hadir serentak.",
          "skor": 2
        },
        {
          "teks": "Menyelenggarakan pelatihan rutin pada jam istirahat siang agar jam kerja pagi hingga sore tidak berkurang.",
          "skor": 1
        },
        {
          "teks": "Menyelenggarakan program pelatihan bahasa asing secara bertahap dan bergiliran agar kompetensi staf meningkat tanpa mengganggu kinerja layanan harian.",
          "skor": 5
        },
        {
          "teks": "Menjadwalkan kelas pelatihan bahasa asing secara terstruktur di luar jam layanan reguler dengan tetap memperhatikan waktu istirahat pegawai.",
          "skor": 4
        },
        {
          "teks": "Menghimpun usulan dan kesepakatan jadwal dari seluruh staf terlebih dahulu sebelum menyusun jadwal pelatihan.",
          "skor": 3
        }
      ],
      "explanation": "Pengelolaan SDM profesional harus menyeimbangkan peningkatan kompetensi pegawai, kelancaran layanan publik, serta penghormatan terhadap hak waktu istirahat pegawai. Pelatihan bertahap secara bergiliran (skor 5) memastikan layanan berjalan normal sekaligus menghormati hak libur dan istirahat staf. Penjadwalan usai jam kerja (skor 4) efektif namun melelahkan setelah bekerja penuh. Menyerahkan jadwal pada jajak pendapat (skor 3) memperlambat eksekusi, sementara mengambil hari libur (skor 2) atau jam istirahat (skor 1) melanggar hak waktu pemulihan pegawai.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Saat tim Anda menyalurkan bantuan logistik negara pascabencana secara merata di sebuah wilayah, oknum kelompok garis keras setempat mendesak tim hanya menyalurkan bantuan kepada anggota kelompok mereka dan mengancam memboikot distribusi apabila warga kelompok lain tetap diberi bagian. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Tetap menyalurkan bantuan secara adil sesuai data warga terdampak tanpa diskriminasi, melakukan pendekatan komunikasi yang tenang, serta segera berkoordinasi dengan aparat keamanan demi kelancaran distribusi.",
          "skor": 5
        },
        {
          "teks": "Memenuhi tuntutan kelompok tersebut sepenuhnya dengan menunda penyaluran bantuan kepada warga lain demi menghindari perselisihan.",
          "skor": 1
        },
        {
          "teks": "Menyerahkan sebagian porsi bantuan kepada kelompok penekan tersebut agar suasana lekas kondusif dan tim Anda dapat segera bergeser.",
          "skor": 2
        },
        {
          "teks": "Menghentikan sementara proses pembagian di titik tersebut sambil menunggu pengawalan aparat keamanan tiba sebelum melanjutkan distribusi merata.",
          "skor": 3
        },
        {
          "teks": "Menyampaikan secara tegas kepada oknum tersebut bahwa bantuan negara wajib dibagikan merata atas dasar kemanusiaan tanpa memandang kelompok.",
          "skor": 4
        }
      ],
      "explanation": "Menjaga keadilan distribusi bantuan negara di bawah ancaman kelompok intoleran menuntut keteguhan prinsip anti-diskriminasi, ketenangan komunikasi, serta pengamanan prosedural bersama aparat (skor 5). Menolak tegas tanpa segera berkoordinasi pengamanan meningkatkan risiko keselamatan tim (4), menunda sambil menunggu aparat menjaga keadilan meski memperlambat bantuan darurat (3), dan tunduk pada tekanan kelompok melanggar prinsip keadilan sosial (2 dan 1).",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Akhir-akhir ini marak kekhawatiran mengenai penyusupan ideologi transnasional radikal melalui berbagai media informasi dan komunitas intelektual yang berpotensi mengikis jati diri bangsa. Sebagai calon ASN yang mengabdi pada NKRI, cara pandang dan sikap mendasar Anda dalam membentengi diri serta lingkungan kerja adalah...",
      "pilihan": [
        {
          "teks": "Menjadikan nilai-nilai Pancasila sebagai fondasi utama dalam mengembangkan ilmu pengetahuan, teknologi, serta kebijakan kerja yang berkeindonesiaan.",
          "skor": 5
        },
        {
          "teks": "Mengusulkan pengadaan kajian ilmiah khusus untuk memetakan jenis-jenis paham transnasional yang berkembang di era modern.",
          "skor": 2
        },
        {
          "teks": "Menyeleksi secara kritis setiap informasi tentang gerakan radikal dan hanya membagikan materi edukasi resmi dari lembaga negara yang kredibel.",
          "skor": 3
        },
        {
          "teks": "Mendorong penguatan pendidikan wawasan kebangsaan secara menyeluruh di lingkungan masyarakat dan instansi agar daya tangkal terhadap paham radikal meningkat.",
          "skor": 4
        },
        {
          "teks": "Menyerahkan sepenuhnya urusan penjagaan ideologi negara kepada aparat keamanan dan lembaga intelijen pemerintah.",
          "skor": 1
        }
      ],
      "explanation": "Benteng terdalam melawan ekspansi ideologi transnasional ekstrem adalah menjadikan Pancasila sebagai paradigma hidup sekaligus landasan pengembangan IPTEK dan tata kelola pemerintahan (skor 5). Pendidikan wawasan kebangsaan secara menyeluruh (skor 4) memperkuat kesadaran kolektif sebagai langkah lanjutan. Selektif menyebarkan informasi edukasi resmi (skor 3) dan mengadakan kajian (skor 2) bersifat mendukung, sedangkan bersikap pasif menyerahkan tanggung jawab semata kepada pemerintah/aparat (skor 1) melemahkan kesadaran bela negara.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Anda baru saja pindah ke lingkungan perumahan baru dan mulai akrab dengan seorang tetangga yang ramah. Suatu sore, dalam obrolan santai ia berterus terang bahwa beberapa tahun lalu pernah terlibat dalam organisasi terlarang yang berupaya mengganti dasar negara Pancasila, namun kini ia sudah keluar karena menyadari kekeliruan dan bahayanya gerakan tersebut. Sikap Anda yang paling tepat adalah...",
      "pilihan": [
        {
          "teks": "Menjaga jarak dan mulai menjauhi pergaulan dengannya karena khawatir ia masih menyimpan pemahaman radikal secara diam-diam.",
          "skor": 2
        },
        {
          "teks": "Mendengarkan ceritanya dengan kepala dingin tanpa menghakimi maupun menyebarluaskan pengakuannya sebagai bahan gunjingan warga.",
          "skor": 4
        },
        {
          "teks": "Menjaga kewaspadaan wajar sambil berkonsultasi secara bijak dengan pengurus RT untuk memantau reintegrasi sosialnya di lingkungan.",
          "skor": 3
        },
        {
          "teks": "Tetap bersikap ramah, merangkulnya dalam pergaulan warga yang sehat, dan mengajaknya berdiskusi positif tentang nilai Pancasila agar tidak kembali terjerumus.",
          "skor": 5
        },
        {
          "teks": "Langsung memaki serta mendesaknya pindah dari kompleks perumahan karena memiliki catatan pernah terlibat organisasi terlarang.",
          "skor": 1
        }
      ],
      "explanation": "Pendekatan deradikalisasi dan reintegrasi sosial yang efektif mengedepankan perangkulan manusiawi terhadap mantan anggota yang telah sadar agar tidak merasa dikucilkan dan kembali ke kelompok ekstrem. Merangkul dan menguatkan dialog positif tentang Pancasila (skor 5) berkontribusi nyata mencegah kambuhnya paparan radikalisme. Mendengarkan baik tanpa menyebar aib (skor 4) menjaga ketenangan sosial, dan melapor waspada ke RT secara wajar (skor 3) tetap memperhatikan keamanan lingkungan. Mengucilkan (skor 2) maupun memaki dan mengusir (skor 1) justru berisiko mendorongnya kembali teralienasi ke jaringan lama.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Sebagai orang tua dengan anak-anak usia sekolah di era keterbukaan informasi digital tanpa batas, Anda menyadari tingginya risiko paparan konten intoleransi, kebencian, dan paham radikal melalui gawai serta media sosial. Langkah paling mendasar dan efektif untuk membentengi anak-anak sejak dini adalah...",
      "pilihan": [
        {
          "teks": "Memantau lingkungan pergaulan anak dengan lebih selektif mengenal teman bermain dan komunitas aktivitasnya di luar sekolah.",
          "skor": 2
        },
        {
          "teks": "Mengajarkan nilai cinta tanah air, kebinekaan, dan sikap toleransi antarumat beragama dalam keteladanan keseharian keluarga.",
          "skor": 4
        },
        {
          "teks": "Mengaktifkan fitur kontrol orang tua dan penyaring konten pada gawai anak serta mendampingi aktivitas berselancar mereka di internet.",
          "skor": 3
        },
        {
          "teks": "Menanamkan pemahaman nilai keagamaan yang moderat, damai, dan menghargai sesama, dipadukan dengan semangat kebangsaan serta dialog terbuka.",
          "skor": 5
        },
        {
          "teks": "Melarang anak menggunakan ponsel pintar maupun mengakses internet sama sekali hingga mencapai usia dewasa.",
          "skor": 1
        }
      ],
      "explanation": "Ketahanan paling kokoh terhadap propaganda radikalisme berasal dari kesadaran dan pemahaman nilai yang tertanam kuat di dalam diri anak sendiri. Membekali anak pemahaman agama yang moderat dan damai disertai semangat kebangsaan (skor 5) serta keteladanan toleransi dan kebinekaan (skor 4) membangun filter internal yang permanen. Pembatasan teknis gawai (skor 3) dan pemantauan teman bermain (skor 2) berfungsi sebagai pendukung eksternal, sedangkan melarang total akses teknologi (skor 1) tidak realistis di era pembelajaran modern.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Anda dan seorang rekan kerja ditugaskan pada pos layanan kesehatan masyarakat terpadu di desa binaan: Anda di loket pendataan awal, sedangkan rekan Anda bertugas di loket pemeriksaan dasar. Beberapa saat kemudian Anda melihat rekan tersebut melayani seorang warga secara ketus dan enggan membantu hanya karena ia mengetahui warga tersebut memiliki aliran keyakinan yang berbeda dengannya. Sikap tegas Anda adalah...",
      "pilihan": [
        {
          "teks": "Memanggil warga tersebut dengan santun untuk dibantu proses lanjutannya di loket Anda sembari menenangkan situasi pelayanan.",
          "skor": 4
        },
        {
          "teks": "Memilih diam di tempat dan meneruskan pendataan antrean berikutnya seakan tidak melihat kejadian diskriminatif tersebut.",
          "skor": 2
        },
        {
          "teks": "Segera mengambil alih penanganan loket pemeriksaan dasar tersebut sementara waktu agar warga terlayani dengan ramah dan sepenuh hati tanpa diskriminasi.",
          "skor": 5
        },
        {
          "teks": "Membiarkan sikap rekan Anda tersebut karena menganggap setiap petugas berhak memiliki kedekatan pribadi dengan golongan tertentu.",
          "skor": 1
        },
        {
          "teks": "Mengambil alih pelayanan terhadap warga tersebut meskipun dalam hati merasa canggung menegur rekan kerja Anda di depan umum.",
          "skor": 3
        }
      ],
      "explanation": "ASN berfungsi sebagai perekat dan pemersatu bangsa yang wajib menjamin pelayanan publik bebas dari segala bentuk intoleransi dan diskriminasi paham. Segera mengambil alih tugas pelayanan pada loket terkait dengan ramah dan sepenuh hati (skor 5) menjamin hak warga sekaligus mematuhi alur loket layanan secara tepat. Memindahkan warga ke loket pendataan awal (skor 4) menyelesaikan masalah warga namun sedikit menyimpang dari pembagian fungsi loket. Melayani dengan perasaan terpaksa (skor 3) mengurangi keikhlasan, sedangkan diam saja (skor 2) atau membenarkan diskriminasi (skor 1) mencederai prinsip anti-radikalisme.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "mudah",
      "question_text": "Dalam rapat warga di kelurahan tempat Anda tinggal, ketua RW mengusulkan pengaktifan kembali kegiatan silaturahmi rutin dan kenduri warga lintas RT setiap bulan untuk mempererat persaudaraan sekaligus mencegah masuknya pengaruh paham radikal dan intoleran di lingkungan tempat tinggal. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Memilih diam tidak berpendapat dalam rapat karena merasa kegiatan warga tidak berdampak langsung pada pekerjaan kantor Anda.",
          "skor": 2
        },
        {
          "teks": "Menyetujui usulan tersebut dengan lapang dada meskipun Anda sebenarnya tidak terbiasa dengan format tradisi pertemuan lingkungan tersebut.",
          "skor": 3
        },
        {
          "teks": "Menolak usulan tersebut secara langsung dan meninggalkan rapat karena menganggap pertemuan warga hanya membuang waktu.",
          "skor": 1
        },
        {
          "teks": "Menyetujui penuh usulan tersebut dan berkomitmen hadir berpartisipasi aktif demi memperkuat kerukunan serta ketahanan warga melawan radikalisme.",
          "skor": 5
        },
        {
          "teks": "Mendukung gagasan tersebut dan bersedia menghadiri pertemuan rutin sebagai wujud kepedulian menjaga keakraban bertetangga.",
          "skor": 4
        }
      ],
      "explanation": "Penguatan kohesi sosial dan kearifan lokal seperti gotong royong serta silaturahmi warga terbukti efektif membendung infiltrasi paham eksklusif dan radikal di tingkat akar rumput. Mendukung penuh dan berpartisipasi aktif demi tujuan pencegahan radikalisme (skor 5) menunjukkan kesadaran kebangsaan yang kuat. Hadir demi keakraban umum (skor 4) maupun menerima meski kurang terbiasa (skor 3) juga positif. Bersikap apatis (skor 2) dan menolak sambil meninggalkan rapat (skor 1) memperlemah solidaritas sosial warga.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Pada saat upacara peringatan Hari Kemerdekaan 17 Agustus di halaman instansi, Anda berdiri tepat di sebelah rekan kerja yang juga merupakan teman dekat Anda. Ketika komandan upacara memberi aba-aba penghormatan kepada bendera Merah Putih, rekan Anda tersebut sengaja diam tidak memberi hormat dan berbisik bahwa perbuatan itu bertentangan dengan keyakinannya. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Melaporkan kejadian tersebut secara berjenjang dan mengusulkan kepada pimpinan agar rekan kerja tersebut diberikan pembinaan ideologi Pancasila serta wawasan kebangsaan.",
          "skor": 5
        },
        {
          "teks": "Membiarkan tindakan rekan tersebut karena menganggapnya sebagai hak kebebasan berekspresi setiap individu.",
          "skor": 2
        },
        {
          "teks": "Mengajak rekan Anda berdiskusi baik-baik usai upacara mengenai makna penghormatan bendera sebagai simbol persatuan negara tanpa bertentangan dengan nilai agama.",
          "skor": 3
        },
        {
          "teks": "Mendukung pandangan rekan tersebut dengan ikut tidak memberi hormat kepada bendera Merah Putih.",
          "skor": 1
        },
        {
          "teks": "Melaporkan perilaku rekan kerja tersebut kepada atasan langsung agar segera dipanggil dan dimintai klarifikasi kedinasan.",
          "skor": 4
        }
      ],
      "explanation": "Menolak menghormati simbol negara dengan alasan ideologis merupakan salah satu indikator awal paparan paham intoleran atau radikal di lingkungan ASN. Melaporkan secara berjenjang disertai usulan solusi pembinaan ideologi Pancasila (skor 5) memadukan ketegasan penegakan disiplin ASN dengan pendekatan pemulihan ideologis. Melapor untuk klarifikasi atasan (skor 4) tegas, sementara mengajak berdiskusi personal saja tanpa pembinaan kelembagaan (skor 3) berisiko tidak tuntas. Membiarkan atas nama kebebasan (skor 2) dan ikut menolak hormat bendera (skor 1) bertentangan dengan sumpah setia ASN pada Pancasila dan UUD 1945.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Lingkungan kantor Anda mendadak digemparkan oleh kabar berantai yang menuding salah seorang pegawai telah terpapar jaringan paham radikal. Pimpinan sangat terkejut mendengar isu tersebut dan berencana menggelar rapat internal esok hari untuk menghimpun usulan langkah penanganan dari para pegawai. Usulan paling tepat yang akan Anda sampaikan dalam rapat adalah...",
      "pilihan": [
        {
          "teks": "Mengusulkan agar instansi cukup menyelenggarakan acara ceramah keagamaan umum tanpa perlu menindaklanjuti kebenaran isu yang beredar.",
          "skor": 1
        },
        {
          "teks": "Mengusulkan pembentukan tim penelusuran fakta guna berkoordinasi dengan otoritas berwenang apabila memang ditemukan indikasi nyata pelanggaran ideologi.",
          "skor": 3
        },
        {
          "teks": "Mengusulkan agar pimpinan dan tim pengawas internal memverifikasi kebenaran laporan secara objektif dan rahasia terlebih dahulu sebelum menjatuhkan sanksi atau keputusan apa pun.",
          "skor": 5
        },
        {
          "teks": "Mengingatkan agar manajemen tidak tergesa-gesa menuduh pegawai tertentu karena isu berantai berpotensi merupakan kabar bohong atau fitnah.",
          "skor": 4
        },
        {
          "teks": "Mengusulkan pemberhentian tegas terhadap pegawai yang terlibat apabila hasil pemeriksaan membuktikan adanya afiliasi gerakan radikal.",
          "skor": 2
        }
      ],
      "explanation": "Penanganan isu sensitif terkait radikalisme di instansi harus menjunjung tinggi asas praduga tak bersalah, ketelitian verifikasi fakta, dan langkah hukum yang akurat agar tidak terjebak berita bohong atau fitnah. Mengusulkan verifikasi laporan secara objektif sebelum menentukan langkah lanjutan (skor 5) paling tepat secara tata kelola. Mengingatkan bahaya berita bohong (skor 4) penting sebagai prinsip dasar, koordinasi penindakan (skor 3) dan sanksi pemecatan (skor 2) tepat hanya setelah fakta terbukti, sedangkan sekadar mengadakan ceramah tanpa klarifikasi isu (skor 1) mengabaikan potensi ancaman maupun fitnah yang berkembang.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    }
  ],
  [
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Saat Anda sedang mengecek berkas di ruang pelayanan terpadu, seorang pemohon tiba-tiba mendatangi meja layanan dan meluapkan kemarahan dengan kata-kata kasar karena berkas permohonannya minggu lalu mengalami kekeliruan input. Tindakan yang paling tepat Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Meminta pemohon tersebut meredakan nada bicaranya dan menegurnya agar tidak menggunakan kata-kata kasar di kantor pelayanan.",
          "skor": 1
        },
        {
          "teks": "Tetap berusaha tersenyum dan menyimak seluruh keluhannya hingga kemarahannya mereda sebelum memberi tanggapan.",
          "skor": 3
        },
        {
          "teks": "Mengendalikan emosi, menanyakan pokok permasalahan secara profesional, dan mengarahkannya ke prosedur perbaikan data.",
          "skor": 4
        },
        {
          "teks": "Menyampaikan permohonan maaf atas ketidaknyamanan yang dialami, mendengarkan keluhannya dengan tenang, lalu segera membantu menelusuri dan memperbaiki kekeliruan berkas.",
          "skor": 5
        },
        {
          "teks": "Menjelaskan bahwa kesalahan minggu lalu bukan ditangani oleh Anda, namun tetap membantu mencatat keluhannya.",
          "skor": 2
        }
      ],
      "explanation": "Menghadapi keluhan warga dengan ketenangan, empati, dan tanggung jawab institusional merupakan inti pelayanan publik. Meminta maaf atas ketidaknyamanan layanan instansi, mendengarkan dengan saksama, dan langsung menindaklanjuti perbaikan (skor 5) meredam emosi warga sekaligus menyelesaikan masalah. Menahan emosi dan menanyakan pokok masalah (skor 4) profesional, tetapi kurang menyentuh pengakuan empatik berupa permintaan maaf. Sekadar tersenyum dan menyimak tanpa aksi cepat (skor 3) kurang tuntas. Melempar kesalahan ke petugas lain (skor 2) melemahkan citra layanan satu pintu, dan menegur balik di tengah emosi (skor 1) berpotensi memperkeruh suasana.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Anda bertugas di loket pelayanan administrasi kependudukan kecamatan. Sepuluh menit menjelang loket pelayanan ditutup pada sore hari, seorang warga dari dusun terpencil datang membawa berkas permohonan yang sudah lengkap untuk diproses hari itu juga. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Tetap menyambut dengan ramah dan melayani permohonan warga tersebut sesuai standar pelayanan hingga tuntas.",
          "skor": 5
        },
        {
          "teks": "Menerima berkasnya untuk diperiksa singkat dan menjanjikan penyelesaian pencetakan dokumen pada hari kerja berikutnya.",
          "skor": 3
        },
        {
          "teks": "Meminta maaf dan menyarankan warga tersebut datang kembali keesokan paginya karena waktu layanan hampir habis.",
          "skor": 2
        },
        {
          "teks": "Segera menutup loket pelayanan dengan alasan sistem komputer sudah harus dimatikan menjelang jam pulang.",
          "skor": 1
        },
        {
          "teks": "Melayani proses verifikasi berkas dengan cekatan agar dapat selesai sebelum atau tepat saat jam pelayanan berakhir.",
          "skor": 4
        }
      ],
      "explanation": "Selama masih berada dalam rentang jam kerja operasional, petugas wajib memberikan pelayanan optimal tanpa menurunkan kualitas layanan. Melayani dengan ramah dan sesuai standar operasional hingga tuntas (skor 5) mencerminkan dedikasi penuh kepada masyarakat, terlebih bagi warga dari wilayah jauh. Melayani dengan tergesa agar cepat pulang (skor 4) masih baik, namun berisiko mengurangi ketelitian dan keramahan. Menunda pencetakan ke esok hari padahal masih sempat diproses (skor 3) menyulitkan warga yang tinggal jauh. Menolak sebelum jam tutup (skor 2 dan skor 1) melanggar komitmen jam operasional pelayanan publik.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Ketika Anda melintas di koridor kantor, seorang tamu dari instansi mitra daerah lain menyapa dan bertanya mengenai letak ruang kerja kepala bagian karena saat itu petugas resepsionis sedang mengantar surat ke lantai atas. Sikap Anda yang paling mencerminkan keramahtamahan pelayanan adalah...",
      "pilihan": [
        {
          "teks": "Menyarankan tamu tersebut bertanya ke petugas bagian administrasi di meja sebelah karena Anda sedang menuju ruang rapat.",
          "skor": 2
        },
        {
          "teks": "Mempersilakan tamu tersebut menunggu sebentar lalu memanggil petugas keamanan atau tata usaha terdekat untuk mendampinginya ke ruangan yang dimaksud.",
          "skor": 4
        },
        {
          "teks": "Berpura-pura tidak mendengar dan segera menjauh agar tidak terhambat oleh keperluan tamu tersebut.",
          "skor": 1
        },
        {
          "teks": "Menyambut tamu tersebut dengan ramah dan meluangkan waktu sejenak untuk mengantarkannya langsung hingga ke depan ruang kepala bagian.",
          "skor": 5
        },
        {
          "teks": "Menjelaskan arah menuju ruang kepala bagian secara rinci dengan patokan koridor dan lantai yang mudah diingat.",
          "skor": 3
        }
      ],
      "explanation": "Sikap proaktif melayani kebutuhan tamu menunjukkan budaya kerja instansi yang ramah dan terbuka. Mengantarkan langsung tamu hingga ke ruangan tujuan (skor 5) memberikan kepastian serta pengalaman pelayanan terbaik. Memastikan ada petugas yang mendampingi (skor 4) juga menjaga kenyamanan tamu. Memberi petunjuk arah secara verbal (skor 3) membantu namun berisiko membuat tamu masih bingung jika gedung luas. Mengalihkan kepada orang lain karena kesibukan (skor 2) kurang proaktif, dan menghindar (skor 1) sangat tidak etis.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Sepulang bertugas, Anda mampir ke gerai pelayanan publik terpadu atau fasilitas umum yang sedang ramai pengunjung sehingga barisan antrean cukup panjang. Saat berada di tengah antrean, Anda melihat seorang ibu hamil tua berdiri beberapa urutan di belakang Anda dengan wajah tampak sangat kelelahan. Sikap yang sebaiknya Anda tunjukkan adalah...",
      "pilihan": [
        {
          "teks": "Tetap bertahan pada posisi antrean karena Anda juga lelah setelah seharian bekerja di kantor.",
          "skor": 1
        },
        {
          "teks": "Memberikan tempat duduk Anda sambil ikut menginformasikan kepada petugas layanan bahwa ada ibu hamil yang membutuhkan prioritas.",
          "skor": 3
        },
        {
          "teks": "Meminta pengantre yang berdiri di barisan paling depan untuk memberikan posisinya kepada ibu hamil tersebut.",
          "skor": 2
        },
        {
          "teks": "Mempersilakan ibu hamil tersebut mengambil nomor antrean Anda dan Anda memilih mengantre ulang di belakang.",
          "skor": 4
        },
        {
          "teks": "Menawarkan secara langsung untuk bertukar posisi antrean dengan ibu hamil tersebut agar beliau segera mendapatkan pelayanan.",
          "skor": 5
        }
      ],
      "explanation": "Kepedulian terhadap kelompok rentan di ruang publik harus diwujudkan tanpa mengorbankan hak orang lain. Bertukar posisi antrean langsung dengan ibu hamil tersebut (skor 5) memberikan prioritas nyata secara tertib tanpa menambah beban pengantre di depan. Memberikan giliran Anda lalu mengantre ulang di belakang (skor 4) juga sangat mulia meski sedikit kurang praktis dibanding bertukar tempat. Memberi kursi dan melapor ke petugas (skor 3) baik namun tidak langsung mempercepat gilirannya. Menyuruh orang lain berkorban padahal Anda sendiri mampu bertukar (skor 2) kurang bijak, dan bersikap acuh (skor 1) tidak mencerminkan empati sosial.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sedang",
      "question_text": "Anda bertugas sebagai verifikator berkas pada loket perizinan usaha mikro di dinas penanaman modal. Suatu siang, seorang rekan kerja dari bidang lain mendatangi meja Anda sambil menitipkan berkas milik kenalannya dan meminta agar berkas tersebut langsung diproses mendahului pemohon lain yang sudah antre sejak pagi. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menjelaskan dengan sopan kepada rekan tersebut bahwa seluruh pemohon diperlakukan setara, lalu memberikan nomor urut antrean resmi bagi berkas tersebut.",
          "skor": 5
        },
        {
          "teks": "Memproses berkas tersebut secara diam-diam dengan harapan menerima imbalan tanda terima kasih dari kenalan rekan Anda.",
          "skor": 1
        },
        {
          "teks": "Menolak menerima berkas titipan dan meminta pemohon yang bersangkutan datang atau mendaftar sendiri melalui mekanisme antrean resmi.",
          "skor": 3
        },
        {
          "teks": "Memproses berkas titipan tersebut terlebih dahulu karena merasa sungkan terhadap rekan satu kantor, namun berjanji tidak mengulanginya.",
          "skor": 2
        },
        {
          "teks": "Menerima berkas titipan tersebut apabila syaratnya lengkap untuk diletakkan pada urutan antrean paling akhir setelah pemohon yang hadir langsung.",
          "skor": 4
        }
      ],
      "explanation": "Asas kesamaan perlakuan dan keadilan tanpa diskriminasi melarang praktik jalan pintas dalam layanan publik. Menjelaskan prinsip keadilan secara santun dan memprosesnya sesuai nomor urut resmi (skor 5) menegakkan aturan sekaligus menjaga hubungan kerja yang sehat. Menempatkannya di urutan akhir (skor 4) masih menjaga keadilan pengantre lain, tetapi kurang menegaskan pentingnya prosedur resmi. Menolak mentah-mentah tanpa menjelaskan alur (skor 3) terkesan kaku. Mendahulukan karena sungkan (skor 2) melanggar keadilan layanan, dan mengharapkan imbalan (skor 1) termasuk pelanggaran integritas berat.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "mudah",
      "question_text": "Di ruang tunggu loket pelayanan pajak daerah, Anda memperhatikan seorang pemohon yang baru pertama kali mengurus administrasi tampak kebingungan dan berulang kali mencoret-coret formulir permohonan karena tidak memahami kolom isian yang tersedia. Tindakan yang Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Mengarahkan pemohon tersebut ke meja petugas pendamping atau satpam layanan yang sedang bertugas.",
          "skor": 3
        },
        {
          "teks": "Mempersilakan pemohon tersebut bertanya kepada warga lain yang sudah selesai mengisi formulir agar lebih cepat.",
          "skor": 2
        },
        {
          "teks": "Menghampiri dengan ramah, menanyakan kendala yang dihadapi, lalu memandu pengisian formulir kolom demi kolom dengan jelas.",
          "skor": 5
        },
        {
          "teks": "Membiarkan pemohon tersebut menyelesaikan isiannya sendiri atau mengizinkannya membawa pulang formulir meski prosedur mengharuskan pengisian di tempat.",
          "skor": 1
        },
        {
          "teks": "Memberikan lembar formulir baru sekaligus contoh panduan pengisian yang sudah terisi agar mudah diikuti.",
          "skor": 4
        }
      ],
      "explanation": "Keramahan dan kesigapan membantu pengguna layanan yang mengalami kesulitan merupakan indikator utama Pelayanan Publik. Menghampiri dan memandu langsung dengan ramah (skor 5) memberikan pendampingan efektif serta meminimalkan kesalahan pengisian. Memberi formulir baru dengan contoh panduan (skor 4) membantu, namun kurang personal dibanding membimbing langsung. Mengarahkan ke petugas lain (skor 3) tetap membantu jika Anda sedang menangani berkas kritis, tetapi kurang inisiatif. Menyuruh bertanya ke pengunjung lain (skor 2) melepas tanggung jawab, dan membiarkan tanpa arahan (skor 1) menghambat kelancaran layanan.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sulit",
      "question_text": "Anda menginisiasi layanan keliling pencetakan dokumen administrasi selama tiga hari berturut-turut di kecamatan padat penduduk. Pada hari pertama, jumlah warga yang hadir membludak hingga ratusan orang sehingga antrean menjadi tidak tertib dan banyak pemohon tidak tertangani optimal. Evaluasi terbaik yang akan Anda lakukan untuk hari kedua adalah...",
      "pilihan": [
        {
          "teks": "Membatasi kuota maksimal pendaftar harian secara ketat sejak pagi agar jumlah antrean sesuai kapasitas petugas.",
          "skor": 2
        },
        {
          "teks": "Bersiap bekerja lembur bersama tim untuk menuntaskan verifikasi berkas warga yang sudah terlanjur masuk pada hari pertama.",
          "skor": 3
        },
        {
          "teks": "Menghentikan kegiatan layanan keliling lebih awal dengan alasan kapasitas tim tidak mencukupi lonjakan warga.",
          "skor": 1
        },
        {
          "teks": "Menambah jumlah personel petugas loket serta memperpanjang jam pelayanan pada hari kedua agar seluruh warga terlayani.",
          "skor": 4
        },
        {
          "teks": "Mengevaluasi alur pelayanan dan kinerja petugas di hari pertama, lalu menyusun penataan antrean serta pembagian tugas yang lebih jelas untuk diterapkan hari berikutnya.",
          "skor": 5
        }
      ],
      "explanation": "Perbaikan mutu layanan publik memerlukan evaluasi menyeluruh terhadap proses maupun petugas pelaksana. Mengevaluasi alur hari pertama termasuk efektivitas petugas untuk memberikan arahan perbaikan konkret (skor 5) menyentuh akar persoalan tata kelola layanan. Menambah personel dan waktu (skor 4) sangat membantu, namun tidak efektif bila alurnya sendiri belum dievaluasi. Sekadar lembur (skor 3) hanya menyelesaikan dampak sementara. Membatasi kuota tanpa perbaikan alur (skor 2) mengurangi jangkauan layanan, dan menghentikan program (skor 1) menunjukkan sikap menyerah terhadap tantangan pelayanan.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Pelayanan Publik",
      "difficulty": "sulit",
      "question_text": "Anda bertugas sebagai dokter atau konselor layanan kesehatan di fasilitas pelayanan milik pemerintah. Salah seorang pasien lanjut usia selalu mengajukan banyak pertanyaan mendetail sehingga waktu konsultasinya jauh lebih lama daripada jadwal normal, sementara pasien lain sudah menunggu cukup panjang di ruang tunggu. Sikap Anda yang paling bijaksana adalah...",
      "pilihan": [
        {
          "teks": "Mempersingkat penjelasan secara sepihak dengan berbagai alasan administratif agar antrean di luar tidak mengeluh.",
          "skor": 1
        },
        {
          "teks": "Mengingatkan pasien secara halus mengenai banyaknya antrean di luar agar pertanyaan difokuskan pada keluhan utama saja.",
          "skor": 2
        },
        {
          "teks": "Tetap melayani seluruh pertanyaan pasien dengan sabar dan penuh empati sebagai wujud tanggung jawab profesi kepada setiap warga.",
          "skor": 4
        },
        {
          "teks": "Melayani keluhan inti pasien dengan penuh kesabaran sambil menuliskan catatan ringkas saran medis dan membuka kanal konsultasi lanjutan daring atau jadwal kontrol.",
          "skor": 5
        },
        {
          "teks": "Menjelaskan inti penanganan medis secara lugas dan menyarankan pasien menanyakan rincian teknis jadwal obat kepada perawat atau apoteker pendamping.",
          "skor": 3
        }
      ],
      "explanation": "Pelayanan kesehatan publik menuntut keseimbangan antara empati mendalam kepada individu dan keadilan waktu bagi seluruh pasien yang mengantre. Tetap sabar menjawab hal esensial disertai catatan tertulis dan opsi tindak lanjut terstruktur (skor 5) menjamin pemahaman pasien sekaligus menjaga kelancaran antrean. Melayani tanpa batas waktu sama sekali (skor 4) menunjukkan dedikasi tinggi namun berpotensi mengganggu hak pasien lain yang menunggu lama. Melimpahkan rincian ke perawat/apoteker (skor 3) wajar sesuai pembagian tugas, namun kurang tuntas bila pertanyaan menyangkut diagnosis dokter. Mengingatkan antrean secara terburu-buru (skor 2) dapat membuat pasien tertekan, dan memotong penjelasan dengan alasan dibuat-buat (skor 1) tidak profesional.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Anda mengamati beberapa rekan kerja satu tim mulai terbiasa pulang satu jam lebih awal sebelum jam kerja resmi berakhir, sehingga beberapa tugas koordinasi sore hari kerap terbengkalai. Langkah terbaik yang akan Anda lakukan untuk menjaga kekompakan dan kinerja tim adalah...",
      "pilihan": [
        {
          "teks": "Mengajak rekan-rekan tersebut berbicara secara pribadi dengan kepala dingin untuk mengingatkan komitmen jam kerja serta dampak pada target tim.",
          "skor": 5
        },
        {
          "teks": "Tetap konsisten bekerja menyelesaikan seluruh tugas hingga jam pulang resmi sebagaimana ketentuan instansi.",
          "skor": 3
        },
        {
          "teks": "Membiarkan mereka pulang lebih awal dan mengambil alih pekerjaan mereka yang tertinggal agar target tim tidak terganggu.",
          "skor": 2
        },
        {
          "teks": "Melaporkan kondisi ketidakdisiplinan tersebut kepada pimpinan unit agar segera diberikan pembinaan sesuai peraturan kepegawaian.",
          "skor": 4
        },
        {
          "teks": "Turut pulang lebih awal bersama mereka agar tidak dianggap sok rajin dan tetap menjaga keakraban pergaulan.",
          "skor": 1
        }
      ],
      "explanation": "Dalam menjaga jejaring kerja internal yang sehat, komunikasi persuasif antarrekan sejawat perlu didahulukan sebelum eskalasi formal. Menegur dan berdiskusi baik-baik secara personal (skor 5) menjaga harmoni tim sekaligus mendorong kesadaran kolektif. Melapor langsung ke atasan (skor 4) tegas secara aturan, namun lebih baik dilakukan apabila pendekatan antarrekan tidak membuahkan hasil. Bekerja sesuai jadwal sendiri tanpa mengingatkan (skor 3) kurang berdampak kolektif, mengambil alih beban mereka (skor 2) melanggengkan perilaku buruk, dan ikut melanggar aturan (skor 1) merusak integritas.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "mudah",
      "question_text": "Dalam rapat umum pegawai, pimpinan mengumumkan rencana penyelenggaraan bakti sosial instansi untuk warga sekitar terdampak banjir dan membagi pegawai ke dalam beberapa tim kerja dengan target masing-masing. Agar target tim Anda tercapai optimal, sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Memberikan kontribusi standar sesuai pembagian minimal mengingat beban keberhasilan ditanggung bersama seluruh tim.",
          "skor": 2
        },
        {
          "teks": "Menjaga komunikasi yang solid serta saling membantu anggota tim lain yang mengalami kendala di lapangan.",
          "skor": 4
        },
        {
          "teks": "Fokus mengejar pencapaian target pribadi tanpa memperdulikan progres atau kendala rekan satu tim.",
          "skor": 1
        },
        {
          "teks": "Berkolaborasi aktif bersama seluruh anggota tim dan memberikan kontribusi terbaik pada setiap peran yang disepakati hingga target terlampaui.",
          "skor": 5
        },
        {
          "teks": "Menyelesaikan porsi tugas pribadi terlebih dahulu agar tidak menjadi beban bagi anggota tim lainnya.",
          "skor": 3
        }
      ],
      "explanation": "Keberhasilan kerja tim menuntut sinergi antara kontribusi maksimal individu dan kolaborasi antarangota. Berkolaborasi aktif dengan kontribusi terbaik hingga target bersama terlampaui (skor 5) menunjukkan semangat kolektif yang unggul. Saling membantu dan menjaga komunikasi (skor 4) sangat mendukung kerja tim, sedangkan berfokus pada tugas pribadi saja (skor 3) belum optimal secara sinergi. Berkontribusi minimalis karena merasa ditanggung bersama (skor 2) maupun bersikap individualistis (skor 1) melemahkan efektivitas jejaring kerja.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sulit",
      "question_text": "Anda ditunjuk menjadi panitia pengumpul naskah soal seleksi internal dari para narasumber, sedangkan rekan kerja Anda bertugas di bagian penggandaan dan pengemasan soal. Setelah Anda menyerahkan seluruh naskah tepat waktu, satu hari menjelang pelaksanaan seleksi Anda mendapati rekan bagian penggandaan belum sempat memperbanyak naskah karena mendadak dirawat di rumah sakit. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Langsung berinisiatif menggandakan naskah soal sesuai jumlah peserta karena waktu pelaksanaan sudah sangat mendesak lalu melaporkannya kepada ketua.",
          "skor": 4
        },
        {
          "teks": "Segera menghubungi ketua panitia untuk melaporkan situasi darurat tersebut sekaligus meminta izin berkoordinasi mengambil alih penggandaan naskah agar seleksi berjalan lancar.",
          "skor": 5
        },
        {
          "teks": "Membiarkan persoalan tersebut ditangani seksi terkait karena penggandaan soal berada di luar rincian tugas Anda.",
          "skor": 1
        },
        {
          "teks": "Meminta rekan panitia dari seksi lain untuk segera membantu menggandakan soal karena tugas pengumpulan naskah Anda sudah selesai.",
          "skor": 2
        },
        {
          "teks": "Segera melaporkan kondisi rekan yang sakit beserta status berkas yang belum digandakan kepada ketua panitia untuk menunggu arahan penugasan.",
          "skor": 3
        }
      ],
      "explanation": "Sinergi antarpanitia dalam keadaan darurat menuntut kepekaan mengambil peran sekaligus kepatuhan terhadap garis koordinasi pimpinan. Menghubungi ketua panitia dan proaktif menawarkan bantuan penggandaan (skor 5) menjaga akuntabilitas prosedur kerahasiaan soal sekaligus menjamin kegiatan berjalan tepat waktu. Menggandakan tanpa izin awal (skor 4) sangat sigap, namun untuk dokumen seleksi yang rahasia koordinasi awal dengan ketua tetap penting. Melapor tanpa inisiatif membantu (skor 3) bersifat pasif, melempar ke rekan lain (skor 2) kurang kooperatif, dan bersikap acuh (skor 1) mengancam keberhasilan acara instansi.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Mantan atasan Anda di tempat kerja terdahulu menghubungi Anda dan meminta bantuan mencarikan seorang tenaga teknis yang kompeten untuk bergabung di proyek rintisan barunya. Padahal dahulu Anda pernah terdampak pemutusan hubungan kerja ketika unit usaha lamanya mengalami kebangkrutan. Menyikapi permintaan tersebut, sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menyatakan bersedia mencarikan kandidat apabila terdapat kesepakatan komisi atau imbalan jasa pencari kerja.",
          "skor": 2
        },
        {
          "teks": "Menghubungi beberapa mantan rekan kerja terdahulu untuk menanyakan apakah ada yang bersedia mengisi posisi tersebut.",
          "skor": 3
        },
        {
          "teks": "Tetap menjaga hubungan profesional yang baik dengan membantu mencarikan kandidat kompeten dari jaringan almamater maupun asosiasi profesi.",
          "skor": 5
        },
        {
          "teks": "Meneruskan informasi lowongan tenaga teknis tersebut kepada grup rekan seprofesi agar dapat diteruskan kepada kandidat yang berminat.",
          "skor": 4
        },
        {
          "teks": "Menolak permintaannya dengan alasan sibuk karena masih menyimpan rasa kecewa atas pengalaman pemutusan kerja dahulu.",
          "skor": 1
        }
      ],
      "explanation": "Jejaring kerja yang matang dibangun di atas sikap profesional tanpa menyimpan dendam pribadi terhadap masa lalu. Proaktif membantu mencarikan talenta terpercaya melalui jejaring profesional dan almamater (skor 5) memperluas kepercayaan dan membuka peluang kolaborasi jangka panjang. Menyebarkan info lowongan ke rekan (skor 4) juga membantu, sedangkan mencari hanya dari lingkaran mantan rekan kerja (skor 3) lingkupnya lebih sempit. Mengharapkan imbalan dalam pertolongan jejaring (skor 2) bersifat transaksional, dan menolak karena sentimen masa lalu (skor 1) memutus relasi profesional.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sedang",
      "question_text": "Dalam penyusunan laporan kajian proyek kelompok di instansi, seorang anggota tim tidak pernah hadir dalam rapat koordinasi maupun berkontribusi menyusun bagiannya. Menjelang paparan, ia justru mendesak agar namanya tetap dicantumkan sebagai penyusun aktif dan ikut mempresentasikan hasil kerja tim. Sikap Anda sebagai koordinator kelompok adalah...",
      "pilihan": [
        {
          "teks": "Menjelaskan bahwa pencantuman nama anggota tim hanya dapat diberikan secara objektif apabila yang bersangkutan ikut berpartisipasi menyusun laporan.",
          "skor": 4
        },
        {
          "teks": "Menolak pencantuman namanya karena ia sama sekali tidak terlibat dalam proses diskusi maupun penyusunan substansi laporan.",
          "skor": 3
        },
        {
          "teks": "Tetap mencantumkan namanya di sampul laporan karena merasa sungkan dan khawatir menimbulkan perselisihan di kantor.",
          "skor": 1
        },
        {
          "teks": "Memutuskan mengeluarkannya dari keanggotaan tim proyek dan melaporkan ketidakhadirannya kepada atasan secara langsung.",
          "skor": 2
        },
        {
          "teks": "Mengajak rekan tersebut berdiskusi tegas namun santun serta mengingatkannya agar segera menyelesaikan kontribusi tugas yang tersisa bila ingin namanya tetap tercantum.",
          "skor": 5
        }
      ],
      "explanation": "Jejaring kerja membutuhkan ketegasan yang tetap memberi ruang perbaikan kolaboratif secara konstruktif. Mengingatkan dengan tegas sekaligus memberi kesempatan berkontribusi pada tugas tersisa (skor 5) menegakkan keadilan kerja tim tanpa langsung memutus komunikasi. Menolak dengan penjelasan objektif (skor 4) dan menolak tegas (skor 3) menjaga integritas tim namun belum memberi solusi keterlibatan. Mengeluarkan sepihak (skor 2) berisiko memperuncing konflik sebelum pembinaan, sedangkan mencantumkan karena sungkan (skor 1) merusak keadilan tim.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "mudah",
      "question_text": "Anda ditunjuk memimpin tim kerja lintas seksi untuk merampungkan rancangan program kerja tahunan dalam tenggat waktu yang sangat singkat. Agar koordinasi efektif dan hasil pekerjaan memenuhi standar, langkah pertama yang Anda lakukan sebagai ketua tim adalah...",
      "pilihan": [
        {
          "teks": "Mengajak seluruh anggota menyamakan tempo kerja dan menyepakati jadwal pemantauan progres harian.",
          "skor": 4
        },
        {
          "teks": "Memetakan rincian pekerjaan lalu mendistribusikan tugas sesuai kompetensi dan keahlian tiap anggota agar selesai tepat waktu.",
          "skor": 5
        },
        {
          "teks": "Mengambil alih bagian tersulit untuk dikerjakan sendiri sambil menugaskan anggota mengerjakan bagian administratif.",
          "skor": 2
        },
        {
          "teks": "Meminta seluruh anggota tim meningkatkan fokus kerja keras dan bersedia lembur bila diperlukan.",
          "skor": 3
        },
        {
          "teks": "Mewajibkan seluruh anggota tim kerja lembur setiap malam tanpa mendiskusikan pembagian beban terlebih dahulu.",
          "skor": 1
        }
      ],
      "explanation": "Kepemimpinan kolaboratif dalam jejaring kerja berpusat pada penempatan orang yang tepat pada peran yang tepat (*the right person in the right place*). Membagi tugas sesuai kompetensi anggota (skor 5) mempercepat eksekusi sekaligus menjamin kualitas output. Menyamakan tempo kerja dan jadwal evaluasi (skor 4) mendukung koordinasi setelah pembagian tugas jelas. Menuntut kerja keras tanpa pemetaan peran (skor 3) kurang terarah. Mengambil semua bagian berat sendiri (skor 2) menghambat pemberdayaan tim, dan memaksa lembur sepihak (skor 1) menurunkan motivasi.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Jejaring Kerja",
      "difficulty": "sulit",
      "question_text": "Setiap gagasan kebijakan yang dibawa dalam rapat koordinasi lintas unit berpotensi memunculkan beragam tanggapan pro dan kontra. Suatu hari, rancangan usulan program yang telah disusun tim Anda memperoleh penilaian kontra dari mayoritas peserta rapat. Sikap Anda bersama tim adalah...",
      "pilihan": [
        {
          "teks": "Menganggap perbedaan pandangan sebagai dinamika wajar dalam rapat sehingga tidak perlu dipermasalahkan secara emosional.",
          "skor": 3
        },
        {
          "teks": "Mempertahankan rancangan awal dengan membalas kritik para peserta yang menolak agar kualitas kerja tim tetap diakui.",
          "skor": 1
        },
        {
          "teks": "Menerima masukan dan keberatan tersebut dengan lapang dada, kemudian segera mengajak tim mengevaluasi dan menyempurnakan rancangan usulan.",
          "skor": 5
        },
        {
          "teks": "Menerima penolakan tersebut dengan rasa kecewa, lalu berusaha memperbaiki konsep pada kesempatan berikutnya.",
          "skor": 2
        },
        {
          "teks": "Mendengarkan seluruh argumen penolakan dengan saksama untuk memetakan bagian yang dianggap belum selaras dengan kebutuhan unit lain.",
          "skor": 4
        }
      ],
      "explanation": "Kolaborasi lintas tim membutuhkan keterbukaan terhadap umpan balik dan ketangguhan memperbaiki kinerja bersama. Menerima kritik secara terbuka lalu segera melakukan evaluasi perbaikan (skor 5) menunjukkan kedewasaan berjejaring dan orientasi pada solusi bersama. Mendengarkan dengan saksama (skor 4) adalah langkah awal yang baik tetapi belum diikuti aksi evaluasi konkret. Sekadar menganggap lumrah tanpa tindak lanjut (skor 3) kurang progresif. Terbawa perasaan kecewa (skor 2) dan bersikap defensif menyerang balik pengkritik (skor 1) menghambat sinergi antarunit.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Jejaring Kerja"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Di desa tempat Anda bermukim, seorang warga pendatang yang dikenal berintegritas mencalonkan diri sebagai kepala desa bersaing dengan tokoh asli setempat. Beberapa tetangga dan kerabat Anda pesimis dan menganggap pendatang tersebut tidak layak bersaing karena bukan putra asli daerah. Sikap Anda dalam menyikapi dinamika sosial tersebut adalah...",
      "pilihan": [
        {
          "teks": "Mempelajari secara mendalam rekam jejak dan gagasan pembangunan dari seluruh kandidat tanpa melihat latar belakang asal daerahnya.",
          "skor": 4
        },
        {
          "teks": "Meyakini bahwa setiap warga negara yang memenuhi syarat administratif berhak mencalonkan diri dan dipilih secara demokratis.",
          "skor": 3
        },
        {
          "teks": "Membenarkan pandangan tetangga bahwa pemimpin daerah sebaiknya berasal dari warga asli setempat saja agar mudah diterima.",
          "skor": 1
        },
        {
          "teks": "Mengajak lingkungan sekitar dan kerabat untuk menilai secara objektif visi serta program kerja setiap calon, baik warga asli maupun pendatang.",
          "skor": 5
        },
        {
          "teks": "Menyambut hangat siapa pun calon yang ikut berkompetisi agar suasana desa tetap meriah dan rukun.",
          "skor": 2
        }
      ],
      "explanation": "Dalam masyarakat majemuk, ASN wajib menjunjung tinggi kesetaraan hak warga negara tanpa diskriminasi kedaerahan atau primordialisme. Mengajak masyarakat sekitar bersikap inklusif dengan menimbang program seluruh kandidat (skor 5) memberikan edukasi sosial yang nyata. Mempelajari program secara objektif bagi diri sendiri (skor 4) baik, namun dampaknya masih pada tingkat individu. Memahami hak konstitusional (skor 3) dan menyambut suasana kompetisi (skor 2) bersifat normatif, sedangkan mendukung sentimen kedaerahan sempit (skor 1) bertentangan dengan semangat Bhinneka Tunggal Ika.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sulit",
      "question_text": "Anda menjabat sebagai ketua perkumpulan olahraga catur di lingkungan instansi dan masyarakat sekitar. Suatu hari, seorang calon anggota penyandang disabilitas fisik datang mendaftar. Beberapa pengurus mengusulkan penolakan dengan dalih belum pernah menerima anggota disabilitas dan khawatir hal tersebut akan merepotkan manajemen perkumpulan. Langkah terbaik yang Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Mengutamakan penerimaan calon anggota yang memiliki rekam prestasi atau tingkat keahlian catur tinggi terlebih dahulu.",
          "skor": 2
        },
        {
          "teks": "Tetap menerima pendaftar penyandang disabilitas tersebut selama masih terdapat kuota dan tidak mengganggu jadwal latihan rutin.",
          "skor": 3
        },
        {
          "teks": "Menyetujui usulan pengurus untuk menolak pendaftar tersebut demi menjaga keseragaman pengelolaan klub.",
          "skor": 1
        },
        {
          "teks": "Mengajak seluruh pengurus membuka diri dan menjalin kerja sama yang setara dengan setiap pendaftar tanpa membeda-bedakan latar belakang maupun kondisi fisik.",
          "skor": 5
        },
        {
          "teks": "Membangun komunikasi inklusif dengan menerima pendaftar tersebut serta mempersiapkan dukungan aksesibilitas bersama anggota lainnya.",
          "skor": 4
        }
      ],
      "explanation": "Nilai inklusivitas dan kesetaraan tanpa diskriminasi terhadap penyandang disabilitas merupakan pilar penting kompetensi Sosial Budaya. Mengajak pengurus membangun ekosistem kerja sama tanpa memandang latar belakang apa pun (skor 5) menanamkan kesadaran kolektif yang berkelanjutan. Menerima sambil menyiapkan aksesibilitas (skor 4) sangat baik, namun langkah mengajak seluruh pengurus mengubah cara pandang merupakan kunci perubahan budaya organisasi. Menerima secara bersyarat (skor 3) masih menunjukkan keraguan, memilih berdasar alasan prestasi semata untuk menyingkirkan disabilitas (skor 2) tidak inklusif, dan menolak langsung (skor 1) bersifat diskriminatif.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Anda mendapatkan surat keputusan penempatan tugas baru di sebuah kabupaten di luar pulau yang memiliki adat istiadat, budaya kerja, dan kebiasaan sosial yang sangat berbeda dari daerah asal Anda. Ketika memasuki hari pertama di unit kerja baru, langkah paling tepat yang akan Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Berinisiatif menyapa para rekan kerja baru dengan ramah, memperkenalkan diri, serta bertanya tentang alur sistem dan budaya kerja setempat.",
          "skor": 5
        },
        {
          "teks": "Berusaha segera mencari tahu pembagian tugas pokok yang harus Anda kerjakan terlebih dahulu.",
          "skor": 3
        },
        {
          "teks": "Menunggu arahan atau panggilan resmi dari pimpinan baru mengenai pekerjaan yang harus dilaksanakan.",
          "skor": 1
        },
        {
          "teks": "Mempelajari tata aturan, dokumen pedoman operasional, serta norma kebiasaan setempat sebelum banyak berinteraksi.",
          "skor": 4
        },
        {
          "teks": "Bersikap tenang dan mengamati kebiasaan pegawai sekitar secara diam-diam selama beberapa hari pertama.",
          "skor": 2
        }
      ],
      "explanation": "Kemampuan beradaptasi lintas budaya menuntut inisiatif membangun komunikasi yang hangat dan rasa hormat terhadap lingkungan baru. Menyapa rekan kerja baru dan proaktif menanyakan sistem kerja setempat (skor 5) membangun penerimaan sosial sekaligus mempercepat penyesuaian tugas. Mempelajari aturan formal dari dokumen (skor 4) sangat baik secara teknis, namun kurang menyentuh aspek relasi sosial. Fokus tugas pribadi saja (skor 3), bersikap pasif mengamati (skor 2), apalagi sekadar menunggu perintah (skor 1) memperlambat proses adaptasi.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sulit",
      "question_text": "Sebagai seorang guru atau tenaga penyuluh ASN, Anda baru saja dimutasi ke daerah pedalaman yang mayoritas warganya belum fasih berbahasa Indonesia dan terbiasa berkomunikasi menggunakan bahasa daerah yang cukup sulit dipelajari dalam waktu singkat. Tindakan paling efektif yang Anda lakukan agar pelayanan dan pembelajaran berjalan lancar adalah...",
      "pilihan": [
        {
          "teks": "Menjelaskan dengan santun kepada tokoh masyarakat setempat bahwa Anda masih berproses memahami bahasa daerah yang digunakan warga.",
          "skor": 3
        },
        {
          "teks": "Tetap menyampaikan materi dengan bahasa Indonesia baku saja sambil menunggu warga terbiasa memahaminya.",
          "skor": 2
        },
        {
          "teks": "Berusaha belajar kosakata bahasa daerah secara mandiri melalui catatan dan kamus budaya setempat semaksimal mungkin.",
          "skor": 4
        },
        {
          "teks": "Mengajukan permohonan mutasi kembali ke kota asal dengan biaya pribadi karena merasa kesulitan beradaptasi dengan kendala bahasa.",
          "skor": 1
        },
        {
          "teks": "Berupaya mempelajari bahasa daerah tersebut untuk komunikasi sehari-hari dengan meminta bimbingan dan pendampingan dari tokoh masyarakat setempat.",
          "skor": 5
        }
      ],
      "explanation": "Penyesuaian sosial budaya di wilayah baru menuntut kerendahan hati menghargai kearifan lokal sekaligus mencari cara paling efektif menjembatani komunikasi. Belajar bahasa daerah langsung melalui bimbingan tokoh masyarakat (skor 5) mempercepat penguasaan bahasa sekaligus merekatkan kepercayaan warga sekitar. Belajar mandiri (skor 4) baik namun cenderung lebih lambat tanpa praktik bersama penutur asli. Sekadar menjelaskan keterbatasan tanpa usaha belajar aktif (skor 3) belum memecahkan hambatan komunikasi. Bersikap acuh (skor 2) dan memilih menyerah mengajukan pindah (skor 1) tidak mencerminkan pengabdian ASN di seluruh wilayah NKRI.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "mudah",
      "question_text": "Anda merupakan anak sulung dalam keluarga besar. Adik Anda menikah dengan pasangan yang memiliki keyakinan agama berbeda dengan keluarga besar Anda. Pada momen perayaan hari raya keagamaan keluarga, ipar Anda tersebut turut hadir membantu persiapan dan bersilaturahmi dengan hangat. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengajak berbicara hangat serta melibatkan ipar Anda dalam suasana kekeluargaan seperti halnya anggota keluarga lain.",
          "skor": 4
        },
        {
          "teks": "Menjaga jarak dan bersikap seolah tidak memperhatikan kehadirannya selama acara berlangsung.",
          "skor": 1
        },
        {
          "teks": "Merasa canggung dan memandang aneh kehadirannya karena mengira ia mulai berpindah mengikuti keyakinan keluarga Anda.",
          "skor": 2
        },
        {
          "teks": "Menyambut dengan terbuka dan tulus menerima kehadirannya sebagai wujud penghargaan atas toleransi serta kerukunan keluarga.",
          "skor": 5
        },
        {
          "teks": "Menganggap kehadirannya sebagai hal yang wajar dalam pergaulan masyarakat majemuk yang saling menghormati.",
          "skor": 3
        }
      ],
      "explanation": "Toleransi antarumat beragama dimulai dari sikap terbuka, tulus, dan saling menghargai dalam lingkup keluarga maupun masyarakat. Menyambut kehadirannya dengan terbuka karena menghargai nilai kerukunan (skor 5) memperkuat harmoni sosial. Menunjukkan keramahan kekeluargaan (skor 4) sangat positif, sedangkan menganggapnya sekadar biasa saja (skor 3) kurang menunjukkan kehangatan aktif. Berprasangka canggung (skor 2) dan mengabaikan kehadirannya (skor 1) mencerminkan sikap kurang toleran dalam keberagaman.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sulit",
      "question_text": "Seorang tetangga sebelah rumah datang menemui Anda dengan wajah cemas dan menawarkan sepeda motornya untuk digadaikan karena membutuhkan dana darurat guna biaya pengobatan keluarganya. Padahal saat itu seluruh tabungan cadangan Anda memang sedang dialokasikan untuk memperbaiki atap rumah yang bocor berat. Sikap empatik sekaligus solutif yang Anda tunjukkan adalah...",
      "pilihan": [
        {
          "teks": "Menghitung ulang sisa anggaran perbaikan rumah agar apabila ada sedikit selisih dapat langsung diserahkan sebagai bantuan sementara.",
          "skor": 2
        },
        {
          "teks": "Menyampaikan dengan santun bahwa Anda saat ini belum dapat membantu karena dana telah dialokasikan untuk perbaikan mendesak di rumah.",
          "skor": 4
        },
        {
          "teks": "Menolak menerima gadai kendaraan tersebut dengan menjelaskan alasan kebutuhan rumah tangga secara singkat agar tidak menimbulkan salah paham.",
          "skor": 3
        },
        {
          "teks": "Meminjamkan uang perbaikan atap tersebut sementara waktu dalam jangka pendek meskipun perbaikan rumah Anda menjadi tertunda.",
          "skor": 1
        },
        {
          "teks": "Menjelaskan kondisi keuangan Anda secara jujur dengan penuh empati, lalu memberikan saran dan informasi pengajuan gadai aman di lembaga keuangan resmi pemerintah seperti Pegadaian.",
          "skor": 5
        }
      ],
      "explanation": "Dalam berinteraksi di lingkungan masyarakat, kepekaan sosial perlu diimbangi komunikasi jujur dan saran yang aman bagi kedua belah pihak. Memberikan penjelasan jujur disertai rekomendasi solusi nyata ke lembaga resmi terpercaya (skor 5) membantu tetangga memperoleh dana cepat secara aman tanpa mengorbankan kebutuhan pokok keluarga Anda. Menyampaikan ketidakmampuan dengan santun (skor 4 dan skor 3) jujur namun belum memberi jalan keluar. Menghitung selisih kecil (skor 2) belum tentu mencukupi kebutuhan mendesak tetangga, sedangkan mengorbankan dana perbaikan atap bocor untuk pinjaman jangka pendek (skor 1) berisiko memicu masalah baru.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Sosial Budaya",
      "difficulty": "sedang",
      "question_text": "Pagi ini sebelum berangkat menuju kantor, Anda mendapat kabar duka bahwa salah seorang tetangga dekat di lingkungan RT Anda meninggal dunia, sementara pada pukul sembilan Anda memiliki jadwal rapat koordinasi internal di kantor. Sikap yang paling bijaksana dalam menyeimbangkan kepedulian sosial dan tugas kerja adalah...",
      "pilihan": [
        {
          "teks": "Mengajukan izin cuti satu hari secara resmi kepada pimpinan agar dapat membantu proses pemakaman hingga selesai bersama warga.",
          "skor": 4
        },
        {
          "teks": "Menghubungi atasan untuk memohon izin datang sedikit terlambat agar dapat bertakziah sejenak, kemudian tetap masuk bekerja melaksanakan tugas.",
          "skor": 5
        },
        {
          "teks": "Langsung berangkat bekerja seperti biasa tanpa menghadiri rumah duka karena merasa belum terlalu akrab dengan almarhum.",
          "skor": 1
        },
        {
          "teks": "Menitipkan pesan belasungkawa serta bantuan sumbangan melalui tetangga lain yang turut hadir melayat.",
          "skor": 2
        },
        {
          "teks": "Tetap berangkat masuk kerja tepat waktu dan menjadwalkan diri bertakziah ke rumah duka segera setelah jam kerja usai.",
          "skor": 3
        }
      ],
      "explanation": "Kehidupan sosial budaya menuntut kepekaan dan solidaritas bertetangga tanpa mengabaikan tanggung jawab kedinasan. Meminta izin terlambat secara resmi untuk bertakziah sebentar lalu tetap bekerja (skor 5) mewujudkan empati sosial secara langsung sekaligus menjaga komitmen tugas kantor. Mengajukan izin seharian (skor 4) wajar bila sangat dekat, tetapi meninggalkan rapat dan beban kerja harian kurang optimal jika cukup diwakili takziah singkat. Bertakziah sepulang kerja (skor 3) baik namun melewatkan momen pelepasan jenazah. Sekadar menitipkan pesan (skor 2) dan bersikap acuh karena merasa kurang kenal (skor 1) melemahkan kohesi sosial.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Sosial Budaya"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Dalam rapat pengarahan pagi, pimpinan mengumumkan kebijakan baru bahwa mulai bulan depan seluruh proses pengajuan laporan pertanggungjawaban kegiatan wajib dilakukan melalui portal pelaporan daring, bukan lagi menggunakan berkas cetak fisik. Padahal Anda terbiasa menyusun laporan secara manual. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Segera mempelajari cara penggunaan portal pelaporan daring tersebut dan berlatih menyusun laporan digital hingga terbiasa.",
          "skor": 5
        },
        {
          "teks": "Tetap menyusun draf laporan dalam bentuk cetak fisik terlebih dahulu lalu meminta kelonggaran transisi sementara kepada atasan.",
          "skor": 3
        },
        {
          "teks": "Memohon bimbingan teknis dari rekan kerja yang sudah mahir sembari mulai mencoba mengunggah draf laporan secara bertahap.",
          "skor": 4
        },
        {
          "teks": "Meminta bantuan rekan lain untuk memindahkan dan mengunggah laporan fisik yang sudah Anda buat ke dalam portal daring.",
          "skor": 2
        },
        {
          "teks": "Tetap menyerahkan laporan dalam bentuk berkas cetak dan menolak beralih karena merasa cara lama lebih praktis.",
          "skor": 1
        }
      ],
      "explanation": "Transformasi digital di birokrasi menuntut kemauan belajar dan keberanian meninggalkan zona nyaman pola kerja konvensional. Segera mempelajari dan berlatih memakai aplikasi pelaporan daring (skor 5) menunjukkan kemandirian serta kesiapan beradaptasi terhadap TIK. Belajar bertahap dari rekan (skor 4) juga positif, sedangkan meminta pengecualian sementara (skor 3) atau bergantung terus pada rekan lain untuk mengunggah (skor 2) memperlambat transisi. Menolak kebijakan digitalisasi (skor 1) menghambat modernisasi layanan.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sedang",
      "question_text": "Seorang rekan kerja mengirimkan tangkapan layar unggahan media sosial yang menyebutkan bahwa kepala instansi Anda tengah diperiksa aparat penegak hukum atas dugaan korupsi, dan pesan itu mulai ramai diperbincangkan di grup percakapan pegawai. Sikap bijaksana Anda dalam menghadapi informasi digital tersebut adalah...",
      "pilihan": [
        {
          "teks": "Memilih bersikap tenang dan tidak menyebarkan isu yang belum jelas kebenarannya guna menjaga kondusivitas lingkungan kerja.",
          "skor": 4
        },
        {
          "teks": "Turut membicarakan isu tersebut secara terbatas dengan rekan kerja lain sambil menunggu kejelasan beritanya.",
          "skor": 2
        },
        {
          "teks": "Segera berkomentar panjang lebar di kolom unggahan media sosial atau meneruskannya ke grup lain agar terlihat paling cepat mengetahui berita.",
          "skor": 1
        },
        {
          "teks": "Menahan diri untuk tidak ikut berkomentar maupun meneruskan unggahan tersebut sebelum memverifikasi kebenarannya dari sumber informasi resmi.",
          "skor": 5
        },
        {
          "teks": "Menelusuri terlebih dahulu keakuratan berita melalui kanal resmi instansi sebelum menanggapinya bersama pimpinan atau bagian humas.",
          "skor": 3
        }
      ],
      "explanation": "Kecakapan literasi informasi digital menuntut verifikasi fakta (*saring sebelum sharing*) sebelum merespons kabar viral. Menahan diri untuk tidak ikut menyebarluaskan dan memverifikasi kebenaran melalui sumber resmi (skor 5) mencegah penyebaran fitnah dan berita bohong. Bersikap diam tidak menyebarkan (skor 4) aman, namun kurang aktif melakukan konfirmasi resmi. Membahas secara terbatas sebagai gosip (skor 2) dan ikut berkomentar atau meneruskan isu tanpa dasar (skor 1) merusak etika digital ASN dan mencemarkan nama baik.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Instansi Anda mewajibkan seluruh pegawai mengikuti program bimbingan teknis pemanfaatan teknologi informasi dan keamanan siber selama empat hari di pusat pelatihan luar kantor. Sikap Anda menanggapi penugasan tersebut adalah...",
      "pilihan": [
        {
          "teks": "Mengikuti seluruh rangkaian pelatihan dengan antusias demi meningkatkan kapasitas kerja dan kemajuan layanan instansi.",
          "skor": 5
        },
        {
          "teks": "Bersedia mengikuti pelatihan dengan harapan memperoleh sertifikat kompetensi serta uang saku perjalanan dinas.",
          "skor": 3
        },
        {
          "teks": "Menghindar atau menolak penugasan dengan alasan pelatihan di luar kantor merepotkan urusan pribadi.",
          "skor": 1
        },
        {
          "teks": "Mengikuti pelatihan hanya apabila mayoritas rekan kerja di unit Anda juga berangkat bersama.",
          "skor": 2
        },
        {
          "teks": "Menyetujui dan mengikuti pelatihan tersebut meskipun jadwalnya cukup padat karena hal itu merupakan kewajiban kedinasan.",
          "skor": 4
        }
      ],
      "explanation": "Komitmen mengembangkan kemampuan TIK demi mendukung kinerja organisasi ditunjukkan melalui partisipasi aktif tanpa pamrih pribadi. Mengikuti pelatihan dengan kesadaran penuh bagi kemajuan instansi (skor 5) mencerminkan dedikasi dan semangat belajar berkelanjutan. Mengikuti karena sekadar kewajiban formal (skor 4) baik tetapi motivasi internalnya lebih rendah. Berorientasi insentif (skor 3) atau ikut-ikutan rekan (skor 2) kurang profesional, sedangkan menolak pengembangan kompetensi TIK (skor 1) merugikan kemajuan unit kerja.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sedang",
      "question_text": "Sesuai kebijakan terbaru pemerintah daerah, pengajuan penerbitan kutipan akta kelahiran kini dilakukan sepenuhnya melalui aplikasi pelayanan daring. Sebagai petugas administrator layanan daring tersebut, Anda mendapati seorang warga berulang kali mengirim pesan keluhan di kanal bantuan karena tetap belum memahami langkah pengunggahan dokumen. Tindakan terbaik Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengarahkan warga tersebut untuk datang langsung ke loket konsultasi tatap muka agar dibantu langsung oleh petugas.",
          "skor": 3
        },
        {
          "teks": "Menunda balasan pesan dan memintanya mencoba kembali di lain waktu karena masih banyak permohonan lain yang masuk.",
          "skor": 1
        },
        {
          "teks": "Mengirimkan ulang tautan berkas petunjuk teknis dalam bentuk dokumen panjang untuk dibaca sendiri oleh warga.",
          "skor": 2
        },
        {
          "teks": "Tetap melayani dan menjawab pertanyaannya secara lengkap agar prosedur pengunggahan dapat diselesaikan meskipun pertanyaan berulang.",
          "skor": 4
        },
        {
          "teks": "Melayani pertanyaan warga tersebut dengan sabar, membimbingnya tahap demi tahap dengan bahasa sederhana serta mengirim panduan visual yang mudah diikuti.",
          "skor": 5
        }
      ],
      "explanation": "Penerapan teknologi dalam pelayanan publik tetap harus diimbangi empati dan literasi pengguna agar tidak menimbulkan kesenjangan akses. Membimbing secara sabar dengan bahasa sederhana dan panduan visual (skor 5) membantu warga menguasai layanan digital secara mandiri. Tetap menjawab meski berulang (skor 4) baik, namun kurang inovatif dalam format panduan. Mengalihkan ke tatap muka (skor 3) mengurangi efisiensi layanan daring, sekadar mengirim dokumen teknis panjang (skor 2) menyulitkan warga awam, dan menunda layanan (skor 1) menurunkan kualitas pelayanan.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "mudah",
      "question_text": "Anda diberi tugas sebagai pengelola akun media sosial resmi hubungan masyarakat di instansi. Suatu hari, terdapat undangan bimbingan teknis strategi optimalisasi konten digital agar informasi layanan publik lebih luas menjangkau masyarakat. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Mengabaikan undangan pelatihan tersebut karena merasa pengelolaan akun media sosial saat ini sudah cukup baik.",
          "skor": 1
        },
        {
          "teks": "Menolak mengikuti pelatihan karena merasa lebih nyaman belajar secara otodidak melalui video internet.",
          "skor": 2
        },
        {
          "teks": "Berpartisipasi dalam pelatihan tersebut apabila diikuti pula oleh para pengelola media sosial dari unit instansi lain.",
          "skor": 4
        },
        {
          "teks": "Mengikuti pelatihan tersebut dengan sungguh-sungguh agar mampu mengoptimalkan fungsi media sosial resmi bagi penyebaran informasi layanan publik.",
          "skor": 5
        },
        {
          "teks": "Mengikuti kegiatan pelatihan tersebut dengan pertimbangan apabila ada dukungan anggaran atau insentif khusus.",
          "skor": 3
        }
      ],
      "explanation": "Pengelola kanal informasi digital instansi dituntut terus memperbarui keterampilannya seiring dinamika algoritma dan komunikasi publik. Mengikuti pelatihan untuk mengoptimalkan fungsi layanan informasi instansi (skor 5) menunjukkan keselarasan antara pengembangan TIK dan tujuan organisasi. Mengikuti karena faktor ikut-ikutan (skor 4) atau imbalan (skor 3) kurang didasari kesadaran mutu. Belajar sendiri tanpa standar instansi (skor 2) maupun puas diri tanpa belajar lagi (skor 1) menghambat inovasi komunikasi publik.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sedang",
      "question_text": "Era transformasi digital saat ini menyebabkan perubahan tata kelola pemerintahan berlangsung sangat cepat dengan hadirnya otomatisasi data dan kecerdasan buatan. Dalam menyikapi percepatan perkembangan teknologi yang langsung memengaruhi rutinitas kerja tersebut, langkah terbaik Anda adalah...",
      "pilihan": [
        {
          "teks": "Membaca berbagai buku pengetahuan dan artikel terbaru mengenai perkembangan transformasi digital pemerintahan.",
          "skor": 3
        },
        {
          "teks": "Berusaha secara aktif menguasai keterampilan teknologi informasi mutakhir yang relevan untuk menunjang efektivitas pelaksanaan tugas jabatan.",
          "skor": 5
        },
        {
          "teks": "Mengikuti perkembangan berita teknologi melalui media massa agar tidak tertinggal informasi tren terkini.",
          "skor": 2
        },
        {
          "teks": "Mengusulkan pengadaan perangkat elektronik paling mahal kepada pimpinan agar pekerjaan terlihat lebih modern.",
          "skor": 1
        },
        {
          "teks": "Mempelajari perangkat lunak pengolahan data dan aplikasi perkantoran modern secara bertahap sesuai kebutuhan unit kerja.",
          "skor": 4
        }
      ],
      "explanation": "Tuntutan kompetensi TIK bukan sekadar mengetahui tren teknologi, melainkan menguasainya menjadi keterampilan nyata dalam bekerja. Berusaha aktif menguasai keterampilan teknologi informasi mutakhir (skor 5) memberikan dampak paling konkret terhadap peningkatan kinerja. Mempelajari aplikasi perkantoran dasar (skor 4) baik sebagai fondasi awal, sedangkan sekadar membaca literatur (skor 3) dan mengikuti berita (skor 2) masih bersifat konseptual. Sekadar menuntut perangkat baru tanpa peningkatan kapasitas diri (skor 1) tidak efektif.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Teknologi Informasi dan Komunikasi (TIK)",
      "difficulty": "sulit",
      "question_text": "Ketika Anda sedang menyusun naskah paparan evaluasi anggaran yang cukup mendesak pada komputer kantor, seorang rekan kerja tidak sengaja tersandung kabel sambungan listrik hingga komputer padam mendadak. Anda sempat panik karena sebagian perubahan draf belum tersimpan secara manual. Sikap Anda yang paling tepat dan adaptif terhadap teknologi adalah...",
      "pilihan": [
        {
          "teks": "Meminta rekan kerja tersebut membantu mencari cara memulihkan data sementara atau ikut mengetik ulang bagian yang hilang.",
          "skor": 2
        },
        {
          "teks": "Menerima permintaan maaf rekan kerja secara wajar dan langsung fokus mengetik ulang bagian yang hilang dengan mengaktifkan pencadangan berkala.",
          "skor": 4
        },
        {
          "teks": "Memaklumi ketidaksengajaan rekan dengan kepala dingin, segera menyalakan kembali komputer untuk memulihkan berkas lewat fitur simpan otomatis/penyimpanan awan, dan meneruskan pekerjaan.",
          "skor": 5
        },
        {
          "teks": "Memarahi rekan kerja tersebut karena kecerobohannya telah merusak hasil kerja yang sedang dikejar tenggatnya.",
          "skor": 1
        },
        {
          "teks": "Menghela napas panjang untuk menenangkan diri sebelum memeriksa apakah sebagian berkas masih terselamatkan di sistem.",
          "skor": 3
        }
      ],
      "explanation": "Penguasaan TIK mencakup kemampuan memanfaatkan fitur pemulihan sistem maupun penyimpanan awan (*cloud*) sekaligus menjaga stabilitas emosi saat kendala teknis terjadi. Tetap tenang memaklumi ketidaksengajaan rekan serta segera memanfaatkan fitur pemulihan otomatis dan penyimpanan awan (skor 5) menyelesaikan masalah secara cepat tanpa merusak hubungan kerja. Menerima maaf dan mengetik ulang sambil mengaktifkan pencadangan (skor 4) baik, namun kurang memanfaatkan pemulihan instan. Terpaku sesaat (skor 3), membebankan ke rekan (skor 2), dan melampiaskan amarah (skor 1) tidak produktif maupun kurang profesional.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Teknologi Informasi dan Komunikasi (TIK)"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Anda dipercaya menjadi ketua panitia penyelenggara rapat koordinasi daerah yang sedang berlangsung padat dengan berbagai tugas teknis mendesak yang harus diselesaikan saat itu juga. Tiba-tiba ibu Anda menelepon meminta dijemput karena hujan turun sangat deras. Sikap paling bijaksana dan profesional yang Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Menyelesaikan terlebih dahulu bagian koordinasi panitia yang paling mendesak atau mendelegasikan sementara kepada wakil ketua, lalu menjemput ibu Anda setelah kondisi terkendali.",
          "skor": 4
        },
        {
          "teks": "Meminta tolong rekan panitia yang sedang lebih luang menangani tugas teknis Anda sebentar sementara Anda menjemput ibu Anda.",
          "skor": 3
        },
        {
          "teks": "Langsung meninggalkan lokasi acara untuk menjemput ibu Anda tanpa mengonfirmasi delegasi tugas kepada anggota panitia lain.",
          "skor": 1
        },
        {
          "teks": "Menyampaikan permohonan maaf bahwa Anda sama sekali tidak dapat menjemput karena sedang sibuk tanpa membantu mencarikan alternatif kendaraan.",
          "skor": 2
        },
        {
          "teks": "Meminta maaf dengan penuh sopan dan perhatian, lalu segera memesankan taksi daring atau mencarikan alternatif jemputan aman bagi ibu Anda agar tugas panitia tetap tuntas.",
          "skor": 5
        }
      ],
      "explanation": "Profesionalisme menuntut kemampuan menuntaskan tanggung jawab jabatan sambil mencari solusi cerdas untuk urusan keluarga tanpa mengabaikan keduanya. Memesankan transportasi daring yang aman dengan penuh sopan santun (skor 5) melindungi keselamatan ibu sekaligus menjaga kehadiran penuh Anda sebagai ketua panitia. Mendelegasikan terukur setelah urusan kritis aman (skor 4) atau meminta bantuan rekan (skor 3) masih menunjukkan kepedulian tugas namun kurang mandiri. Menolak tanpa solusi transportasi (skor 2) kurang berbakti, dan meninggalkan acara sepihak (skor 1) melalaikan amanah.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Pekan ini Anda dan seorang rekan dekat telah merencanakan makan siang bersama pada jam istirahat untuk membahas rencana kegiatan akhir pekan. Menjelang jam istirahat tiba, atasan Anda menelepon dan meminta Anda mendampingi serta membantu tamu mitra strategis instansi yang baru dapat hadir tepat pada jam istirahat siang. Tindakan yang akan Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Tetap berangkat makan siang sesuai rencana dan meminta atasan menghubungi kembali apabila tamu mitra benar-benar sudah tiba di kantor.",
          "skor": 1
        },
        {
          "teks": "Menolak penugasan tersebut secara halus dengan alasan waktu istirahat siang merupakan hak pribadi pegawai.",
          "skor": 2
        },
        {
          "teks": "Menjelaskan dengan sopan kepada atasan mengenai rencana makan siang Anda sambil memohon apakah waktu pendampingan dapat disesuaikan.",
          "skor": 4
        },
        {
          "teks": "Menyanggupi permintaan atasan untuk mendampingi tamu mitra tersebut dengan profesional serta menghubungi rekan kerja untuk menjadwalkan ulang makan siang.",
          "skor": 5
        },
        {
          "teks": "Meminta izin kepada atasan untuk mencari rekan lain yang siap mendampingi tamu terlebih dahulu hingga Anda kembali dari makan siang.",
          "skor": 3
        }
      ],
      "explanation": "Agenda makan siang pribadi bukan merupakan urusan mendesak yang tidak dapat dijadwal ulang apabila instansi membutuhkan kehadiran Anda menghadapi tamu mitra strategis. Memenuhi penugasan atasan dan mengatur ulang janji dengan rekan (skor 5) menunjukkan dedikasi dan prioritas kepentingan organisasi. Bernegosiasi lembut (skor 4) atau melimpahkan ke rekan lain (skor 3) kurang menunjukkan kesiapan pribadi. Menolak secara kaku (skor 2) dan tetap pergi makan siang meski sudah diminta langsung (skor 1) mencerminkan kurangnya komitmen kerja.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "mudah",
      "question_text": "Suatu siang, Anda melihat beberapa rekan kerja di bagian penerbitan surat keterangan menerima uang tanda terima kasih dari warga pemohon layanan, padahal peraturan instansi secara tegas melarang segala bentuk pungutan di luar ketentuan resmi. Menyaksikan praktik tersebut, sikap tegas Anda adalah...",
      "pilihan": [
        {
          "teks": "Tidak pernah meminta uang kepada pemohon, namun tidak menolak apabila warga maupun rekan membagikannya secara sukarela.",
          "skor": 2
        },
        {
          "teks": "Berupaya keras menjaga integritas pribadi untuk tidak ikut meminta maupun menerima uang tanda terima kasih dalam bertugas.",
          "skor": 4
        },
        {
          "teks": "Menolak secara tegas menerima pemberian dalam bentuk apa pun karena melayani masyarakat merupakan kewajiban jabatan yang tidak boleh dikomersialkan, serta mengingatkan rekan agar menaati aturan.",
          "skor": 5
        },
        {
          "teks": "Tidak menerima pemberian uang di luar aturan kecuali apabila benar-benar diserahkan sebagai tanda syukur setelah jam kerja selesai.",
          "skor": 3
        },
        {
          "teks": "Turut menerima pembagian uang tanda terima kasih tersebut karena merasa tidak enak hati bila berbeda sikap dengan rekan lain.",
          "skor": 1
        }
      ],
      "explanation": "Integritas anti-gratifikasi dan anti-pungutan liar adalah fondasi utama profesionalisme ASN. Menolak mutlak dengan alasan apa pun serta berani mengingatkan aturan kepada rekan (skor 5) menegakkan tata kelola pemerintahan bersih. Menjaga diri sendiri secara pasif (skor 4) baik secara pribadi namun belum mencegah pelanggaran lingkungan kerja. Membuka celah kondisi tertentu (skor 3), bersikap pasif menerima pemberian (skor 2), maupun ikut arus karena sungkan (skor 1) melanggar kode etik ASN.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "mudah",
      "question_text": "Seorang oknum kenalan menawarkan bantuan memuluskan proses kenaikan jabatan struktural Anda di instansi pada periode penilaian mendatang, dengan syarat Anda bersedia menyetorkan sejumlah uang pelicin. Sikap berintegritas yang Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Menyetujui tawaran tersebut dengan mencari pinjaman dana demi mempercepat peningkatan karier dan pendapatan.",
          "skor": 1
        },
        {
          "teks": "Tidak menerima tawaran tersebut dan tetap menjalankan tugas jabatan secara profesional seperti biasa.",
          "skor": 4
        },
        {
          "teks": "Menolak tawaran tersebut dengan alasan sedang tidak memiliki simpanan uang untuk memenuhi syarat yang diminta.",
          "skor": 3
        },
        {
          "teks": "Meminta pertimbangan keluarga atau mencari informasi pinjaman terlebih dahulu sebelum memutuskan menerima atau menolak.",
          "skor": 2
        },
        {
          "teks": "Menolak tegas tawaran suap tersebut, tetap bekerja optimal membuktikan kelayakan secara objektif, dan melaporkan indikasi pelanggaran sesuai saluran pengawasan.",
          "skor": 5
        }
      ],
      "explanation": "Promosi jabatan harus diraih melalui prestasi kerja dan sistem merit, bukan melalui praktik suap. Menolak tegas dengan kesadaran integritas dan mendorong akuntabilitas pengawasan (skor 5) serta tetap bekerja profesional tanpa kompromi (skor 4) menjaga kehormatan ASN. Menolak hanya karena alasan tidak punya uang (skor 3) menunjukkan integritas yang lemah karena berpotensi menerima bila memiliki dana. Mempertimbangkan pinjaman (skor 2) dan menyetujui suap (skor 1) merupakan pelanggaran hukum dan integritas berat.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Pimpinan menegur Anda cukup keras di depan tim karena terlambat menyerahkan berkas cetak laporan analisis menjelang rapat dimulai, sehingga dinilai kurang sigap. Padahal keterlambatan itu dipicu oleh kerusakan mendadak pada mesin pencetak kantor sesaat sebelum rapat berlangsung. Sikap Anda yang paling profesional adalah...",
      "pilihan": [
        {
          "teks": "Meminta maaf dengan lapang dada atas keterlambatan yang terjadi, menjelaskan secara objektif kendala teknis mesin pencetak kantor, dan segera menyiapkan alternatif penggandaan.",
          "skor": 5
        },
        {
          "teks": "Meminta maaf secara singkat dan berjanji tidak akan mengulangi keterlambatan serupa pada rapat berikutnya tanpa menjelaskan kendala sarana.",
          "skor": 2
        },
        {
          "teks": "Menerima teguran tersebut, meminta maaf, dan menjelaskan bahwa keterlambatan tidak sepenuhnya disebabkan oleh kelalaian pribadi.",
          "skor": 4
        },
        {
          "teks": "Menjelaskan langsung kepada pimpinan bahwa keterlambatan murni terjadi karena mesin pencetak rusak mendadak.",
          "skor": 3
        },
        {
          "teks": "Merasa keberatan dan membantah teguran pimpinan karena seharusnya instansi menjamin seluruh sarana kerja berfungsi normal.",
          "skor": 1
        }
      ],
      "explanation": "Pegawai profesional mampu menerima umpan balik secara dewasa, tidak melempar kesalahan secara emosional, namun tetap menyampaikan fakta objektif disertai solusi. Meminta maaf, menjelaskan kendala teknis secara proporsional, serta langsung menyiapkan solusi alternatif (skor 5) menjaga ketenangan sekaligus mempercepat penyelesaian. Meminta maaf sambil membela diri bahwa bukan kesalahan pribadi (skor 4) atau langsung menyalahkan peralatan tanpa permintaan maaf (skor 3) terasa kurang rendah hati. Tidak menjelaskan akar kendala teknis (skor 2) membuat masalah peralatan tidak teratasi, dan bersikap defensif melawan pimpinan (skor 1) tidak profesional.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sulit",
      "question_text": "Anda ditugaskan menjadi anggota tim pemeriksa internal untuk mengaudit pengelolaan program di sebuah unit pelaksana daerah. Saat waktu istirahat tiba, pengelola unit yang diaudit menyuguhkan jamuan makan siang mewah serta bingkisan khusus sebagai bentuk penghormatan kepada tim pemeriksa. Rekan tim Anda menganggap hal itu sudah menjadi kebiasaan wajar di lapangan. Pendapat dan sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Menganggap penerimaan jamuan makan bukan termasuk kategori korupsi sepanjang hasil laporan audit tetap ditulis objektif.",
          "skor": 2
        },
        {
          "teks": "Menyarankan tim untuk membeli makan siang sendiri di luar area kantor yang diperiksa guna menjaga netralitas pemeriksaan.",
          "skor": 4
        },
        {
          "teks": "Menolak jamuan khusus dan bingkisan secara santun serta memberikan penjelasan kepada pihak yang diperiksa mengenai kode etik independensi audit.",
          "skor": 5
        },
        {
          "teks": "Menolak bingkisan khusus namun masih dapat menerima konsumsi sederhana sebatas air minum agar tidak menyinggung tuan rumah.",
          "skor": 3
        },
        {
          "teks": "Menerima jamuan makan dan bingkisan tersebut sebagai bentuk penghargaan biasa dari unit kerja terhadap tim pemeriksa.",
          "skor": 1
        }
      ],
      "explanation": "Independensi dan objektivitas pengawasan sangat rentan terganggu oleh konflik kepentingan melalui jamuan atau bingkisan dari pihak terperiksa (*auditee*). Menolak secara santun disertai edukasi kode etik kepada pihak terperiksa (skor 5) menegakkan standar integritas sekaligus mencegah terulangnya praktik serupa. Membeli sendiri di luar (skor 4) menjaga integritas tim meski tidak mengedukasi pihak terperiksa. Menerima sebagian dengan dalih sopan santun (skor 3) atau menganggap wajar karena bukan uang tunai (skor 2 dan skor 1) melanggar prinsip bebas benturan kepentingan.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Anda diberi amanah oleh pimpinan untuk mengelola penyusunan rancangan kebijakan strategis yang masih bersifat rahasia negara dan belum boleh dipublikasikan kepada pihak luar maupun pegawai lain. Saat berkumpul santai di ruang istirahat, beberapa rekan dekat mulai memancing pembicaraan dan menanyakan isi rancangan kebijakan baru tersebut. Sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Membatasi lingkup obrolan agar tetap berada pada topik umum dan tidak menyentuh hal-hal terkait proyek rahasia yang Anda tangani.",
          "skor": 4
        },
        {
          "teks": "Terbuka menceritakan gambaran garis besar tugas rahasia tersebut guna meminta masukan dan saran pengembangan dari teman dekat.",
          "skor": 1
        },
        {
          "teks": "Merasa gelisah dan langsung menunjukkan ketidaksenangan setiap kali rekan mulai menanyakan tugas baru tersebut.",
          "skor": 2
        },
        {
          "teks": "Hanya membahas topik-topik ringan di luar pekerjaan sejak awal berkumpul tanpa sedikit pun membuka informasi jabatan.",
          "skor": 3
        },
        {
          "teks": "Mengarahkan dan mengalihkan topik pembicaraan secara wajar serta halus begitu rekan-rekan mulai menyinggung materi tugas rahasia tersebut.",
          "skor": 5
        }
      ],
      "explanation": "Menjaga kerahasiaan informasi jabatan adalah kewajiban hukum dan kode etik ASN. Mengalihkan pembicaraan secara luwes saat topik mulai menyentuh ranah rahasia (skor 5) menjaga kerahasiaan sekaligus memelihara suasana pergaulan tetap cair tanpa memicu kecurigaan. Membatasi topik sejak awal (skor 4 dan skor 3) aman, namun kurang sigap bila rekan terlanjur memancing topik tersebut. Menunjukkan kegelisahan berlebih (skor 2) justru memancing rasa penasaran orang lain, sedangkan membocorkan isi rahasia dengan dalih meminta masukan (skor 1) merupakan pelanggaran berat kerahasiaan jabatan.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Profesionalisme",
      "difficulty": "sedang",
      "question_text": "Anda baru enam bulan bekerja sebagai pelaksana teknis di sebuah instansi, namun karena ketelitian dan kecepatan kerja Anda, pimpinan menawarkan kepercayaan kepada Anda untuk memimpin koordinasi tim sebagai koordinator subbagian, sementara di unit tersebut masih ada beberapa pegawai yang jauh lebih senior. Sikap profesional yang Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Menerima jabatan koordinator tersebut tetapi menyerahkan sebagian besar pengambilan keputusan operasional kepada pegawai senior.",
          "skor": 3
        },
        {
          "teks": "Menolak tawaran pimpinan secara halus karena merasa sungkan melangkahi rekan-rekan senior yang jauh lebih lama mengabdi.",
          "skor": 2
        },
        {
          "teks": "Menerima amanah tersebut dengan kerendahan hati, berkomitmen belajar cepat menjadi koordinator yang baik, serta tetap merangkul dan menghormati masukan pegawai senior.",
          "skor": 5
        },
        {
          "teks": "Langsung menolak kepercayaan tersebut karena merasa pengalaman enam bulan belum cukup untuk memikul tanggung jawab kepemimpinan.",
          "skor": 1
        },
        {
          "teks": "Menerima penunjukan tersebut dengan syarat masa evaluasi percobaan terlebih dahulu untuk mengukur kesiapan kepemimpinan diri.",
          "skor": 4
        }
      ],
      "explanation": "Profesionalisme berarti siap menerima amanah dan tantangan pengembangan karier berdasarkan kepercayaan kinerja, disertai tanggung jawab untuk belajar dan bersinergi. Menerima amanah dengan tekad menjadi pemimpin yang baik sekaligus menghargai kontribusi senior (skor 5) menunjukkan kepercayaan diri yang rendah hati dan berorientasi kinerja. Menerima dengan masa percobaan (skor 4) cukup hati-hati namun terkesan kurang tegas. Menyerahkan kendali ke senior (skor 3) melemahkan fungsi kepemimpinan, sementara menolak karena sungkan (skor 2) atau kurang percaya diri (skor 1) menyia-nyiakan kepercayaan organisasi.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Profesionalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Anda memiliki sahabat dekat sejak masa kuliah yang dikenal ramah dalam keseharian. Suatu hari, petugas dari Badan Nasional Penanggulangan Terorisme (BNPT) mendatangi kantor Anda untuk meminta keterangan mengenai keberadaan sahabat Anda tersebut karena ia resmi masuk dalam daftar pencarian orang kasus tindak pidana terorisme. Kebetulan Anda mengetahui tempat tinggal terbarunya. Sikap Anda yang paling tepat adalah...",
      "pilihan": [
        {
          "teks": "Menolak memberikan informasi apa pun kepada petugas demi melindungi hubungan persahabatan yang sudah terjalin lama.",
          "skor": 1
        },
        {
          "teks": "Memberikan informasi keberadaan sahabat Anda secara akurat dan jujur kepada petugas demi keselamatan masyarakat luas serta membantu sahabat Anda mempertanggungjawabkan kesalahannya secara hukum.",
          "skor": 5
        },
        {
          "teks": "Tetap menyampaikan informasi keberadaannya kepada aparat berwenang sesuai fakta yang Anda ketahui meskipun terasa berat secara pribadi.",
          "skor": 4
        },
        {
          "teks": "Menahan informasi keberadaan sahabat Anda dari petugas karena berniat menemuinya sendiri untuk membujuknya menyerahkan diri.",
          "skor": 2
        },
        {
          "teks": "Memberikan keterangan alamat yang Anda ketahui dengan perasaan ragu dan terpaksa demi memenuhi panggilan pemeriksaan aparat.",
          "skor": 3
        }
      ],
      "explanation": "Tindak pidana terorisme merupakan kejahatan luar biasa yang mengancam nyawa banyak warga sipil dan kedaulatan negara, sehingga kepentingan keselamatan publik jauh di atas ikatan persahabatan pribadi. Memberikan informasi secara tulus demi keselamatan bangsa dan proses penyadaran hukum (skor 5) serta kooperatif meski terasa berat (skor 4) menunjukkan integritas bela negara. Membantu dengan perasaan terpaksa (skor 3) masih benar secara tindakan, sedangkan menyembunyikan buronan terorisme (skor 2 dan skor 1) menghambat penegakan hukum dan membahayakan keselamatan publik.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Di kompleks perumahan tempat tinggal Anda, beredar perbincangan hangat di kalangan warga bahwa penghuni salah satu rumah kontrakan di ujung blok kerap menggelar pertemuan tertutup yang diduga menyebarkan ajaran menentang Pancasila. Menghadapi situasi yang mulai meresahkan warga tersebut, langkah yang Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Menggerakkan massa warga kompleks untuk langsung mendatangi rumah tersebut dan mengusir penghuninya secara paksa.",
          "skor": 1
        },
        {
          "teks": "Mengajak beberapa tetangga untuk mengucilkan penghuni rumah tersebut agar tidak ada warga yang terpengaruh ajarannya.",
          "skor": 2
        },
        {
          "teks": "Tetap bersikap tenang dan waspada sambil memantau perkembangan informasi dari pengurus lingkungan tanpa ikut menyebarkan gosip.",
          "skor": 3
        },
        {
          "teks": "Berkoordinasi dengan tokoh masyarakat setempat untuk mengajak dialog secara baik dan terbuka dengan penghuni rumah guna mengetahui aktivitas sebenarnya.",
          "skor": 4
        },
        {
          "teks": "Melaporkan kecurigaan dan informasi yang beredar kepada ketua RT atau pengurus lingkungan secara prosedural agar dapat ditelusuri kebenarannya bersama aparat setempat.",
          "skor": 5
        }
      ],
      "explanation": "Ketika menerima informasi dugaan aktivitas radikal yang belum terverifikasi, warga maupun ASN dilarang bertindak main hakim sendiri (*vigilantisme*). Melapor kepada ketua RT/pengurus lingkungan berwenang agar ditelusuri secara resmi (skor 5) menjamin akurasi fakta dan ketertiban hukum. Mengajak dialog terkoordinasi (skor 4) membantu klarifikasi selama memperhatikan keamanan, sedangkan sekadar diam memantau (skor 3) kurang proaktif mencegah risiko. Mengucilkan berdasar gosip (skor 2) dan melakukan pengusiran massa tanpa bukti (skor 1) berpotensi melanggar hukum serta memicu konflik horizontal.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Anda diundang menghadiri sebuah pertemuan diskusi komunitas oleh kenalan baru. Di tengah berjalannya acara, pembicara ternyata mulai mengarahkan peserta pada agenda penolakan ideologi Pancasila serta mengajak mendukung gerakan perlawanan bersenjata yang dilarang pemerintah. Sikap paling tepat dan bertanggung jawab yang akan Anda ambil adalah...",
      "pilihan": [
        {
          "teks": "Menyampaikan keberatan secara santun atas arah pembahasan yang menyimpang tersebut sebelum bergegas meninggalkan pertemuan.",
          "skor": 3
        },
        {
          "teks": "Menyampaikan penolakan dan ketidaksetujuan secara tenang dan tegas, segera meninggalkan lokasi pertemuan, lalu melaporkan indikasi agenda terlarang tersebut kepada pihak berwenang.",
          "skor": 5
        },
        {
          "teks": "Tetap bertahan mengikuti pertemuan hingga selesai karena merasa penasaran ingin mengetahui isi materi yang disampaikan.",
          "skor": 1
        },
        {
          "teks": "Memilih diam karena merasa terkejut dan canggung, lalu bergegas pulang begitu sesi jeda istirahat tiba tanpa melapor.",
          "skor": 2
        },
        {
          "teks": "Segera pamit meninggalkan ruang pertemuan secara tertib karena acara tersebut jelas menyebarkan paham radikalisme yang bertentangan dengan hukum.",
          "skor": 4
        }
      ],
      "explanation": "Menghadapi pertemuan yang mengarah pada agenda subversif dan terorisme menuntut ketegasan prinsip, keselamatan diri, dan kepedulian terhadap keamanan negara. Menolak secara tegas namun tenang, segera keluar dari lokasi, serta melaporkan indikasi ancaman pidana terorisme kepada aparat berwenang (skor 5) melindungi diri sekaligus mencegah meluasnya perekrutan radikal. Langsung meninggalkan ruangan (skor 4) dan menolak sopan lalu pergi (skor 3) menjaga integritas diri meski kurang upaya pencegahan ke aparat. Diam menunggu jeda (skor 2) berisiko terseret lebih jauh, dan bertahan karena penasaran (skor 1) membuka celah indoktrinasi.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Instansi Anda akan melaksanakan rekrutmen pegawai kontrak dan tenaga pendukung dalam skala besar. Mengingat tingginya intensitas ujaran kebencian serta penyebaran paham intoleran di ruang publik, langkah preventif paling efektif yang akan Anda usulkan dalam mekanisme seleksi adalah...",
      "pilihan": [
        {
          "teks": "Cukup mencantumkan kalimat peringatan terbuka pada pengumuman lowongan bahwa simpatisan gerakan radikal dilarang mendaftar.",
          "skor": 1
        },
        {
          "teks": "Menerapkan penelusuran rekam jejak riwayat hidup dan jejak digital media sosial pelamar disertai wawancara pendalaman wawasan kebangsaan secara objektif.",
          "skor": 5
        },
        {
          "teks": "Menyelenggarakan modul pembekalan penguatan ideologi kebangsaan secara daring bagi seluruh kandidat sebelum mengikuti ujian tahap akhir.",
          "skor": 2
        },
        {
          "teks": "Mewajibkan seluruh pelamar menandatangani surat pernyataan bermeterai tentang komitmen setia pada NKRI dan tidak terlibat organisasi terlarang.",
          "skor": 3
        },
        {
          "teks": "Memasukkan tahapan tes dan wawancara khusus wawasan kebangsaan guna menggali secara langsung pemahaman serta komitmen pelamar terhadap Pancasila.",
          "skor": 4
        }
      ],
      "explanation": "Pencegahan infiltrasi paham radikal dalam rekrutmen aparatur memerlukan pembuktian perilaku nyata, bukan sekadar formalitas di atas kertas. Memadukan penelusuran rekam jejak riwayat hidup serta aktivitas digital dengan wawancara kebangsaan (skor 5) memberikan gambaran objektif integritas kandidat. Wawancara kebangsaan langsung (skor 4) efektif menggali sikap, sedangkan surat pernyataan bermeterai (skor 3) dan pembekalan singkat (skor 2) lebih bersifat administratif yang mudah dimanipulasi. Peringatan di pengumuman saja (skor 1) tidak memiliki daya saring nyata.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Di grup percakapan daring resmi milik unit kerja Anda, salah seorang rekan kerja mengunggah tautan video ceramah yang secara terbuka merendahkan keyakinan agama kelompok lain dan menuding sistem konstitusi Indonesia tidak sah untuk ditaati. Melihat unggahan tersebut, sikap Anda sebagai ASN adalah...",
      "pilihan": [
        {
          "teks": "Menyampaikan pesan penyejuk di grup mengenai pentingnya menjaga netralitas ASN dan kerukunan antarumat beragama di lingkungan kerja.",
          "skor": 3
        },
        {
          "teks": "Mengingatkan rekan tersebut secara santun namun tegas bahwa grup kedinasan harus bebas dari ujaran kebencian serta menyarankan penghapusan konten agar tidak memicu perpecahan.",
          "skor": 5
        },
        {
          "teks": "Menghubungi pimpinan unit atau administrator grup agar konten provokatif tersebut segera ditertibkan dan pengunggah diberi pembinaan etika ASN.",
          "skor": 4
        },
        {
          "teks": "Ikut menanggapi video tersebut dengan perdebatan panas di grup yang justru memperpanjang penyebaran konten intoleran.",
          "skor": 1
        },
        {
          "teks": "Memilih diam dan langsung menghapus video tersebut dari perangkat pribadi tanpa menegur atau melaporkan demi menghindari perdebatan.",
          "skor": 2
        }
      ],
      "explanation": "Ruang komunikasi digital kedinasan wajib steril dari ujaran kebencian, intoleransi SARA, dan penolakan terhadap konstitusi negara. Menegur secara konstruktif dan meminta penghapusan konten provokatif (skor 5) menunjukkan keberanian moral sekaligus menghentikan dampak seketika. Melapor ke pimpinan/admin (skor 4) juga efektif secara struktural, sedangkan memberi pesan penyejuk tanpa penertiban konten (skor 3) kurang tegas. Bersikap diam apatis (skor 2) membiarkan paham intoleran berkembang di grup resmi, dan memicu debat emosional (skor 1) memperkeruh konflik.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sulit",
      "question_text": "Seorang pegawai baru yang ditempatkan satu tim dengan Anda tiba-tiba menolak berkoordinasi secara langsung dengan rekan tim lain yang berbeda suku dan agama, bahkan mengajukan permintaan pemisahan ruang kerja karena alasan prinsip keyakinan pribadinya. Sebagai ketua tim kerja, sikap Anda adalah...",
      "pilihan": [
        {
          "teks": "Tetap mempertahankan struktur tim yang ada dan meminta seluruh anggota berfokus pada penyelesaian tugas sesuai prosedur tanpa memenuhi permintaan pemisahan.",
          "skor": 3
        },
        {
          "teks": "Mengajak pegawai baru tersebut berbicara empat mata guna menggali akar pandangannya serta meluruskan kewajiban profesionalitas ASN sebagai perekat bangsa.",
          "skor": 4
        },
        {
          "teks": "Menuruti permintaan pemisahan ruang kerja sementara waktu dengan alasan agar target pekerjaan tim tidak terhambat konflik personal.",
          "skor": 2
        },
        {
          "teks": "Membiarkan permintaan tersebut dan menyarankan rekan lain yang berbeda latar belakang untuk mengalah demi ketenangan kantor.",
          "skor": 1
        },
        {
          "teks": "Menegaskan secara santun namun prinsipil bahwa di instansi pemerintah seluruh pegawai wajib bekerja inklusif tanpa diskriminasi SARA, memfasilitasi dialog kerja, dan berkoordinasi dengan pimpinan bila sikap eksklusif berlanjut.",
          "skor": 5
        }
      ],
      "explanation": "Sikap eksklusivisme berbasis SARA di lingkungan birokrasi merupakan benih intoleransi yang bertentangan dengan fungsi ASN sebagai perekat dan pemersatu bangsa. Menegaskan prinsip kerja inklusif tanpa diskriminasi disertai dialog dan eskalasi pembinaan bila diperlukan (skor 5) menegakkan nilai kebangsaan dan keadilan tim. Dialog empat mata untuk meluruskan pemahaman (skor 4) sangat baik secara persuasif. Menolak pemisahan tanpa pembinaan sikap (skor 3) baru menyelesaikan aspek teknis. Mengabulkan segregasi kerja (skor 2) dan meminta kelompok lain mengalah (skor 1) justru melegitimasi intoleransi di instansi.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "mudah",
      "question_text": "Menjelang penetapan kebijakan nasional dan agenda pemilihan umum di daerah Anda, sekelompok orang berusaha menghasut warga sekitar melalui pengeras suara dan selebaran agar memboikot pemilu serta melakukan aksi perusakan fasilitas umum karena menganggap demokrasi tidak perlu ditaati. Sikap Anda terhadap ajakan tersebut adalah...",
      "pilihan": [
        {
          "teks": "Menolak ajakan anarkis tersebut dengan tegas, mengajak warga tetap menyalurkan aspirasi secara damai dan konstitusional, serta menginformasikan rencana provokasi tersebut kepada aparat keamanan setempat.",
          "skor": 5
        },
        {
          "teks": "Memilih berdiam diri di rumah dan menutup pintu saat kelompok tersebut melintas agar tidak terlibat masalah hukum.",
          "skor": 2
        },
        {
          "teks": "Memaklumi kemarahan kelompok tersebut dan membiarkan warga lain menentukan sikapnya sendiri meski mengarah pada tindakan anarkis.",
          "skor": 1
        },
        {
          "teks": "Menolak ikut serta dalam aksi pemboikotan dan perusakan tersebut serta memilih tetap melaksanakan hak warga secara tertib.",
          "skor": 3
        },
        {
          "teks": "Mengajak warga sekitar agar tidak terpengaruh hasutan perusakan fasilitas umum karena tindakan anarkis merugikan masyarakat sendiri.",
          "skor": 4
        }
      ],
      "explanation": "Anti radikalisme mencakup penolakan terhadap penggunaan cara-cara kekerasan dan penghancuran tatanan konstitusional untuk memaksakan kehendak politik maupun ideologi. Menolak tegas, mengedukasi warga menempuh jalur damai konstitusional, serta melapor ke aparat demi pencegahan anarkisme (skor 5) menjaga keselamatan publik dan ketertiban demokrasi. Mengajak warga menolak anarkisme (skor 4) baik secara sosial, menolak untuk diri sendiri (skor 3) bersikap pasif, berdiam di rumah (skor 2) apatis, dan memaklumi kekerasan (skor 1) berbahaya bagi ketahanan negara.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    },
    {
      "sub_topic": "Anti Radikalisme",
      "difficulty": "sedang",
      "question_text": "Saat Anda memeriksa papan pengumuman umum dan koridor ruang tunggu kantor pelayanan kecamatan pada pagi hari, Anda menemukan beberapa stiker dan selebaran gelap yang memuat simbol serta propaganda organisasi terlarang yang anti-NKRI menempel di sudut dinding. Langkah paling tepat yang Anda lakukan adalah...",
      "pilihan": [
        {
          "teks": "Segera mendokumentasikan bukti temuan tersebut, mengamankan atau melepaskannya sesuai prosedur ketertiban kantor, dan melaporkannya kepada pimpinan serta bagian keamanan untuk penelusuran.",
          "skor": 5
        },
        {
          "teks": "Segera melaporkannya kepada pimpinan kantor dan petugas keamanan agar segera dilakukan pemeriksaan kamera pengawas dan penertiban.",
          "skor": 4
        },
        {
          "teks": "Langsung mencabut dan membuang seluruh selebaran propaganda tersebut ke tempat sampah agar tidak terbaca oleh masyarakat pengunjung.",
          "skor": 3
        },
        {
          "teks": "Memotret selebaran tersebut lalu mengirimkannya ke grup percakapan rekan kerja untuk menanyakan siapa yang menempelkannya.",
          "skor": 2
        },
        {
          "teks": "Membiarkan selebaran tersebut tetap menempel karena merasa urusan kebersihan papan pengumuman adalah tugas petugas kebersihan.",
          "skor": 1
        }
      ],
      "explanation": "Penyebaran propaganda organisasi terlarang di fasilitas pelayanan publik negara merupakan ancaman ideologis yang harus ditangani cepat namun tetap menjaga barang bukti untuk pengusutan. Mendokumentasikan, mengamankan sesuai prosedur, dan melapor ke pimpinan serta keamanan (skor 5) mencegah warga terpapar sekaligus membantu pelacakan pelaku. Melapor tanpa langsung mengamankan visualisasi (skor 4) atau langsung membuang tanpa dokumentasi/pelaporan (skor 3) masing-masing kehilangan satu unsur penanganan optimal. Menyebarkan ke grup internal tanpa prosedur (skor 2) berisiko menyebarkan kepanikan, sedangkan membiarkan (skor 1) sangat lalai.",
      "source_reference": "Kisi-Kisi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Anti Radikalisme"
    }
  ]
];
