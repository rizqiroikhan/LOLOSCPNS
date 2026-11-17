/**
 * Mesin Pencarian Hibrida Nyata (Real Hybrid Retrieval + Reranking RRF) — LOLOS CPNS.
 *
 * Menggabungkan:
 * 1. Panggilan RPC Supabase `match_konteks_skd` (`pgvector` 768-dim + `tsvector` Bahasa Indonesia + RRF).
 * 2. Cadangan retrieval leksikal-semantik deterministik atas bank soal kurasi resmi (220 soal)
 *    apabila basis data belum dihubungkan atau belum memiliki entri soal sejenis yang cukup.
 * 3. Penggabungan & pemeringkatan ulang menggunakan Reciprocal Rank Fusion (RRF, k=60) + threshold.
 */

import { buatEmbeddingTeks } from "./ai-client.ts";
import { bangunSemuaBankSoalSimulasi } from "./cat-question-bank.ts";
import { buatKlienSupabaseServer } from "./supabase.ts";

export interface DokumenKandidatRetrieval {
  id: string;
  kategori: string;
  sub_topik: string;
  question_text: string;
  explanation: string;
  source_reference: string;
  skor_vektor?: number;
  skor_teks?: number;
}

export interface HasilRujukanRAG {
  id: string;
  kategori: string;
  sub_topik: string;
  ringkasan_soal: string;
  pembahasan: string;
  referensi: string;
  skor_vektor: number;
  skor_teks: number;
  skor_rrf: number;
  sumber: "hybrid_rpc_supabase" | "bank_lokal_rrf";
}

export interface ResponHybridRetrieval {
  metode_retrieval:
    | "hybrid_rpc_pgvector_tsvector"
    | "rpc_tsvector_bahasa_indonesia"
    | "bank_kurasi_rrf";
  total_ditemukan: number;
  daftar_rujukan: HasilRujukanRAG[];
}

const STOPWORDS_INDONESIA = new Set([
  "yang",
  "dan",
  "di",
  "ke",
  "dari",
  "pada",
  "untuk",
  "dengan",
  "adalah",
  "atau",
  "oleh",
  "sebagai",
  "dalam",
  "itu",
  "ini",
  "apa",
  "mengapa",
  "bagaimana",
  "kapan",
  "tidak",
  "agar",
  "jika",
  "bila",
  "saya",
  "anda",
  "soal",
]);

export function tokenisasiKataKunciIndonesia(teks: string): string[] {
  const bersih = (teks || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ");
  const token = bersih
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t.length >= 3 && !STOPWORDS_INDONESIA.has(t));
  return Array.from(new Set(token));
}

function hitungSkorLeksikal(
  kataKunci: string[],
  subTopikTarget: string | undefined,
  dok: DokumenKandidatRetrieval
): number {
  if (kataKunci.length === 0) return 0;
  const teksDok = `${dok.sub_topik} ${dok.question_text} ${dok.explanation} ${dok.source_reference}`.toLowerCase();
  let cocok = 0;
  for (const kata of kataKunci) {
    if (teksDok.includes(kata)) {
      cocok += dok.sub_topik.toLowerCase().includes(kata) ? 1.5 : 1.0;
    }
  }
  const rasio = cocok / Math.max(1, kataKunci.length);
  const bonusSubTopik =
    subTopikTarget &&
    dok.sub_topik.toLowerCase().includes(subTopikTarget.toLowerCase())
      ? 0.35
      : 0;
  return Number((rasio + bonusSubTopik).toFixed(4));
}

/**
 * Menggabungkan daftar hasil peringkat vektor dan peringkat teks menggunakan
 * Reciprocal Rank Fusion (RRF, k=60) + bonus kemiripan sub-topik & threshold batas bawah.
 */
