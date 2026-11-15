import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import { periksaHakAksesManajemenAdmin } from "../admin-auth.ts";
import {
  BATAS_UNGGAH_BERKAS_BYTES,
  validasiBerkasUnggahanAdmin,
} from "../ai-service-proxy.ts";
import {
  bangunBankSoalSimulasi110,
  hapusKunciJawabanUntukUjian,
} from "../cat-question-bank.ts";
import {
  bacaPemakaianAIHariIni,
  tambahPemakaianAIHariIni,
} from "../commercial-store.ts";
import { periksaKesehatanLayanan } from "../health-check.ts";
import {
  buatSignatureMidtrans,
  dapatkanMidtransServerKey,
  verifikasiWebhookPembayaran,
} from "../payment-security.ts";
import {
  BANK_SOAL_SKB_TERPADU,
  bersihkanKunciJawabanSKB,
} from "../skb-question-bank.ts";
import {
  daftarPesertaBaru,
  perbaruiTingkatLanggananPeserta,
  verifikasiLoginPeserta,
  verifikasiTokenSesiPeserta,
} from "../user-auth.ts";

describe("Keamanan & Kelengkapan Komersial P0 — Bank Soal, RBAC, Pembayaran, Akun & Kuota", () => {
  it("menyediakan 220 soal SKD unik lintas paket (110 gratis + 110 berbayar) tanpa pengulangan templat dan menjaga skala TKP 1..5", () => {
    const paketGratis = bangunBankSoalSimulasi110("paket-perdana-gratis");
    const paketIntensif = bangunBankSoalSimulasi110("paket-intensif-skd");

    assert.equal(paketGratis.length, 110);
    assert.equal(paketIntensif.length, 110);

    for (const [namaPaket, daftar] of [
      ["paket-perdana-gratis", paketGratis],
      ["paket-intensif-skd", paketIntensif],
    ] as const) {
      const twk = daftar.filter((s) => s.category === "TWK");
      const tiu = daftar.filter((s) => s.category === "TIU");
      const tkp = daftar.filter((s) => s.category === "TKP");
      assert.equal(twk.length, 30, `${namaPaket} wajib 30 TWK`);
      assert.equal(tiu.length, 35, `${namaPaket} wajib 35 TIU`);
      assert.equal(tkp.length, 45, `${namaPaket} wajib 45 TKP`);

      for (const soal of tkp) {
        const skorUrut = soal.options.map((o) => o.skor).sort((a, b) => a - b);
        assert.deepEqual(
          skorUrut,
          [1, 2, 3, 4, 5],
          `Skor opsi TKP ${soal.id} wajib tepat [1,2,3,4,5]`
        );
      }

      for (const soal of [...twk, ...tiu]) {
        const jumlahBenar = soal.options.filter((o) => o.skor === 5).length;
        const jumlahNol = soal.options.filter((o) => o.skor === 0).length;
        assert.equal(jumlahBenar, 1, `Soal ${soal.id} wajib tepat 1 opsi benar (+5)`);
        assert.equal(jumlahNol, 4, `Soal ${soal.id} wajib tepat 4 pengecoh (0)`);
      }
    }

    const gabungan220 = [...paketGratis, ...paketIntensif];
    const idUnik = new Set(gabungan220.map((s) => s.id));
    const teksUnik = new Set(
      gabungan220.map((s) => s.question_text.trim().toLowerCase())
    );
    assert.equal(idUnik.size, 220);
    assert.equal(teksUnik.size, 220);
  });

  it("menghapus kunci jawaban (skor), explanation, dan source_reference sebelum dikirim ke klien ujian", () => {
    const penuh = bangunBankSoalSimulasi110("paket-intensif-skd");
    const terproteksi = hapusKunciJawabanUntukUjian(penuh);

    assert.equal(terproteksi.length, 110);
    for (const item of terproteksi) {
      assert.equal("explanation" in item, false);
      assert.equal("source_reference" in item, false);
      for (const opsi of item.options) {
        assert.equal("skor" in opsi, false);
      }
    }
  });

  it("menyediakan 20 soal SKB & Situational Wawancara unik beserta pembersihan kunci jawaban klien", () => {
    assert.equal(BANK_SOAL_SKB_TERPADU.length, 20);
    const unikPertanyaan = new Set(
      BANK_SOAL_SKB_TERPADU.map((s) => s.pertanyaan.trim().toLowerCase())
    );
    assert.equal(unikPertanyaan.size, 20);

    const terproteksi = bersihkanKunciJawabanSKB(BANK_SOAL_SKB_TERPADU);
    assert.equal(terproteksi.length, 20);
    for (const item of terproteksi) {
      assert.equal("kunci_benar" in item, false);
      assert.equal("pembahasan" in item, false);
      assert.equal("referensi" in item, false);
    }
  });

  it("menerapkan RBAC Admin Utama vs Admin Kurator dengan ketat", () => {
    assert.equal(
      periksaHakAksesManajemenAdmin({
        peranPelaku: "admin_utama",
        idPelaku: "adm-1",
        aksi: "tambah",
      }).diizinkan,
      true
    );
    assert.equal(
      periksaHakAksesManajemenAdmin({
        peranPelaku: "admin_utama",
        idPelaku: "adm-1",
        aksi: "hapus",
        idTarget: "adm-2",
      }).diizinkan,
      true
    );

    assert.equal(
      periksaHakAksesManajemenAdmin({
        peranPelaku: "admin",
        idPelaku: "adm-2",
        aksi: "tambah",
      }).diizinkan,
      false
    );
    assert.equal(
      periksaHakAksesManajemenAdmin({
        peranPelaku: "admin",
        idPelaku: "adm-2",
        aksi: "hapus",
        idTarget: "adm-3",
      }).diizinkan,
      false
    );
    assert.equal(
      periksaHakAksesManajemenAdmin({
        peranPelaku: "admin",
        idPelaku: "adm-2",
        aksi: "ubah_sandi",
        idTarget: "adm-3",
      }).diizinkan,
      false
    );
    assert.equal(
      periksaHakAksesManajemenAdmin({
        peranPelaku: "admin",
        idPelaku: "adm-2",
        aksi: "ubah_sandi",
        idTarget: "adm-2",
      }).diizinkan,
      true
    );
  });

  it("memverifikasi signature SHA-512 webhook Midtrans, menolak tanda tangan palsu, salah nominal, dan kunci kosong di produksi", () => {
    const kunciDev = dapatkanMidtransServerKey();
    assert.ok(kunciDev);

    const sigValid = buatSignatureMidtrans({
      orderId: "ORD-TEST-001",
      statusCode: "200",
      grossAmount: "49000.00",
      serverKey: kunciDev,
    });

    const tolaksignKosong = verifikasiWebhookPembayaran({
      order_id: "ORD-TEST-001",
      status_code: "200",
      gross_amount: "49000.00",
      signature_key: "",
      transaction_status: "settlement",
      paket_id: "paket-intensif-skd",
      nominalHarapanIdr: 49000,
    });
    assert.equal(tolaksignKosong.sah, false);

    const tolakSignSalah = verifikasiWebhookPembayaran({
      order_id: "ORD-TEST-001",
      status_code: "200",
      gross_amount: "49000.00",
      signature_key: "0".repeat(128),
      transaction_status: "settlement",
      paket_id: "paket-intensif-skd",
      nominalHarapanIdr: 49000,
    });
    assert.equal(tolakSignSalah.sah, false);

    const tolakNominal = verifikasiWebhookPembayaran({
      order_id: "ORD-TEST-001",
      status_code: "200",
      gross_amount: "100.00",
      signature_key: buatSignatureMidtrans({
        orderId: "ORD-TEST-001",
        statusCode: "200",
        grossAmount: "100.00",
        serverKey: kunciDev,
      }),
      transaction_status: "settlement",
      paket_id: "paket-intensif-skd",
      nominalHarapanIdr: 49000,
    });
    assert.equal(tolakNominal.sah, false);

    const terimaValid = verifikasiWebhookPembayaran({
      order_id: "ORD-TEST-001",
      status_code: "200",
      gross_amount: "49000.00",
      signature_key: sigValid,
      transaction_status: "settlement",
      paket_id: "paket-intensif-skd",
      nominalHarapanIdr: 49000,
    });
    assert.equal(terimaValid.sah, true);
    assert.equal(terimaValid.statusTransaksi, "lunas");
    assert.equal(terimaValid.tingkatAktifBaru, "intensif_skd");

    const envAsli = process.env.NODE_ENV;
    const keyAsli = process.env.MIDTRANS_SERVER_KEY;
    try {
      (process.env as Record<string, string | undefined>).NODE_ENV = "production";
      delete process.env.MIDTRANS_SERVER_KEY;

      assert.equal(dapatkanMidtransServerKey(), null);
      const tolakProduksiKosong = verifikasiWebhookPembayaran({
        order_id: "ORD-TEST-001",
        status_code: "200",
        gross_amount: "49000.00",
        signature_key: sigValid,
        transaction_status: "settlement",
        paket_id: "paket-intensif-skd",
        nominalHarapanIdr: 49000,
      });
      assert.equal(tolakProduksiKosong.sah, false);
    } finally {
      (process.env as Record<string, string | undefined>).NODE_ENV = envAsli;
      if (keyAsli !== undefined) {
        process.env.MIDTRANS_SERVER_KEY = keyAsli;
      } else {
        delete process.env.MIDTRANS_SERVER_KEY;
      }
    }
  });

  it("mengelola pendaftaran akun peserta, verifikasi sandi, sesi HMAC, pembaruan paket, dan kuota AI harian server", async () => {
    const dirSementara = fs.mkdtempSync(path.join(os.tmpdir(), "lolos-cpns-p0-"));
    const pathAkun = path.join(dirSementara, "user-accounts.json");
    const pathStore = path.join(dirSementara, "commercial-store.json");

    try {
      const daftar = await daftarPesertaBaru({
        email: "calon.asn@contoh.id",
        namaLengkap: "Budi Santoso",
        kataSandi: "SandiKuat123!",
        pathKustom: pathAkun,
      });
      assert.equal(daftar.berhasil, true);
      assert.ok(daftar.tokenSesi);
      assert.ok(daftar.profil);
      assert.equal(daftar.profil.tingkat_langganan, "gratis");

      const payloadSesi = verifikasiTokenSesiPeserta(daftar.tokenSesi);
      assert.ok(payloadSesi);
      assert.equal(payloadSesi.email, "calon.asn@contoh.id");

      const duplikat = await daftarPesertaBaru({
        email: "CALON.ASN@contoh.id",
        namaLengkap: "Duplikat",
        kataSandi: "SandiKuat123!",
        pathKustom: pathAkun,
      });
      assert.equal(duplikat.berhasil, false);

      const loginSalah = await verifikasiLoginPeserta({
        email: "calon.asn@contoh.id",
        kataSandi: "SalahSandi!",
        pathKustom: pathAkun,
      });
      assert.equal(loginSalah.berhasil, false);

      const loginBenar = await verifikasiLoginPeserta({
        email: "calon.asn@contoh.id",
        kataSandi: "SandiKuat123!",
        pathKustom: pathAkun,
      });
      assert.equal(loginBenar.berhasil, true);

      const profilBaru = await perbaruiTingkatLanggananPeserta({
        userId: daftar.profil.id,
        tingkatBaru: "terpadu_cpns",
        pathKustom: pathAkun,
      });
      assert.ok(profilBaru);
      assert.equal(profilBaru.tingkat_langganan, "terpadu_cpns");

      const awal = await bacaPemakaianAIHariIni(`user:${daftar.profil.id}`, pathStore);
      assert.equal(awal, 0);
      const sesudah1 = await tambahPemakaianAIHariIni(
        `user:${daftar.profil.id}`,
        pathStore
      );
      const sesudah2 = await tambahPemakaianAIHariIni(
        `user:${daftar.profil.id}`,
        pathStore
      );
      assert.equal(sesudah1, 1);
      assert.equal(sesudah2, 2);
      assert.equal(
        await bacaPemakaianAIHariIni(`user:${daftar.profil.id}`, pathStore),
        2
      );
    } finally {
      fs.rmSync(dirSementara, { recursive: true, force: true });
    }
  });

  it("menolak berkas unggahan admin yang melebihi 15 MB atau format non-dokumen resmi", () => {
    const berkasBesar = new File(
      [new Uint8Array(BATAS_UNGGAH_BERKAS_BYTES + 1)],
      "regulasi-raksasa.pdf",
      { type: "application/pdf" }
    );
    const tolakBesar = validasiBerkasUnggahanAdmin(berkasBesar, {
      hanyaPdf: true,
    });
    assert.equal(tolakBesar.sah, false);
    if (!tolakBesar.sah) {
      assert.equal(tolakBesar.status, 413);
    }

    const berkasExe = new File([new Uint8Array(64)], "berbahaya.exe", {
      type: "application/x-msdownload",
    });
    const tolakExe = validasiBerkasUnggahanAdmin(berkasExe, {
      hanyaPdf: false,
    });
    assert.equal(tolakExe.sah, false);

    const berkasPdfSah = new File([new Uint8Array(128)], "kepmenpan-321.pdf", {
      type: "application/pdf",
    });
    const terimaPdf = validasiBerkasUnggahanAdmin(berkasPdfSah, {
      hanyaPdf: true,
    });
    assert.equal(terimaPdf.sah, true);
  });

  it("melaporkan kesiapan konfigurasi pada pemeriksa kesehatan layanan tanpa membocorkan nilai rahasia", async () => {
    const hasilDev = await periksaKesehatanLayanan();
    assert.equal(hasilDev.statusHttp, 200);
    assert.equal(hasilDev.muatan.status, "mode_pengembangan");

    const envAsli = process.env.NODE_ENV;
    const rahasiaUji = "RahasiaPanjangUntukMengujiBahwaNilaiIniTidakPernahBocor";
    const sessionAsli = process.env.USER_SESSION_SECRET;
    try {
      (process.env as Record<string, string | undefined>).NODE_ENV = "production";
      process.env.USER_SESSION_SECRET = rahasiaUji;
      delete process.env.ADMIN_SESSION_SECRET;

      const hasilProd = await periksaKesehatanLayanan();
      assert.equal(hasilProd.statusHttp, 503);
      assert.equal(hasilProd.muatan.status, "belum_siap");
      assert.equal(hasilProd.muatan.konfigurasi.user_session_secret_siap, true);
      assert.equal(hasilProd.muatan.konfigurasi.admin_session_secret_siap, false);

      const teksJson = JSON.stringify(hasilProd.muatan);
      assert.equal(teksJson.includes(rahasiaUji), false);
    } finally {
      (process.env as Record<string, string | undefined>).NODE_ENV = envAsli;
      if (sessionAsli !== undefined) {
        process.env.USER_SESSION_SECRET = sessionAsli;
      } else {
        delete process.env.USER_SESSION_SECRET;
      }
    }
  });
});
