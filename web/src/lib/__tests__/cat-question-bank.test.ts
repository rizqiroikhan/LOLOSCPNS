import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  bangunBankSoalSimulasi110,
  bangunSemuaBankSoalSimulasi,
  DAFTAR_ID_PAKET_SIMULASI_RESMI,
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

  it("menyediakan seluruh 7 paket resmi (770 soal unik: 30 TWK, 35 TIU, 45 TKP per paket, skor maksimal 550) tanpa duplikat maupun watermark", () => {
    assert.equal(DAFTAR_ID_PAKET_SIMULASI_RESMI.length, 7);

    const polaWatermark =
      /\b(siapdinas|catbkn|ayocpns|sobat\s*cpns|privat\s*al[\s-]*faiz|pejuang\s*pendidik|asn\s*institute|jadipns|sahabat\s*cpns)\b|instagram\.com|t\.me\//i;

    for (const idPaket of DAFTAR_ID_PAKET_SIMULASI_RESMI) {
      const paket110 = bangunBankSoalSimulasi110(idPaket);
      assert.equal(paket110.length, 110, `${idPaket} harus memiliki 110 soal`);
      assert.equal(paket110.filter((s) => s.category === "TWK").length, 30);
      assert.equal(paket110.filter((s) => s.category === "TIU").length, 35);
      assert.equal(paket110.filter((s) => s.category === "TKP").length, 45);

      const jawabanSempurna: PetaJawabanPeserta = {};
      for (const butir of paket110) {
        assert.equal(butir.status, "disetujui");
        assert.equal(butir.options.length, 5);
        assert.equal(
          polaWatermark.test(`${butir.question_text} ${butir.explanation}`),
          false,
          `Watermark terdeteksi pada ${butir.id}`
        );

        const skorSorted = butir.options.map((o) => o.skor).sort((a, b) => a - b);
        if (butir.category === "TKP") {
          assert.deepEqual(skorSorted, [1, 2, 3, 4, 5], `Skor TKP invalid: ${butir.id}`);
        } else {
          assert.deepEqual(skorSorted, [0, 0, 0, 0, 5], `Skor ${butir.category} invalid: ${butir.id}`);
        }

        const opsiTerbaik = butir.options.reduce((a, b) =>
          b.skor > a.skor ? b : a
        );
        jawabanSempurna[butir.id] = opsiTerbaik.kunci;
      }

      const skorPaket = hitungSkorDariJawaban(paket110, jawabanSempurna);
      assert.equal(skorPaket.skorTotal, 550, `Skor maksimal ${idPaket} harus 550`);
    }

    const semua770 = bangunSemuaBankSoalSimulasi();
    assert.equal(semua770.length, 770);

    const idUnik = new Set(semua770.map((s) => s.id));
    assert.equal(idUnik.size, 770, "Seluruh 770 ID soal harus unik");

    const stemUnik = new Set(
      semua770.map((s) => s.question_text.trim().toLowerCase().replace(/\s+/g, " "))
    );
    assert.equal(stemUnik.size, 770, "Seluruh 770 teks soal harus unik");
  });
});