export function gabungkanDanPeringkatUlangRRF(parameter: {
  daftarVektor: DokumenKandidatRetrieval[];
  daftarTeks: DokumenKandidatRetrieval[];
  kataKunci: string[];
  subTopikTarget?: string;
  idKecualikan?: string;
  ambangSkorRrf?: number;
  batas?: number;
  sumber?: "hybrid_rpc_supabase" | "bank_lokal_rrf";
}): HasilRujukanRAG[] {
  const {
    daftarVektor,
    daftarTeks,
    kataKunci,
    subTopikTarget,
    idKecualikan,
    ambangSkorRrf = 0.008,
    batas = 3,
    sumber = "bank_lokal_rrf",
  } = parameter;

  const petaPeringkatVektor = new Map<string, number>();
  const petaPeringkatTeks = new Map<string, number>();
  const petaDokumen = new Map<string, DokumenKandidatRetrieval>();

  daftarVektor.forEach((dok, idx) => {
    if (idKecualikan && dok.id === idKecualikan) return;
    petaPeringkatVektor.set(dok.id, idx + 1);
    petaDokumen.set(dok.id, dok);
  });

  daftarTeks.forEach((dok, idx) => {
    if (idKecualikan && dok.id === idKecualikan) return;
    petaPeringkatTeks.set(dok.id, idx + 1);
    if (!petaDokumen.has(dok.id)) {
      petaDokumen.set(dok.id, dok);
    } else {
      const ada = petaDokumen.get(dok.id)!;
      petaDokumen.set(dok.id, {
        ...ada,
        skor_teks: dok.skor_teks ?? ada.skor_teks,
      });
    }
  });

  const K_RRF = 60;
  const kandidatGabungan: HasilRujukanRAG[] = [];

  for (const [id, dok] of petaDokumen.entries()) {
    const rankV = petaPeringkatVektor.get(id);
    const rankT = petaPeringkatTeks.get(id);
    const skorRrfDasar =
      (rankV ? 1 / (K_RRF + rankV) : 0) + (rankT ? 1 / (K_RRF + rankT) : 0);

    const skorLeksikal = hitungSkorLeksikal(kataKunci, subTopikTarget, dok);
    // Reranking ringan berbasis kecocokan kata kunci aktual dan sub-topik
    const skorRerank = Number((skorRrfDasar + skorLeksikal * 0.015).toFixed(5));
    if (skorRerank < ambangSkorRrf) continue;

    kandidatGabungan.push({
      id: dok.id,
      kategori: dok.kategori,
      sub_topik: dok.sub_topik,
      ringkasan_soal: dok.question_text.slice(0, 220),
      pembahasan: dok.explanation,
      referensi: dok.source_reference,
      skor_vektor: Number((dok.skor_vektor ?? 0).toFixed(4)),
      skor_teks: Number((dok.skor_teks ?? skorLeksikal).toFixed(4)),
      skor_rrf: skorRerank,
      sumber,
    });
  }

  return kandidatGabungan
    .sort((a, b) => b.skor_rrf - a.skor_rrf)
    .slice(0, batas);
}

function cariDiBankLokalDenganRRF(parameter: {
  kueriTeks: string;
  kategori?: string;
  subTopik?: string;
  idKecualikan?: string;
  batas: number;
}): HasilRujukanRAG[] {
  const semuaKandidat = bangunSemuaBankSoalSimulasi().filter((s) =>
    parameter.kategori
      ? s.category.toUpperCase() === parameter.kategori.toUpperCase()
      : true
  );

  const kataKunci = tokenisasiKataKunciIndonesia(
    `${parameter.subTopik || ""} ${parameter.kueriTeks}`
  );

  const daftarDenganSkor = semuaKandidat.map((s) => {
    const dok: DokumenKandidatRetrieval = {
      id: s.id,
      kategori: s.category,
      sub_topik: s.sub_topic,
      question_text: s.question_text,
      explanation: s.explanation,
      source_reference:
        s.source_reference || "Kepmenpan-RB Nomor 321 Tahun 2024",
    };
    const skor = hitungSkorLeksikal(kataKunci, parameter.subTopik, dok);
    return { ...dok, skor_teks: skor };
  });

  // Simulasikan 2 sinyal peringkat untuk RRF lokal: sinyal kecocokan teks + sinyal sub-topik
  const peringkatTeks = [...daftarDenganSkor]
    .filter((d) => d.skor_teks > 0)
    .sort((a, b) => b.skor_teks - a.skor_teks)
    .slice(0, 10);

  const peringkatSubTopik = [...daftarDenganSkor]
    .filter((d) =>
      parameter.subTopik
        ? d.sub_topik.toLowerCase().includes(parameter.subTopik.toLowerCase())
        : d.skor_teks > 0
    )
    .slice(0, 10);

  return gabungkanDanPeringkatUlangRRF({
    daftarVektor: peringkatSubTopik,
    daftarTeks: peringkatTeks,
    kataKunci,
    subTopikTarget: parameter.subTopik,
    idKecualikan: parameter.idKecualikan,
    batas: parameter.batas,
    ambangSkorRrf: 0.01,
    sumber: "bank_lokal_rrf",
  });
}

