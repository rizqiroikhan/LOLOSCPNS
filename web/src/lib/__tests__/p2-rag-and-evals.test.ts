import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  DATASET_EMAS_RETRIEVAL_12,
  DATASET_EMAS_SOKRATIK_12,
  DATASET_EMAS_VERIFIKASI_SOAL_12,
  jalankanEvaluasiAIHarness,
} from "../ai-eval-harness.ts";
import {
  ambilKonteksHybridSKD,
  gabungkanDanPeringkatUlangRRF,
  tokenisasiKataKunciIndonesia,
} from "../hybrid-retriever.ts";

describe("P2 Real Hybrid Retrieval (RRF) & AI Evaluation Harness (36 Golden Dataset)", () => {
  it("menggabungkan kandidat vektor dan teks dengan Reciprocal Rank Fusion (RRF), mengecualikan ID aktif, dan menerapkan threshold", () => {
    const vektor = [
      {
        id: "q-aktif",
        kategori: "TWK",
        sub_topik: "Integritas",
        question_text: "Soal aktif yang sedang dibahas peserta",
        explanation: "Penjelasan aktif",
        source_reference: "UU 20/2001",
        skor_vektor: 0.99,
      },
      {
        id: "q-sama-dua",
        kategori: "TWK",
        sub_topik: "Integritas",
        question_text: "Aparatur menolak gratifikasi rekanan lelang",
        explanation: "Penolakan gratifikasi dan laporan ke UPG",
        source_reference: "UU 20/2001",
        skor_vektor: 0.88,
      },
      {
        id: "q-vektor-saja",
        kategori: "TWK",
        sub_topik: "Integritas",
        question_text: "Konflik kepentingan pengadaan barang",
        explanation: "Konflik kepentingan wajib diungkapkan",
        source_reference: "Kepmenpan-RB 321/2024",
        skor_vektor: 0.72,
      },
    ];

    const teks = [
      {
        id: "q-sama-dua",
        kategori: "TWK",
        sub_topik: "Integritas",
        question_text: "Aparatur menolak gratifikasi rekanan lelang",
        explanation: "Penolakan gratifikasi dan laporan ke UPG",
        source_reference: "UU 20/2001",
        skor_teks: 0.85,
      },
      {
        id: "q-teks-saja",
        kategori: "TWK",
        sub_topik: "Nasionalisme",
        question_text: "Upacara bendera",
        explanation: "Nasionalisme warga",
        source_reference: "UUD 1945",
        skor_teks: 0.25,
      },
    ];

    const kataKunci = tokenisasiKataKunciIndonesia(
      "integritas gratifikasi menolak rekanan"
    );
    assert.ok(kataKunci.includes("integritas"));
    assert.ok(!kataKunci.includes("yang"));

    const hasil = gabungkanDanPeringkatUlangRRF({
      daftarVektor: vektor,
      daftarTeks: teks,
      kataKunci,
      subTopikTarget: "Integritas",
      idKecualikan: "q-aktif",
      batas: 3,
      ambangSkorRrf: 0.015,
    });

    assert.equal(hasil.some((h) => h.id === "q-aktif"), false);
    assert.equal(hasil[0].id, "q-sama-dua");
    assert.ok(hasil[0].skor_rrf > hasil[1]?.skor_rrf || hasil.length === 1);
  });

  it("mengambil rujukan nyata dari bank terkurasi sesuai kategori & sub-topik ketika kueri SKD dikirim", async () => {
    const res = await ambilKonteksHybridSKD({
      kueriTeks: "deret angka selisih bertingkat pola bilangan",
      kategori: "TIU",
      subTopik: "Kemampuan Numerik - Deret Angka",
      batas: 3,
    });

    assert.ok(res.total_ditemukan >= 1);
    assert.equal(
      res.daftar_rujukan.every((item) => item.kategori === "TIU"),
      true
    );
  });

  it("meluluskan 100% dari 36 skenario Golden Dataset AI Evaluation Harness lintas TWK, TIU, dan TKP", async () => {
    assert.equal(DATASET_EMAS_RETRIEVAL_12.length, 12);
    assert.equal(DATASET_EMAS_VERIFIKASI_SOAL_12.length, 12);
    assert.equal(DATASET_EMAS_SOKRATIK_12.length, 12);

    const laporan = await jalankanEvaluasiAIHarness({ modeLiveLLM: false });
    assert.equal(laporan.total_skenario, 36);
    assert.deepEqual(laporan.rincian_gagal, []);
    assert.equal(laporan.total_lulus, 36);
    assert.equal(laporan.tingkat_kelulusan_persen, 100);
    assert.equal(laporan.metrik_retrieval.recall_persen, 100);
    assert.equal(laporan.metrik_verifikator_numerik.akurasi_persen, 100);
    assert.equal(laporan.metrik_kepatuhan_sokratik.kepatuhan_persen, 100);
  });
});
