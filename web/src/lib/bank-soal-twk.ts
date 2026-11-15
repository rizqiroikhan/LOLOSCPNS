/**
 * Bank Soal TWK (Tes Wawasan Kebangsaan) Terkurasi — LOLOS CPNS.
 * Berisi 60 butir soal unik (30 untuk Paket Perdana & 30 untuk Paket Intensif/Terpadu),
 * mencakup seluruh 5 kisi-kisi resmi Kepmenpan-RB Nomor 321 Tahun 2024:
 * Nasionalisme, Integritas, Bela Negara, Pilar Negara, dan Bahasa Negara.
 */

export interface DefinisiButirTWK {
  sub_topic: string;
  difficulty: "mudah" | "sedang" | "sulit";
  question_text: string;
  pilihan: [string, string, string, string, string];
  indeksBenar: 0 | 1 | 2 | 3 | 4;
  explanation: string;
  source_reference: string;
}

export const BANK_SOAL_TWK_SET_1: DefinisiButirTWK[] = [
  // 1-6: Nasionalisme
  {
    sub_topic: "Nasionalisme",
    difficulty: "mudah",
    question_text:
      "Kongres Pemuda II tanggal 28 Oktober 1928 melahirkan ikrar Sumpah Pemuda yang menjadi tonggak persatuan bangsa. Makna utama ikrar 'Menjunjung bahasa persatuan, bahasa Indonesia' dalam penyelenggaraan negara saat ini adalah...",
    pilihan: [
      "Melarang seluruh penggunaan bahasa daerah di lingkungan keluarga.",
      "Menjadikan bahasa Indonesia sebagai sarana komunikasi pemersatu lintas suku dalam pelayanan publik tanpa mematikan bahasa daerah.",
      "Mengganti seluruh istilah hukum internasional dengan bahasa daerah mayoritas.",
      "Mewajibkan seluruh naskah akademik luar negeri diterbitkan hanya dalam bahasa daerah.",
      "Menyeragamkan dialek daerah menjadi satu logat nasional yang seragam.",
    ],
    indeksBenar: 1,
    explanation:
      "Pasal 36 UUD NRI 1945 dan Sumpah Pemuda menegaskan bahasa Indonesia sebagai bahasa negara pemersatu lintas daerah, sementara Pasal 32 ayat (2) tetap melindungi bahasa daerah sebagai kekayaan budaya nasional.",
    source_reference: "UUD NRI 1945 Pasal 32 & 36 — Kisi-Kisi Nasionalisme",
  },
  {
    sub_topic: "Nasionalisme",
    difficulty: "sedang",
    question_text:
      "Sebuah kementerian membuka kesempatan pengadaan aplikasi tata persuratan elektronik. Vendor dalam negeri menawarkan sistem yang memenuhi spesifikasi teknis meski masih perlu pendampingan migrasi data, sementara vendor asing menawarkan harga lebih murah dengan lisensi tahunan terikat. Sikap nasionalisme ekonomi ASN adalah...",
    pilihan: [
      "Memilih vendor asing tanpa pertimbangan TKDN karena biaya tahun pertama tampak lebih rendah.",
      "Memprioritaskan produk dalam negeri yang memenuhi standar teknis serta mendorong kemandirian teknologi nasional sesuai aturan pengadaan.",
      "Menunda proyek digitalisasi selama lima tahun hingga seluruh pegawai mampu membangun sistem sendiri.",
      "Memecah anggaran menjadi paket kecil agar bisa ditunjuk langsung tanpa seleksi vendor.",
      "Membatalkan anggaran perangkat lunak dan kembali ke sistem arsip kertas sepenuhnya.",
    ],
    indeksBenar: 1,
    explanation:
      "Nasionalisme dalam kebijakan publik tercermin pada keberpihakan terhadap Tingkat Komponen Dalam Negeri (TKDN) dan kemandirian industri nasional sepanjang memenuhi standar mutu dan aturan pengadaan.",
    source_reference: "Perpres Pengadaan Barang/Jasa & Nilai Nasionalisme ASN",
  },
  {
    sub_topic: "Nasionalisme",
    difficulty: "sedang",
    question_text:
      "Ketika ditempatkan di daerah terluar yang memiliki adat istiadat berbeda jauh dari daerah asal, seorang ASN baru merasa canggung dengan tata krama warga setempat. Tindakan yang paling mencerminkan semangat nasionalisme inklusif adalah...",
    pilihan: [
      "Mengusulkan mutasi secepatnya ke kota asal dengan alasan ketidakcocokan budaya.",
      "Membatasi interaksi dengan warga hanya sebatas penandatanganan dokumen administratif.",
      "Mempelajari kearifan lokal setempat dengan sikap hormat sehingga pelayanan publik lebih diterima masyarakat.",
      "Meminta tokoh adat mengubah kebiasaan lokal agar mengikuti budaya daerah asal ASN.",
      "Menjalankan tugas hanya bersama rekan sesama perantau di kantor.",
    ],
    indeksBenar: 2,
    explanation:
      "ASN berperan sebagai perekat dan pemersatu bangsa (UU No. 20 Tahun 2023) yang mampu menghargai kemajemukan sosial budaya untuk memperkuat kesatuan pelayanan publik.",
    source_reference: "UU No. 20 Tahun 2023 tentang ASN — Fungsi Perekat Bangsa",
  },
  {
    sub_topic: "Nasionalisme",
    difficulty: "sulit",
    question_text:
      "Organisasi Boedi Oetomo tahun 1908 menandai lahirnya Kebangkitan Nasional karena untuk pertama kalinya perjuangan kemerdekaan menggunakan strategi...",
    pilihan: [
      "Perlawanan bersenjata serentak di seluruh pelabuhan niaga Nusantara.",
      "Pengorganisasian modern berbasis pendidikan, kesadaran kebangsaan, dan organisasi terstruktur.",
      "Pemboikotan total seluruh jalur perdagangan rempah ke Eropa.",
      "Pembentukan tentara sukarela di bawah pengawasan penguasa kolonial.",
      "Negosiasi langsung pembagian wilayah kerajaan secara terpisah.",
    ],
    indeksBenar: 1,
    explanation:
      "Kebangkitan Nasional 20 Mei 1908 menggeser corak perjuangan dari kedaerahan dan fisik yang sporadis menjadi gerakan terorganisasi melalui pendidikan dan kesadaran nasional.",
    source_reference: "Sejarah Pergerakan Nasional Indonesia",
  },
  {
    sub_topic: "Nasionalisme",
    difficulty: "sedang",
    question_text:
      "Menjelang pemilihan kepala daerah, suhu politik di ruang publik meningkat akibat penyebaran isu identitas di media sosial. Sebagai ASN, wujud nasionalisme yang tepat adalah...",
    pilihan: [
      "Menyukai dan membagikan ulang unggahan salah satu pasangan calon secara anonim.",
      "Menjaga netralitas ASN, tidak menyebarkan isu memecah belah, serta meluruskan informasi resmi layanan publik.",
      "Menggalang dukungan di grup WhatsApp keluarga besar memakai foto berseragam dinas.",
      "Melarang warga mengurus administrasi kependudukan jika berbeda pilihan politik.",
      "Ikut berdebat terbuka membela kandidat favorit dengan menyebut jabatan instansi.",
    ],
    indeksBenar: 1,
    explanation:
      "Netralitas ASN adalah syarat mutlak agar birokrasi melayani seluruh warga secara adil tanpa diskriminasi politik serta menjaga keutuhan bangsa.",
    source_reference: "SKB Netralitas Pegawai ASN & Prinsip Nasionalisme",
  },
  {
    sub_topic: "Nasionalisme",
    difficulty: "sulit",
    question_text:
      "Konsep Wawasan Nusantara memandang Indonesia sebagai satu kesatuan politik, ekonomi, sosial budaya, serta pertahanan dan keamanan. Konsekuensi langsung asas kepulauan (*archipelagic state*) yang diakui UNCLOS 1982 bagi kedaulatan NKRI adalah...",
    pilihan: [
      "Laut di antara pulau-pulau Indonesia menjadi perairan bebas internasional.",
      "Laut penghubung antarpulau merupakan wilayah perairan kedaulatan penuh yang menyatukan daratan Indonesia.",
      "Setiap provinsi berhak memungut bea cukai terpisah di selat penghubung.",
      "Batas Zona Ekonomi Eksklusif diukur hanya 3 mil dari garis pantai pulau terluar.",
      "Kapal perang asing bebas berlabuh di pelabuhan domestik tanpa izin diplomatik.",
    ],
    indeksBenar: 1,
    explanation:
      "Deklarasi Djuanda 1957 yang dikukuhkan UNCLOS 1982 menjadikan laut di antara pulau bukan pemisah, melainkan bagian utuh dari wilayah kedaulatan NKRI.",
    source_reference: "Deklarasi Djuanda 1957 & UNCLOS 1982",
  },
  // 7-12: Integritas
  {
    sub_topic: "Integritas",
    difficulty: "mudah",
    question_text:
      "Seorang pemohon izin usaha menyelipkan amplop berisi uang tunai di dalam map berkas sambil berbisik agar berkasnya diproses lebih cepat dari antrean normal. Tindakan ASN berintegritas adalah...",
    pilihan: [
      "Menerima amplop tersebut karena pemohon memberikannya secara sukarela.",
      "Menolak amplop dengan tegas dan sopan, memproses permohonan sesuai urutan antrean baku, serta melaporkan upaya suap melalui UPG.",
      "Menyimpan amplop untuk disumbangkan ke panti asuhan agar tidak menjadi hak pribadi.",
      "Meminta pemohon menitipkan amplop kepada petugas keamanan di luar jam kantor.",
      "Memproses berkasnya lebih dulu lalu mengembalikan uang setelah izin terbit.",
    ],
    indeksBenar: 1,
    explanation:
      "UU No. 20 Tahun 2001 mewajibkan penyelenggara negara menolak gratifikasi yang terkait jabatan, memperlakukan masyarakat secara setara tanpa suap pelicin, dan melaporkannya ke UPG/KPK.",
    source_reference: "UU No. 20 Tahun 2001 tentang Pemberantasan Tipikor",
  },
  {
    sub_topic: "Integritas",
    difficulty: "sedang",
    question_text:
      "Atasan meminta Anda menandatangani berita acara serah terima pengadaan perangkat komputer sebanyak 20 unit, padahal barang yang baru tiba di gudang baru 14 unit dengan alasan 6 unit sisanya masih dalam pengiriman. Sikap yang paling tepat adalah...",
    pilihan: [
      "Menandatangani berita acara atas dasar loyalitas penuh kepada pimpinan.",
      "Menolak menandatangani berita acara sebelum jumlah dan spesifikasi barang benar-benar lengkap dan terverifikasi secara fisik.",
      "Menandatangani dokumen dengan memberi catatan rahasia di buku pribadi.",
      "Meminta rekan staf baru menandatangani berkas tersebut untuk menghindari risiko.",
      "Menyetujui berita acara dengan syarat penyedia membayar uang jaminan pribadi.",
    ],
    indeksBenar: 1,
    explanation:
      "Integritas dan akuntabilitas menuntut kesesuaian fakta fisik dan dokumen hukum. Menandatangani BAST fiktif merupakan pelanggaran hukum pengadaan dan administrasi keuangan negara.",
    source_reference: "Perpres Pengadaan & Kode Etik Integritas ASN",
  },
  {
    sub_topic: "Integritas",
    difficulty: "sedang",
    question_text:
      "Dalam tim penguji seleksi beasiswa internal instansi, Anda mendapati salah satu peserta adalah keponakan kandung Anda yang memenuhi seluruh syarat berkas. Langkah integritas untuk menghindari benturan kepentingan adalah...",
    pilihan: [
      "Tetap menilai keponakan dengan memberi nilai tambahan agar tidak mengecewakan keluarga.",
      "Mengungkapkan hubungan keluarga secara tertulis kepada panitia dan mengundurkan diri dari penilaian peserta tersebut.",
      "Diam saja karena merasa sanggup menilai secara objektif.",
      "Memberikan bocoran pertanyaan wawancara kepada keponakan sebelum ujian dimulai.",
      "Mengganti nama peserta dalam daftar agar panitia lain tidak curiga.",
    ],
    indeksBenar: 1,
    explanation:
      "Pengelolaan benturan kepentingan (*conflict of interest*) mengharuskan pejabat menyatakan hubungan kekerabatan dan menarik diri dari proses pengambilan keputusan terhadap pihak terkait.",
    source_reference: "Pedoman Penanganan Benturan Kepentingan Kemenpan-RB",
  },
  {
    sub_topic: "Integritas",
    difficulty: "sulit",
    question_text:
      "Perbedaan mendasar antara tindak pidana suap dengan gratifikasi ilegal yang tidak dilaporkan menurut hukum positif di Indonesia terletak pada...",
    pilihan: [
      "Suap hanya berlaku untuk pejabat eselon atas, sedangkan gratifikasi untuk pelaksana.",
      "Suap melibatkan kesepakatan timbal balik (*meeting of minds*) untuk memengaruhi keputusan, sedangkan gratifikasi bersifat pemberian yang berpotensi memengaruhi objektivitas di kemudian hari.",
      "Gratifikasi hanya berbentuk barang elektronik, sedangkan suap hanya uang tunai.",
      "Suap tidak dipidana apabila nilainya di bawah sepuluh juta rupiah.",
      "Gratifikasi otomatis menjadi sah apabila dibagi rata ke seluruh pegawai kantor.",
    ],
    indeksBenar: 1,
    explanation:
      "Pada suap terdapat unsur transaksional (janji/kesepakatan berbuat atau tidak berbuat sesuatu), sedangkan gratifikasi adalah pemberian dalam arti luas kepada pegawai negeri terkait jabatan yang dianggap suap bila tidak dilaporkan ke KPK maksimal 30 hari kerja.",
    source_reference: "Pasal 12B UU No. 20 Tahun 2001",
  },
  {
    sub_topic: "Integritas",
    difficulty: "mudah",
    question_text:
      "Anda tidak sengaja merusak printer dinas saat sedang bekerja lembur di ruang kerja tanpa ada saksi lain. Sikap yang mencerminkan integritas pribadi adalah...",
    pilihan: [
      "Membiarkannya di meja kerja agar petugas kebersihan dianggap sebagai penyebabnya.",
      "Mengaku secara jujur kepada penanggung jawab inventaris kantor dan mengikuti prosedur perbaikan resmi.",
      "Memindahkan printer rusak ke ruangan divisi lain sebelum pegawai datang.",
      "Mengajukan pembelian printer baru memakai nota perjalanan dinas fiktif.",
      "Menyembunyikan printer di gudang arsip hingga akhir tahun anggaran.",
    ],
    indeksBenar: 1,
    explanation:
      "Kejujuran dan tanggung jawab atas kesalahan ketika tidak diawasi siapapun merupakan inti dari nilai integritas dan amanah.",
    source_reference: "Nilai Dasar ASN BerAKHLAK — Akuntabel & Integritas",
  },
  {
    sub_topic: "Integritas",
    difficulty: "sulit",
    question_text:
      "Sistem pelaporan pelanggaran (*whistleblowing system*) di instansi pemerintah bertujuan melindungi integritas organisasi. Syarat utama agar mekanisme ini efektif membangun budaya anti-korupsi adalah...",
    pilihan: [
      "Mempublikasikan identitas pelapor secara terbuka di papan pengumuman kantor.",
      "Menjamin kerahasiaan identitas pelapor, perlindungan dari tindakan balasan, serta tindak lanjut investigasi yang objektif.",
      "Mengharuskan pelapor menyertakan persetujuan tertulis dari atasan terlapor.",
      "Membatasi pelaporan hanya untuk kerugian negara di atas satu miliar rupiah.",
      "Mengenakan biaya administrasi pada setiap aduan pegawai.",
    ],
    indeksBenar: 1,
    explanation:
      "Perlindungan kerahasiaan pelapor (*whistleblower*) dan kepastian tindak lanjut independen mencegah intimidasi sekaligus mendorong keberanian pegawai melaporkan kecurangan.",
    source_reference: "Strategi Nasional Pencegahan Korupsi & Zona Integritas WBK/WBBM",
  },
  // 13-18: Bela Negara
  {
    sub_topic: "Bela Negara",
    difficulty: "mudah",
    question_text:
      "Menurut Pasal 27 ayat (3) UUD NRI Tahun 1945, setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara. Contoh aktualisasi bela negara oleh ASN bidang kesehatan adalah...",
    pilihan: [
      "Menuntut pengadaan senjata api dinas bagi seluruh tenaga medis puskesmas.",
      "Mengabdi secara profesional menangani wabah penyakit menular dan mengedukasi ketahanan kesehatan masyarakat hingga pelosok.",
      "Menghentikan layanan klinik untuk mengikuti parade baris-berbaris sepanjang bulan.",
      "Hanya melayani pasien yang berasal dari instansi pemerintah pusat.",
      "Menolak menggunakan alat kesehatan buatan dalam negeri saat bertugas.",
    ],
    indeksBenar: 1,
    explanation:
      "Sesuai UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara, bela negara non-militer diwujudkan melalui pengabdian sesuai profesi.",
    source_reference: "UUD 1945 Pasal 27 ayat (3) & UU No. 23 Tahun 2019",
  },
  {
    sub_topic: "Bela Negara",
    difficulty: "sedang",
    question_text:
      "Salah satu ancaman nirmiliter paling nyata terhadap ketahanan nasional di era digital adalah serangan siber dan pencurian data kependudukan. Peran ASN pengelola sistem informasi dalam kerangka bela negara adalah...",
    pilihan: [
      "Membagikan kata sandi akun server di grup pesan instan agar mudah diakses bersama.",
      "Menerapkan tata kelola keamanan data, pemutakhiran sistem, enkripsi, dan kepatuhan UU Pelindungan Data Pribadi.",
      "Menyimpan seluruh basis data layanan publik di komputer pribadi tanpa pengamanan.",
      "Menonaktifkan seluruh layanan digital selamanya untuk menghindari peretasan.",
      "Mengunggah cadangan data warga ke akun penyimpanan publik gratisan.",
    ],
    indeksBenar: 1,
    explanation:
      "Ketahanan siber instansi merupakan wujud bela negara modern untuk menjaga kedaulatan data strategis bangsa dan hak privasi warga negara.",
    source_reference: "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi & Bela Negara",
  },
  {
    sub_topic: "Bela Negara",
    difficulty: "sedang",
    question_text:
      "Dalam lima nilai dasar Bela Negara, indikator 'Rela berkorban untuk bangsa dan negara' bagi aparatur sipil negara paling tepat dicerminkan oleh...",
    pilihan: [
      "Bersedia ditugaskan di wilayah 3T (Terdepan, Terluar, Tertinggal) dengan penuh tanggung jawab demi pemerataan layanan negara.",
      "Menolak penugasan di luar ibu kota provinsi kecuali tunjangan naik tiga kali lipat.",
      "Mengutamakan urusan bisnis pribadi pada jam kerja kantor.",
      "Menghindari penugasan lintas daerah dengan alasan kenyamanan pribadi.",
      "Meninggalkan lokasi tugas sebelum masa tanggap darurat bencana selesai.",
    ],
    indeksBenar: 0,
    explanation:
      "Kesediaan mendahulukan kepentingan bangsa di atas kenyamanan pribadi—seperti kesiapan mengabdi di wilayah 3T dan situasi darurat—adalah inti nilai rela berkorban.",
    source_reference: "Modul Bela Negara Latsar CPNS LAN RI",
  },
  {
    sub_topic: "Bela Negara",
    difficulty: "sulit",
    question_text:
      "Sistem Pertahanan dan Keamanan Rakyat Semesta (Sishankamrata) yang diatur dalam Pasal 30 ayat (2) UUD NRI 1945 menempatkan komponen utama serta komponen cadangan dan pendukung sebagai berikut:",
    pilihan: [
      "Polri dan Satpol PP sebagai komponen utama pertahanan perang, rakyat sebagai komponen inti tempur.",
      "TNI sebagai kekuatan utama pertahanan dan Polri sebagai kekuatan utama keamanan ketertiban, sedangkan rakyat sebagai kekuatan pendukung.",
      "ASN kementerian sebagai kekuatan utama pengganti TNI di perbatasan darat.",
      "Lembaga swasta sebagai pengendali utama komando pertahanan wilayah.",
      "Seluruh pegawai negeri wajib memanggul senjata pada setiap hari kerja.",
    ],
    indeksBenar: 1,
    explanation:
      "Pasal 30 ayat (2) UUD NRI 1945 menegaskan usaha pertahanan dan keamanan negara dilaksanakan melalui Sishankamrata oleh TNI dan Kepolisian Negara RI sebagai kekuatan utama, dan rakyat sebagai kekuatan pendukung.",
    source_reference: "Pasal 30 ayat (2) UUD NRI Tahun 1945",
  },
  {
    sub_topic: "Bela Negara",
    difficulty: "sedang",
    question_text:
      "Penyebaran disinformasi (hoaks) bertema SARA yang memicu kerusuhan sosial merupakan bentuk ancaman terhadap keutuhan bangsa. Langkah awal bela negara warga dan ASN saat menerima pesan provokatif yang belum jelas sumbernya adalah...",
    pilihan: [
      "Segera meneruskan ke seluruh grup agar publik ikut waspada.",
      "Melakukan verifikasi fakta (*saring sebelum sharing*), tidak menyebarluaskan, serta melaporkannya melalui kanal aduan konten resmi.",
      "Menambahkan opini pribadi yang lebih emosional sebelum diteruskan.",
      "Menjadikan pesan tersebut bahan pembicaraan di loket pelayanan masyarakat.",
      "Membuat akun anonim untuk menyebarkan pesan tandingan berupa fitnah lain.",
    ],
    indeksBenar: 1,
    explanation:
      "Ketahanan informasi masyarakat dibangun melalui literasi digital, verifikasi fakta kepada otoritas resmi, dan menahan diri tidak menyebarkan kabar bohong.",
    source_reference: "Nilai Cinta Tanah Air & Kesadaran Berbangsa Bernegara",
  },
  {
    sub_topic: "Bela Negara",
    difficulty: "mudah",
    question_text:
      "Sikap cinta tanah air yang dapat diterapkan secara konsisten dalam kehidupan keseharian ASN di kantor adalah...",
    pilihan: [
      "Menggunakan pakaian dinas batik/tenun tradisional sesuai ketentuan dengan rasa bangga dan hemat menggunakan energi listrik serta air kantor.",
      "Memboroskan listrik pendingin ruangan sepanjang malam karena ditanggung APBN.",
      "Merendahkan produk kerajinan UMKM lokal di hadapan tamu instansi.",
      "Menghindari upacara peringatan hari besar nasional tanpa alasan sah.",
      "Membuang limbah plastik di halaman gedung pelayanan umum.",
    ],
    indeksBenar: 0,
    explanation:
      "Mencintai budaya dan produk dalam negeri sekaligus menjaga kelestarian lingkungan serta aset negara merupakan bagian dari nilai Cinta Tanah Air dalam Bela Negara.",
    source_reference: "Indikator Nilai Bela Negara — Cinta Tanah Air",
  },
  // 19-24: Pilar Negara
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "mudah",
    question_text:
      "Kebijakan pemerintah membangun sekolah, puskesmas, dan akses jalan di wilayah pedalaman serta pulau terluar dengan tarif layanan yang terjangkau merupakan wujud nyata pengamalan Pancasila, khususnya sila ke...",
    pilihan: [
      "Pertama, Ketuhanan Yang Maha Esa.",
      "Kedua, Kemanusiaan yang Adil dan Beradab.",
      "Ketiga, Persatuan Indonesia.",
      "Keempat, Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan.",
      "Kelima, Keadilan Sosial bagi Seluruh Rakyat Indonesia.",
    ],
    indeksBenar: 4,
    explanation:
      "Pemerataan kesejahteraan, akses pendidikan, kesehatan, dan pembangunan berkeadilan di seluruh pelosok Nusantara merupakan implementasi langsung Sila Kelima Pancasila.",
    source_reference: "Pembukaan & Nilai Sila Kelima Pancasila",
  },
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "sedang",
    question_text:
      "Dalam struktur ketatanegaraan Indonesia pasca-amandemen UUD NRI Tahun 1945, lembaga negara yang berwenang menguji undang-undang terhadap Undang-Undang Dasar serta memutus sengketa kewenangan lembaga negara adalah...",
    pilihan: [
      "Mahkamah Agung",
      "Mahkamah Konstitusi",
      "Komisi Yudisial",
      "Dewan Perwakilan Daerah",
      "Badan Pemeriksa Keuangan",
    ],
    indeksBenar: 1,
    explanation:
      "Berdasarkan Pasal 24C ayat (1) UUD NRI 1945, Mahkamah Konstitusi berwenang mengadili pada tingkat pertama dan terakhir untuk menguji UU terhadap UUD (*judicial review*) dan memutus sengketa kewenangan lembaga negara.",
    source_reference: "Pasal 24C UUD NRI Tahun 1945",
  },
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "sulit",
    question_text:
      "Menurut Pasal 18 UUD NRI 1945, Indonesia menerapkan prinsip otonomi daerah seluas-luasnya dalam bingkai Negara Kesatuan Republik Indonesia (NKRI). Namun terdapat urusan pemerintahan absolut yang tetap menjadi kewenangan penuh Pemerintah Pusat, yaitu...",
    pilihan: [
      "Pengelolaan pasar tradisional, parkir daerah, dan kebersihan kota.",
      "Politik luar negeri, pertahanan, keamanan, yustisi, moneter dan fiskal nasional, serta agama.",
      "Perizinan usaha mikro lokal, penataan taman kabupaten, dan pariwisata desa.",
      "Penentuan jadwal libur festival budaya kabupaten.",
      "Pengelolaan sekolah dasar dan penerbitan retribusi daerah.",
    ],
    indeksBenar: 1,
    explanation:
      "Sesuai UU No. 23 Tahun 2014 tentang Pemerintahan Daerah sebagai turunan Pasal 18 UUD 1945, enam urusan pemerintahan absolut Pemerintah Pusat adalah politik luar negeri, pertahanan, keamanan, yustisi, moneter/fiskal nasional, dan agama.",
    source_reference: "Pasal 18 UUD 1945 & UU No. 23 Tahun 2014",
  },
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "sedang",
    question_text:
      "Semboyan Bhinneka Tunggal Ika berasal dari Kitab Sutasoma karya Mpu Tantular pada masa Kerajaan Majapahit. Prinsip dasar dalam semboyan tersebut bagi kebijakan publik modern adalah...",
    pilihan: [
      "Menyeragamkan seluruh ekspresi budaya agar tidak memicu perbedaan.",
      "Mengakui dan menghargai keberagaman suku, agama, serta budaya dalam kesatuan hukum dan cita-cita bangsa yang sama.",
      "Mengutamakan kelompok mayoritas dalam seluruh akses jabatan publik.",
      "Memisahkan wilayah administrasi negara secara eksklusif berdasarkan agama.",
      "Mengabaikan hak kelompok minoritas apabila jumlahnya di bawah lima persen.",
    ],
    indeksBenar: 1,
    explanation:
      "Bhinneka Tunggal Ika ('berbeda-beda tetapi tetap satu') menjamin persatuan bangsa tanpa menghapus keberagaman identitas masyarakat Indonesia.",
    source_reference: "Empat Konsensus Dasar Kebangsaan — Bhinneka Tunggal Ika",
  },
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "sulit",
    question_text:
      "Pancasila berkedudukan sebagai sumber dari segala sumber hukum negara di Indonesia. Konsekuensi hukum dari kedudukan tersebut menurut UU tentang Pembentukan Peraturan Perundang-undangan adalah...",
    pilihan: [
      "Peraturan Daerah berhak membatalkan Undang-Undang apabila disetujui kepala daerah.",
      "Materi muatan setiap peraturan perundang-undangan dari UU hingga Perda tidak boleh bertentangan dengan nilai-nilai Pancasila.",
      "Keputusan Presiden dapat langsung mengubah pasal-pasal UUD NRI 1945.",
      "Instruksi internal dinas setara kedudukannya dengan Peraturan Pemerintah.",
      "Norma hukum adat otomatis gugur seluruhnya tanpa kajian hukum.",
    ],
    indeksBenar: 1,
    explanation:
      "Berdasarkan UU No. 12 Tahun 2011 jo. UU No. 13 Tahun 2022 Pasal 2, Pancasila adalah sumber segala sumber hukum negara sehingga seluruh peraturan di bawahnya wajib selaras dengannya.",
    source_reference: "UU No. 12 Tahun 2011 — Hierarki Peraturan Perundang-undangan",
  },
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "sedang",
    question_text:
      "Dalam rapat musyawarah RT maupun forum kerja instansi, keputusan diambil setelah mendengarkan pendapat berbagai peserta, namun pendapat pribadi kita akhirnya tidak terpilih. Pengamalan Sila Keempat Pancasila mengharuskan kita...",
    pilihan: [
      "Menolak melaksanakan hasil rapat karena tidak sesuai usulan pribadi.",
      "Menerima dan melaksanakan hasil keputusan bersama dengan penuh itikad baik serta tanggung jawab.",
      "Membuat grup tandingan untuk membatalkan kesepakatan resmi rapat.",
      "Menyalahkan pimpinan rapat di luar forum.",
      "Meninggalkan forum sebelum rapat ditutup secara resmi.",
    ],
    indeksBenar: 1,
    explanation:
      "Salah satu butir pengamalan Sila Keempat Pancasila adalah menghormati dan menjunjung tinggi setiap keputusan musyawarah serta melaksanakannya dengan itikad baik.",
    source_reference: "Butir Pengamalan Sila Keempat Pancasila",
  },
  // 25-30: Bahasa Negara
  {
    sub_topic: "Bahasa Negara",
    difficulty: "mudah",
    question_text:
      "Penulisan kata baku sesuai Pedoman Umum Ejaan Bahasa Indonesia (EYD Edisi V) dalam naskah surat dinas instansi pemerintah yang paling tepat terdapat pada kalimat...",
    pilihan: [
      "Seluruh peserta diharap mengikuti tehnik pengisian formulir secara seksama.",
      "Rapat kordinasi membahas kwalitas pelayanan publik berjalan lancar.",
      "Setiap pemohon wajib membawa dokumen asli untuk proses verifikasi dan analisis berkas.",
      "Jadual kegiatan sosialisasi akan dilaksanakan di aula lantai tiga besok pagi.",
      "Petugas telah merubah sistim antrean secara online sejak bulan lalu.",
    ],
    indeksBenar: 2,
    explanation:
      "Bentuk baku menurut KBBI dan EYD V adalah 'verifikasi' dan 'analisis', bukan 'tehnik' (teknik), 'seksama' (saksama), 'kordinasi' (koordinasi), 'kwalitas' (kualitas), 'jadual' (jadwal), 'merubah' (mengubah), atau 'sistim' (sistem).",
    source_reference: "EYD Edisi V & KBBI — Ejaan Kata Baku",
  },
  {
    sub_topic: "Bahasa Negara",
    difficulty: "sedang",
    question_text:
      "Manakah kalimat berikut yang merupakan kalimat efektif dan bebas dari pemborosan kata untuk digunakan dalam pengumuman resmi instansi?",
    pilihan: [
      "Kepada seluruh para hadirin dimohon agar supaya segera memasuki ruangan rapat.",
      "Demi untuk kelancaran acara, seluruh peserta diharapkan hadir tepat waktu.",
      "Seluruh peserta seleksi diharap hadir 30 menit sebelum ujian dimulai.",
      "Banyak berbagai macam-macam berkas yang harus segera dikumpulkan hari ini juga.",
      "Bagi semua calon pelamar kerja yang mana telah lulus seleksi diminta melapor.",
    ],
    indeksBenar: 2,
    explanation:
      "Kalimat pada pilihan C ringkas, memiliki subjek dan predikat jelas, serta tidak mengandung pleonasme seperti 'seluruh para', 'agar supaya', 'demi untuk', 'banyak berbagai macam-macam', atau 'yang mana'.",
    source_reference: "Pedoman Kalimat Efektif Bahasa Indonesia Baku",
  },
  {
    sub_topic: "Bahasa Negara",
    difficulty: "sedang",
    question_text:
      "Penulisan huruf kapital, gelar, dan tanda baca yang paling benar sesuai EYD Edisi V terdapat pada baris...",
    pilihan: [
      "Prof. Dr. Rahmawati, M.Si. menjabat sebagai Kepala Dinas Pendidikan provinsi Jawa Barat.",
      "Drs. Hendra Wijaya, S.H., M.H. menghadiri rapat koordinasi di Kementerian Keuangan.",
      "Ir. Bagus Pratama, M.T, menyampaikan laporan di aula Balai kota Surabaya.",
      "Ibu Dr. Sari, M.Pd diundang Presiden RI ke istana negara jakarta.",
      "Surat tugas ini ditandatangani oleh Kepala biro kepegawaian pada hari senin.",
    ],
    indeksBenar: 1,
    explanation:
      "Penulisan gelar depan dan belakang beserta tanda titik dan koma pada 'Drs. Hendra Wijaya, S.H., M.H.' serta kapitalisasi nama lembaga resmi 'Kementerian Keuangan' sudah tepat sesuai kaidah EYD V.",
    source_reference: "EYD Edisi V — Huruf Kapital & Tanda Baca",
  },
  {
    sub_topic: "Bahasa Negara",
    difficulty: "sulit",
    question_text:
      "Penggunaan tanda hubung (-) dan penulisan gabungan kata yang benar dalam naskah peraturan perundang-undangan terdapat pada kalimat...",
    pilihan: [
      "Kegiatan paska-pelantikan berlangsung tertib di halaman kantor bupati.",
      "Kerja sama antarinstansi diperkuat untuk menanggulangi tindak non-prosedural.",
      "Pelayanan terpadu satu pintu dilaksanakan secara non-tunai sejak tahun ke-2.",
      "Pengadaan alat kesehatan dilakukan oleh tim subbagian tata usaha se-Indonesia.",
      "Penghargaan diberikan kepada karyawan teladan ke 3 pada hari anti korupsi.",
    ],
    indeksBenar: 3,
    explanation:
      "Bentuk terikat 'sub-' dan 'antar-' digabung ('subbagian', 'antarinstansi'), 'nontunai' dan 'pascapanen/pascapelantikan' serta 'antikorupsi' ditulis serangkai, sedangkan 'se-' sebelum huruf kapital memakai tanda hubung ('se-Indonesia').",
    source_reference: "EYD Edisi V — Penulisan Bentuk Terikat & Gabungan Kata",
  },
  {
    sub_topic: "Bahasa Negara",
    difficulty: "sedang",
    question_text:
      "Bacalah paragraf berikut: 'Transformasi digital layanan kependudukan mempercepat penerbitan dokumen warga. Kini masyarakat di wilayah perbatasan tidak perlu menunggu berminggu-minggu hanya untuk mencetak akta kelahiran. Pengurangan biaya transportasi ke ibu kota kabupaten menjadi manfaat langsung yang dirasakan.' Gagasan utama paragraf tersebut adalah...",
    pilihan: [
      "Biaya transportasi di wilayah perbatasan masih sangat mahal.",
      "Akta kelahiran merupakan dokumen terpenting bagi masyarakat.",
      "Transformasi digital layanan kependudukan mempercepat dan memudahkan pelayanan warga.",
      "Kabupaten di wilayah perbatasan kekurangan kantor cabang pelayanan.",
      "Masyarakat pedalaman menolak pengurusan dokumen secara daring.",
    ],
    indeksBenar: 2,
    explanation:
      "Kalimat pertama menjadi kalimat utama (deduktif) yang merangkum inti seluruh kalimat penjelas berikutnya mengenai manfaat percepatan layanan kependudukan digital.",
    source_reference: "Keterampilan Membaca & Penalaran Paragraf Bahasa Indonesia",
  },
  {
    sub_topic: "Bahasa Negara",
    difficulty: "sulit",
    question_text:
      "Penulisan kata depan 'di' dan imbuhan 'di-' yang seluruhnya benar terdapat pada kalimat...",
    pilihan: [
      "Berkas tersebut telah di simpan didalam lemari arsip bagian kepegawaian.",
      "Pengumuman kelulusan ditempel di papan informasi dan diumumkan melalui situs resmi.",
      "Surat undangan sudah dikirim ke pada kepala dinas dihari Jumat pagi.",
      "Para peserta duduk diatas kursi yang telah disusun di ruang ujian.",
      "Laporan keuangan tahunan di periksa oleh auditor di ruang rapat utama.",
    ],
    indeksBenar: 1,
    explanation:
      "Imbuhan pasif 'ditempel' dan 'diumumkan' ditulis serangkai dengan kata dasar, sedangkan kata depan penunjuk tempat 'di papan informasi' dan 'di ruang ujian' ditulis terpisah.",
    source_reference: "EYD Edisi V — Penulisan Kata Depan & Imbuhan",
  },
];

