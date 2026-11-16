import { describe, it, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  bacaDaftarAkunAdminPublik,
  ekstrakSesiDariHeaderCookie,
  hapusAkunAdmin,
  NAMA_COOKIE_SESI_ADMIN,
  tambahAkunAdmin,
  ubahKataSandiAkunAdmin,
  verifikasiLoginAdmin,
  verifikasiTokenSesiAdmin,
} from "../admin-auth.ts";

describe("Sistem Autentikasi & Manajemen Multi-Admin Panel", () => {
  const direktoriUji = fs.mkdtempSync(
    path.join(os.tmpdir(), "lolos-cpns-admin-test-")
  );
  const pathStoreUji = path.join(direktoriUji, "admin-accounts.json");

  after(() => {
    fs.rmSync(direktoriUji, { recursive: true, force: true });
  });

  it("menginisialisasi akun admin awal dan memverifikasi login + token sesi HMAC", async () => {
    const daftarAwal = await bacaDaftarAkunAdminPublik(pathStoreUji);
    assert.equal(daftarAwal.length, 1);
    assert.equal(daftarAwal[0].username, "admin");

    const gagal = await verifikasiLoginAdmin({
      username: "admin",
      kataSandi: "sandi_salah",
      pathKustom: pathStoreUji,
    });
    assert.equal(gagal.berhasil, false);

    const sukses = await verifikasiLoginAdmin({
      username: "admin",
      kataSandi: "Admin123!",
      pathKustom: pathStoreUji,
    });
    assert.equal(sukses.berhasil, true);
    assert.ok(sukses.tokenSesi);

    const sesiTerverifikasi = verifikasiTokenSesiAdmin(sukses.tokenSesi);
    assert.equal(sesiTerverifikasi?.username, "admin");

    const sesiDariCookie = ekstrakSesiDariHeaderCookie(
      `${NAMA_COOKIE_SESI_ADMIN}=${encodeURIComponent(sukses.tokenSesi!)}`
    );
    assert.equal(sesiDariCookie?.username, "admin");
  });

  it("menambahkan admin1 & admin2, mengubah kata sandi, menolak duplikasi, dan memproteksi penghapusan akun aktif/terakhir", async () => {
    const daftarAwal = await bacaDaftarAkunAdminPublik(pathStoreUji);
    const adminUtama = daftarAwal[0];

    const tambah1 = await tambahAkunAdmin({
      username: "admin1",
      kataSandi: "sandiAdmin1",
      namaLengkap: "Admin Kurator 1",
      peran: "admin",
      dibuatOleh: adminUtama.username,
      pathKustom: pathStoreUji,
    });
    assert.equal(tambah1.berhasil, true);
    assert.equal(tambah1.akunBaru?.username, "admin1");

    const tambah2 = await tambahAkunAdmin({
      username: "admin2",
      kataSandi: "sandiAdmin2",
      namaLengkap: "Admin Kurator 2",
      peran: "admin",
      dibuatOleh: adminUtama.username,
      pathKustom: pathStoreUji,
    });
    assert.equal(tambah2.berhasil, true);

    const duplikat = await tambahAkunAdmin({
      username: "admin1",
      kataSandi: "sandiLain123",
      dibuatOleh: adminUtama.username,
      pathKustom: pathStoreUji,
    });
    assert.equal(duplikat.berhasil, false);
    assert.ok(duplikat.pesan.includes("sudah terdaftar"));

    // Login menggunakan admin1 yang baru ditambahkan
    const loginAdmin1 = await verifikasiLoginAdmin({
      username: "admin1",
      kataSandi: "sandiAdmin1",
      pathKustom: pathStoreUji,
    });
    assert.equal(loginAdmin1.berhasil, true);

    // Ubah kata sandi admin2 dan pastikan kata sandi baru bekerja
    const ubahSandi = await ubahKataSandiAkunAdmin({
      idTarget: tambah2.akunBaru!.id,
      kataSandiBaru: "sandiBaruAdmin2",
      pathKustom: pathStoreUji,
    });
    assert.equal(ubahSandi.berhasil, true);

    const loginAdmin2Baru = await verifikasiLoginAdmin({
      username: "admin2",
      kataSandi: "sandiBaruAdmin2",
      pathKustom: pathStoreUji,
    });
    assert.equal(loginAdmin2Baru.berhasil, true);

    // Blokir penghapusan akun yang sedang dipakai login
    const hapusDiri = await hapusAkunAdmin({
      idTarget: adminUtama.id,
      idPelaku: adminUtama.id,
      pathKustom: pathStoreUji,
    });
    assert.equal(hapusDiri.berhasil, false);

    // Izinkan menghapus admin2 oleh adminUtama
    const hapusAdmin2 = await hapusAkunAdmin({
      idTarget: tambah2.akunBaru!.id,
      idPelaku: adminUtama.id,
      pathKustom: pathStoreUji,
    });
    assert.equal(hapusAdmin2.berhasil, true);

    const daftarAkhir = await bacaDaftarAkunAdminPublik(pathStoreUji);
    assert.equal(daftarAkhir.length, 2);

    // Ubah kata sandi admin utama dan pastikan sandi lama tidak lagi diterima (tanpa backdoor statis)
    const ubahUtama = await ubahKataSandiAkunAdmin({
      idTarget: adminUtama.id,
      kataSandiBaru: "SandiUtamaBaru99!",
      pathKustom: pathStoreUji,
    });
    assert.equal(ubahUtama.berhasil, true);

    const loginSandiLama = await verifikasiLoginAdmin({
      username: "admin",
      kataSandi: "Admin123!",
      pathKustom: pathStoreUji,
    });
    assert.equal(loginSandiLama.berhasil, false);

    const loginSandiBaru = await verifikasiLoginAdmin({
      username: "admin",
      kataSandi: "SandiUtamaBaru99!",
      pathKustom: pathStoreUji,
    });
    assert.equal(loginSandiBaru.berhasil, true);
  });
});
