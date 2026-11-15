/**
 * Bank Soal SKB (Seleksi Kompetensi Bidang) & Situational Wawancara Jabatan — LOLOS CPNS.
 * Disediakan secara eksklusif untuk peserta Paket Terpadu SKD + SKB (`terpadu_cpns`).
 * Mencakup penguasaan substansi ASN (UU 20/2023, Tata Kelola SPBE, Pelayanan Publik,
 * Anggaran & PBJ Pemerintah, serta Studi Kasus Wawancara Kompetensi Manajerial/Sosial Kultural).
 */

export interface PilihanJawabanSKB {
  kunci: "A" | "B" | "C" | "D" | "E";
  teks: string;
}

export interface ButirSoalSKB {
  id: string;
  rumpun:
    | "Manajemen ASN & Regulasi"
    | "Tata Kelola Pemerintahan & SPBE"
    | "Pelayanan Publik & Pengawasan"
    | "Situasional Wawancara Jabatan";
  sub_topik: string;
  tingkat: "mudah" | "sedang" | "sulit";
  pertanyaan: string;
  opsi: [
    PilihanJawabanSKB,
    PilihanJawabanSKB,
    PilihanJawabanSKB,
    PilihanJawabanSKB,
    PilihanJawabanSKB,
  ];
  kunci_benar: "A" | "B" | "C" | "D" | "E";
  pembahasan: string;
  referensi: string;
}

export interface ButirSoalSKBTerproteksi {
  id: string;
  rumpun: ButirSoalSKB["rumpun"];
  sub_topik: string;
  tingkat: ButirSoalSKB["tingkat"];
  pertanyaan: string;
  opsi: [
    PilihanJawabanSKB,
    PilihanJawabanSKB,
    PilihanJawabanSKB,
    PilihanJawabanSKB,
    PilihanJawabanSKB,
  ];
}

