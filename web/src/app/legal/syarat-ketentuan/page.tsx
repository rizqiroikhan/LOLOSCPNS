import Link from "next/link";

export default function HalamanSyaratKetentuan() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-slate-800">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline sm:text-sm"
      >
        ← Kembali ke Beranda
      </Link>

      <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
          Dokumen Legal Resmi • LOLOS CPNS
        </span>
        <h1 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Syarat dan Ketentuan Layanan Platform LOLOS CPNS
        </h1>
        <p className="mt-2 text-xs text-slate-500">
          Terakhir diperbarui: November 2026 • Mengacu pada regulasi CASN dan peraturan
          perundang-undangan Republik Indonesia.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
          <section>
            <h2 className="text-base font-bold text-slate-900">
              1. Ruang Lingkup Layanan Pendidikan
            </h2>
            <p className="mt-2">
              LOLOS CPNS menyediakan layanan simulasi Computer Assisted Test (CAT)
              Seleksi Kompetensi Dasar (SKD) mengacu pada Keputusan Menteri PANRB
              Nomor 321 Tahun 2024, modul pengayaan Seleksi Kompetensi Bidang (SKB),
              analisis kesenjangan nilai, latihan perbaikan adaptif, serta Tutor AI
              Pembimbing untuk persiapan seleksi CPNS di Indonesia. Platform ini
              merupakan sarana belajar independen dan bukan merupakan portal resmi
              pendaftaran BKN ataupun menjamin kelulusan seleksi secara otomatis.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">
              2. Akun Peserta &amp; Kewajiban Pengguna
            </h2>
            <p className="mt-2">
              Setiap peserta wajib mendaftarkan alamat pos-el (email) yang sah dan
              menjaga kerahasiaan kata sandi masing-masing. Satu akun berbayar hanya
              diperuntukkan bagi penggunaan personal satu peserta dan tidak
              diperkenankan untuk diperjualbelikan, dibagikan massal, atau diakses
              secara otomatis menggunakan skrip.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">
              3. Paket Langganan, Pembayaran, dan Aktivasi Akses
            </h2>
            <p className="mt-2">
              Akses paket berbayar (Paket Intensif SKD dan Paket Terpadu SKD + SKB)
              hanya diaktifkan secara otomatis oleh server setelah gateway pembayaran
              resmi mengonfirmasi status transaksi berhasil (settlement). Rincian
              harga yang berlaku merupakan tarif final dalam mata uang Rupiah (IDR)
              sebagaimana tertera pada halaman pembayaran sebelum transaksi dibuat.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">
              4. Kebijakan Pembatalan &amp; Pengembalian Dana (Refund)
            </h2>
            <p className="mt-2">
              Mengingat sifat layanan digital memberikan akses penuh secara instan ke
              bank soal dan fitur pembelajaran setelah transaksi lunas, pengajuan
              pengembalian dana hanya dapat diproses apabila terjadi pembayaran ganda
              (double charge) akibat kesalahan teknis gerbang pembayaran atau kegagalan
              aktivasi sistem selama lebih dari 2×24 jam kerja setelah pembayaran sah
              terkonfirmasi. Permintaan pengembalian dana diproses ke metode pembayaran
              asal maksimal 7–14 hari kerja setelah verifikasi bukti transaksi.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">
              5. Hak Kekayaan Intelektual
            </h2>
            <p className="mt-2">
              Seluruh naskah soal kurasi orisinal, pembahasan, modul SKB, tata letak
              antarmuka, serta bahan ajar di platform LOLOS CPNS dilindungi hukum
              hak cipta Indonesia. Pengguna dilarang menggandakan, mendistribusikan
              ulang secara komersial, atau mempublikasikan konten berbayar tanpa izin
              tertulis pengelola.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