function apakahSupabaseTersediaUntukRAG(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const kunci = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  return (
    Boolean(url) &&
    Boolean(kunci) &&
    !url.includes("proyek-anda.supabase.co") &&
    !kunci.includes("masukkan_supabase")
  );
}

/**
 * Mengambil rujukan soal & pembahasan sejenis secara nyata melalui RPC Supabase
 * (`pgvector` + `tsvector` + RRF) dan melengkapinya dengan bank kurasi terstruktur.
 */
export async function ambilKonteksHybridSKD(parameter: {
  kueriTeks: string;
  kategori?: string;
  subTopik?: string;
  idSoalAktif?: string;
  batas?: number;
  ambangKemiripanVektor?: number;
}): Promise<ResponHybridRetrieval> {
  const {
    kueriTeks,
    kategori,
    subTopik,
    idSoalAktif,
    batas = 3,
    ambangKemiripanVektor = 0.45,
  } = parameter;

  const teksPencarian = `${kategori || ""} ${subTopik || ""} ${kueriTeks}`.trim();
  const kataKunci = tokenisasiKataKunciIndonesia(teksPencarian);

  if (apakahSupabaseTersediaUntukRAG()) {
    try {
      const vektor = await buatEmbeddingTeks(teksPencarian);
      const supabase = buatKlienSupabaseServer();
      const { data, error } = await supabase.rpc("match_konteks_skd", {
        kueri_teks: teksPencarian,
        kueri_embedding: vektor,
        filter_kategori: kategori ? kategori.toUpperCase() : null,
        batas_hasil: Math.max(batas + 1, 4),
        ambang_kemiripan_vektor: ambangKemiripanVektor,
      });

      if (!error && Array.isArray(data) && data.length > 0) {
        const daftarRpc: DokumenKandidatRetrieval[] = data
          .map((row: Record<string, unknown>) => ({
            id: String(row.id || ""),
            kategori: String(row.category || kategori || "SKD"),
            sub_topik: String(row.sub_topic || subTopik || ""),
            question_text: String(row.question_text || ""),
            explanation: String(row.explanation || ""),
            source_reference: String(row.source_reference || ""),
            skor_vektor: Number(row.skor_vektor || 0),
            skor_teks: Number(row.skor_teks || 0),
          }))
          .filter((item) => item.id !== idSoalAktif && Boolean(item.question_text));

        if (daftarRpc.length > 0) {
          const hasilRerank = gabungkanDanPeringkatUlangRRF({
            daftarVektor: daftarRpc.filter((d) => (d.skor_vektor ?? 0) > 0),
            daftarTeks: daftarRpc,
            kataKunci,
            subTopikTarget: subTopik,
            idKecualikan: idSoalAktif,
            batas,
            sumber: "hybrid_rpc_supabase",
          });
          if (hasilRerank.length > 0) {
            return {
              metode_retrieval: vektor
                ? "hybrid_rpc_pgvector_tsvector"
                : "rpc_tsvector_bahasa_indonesia",
              total_ditemukan: hasilRerank.length,
              daftar_rujukan: hasilRerank,
            };
          }
        }
      }
    } catch {
      // Jatuh aman ke RRF atas bank kurasi resmi jika RPC/DB sedang gangguan
    }
  }

  const rujukanLokal = cariDiBankLokalDenganRRF({
    kueriTeks,
    kategori,
    subTopik,
    idKecualikan: idSoalAktif,
    batas,
  });

  return {
    metode_retrieval: "bank_kurasi_rrf",
    total_ditemukan: rujukanLokal.length,
    daftar_rujukan: rujukanLokal,
  };
}
