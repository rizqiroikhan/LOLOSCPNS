/**
 * Bank Soal Terkurasi Simulasi CAT SKD (110 Soal) & Kuis Singkat Beranda — LOLOS CPNS.
 *
 * Mengacu penuh pada struktur Keputusan Menteri PANRB Nomor 321 Tahun 2024:
 * - TWK: Soal nomor 1 s.d. 30 (30 butir | Benar +5, Salah/Kosong 0 | Maksimal 150)
 * - TIU: Soal nomor 31 s.d. 65 (35 butir | Benar +5, Salah/Kosong 0 | Maksimal 175)
 * - TKP: Soal nomor 66 s.d. 110 (45 butir | Skala 1 s.d. 5, Kosong 0 | Maksimal 225)
 *
 * Seluruh teks soal, pilihan jawaban, dan pembahasan menggunakan Bahasa Indonesia yang baku.
 */

import type {
  KategoriSubtesSKD,
  PilihanJawabanSoal,
  QuestionRow,
} from "../types/database.ts";

export interface SoalSimulasiCAT extends QuestionRow {
  nomor_urut: number;
}

/**
 * 3 Soal Kuis Singkat Interaktif (1 TWK, 1 TIU, 1 TKP) untuk Halaman Utama (`/`).
 */
export const SOAL_KUIS_SINGKAT_BERANDA: SoalSimulasiCAT[] = [
  {
    id: "kuis-twk-1",
    nomor_urut: 1,
    stage: "SKD",
    category: "TWK",
    sub_topic: "Integritas",
    difficulty: "sedang",
    question_text:
      "Seorang pejabat pembuat komitmen (PPK) dihubungi oleh rekanan pemenang tender yang berniat mengirimkan bingkisan hari raya ke alamat rumah pribadi sebagai ucapan terima kasih. Sikap yang paling tepat sesuai prinsip integritas ASN adalah...",
    image_url: null,
    options: [
      {
        kunci: "A",
        teks: "Menerima bingkisan tersebut kemudian membagikannya kepada staf pendukung di kantor.",
        skor: 0,
      },
      {
        kunci: "B",
        teks: "Menolak secara tegas pemberian tersebut dan melaporkan upaya pemberian gratifikasi kepada Unit Pengendalian Gratifikasi (UPG).",
        skor: 5,
      },
      {
        kunci: "C",
        teks: "Meminta rekanan mengirimkan bingkisan tersebut setelah masa kontrak proyek berakhir.",
        skor: 0,
      },
      {
        kunci: "D",
        teks: "Menolak secara halus tanpa membuat laporan agar hubungan kerja tetap harmonis.",
        skor: 0,
      },
      {
        kunci: "E",
        teks: "Menerima bingkisan tersebut karena kontrak lelang sudah selesai ditandatangani.",
        skor: 0,
      },
    ],
    explanation:
      "Berdasarkan UU No. 20 Tahun 2001 dan kode etik ASN, setiap pemberian yang berkaitan dengan jabatan wajib ditolak sejak awal dan dilaporkan kepada Unit Pengendalian Gratifikasi (UPG) atau KPK.",
    source_reference:
      "Kisi-Kisi Resmi TWK Kepmenpan-RB Nomor 321 Tahun 2024 — Integritas",
    is_paraphrased: true,
    status: "disetujui",
    embedding: null,
    created_at: "2024-08-01T00:00:00.000Z",
  },
  {
    id: "kuis-tiu-2",
    nomor_urut: 2,
    stage: "SKD",
    category: "TIU",
    sub_topic: "Kemampuan Numerik - Deret Angka",
    difficulty: "sedang",
    question_text:
      "Perhatikan barisan bilangan berikut: 6, 13, 27, 55, 111, ... Suku berikutnya yang tepat untuk melengkapi barisan tersebut adalah...",
    image_url: null,
    options: [
      { kunci: "A", teks: "212", skor: 0 },
      { kunci: "B", teks: "221", skor: 0 },
      { kunci: "C", teks: "222", skor: 0 },
      { kunci: "D", teks: "223", skor: 5 },
      { kunci: "E", teks: "225", skor: 0 },
    ],
    explanation:
      "Pola barisan tersebut adalah setiap suku dikalikan 2 lalu ditambah 1 (Un = 2 × Un-1 + 1): 6×2+1=13, 13×2+1=27, 27×2+1=55, 55×2+1=111. Maka suku berikutnya adalah 111 × 2 + 1 = 223.",
    source_reference:
      "Kisi-Kisi Resmi TIU Kepmenpan-RB Nomor 321 Tahun 2024 — Kemampuan Numerik (Deret Angka)",
    is_paraphrased: true,
    status: "disetujui",
    embedding: null,
    created_at: "2024-08-01T00:00:00.000Z",
  },
  {
    id: "kuis-tkp-3",
    nomor_urut: 3,
    stage: "SKD",
    category: "TKP",
    sub_topic: "Pelayanan Publik",
    difficulty: "sedang",
    question_text:
      "Instansi Anda baru saja meluncurkan aplikasi layanan perizinan daring. Seorang pemohon datang ke loket pengaduan dengan nada kesal karena gagal mengunggah dokumen persyaratan sejak pagi. Tindakan Anda yang paling tepat adalah...",
    image_url: null,
    options: [
      {
        kunci: "A",
        teks: "Mendengarkan keluhan pemohon dengan tenang, memeriksa kendala teknis pada berkasnya, dan memandu pengunggahan hingga berhasil.",
        skor: 5,
      },
      {
        kunci: "B",
        teks: "Memberikan brosur panduan penggunaan aplikasi dan meminta pemohon mencoba kembali dari rumah.",
        skor: 3,
      },
      {
        kunci: "C",
        teks: "Mengarahkan pemohon untuk menghubungi pusat panggilan (call center) bagian teknologi informasi.",
        skor: 2,
      },
      {
        kunci: "D",
        teks: "Menjelaskan bahwa gangguan jaringan merupakan hal wajar pada sistem yang baru diluncurkan dan memintanya bersabar.",
        skor: 4,
      },
      {
        kunci: "E",
        teks: "Meminta petugas keamanan menenangkan pemohon terlebih dahulu sebelum dilayani.",
        skor: 1,
      },
    ],
    explanation:
      "Pada aspek Pelayanan Publik, skor tertinggi (5) diberikan pada tindakan yang menunjukkan empati, ketenangan menghadapi keluhan pengguna layanan, serta pemberian solusi tuntas secara langsung.",
    source_reference:
      "Kisi-Kisi Resmi TKP Kepmenpan-RB Nomor 321 Tahun 2024 — Pelayanan Publik",
    is_paraphrased: true,
    status: "disetujui",
    embedding: null,
    created_at: "2024-08-01T00:00:00.000Z",
  },
];

