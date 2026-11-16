import { NextResponse } from "next/server";
import {
  DAFTAR_PAKET_LANGGANAN,
  type MetodePembayaranResmi,
} from "@/lib/access-control";
import { buatDanSimpanPesananPembayaran } from "@/lib/commercial-store";
import { bacaSesiPesertaDariHeaderCookie } from "@/lib/user-auth";

const METODE_RESMI = new Set<MetodePembayaranResmi>([
  "qris",
  "va_bca",
  "va_mandiri",
  "va_bni",
  "va_bri",
]);

export async function POST(request: Request) {
  try {
    const profil = await bacaSesiPesertaDariHeaderCookie(
      request.headers.get("cookie")
    );
    if (!profil) {
      return NextResponse.json(
        {
          status: "butuh_masuk",
          pesan:
            "Silakan masuk atau daftarkan akun peserta terlebih dahulu sebelum membuat transaksi pembayaran.",
        },
        { status: 401 }
      );
    }

    const badan = await request.json();
    const idPaket = String(badan.id_paket || "");
    const metodeMentah = String(
      badan.metode_pembayaran || "qris"
    ) as MetodePembayaranResmi;
    const metodePembayaran: MetodePembayaranResmi = METODE_RESMI.has(
      metodeMentah
    )
      ? metodeMentah
      : "qris";

    const paket = DAFTAR_PAKET_LANGGANAN[idPaket];
    if (!paket || paket.gratis) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan: "Paket berbayar yang dipilih tidak valid atau tidak memerlukan pembayaran.",
        },
        { status: 400 }
      );
    }

    const { pesanan, modeSimulasiLokal } =
      await buatDanSimpanPesananPembayaran({
        userId: profil.id,
        namaPeserta: profil.nama_lengkap,
        emailPeserta: profil.email,
        paketId: paket.id_paket,
        judulPaket: paket.judul,
        kodeTingkat: paket.kode_tingkat,
        nominalIdr: paket.harga_idr,
        metodePembayaran,
      });

    return NextResponse.json(
      {
        status: "menunggu_pembayaran",
        pesan: modeSimulasiLokal
          ? "Pesanan simulasi lokal berhasil dibuat. Gunakan konfirmasi uji coba lokal di halaman ini."
          : "Tautan pembayaran Midtrans Snap berhasil diterbitkan.",
        mode_simulasi_lokal: modeSimulasiLokal,
        paket,
        pesanan: {
          order_id: pesanan.order_id,
          paket_id: pesanan.paket_id,
          judul_paket: paket.judul,
          nominal_idr: pesanan.nominal_idr,
          metode_pembayaran: pesanan.metode_pembayaran,
          status_transaksi: pesanan.status_transaksi,
          snap_token: pesanan.snap_token,
          snap_redirect_url: pesanan.snap_redirect_url,
          qris_string: pesanan.qris_string,
          va_number: pesanan.va_number,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan:
          err instanceof Error
            ? err.message
            : "Gagal membuat permintaan pembayaran.",
      },
      { status: 500 }
    );
  }
}
