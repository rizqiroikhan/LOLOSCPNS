import Link from "next/link";

export default function HalamanKebijakanPrivasi() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-slate-800">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline sm:text-sm"
      >
        ← Kembali ke Beranda
      </Link>

      <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
          Kepatuhan UU No. 27 Tahun 2022 • Pelindungan Data Pribadi
        </span>
        <h1 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Kebijakan Privasi &amp; Pelindungan Data Peserta
        </h1>
        <p className="mt-2 text-xs text-slate-500">
          Berlaku efektif untuk seluruh layanan web simulasi, pembayaran, dan dasbor
          peserta LOLOS CPNS.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
          <section>
            <h2 className="text-base font-bold text-slate-900">
              1. Data yang Kami Kumpulkan
            </h2>
            <p className="mt-2">
              Kami mengumpulkan informasi terbatas yang dibutuhkan untuk menyelenggarakan
              layanan pembelajaran secara aman: nama lengkap, alamat pos-el (email),
              kata sandi terenkripsi satu arah (scrypt hash), riwayat hasil tryout,
              kuota interaksi bimbingan harian, dan referensi pesanan transaksi resmi.
              Kami tidak pernah menyimpan kata sandi dalam teks terbuka maupun nomor
              kartu pembayaran di peladen aplikasi kami.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">
              2. Tujuan Pemrosesan Data
            </h2>
            <p className="mt-2">
              Data pribadi Anda digunakan semata-mata untuk mengautentikasi sesi masuk
              melalui cookie HttpOnly terenkripsi, mengaktifkan paket berbayar pasca
              verifikasi pembayaran, mencatat riwayat perkembangan skor CAT SKD pada
              dasbor Anda, serta mencegah penyalahgunaan batas pemakaian sistem.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">
              3. Keamanan &amp; Pembatasan Pembagian Pihak Ketiga
            </h2>
            <p className="mt-2">
              LOLOS CPNS menerapkan kebijakan pengamanan akses basis data berbasis baris
              (Row Level Security) serta enkripsi komunikasi HTTPS. Data Anda hanya
              dibagikan sebatas yang diperlukan ke mitra pemroses pembayaran resmi
              untuk menyelesaikan transaksi pilihan Anda, dan tidak pernah dijual atau
              diserahkan kepada pihak ketiga pengiklan mana pun.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">
              4. Hak Subjek Data Pribadi
            </h2>
            <p className="mt-2">
              Sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi,
              Anda berhak meninjau riwayat data belajar di halaman Dasbor Peserta,
              meminta pembaruan data profil yang tidak akurat, atau mengajukan permohonan
              penghapusan akun beserta riwayat aktivitas melalui saluran layanan pengguna
              resmi platform.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
