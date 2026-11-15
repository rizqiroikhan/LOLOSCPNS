import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  CONTOH_HASIL_EKSTRAKSI_SOAL_SKD,
  DAFTAR_SUB_TOPIK_RESMI_SKD,
  normalisasiButirSoalEkstraksi,
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
});
