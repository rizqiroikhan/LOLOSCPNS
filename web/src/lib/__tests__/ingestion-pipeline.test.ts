import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  CONTOH_FORMAT_CSV_SOAL,
  CONTOH_HASIL_EKSTRAKSI_SOAL_SKD,
  DAFTAR_SUB_TOPIK_RESMI_SKD,
  buatDrafSoalKosong,
  normalisasiButirSoalEkstraksi,
  uraiImporMassalCsvAtauJson,
  uraiJsonAI,
} from "../ingestion-pipeline.ts";

describe("Pipeline Kurasi & Ekstraksi Soal Multimodal (Fase 2)", () => {
  it("memuat lengkap seluruh sub-topik resmi Diktum KEDUA Kepmenpan-RB Nomor 321 Tahun 2024", () => {
    assert.equal(DAFTAR_SUB_TOPIK_RESMI_SKD.TWK.length, 5);
    assert.equal(DAFTAR_SUB_TOPIK_RESMI_SKD.TIU.length, 10);
    assert.equal(DAFTAR_SUB_TOPIK_RESMI_SKD.TKP.length, 6);
  });

  it("mengurai JSON keluaran AI meskipun dibungkus blok markdown ```json", () => {
    const mentah = '```json\n{"stage": "SKD", "jumlah": 2}\n```';
    const hasil = uraiJsonAI<{ stage: string; jumlah: number }>(mentah);
    assert.equal(hasil.stage, "SKD");
    assert.equal(hasil.jumlah, 2);
  });

  it("menormalisasi tingkat kesulitan, status, dan sub-topik ke Bahasa Indonesia yang baku", () => {
    const soalNormal = normalisasiButirSoalEkstraksi({
      category: "tiu",
      sub_topic: "Deret Angka",
      difficulty: "hard",
      status: "draft",
      teks_soal_asli: "2, 4, 8, 16, ...",
      question_text: "3, 6, 12, 24, ...",
      options: [
        { text: "36", score: 0 },
        { text: "48", score: 5 },
      ],
    });

    assert.equal(soalNormal.stage, "SKD");
    assert.equal(soalNormal.category, "TIU");
    assert.equal(soalNormal.sub_topic, "Kemampuan Numerik - Deret Angka");
    assert.equal(soalNormal.difficulty, "sulit");
    assert.equal(soalNormal.status, "draf");
    assert.equal(soalNormal.options.length, 5);
    assert.equal(soalNormal.options[1].kunci, "B");
    assert.equal(soalNormal.options[1].skor, 5);
    assert.equal(soalNormal.is_paraphrased, true);
  });

  it("menyediakan data pratinjau perbandingan Naskah Asli vs Hasil Parafrase AI dalam Bahasa Indonesia", () => {
    assert.ok(CONTOH_HASIL_EKSTRAKSI_SOAL_SKD.length >= 2);
    for (const soal of CONTOH_HASIL_EKSTRAKSI_SOAL_SKD) {
      assert.notEqual(soal.teks_soal_asli, soal.question_text);
      assert.equal(soal.options.length, 5);
    }
  });

  it("membuat draf soal kosong manual dengan bobot awal sesuai kategori TWK/TIU maupun TKP", () => {
    const twkManual = buatDrafSoalKosong("TWK", 1);
    assert.equal(twkManual.category, "TWK");
    assert.equal(twkManual.teks_soal_asli, "");
    assert.equal(twkManual.question_text, "");
    assert.deepEqual(
      twkManual.options.map((o) => o.skor),
      [5, 0, 0, 0, 0]
    );

    const tkpManual = buatDrafSoalKosong("TKP", 2);
    assert.equal(tkpManual.category, "TKP");
    assert.deepEqual(
      tkpManual.options.map((o) => o.skor),
      [5, 4, 3, 2, 1]
    );
  });

  it("mengurai impor massal CSV bertitik koma dan JSON tanpa memerlukan layanan AI eksternal", () => {
    const dariCsv = uraiImporMassalCsvAtauJson(CONTOH_FORMAT_CSV_SOAL);
    assert.equal(dariCsv.length, 2);
    assert.equal(dariCsv[0].category, "TWK");
    assert.equal(dariCsv[0].sub_topic, "Integritas");
    assert.deepEqual(
      dariCsv[0].options.map((o) => o.skor),
      [0, 5, 0, 0, 0]
    );
    assert.equal(dariCsv[1].category, "TKP");
    assert.deepEqual(
      dariCsv[1].options.map((o) => o.skor),
      [5, 1, 3, 2, 4]
    );

    const dariJson = uraiImporMassalCsvAtauJson(
      JSON.stringify([
        {
          category: "TIU",
          sub_topic: "Silogisme",
          difficulty: "sulit",
          question_text: "Semua ASN berintegritas. Sebagian peserta...",
          options: [
            { kunci: "A", teks: "Opsi 1", skor: 5 },
            { kunci: "B", teks: "Opsi 2", skor: 0 },
            { kunci: "C", teks: "Opsi 3", skor: 0 },
            { kunci: "D", teks: "Opsi 4", skor: 0 },
            { kunci: "E", teks: "Opsi 5", skor: 0 },
          ],
          explanation: "Penarikan kesimpulan silogisme kategoris.",
        },
      ])
    );
    assert.equal(dariJson.length, 1);
    assert.equal(dariJson[0].category, "TIU");
    assert.equal(dariJson[0].sub_topic, "Kemampuan Verbal - Silogisme");

    assert.throws(() => uraiImporMassalCsvAtauJson("baris-tidak-valid"));
  });
});