export const BANK_SOAL_TWK_SET_2: DefinisiButirTWK[] = [
  {
    sub_topic: "Nasionalisme",
    difficulty: "sedang",
    question_text:
      "Dalam menyusun bahan ajar pelatihan ASN lintas provinsi, seorang widyaiswara memilih contoh kasus pembangunan ekonomi dari Sumatra, Kalimantan, Sulawesi, Maluku, hingga Papua secara berimbang. Pendekatan ini mencerminkan nilai...",
    pilihan: [
      "Regionalisme eksklusif yang menonjolkan keunggulan wilayah tertentu.",
      "Nasionalisme inklusif yang mengakui kontribusi dan martabat setara seluruh daerah di Indonesia.",
      "Etnosentrisme administratif untuk mempercepat kelulusan peserta.",
      "Individualisme birokrasi demi efisiensi penyusunan materi.",
      "Isolasionisme budaya guna mencegah akulturasi antardaerah.",
    ],
    indeksBenar: 1,
    explanation:
      "Representasi berimbang seluruh wilayah Nusantara menumbuhkan rasa memiliki bersama sebagai satu bangsa Indonesia tanpa bias sentralisme.",
    source_reference: "Nilai Nasionalisme ASN — Kisi-Kisi SKD TWK",
  },
  {
    sub_topic: "Nasionalisme",
    difficulty: "mudah",
    question_text:
      "Peristiwa Proklamasi Kemerdekaan 17 Agustus 1945 bukan semata-mata hadiah penjajah, melainkan pernyataan kedaulatan bangsa Indonesia sendiri. Sikap generasi penerus di lingkungan kerja pemerintahan untuk menghormati jasa pahlawan adalah...",
    pilihan: [
      "Mengisi kemerdekaan dengan kinerja jujur, melayani publik sepenuh hati, dan menjaga persatuan bangsa.",
      "Menjadikan hari libur nasional sekadar momen rekreasi tanpa memaknai nilai perjuangan.",
      "Menuntut penghargaan khusus sebelum bersedia menyelesaikan pekerjaan rutin.",
      "Mengabaikan disiplin jam kerja karena menganggap tugas rutin tidak sepenting perang fisik.",
      "Membatasi kerja sama tim hanya dengan rekan satu almamater.",
    ],
    indeksBenar: 0,
    explanation:
      "Pengabdian profesional dan jujur dalam pelayanan publik merupakan cara paling nyata bagi ASN mengisi kemerdekaan yang diraih para pendiri bangsa.",
    source_reference: "Semangat Kebangsaan & Makna Proklamasi 1945",
  },
  {
    sub_topic: "Nasionalisme",
    difficulty: "sulit",
    question_text:
      "Para perumus dasar negara pada sidang BPUPKI menunjukkan semangat kebangsaan di atas kepentingan golongan ketika menyepakati perubahan rumusan tujuh kata pada Piagam Jakarta sebelum pengesahan UUD 1945 tanggal 18 Agustus 1945. Keteladanan utamanya adalah...",
    pilihan: [
      "Mengutamakan keutuhan negara bangsa Indonesia yang majemuk di atas ego kelompok.",
      "Menyerahkan perumusan konstitusi sepenuhnya kepada pihak militer asing.",
      "Menolak musyawarah mufakat apabila berlangsung lebih dari satu hari.",
      "Membentuk negara federasi terpisah untuk masing-masing pulau besar.",
      "Menghapus peran tokoh daerah dari struktur parlemen awal.",
    ],
    indeksBenar: 0,
    explanation:
      "Kompromi luhur 18 Agustus 1945 oleh Mohammad Hatta bersama tokoh Islam dan tokoh Indonesia Timur membuktikan keutuhan NKRI ditempatkan di atas kepentingan sektarian.",
    source_reference: "Sejarah Perumusan UUD NRI 1945 — PPKI 18 Agustus 1945",
  },
  {
    sub_topic: "Nasionalisme",
    difficulty: "sedang",
    question_text:
      "Ketergantungan tinggi terhadap bahan pangan impor dapat melemahkan daya tawar bangsa saat krisis global terjadi. Dukungan kebijakan ASN penyuluh pertanian terhadap kedaulatan pangan nasional paling tepat diwujudkan dengan...",
    pilihan: [
      "Mendorong petani beralih profesi ke sektor perdagangan barang impor.",
      "Mendampingi penerapan teknologi pascapanen, benih unggul lokal, dan diversifikasi pangan berbasis kearifan lokal.",
      "Membuka keran impor komoditas pokok setiap kali masa panen raya tiba.",
      "Mengalihkan seluruh lahan sawah produktif menjadi pergudangan komersial.",
      "Melarang kelompok tani membentuk koperasi pemasaran hasil bumi.",
    ],
    indeksBenar: 1,
    explanation:
      "Kemandirian ekonomi dan pangan merupakan pilar nasionalisme praktis yang melindungi kesejahteraan petani sekaligus ketahanan negara.",
    source_reference: "Trisakti & Nasionalisme Ekonomi Pembangunan",
  },
  {
    sub_topic: "Nasionalisme",
    difficulty: "sedang",
    question_text:
      "Ketika warga dari berbagai latar belakang budaya mengantre di loket layanan terpadu, terjadi kesalahpahaman kecil akibat perbedaan logat dan cara bertutur. Sikap ASN yang mengedepankan persatuan adalah...",
    pilihan: [
      "Ikut menertawakan logat salah satu warga bersama petugas lain.",
      "Menegahi secara santun, berkomunikasi jelas menggunakan bahasa Indonesia yang ramah, dan menuntaskan pelayanan keduanya.",
      "Menghentikan layanan loket selama dua jam sampai warga keluar ruangan.",
      "Mendahulukan warga yang memiliki kesamaan suku dengan petugas.",
      "Meminta warga berlogat daerah lain membawa penerjemah pribadi.",
    ],
    indeksBenar: 1,
    explanation:
      "Bahasa Indonesia dan sikap inklusif ASN berfungsi meredam kesalahpahaman antarkultur dan menjaga pelayanan publik yang berkeadilan.",
    source_reference: "Peran ASN sebagai Perekat dan Pemersatu Bangsa",
  },
  {
    sub_topic: "Nasionalisme",
    difficulty: "sulit",
    question_text:
      "Undang-Undang Nomor 24 Tahun 2009 mengatur bendera, bahasa, lambang negara, dan lagu kebangsaan sebagai simbol kedaulatan. Penggunaan Bahasa Indonesia yang bersifat wajib menurut undang-undang tersebut mencakup...",
    pilihan: [
      "Semua penamaan rambu umum, penunjuk jalan, fasilitas publik, nota kesepahaman resmi di Indonesia, dan peraturan perundang-undangan.",
      "Hanya pidato presiden pada tanggal 17 Agustus.",
      "Percakapan pribadi wisatawan asing di bandara internasional.",
      "Nama merek dagang pribadi warga di luar negeri.",
      "Siaran khusus pembelajaran bahasa asing di universitas luar negeri.",
    ],
    indeksBenar: 0,
    explanation:
      "Pasal 26–39 UU No. 24 Tahun 2009 mewajibkan penggunaan Bahasa Indonesia pada peraturan perundang-undangan, dokumen resmi negara, nama bangunan/jalan, dan informasi layanan publik di wilayah Indonesia.",
    source_reference: "UU No. 24 Tahun 2009 tentang Bendera, Bahasa, dan Lambang Negara",
  },
  {
    sub_topic: "Integritas",
    difficulty: "sedang",
    question_text:
      "Seorang pegawai melihat rekannya secara rutin mengubah laporan kehadiran manual agar tetap memperoleh tunjangan kinerja penuh meskipun sering terlambat. Prinsip integritas mendorong pegawai tersebut untuk...",
    pilihan: [
      "Ikut memalsukan daftar hadir agar dianggap setia kawan.",
      "Mengingatkan secara baik-baik terlebih dahulu, dan bila berlanjut melaporkan melalui saluran pengawasan internal sesuai mekanisme resmi.",
      "Menyebarkan foto daftar hadir ke media sosial publik secara sepihak.",
      "Menutup mata karena tidak ingin urusan pribadi terganggu.",
      "Meminta imbalan uang tutup mulut kepada rekan yang bersangkutan.",
    ],
    indeksBenar: 1,
    explanation:
      "Integritas mencakup keberanian menegakkan kejujuran secara beradab dan menggunakan saluran akuntabilitas organisasi apabila pelanggaran terus terjadi.",
    source_reference: "PP No. 94 Tahun 2021 tentang Disiplin PNS",
  },
  {
    sub_topic: "Integritas",
    difficulty: "mudah",
    question_text:
      "Saat melakukan perjalanan dinas luar kota menggunakan anggaran instansi, pengeluaran penginapan ternyata lebih hemat Rp400.000 dibanding batas maksimal anggaran. Kewajiban pegawai yang berintegritas adalah...",
    pilihan: [
      "Meminta hotel menerbitkan kuitansi kosong senilai pagu maksimal agar selisihnya dapat disimpan.",
      "Melaporkan dan mempertanggungjawabkan biaya secara riil (*at cost*) serta mengembalikan sisa dana ke kas negara/instansi.",
      "Membelanjakan sisa anggaran tersebut untuk oleh-oleh keluarga.",
      "Membagi rata sisa dana kepada pengemudi kendaraan sewaan tanpa kuitansi.",
      "Mengubah rincian tiket perjalanan agar sesuai seluruh total pagu.",
    ],
    indeksBenar: 1,
    explanation:
      "Pertanggungjawaban keuangan negara berlaku prinsip biaya riil (*at cost*) dan larangan penggelembungan kuitansi (*mark-up*).",
    source_reference: "PMK Standar Biaya & Prinsip Akuntabilitas Keuangan Negara",
  },
  {
    sub_topic: "Integritas",
    difficulty: "sulit",
    question_text:
      "Dalam pembangunan Zona Integritas menuju Wilayah Bebas dari Korupsi (WBK), mengapa digitalisasi layanan publik berbasis sistem pelacakan berkas (*tracking*) dinilai efektif meningkatkan integritas birokrasi?",
    pilihan: [
      "Karena memutus tatap muka langsung yang membuka celah pungutan liar sekaligus menciptakan jejak audit transparan.",
      "Karena menghapus kebutuhan pengawasan inspektorat jenderal secara permanen.",
      "Karena pegawai tidak perlu memahami peraturan perundang-undangan lagi.",
      "Karena masyarakat tidak diperbolehkan mengajukan keberatan atas penolakan izin.",
      "Karena anggaran operasional kantor dapat dialihkan ke bonus tanpa audit.",
    ],
    indeksBenar: 0,
    explanation:
      "Transparansi alur, kepastian waktu, dan jejak audit digital mempersempit ruang diskresi sepihak serta pungli dalam perizinan publik.",
    source_reference: "Permenpan-RB Zona Integritas WBK/WBBM",
  },
  {
    sub_topic: "Integritas",
    difficulty: "sedang",
    question_text:
      "Sebuah perusahaan swasta mengundang Anda menjadi narasumber seminar eksternal di akhir pekan dan memberikan honorarium sesuai tarif resmi kegiatan tersebut setelah Anda memperoleh surat tugas izin atasan. Dalam ketentuan pengendalian gratifikasi, tindakan paling aman adalah...",
    pilihan: [
      "Melaporkan penerimaan serta memastikan honorarium tidak terkait putusan pengadaan atau pengawasan instansi terhadap perusahaan tersebut.",
      "Menghadiri acara secara diam-diam pada jam kerja menggunakan mobil dinas.",
      "Meminta bayaran tambahan berupa saham perusahaan sebagai ucapan terima kasih.",
      "Mengubah jadwal rapat dinas agar seluruh pegawai hadir di acara sponsor pribadi.",
      "Menyembunyikan surat undangan agar tidak tercatat di bagian kepegawaian.",
    ],
    indeksBenar: 0,
    explanation:
      "Honorarium sah di luar jam kerja/dengan surat tugas tetap wajib bebas benturan kepentingan; pelaporan kepada UPG memberikan kepastian hukum bagi ASN.",
    source_reference: "Peraturan KPK tentang Pelaporan Gratifikasi",
  },
  {
    sub_topic: "Integritas",
    difficulty: "sedang",
    question_text:
      "Integritas sering didefinisikan sebagai keselarasan antara pikiran, ucapan, dan perbuatan. Dalam praktik kepemimpinan unit kerja, teladan integritas pimpinan yang paling berdampak bagi bawahan adalah...",
    pilihan: [
      "Membuat aturan ketat untuk staf sementara pimpinan bebas melanggar jam kerja.",
      "Konsisten mematuhi prosedur, mengakui kekeliruan secara terbuka, dan menolak kompromi atas pelanggaran kode etik.",
      "Memberi kelonggaran manipulasi data capaian kinerja agar unit mendapat penghargaan.",
      "Menutupi kesalahan staf favorit ketika diaudit inspektorat.",
      "Hanya bersikap disiplin ketika pimpinan puncak sedang berkunjung.",
    ],
    indeksBenar: 1,
    explanation:
      "Keteladanan pimpinan (*tone from the top*) yang adil dan konsisten merupakan pendorong terkuat budaya integritas organisasi.",
    source_reference: "Kode Etik & Budaya Integritas ASN",
  },
  {
    sub_topic: "Integritas",
    difficulty: "mudah",
    question_text:
      "Anda menemukan dokumen data kepegawaian dan nomor induk kependudukan peserta seleksi tertinggal di mesin fotokopi umum kantor. Langkah berintegritas yang segera diambil adalah...",
    pilihan: [
      "Mengambil foto dokumen tersebut lalu mengunggahnya sebagai bahan lelucon di status media sosial.",
      "Mengamankan dokumen tersebut dan menyerahkannya langsung kepada unit pengelola kepegawaian yang berwenang.",
      "Membiarkannya tergeletak sampai sore karena bukan dokumen milik unit Anda.",
      "Menggunakan bagian belakang kertas berisi data pribadi warga sebagai kertas coretan.",
      "Membuangnya langsung ke tempat sampah terbuka di depan lobi tamu.",
    ],
    indeksBenar: 1,
    explanation:
      "Menjaga kerahasiaan informasi sensitif dan data pribadi merupakan amanah kode etik pegawai negeri sekaligus kewajiban pelindungan data pribadi.",
    source_reference: "PP Disiplin PNS & UU Pelindungan Data Pribadi",
  },
  {
    sub_topic: "Bela Negara",
    difficulty: "sedang",
    question_text:
      "Indonesia merupakan negara rawan bencana geologis dan hidrometeorologis. Keterlibatan ASN non-militer dalam penanggulangan bencana—seperti koordinasi logistik pengungsi dan pemulihan administrasi kependudukan warga terdampak—merupakan wujud nilai bela negara berupa...",
    pilihan: [
      "Kesadaran berbangsa dan bernegara serta kepedulian sosial kemanusiaan untuk menjaga keberlangsungan hidup bangsa.",
      "Tugas militer wajib di medan pertempuran perbatasan.",
      "Pemanfaatan dana darurat untuk kepentingan pencitraan pribadi.",
      "Penundaan pelayanan warga sampai situasi politik stabil.",
      "Pengalihan tanggung jawab daerah ke organisasi asing sepenuhnya.",
    ],
    indeksBenar: 0,
    explanation:
      "Kesiapsiagaan dan aksi nyata kemanusiaan menyelamatkan warga serta memulihkan tata pemerintahan saat bencana adalah bentuk bela negara sipil.",
    source_reference: "UU No. 24 Tahun 2007 tentang Penanggulangan Bencana & Bela Negara",
  },
  {
    sub_topic: "Bela Negara",
    difficulty: "sulit",
    question_text:
      "Komponen Cadangan dalam sistem pertahanan negara sebagaimana diatur dalam UU Nomor 23 Tahun 2019 bersifat...",
    pilihan: [
      "Wajib militer paksa tanpa seleksi kesehatan atau persetujuan warga.",
      "Sukarela bagi warga negara yang lolos seleksi, dilatih dasar kemiliteran, dan baru dikerahkan apabila negara dalam kondisi mobilisasi resmi.",
      "Aktif bertugas menjaga perbatasan setiap hari sepanjang tahun menggantikan TNI.",
      "Khusus bagi pejabat politik partai di parlemen pusat.",
      "Organisasi paramiliter swasta yang bergerak di luar komando negara.",
    ],
    indeksBenar: 1,
    explanation:
      "UU No. 23 Tahun 2019 menegaskan keikutsertaan Komponen Cadangan bersifat sukarela melalui seleksi dan hanya dimobilisasi oleh Presiden dengan persetujuan DPR dalam keadaan darurat perang/negara.",
    source_reference: "UU No. 23 Tahun 2019 tentang PSDN Pertahanan Negara",
  },
  {
    sub_topic: "Bela Negara",
    difficulty: "mudah",
    question_text:
      "Membayar pajak tepat waktu, mematuhi rambu lalu lintas, serta menjaga fasilitas umum tetap bersih bagi masyarakat umum mencerminkan nilai bela negara dalam aspek...",
    pilihan: [
      "Kemampuan awal bela negara secara fisik militer.",
      "Kesadaran berbangsa dan bernegara melalui kepatuhan hukum serta kontribusi nyata bagi pembangunan nasional.",
      "Penolakan terhadap seluruh aturan pemerintah daerah.",
      "Kewajiban khusus bagi pegawai berpenghasilan tinggi saja.",
      "Kebebasan menggunakan jalan raya tanpa aturan hukum.",
    ],
    indeksBenar: 1,
    explanation:
      "Kepatuhan warga terhadap hukum positif dan kontribusi pajak mendukung kemandirian pembiayaan negara serta ketertiban bersama.",
    source_reference: "Lima Nilai Dasar Bela Negara",
  },
  {
    sub_topic: "Bela Negara",
    difficulty: "sedang",
    question_text:
      "Masuknya paham ekstremisme kekerasan yang mengkafirkan negara sah atau mendorong perusakan fasilitas publik dapat menggerus fondasi kebangsaan. Sikap ASN menghadapi potensi paparan paham tersebut di lingkungan kerja adalah...",
    pilihan: [
      "Membiarkan penyebaran buletin kebencian di ruang istirahat kantor demi kebebasan berekspresi.",
      "Menguatkan moderasi beragama, berpegang teguh pada Pancasila dan UUD 1945, serta melaporkan aktivitas perekrutan mencurigakan ke pimpinan.",
      "Ikut menyebarkan ajakan tidak mengakui konstitusi negara di media sosial.",
      "Memusuhi rekan kerja hanya karena berbeda keyakinan tanpa bukti.",
      "Menutup akses dialog kebangsaan bagi seluruh organisasi kepemudaan.",
    ],
    indeksBenar: 1,
    explanation:
      "Setia pada Pancasila sebagai ideologi negara menuntut kewaspadaan terhadap ideologi transnasional antikebangsaan sambil tetap menjunjung kerukunan dan moderasi.",
    source_reference: "SKB Penanganan Radikalisme ASN & Nilai Bela Negara",
  },
  {
    sub_topic: "Bela Negara",
    difficulty: "sedang",
    question_text:
      "Di kantor pelayanan, sebagian kecil pegawai mengeluhkan beban kerja transformasi digital yang menuntut pembelajaran keterampilan baru. Sikap yang mencerminkan 'Memiliki kemampuan awal bela negara' dalam konteks daya saing SDM adalah...",
    pilihan: [
      "Mengandalkan pegawai magang selamanya agar tidak perlu belajar aplikasi baru.",
      "Terus meningkatkan kompetensi literasi teknologi, kebugaran fisik-mental, dan ketangguhan kerja menghadapi perubahan zaman.",
      "Mengusulkan penghentian pembaruan perangkat lunak sampai lima tahun ke depan.",
      "Mengkritik kebijakan modernisasi tanpa memberikan masukan teknis.",
      "Membatasi jam pelayanan warga agar pegawai dapat beristirahat lebih lama.",
    ],
    indeksBenar: 1,
    explanation:
      "Kemampuan awal bela negara tidak hanya fisik/kesamaptaan, melainkan juga kecakapan psikis, profesionalitas, dan penguasaan ilmu pengetahuan teknologi untuk kemajuan bangsa.",
    source_reference: "Modul Kompetensi Bela Negara LAN RI",
  },
  {
    sub_topic: "Bela Negara",
    difficulty: "sulit",
    question_text:
      "Dalam konteks geopolitik kawasan maritim, praktik penangkapan ikan ilegal (*illegal, unreported, and unregulated fishing*) oleh kapal asing di ZEE Indonesia mengancam kedaulatan sumber daya alam. Langkah komprehensif bela negara untuk mengatasinya adalah...",
    pilihan: [
      "Menutup seluruh perairan Indonesia bagi kapal dagang domestik antarprovinsi.",
      "Sinergi pengawasan maritim (TNI AL, Bakamla, KKP), teknologi pemantauan satelit, penegakan hukum tegas, serta pemberdayaan nelayan lokal.",
      "Menjual hak pengelolaan ZEE kepada konsorsium asing tanpa syarat.",
      "Membiarkan pelanggaran laut dengan alasan luas wilayah sulit diawasi.",
      "Membubarkan koperasi nelayan tradisional di pesisir terluar.",
    ],
    indeksBenar: 1,
    explanation:
      "Kedaulatan maritim terjaga lewat kolaborasi penegakan hukum aparat kelautan, pemanfaatan teknologi surveilans, dan penguatan ekonomi nelayan lokal di pulau terluar.",
    source_reference: "Kebijakan Kelautan Indonesia & Pertahanan Maritim",
  },
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "sedang",
    question_text:
      "Amandemen UUD NRI Tahun 1945 dilakukan sebanyak empat kali (1999–2002) untuk menyempurnakan mekanisme saling mengawasi dan mengimbangi (*checks and balances*). Namun ada kesepakatan dasar MPR untuk TIDAK mengubah...",
    pilihan: [
      "Pembukaan UUD NRI Tahun 1945 dan bentuk Negara Kesatuan Republik Indonesia.",
      "Jumlah periode masa jabatan Presiden menjadi tidak terbatas.",
      "Kedudukan Dewan Perwakilan Rakyat sebagai pelaksana kekuasaan eksekutif.",
      "Penghapusan seluruh pasal mengenai hak asasi manusia.",
      "Penggantian sistem pemilihan umum menjadi sistem penunjukan langsung.",
    ],
    indeksBenar: 0,
    explanation:
      "Lima kesepakatan dasar dalam amendemen UUD 1945 meliputi tidak mengubah Pembukaan UUD 1945 dan tetap mempertahankan bentuk NKRI serta sistem presidensial.",
    source_reference: "Ketentuan & Kesepakatan Amendemen UUD NRI 1945",
  },
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "sulit",
    question_text:
      "Menurut Pasal 23E UUD NRI Tahun 1945, lembaga negara yang bebas dan mandiri untuk memeriksa pengelolaan dan tanggung jawab tentang keuangan negara adalah...",
    pilihan: [
      "Bank Indonesia",
      "Otoritas Jasa Keuangan",
      "Badan Pemeriksa Keuangan (BPK)",
      "Direktorat Jenderal Anggaran",
      "Komisi Pemberantasan Korupsi",
    ],
    indeksBenar: 2,
    explanation:
      "Pasal 23E ayat (1) UUD NRI 1945 menyatakan bahwa untuk memeriksa pengelolaan dan tanggung jawab tentang keuangan negara diadakan satu Badan Pemeriksa Keuangan yang bebas dan mandiri, lalu hasilnya diserahkan kepada DPR, DPD, dan DPRD.",
    source_reference: "Pasal 23E UUD NRI Tahun 1945",
  },
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "mudah",
    question_text:
      "Sila Kemanusiaan yang Adil dan Beradab menekankan pengakuan terhadap persamaan derajat serta hak dan kewajiban asasi manusia tanpa membeda-bedakan suku, keturunan, agama, kedudukan sosial, maupun warna kulit. Wujudnya di loket layanan adalah...",
    pilihan: [
      "Melayani pemohon berpenampilan mewah di ruang khusus sambil menelantarkan warga kurang mampu.",
      "Memberikan pelayanan yang ramah, adil, dan bermartabat kepada seluruh lapisan masyarakat serta memprioritaskan lansia/disabilitas sesuai standar.",
      "Membedakan biaya pengurusan surat resmi berdasarkan latar belakang daerah asal.",
      "Menolak melayani pemohon yang belum fasih memahami istilah birokrasi.",
      "Mengizinkan keluarga pegawai melewati jalur antrean tanpa nomor resmi.",
    ],
    indeksBenar: 1,
    explanation:
      "Kesetaraan martabat manusia menuntut non-diskriminasi dan perlakuan hormat bagi seluruh penerima layanan publik.",
    source_reference: "Butir Pengamalan Sila Kedua Pancasila",
  },
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "sedang",
    question_text:
      "Pasal 28A sampai dengan Pasal 28J UUD NRI Tahun 1945 memuat jaminan Hak Asasi Manusia (HAM). Namun Pasal 28J ayat (2) menegaskan bahwa dalam menjalankan hak dan kebebasannya, setiap orang wajib...",
    pilihan: [
      "Membebaskan diri dari semua peraturan daerah agar kebebasan pribadi mutlak terwujud.",
      "Tunduk kepada pembatasan yang ditetapkan undang-undang demi menghormati hak orang lain dan ketertiban umum.",
      "Mengutamakan kepentingan pribadi di atas ketertiban masyarakat umum.",
      "Memiliki surat izin khusus sebelum berbicara di lingkungan keluarga.",
      "Mengabaikan nilai moral dan etika publik dalam menyampaikan pendapat.",
    ],
    indeksBenar: 1,
    explanation:
      "HAM di Indonesia tidak bersifat absolut tanpa batas; Pasal 28J ayat (2) menetapkan batas berdasarkan undang-undang guna menghormati hak asasi orang lain, moral, nilai agama, keamanan, dan ketertiban umum.",
    source_reference: "Pasal 28J ayat (2) UUD NRI Tahun 1945",
  },
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "sulit",
    question_text:
      "Apabila rancangan undang-undang yang telah disetujui bersama oleh DPR dan Presiden tidak disahkan oleh Presiden dalam waktu tiga puluh hari semenjak RUU tersebut disetujui, maka menurut Pasal 20 ayat (5) UUD NRI 1945...",
    pilihan: [
      "RUU tersebut batal demi hukum dan harus diajukan ulang lima tahun lagi.",
      "RUU tersebut sah menjadi undang-undang dan wajib diundangkan.",
      "RUU diserahkan ke Mahkamah Agung untuk disahkan melalui pemungutan suara.",
      "DPR wajib membubarkan panitia perumus undang-undang.",
      "Menteri Dalam Negeri menggantikan Presiden untuk membatalkan RUU.",
    ],
    indeksBenar: 1,
    explanation:
      "Pasal 20 ayat (5) UUD NRI 1945 mengatur bahwa dalam hal RUU yang telah disetujui bersama tersebut tidak disahkan Presiden dalam 30 hari sejak disetujui, RUU tersebut sah menjadi UU dan wajib diundangkan.",
    source_reference: "Pasal 20 ayat (5) UUD NRI Tahun 1945",
  },
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    difficulty: "sedang",
    question_text:
      "Semboyan Bhinneka Tunggal Ika pada pita yang dicengkeram burung Garuda Pancasila mengingatkan penyelenggara negara agar kebijakan pembangunan bersifat inklusif. Contoh pelanggaran nilai Bhinneka Tunggal Ika dalam tata kelola publik adalah...",
    pilihan: [
      "Menyediakan penerjemah bahasa isyarat serta papan petunjuk braille di ruang pelayanan publik.",
      "Menetapkan syarat perekrutan non-objektif berdasarkan suku atau golongan tertentu yang menutup akses warga lainnya.",
      "Mengakomodasi jadwal istirahat beribadah pegawai secara berimbang.",
      "Menyelenggarakan pentas seni daerah Nusantara pada peringatan hari jadi kota.",
      "Mengalokasikan bantuan beasiswa bagi mahasiswa dari daerah afirmasi.",
    ],
    indeksBenar: 1,
    explanation:
      "Diskriminasi berbasis suku, agama, ras, atau golongan dalam kesempatan publik bertentangan langsung dengan prinsip kesetaraan Bhinneka Tunggal Ika.",
    source_reference: "Nilai Dasar Kebangsaan — Bhinneka Tunggal Ika",
  },
  {
    sub_topic: "Bahasa Negara",
    difficulty: "sedang",
    question_text:
      "Manakah penulisan singkatan dan akronim resmi instansi/gelar yang tepat sesuai kaidah EYD Edisi V?",
    pilihan: [
      "a/n Kepala Dinas; s/d tanggal 30 November 2026; B.A.P.P.E.N.A.S.",
      "a.n. Kepala Dinas; s.d. tanggal 30 November 2026; Bappenas.",
      "an Kepala Dinas; s.d tanggal 30 November 2026; BAPPENAS.",
      "a.n Kepala Dinas; s/d. tanggal 30 November 2026; bappenas.",
      "a-n Kepala Dinas; sd tanggal 30 November 2026; Bapenas.",
    ],
    indeksBenar: 1,
    explanation:
      "Menurut EYD V, singkatan dua huruf atau lebih yang bukan nama diri ditulis huruf kecil dengan titik di setiap huruf ('a.n.', 's.d.', 'u.b.'), sedangkan akronim lembaga yang bukan singkatan murni ditulis kapital di awal ('Bappenas').",
    source_reference: "EYD Edisi V — Penulisan Singkatan & Akronim",
  },
  {
    sub_topic: "Bahasa Negara",
    difficulty: "mudah",
    question_text:
      "Penggunaan kata serapan yang baku menurut Kamus Besar Bahasa Indonesia (KBBI) terdapat pada kalimat...",
    pilihan: [
      "Apotik rumah sakit pemerintah menyediakan layanan tebus resep 24 jam.",
      "Atlet daerah yang berprestasi menerima penghargaan dari gubernur.",
      "Tim teknis melakukan aktifitas pemeliharaan jaringan listrik di ruang arsip.",
      "Kuitansi tersebut harus dilengkapi tanda tangan bendahara sebelum pencairan.",
      "Semua opsi A, C salah, sedangkan kata baku tepat ada di B dan D.",
    ],
    indeksBenar: 1,
    explanation:
      "Bentuk baku KBBI adalah 'apotek' (bukan apotik), 'atlet' (bukan atlit), 'aktivitas' (bukan aktifitas), dan 'kuitansi' (bukan kwitansi). Kalimat B menggunakan 'atlet' dan struktur kalimat efektif yang sepenuhnya baku (opsi D memakai 'kuitansi' yang juga baku, namun opsi B jelas lugas tanpa pilihan meta di E).",
    source_reference: "KBBI VI Daring — Kata Serapan Baku",
  },
  {
    sub_topic: "Bahasa Negara",
    difficulty: "sulit",
    question_text:
      "Perhatikan kalimat berikut: 'Berdasarkan hasil rapat koordinasi tersebut menyepakati percepatan layanan perizinan daring.' Kalimat tersebut belum efektif karena...",
    pilihan: [
      "Penggunaan kata 'tersebut' seharusnya diganti dengan kata 'itu'.",
      "Kalimat tersebut tidak memiliki subjek akibat pemakaian preposisi 'Berdasarkan' di awal kalimat.",
      "Kata 'menyepakati' seharusnya diubah menjadi 'disepakatkannya'.",
      "Istilah 'daring' bukan kosakata baku dalam bahasa Indonesia.",
      "Penggunaan kata 'koordinasi' tidak tepat untuk rapat internal.",
    ],
    indeksBenar: 1,
    explanation:
      "Kehadiran kata depan 'Berdasarkan...' mengubah unsur pengikutnya menjadi keterangan sehingga kalimat kehilangan subjek untuk predikat aktif 'menyepakati'. Perbaikan: hilangkan 'Berdasarkan' atau ubah predikat menjadi pasif dengan subjek jelas.",
    source_reference: "Tata Bahasa Baku Bahasa Indonesia — Struktur Subjek-Predikat",
  },
  {
    sub_topic: "Bahasa Negara",
    difficulty: "sedang",
    question_text:
      "Dalam surat dinas resmi, penulisan alamat surat yang paling memenuhi tata naskah dinas dan kaidah EYD Edisi V adalah...",
    pilihan: [
      "Kepada Yth. Bapak Kepala Biro Hukum, Di Tempat.",
      "Yth. Kepala Biro Hukum Kementerian Kesehatan\nJalan H.R. Rasuna Said Blok X-5\nJakarta Selatan",
      "Kepada Yth. Bapak/Ibu/Sdr Kepala Biro Hukum.",
      "Yth, Kepala Biro Hukum.\nJln. Rasuna Said No 5.",
      "Kepada: Yth. Kepala Biro Hukum\ndi-Jakarta Selatan.",
    ],
    indeksBenar: 1,
    explanation:
      "Dalam tata naskah dinas resmi, 'Yth.' tidak didahului kata 'Kepada', sapaan 'Bapak/Ibu' tidak digunakan jika langsung menyebut jabatan, 'Jalan' tidak disingkat 'Jln.', serta tidak diakhiri titik setelah nama kota.",
    source_reference: "Permenpan-RB Tata Naskah Dinas Instansi Pemerintah & EYD V",
  },
  {
    sub_topic: "Bahasa Negara",
    difficulty: "sedang",
    question_text:
      "Padanan kata bahasa Indonesia yang baku untuk menggantikan istilah asing 'upload', 'download', 'online', dan 'offline' secara berurutan dalam dokumen resmi adalah...",
    pilihan: [
      "Unggah, unduh, daring, luring.",
      "Unduh, unggah, luring, daring.",
      "Unggah, salin, jaring, putus.",
      "Kirim, tarik, daring, luar.",
      "Simpan, ambil, maya, nyata.",
    ],
    indeksBenar: 0,
    explanation:
      "Badan Bahasa Kemendikbudristek menetapkan padanan resmi: upload = unggah, download = unduh, online = daring (dalam jaringan), offline = luring (luar jaringan).",
    source_reference: "Glosarium Istilah Teknologi Informasi — Badan Bahasa",
  },
  {
    sub_topic: "Bahasa Negara",
    difficulty: "sulit",
    question_text:
      "Penggunaan tanda koma (,) yang tepat dalam kalimat majemuk bertingkat terdapat pada...",
    pilihan: [
      "Pelamar wajib melampirkan ijazah asli, ketika melakukan pemberkasan ulang.",
      "Meskipun hujan deras mengguyur kota sejak pagi, pelayanan di mal pelayanan publik tetap berjalan tertib.",
      "Panitia mengingatkan bahwa, berkas yang tidak lengkap akan dinyatakan gugur.",
      "Peserta yang lolos ke tahap wawancara harus berpakaian rapi, sehingga tampak profesional.",
      "Kementerian akan mengumumkan jadwal baru apabila, terdapat perubahan kebijakan pusat.",
    ],
    indeksBenar: 1,
    explanation:
      "Sesuai EYD V, tanda koma dipakai untuk memisahkan anak kalimat yang mendahului induk kalimatnya ('Meskipun..., pelayanan tetap berjalan tertib'). Sebaliknya, anak kalimat di belakang induk kalimat tidak dipisahkan koma sebelum 'ketika', 'sehingga', 'bahwa', atau 'apabila'.",
    source_reference: "EYD Edisi V — Pemakaian Tanda Koma",
  },
];
