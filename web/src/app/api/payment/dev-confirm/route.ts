import { NextResponse } from "next/server";
import {
  ambilPesananBerdasarkanOrderId,
  selesaikanStatusPesananDariWebhook,
} from "@/lib/commercial-store";
import {
  apakahMidtransTerkonfigurasiNyata,
  buatSignatureMidtrans,
  dapatkanMidtransServerKey,
  verifikasiWebhookPembayaran,
} from "@/lib/payment-security";
import { bacaSesiPesertaDariHeaderCookie } from "@/lib/user-auth";

/**
 * Endpoint konfirmasi uji coba lokal KHUSUS pengembangan (localhost).
 * Otomatis mengembalikan 404 pada lingkungan produksi atau saat Midtrans nyata aktif.
 */
export async function POST(request: Request) {
  if (
    process.env.NODE_ENV === "production" ||
    apakahMidtransTerkonfigurasiNyata()
  ) {
    return NextResponse.json(
      {
        status: "tidak_tersedia",
        pesan: "Konfirmasi uji coba lokal tidak tersedia pada lingkungan produksi.",
      },
      { status: 404 }
    );
  }

  try {
    const profil = await bacaSesiPesertaDariHeaderCookie(
      request.headers.get("cookie")
    );
    if (!profil) {
      return NextResponse.json(
        { status: "gagal", pesan: "Sesi peserta tidak ditemukan." },
        { status: 401 }
      );
    }

    const badan = await request.json();
    const orderId = String(badan.order_id || "").trim();
    if (!orderId) {
      return NextResponse.json(
        { status: "gagal", pesan: "Nomor pesanan wajib diisi." },
        { status: 400 }
      );
    }

    const pesanan = await ambilPesananBerdasarkanOrderId(orderId);
    if (!pesanan) {
      return NextResponse.json(
        { status: "gagal", pesan: "Pesanan tidak ditemukan." },
        { status: 404 }
      );
    }

    if (pesanan.user_id !== profil.id) {
      return NextResponse.json(
        { status: "gagal", pesan: "Anda tidak berhak mengonfirmasi pesanan milik akun lain." },
        { status: 403 }
      );
    }

    const serverKey = dapatkanMidtransServerKey()!;
    const grossAmount = `${pesanan.nominal_idr}.00`;
    const signatureKey = buatSignatureMidtrans({
      orderId: pesanan.order_id,
      statusCode: "200",
      grossAmount,
      serverKey,
    });

    const verifikasi = verifikasiWebhookPembayaran({
      order_id: pesanan.order_id,
      status_code: "200",
      gross_amount: grossAmount,
      signature_key: signatureKey,
      transaction_status: "settlement",
      paket_id: pesanan.paket_id,
      nominalHarapanIdr: pesanan.nominal_idr,
    });

    if (!verifikasi.sah) {
      return NextResponse.json(
        { status: "gagal", pesan: verifikasi.pesanNotifikasi },
        { status: 400 }
      );
    }

    await selesaikanStatusPesananDariWebhook({
      orderId: pesanan.order_id,
      statusBaru: "lunas",
      rawWebhookPayload: { simulated_dev_confirm: true, verified_sha512: true },
    });

    const profilTerbaru = await bacaSesiPesertaDariHeaderCookie(
      request.headers.get("cookie")
    );

    return NextResponse.json({
      status: "lunas",
      pesan: verifikasi.pesanNotifikasi,
      tingkat_langganan_aktif:
        verifikasi.tingkatAktifBaru || profilTerbaru?.tingkat_langganan || "gratis",
      profil: profilTerbaru,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan:
          err instanceof Error
            ? err.message
            : "Gagal menyelesaikan simulasi konfirmasi lokal.",
      },
      { status: 500 }
    );
  }
}
