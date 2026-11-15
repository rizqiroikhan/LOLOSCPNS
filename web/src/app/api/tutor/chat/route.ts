import { NextResponse } from "next/server";
import {
  periksaBatasLajuPermintaan,
  periksaKuotaTutorAI,
} from "@/lib/access-control";
import { panggilChatAI } from "@/lib/ai-client";
import { panggilLayananAI } from "@/lib/ai-service-proxy";
import {
  bacaPemakaianAIHariIni,
  tambahPemakaianAIHariIni,
} from "@/lib/commercial-store";
import { buatBimbinganSokratikKontekstual } from "@/lib/gap-analyzer";
import { bacaSesiPesertaDariHeaderCookie } from "@/lib/user-auth";
import type { QuestionRow } from "@/types/database";

const INSTRUKSI_SISTEM_SOKRATIK =
  "Anda adalah Tutor AI Pembimbing LOLOS CPNS khusus Seleksi Kompetensi Dasar (SKD) CPNS Indonesia sesuai Kepmenpan-RB Nomor 321 Tahun 2024. " +
  "Gunakan selalu Bahasa Indonesia baku yang hangat, suportif, dan pedagogis. " +
  "Gunakan pendekatan Sokratik: bimbing peserta memahami konsep, penalaran langkah demi langkah, serta regulasi resminya dengan jelas.";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "lokal";

    const profil = await bacaSesiPesertaDariHeaderCookie(
      request.headers.get("cookie")
    );
    const kunciPengguna = profil ? `user:${profil.id}` : `tamu:${ip}`;
    const tingkatLangganan = profil?.tingkat_langganan || "gratis";

    const hasilRateLimit = periksaBatasLajuPermintaan({
      identitasKlien: `tutor:${kunciPengguna}`,
      batasMaksimal: 20,
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
    const jumlahPemakaianHariIni = await bacaPemakaianAIHariIni(kunciPengguna);

    const evaluasiKuota = periksaKuotaTutorAI({
      tingkatLangganan,
      jumlahPemakaianHariIni,
    });

    if (!evaluasiKuota.diizinkan) {
      return NextResponse.json(
        {
          status: "kuota_habis",
          butuh_masuk: !profil,
          tingkat_langganan: tingkatLangganan,
          kuota_ai: {
            ...evaluasiKuota,
            terpakai_hari_ini: jumlahPemakaianHariIni,
          },
          pesan: evaluasiKuota.pesanKuota,
          balasan_tutor: evaluasiKuota.pesanKuota,
        },
        { status: 403 }
      );
    }

    const pertanyaan = String(
      badan.pertanyaan || "Bantu saya memahami langkah penyelesaian soal ini."
    );
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

    const pemakaianSetelah = await tambahPemakaianAIHariIni(kunciPengguna);
    const infoKuotaTerbaru = periksaKuotaTutorAI({
      tingkatLangganan,
      jumlahPemakaianHariIni: pemakaianSetelah,
    });

    // 1. Coba teruskan ke layanan mikro FastAPI privat (/tutor/socratic) bila aktif
    try {
      const resFastApi = await panggilLayananAI("/tutor/socratic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pertanyaan,
          soal,
          jawaban_peserta: jawabanPeserta,
          riwayat_chat: Array.isArray(badan.riwayat_chat)
            ? badan.riwayat_chat.slice(-8)
            : [],
        }),
        timeoutMs: 15000,
      });

      if (resFastApi.ok) {
        const dataFastApi = await resFastApi.json();
        return NextResponse.json({
          ...dataFastApi,
          tingkat_langganan: tingkatLangganan,
          kuota_ai: {
            ...infoKuotaTerbaru,
            terpakai_hari_ini: pemakaianSetelah,
          },
        });
      }
    } catch {
      // Lanjut ke pemanggilan langsung melalui Adaptor AI Next.js atau panduan lokal
    }

    // 2. Pemanggilan langsung atau panduan kontekstual Sokratik
    try {
      const kunciTertinggi =
        soal.options?.reduce((a, b) => (b.skor > a.skor ? b : a), soal.options[0])
          ?.kunci || "-";
      const ringkasOpsi = (soal.options || [])
        .map((o) => `${o.kunci}. ${o.teks} (skor: ${o.skor})`)
        .join("\n");

      const pesanKonteks =
        `Sub-Tes: ${soal.category} | Topik: ${soal.sub_topic}\n` +
        `Soal: ${soal.question_text}\nPilihan:\n${ringkasOpsi}\n` +
        `Kunci Skor Tertinggi: ${kunciTertinggi}\n` +
        `Pembahasan Resmi: ${soal.explanation}\n` +
        `Jawaban Peserta: ${jawabanPeserta || "Kosong"}\n\n` +
        `Pertanyaan Peserta: ${pertanyaan}`;

      const balasan = await panggilChatAI({
        pesanPengguna: pesanKonteks,
        instruksiSistem: INSTRUKSI_SISTEM_SOKRATIK,
        suhu: 0.4,
      });

      return NextResponse.json({
        status: "berhasil",
        tingkat_langganan: tingkatLangganan,
        kuota_ai: {
          ...infoKuotaTerbaru,
          terpakai_hari_ini: pemakaianSetelah,
        },
        balasan_tutor: balasan,
      });
    } catch {
      const balasanCadangan = buatBimbinganSokratikKontekstual({
        soal,
        jawabanPeserta,
        pertanyaanPeserta: pertanyaan,
      });

      return NextResponse.json({
        status: "berhasil",
        tingkat_langganan: tingkatLangganan,
        kuota_ai: {
          ...infoKuotaTerbaru,
          terpakai_hari_ini: pemakaianSetelah,
        },
        balasan_tutor: balasanCadangan,
      });
    }
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal menghubungi Tutor AI Pembimbing: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}
