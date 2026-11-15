import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  bangunBankSoalSimulasi110,
  formatDetikKeJamMenitDetik,
  SOAL_KUIS_SINGKAT_BERANDA,
} from "../cat-question-bank.ts";
import {
  evaluasiKelulusanSKD,
  hitungSkorDariJawaban,
} from "../scoring-engine.ts";
import type { PetaJawabanPeserta } from "../../types/database.ts";

describe("Bank Soal Simulasi CAT SKD 110 Soal & Kuis Singkat (Fase 3)", () => {
  it("menyediakan tepat 3 soal Kuis Singkat Interaktif (TWK, TIU, TKP) untuk Halaman Utama", () => {
    assert.equal(SOAL_KUIS_SINGKAT_BERANDA.length, 3);
    assert.equal(SOAL_KUIS_SINGKAT_BERANDA[0].category, "TWK");
    assert.equal(SOAL_KUIS_SINGKAT_BERANDA[1].category, "TIU");
    assert.equal(SOAL_KUIS_SINGKAT_BERANDA[2].category, "TKP");
  });

  it("membangun tepat 110 butir soal SKD (30 TWK, 35 TIU, 45 TKP) berstatus 'disetujui'", () => {
    const soal110 = bangunBankSoalSimulasi110();
    assert.equal(soal110.length, 110);

    const soalTWK = soal110.filter((s) => s.category === "TWK");
    const soalTIU = soal110.filter((s) => s.category === "TIU");
    const soalTKP = soal110.filter((s) => s.category === "TKP");

    assert.equal(soalTWK.length, 30);
    assert.equal(soalTIU.length, 35);
    assert.equal(soalTKP.length, 45);

    for (const butir of soal110) {
      assert.equal(butir.status, "disetujui");
      assert.equal(butir.options.length, 5);
    }
  });

  it("menghasilkan skor maksimal kumulatif 550 (TWK 150, TIU 175, TKP 225) apabila seluruh 110 soal dijawab sempurna", () => {
    const soal110 = bangunBankSoalSimulasi110();
    const jawabanSempurna: PetaJawabanPeserta = {};

    for (const butir of soal110) {
      const opsiTerbaik = butir.options.reduce((terbaik, saatIni) =>
        saatIni.skor > terbaik.skor ? saatIni : terbaik
      );
      jawabanSempurna[butir.id] = opsiTerbaik.kunci;
    }

    const hasilSkor = hitungSkorDariJawaban(soal110, jawabanSempurna);
    assert.deepEqual(hasilSkor.skorSubtes, {
      TWK: 150,
      TIU: 175,
      TKP: 225,
    });
    assert.equal(hasilSkor.skorTotal, 550);
    assert.equal(hasilSkor.jumlahTerjawab, 110);
    assert.equal(hasilSkor.jumlahKosong, 0);

    const evaluasi = evaluasiKelulusanSKD({
      jenisFormasi: "umum",
      skorSubtes: hasilSkor.skorSubtes,
    });
    assert.equal(evaluasi.lulusAmbangBatas, true);
  });

  it("memformat hitung mundur waktu (JJ:MM:DD) untuk durasi 100 menit dan 130 menit dengan akurat", () => {
    assert.equal(formatDetikKeJamMenitDetik(100 * 60), "01:40:00");
    assert.equal(formatDetikKeJamMenitDetik(130 * 60), "02:10:00");
    assert.equal(formatDetikKeJamMenitDetik(65), "00:01:05");
  });
});