const TEMPLAT_TWK = [
  {
    sub_topic: "Nasionalisme",
    question_text:
      "Semangat kebangsaan pada era globalisasi ditunjukkan melalui kemampuan bangsa Indonesia menyerap kemajuan ilmu pengetahuan dunia tanpa kehilangan jati diri nasional. Praktik nyata sikap tersebut dalam birokrasi pemerintahan adalah...",
    options: [
      {
        kunci: "A" as const,
        teks: "Mengadopsi sistem tata kelola pemerintahan elektronik terbaik dunia dengan tetap mengutamakan kepentingan pelayanan seluruh rakyat Indonesia.",
        skor: 5,
      },
      {
        kunci: "B" as const,
        teks: "Menolak seluruh kerja sama teknologi internasional demi menjaga kemandirian lokal.",
        skor: 0,
      },
      {
        kunci: "C" as const,
        teks: "Mengganti bahasa pengantar pelayanan publik dengan bahasa asing agar terlihat modern.",
        skor: 0,
      },
      {
        kunci: "D" as const,
        teks: "Menyerahkan pengelolaan data kependudukan strategis kepada perusahaan multinasional.",
        skor: 0,
      },
      {
        kunci: "E" as const,
        teks: "Membatasi akses informasi global bagi aparatur sipil negara di daerah.",
        skor: 0,
      },
    ],
    explanation:
      "Nasionalisme yang terbuka dan konstruktif menempatkan kemajuan teknologi global sebagai sarana memajukan kesejahteraan umum dan pelayanan publik tanpa mengorbankan kedaulatan bangsa.",
  },
  {
    sub_topic: "Integritas",
    question_text:
      "Dalam pelaksanaan tugas pengawasan anggaran daerah, seorang auditor menemukan selisih penggunaan dana pada kegiatan yang dipimpin oleh kerabat dekatnya sendiri. Sikap berintegritas yang wajib diambil adalah...",
    options: [
      {
        kunci: "A" as const,
        teks: "Memberikan waktu tambahan secara tertutup kepada kerabat tersebut untuk memperbaiki bukti pertanggungjawaban.",
        skor: 0,
      },
      {
        kunci: "B" as const,
        teks: "Mencatat temuan audit secara objektif sesuai bukti pemeriksaan dan mengungkapkan adanya hubungan kekerabatan kepada atasan untuk mencegah benturan kepentingan.",
        skor: 5,
      },
      {
        kunci: "C" as const,
        teks: "Menghapus temuan tersebut karena nilainya relatif kecil dibandingkan total anggaran.",
        skor: 0,
      },
      {
        kunci: "D" as const,
        teks: "Meminta imbalan jasa konsultasi agar laporan pemeriksaan tetap dinyatakan wajar.",
        skor: 0,
      },
      {
        kunci: "E" as const,
        teks: "Menunda pelaporan hasil audit hingga masa jabatan kerabat tersebut berakhir.",
        skor: 0,
      },
    ],
    explanation:
      "Prinsip integritas dan akuntabilitas menuntut objektivitas penuh atas fakta pemeriksaan serta deklarasi benturan kepentingan (conflict of interest) secara transparan.",
  },
  {
    sub_topic: "Bela Negara",
    question_text:
      "Wujud keikutsertaan warga negara yang berprofesi sebagai aparatur sipil negara dalam upaya bela negara di tengah ancaman disinformasi digital adalah...",
    options: [
      {
        kunci: "A" as const,
        teks: "Menyebarkan ulang setiap berita viral di grup percakapan pegawai tanpa verifikasi.",
        skor: 0,
      },
      {
        kunci: "B" as const,
        teks: "Menyampaikan data kebijakan publik yang akurat, terverifikasi, serta menangkal berita bohong yang berpotensi memecah belah persatuan masyarakat.",
        skor: 5,
      },
      {
        kunci: "C" as const,
        teks: "Menutup seluruh saluran komunikasi daring instansi agar bebas dari kritik masyarakat.",
        skor: 0,
      },
      {
        kunci: "D" as const,
        teks: "Terlibat perdebatan kasar dengan warganet di media sosial menggunakan akun dinas.",
        skor: 0,
      },
      {
        kunci: "E" as const,
        teks: "Mengabaikan penyebaran informasi palsu tentang layanan instansi karena bukan tugas pokoknya.",
        skor: 0,
      },
    ],
    explanation:
      "Sesuai UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara, pengabdian sesuai profesi ASN mencakup menjaga ketahanan informasi dan keutuhan masyarakat dari ancaman nonmiliter.",
  },
  {
    sub_topic: "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
    question_text:
      "Kebijakan pemerataan pembangunan infrastruktur kesehatan dan pendidikan hingga ke wilayah perbatasan dan kepulauan terluar merupakan pengamalan nyata dari sila Pancasila, khususnya...",
    options: [
      {
        kunci: "A" as const,
        teks: "Sila Kelima — Keadilan sosial bagi seluruh rakyat Indonesia.",
        skor: 5,
      },
      {
        kunci: "B" as const,
        teks: "Pelaksanaan otonomi mutlak tanpa koordinasi pemerintah pusat.",
        skor: 0,
      },
      {
        kunci: "C" as const,
        teks: "Penyeragaman budaya lokal di seluruh wilayah perbatasan.",
        skor: 0,
      },
      {
        kunci: "D" as const,
        teks: "Pemusatan kegiatan ekonomi hanya di ibu kota provinsi.",
        skor: 0,
      },
      {
        kunci: "E" as const,
        teks: "Pemberian hak istimewa hukum bagi pejabat di daerah perbatasan.",
        skor: 0,
      },
    ],
    explanation:
      "Pemerataan akses layanan dasar (kesehatan dan pendidikan) di seluruh wilayah NKRI tanpa diskriminasi geografis merupakan perwujudan Sila Kelima Pancasila dan tujuan negara dalam Pembukaan UUD 1945.",
  },
  {
    sub_topic: "Bahasa Negara",
    question_text:
      "Manakah di antara kalimat surat dinas berikut yang telah memenuhi kaidah penulisan huruf kapital dan kata baku sesuai Ejaan Bahasa Indonesia yang Disempurnakan (EYD)?",
    options: [
      {
        kunci: "A" as const,
        teks: "Sehubungan dengan surat Sekretaris Jenderal Kementerian Kesehatan, kami menghimbau Saudara hadir tepat waktu.",
        skor: 0,
      },
      {
        kunci: "B" as const,
        teks: "Sehubungan dengan surat Sekretaris Jenderal Kementerian Kesehatan, kami mengimbau Saudara hadir tepat waktu.",
        skor: 5,
      },
      {
        kunci: "C" as const,
        teks: "Sehubungan Dengan Surat sekretaris jenderal Kementerian Kesehatan, kami mengimbau saudara hadir tepat waktu.",
        skor: 0,
      },
      {
        kunci: "D" as const,
        teks: "Sehubungan dengan surat Sekretaris Jendral Kementrian Kesehatan, kami mengimbau Saudara hadir tepat waktu.",
        skor: 0,
      },
      {
        kunci: "E" as const,
        teks: "Sehubungan dengan surat Sekretaris Jenderal Kementerian Kesehatan, Kami menghimbau saudara hadir tepat waktu.",
        skor: 0,
      },
    ],
    explanation:
      "Menurut KBBI dan EYD V, bentuk baku adalah 'Jenderal' (bukan Jendral), 'Kementerian' (bukan Kementrian), 'mengimbau' (kata dasar imbau, bukan himbau), serta sapaan 'Saudara' ditulis dengan huruf awal kapital.",
  },
];

