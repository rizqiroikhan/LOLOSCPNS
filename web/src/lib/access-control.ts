/**
 * Modul Kendali Akses Paket (Freemium Gate) & Pembatasan Laju Permintaan AI (Rate Limiting)
 * — LOLOS CPNS.
 *
 * Seluruh fungsi pada modul ini bersifat isomorfik (aman dijalankan di server maupun
 * komponen peramban `"use client"` tanpa ketergantungan modul bawaan Node.js).
 * Fungsi verifikasi kriptografi webhook pembayaran berada di `./payment-security.ts`.
 */

import type { TahapPaketSimulasi } from "../types/database.ts";

export type TingkatLanggananPeserta =
  | "gratis"
  | "intensif_skd"
  | "terpadu_cpns";

export type StatusTransaksiPembayaran =
  | "menunggu_pembayaran"
  | "lunas"
  | "kedaluwarsa"
  | "dibatalkan";

export type MetodePembayaranResmi =
  | "qris"
  | "va_bca"
  | "va_mandiri"
  | "va_bri"
  | "va_bni";

export interface PaketLanggananResmi {
  id_paket: string;
  kode_tingkat: TingkatLanggananPeserta;
  stage: TahapPaketSimulasi;
  judul: string;
  deskripsi: string;
  harga_idr: number;
  gratis: boolean;
  kuota_tutor_harian: number;
  fitur_utama: string[];
}

export const DAFTAR_PAKET_LANGGANAN: Record<string, PaketLanggananResmi> = {
  "paket-perdana-gratis": {
    id_paket: "paket-perdana-gratis",
    kode_tingkat: "gratis",
    stage: "SKD",
    judul: "Simulasi SKD Perdana (Gratis)",
    deskripsi:
      "1 paket simulasi lengkap CAT SKD 110 soal mengacu pada Kepmenpan-RB Nomor 321 Tahun 2024 beserta kuota harian diskusi Tutor AI.",
    harga_idr: 0,
    gratis: true,
    kuota_tutor_harian: 5,
    fitur_utama: [
      "1 Paket Simulasi CAT SKD Lengkap (110 Soal)",
      "Evaluasi Deterministik 7 Kategori Formasi",
      "Kuota 5 Tanya Jawab Tutor AI per Hari",
    ],
  },
  "paket-intensif-skd": {
    id_paket: "paket-intensif-skd",
    kode_tingkat: "intensif_skd",
    stage: "SKD",
    judul: "Pejuang NIP — Paket Intensif SKD",
    deskripsi:
      "Akses penuh seluruh paket Simulasi Akbar CAT SKD, Analisis Kesenjangan Nilai, Tutor AI Sokratik, dan Latihan Perbaikan Adaptif.",
    harga_idr: 49000,
    gratis: false,
    kuota_tutor_harian: 100,
    fitur_utama: [
      "Buka Seluruh Paket Simulasi Akbar CAT SKD (110 Soal)",
      "Analisis Kesenjangan Nilai per Sub-Topik Kisi-Kisi",
      "Kuota 100 Tanya Jawab Tutor AI per Hari",
      "Latihan Perbaikan Adaptif Tanpa Batas",
    ],
  },
  "paket-terpadu-cpns": {
    id_paket: "paket-terpadu-cpns",
    kode_tingkat: "terpadu_cpns",
    stage: "TERPADU",
    judul: "Paket Terpadu SKD + Persiapan SKB",
    deskripsi:
      "Akses menyeluruh seluruh modul SKD ditambah modul lanjutan Seleksi Kompetensi Bidang (SKB) dan prioritas kuota diskusi AI.",
    harga_idr: 89000,
    gratis: false,
    kuota_tutor_harian: 250,
    fitur_utama: [
      "Seluruh Fitur Paket Intensif SKD",
      "Akses Modul Lanjutan Seleksi Kompetensi Bidang (SKB)",
      "Kuota Prioritas 250 Tanya Jawab Tutor AI per Hari",
      "Simulasi Wawancara & Psikotes Jabatan",
    ],
  },
};

export interface HasilEvaluasiAksesPaket {
  diizinkan: boolean;
  tingkatSaatIni: TingkatLanggananPeserta;
  idPaketDiminta: string;
  judulPaket: string;
  hargaIdr: number;
  pesanAkses: string;
}

/**
 * Mengevaluasi secara deterministik apakah peserta memiliki hak akses terhadap suatu paket simulasi.
 */
