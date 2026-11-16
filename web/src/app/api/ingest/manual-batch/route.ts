import { NextResponse } from "next/server";
import { periksaBatasLajuPermintaan } from "@/lib/access-control";
import {
  bacaDaftarAkunAdminPublik,
  ekstrakSesiDariHeaderCookie,
} from "@/lib/admin-auth";
import { buatEmbeddingTeks, panggilChatAI } from "@/lib/ai-client";
import {
  type DrafKurasiSoal,
  normalisasiButirSoalEkstraksi,
  uraiImporMassalCsvAtauJson,
  uraiJsonAI,
} from "@/lib/ingestion-pipeline";

const INSTRUKSI_EKSTRAKSI_TEKS_AI =
  "Anda adalah editor bank soal CPNS BKN profesional. Konversikan seluruh naskah soal mentah yang ditempel pengguna menjadi array JSON dengan kunci 'daftar_soal'. " +
  "Setiap elemen wajib memiliki: category ('TWK'|'TIU'|'TKP'), sub_topic resmi Kepmenpan-RB 321/2024, difficulty ('mudah'|'sedang'|'sulit'), " +
  "teks_soal_asli (kutipan ringkas sumber bila ada), question_text (soal rapi berbahasa Indonesia baku & terparafrase orisinal), " +
  "options ([{kunci:'A'..'E', teks, skor}] dengan skor TWK/TIU benar=5 salah=0 dan TKP skala 1..5 lengkap), explanation, serta source_reference. " +
  "Keluarkan HANYA objek JSON valid tanpa narasi luar.";

export async function POST(request: Request) {
  const sesi = ekstrakSesiDariHeaderCookie(request.headers.get("cookie"));
  if (!sesi) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: "Silakan masuk ke Menu Admin terlebih dahulu untuk menyusun soal.",
      },
      { status: 401 }
    );
  }

  const daftarAdmin = await bacaDaftarAkunAdminPublik();
  if (!daftarAdmin.some((akun) => akun.id === sesi.id)) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: "Akun admin Anda tidak lagi aktif. Silakan masuk kembali.",
      },
      { status: 401 }
    );
  }

  const laju = periksaBatasLajuPermintaan({
    identitasKlien: `kurasi-manual:${sesi.id}`,
    batasMaksimal: 30,
    jendelaWaktuDetik: 60,
  });
  if (!laju.diizinkan) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan:
          laju.pesanPeringatan ||
          "Terlalu banyak permintaan kurasi soal. Mohon tunggu sebentar.",
      },
      { status: 429 }
    );
  }

  try {
    const badan = (await request.json()) as {
      mode?: string;
      teks_mentah?: string;
    };
    const mode = badan.mode === "teks_ai" ? "teks_ai" : "csv_json";
    const teksMentah = String(badan.teks_mentah || "").trim();

    if (!teksMentah) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan: "Naskah teks, CSV, atau JSON soal tidak boleh kosong.",
        },
        { status: 400 }
      );
    }

    if (teksMentah.length > 50_000) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan:
            "Ukuran teks melebihi batas 50.000 karakter sekali impor. Bagi menjadi beberapa tahap agar stabil.",
        },
        { status: 413 }
      );
    }

    if (mode === "csv_json") {
      const daftarSoal = uraiImporMassalCsvAtauJson(teksMentah);
      return NextResponse.json({
        status: "berhasil",
        pesan: `Berhasil mengurai ${daftarSoal.length} butir soal ke Meja Tinjauan. Periksa kembali sebelum menekan Setujui.`,
        daftar_soal: daftarSoal,
      });
    }

    // Mode "teks_ai": langsung gunakan AI_CHAT_MODEL dari Next.js tanpa memerlukan ai-service Python
    const keluaranAi = await panggilChatAI({
      pesanPengguna: `Ubah naskah soal mentah berikut menjadi draf JSON bank soal SKD CPNS terstruktur:\n\n${teksMentah}`,
      instruksiSistem: INSTRUKSI_EKSTRAKSI_TEKS_AI,
      formatJson: true,
      suhu: 0.3,
    });

    const hasilJson = uraiJsonAI<
      { daftar_soal?: Record<string, unknown>[] } | Record<string, unknown>[]
    >(keluaranAi);
    const daftarMentah = Array.isArray(hasilJson)
      ? hasilJson
      : Array.isArray(hasilJson.daftar_soal)
        ? hasilJson.daftar_soal
        : [];

    const daftarSoal: DrafKurasiSoal[] = [];
    for (let i = 0; i < daftarMentah.length; i++) {
      const norm = normalisasiButirSoalEkstraksi(daftarMentah[i], i);
      if (!norm.question_text) continue;
      const vektor = await buatEmbeddingTeks(
        `${norm.category} ${norm.sub_topic} ${norm.question_text}`
      );
      norm.metode_pencarian_rag = vektor
        ? "pgvector_768"
        : "tsvector_bahasa_indonesia";
      daftarSoal.push(norm);
    }

    if (daftarSoal.length === 0) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan:
            "AI tidak menemukan butir soal lengkap pada teks yang ditempel. Pastikan teks memuat pertanyaan dan pilihan jawaban.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      status: "berhasil",
      pesan: `Berhasil menyusun ${daftarSoal.length} butir soal dari teks mentah secara langsung. Silakan tinjau lalu Setujui untuk menyimpan ke bank soal.`,
      daftar_soal: daftarSoal,
    });
  } catch (galat) {
    const pesanAsli =
      galat instanceof Error ? galat.message : "Gagal memproses impor soal.";
    return NextResponse.json(
      {
        status: "gagal",
        pesan: pesanAsli.includes("AI_API_KEY")
          ? "Penyusunan otomatis dari teks membutuhkan API Key AI yang aktif. Anda tetap dapat langsung menggunakan tab Impor Massal (CSV/JSON) atau tombol + Tambah Soal Manual."
          : pesanAsli,
      },
      { status: 400 }
    );
  }
}