const TEMPLAT_TIU = [
  {
    sub_topic: "Kemampuan Verbal - Analogi",
    question_text:
      "KONSTITUSI : NEGARA = ANGGARAN DASAR : ... Hubungan kata yang paling sepadan adalah...",
    options: [
      { kunci: "A" as const, teks: "Perusahaan", skor: 0 },
      { kunci: "B" as const, teks: "Organisasi", skor: 5 },
      { kunci: "C" as const, teks: "Parlemen", skor: 0 },
      { kunci: "D" as const, teks: "Kementerian", skor: 0 },
      { kunci: "E" as const, teks: "Peraturan Daerah", skor: 0 },
    ],
    explanation:
      "Konstitusi adalah hukum atau aturan dasar tertinggi bagi sebuah negara, sebagaimana Anggaran Dasar (AD) adalah aturan dasar tertinggi bagi sebuah organisasi.",
  },
  {
    sub_topic: "Kemampuan Verbal - Silogisme",
    question_text:
      "Premis 1: Semua peserta yang lulus Seleksi Kompetensi Dasar (SKD) dan masuk peringkat tiga kali formasi berhak mengikuti Seleksi Kompetensi Bidang (SKB). Premis 2: Rina lulus SKD dan berada pada peringkat pertama di formasinya. Simpulan yang paling tepat adalah...",
    options: [
      {
        kunci: "A" as const,
        teks: "Rina pasti langsung diangkat menjadi CPNS tanpa tes lanjutan.",
        skor: 0,
      },
      {
        kunci: "B" as const,
        teks: "Rina berhak mengikuti Seleksi Kompetensi Bidang (SKB).",
        skor: 5,
      },
      {
        kunci: "C" as const,
        teks: "Sebagian peserta yang lulus SKD tidak mengikuti SKB.",
        skor: 0,
      },
      {
        kunci: "D" as const,
        teks: "Rina belum tentu memenuhi nilai ambang batas SKD.",
        skor: 0,
      },
      {
        kunci: "E" as const,
        teks: "Semua peserta SKB berada pada peringkat pertama.",
        skor: 0,
      },
    ],
    explanation:
      "Berdasarkan kaidah Modus Ponens (Jika P maka Q; P terpenuhi; maka Q), karena Rina lulus SKD dan masuk dalam peringkat tiga kali formasi (peringkat pertama), maka Rina berhak mengikuti SKB.",
  },
  {
    sub_topic: "Kemampuan Verbal - Analitis",
    question_text:
      "Lima loket pelayanan (L1, L2, L3, L4, L5) disusun berderet dari kiri ke kanan. Loket L3 berada tepat di tengah. Loket L1 bersebelahan dengan L2 di sisi kiri. Loket L5 berada di ujung paling kanan. Loket manakah yang berada di urutan keempat dari kiri?",
    options: [
      { kunci: "A" as const, teks: "Loket L1", skor: 0 },
      { kunci: "B" as const, teks: "Loket L2", skor: 0 },
      { kunci: "C" as const, teks: "Loket L3", skor: 0 },
      { kunci: "D" as const, teks: "Loket L4", skor: 5 },
      { kunci: "E" as const, teks: "Loket L5", skor: 0 },
    ],
    explanation:
      "Urutan posisi 1 s.d. 5 dari kiri ke kanan: posisi 3 adalah L3, posisi 5 adalah L5, sedangkan L1 dan L2 bersebelahan di sisi kiri (posisi 1 dan 2). Maka posisi keempat ditempati oleh Loket L4.",
  },
  {
    sub_topic: "Kemampuan Numerik - Berhitung",
    question_text:
      "Hasil dari (125 × 16) ÷ 25 + (3/4 × 120) - 45 adalah...",
    options: [
      { kunci: "A" as const, teks: "115", skor: 0 },
      { kunci: "B" as const, teks: "120", skor: 0 },
      { kunci: "C" as const, teks: "125", skor: 5 },
      { kunci: "D" as const, teks: "130", skor: 0 },
      { kunci: "E" as const, teks: "135", skor: 0 },
    ],
    explanation:
      "Hitung per kelompok operasi: (125 ÷ 25) × 16 = 5 × 16 = 80. Kemudian (3/4 × 120) = 90. Jumlahkan: 80 + 90 - 45 = 125.",
  },
  {
    sub_topic: "Kemampuan Numerik - Soal Cerita",
    question_text:
      "Sebuah balai pelatihan menyiapkan 180 paket modul untuk peserta diklat. Pada hari pertama dibagikan 40% dari total modul, dan pada hari kedua dibagikan 2/3 dari sisa modul yang ada. Berapakah jumlah paket modul yang masih tersisa?",
    options: [
      { kunci: "A" as const, teks: "24 paket modul", skor: 0 },
      { kunci: "B" as const, teks: "30 paket modul", skor: 0 },
      { kunci: "C" as const, teks: "36 paket modul", skor: 5 },
      { kunci: "D" as const, teks: "48 paket modul", skor: 0 },
      { kunci: "E" as const, teks: "72 paket modul", skor: 0 },
    ],
    explanation:
      "Hari pertama dibagikan 40% × 180 = 72 modul, sehingga sisa = 180 - 72 = 108 modul. Hari kedua dibagikan 2/3 × 108 = 72 modul. Maka modul yang masih tersisa adalah 108 - 72 = 36 paket modul.",
  },
];

