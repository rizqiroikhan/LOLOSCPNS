import { NextResponse } from "next/server";
import {
  DAFTAR_PAKET_LANGGANAN,
  type MetodePembayaranResmi,
} from "@/lib/access-control";

export async function POST(request: Request) {
  try {
    const badan = await request.json();
    const idPaket: string = badan.id_paket || "paket-intensif-skd";
    const metodePembayaran: MetodePembayaranResmi =
      badan.metode_pembayaran || "qris";
    const namaPeserta: string = badan.nama_peserta || "Peserta LOLOS CPNS";
    const emailPeserta: string = badan.email_peserta || "peserta@loloscpns.id";

    const paket =
      DAFTAR_PAKET_LANGGANAN[idPaket] ||
      DAFTAR_PAKET_LANGGANAN["paket-intensif-skd"];

    const nomorPesanan = `LC-${Date.now()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    return NextResponse.json({
      status: "berhasil",
      pesan: `Tagihan pembayaran untuk "${paket.judul}" berhasil dibuat. Silakan selesaikan pembayaran melalui ${metodePembayaran.toUpperCase()}.`,
      pesanan: {
        order_id: nomorPesanan,
        id_paket: paket.id_paket,
        kode_tingkat: paket.kode_tingkat,
        judul_paket: paket.judul,
        nominal_idr: paket.harga_idr,
        metode_pembayaran: metodePembayaran,
        nama_peserta: namaPeserta,
        email_peserta: emailPeserta,
        status_transaksi: "menunggu_pembayaran",
        kode_qris_simulasi: `00020101021226660014ID.CO.LOLOSCPNS.WWW011893600914${nomorPesanan}5204581253033605405${paket.harga_idr}5802ID5910LOLOS CPNS6007JAKARTA6304ABCD`,
        nomor_akun_virtual: `88010${Math.floor(
          1000000000 + Math.random() * 9000000000
        )}`,
        dibuat_pada: new Date().toISOString(),
      },
    });
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal membuat tagihan pembayaran: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}
