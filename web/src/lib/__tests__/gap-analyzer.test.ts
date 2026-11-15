import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  analisisKesenjanganNilaiSKD,
  bangkitkanSoalLatihanAdaptif,
  buatBimbinganSokratikKontekstual,
} from "../gap-analyzer.ts";
import { bangunBankSoalSimulasi110 } from "../cat-question-bank.ts";

describe("Analisis Kesenjangan Nilai, Tutor Sokratik & Latihan Adaptif (Fase 4)", () => {
  it("menghitung grafik perbandingan skor terhadap Nilai Ambang Batas dan mengurutkan sub-topik terlemah", () => {
    const soal110 = bangunBankSoalSimulasi110();
    // Peserta hanya menjawab sebagian soal TWK dengan benar, sedangkan TIU & TKP dikosongkan
    const hasilAnalisis = analisisKesenjanganNilaiSKD({
      daftarSoal: soal110,
      jawabanPeserta: {
        "skd-twk-1": "A",
        "skd-twk-2": "B",
      },
      jenisFormasi: "umum",
    });

    assert.equal(hasilAnalisis.grafikPerbandingan.length, 4);
    assert.equal(hasilAnalisis.evaluasiUtama.lulusAmbangBatas, false);
    assert.ok(hasilAnalisis.peringkatSubTopikTerlemah.length > 0);
    assert.equal(hasilAnalisis.tigaSubTopikPrioritas.length, 3);
    // Pastikan diurutkan dari akurasi paling rendah
    assert.ok(
      hasilAnalisis.peringkatSubTopikTerlemah[0].persentaseAkurasi <=
        hasilAnalisis.peringkatSubTopikTerlemah[
          hasilAnalisis.peringkatSubTopikTerlemah.length - 1
        ].persentaseAkurasi
    );
  });

  it("menghasilkan 5 s.d. 10 soal variasi baru secara dinamis pada sub-topik terlemah peserta", () => {
    const soalAdaptif5 = bangkitkanSoalLatihanAdaptif({
      kategori: "TIU",
      subTopik: "Kemampuan Numerik - Deret Angka",
      jumlahSoal: 6,
    });

    assert.equal(soalAdaptif5.length, 6);
    for (const s of soalAdaptif5) {
      assert.equal(s.category, "TIU");
      assert.equal(s.sub_topic, "Kemampuan Numerik - Deret Angka");
      assert.equal(s.options.length, 5);
    }
  });

  it("menyusun respons bimbingan Tutor AI Sokratik dalam Bahasa Indonesia yang baku", () => {
    const soal110 = bangunBankSoalSimulasi110();
    const responSokratik = buatBimbinganSokratikKontekstual({
      soal: soal110[0],
      jawabanPeserta: "C",
      pertanyaanPeserta: "Mengapa pilihan C kurang tepat?",
    });

    assert.ok(responSokratik.includes("Mari kita bedah soal"));
    assert.ok(responSokratik.includes(soal110[0].sub_topic));
  });
});