const TEMPLAT_TKP = [
  {
    sub_topic: "Pelayanan Publik",
    question_text:
      "Seorang warga penyandang disabilitas fisik datang mengurus dokumen kependudukan seorang diri saat kondisi ruang tunggu sedang penuh. Sikap Anda sebagai petugas garda depan adalah...",
    options: [
      {
        kunci: "A" as const,
        teks: "Menyambut dengan sopan, menyediakan kursi prioritas yang aksesibel, dan membantu proses verifikasi berkas secara langsung sesuai prosedur layanan ramah kelompok rentan.",
        skor: 5,
      },
      {
        kunci: "B" as const,
        teks: "Meminta warga lain memberikan tempat duduk sembari menunggu nomor antrean reguler dipanggil.",
        skor: 4,
      },
      {
        kunci: "C" as const,
        teks: "Menjelaskan bahwa seluruh pemohon wajib mengikuti antrean sesuai urutan kedatangan tanpa terkecuali.",
        skor: 2,
      },
      {
        kunci: "D" as const,
        teks: "Menyarankan pemohon tersebut datang kembali pada jam layanan yang lebih sepi.",
        skor: 1,
      },
      {
        kunci: "E" as const,
        teks: "Meminta rekan kerja lain untuk melayani pemohon tersebut setelah tugas administrasi Anda selesai.",
        skor: 3,
      },
    ],
    explanation:
      "Standar pelayanan publik sesuai UU No. 25 Tahun 2009 mewajibkan penyediaan layanan prioritas dan perlakuan khusus yang bermartabat bagi kelompok rentan (penyandang disabilitas, lansia, ibu hamil).",
  },
  {
    sub_topic: "Jejaring Kerja",
    question_text:
      "Unit kerja Anda ditugaskan menyusun program percepatan penurunan tengkes (stunting) yang memerlukan sinkronisasi data lintas dinas. Namun, salah satu dinas terkait lambat merespons surat permintaan data. Langkah paling efektif yang Anda tempuh adalah...",
    options: [
      {
        kunci: "A" as const,
        teks: "Menghubungi pejabat penghubung (PIC) dinas tersebut secara proaktif, menawarkan rapat koordinasi singkat untuk menyelaraskan format data, dan membantu mengatasi kendala teknis penyediaan data.",
        skor: 5,
      },
      {
        kunci: "B" as const,
        teks: "Mengirimkan surat teguran kedua dan menunggu hingga batas waktu berakhir.",
        skor: 3,
      },
      {
        kunci: "C" as const,
        teks: "Melaporkan kelambatan dinas tersebut secara sepihak dalam rapat pimpinan daerah.",
        skor: 2,
      },
      {
        kunci: "D" as const,
        teks: "Menyusun laporan menggunakan data perkiraan tahun lalu tanpa menunggu konfirmasi.",
        skor: 1,
      },
      {
        kunci: "E" as const,
        teks: "Meminta atasan langsung menghubungi kepala dinas terkait untuk mempercepat pengiriman data.",
        skor: 4,
      },
    ],
    explanation:
      "Aspek Jejaring Kerja (kolaborasi lintas unit) mengutamakan komunikasi proaktif, kemitraan setara, dan penyelesaian hambatan koordinasi secara bersama-sama.",
  },
  {
    sub_topic: "Sosial Budaya",
    question_text:
      "Anda ditempatkan di kantor perwakilan daerah yang memiliki tradisi adat dan kebiasaan komunikasi yang sangat berbeda dengan daerah asal Anda. Sikap adaptasi terbaik yang Anda tunjukkan adalah...",
    options: [
      {
        kunci: "A" as const,
        teks: "Mempelajari nilai dan tata krama setempat dengan penuh rasa hormat serta membangun komunikasi terbuka dengan rekan kerja maupun masyarakat lokal.",
        skor: 5,
      },
      {
        kunci: "B" as const,
        teks: "Tetap bekerja secara profesional di dalam kantor sambil membatasi interaksi sosial di luar jam kerja.",
        skor: 3,
      },
      {
        kunci: "C" as const,
        teks: "Hanya bergaul dengan sesama pegawai pendatang yang berasal dari daerah yang sama.",
        skor: 1,
      },
      {
        kunci: "D" as const,
        teks: "Meminta rekan kerja lokal menyesuaikan diri dengan gaya komunikasi yang biasa Anda gunakan.",
        skor: 2,
      },
      {
        kunci: "E" as const,
        teks: "Mengamati kebiasaan masyarakat setempat terlebih dahulu sebelum mulai berinteraksi aktif.",
        skor: 4,
      },
    ],
    explanation:
      "Aspek Sosial Budaya mengukur kepekaan kultural, penghargaan terhadap kemajemukan masyarakat Indonesia, serta kemampuan beradaptasi secara cepat dan harmonis.",
  },
  {
    sub_topic: "Teknologi Informasi dan Komunikasi (TIK)",
    question_text:
      "Kementerian menerapkan sistem tanda tangan elektronik dan pengarsipan berbasis awan (cloud), namun beberapa pegawai senior di tim Anda masih enggan beralih dari berkas kertas. Tindakan Anda adalah...",
    options: [
      {
        kunci: "A" as const,
        teks: "Mempelajari sistem baru secara menyeluruh, menyusun panduan ringkas yang mudah diikuti, serta mendampingi rekan-rekan senior berlatih menggunakannya secara bertahap.",
        skor: 5,
      },
      {
        kunci: "B" as const,
        teks: "Menggunakan sistem digital tersebut untuk pekerjaan pribadi Anda saja agar target individu tercapai.",
        skor: 3,
      },
      {
        kunci: "C" as const,
        teks: "Mengerjakan seluruh tugas digital milik pegawai senior agar pekerjaan tim tidak tertunda.",
        skor: 2,
      },
      {
        kunci: "D" as const,
        teks: "Mengusulkan kepada pimpinan agar mengadakan pelatihan resmi dari biro teknologi informasi.",
        skor: 4,
      },
      {
        kunci: "E" as const,
        teks: "Ikut menggunakan berkas kertas agar selaras dengan kebiasaan mayoritas pegawai di ruangan.",
        skor: 1,
      },
    ],
    explanation:
      "Aspek TIK menilai literasi digital, pemanfaatan teknologi untuk efisiensi birokrasi, serta inisiatif menularkan kemampuan digital kepada rekan kerja.",
  },
  {
    sub_topic: "Profesionalisme",
    question_text:
      "Di tengah pengerjaan laporan evaluasi tahunan yang memiliki tenggat waktu besok pagi, pimpinan meminta Anda menyiapkan bahan paparan mendadak untuk rapat lintas kementerian sore ini. Tindakan Anda adalah...",
    options: [
      {
        kunci: "A" as const,
        teks: "Menyusun skala prioritas dengan segera menyelesaikan bahan paparan rapat sore ini secara akurat, kemudian menuntaskan laporan tahunan tepat waktu sebelum tenggat esok pagi.",
        skor: 5,
      },
      {
        kunci: "B" as const,
        teks: "Menolak tugas tambahan tersebut karena laporan tahunan sudah mendekati batas waktu.",
        skor: 1,
      },
      {
        kunci: "C" as const,
        teks: "Berkoordinasi dengan pimpinan mengenai prioritas kedua tugas dan membagi pengerjaan data pendukung bersama rekan satu tim.",
        skor: 4,
      },
      {
        kunci: "D" as const,
        teks: "Mengerjakan bahan paparan seadanya agar laporan evaluasi tahunan tidak terganggu.",
        skor: 2,
      },
      {
        kunci: "E" as const,
        teks: "Meminta perpanjangan waktu pengumpulan laporan evaluasi tahunan hingga minggu depan.",
        skor: 3,
      },
    ],
    explanation:
      "Aspek Profesionalisme menguji ketangguhan bekerja di bawah tekanan, manajemen prioritas, serta komitmen menuntaskan tanggung jawab dengan mutu tinggi.",
  },
  {
    sub_topic: "Anti Radikalisme",
    question_text:
      "Anda menemukan sebuah unggahan di grup diskusi internal pegawai yang berisi ajakan menolak dasar negara dan menyudutkan kelompok masyarakat tertentu. Sikap Anda sebagai ASN perekat dan pemersatu bangsa adalah...",
    options: [
      {
        kunci: "A" as const,
        teks: "Tidak ikut menyebarkan pesan tersebut, mengingatkan anggota grup secara santun mengenai netralitas serta wawasan kebangsaan ASN, dan melaporkan temuan tersebut melalui saluran pengaduan resmi kepegawaian.",
        skor: 5,
      },
      {
        kunci: "B" as const,
        teks: "Keluar dari grup diskusi tersebut agar tidak terbawa suasana perdebatan.",
        skor: 2,
      },
      {
        kunci: "C" as const,
        teks: "Mendiamkan saja karena menganggap unggahan tersebut hanya opini pribadi rekan kerja.",
        skor: 1,
      },
      {
        kunci: "D" as const,
        teks: "Menegur pengunggah pesan secara pribadi agar segera menghapus pesannya dari grup.",
        skor: 4,
      },
      {
        kunci: "E" as const,
        teks: "Membalas unggahan tersebut dengan kemarahan di ruang diskusi grup.",
        skor: 3,
      },
    ],
    explanation:
      "Aspek Anti Radikalisme mengukur keteguhan memegang nilai Pancasila, penolakan terhadap intoleransi/ekstremisme, serta langkah pencegahan yang terukur dan sesuai mekanisme kelembagaan.",
  },
];

