import { NextResponse } from "next/server";
import { bacaKonfigurasiAI, panggilChatAI } from "@/lib/ai-client";
import {
  periksaBatasLajuPermintaan,
  periksaKuotaTutorAI,
  type TingkatLanggananPeserta,
} from "@/lib/access-control";
import { buatBimbinganSokratikKontekstual } from "@/lib/gap-analyzer";
import type { QuestionRow } from "@/types/database";

const INSTRUKSI_SISTEM_SOKRATIK =
  "Anda adalah Tutor AI Sokratik pada platform LOLOS CPNS. " +
  "Bimbing peserta memahami soal SKD CPNS secara bertahap menggunakan Bahasa Indonesia yang baku, " +
  "sopan, dan edukatif mengacu pada Kepmenpan-RB Nomor 321 Tahun 2024. " +
  "Jangan hanya memberikan huruf kunci jawaban tanpa penalaran; ajak peserta menganalisis kata kunci soal, " +
  "konsep dasar/aturan resmi, serta alasan mengapa opsi terbaik bernilai paling tinggi.";

export async function POST(request: Request) {
  try {
    const ipKlien =
      request.headers.get("x-forwarded-for") || "klien-tutor-lokal";
    const hasilRateLimit = periksaBatasLajuPermintaan({
      identitasKlien: `tutor:${ipKlien}`,
      batasMaksimal: 15,
      jendelaWaktuDetik: 60,
    });

    if (!hasilRateLimit.diizinkan) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan: hasilRateLimit.pesanPeringatan,
          balasan_tutor: hasilRateLimit.pesanPeringatan,
        },
        { status: 429 }
      );
    }

    const badan = await request.json();
    const tingkatLangganan: TingkatLanggananPeserta =
      badan.tingkat_langganan || "gratis";
    const jumlahPemakaianHariIni = Number(
      badan.jumlah_pemakaian_hari_ini || 0
    );

    const evaluasiKuota = periksaKuotaTutorAI({
      tingkatLangganan,
      jumlahPemakaianHariIni,
    });

    if (!evaluasiKuota.diizinkan) {
      return NextResponse.json(
        {
          status: "kuota_habis",
          pesan: evaluasiKuota.pesanKuota,
          balasan_tutor: evaluasiKuota.pesanKuota,
        },
        { status: 403 }
      );
    }

    const pertanyaan: string =
      badan.pertanyaan || "Bantu saya memahami langkah penyelesaian soal ini.";
    const soal: QuestionRow = badan.soal;
    const jawabanPeserta: string | undefined = badan.jawaban_peserta;

    if (!soal || !soal.question_text) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan: "Konteks butir soal tidak lengkap untuk diskusi Tutor AI.",
        },
        { status: 400 }
      );
    }

    const aiServiceUrl =
      process.env.NEXT_PUBLIC_AI_SERVICE_URL || "http://localhost:8000";

    // 1. Coba teruskan ke layanan mikro FastAPI (/tutor/socratic) apabila sedang berjalan
    try {
      const resFastApi = await fetch(`${aiServiceUrl}/tutor/socratic`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pertanyaan,
          konteks_soal: {
            ...soal,
            jawaban_peserta: jawabanPeserta,
          },
          riwayat_chat: badan.riwayat_chat || [],
        }),
      });

      if (resFastApi.ok) {
        const dataFastApi = await resFastApi.json();
        return NextResponse.json(dataFastApi);
      }
    } catch {
      // Lanjut ke pemanggilan langsung melalui Adaptor AI Terpadu Next.js
    }

    // 2. Panggil langsung `AI_CHAT_MODEL` di `.env` dengan konteks RAG soal
    const konf = bacaKonfigurasiAI();
    try {
      const pesanRAG =
        `[KONTEKS RAG SOAL SKD KEPMENPAN-RB 321/2024]\n` +
        `Kategori: ${soal.category} | Sub-Topik: ${soal.sub_topic}\n` +
        `Referensi: ${soal.source_reference || "Kepmenpan-RB Nomor 321 Tahun 2024"}\n` +
        `Pokok Soal: ${soal.question_text}\n` +
        `Pilihan Jawaban: ${JSON.stringify(soal.options)}\n` +
        `Jawaban Peserta: ${jawabanPeserta || "Belum dijawab"}\n` +
        `Pembahasan Resmi: ${soal.explanation}\n\n` +
        `Pertanyaan Peserta: ${pertanyaan}`;

      const balasan = await panggilChatAI({
        pesanPengguna: pesanRAG,
        instruksiSistem: INSTRUKSI_SISTEM_SOKRATIK,
        suhu: 0.4,
      });

      return NextResponse.json({
        status: "berhasil",
        penyedia_ai: konf.provider,
        model_ai: konf.chatModel,
        metode_rag: "konteks_regulasi_dan_bank_soal",
        balasan_tutor: balasan,
      });
    } catch {
      // 3. Cadangan bimbingan Sokratik kontekstual lokal jika API Key gratis belum diisi di .env
      const balasanCadangan = buatBimbinganSokratikKontekstual({
        soal,
        jawabanPeserta,
        pertanyaanPeserta: pertanyaan,
      });

      return NextResponse.json({
        status: "berhasil",
        penyedia_ai: konf.provider,
        model_ai: `${konf.chatModel} (Mode Panduan Kontekstual)`,
        metode_rag: "tsvector_bahasa_indonesia",
        balasan_tutor: balasanCadangan,
      });
    }
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal menghubungi Tutor AI Sokratik: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}
