import { NextResponse } from "next/server";
import {
  ambilPesananBerdasarkanOrderId,
  selesaikanStatusPesananDariWebhook,
} from "@/lib/commercial-store";
import { verifikasiWebhookPembayaran } from "@/lib/payment-security";

export async function POST(request: Request) {
  try {
    const badan = (await request.json()) as Record<string, unknown>;
    const orderId = String(badan.order_id || "").trim();

    if (!orderId) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan: "Parameter order_id wajib disertakan pada notifikasi webhook.",
        },
        { status: 400 }
      );
    }

    const pesanan = await ambilPesananBerdasarkanOrderId(orderId);
    if (!pesanan) {
      return NextResponse.json(
        {
          status: "tidak_ditemukan",
          pesan: `Pesanan ${orderId} tidak ditemukan dalam basis data transaksi.`,
        },
        { status: 404 }
      );
    }

    const hasil = verifikasiWebhookPembayaran({
      order_id: orderId,
      status_code: String(badan.status_code || ""),
      gross_amount: String(badan.gross_amount || ""),
      signature_key: String(badan.signature_key || ""),
      transaction_status: String(badan.transaction_status || ""),
      fraud_status: badan.fraud_status ? String(badan.fraud_status) : undefined,
      paket_id: pesanan.paket_id,
      nominalHarapanIdr: pesanan.nominal_idr,
    });

    if (!hasil.sah) {
      return NextResponse.json(
        {
          status: "ditolak",
          pesan: hasil.pesanNotifikasi,
        },
        { status: 401 }
      );
    }

    const pesananDiperbarui = await selesaikanStatusPesananDariWebhook({
      orderId: pesanan.order_id,
      statusBaru: hasil.statusTransaksi,
      rawWebhookPayload: badan,
    });

    return NextResponse.json({
      status: hasil.statusTransaksi,
      tingkat_langganan_aktif: hasil.tingkatAktifBaru,
      pesan: hasil.pesanNotifikasi,
      pesanan: pesananDiperbarui,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan:
          err instanceof Error
            ? err.message
            : "Gagal memproses webhook notifikasi pembayaran.",
      },
      { status: 500 }
    );
  }
}
