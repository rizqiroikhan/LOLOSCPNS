import { NextResponse } from "next/server";
import { periksaBatasLajuPermintaan } from "@/lib/access-control";
import { panggilChatAI } from "@/lib/ai-client";
import { panggilLayananAI } from "@/lib/ai-service-proxy";
import { bangkitkanSoalLatihanAdaptif } from "@/lib/gap-analyzer";
import {
  normalisasiButirSoalEkstraksi,
  uraiJsonAI,
} from "@/lib/ingestion-pipeline";
import { bacaSesiPesertaDariHeaderCookie } from "@/lib/user-auth";
import type { KategoriSubtesSKD, QuestionRow } from "@/types/database";

export async function POST(request: Request) {
  try {
    const profil = await bacaSesiPesertaDariHeaderCookie(
      request.headers.get("cookie")
    );

    if (
      !profil ||
      (profil.tingkat_langganan !== "intensif_skd" &&
        profil.tingkat_langganan !== "terpadu_cpns")
    ) {
      return NextResponse.json(
        {
          status: "terkunci",
          butuh_masuk: !profil,
          tingkat_langganan: profil?.tingkat_langganan || "gratis",
          pesan: !profil
            ? "Silakan masuk akun peserta terlebih dahulu untuk mengakses Latihan Perbaikan Adaptif."
            : "Fitur Latihan Perbaikan Adaptif khusus untuk pemilik Paket Intensif SKD atau Paket Terpadu CPNS.",
          url_upgrade: "/pembayaran?paket=paket-intensif-skd",
        },
        { status: 403 }
      );
    }

    const hasilRateLimit = periksaBatasLajuPermintaan({
      identitasKlien: `drill:${profil.id}`,
      batasMaksimal: 10,
      jendelaWaktuDetik: 60,
    });
    if (!hasilRateLimit.diizinkan) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan: hasilRateLimit.pesanPeringatan,
        },
        { status: 429 }
      );
    }

    const badan = await request.json();
    const kategori = (
      String(badan.kategori || "TIU").toUpperCase() as KategoriSubtesSKD
    );
    const subTopik = String(
      badan.sub_topik || "Kemampuan Numerik (Deret Angka)"
    );
    const jumlahSoal = Math.max(
      5,
      Math.min(10, Number(badan.jumlah_soal || 5))
    );

    // 1. Coba teruskan ke layanan mikro FastAPI privat (/drill/adaptive) apabila aktif
    try {
      const resFastApi = await panggilLayananAI("/drill/adaptive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kategori,
          sub_topik: subTopik,
          jumlah_soal: jumlahSoal,
        }),
        timeoutMs: 15000,
      });

      if (resFastApi.ok) {
        const dataFastApi = await resFastApi.json();
        return NextResponse.json(dataFastApi);
      }
    } catch {
      // Lanjut ke generasi lokal/AI terpadu
    }

    // 2. Generasi adaptif via Adaptor AI Next.js atau bank variasi deterministik
    let daftarSoalAdaptif: QuestionRow[] = [];

    try {
      const responsJson = await panggilChatAI({
        pesanPengguna:
          `Buatlah ${jumlahSoal} butir soal latihan SKD variasi baru dalam Bahasa Indonesia baku untuk ` +
          `Sub-Tes ${kategori} dengan sub-topik resmi "${subTopik}" (Kepmenpan-RB Nomor 321 Tahun 2024). ` +
          `Setiap soal wajib berbentuk objek JSON dengan kunci: category, sub_topic, difficulty ("mudah"|"sedang"|"sulit"), question_text, options ([{kunci:"A".."E", teks, skor}]), explanation, source_reference. ` +
          `Untuk TWK/TIU skor benar=5 dan salah=0; untuk TKP gunakan skala berjenjang 1 sampai 5. Keluarkan dalam format JSON array.`,
        instruksiSistem:
          "Anda adalah penulis soal BKN profesional. Jawab HANYA dengan array JSON yang valid.",
        formatJson: true,
        suhu: 0.4,
      });

      const urai = uraiJsonAI<{ daftar_soal?: Record<string, unknown>[] } | Record<string, unknown>[]>(
        responsJson
      );
      const daftarMentah = Array.isArray(urai)
        ? urai
        : Array.isArray(urai.daftar_soal)
          ? urai.daftar_soal
          : [];

      if (daftarMentah.length > 0) {
        daftarSoalAdaptif = daftarMentah.slice(0, jumlahSoal).map((item, idx) => {
          const norm = normalisasiButirSoalEkstraksi(item, idx);
          return {
            id:
              norm.id_sementara ||
              `drill-${kategori.toLowerCase()}-${Date.now()}-${idx}`,
            stage: "SKD",
            category: norm.category,
            sub_topic: norm.sub_topic || subTopik,
            difficulty: norm.difficulty,
            question_text: norm.question_text,
            image_url: null,
            options: norm.options,
            explanation: norm.explanation,
            source_reference: norm.source_reference,
            is_paraphrased: true,
            status: "disetujui",
            embedding: null,
            created_at: new Date().toISOString(),
          };
        });
      }
    } catch {
      // Gunakan fallback bank latihan adaptif terkurasi
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
