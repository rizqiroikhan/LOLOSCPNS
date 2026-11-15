import { NextResponse } from "next/server";
import { panggilChatAI } from "@/lib/ai-client";
import { bangkitkanSoalLatihanAdaptif } from "@/lib/gap-analyzer";
import {
  normalisasiButirSoalEkstraksi,
  uraiJsonAI,
} from "@/lib/ingestion-pipeline";
import type { KategoriSubtesSKD, QuestionRow } from "@/types/database";

export async function POST(request: Request) {
  try {
    const badan = await request.json();
    const kategori = (
      String(badan.kategori || "TIU").toUpperCase() as KategoriSubtesSKD
    );
    const subTopik = String(
      badan.sub_topik || "Kemampuan Numerik - Deret Angka"
    );
    const jumlahSoal = Math.max(
      5,
      Math.min(10, Number(badan.jumlah_soal || 5))
    );

    const aiServiceUrl =
      process.env.NEXT_PUBLIC_AI_SERVICE_URL || "http://localhost:8000";

    // 1. Coba teruskan ke layanan mikro FastAPI (/drill/adaptive) apabila aktif
    try {
      const resFastApi = await fetch(`${aiServiceUrl}/drill/adaptive`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kategori,
          sub_topik: subTopik,
          jumlah_soal: jumlahSoal,
        }),
      });

      if (resFastApi.ok) {
        const dataFastApi = await resFastApi.json();
        return NextResponse.json(dataFastApi);
      }
    } catch {
      // Lanjut ke generasi via Adaptor AI Terpadu Next.js
    }

    // 2. Buat soal variasi baru melalui `AI_CHAT_MODEL` di `.env`
    let daftarSoalAdaptif: QuestionRow[] = [];

    try {
      const responsJson = await panggilChatAI({
        pesanPengguna:
          `Buatlah ${jumlahSoal} butir soal latihan SKD variasi baru dalam Bahasa Indonesia baku untuk ` +
          `Sub-Tes ${kategori} dengan sub-topik resmi "${subTopik}" (Kepmenpan-RB Nomor 321 Tahun 2024). ` +
          `Kembalikan JSON dengan kunci "daftar_soal".`,
        formatJson: true,
        suhu: 0.5,
      });

      const hasil = uraiJsonAI<{ daftar_soal?: Record<string, unknown>[] }>(
        responsJson
      );
      if (Array.isArray(hasil.daftar_soal) && hasil.daftar_soal.length >= 5) {
        daftarSoalAdaptif = hasil.daftar_soal
          .slice(0, jumlahSoal)
          .map((butir, idx) => {
            const normal = normalisasiButirSoalEkstraksi(
              { ...butir, category: kategori, sub_topic: subTopik },
              idx
            );
            return {
              id: `adaptif-ai-${idx + 1}`,
              stage: "SKD",
              category: normal.category,
              sub_topic: normal.sub_topic,
              difficulty: normal.difficulty,
              question_text: normal.question_text,
              image_url: null,
              options: normal.options,
              explanation: normal.explanation,
              source_reference: normal.source_reference,
              is_paraphrased: true,
              status: "disetujui",
              embedding: null,
              created_at: new Date().toISOString(),
            };
          });
      }
    } catch {
      // Beralih otomatis ke generator soal variasi adaptif deterministik
    }

    if (daftarSoalAdaptif.length === 0) {
      daftarSoalAdaptif = bangkitkanSoalLatihanAdaptif({
        kategori,
        subTopik,
        jumlahSoal,
      });
    }

    return NextResponse.json({
      status: "berhasil",
      pesan: `Berhasil menyiapkan ${daftarSoalAdaptif.length} soal Latihan Perbaikan Adaptif pada sub-topik "${subTopik}".`,
      jumlah_soal: daftarSoalAdaptif.length,
      daftar_soal: daftarSoalAdaptif,
    });
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal menyiapkan latihan perbaikan adaptif: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}