/**
 * Menghasilkan 110 butir soal Simulasi CAT SKD lengkap (30 TWK, 35 TIU, 45 TKP)
 * dengan variasi nomor dan konteks yang deterministik.
 */
export function bangunBankSoalSimulasi110(): SoalSimulasiCAT[] {
  const daftar110: SoalSimulasiCAT[] = [];

  // 1. Soal 1 s.d. 30: TWK (30 Soal)
  for (let nomor = 1; nomor <= 30; nomor++) {
    const templat = TEMPLAT_TWK[(nomor - 1) % TEMPLAT_TWK.length];
    const putaran = Math.floor((nomor - 1) / TEMPLAT_TWK.length) + 1;
    daftar110.push({
      id: `skd-twk-${nomor}`,
      nomor_urut: nomor,
      stage: "SKD",
      category: "TWK",
      sub_topic: templat.sub_topic,
      difficulty: nomor % 3 === 0 ? "sulit" : nomor % 2 === 0 ? "sedang" : "mudah",
      question_text:
        putaran === 1
          ? templat.question_text
          : `[Studi Kasus Kebangsaan #${nomor}] ${templat.question_text}`,
      image_url: null,
      options: templat.options.map((o) => ({ ...o })),
      explanation: templat.explanation,
      source_reference: `Kepmenpan-RB Nomor 321 Tahun 2024 — TWK (${templat.sub_topic})`,
      is_paraphrased: true,
      status: "disetujui",
      embedding: null,
      created_at: "2024-08-01T00:00:00.000Z",
    });
  }

  // 2. Soal 31 s.d. 65: TIU (35 Soal)
  for (let indeks = 0; indeks < 35; indeks++) {
    const nomor = 31 + indeks;
    const templat = TEMPLAT_TIU[indeks % TEMPLAT_TIU.length];
    const putaran = Math.floor(indeks / TEMPLAT_TIU.length) + 1;
    daftar110.push({
      id: `skd-tiu-${nomor}`,
      nomor_urut: nomor,
      stage: "SKD",
      category: "TIU",
      sub_topic: templat.sub_topic,
      difficulty: nomor % 3 === 0 ? "sulit" : nomor % 2 === 0 ? "sedang" : "mudah",
      question_text:
        putaran === 1
          ? templat.question_text
          : `[Variasi Penalaran #${nomor}] ${templat.question_text}`,
      image_url: null,
      options: templat.options.map((o) => ({ ...o })),
      explanation: templat.explanation,
      source_reference: `Kepmenpan-RB Nomor 321 Tahun 2024 — TIU (${templat.sub_topic})`,
      is_paraphrased: true,
      status: "disetujui",
      embedding: null,
      created_at: "2024-08-01T00:00:00.000Z",
    });
  }

  // 3. Soal 66 s.d. 110: TKP (45 Soal)
  for (let indeks = 0; indeks < 45; indeks++) {
    const nomor = 66 + indeks;
    const templat = TEMPLAT_TKP[indeks % TEMPLAT_TKP.length];
    const putaran = Math.floor(indeks / TEMPLAT_TKP.length) + 1;
    daftar110.push({
      id: `skd-tkp-${nomor}`,
      nomor_urut: nomor,
      stage: "SKD",
      category: "TKP",
      sub_topic: templat.sub_topic,
      difficulty: "sedang",
      question_text:
        putaran === 1
          ? templat.question_text
          : `[Situasi Kerja ASN #${nomor}] ${templat.question_text}`,
      image_url: null,
      options: templat.options.map((o) => ({ ...o })),
      explanation: templat.explanation,
      source_reference: `Kepmenpan-RB Nomor 321 Tahun 2024 — TKP (${templat.sub_topic})`,
      is_paraphrased: true,
      status: "disetujui",
      embedding: null,
      created_at: "2024-08-01T00:00:00.000Z",
    });
  }

  return daftar110;
}

export function formatDetikKeJamMenitDetik(totalDetik: number): string {
  const detikAman = Math.max(0, Math.floor(totalDetik));
  const jam = Math.floor(detikAman / 3600);
  const menit = Math.floor((detikAman % 3600) / 60);
  const detik = detikAman % 60;

  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(jam)}:${p(menit)}:${p(detik)}`;
}