export const BANK_SOAL_SKB_TERPADU: ButirSoalSKB[] = [
  {
    id: "skb-asn-1",
    rumpun: "Manajemen ASN & Regulasi",
    sub_topik: "Sistem Merit & UU ASN 20/2023",
    tingkat: "sedang",
    pertanyaan:
      "Berdasarkan Undang-Undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara, prinsip Sistem Merit dalam kebijakan dan manajemen ASN terutama bertumpu pada perbandingan objektif antara...",
    opsi: [
      { kunci: "A", teks: "Senioritas golongan, masa kerja, dan rekomendasi atasan langsung" },
      { kunci: "B", teks: "Kualifikasi, kompetensi, dan kinerja secara adil serta wajar tanpa diskriminasi" },
      { kunci: "C", teks: "Asal daerah domisili, riwayat organisasi kampus, dan tingkat pendidikan" },
      { kunci: "D", teks: "Loyalitas politik terhadap kepala daerah dan pencapaian serapan anggaran" },
      { kunci: "E", teks: "Urutan kelulusan SKD semata dan peringkat akreditasi universitas" },
    ],
    kunci_benar: "B",
    pembahasan:
      "Sistem Merit menurut UU Nomor 20 Tahun 2023 mendasarkan kebijakan dan manajemen ASN pada kualifikasi, kompetensi, dan kinerja yang diberlakukan secara adil, wajar, serta bebas dari perlakuan diskriminatif atas dasar latar belakang pribadi maupun afiliasi politik.",
    referensi: "UU Nomor 20 Tahun 2023 tentang ASN",
  },
  {
    id: "skb-asn-2",
    rumpun: "Manajemen ASN & Regulasi",
    sub_topik: "Nilai Dasar BerAKHLAK",
    tingkat: "sedang",
    pertanyaan:
      "Dalam nilai dasar (Core Values) ASN BerAKHLAK, perilaku aparatur yang secara terus-menerus meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah serta membantu orang lain belajar merupakan perwujudan utama nilai...",
    opsi: [
      { kunci: "A", teks: "Akuntabel" },
      { kunci: "B", teks: "Harmonis" },
      { kunci: "C", teks: "Kompeten" },
      { kunci: "D", teks: "Loyal" },
      { kunci: "E", teks: "Kolaboratif" },
    ],
    kunci_benar: "C",
    pembahasan:
      "Panduan perilaku nilai Kompeten dalam SE Menteri PANRB Nomor 20 Tahun 2021 secara eksplisit mencakup: meningkatkan kompetensi diri menjawab tantangan yang berubah, membantu orang lain belajar, dan melaksanakan tugas dengan kualitas terbaik.",
    referensi: "SE Menpan-RB No. 20 Tahun 2021 — Implementasi Core Values BerAKHLAK",
  },
  {
    id: "skb-asn-3",
    rumpun: "Manajemen ASN & Regulasi",
    sub_topik: "Disiplin Pegawai Negeri Sipil",
    tingkat: "sulit",
    pertanyaan:
      "Menurut Peraturan Pemerintah Nomor 94 Tahun 2021 tentang Disiplin PNS, kewajiban pengisian dan pelaporan Laporan Harta Kekayaan Penyelenggara Negara (LHKPN) atau Surat Pemberitahuan Pajak serta kewajiban masuk kerja dan menaati ketentuan jam kerja berkaitan erat dengan sanksi hukuman disiplin tingkat berat berupa pemberhentian apabila tidak masuk kerja tanpa alasan sah secara kumulatif dalam 1 tahun selama...",
    opsi: [
      { kunci: "A", teks: "10 hari kerja berturut-turut atau 14 hari kerja kumulatif" },
      { kunci: "B", teks: "15 hari kerja berturut-turut atau 21 hari kerja kumulatif" },
      { kunci: "C", teks: "28 hari kerja secara kumulatif dalam 1 tahun (atau 10 hari kerja berturut-turut)" },
      { kunci: "D", teks: "30 hari kerja berturut-turut saja tanpa penghitungan kumulatif" },
      { kunci: "E", teks: "46 hari kerja secara kumulatif tanpa mengenal aturan berturut-turut" },
    ],
    kunci_benar: "C",
    pembahasan:
      "PP Nomor 94 Tahun 2021 memperketat ketentuan disiplin kehadiran: PNS diberhentikan dengan hormat tidak atas permintaan sendiri apabila tidak masuk kerja tanpa alasan yang sah secara kumulatif selama 28 hari kerja atau lebih dalam 1 tahun, atau secara terus-menerus selama 10 hari kerja.",
    referensi: "PP Nomor 94 Tahun 2021 tentang Disiplin PNS Pasal 11",
  },
  {
    id: "skb-asn-4",
    rumpun: "Manajemen ASN & Regulasi",
    sub_topik: "Manajemen Kinerja Pegawai",
    tingkat: "sedang",
    pertanyaan:
      "Dalam pengelolaan kinerja pegawai ASN modern sesuai Permenpan-RB Nomor 6 Tahun 2022, evaluasi kinerja periodik pegawai berfokus pada dua dimensi utama yaitu...",
    opsi: [
      { kunci: "A", teks: "Tingkat kehadiran apel pagi dan jumlah perjalanan dinas luar kota" },
      { kunci: "B", teks: "Hasil kerja (rencana hasil dan indikator) serta perilaku kerja berorientasi BerAKHLAK" },
      { kunci: "C", teks: "Jumlah dokumen kertas yang diproduksi dan lamanya jam lembur bulanan" },
      { kunci: "D", teks: "Daftar urut kepangkatan dan nilai akhir diklat prajabatan terdahulu" },
      { kunci: "E", teks: "Penilaian rekan sejawat semata tanpa keterkaitan sasaran kinerja pimpinan" },
    ],
    kunci_benar: "B",
    pembahasan:
      "Permenpan-RB Nomor 6 Tahun 2022 menetapkan bahwa penilaian kinerja ASN didasarkan pada predikat dari perpaduan pencapaian Hasil Kerja dan Perilaku Kerja (Core Values BerAKHLAK) yang diselaraskan melalui dialog kinerja berkelanjutan.",
    referensi: "Permenpan-RB Nomor 6 Tahun 2022 tentang Pengelolaan Kinerja Pegawai ASN",
  },
  {
    id: "skb-asn-5",
    rumpun: "Manajemen ASN & Regulasi",
    sub_topik: "Transformasi Jabatan & Manajemen Talenta",
    tingkat: "sedang",
    pertanyaan:
      "Kebijakan penguatan jabatan fungsional dalam kerangka reformasi birokrasi bertujuan memindahkan paradigma pola karier ASN dari struktur hirarkis yang kaku menuju...",
    opsi: [
      { kunci: "A", teks: "Penumpukan jabatan struktural eselon IV di setiap kelurahan" },
      { kunci: "B", teks: "Sistem kerja yang lincah (agile), berbasis keahlian fungsional, dan terukur dari dampak luaran" },
      { kunci: "C", teks: "Penghapusan seluruh kompetensi manajerial pada instansi pemerintah" },
      { kunci: "D", teks: "Pembatasan mobilitas talenta antarkementerian dan pemerintah daerah" },
      { kunci: "E", teks: "Pemberian tunjangan seragam tanpa memperhatikan beban kinerja fungsional" },
    ],
    kunci_benar: "B",
    pembahasan:
      "Penyederhanaan birokrasi mengarahkan ASN bekerja dalam tim lincah (agile squad) berbasis keahlian fungsional dengan fokus pada kontribusi kinerja terukur.",
    referensi: "Permenpan-RB Nomor 1 Tahun 2023 tentang Jabatan Fungsional",
  },
  {
    id: "skb-spbe-6",
    rumpun: "Tata Kelola Pemerintahan & SPBE",
    sub_topik: "Arsitektur SPBE & Satu Data Indonesia",
    tingkat: "sedang",
    pertanyaan:
      "Berdasarkan Peraturan Presiden Nomor 95 Tahun 2018 tentang Sistem Pemerintahan Berbasis Elektronik (SPBE), salah satu asas terpenting agar antar-aplikasi kementerian dan pemerintah daerah tidak berjalan terpisah-pisah dan duplikatif adalah...",
    opsi: [
      { kunci: "A", teks: "Keterpaduan dan interoperabilitas sistem layanan serta data terstandar" },
      { kunci: "B", teks: "Kemandirian penuh tiap daerah membangun pusat data terisolasi sendiri" },
      { kunci: "C", teks: "Eksklusivitas format data tertutup agar tidak dibaca instansi lain" },
      { kunci: "D", teks: "Pengadaan aplikasi baru setiap tahun tanpa integrasi data induk" },
      { kunci: "E", teks: "Penghapusan seluruh layanan tatap muka secara serentak tanpa transisi" },
    ],
    kunci_benar: "A",
    pembahasan:
      "Perpres SPBE mendorong keterpaduan arsitektur, berbagi pakai aplikasi umum, serta interoperabilitas data bersama Satu Data Indonesia guna mencegah pemborosan anggaran TIK yang silo.",
    referensi: "Perpres Nomor 95 Tahun 2018 tentang SPBE & Perpres Nomor 39 Tahun 2019",
  },
  {
    id: "skb-spbe-7",
    rumpun: "Tata Kelola Pemerintahan & SPBE",
    sub_topik: "Pelindungan Data Pribadi di Layanan Digital",
    tingkat: "sulit",
    pertanyaan:
      "Saat merancang portal pendaftaran bantuan masyarakat berbasis web di instansi pemerintah, langkah paling mendasar yang wajib dipenuhi sesuai prinsip UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi adalah...",
    opsi: [
      { kunci: "A", teks: "Menampilkan daftar nama lengkap dan NIK seluruh pendaftar di halaman pengumuman publik agar transparan" },
      { kunci: "B", teks: "Memastikan dasar pemrosesan yang sah, minimisasi data yang dikumpulkan, enkripsi transmisi/simpan, dan pembatasan akses otorisasi" },
      { kunci: "C", teks: "Mengumpulkan seluruh riwayat perbankan dan biometrik meski tidak relevan dengan verifikasi bantuan" },
      { kunci: "D", teks: "Menyimpan berkas KTP warga di tautan folder publik agar mudah diperiksa auditor eksternal" },
      { kunci: "E", teks: "Membebaskan instansi dari kewajiban pemberitahuan jika terjadi kebocoran data" },
    ],
    kunci_benar: "B",
    pembahasan:
      "UU Pelindungan Data Pribadi mewajibkan pengendali data menerapkan prinsip pembatasan tujuan, minimisasi pengumpulan data, keamanan enkripsi, serta melarang publikasi data spesifik sensitif secara terbuka.",
    referensi: "UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi",
  },
  {
    id: "skb-spbe-8",
    rumpun: "Tata Kelola Pemerintahan & SPBE",
    sub_topik: "Akuntabilitas Kinerja & Anggaran Berbasis Kinerja",
    tingkat: "sedang",
    pertanyaan:
      "Dalam penganggaran berbasis kinerja (performance-based budgeting) pada SAKIP instansi pemerintah, ukuran keberhasilan utama penggunaan APBN/APBD yang baik adalah...",
    opsi: [
      { kunci: "A", teks: "Terserapnya 100% anggaran belanja ATK dan rapat pada minggu terakhir Desember" },
      { kunci: "B", teks: "Tercapainya hasil guna (outcome) dan dampak nyata program terhadap pemecahan masalah masyarakat secara efisien" },
      { kunci: "C", teks: "Banyaknya kegiatan seremonial peluncuran program di media massa" },
      { kunci: "D", teks: "Bertambahnya pagu anggaran belanja pegawai setiap tahun berturut-turut" },
      { kunci: "E", teks: "Kesamaan angka rencana kerja persis dengan realisasi lima tahun sebelumnya" },
    ],
    kunci_benar: "B",
    pembahasan:
      "Evaluasi SAKIP menekankan prinsip money follows program — keberhasilan diukur dari efektivitas ketercapaian outcome/impact pembangunan bagi warga, bukan sekadar tingginya serapan belanja output.",
    referensi: "Perpres Nomor 29 Tahun 2014 tentang SAKIP",
  },
  {
    id: "skb-spbe-9",
    rumpun: "Tata Kelola Pemerintahan & SPBE",
    sub_topik: "Pengadaan Barang dan Jasa Pemerintah",
    tingkat: "sedang",
    pertanyaan:
      "Agar pengadaan perangkat kerja instansi lebih transparan, cepat, dan terhindar dari negosiasi tatap muka yang rawan penyimpangan, mekanisme yang didorong oleh regulasi Pengadaan Barang/Jasa Pemerintah adalah...",
    opsi: [
      { kunci: "A", teks: "Penunjukan langsung seluruh paket pengadaan besar kepada rekanan kenalan pimpinan" },
      { kunci: "B", teks: "Pemecahan paket pengadaan bernilai besar menjadi puluhan paket kecil di bawah batas tender" },
      { kunci: "C", teks: "Pemanfaatan e-Purchasing melalui Katalog Elektronik dan sistem pengadaan secara elektronik (SPSE)" },
      { kunci: "D", teks: "Pembayaran uang muka 100% secara tunai sebelum dokumen kontrak ditandatangani" },
      { kunci: "E", teks: "Menetapkan spesifikasi merek dagang tunggal tanpa justifikasi teknis yang sah" },
    ],
    kunci_benar: "C",
    pembahasan:
      "Perpres 16/2018 jo. Perpres 12/2021 mengutamakan e-Purchasing lewat Katalog Elektronik serta transparansi digital melalui SPSE, serta melarang tegas praktik pemecahan paket guna menghindari tender.",
    referensi: "Perpres Nomor 12 Tahun 2021 tentang Pengadaan Barang/Jasa Pemerintah",
  },
  {
    id: "skb-spbe-10",
    rumpun: "Tata Kelola Pemerintahan & SPBE",
    sub_topik: "Reformasi Birokrasi Tematik & Zona Integritas",
    tingkat: "sedang",
    pertanyaan:
      "Dalam pembangunan Zona Integritas menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih dan Melayani (WBBM), area pengungkit yang secara langsung mengukur peningkatan kecepatan dan kemudahan akses layanan warga berada pada komponen...",
    opsi: [
      { kunci: "A", teks: "Peningkatan Kualitas Pelayanan Publik serta Penataan Tata Laksana" },
      { kunci: "B", teks: "Penambahan anggaran perjalanan dinas luar negeri" },
      { kunci: "C", teks: "Pembangunan pagar gedung kantor yang lebih tinggi" },
      { kunci: "D", teks: "Pemusnahan seluruh arsip pengaduan masyarakat akhir semester" },
      { kunci: "E", teks: "Penyeragaman warna meja kerja di ruang arsip tertutup" },
    ],
    kunci_benar: "A",
    pembahasan:
      "Enam area perubahan Zona Integritas menempatkan Penataan Tata Laksana dan Peningkatan Kualitas Pelayanan Publik sebagai penggerak langsung kemudahan, kepastian waktu, dan budaya pelayanan prima bebas pungli.",
    referensi: "Permenpan-RB Nomor 90 Tahun 2021 tentang Pembangunan & Evaluasi Zona Integritas",
  },
  {
    id: "skb-pub-11",
    rumpun: "Pelayanan Publik & Pengawasan",
    sub_topik: "Undang-Undang Pelayanan Publik (UU 25/2009)",
    tingkat: "sedang",
    pertanyaan:
      "Berdasarkan UU Nomor 25 Tahun 2009 tentang Pelayanan Publik, penyelenggara layanan wajib menyusun, menetapkan, dan memublikasikan Maklumat Pelayanan yang secara hukum bermakna sebagai...",
    opsi: [
      { kunci: "A", teks: "Pengumuman internal tarif lembur pegawai loket" },
      { kunci: "B", teks: "Pernyataan tertulis berisi keseluruhan rincian kewajiban dan janji penyelenggara dalam memenuhi standar pelayanan serta kesanggupan menerima sanksi bila melanggar" },
      { kunci: "C", teks: "Brosur promosi pencapaian kinerja pimpinan daerah menjelang akhir masa jabatan" },
      { kunci: "D", teks: "Syarat pembebasan pengelola layanan dari segala bentuk pengaduan masyarakat" },
      { kunci: "E", teks: "Daftar nama pemohon izin yang permohonannya ditolak oleh sistem" },
    ],
    kunci_benar: "B",
    pembahasan:
      "Pasal 22 UU 25/2009 mewajibkan Maklumat Pelayanan sebagai kontrak terbuka kesanggupan penyelenggara melayani sesuai standar pelayanan yang ditetapkan beserta kesediaan menerima sanksi apabila pelayanan tidak sesuai janji.",
    referensi: "UU Nomor 25 Tahun 2009 tentang Pelayanan Publik",
  },
  {
    id: "skb-pub-12",
    rumpun: "Pelayanan Publik & Pengawasan",
    sub_topik: "Pengelolaan Pengaduan Publik (SP4N-LAPOR!)",
    tingkat: "mudah",
    pertanyaan:
      "Prinsip 'No Wrong Door Policy' pada sistem pengelolaan pengaduan pelayanan publik nasional (SP4N-LAPOR!) berarti...",
    opsi: [
      { kunci: "A", teks: "Masyarakat wajib menghafal kode unit teknis pusat sebelum mengirim laporan" },
      { kunci: "B", teks: "Laporan apa pun yang diterima melalui sistem terintegrasi dijamin diteruskan dan ditangani oleh instansi berwenang yang tepat tanpa ditolak hanya karena salah alamat kirim awal" },
      { kunci: "C", teks: "Semua laporan wajib dikirim dalam bentuk surat bermeterai ke kantor pusat Jakarta" },
      { kunci: "D", teks: "Pelapor harus membuka identitas penuh kepada publik umum tanpa perlindungan kerahasiaan" },
      { kunci: "E", teks: "Instansi berhak menghapus aduan apabila terkait pelayanan lintas kementerian" },
    ],
    kunci_benar: "B",
    pembahasan:
      "No Wrong Door Policy menjamin setiap pengaduan warga dari pintu mana pun akan didisposisikan oleh pengelola sistem kepada instansi terkait yang berwenang menyelesaikannya.",
    referensi: "Perpres Nomor 76 Tahun 2013 tentang Pengelolaan Pengaduan Pelayanan Publik",
  },
  {
    id: "skb-pub-13",
    rumpun: "Pelayanan Publik & Pengawasan",
    sub_topik: "Pengendalian Gratifikasi & Benturan Kepentingan",
    tingkat: "sulit",
    pertanyaan:
      "Seorang pegawai negeri atau penyelenggara negara menerima pemberian bingkisan atau fasilitas yang berhubungan dengan jabatannya dan tidak dapat ditolak secara langsung saat acara dinas berlangsung. Menurut UU Pemberantasan Tipikor, kewajiban hukum untuk melaporkan penerimaan tersebut ke KPK atau UPG maksimal dalam jangka waktu...",
    opsi: [
      { kunci: "A", teks: "7 hari kerja sejak tanggal penerimaan" },
      { kunci: "B", teks: "14 hari kerja sejak tanggal penerimaan" },
      { kunci: "C", teks: "30 hari kerja sejak tanggal penerimaan" },
      { kunci: "D", teks: "60 hari kalender menjelang akhir tahun anggaran" },
      { kunci: "E", teks: "Tidak perlu dilaporkan apabila nilainya langsung dibagikan ke staf" },
    ],
    kunci_benar: "C",
    pembahasan:
      "Pasal 12C UU Nomor 20 Tahun 2001 menetapkan bahwa ketentuan pidana gratifikasi tidak berlaku apabila penerima melaporkan gratifikasi yang diterimanya kepada KPK paling lambat 30 hari kerja terhitung sejak tanggal gratifikasi diterima (atau melalui UPG instansi sesuai peraturan KPK).",
    referensi: "UU Nomor 20 Tahun 2001 Pasal 12B & 12C jo. Peraturan KPK No. 2 Tahun 2019",
  },
  {
    id: "skb-pub-14",
    rumpun: "Pelayanan Publik & Pengawasan",
    sub_topik: "Keterbukaan Informasi Publik (UU KIP)",
    tingkat: "sedang",
    pertanyaan:
      "Berdasarkan UU Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik, informasi terkait profil badan publik, ringkasan program/kegiatan yang sedang dijalankan, serta ringkasan laporan keuangan tahunan tergolong sebagai...",
    opsi: [
      { kunci: "A", teks: "Informasi yang dikecualikan selamanya" },
      { kunci: "B", teks: "Informasi yang wajib disediakan dan diumumkan secara berkala" },
      { kunci: "C", teks: "Informasi rahasia jabatan pejabat eselon" },
      { kunci: "D", teks: "Informasi komersial yang hanya dijual melalui pelelangan" },
      { kunci: "E", teks: "Informasi yang baru boleh dibuka sesudah penetapan pengadilan" },
    ],
    kunci_benar: "B",
    pembahasan:
      "Pasal 9 UU KIP mengatur Informasi Wajib Diumumkan Secara Berkala melalui media portal resmi badan publik secara proaktif tanpa perlu menunggu permohonan warga.",
    referensi: "UU Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik",
  },
  {
    id: "skb-pub-15",
    rumpun: "Pelayanan Publik & Pengawasan",
    sub_topik: "Sistem Pengendalian Intern Pemerintah (SPIP)",
    tingkat: "sedang",
    pertanyaan:
      "Tujuan utama penerapan Sistem Pengendalian Intern Pemerintah (SPIP) sesuai PP Nomor 60 Tahun 2008 di setiap unit kerja kementerian/lembaga adalah memberikan keyakinan memadai atas tercapainya empat hal berikut, KECUALI...",
    opsi: [
      { kunci: "A", teks: "Efektivitas dan efisiensi pencapaian tujuan penyelenggaraan pemerintahan" },
      { kunci: "B", teks: "Keandalan pelaporan keuangan pemerintah" },
      { kunci: "C", teks: "Pengamanan aset negara dan ketaatan terhadap peraturan perundang-undangan" },
      { kunci: "D", teks: "Jaminan kenaikan tunjangan kinerja otomatis tanpa pencapaian output kerja" },
      { kunci: "E", teks: "Mitigasi risiko operasional penyimpangan prosedur sejak dini" },
    ],
    kunci_benar: "D",
    pembahasan:
      "Empat pilar tujuan SPIP menurut PP 60/2008 adalah efektivitas-efisiensi kegiatan, keandalan pelaporan keuangan, pengamanan aset negara, dan ketaatan terhadap peraturan perundang-undangan (plus pemantauan pengendalian risiko).",
    referensi: "PP Nomor 60 Tahun 2008 tentang SPIP",
  },
  {
    id: "skb-waw-16",
    rumpun: "Situasional Wawancara Jabatan",
    sub_topik: "Integritas & Kejujuran Situasional",
    tingkat: "sulit",
    pertanyaan:
      "[Studi Kasus Wawancara Kompetensi] Saat menyusun laporan audit program bantuan daerah, Anda menemukan satu pos belanja rapat fiktif bernilai kecil yang disisipkan untuk menutupi biaya akomodasi tim lapangan di luar pos sah. Atasan langsung meminta Anda tetap meloloskan laporan karena anggarannya sudah habis terpakai di lapangan. Bagaimana respons terstruktur yang paling tepat dalam wawancara kompetensi?",
    opsi: [
      { kunci: "A", teks: "Menyetujui agar hubungan kerja dengan atasan tetap harmonis karena jumlahnya kecil dan tidak dipakai pribadi" },
      { kunci: "B", teks: "Menolak memanipulasi bukti pertanggungjawaban secara sopan sambil menyiapkan bukti pengeluaran riil di lapangan, berkonsultasi dengan pengelola keuangan/SPI untuk mekanisme koreksi administrasi yang sah, dan mengedukasi tim agar ke depan patuh SOP" },
      { kunci: "C", teks: "Mengubah angka di laporan menjadi seolah-olah tidak terjadi pengeluaran apa pun lalu mengembalikan selisihnya diam-diam" },
      { kunci: "D", teks: "Meminta staf administrasi baru menandatangani kuitansi pengganti agar nama Anda aman" },
      { kunci: "E", teks: "Menunda pengiriman laporan tanpa berkomunikasi dengan atasan hingga batas akhir tutup buku" },
    ],
    kunci_benar: "B",
    pembahasan:
      "Pada uji wawancara kompetensi manajerial integritas level mahir, penguji mencari prinsip ketegasan menolak pemalsuan dokumen (zero tolerance) sekaligus kecakapan menawarkan mekanisme koreksi administratif yang legal dan akuntabel.",
    referensi: "Permenpan-RB No. 38 Tahun 2017 — Standar Kompetensi Integritas",
  },
  {
    id: "skb-waw-17",
    rumpun: "Situasional Wawancara Jabatan",
    sub_topik: "Pengambilan Keputusan & Manajemen Krisis",
    tingkat: "sulit",
    pertanyaan:
      "[Studi Kasus Wawancara Kompetensi] Dua jam sebelum peluncuran portal layanan publik daerah yang akan diresmikan pimpinan instansi, tim pengembang menemukan celah keamanan pada fitur pengunggahan dokumen yang memungkinkan pihak lain menebak URL dokumen pelamar. Keputusan manajerial paling tepat Anda sebagai ketua proyek adalah...",
    opsi: [
      { kunci: "A", teks: "Tetap membuka fitur unggah tersebut ke publik demi menjaga seremoni peluncuran agar pimpinan senang" },
      { kunci: "B", teks: "Melaporkan risiko secara jujur dan cepat ke pimpinan beserta opsi mitigasi konkret: menonaktifkan sementara modul unggahan sensitif sembari merilis fitur informasi inti atau menunda akses publik terbatas 1×24 jam sampai validasi keamanan tuntas" },
      { kunci: "C", teks: "Menyembunyikan temuan bug dari pimpinan lalu memperbaikinya diam-diam minggu depan" },
      { kunci: "D", teks: "Menyalahkan vendor pengembang di depan undangan seremoni tanpa memberi solusi perbaikan" },
      { kunci: "E", teks: "Menutup seluruh situs web instansi tanpa memberikan penjelasan jadwal pemulihan" },
    ],
    kunci_benar: "B",
    pembahasan:
      "Pengambilan keputusan berbasis manajemen risiko menempatkan pelindungan data warga sebagai prioritas mutlak sambil menyajikan opsi mitigasi praktis yang komunikatif kepada pimpinan.",
    referensi: "Permenpan-RB No. 38 Tahun 2017 — Pengambilan Keputusan & Komunikasi",
  },
  {
    id: "skb-waw-18",
    rumpun: "Situasional Wawancara Jabatan",
    sub_topik: "Mengelola Perubahan & Digitalisasi",
    tingkat: "sedang",
    pertanyaan:
      "[Studi Kasus Wawancara Kompetensi] Ketika Anda memperkenalkan alur kerja digital terpadu untuk memangkas waktu layanan izin dari 5 hari menjadi 1 hari, beberapa pegawai senior mengkhawatirkan pengurangan peran kerja mereka sehingga bersikap resisten. Strategi kepemimpinan perubahan (change management) paling efektif adalah...",
    opsi: [
      { kunci: "A", teks: "Mengabaikan kekhawatiran pegawai senior dan langsung memutasi mereka yang lamban beradaptasi" },
      { kunci: "B", teks: "Mengajak dialog empatik untuk mendengar kekhawatiran mereka, menunjukkan bagaimana alih tugas membebaskan mereka dari input berulang menuju peran verifikasi substansi bernilai tinggi, dan memberi pendampingan bertahap bersama champion muda" },
      { kunci: "C", teks: "Membatalkan inovasi layanan cepat 1 hari demi mempertahankan kenyamanan pegawai lama" },
      { kunci: "D", teks: "Menjalankan dua sistem paralel permanen tanpa batas waktu evaluasi" },
      { kunci: "E", teks: "Mengeluarkan surat peringatan langsung sejak hari pertama uji coba sistem" },
    ],
    kunci_benar: "B",
    pembahasan:
      "Kompetensi Mengelola Perubahan menekankan keterlibatan aktif pihak terdampak (buy-in), penataan ulang peran yang bermartabat, dan pendampingan terstruktur menuju target inovasi.",
    referensi: "Permenpan-RB No. 38 Tahun 2017 — Mengelola Perubahan",
  },
  {
    id: "skb-waw-19",
    rumpun: "Situasional Wawancara Jabatan",
    sub_topik: "Perekat Bangsa & Resolusi Konflik Sosial",
    tingkat: "sedang",
    pertanyaan:
      "[Studi Kasus Wawancara Sosial Kultural] Di wilayah layanan terpadu, muncul ketegangan antara dua kelompok warga berbeda organisasi profesi mengenai prioritas akses lapak binaan pemerintah daerah hingga mengancam boikot forum konsultasi publik. Peran Anda sebagai perwakilan ASN perekat bangsa adalah...",
    opsi: [
      { kunci: "A", teks: "Memihak kelompok yang lebih banyak anggotanya agar konflik cepat reda" },
      { kunci: "B", teks: "Membatalkan seluruh program binaan lapak daerah agar pemerintah tidak ikut campur" },
      { kunci: "C", teks: "Menjadi mediator yang netral dan kredibel, mendengarkan aspirasi kedua kelompok terpisah lalu mempertemukan mereka menyepakati kriteria seleksi lapak berbasis skor objektif dan transparan" },
      { kunci: "D", teks: "Menunda mediasi tanpa batas waktu sembari menunggu salah satu pihak mengalah" },
      { kunci: "E", teks: "Meminta pihak keamanan membubarkan kedua kelompok secara paksa sebelum dialog" },
    ],
    kunci_benar: "C",
    pembahasan:
      "Kompetensi Perekat Bangsa menguji kemampuan menjadi penengah yang imparsial, membangun kepercayaan lintas kelompok, dan menghasilkan aturan main objektif yang diterima bersama.",
    referensi: "Permenpan-RB No. 38 Tahun 2017 — Kompetensi Sosial Kultural (Perekat Bangsa)",
  },
  {
    id: "skb-waw-20",
    rumpun: "Situasional Wawancara Jabatan",
    sub_topik: "Orientasi Pada Hasil & Pengembangan Tim",
    tingkat: "sedang",
    pertanyaan:
      "[Studi Kasus Wawancara Kompetensi] Jelaskan pendekatan terbaik menurut metode STAR (Situation, Task, Action, Result) apabila dalam sebuah proyek lintas bidang tim Anda gagal mencapai target triwulan pertama sebesar 20%...",
    opsi: [
      { kunci: "A", teks: "Fokus menjelaskan bahwa kegagalan murni akibat anggaran cair terlambat dan kurangnya staf tambahan dari bagian SDM" },
      { kunci: "B", teks: "Mengurai secara jujur kontribusi hambatan internal tim, tindakan perbaikan konkret yang Anda pimpin (penataan jadwal mingguan, pemetaan hambatan data, serta coaching harian), dan memaparkan hasil terukur pemulihan target pada triwulan berikutnya" },
      { kunci: "C", teks: "Menjawab bahwa tim Anda tidak pernah mengalami kegagalan target sepanjang karier agar terlihat sempurna" },
      { kunci: "D", teks: "Menjelaskan teori manajemen proyek secara umum dari buku teks tanpa contoh pengalaman tindakan konkret" },
      { kunci: "E", teks: "Menyalahkan unit mitra eksternal yang paling sering terlambat mengirim surat balasan" },
    ],
    kunci_benar: "B",
    pembahasan:
      "Wawancara perilaku terstruktur berbasis metode STAR menilai akuntabilitas pribadi (tidak menyalahkan pihak lain), kemampuan belajar dari kendala (reflective action), dan dampak hasil yang dapat diverifikasi.",
    referensi: "Pedoman Penilaian Kompetensi ASN — Wawancara Berbasis Perilaku (BEI/STAR)",
  },
];

export function bersihkanKunciJawabanSKB(
  daftar: ButirSoalSKB[]
): ButirSoalSKBTerproteksi[] {
  return daftar.map((item) => ({
    id: item.id,
    rumpun: item.rumpun,
    sub_topik: item.sub_topik,
    tingkat: item.tingkat,
    pertanyaan: item.pertanyaan,
    opsi: item.opsi,
  }));
}
