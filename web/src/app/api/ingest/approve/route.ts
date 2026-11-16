import { NextResponse } from "next/server";
import {
  bacaDaftarAkunAdminPublik,
  ekstrakSesiDariHeaderCookie,
} from "@/lib/admin-auth";
import { buatEmbeddingTeks } from "@/lib/ai-client";
import { normalisasiButirSoalEkstraksi } from "@/lib/ingestion-pipeline";
import { buatKlienSupabaseServer } from "@/lib/supabase";

export async function POST(request: Request) {
  const sesiAdmin = ekstrakSesiDariHeaderCookie(request.headers.get("cookie"));
  if (!sesiAdmin) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: "Silakan masuk ke Menu Admin terlebih dahulu untuk menyetujui soal.",
      },
      { status: 401 }
    );
  }

  const daftarAdmin = await bacaDaftarAkunAdminPublik();
  if (!daftarAdmin.some((akun) => akun.id === sesiAdmin.id)) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: "Sesi admin tidak lagi aktif. Silakan masuk kembali.",
      },
      { status: 401 }
    );
  }

  try {
    const badan = (await request.json()) as Record<string, unknown>;
    const soalNormal = normalisasiButirSoalEkstraksi(badan);
    soalNormal.status = "disetujui";

    if (!soalNormal.question_text) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan: "Teks pokok soal hasil parafrase tidak boleh kosong.",
        },
        { status: 400 }
      );
    }

    // Buat embedding 768 dimensi untuk RAG (otomatis null -> tsvector jika provider gratis tidak mendukung embedding)
    const teksRag = `${soalNormal.category} - ${soalNormal.sub_topic}: ${soalNormal.question_text} Pembahasan: ${soalNormal.explanation}`;
    const vektorEmbedding = await buatEmbeddingTeks(teksRag);

    let tersimpanDiBasisData = false;
    try {
      const supabase = buatKlienSupabaseServer();
      const { error } = await supabase.from("questions").insert({
        stage: soalNormal.stage,
        category: soalNormal.category,
        sub_topic: soalNormal.sub_topic,
        difficulty: soalNormal.difficulty,
        question_text: soalNormal.question_text,
        image_url: soalNormal.image_url,
        options: soalNormal.options,
        explanation: soalNormal.explanation,
        source_reference: soalNormal.source_reference,
        is_paraphrased:
          typeof badan.is_paraphrased === "boolean"
            ? badan.is_paraphrased
            : true,
        status: "disetujui",
        embedding: vektorEmbedding,
      });

      if (!error) {
        tersimpanDiBasisData = true;
      }
    } catch {
      tersimpanDiBasisData = false;
    }

    return NextResponse.json({
      status: "berhasil",
      pesan: tersimpanDiBasisData
        ? "Soal berhasil disetujui dan tersimpan ke basis data Supabase (siap tampil di Simulasi CAT SKD)."
        : "Soal disetujui di pratinjau lokal, namun basis data Supabase belum tersambung sehingga belum tersimpan permanen.",
      tersimpan_di_basis_data: tersimpanDiBasisData,
      metode_pencarian_rag: vektorEmbedding
        ? "pgvector_768"
        : "tsvector_bahasa_indonesia",
      soal: soalNormal,
    });
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal menyetujui dan menyimpan soal: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}
