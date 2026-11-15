import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  buatSignatureMidtrans,
  evaluasiAksesPaketSimulasi,
  periksaBatasLajuPermintaan,
  periksaKuotaTutorAI,
  verifikasiWebhookPembayaran,
} from "../access-control.ts";

describe("Monetisasi, Kendali Akses Paket, & Pembatasan Laju AI (Fase 5)", () => {
  it("mengizinkan akun gratis mengakses paket perdana tetapi mengunci paket berbayar sebelum pembayaran", () => {
    const aksesGratis = evaluasiAksesPaketSimulasi({
      idPaket: "paket-perdana-gratis",
      tingkatLangganan: "gratis",
    });
    assert.equal(aksesGratis.diizinkan, true);

    const aksesTerkunci = evaluasiAksesPaketSimulasi({
      idPaket: "paket-intensif-skd",
      tingkatLangganan: "gratis",
    });
    assert.equal(aksesTerkunci.diizinkan, false);
    assert.equal(aksesTerkunci.hargaIdr, 49000);

    const aksesTerbukaSetelahBayar = evaluasiAksesPaketSimulasi({
      idPaket: "paket-intensif-skd",
      tingkatLangganan: "intensif_skd",
    });
    assert.equal(aksesTerbukaSetelahBayar.diizinkan, true);
  });

  it("membatasi kuota harian Tutor AI Sokratik untuk akun gratis (5 pertanyaan) dan membuka kuota besar untuk akun berbayar", () => {
    const kuotaMasihAda = periksaKuotaTutorAI({
      tingkatLangganan: "gratis",
      jumlahPemakaianHariIni: 3,
    });
    assert.equal(kuotaMasihAda.diizinkan, true);
    assert.equal(kuotaMasihAda.sisaKuota, 2);

    const kuotaHabis = periksaKuotaTutorAI({
      tingkatLangganan: "gratis",
      jumlahPemakaianHariIni: 5,
    });
    assert.equal(kuotaHabis.diizinkan, false);
    assert.equal(kuotaHabis.sisaKuota, 0);
  });

  it("memverifikasi webhook pembayaran Midtrans/Mayar dan mengaktifkan tingkat langganan secara otomatis", () => {
    const serverKey = "kunci_rahasia_sandbox";
    const orderId = "ORDER-CPNS-001";
    const signature = buatSignatureMidtrans({
      orderId,
      statusCode: "200",
      grossAmount: "89000",
      serverKey,
    });

    const hasilWebhook = verifikasiWebhookPembayaran({
      order_id: orderId,
      status_code: "200",
      gross_amount: "89000",
      signature_key: signature,
      transaction_status: "settlement",
      paket_id: "paket-terpadu-cpns",
      server_key_opsional: serverKey,
    });

    assert.equal(hasilWebhook.sah, true);
    assert.equal(hasilWebhook.statusTransaksi, "lunas");
    assert.equal(hasilWebhook.tingkatAktifBaru, "terpadu_cpns");
  });

  it("menerapkan pembatasan laju permintaan (rate limiting) dengan pesan peringatan berbahasa Indonesia", () => {
    const klienUji = "pengguna-uji-rate-limit";
    const p1 = periksaBatasLajuPermintaan({
      identitasKlien: klienUji,
      batasMaksimal: 2,
      jendelaWaktuDetik: 60,
    });
    const p2 = periksaBatasLajuPermintaan({
      identitasKlien: klienUji,
      batasMaksimal: 2,
      jendelaWaktuDetik: 60,
    });
    const p3 = periksaBatasLajuPermintaan({
      identitasKlien: klienUji,
      batasMaksimal: 2,
      jendelaWaktuDetik: 60,
    });

    assert.equal(p1.diizinkan, true);
    assert.equal(p2.diizinkan, true);
    assert.equal(p3.diizinkan, false);
    assert.ok(p3.pesanPeringatan?.includes("Permintaan ke layanan AI terlalu cepat"));
  });
});