export function evaluasiAksesPaketSimulasi(parameter: {
  idPaket: string;
  tingkatLangganan: TingkatLanggananPeserta;
}): HasilEvaluasiAksesPaket {
  const { idPaket, tingkatLangganan } = parameter;
  const infoPaket =
    DAFTAR_PAKET_LANGGANAN[idPaket] ||
    DAFTAR_PAKET_LANGGANAN["paket-perdana-gratis"];

  if (infoPaket.gratis) {
    return {
      diizinkan: true,
      tingkatSaatIni: tingkatLangganan,
      idPaketDiminta: idPaket,
      judulPaket: infoPaket.judul,
      hargaIdr: 0,
      pesanAkses:
        "Paket Simulasi SKD Perdana terbuka gratis untuk seluruh peserta.",
    };
  }

  if (tingkatLangganan === "terpadu_cpns") {
    return {
      diizinkan: true,
      tingkatSaatIni: tingkatLangganan,
      idPaketDiminta: idPaket,
      judulPaket: infoPaket.judul,
      hargaIdr: infoPaket.harga_idr,
      pesanAkses:
        "Akses penuh aktif melalui Paket Terpadu SKD + Persiapan SKB.",
    };
  }

  if (
    tingkatLangganan === "intensif_skd" &&
    infoPaket.kode_tingkat === "intensif_skd"
  ) {
    return {
      diizinkan: true,
      tingkatSaatIni: tingkatLangganan,
      idPaketDiminta: idPaket,
      judulPaket: infoPaket.judul,
      hargaIdr: infoPaket.harga_idr,
      pesanAkses: "Akses penuh aktif melalui Paket Intensif SKD.",
    };
  }

  return {
    diizinkan: false,
    tingkatSaatIni: tingkatLangganan,
    idPaketDiminta: idPaket,
    judulPaket: infoPaket.judul,
    hargaIdr: infoPaket.harga_idr,
    pesanAkses: `Paket "${infoPaket.judul}" memerlukan aktivasi langganan berbayar (Rp${infoPaket.harga_idr.toLocaleString(
      "id-ID"
    )}). Peserta akun gratis tetap dapat mengerjakan Paket Simulasi SKD Perdana secara penuh.`,
  };
}

/**
 * Mengevaluasi sisa kuota harian diskusi Tutor AI Sokratik berdasarkan tingkat langganan peserta.
 */
export function periksaKuotaTutorAI(parameter: {
  tingkatLangganan: TingkatLanggananPeserta;
  jumlahPemakaianHariIni: number;
}): {
  diizinkan: boolean;
  batasHarian: number;
  sisaKuota: number;
  pesanKuota: string;
} {
  const { tingkatLangganan, jumlahPemakaianHariIni } = parameter;

  const batasHarian =
    tingkatLangganan === "terpadu_cpns"
      ? 250
      : tingkatLangganan === "intensif_skd"
      ? 100
      : 5;

  const sisaKuota = Math.max(0, batasHarian - jumlahPemakaianHariIni);
  const diizinkan = jumlahPemakaianHariIni < batasHarian;

  const pesanKuota = diizinkan
    ? `Sisa kuota tanya jawab Tutor AI Anda hari ini: ${sisaKuota} dari ${batasHarian} pertanyaan.`
    : `Kuota harian diskusi Tutor AI untuk akun ${
        tingkatLangganan === "gratis" ? "Gratis (5 pertanyaan/hari)" : tingkatLangganan
      } telah habis. Silakan tingkatkan ke Paket Intensif SKD atau Paket Terpadu untuk membuka kuota diskusi penuh.`;

  return {
    diizinkan,
    batasHarian,
    sisaKuota,
    pesanKuota,
  };
}

// ==============================================================================
// PEMBATAS LAJU PERMINTAAN ENDPOINT AI (IN-MEMORY RATE LIMITER)
// ==============================================================================
const catatanPermintaan = new Map<
  string,
  { jumlah: number; waktuResetMs: number }
>();

export function periksaBatasLajuPermintaan(parameter: {
  identitasKlien: string;
  batasMaksimal?: number;
  jendelaWaktuDetik?: number;
}): {
  diizinkan: boolean;
  sisaPermintaan: number;
  detikMenujuReset: number;
  pesanPeringatan: string | null;
} {
  const {
    identitasKlien,
    batasMaksimal = 20,
    jendelaWaktuDetik = 60,
  } = parameter;

  const sekarang = Date.now();
  const dataLama = catatanPermintaan.get(identitasKlien);

  if (!dataLama || sekarang >= dataLama.waktuResetMs) {
    const waktuResetMs = sekarang + jendelaWaktuDetik * 1000;
    catatanPermintaan.set(identitasKlien, {
      jumlah: 1,
      waktuResetMs,
    });
    return {
      diizinkan: true,
      sisaPermintaan: batasMaksimal - 1,
      detikMenujuReset: jendelaWaktuDetik,
      pesanPeringatan: null,
    };
  }

  if (dataLama.jumlah >= batasMaksimal) {
    const detikMenujuReset = Math.max(
      1,
      Math.ceil((dataLama.waktuResetMs - sekarang) / 1000)
    );
    return {
      diizinkan: false,
      sisaPermintaan: 0,
      detikMenujuReset,
      pesanPeringatan: `Permintaan ke layanan AI terlalu cepat (melebihi batas ${batasMaksimal} permintaan per ${jendelaWaktuDetik} detik). Silakan tunggu ${detikMenujuReset} detik sebelum mencoba kembali.`,
    };
  }

  dataLama.jumlah += 1;
  catatanPermintaan.set(identitasKlien, dataLama);

  return {
    diizinkan: true,
    sisaPermintaan: batasMaksimal - dataLama.jumlah,
    detikMenujuReset: Math.max(
      1,
      Math.ceil((dataLama.waktuResetMs - sekarang) / 1000)
    ),
    pesanPeringatan: null,
  };
}
