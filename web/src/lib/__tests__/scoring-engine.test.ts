import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  evaluasiKelulusanSKD,
  hitungDurasiUjianSKD,
  hitungSkorDariJawaban,
  REGULASI_SKD_321_2024,
} from "../scoring-engine.ts";
import type { JenisFormasiSKD } from "../../types/database.ts";

describe("Mesin Penilaian Deterministik SKD (Kepmenpan-RB Nomor 321 Tahun 2024)", () => {
  describe("1. Perhitungan Durasi Ujian SKD", () => {
    it("memberikan durasi 100 menit untuk formasi umum dan kebutuhan khusus non-netra", () => {
      const semuaFormasi: JenisFormasiSKD[] = [
        "umum",
        "kalimantan",
        "cumlaude",
        "diaspora",
        "disabilitas",
        "papua",
        "daerah_tertinggal",
      ];

      for (const formasi of semuaFormasi) {
        assert.equal(hitungDurasiUjianSKD(formasi, false), 100);
      }
    });

    it("memberikan durasi 130 menit khusus untuk penyandang disabilitas sensorik netra pada formasi disabilitas", () => {
      assert.equal(hitungDurasiUjianSKD("disabilitas", true), 130);
      assert.equal(hitungDurasiUjianSKD("umum", true), 100);
    });
  });

  describe("2. Evaluasi Mode Per Sub-Tes (`per_subtes`): Umum & Kalimantan", () => {
    it("meluluskan peserta formasi `umum` jika TWK >= 65, TIU >= 80, dan TKP >= 166", () => {
      const hasil = evaluasiKelulusanSKD({
        jenisFormasi: "umum",
        skorSubtes: { TWK: 65, TIU: 80, TKP: 166 },
      });

      assert.equal(hasil.modeEvaluasi, "per_subtes");
      assert.equal(hasil.skorTotal, 311);
      assert.equal(hasil.lulusAmbangBatas, true);
      assert.equal(hasil.statusKelulusan, "LULUS AMBANG BATAS");
    });

    it("menggagalkan peserta formasi `umum` apabila salah satu sub-tes di bawah ambang batas meskipun skor total tinggi", () => {
      const gagalTWK = evaluasiKelulusanSKD({
        jenisFormasi: "umum",
        skorSubtes: { TWK: 60, TIU: 120, TKP: 180 },
      });
      assert.equal(gagalTWK.lulusAmbangBatas, false);

      const gagalTIU = evaluasiKelulusanSKD({
        jenisFormasi: "umum",
        skorSubtes: { TWK: 100, TIU: 75, TKP: 190 },
      });
      assert.equal(gagalTIU.lulusAmbangBatas, false);

      const gagalTKP = evaluasiKelulusanSKD({
        jenisFormasi: "umum",
        skorSubtes: { TWK: 100, TIU: 120, TKP: 165 },
      });
      assert.equal(gagalTKP.lulusAmbangBatas, false);
    });

    it("mengevaluasi formasi `kalimantan` dengan syarat TWK >= 65, TIU >= 80, dan TKP >= 166", () => {
      const lulus = evaluasiKelulusanSKD({
        jenisFormasi: "kalimantan",
        skorSubtes: { TWK: 70, TIU: 85, TKP: 170 },
      });
      assert.equal(lulus.modeEvaluasi, "per_subtes");
      assert.equal(lulus.lulusAmbangBatas, true);

      const gagal = evaluasiKelulusanSKD({
        jenisFormasi: "kalimantan",
        skorSubtes: { TWK: 70, TIU: 85, TKP: 165 },
      });
      assert.equal(gagal.lulusAmbangBatas, false);
    });
  });

  describe("3. Evaluasi Mode Kumulatif & TIU (`kumulatif_dan_tiu`): Cumlaude & Diaspora (Kumulatif >= 311, TIU >= 85)", () => {
    it("meluluskan formasi `cumlaude` jika Kumulatif >= 311 dan TIU >= 85 walaupun TWK atau TKP di bawah batas reguler", () => {
      const hasil = evaluasiKelulusanSKD({
        jenisFormasi: "cumlaude",
        skorSubtes: { TWK: 60, TIU: 90, TKP: 161 },
      });

      assert.equal(hasil.modeEvaluasi, "kumulatif_dan_tiu");
      assert.equal(hasil.skorTotal, 311);
      assert.equal(hasil.lulusAmbangBatas, true);
    });

    it("menggagalkan formasi `cumlaude` jika Kumulatif < 311 atau TIU < 85", () => {
      const gagalKumulatif = evaluasiKelulusanSKD({
        jenisFormasi: "cumlaude",
        skorSubtes: { TWK: 60, TIU: 90, TKP: 160 },
      });
      assert.equal(gagalKumulatif.lulusAmbangBatas, false);

      const gagalTIU = evaluasiKelulusanSKD({
        jenisFormasi: "cumlaude",
        skorSubtes: { TWK: 90, TIU: 80, TKP: 180 },
      });
      assert.equal(gagalTIU.lulusAmbangBatas, false);
    });

    it("meluluskan dan menggagalkan formasi `diaspora` secara akurat (Kumulatif >= 311 dan TIU >= 85)", () => {
      const lulus = evaluasiKelulusanSKD({
        jenisFormasi: "diaspora",
        skorSubtes: { TWK: 55, TIU: 85, TKP: 171 },
      });
      assert.equal(lulus.skorTotal, 311);
      assert.equal(lulus.lulusAmbangBatas, true);

      const gagal = evaluasiKelulusanSKD({
        jenisFormasi: "diaspora",
        skorSubtes: { TWK: 80, TIU: 80, TKP: 170 },
      });
      assert.equal(gagal.lulusAmbangBatas, false);
    });
  });

  describe("4. Evaluasi Mode Kumulatif & TIU (`kumulatif_dan_tiu`): Disabilitas, Papua, & Daerah Tertinggal (Kumulatif >= 286, TIU >= 60)", () => {
    const formasiAfirmasi: JenisFormasiSKD[] = [
      "disabilitas",
      "papua",
      "daerah_tertinggal",
    ];

    for (const jenisFormasi of formasiAfirmasi) {
      it(`meluluskan formasi \`${jenisFormasi}\` saat Kumulatif >= 286 dan TIU >= 60`, () => {
        const hasil = evaluasiKelulusanSKD({
          jenisFormasi,
          skorSubtes: { TWK: 66, TIU: 60, TKP: 160 },
          disabilitasSensorikNetra: jenisFormasi === "disabilitas",
        });

        assert.equal(hasil.modeEvaluasi, "kumulatif_dan_tiu");
        assert.equal(hasil.skorTotal, 286);
        assert.equal(hasil.lulusAmbangBatas, true);
        assert.equal(
          hasil.durasiMenit,
          jenisFormasi === "disabilitas" ? 130 : 100
        );
      });

      it(`menggagalkan formasi \`${jenisFormasi}\` saat Kumulatif < 286 atau TIU < 60`, () => {
        const gagalKumulatif = evaluasiKelulusanSKD({
          jenisFormasi,
          skorSubtes: { TWK: 60, TIU: 65, TKP: 160 },
        });
        assert.equal(gagalKumulatif.lulusAmbangBatas, false);

        const gagalTIU = evaluasiKelulusanSKD({
          jenisFormasi,
          skorSubtes: { TWK: 75, TIU: 55, TKP: 170 },
        });
        assert.equal(gagalTIU.lulusAmbangBatas, false);
      });
    }
  });

  describe("5. Perhitungan Skor Mentah dari Jawaban Peserta (TWK, TIU, TKP)", () => {
    it("menghitung bobot jawaban benar (+5 TWK/TIU), skala 1-5 TKP, dan jawaban kosong (0)", () => {
      const sampelSoal = [
        {
          id: "soal-twk-1",
          category: "TWK",
          options: [
            { kunci: "A" as const, teks: "Salah", skor: 0 },
            { kunci: "B" as const, teks: "Benar", skor: 5 },
          ],
        },
        {
          id: "soal-tiu-1",
          category: "TIU",
          options: [
            { kunci: "A" as const, teks: "Salah", skor: 0 },
            { kunci: "C" as const, teks: "Benar", skor: 5 },
          ],
        },
        {
          id: "soal-tkp-1",
          category: "TKP",
          options: [
            { kunci: "A" as const, teks: "Sangat Baik", skor: 5 },
            { kunci: "B" as const, teks: "Baik", skor: 4 },
            { kunci: "C" as const, teks: "Cukup", skor: 3 },
          ],
        },
        {
          id: "soal-tkp-2",
          category: "TKP",
          options: [
            { kunci: "A" as const, teks: "Sangat Baik", skor: 5 },
            { kunci: "B" as const, teks: "Kurang", skor: 1 },
          ],
        },
      ];

      const hasilHitung = hitungSkorDariJawaban(sampelSoal, {
        "soal-twk-1": "B",
        "soal-tiu-1": "A",
        "soal-tkp-1": "B",
      });

      assert.deepEqual(hasilHitung.skorSubtes, {
        TWK: 5,
        TIU: 0,
        TKP: 4,
      });
      assert.equal(hasilHitung.skorTotal, 9);
      assert.equal(hasilHitung.jumlahTerjawab, 3);
      assert.equal(hasilHitung.jumlahKosong, 1);
    });

    it("memiliki struktur regulasi SKD 321/2024 yang valid dengan 110 soal dan skor maksimal 550", () => {
      assert.equal(REGULASI_SKD_321_2024.total_questions, 110);
      assert.equal(REGULASI_SKD_321_2024.max_cumulative_score, 550);
    });
  });
});
