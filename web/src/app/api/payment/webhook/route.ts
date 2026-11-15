import { NextResponse } from "next/server";
import { verifikasiWebhookPembayaran } from "@/lib/payment-security";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const hasilVerifikasi = verifikasiWebhookPembayaran({
      order_id: String(payload.order_id || "LC-SANDBOX"),
      status_code: payload.status_code ? String(payload.status_code) : undefined,
      gross_amount: payload.gross_amount
        ? String(payload.gross_amount)
        : undefined,
      signature_key: payload.signature_key
        ? String(payload.signature_key)
        : undefined,
      transaction_status: String(payload.transaction_status || "settlement"),
      paket_id: payload.paket_id ? String(payload.paket_id) : "paket-intensif-skd",
    });

    if (!hasilVerifikasi.sah) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan: hasilVerifikasi.pesanNotifikasi,
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      status: "berhasil",
      pesan: hasilVerifikasi.pesanNotifikasi,
      status_transaksi: hasilVerifikasi.statusTransaksi,
      tingkat_langganan_aktif: hasilVerifikasi.tingkatAktifBaru,
    });
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal memproses webhook pembayaran: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}
