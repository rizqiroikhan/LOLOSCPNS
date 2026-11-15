/**
 * Modul Keamanan & Verifikasi Webhook Pembayaran (Server-Only) — LOLOS CPNS.
 *
 * Menggunakan modul kriptografi bawaan Node.js (`node:crypto`) untuk menghitung
 * dan memverifikasi tanda tangan SHA-512 Midtrans / Mayar pada API Route server.
 * Tidak boleh diimpor langsung oleh komponen antarmuka (`"use client"`).
 */

import crypto from "node:crypto";
import {
  DAFTAR_PAKET_LANGGANAN,
  type StatusTransaksiPembayaran,
  type TingkatLanggananPeserta,
} from "./access-control.ts";

export function buatSignatureMidtrans(parameter: {
  orderId: string;
  statusCode: string;
  grossAmount: string;
  serverKey: string;
}): string {
  const gabungan = `${parameter.orderId}${parameter.statusCode}${parameter.grossAmount}${parameter.serverKey}`;
  return crypto.createHash("sha512").update(gabungan).digest("hex");
}

export function verifikasiWebhookPembayaran(payload: {
  order_id: string;
  status_code?: string;
  gross_amount?: string;
  signature_key?: string;
  transaction_status: string;
  paket_id?: string;
  server_key_opsional?: string;
}): {
  sah: boolean;
  statusTransaksi: StatusTransaksiPembayaran;
  tingkatAktifBaru: TingkatLanggananPeserta | null;
  pesanNotifikasi: string;
} {
  const serverKey =
    payload.server_key_opsional ||
    process.env.MIDTRANS_SERVER_KEY ||
    "kunci_sandbox_lolos_cpns";

  if (payload.signature_key && payload.status_code && payload.gross_amount) {
    const harapanSignature = buatSignatureMidtrans({
      orderId: payload.order_id,
      statusCode: payload.status_code,
      grossAmount: payload.gross_amount,
      serverKey,
    });

    if (payload.signature_key !== harapanSignature) {
      return {
        sah: false,
        statusTransaksi: "dibatalkan",
        tingkatAktifBaru: null,
        pesanNotifikasi:
          "Tanda tangan keamanan (signature key) notifikasi pembayaran tidak sah.",
      };
    }
  }

  const statusMentah = (payload.transaction_status || "").toLowerCase().trim();
  const idPaket = payload.paket_id || "paket-intensif-skd";
  const paket =
    DAFTAR_PAKET_LANGGANAN[idPaket] ||
    DAFTAR_PAKET_LANGGANAN["paket-intensif-skd"];

  if (
    statusMentah === "settlement" ||
    statusMentah === "capture" ||
    statusMentah === "paid" ||
    statusMentah === "lunas"
  ) {
    return {
      sah: true,
      statusTransaksi: "lunas",
      tingkatAktifBaru: paket.kode_tingkat,
      pesanNotifikasi: `Pembayaran pesanan ${payload.order_id} telah LUNAS. Akses "${paket.judul}" kini telah aktif sepenuhnya.`,
    };
  }

  if (statusMentah === "pending" || statusMentah === "menunggu_pembayaran") {
    return {
      sah: true,
      statusTransaksi: "menunggu_pembayaran",
      tingkatAktifBaru: null,
      pesanNotifikasi: `Pesanan ${payload.order_id} sedang menunggu penyelesaian pembayaran melalui QRIS / Akun Virtual.`,
    };
  }

  if (statusMentah === "expire" || statusMentah === "kedaluwarsa") {
    return {
      sah: true,
      statusTransaksi: "kedaluwarsa",
      tingkatAktifBaru: null,
      pesanNotifikasi: `Batas waktu pembayaran untuk pesanan ${payload.order_id} telah berakhir.`,
    };
  }

  return {
    sah: true,
    statusTransaksi: "dibatalkan",
    tingkatAktifBaru: null,
    pesanNotifikasi: `Transaksi pesanan ${payload.order_id} dibatalkan.`,
  };
}
