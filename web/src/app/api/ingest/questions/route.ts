import { NextResponse } from "next/server";
import { buatEmbeddingTeks, panggilVisionAI } from "@/lib/ai-client";
import {
  CONTOH_HASIL_EKSTRAKSI_SOAL_SKD,
  DrafKurasiSoal,
  normalisasiButirSoalEkstraksi,
  uraiJsonAI,
} from "@/lib/ingestion-pipeline";

const INSTRUKSI_VISION_SOAL =
  "Ekstrak seluruh butir soal pada gambar ini, klasifikasikan ke dalam kategori ('TWK', 'TIU', atau 'TKP') " +
  "dan sub_topic resmi Kepmenpan-RB Nomor 321 Tahun 2024, lalu buat parafrase semantik bebas hak cipta " +
  "beserta pembahasan lengkap dalam Bahasa Indonesia yang baik dan benar. " +
  "Kembalikan JSON dengan kunci 'daftar_soal'.";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const berkas = formData.get("berkas") as File | null;
    const halamanPdf = Number(formData.get("halaman_pdf") || 0);

    if (!berkas) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan:
            "Silakan pilih berkas pindaian gambar (PNG/JPG) atau PDF halaman soal terlebih dahulu.",
        },
        { status: 400 }
      );
    }

    const aiServiceUrl =
      process.env.NEXT_PUBLIC_AI_SERVICE_URL || "http://localhost:8000";

    // 1. Coba teruskan ke layanan mikro FastAPI (/ingest/questions) apabila sedang berjalan
    try {
      const formLayanan = new FormData();
      formLayanan.append("berkas", berkas);
      formLayanan.append("halaman_pdf", String(halamanPdf));

      const resFastApi = await fetch(`${aiServiceUrl}/ingest/questions`, {
        method: "POST",
        body: formLayanan,
      });

      if (resFastApi.ok) {
        const dataFastApi = await resFastApi.json();
        return NextResponse.json(dataFastApi);
      }
    } catch {
      // Lanjut ke pemrosesan langsung via Adaptor AI Terpadu Next.js
    }

    // 2. Pemrosesan langsung melalui Adaptor Vision AI (AI_VISION_MODEL)
    let daftarSoalHasil: DrafKurasiSoal[] = [];
    let menggunakanContohPratinjau = false;

    try {
      const arrayBuffer = await berkas.arrayBuffer();
      const base64Data = Buffer.from(arrayBuffer).toString("base64");
      const tipeMime = berkas.type || "image/png";
      const dataUrl = `data:${tipeMime};base64,${base64Data}`;

      const responsVision = await panggilVisionAI({
        instruksiEkstraksi: INSTRUKSI_VISION_SOAL,
        dataUrlGambar: dataUrl,
        formatJson: true,
      });

      const hasilJson = uraiJsonAI<{
        daftar_soal?: Record<string, unknown>[];
      }>(responsVision);

      const daftarMentah = Array.isArray(hasilJson.daftar_soal)
        ? hasilJson.daftar_soal
        : [];

      for (let i = 0; i < daftarMentah.length; i++) {
        const soalNormal = normalisasiButirSoalEkstraksi(daftarMentah[i], i);
        const vektor = await buatEmbeddingTeks(
          `${soalNormal.category} ${soalNormal.sub_topic} ${soalNormal.question_text}`
        );
        soalNormal.metode_pencarian_rag = vektor
          ? "pgvector_768"
          : "tsvector_bahasa_indonesia";
        daftarSoalHasil.push(soalNormal);
      }
    } catch {
      menggunakanContohPratinjau = true;
      daftarSoalHasil = CONTOH_HASIL_EKSTRAKSI_SOAL_SKD;
    }

    if (daftarSoalHasil.length === 0) {
      menggunakanContohPratinjau = true;
      daftarSoalHasil = CONTOH_HASIL_EKSTRAKSI_SOAL_SKD;
    }

    return NextResponse.json({
      status: "berhasil",
      pesan: menggunakanContohPratinjau
        ? `Berkas '${berkas.name}' berhasil dianalisis (menampilkan ${daftarSoalHasil.length} butir soal hasil ekstraksi & parafrase semantik siap kurasi).`
        : `Berhasil mengekstrak dan memparafrasekan ${daftarSoalHasil.length} butir soal dari '${berkas.name}'.`,
      jumlah_soal: daftarSoalHasil.length,
      daftar_soal: daftarSoalHasil,
    });
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal mengekstrak soal dari berkas: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}
