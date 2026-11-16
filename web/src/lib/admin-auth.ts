/**
 * Modul Autentikasi & Manajemen Multi-Admin Panel (Server-Only) — LOLOS CPNS.
 *
 * Fitur:
 * - Penyimpanan aman kata sandi menggunakan `scryptSync` + garam acak per akun (`node:crypto`).
 * - Token sesi `httpOnly` bertanda tangan HMAC-SHA256.
 * - Menggunakan tabel `admin_accounts` di Supabase sebagai sumber kebenaran di produksi
 *   (fail-closed apabila Supabase atau `ADMIN_SESSION_SECRET` belum dikonfigurasi),
 *   serta berkas lokal `.data/admin-accounts.json` khusus untuk mode pengembangan.
 * - Akun Administrator Utama awal menggunakan ID UUID deterministik agar konsisten di PostgreSQL.
 *
 * Seluruh pesan kesalahan dan validasi menggunakan Bahasa Indonesia yang baik dan benar.
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { apakahKonfigurasiSupabaseValid } from "./supabase.ts";

export type PeranAkunAdmin = "admin_utama" | "admin";

export interface DataAkunAdminTersimpan {
  id: string;
  username: string;
  nama_lengkap: string;
  peran: PeranAkunAdmin;
  password_hash: string;
  dibuat_oleh: string;
  created_at: string;
}

export interface ProfilAkunAdminPublik {
  id: string;
  username: string;
  nama_lengkap: string;
  peran: PeranAkunAdmin;
  dibuat_oleh: string;
  created_at: string;
}

export interface PayloadSesiAdmin {
  id: string;
  username: string;
  nama_lengkap: string;
  peran: PeranAkunAdmin;
  exp: number;
}

export const NAMA_COOKIE_SESI_ADMIN = "lolos_cpns_sesi_admin";
export const ID_TETAP_ADMIN_UTAMA = "00000000-0000-4000-8000-000000000001";
export const USERNAME_TETAP_ADMIN_UTAMA = "admin";
const SANDI_DEV_BAWAAN_ADMIN = "Admin123!";
const DURASI_SESI_MS = 30 * 24 * 60 * 60 * 1000; // 30 hari persisten

function dapatkanPathBerkasLokal(pathKustom?: string): string {
  if (pathKustom) return pathKustom;
  return path.join(process.cwd(), ".data", "admin-accounts.json");
}

function apakahSupabaseTersedia(): boolean {
  return apakahKonfigurasiSupabaseValid();
}

// ==============================================================================
// HASHING KATA SANDI (SCRYPT + TIMING-SAFE EQUAL)
// ==============================================================================
export function hashKataSandiAdmin(kataSandi: string): string {
  const garam = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(kataSandi, garam, 64).toString("hex");
  return `${garam}:${hash}`;
}

export function verifikasiKataSandiAdmin(
  kataSandi: string,
  hashTersimpan: string
): boolean {
  const bagian = (hashTersimpan || "").split(":");
  if (bagian.length !== 2) return false;
  const [garam, hashHex] = bagian;
  if (!garam || !hashHex) return false;

  const kunciDihitung = crypto.scryptSync(kataSandi, garam, 64);
  const kunciAsli = Buffer.from(hashHex, "hex");
  if (kunciDihitung.length !== kunciAsli.length) return false;

  return crypto.timingSafeEqual(kunciDihitung, kunciAsli);
}

// ==============================================================================
// TOKEN SESI HMAC-SHA256 UNTUK COOKIE HTTPONLY
// ==============================================================================
function dapatkanKunciRahasiaSesi(): string {
  const rahasiaEksplisit = (process.env.ADMIN_SESSION_SECRET || "").trim();
  const adalahPlaceholder =
    !rahasiaEksplisit ||
    rahasiaEksplisit.length < 32 ||
    rahasiaEksplisit.includes("ganti_kunci_rahasia");

  if (!adalahPlaceholder) {
    return rahasiaEksplisit;
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "Variabel lingkungan ADMIN_SESSION_SECRET wajib diatur (minimal 32 karakter acak) di lingkungan produksi."
    );
  }

  return "kunci_lokal_sesi_admin_lolos_cpns_2026_persisten";
}

export function buatTokenSesiAdmin(profil: ProfilAkunAdminPublik): string {
  const payload: PayloadSesiAdmin = {
    id: profil.id,
    username: profil.username,
    nama_lengkap: profil.nama_lengkap,
    peran: profil.peran,
    exp: Date.now() + DURASI_SESI_MS,
  };
  const payloadBase64 = Buffer.from(JSON.stringify(payload), "utf8").toString(
    "base64url"
  );
  const tandaTangan = crypto
    .createHmac("sha256", dapatkanKunciRahasiaSesi())
    .update(payloadBase64)
    .digest("base64url");
  return `${payloadBase64}.${tandaTangan}`;
}

export function verifikasiTokenSesiAdmin(
  token?: string | null
): PayloadSesiAdmin | null {
  if (!token || !token.includes(".")) return null;
  const [payloadBase64, tandaTanganDiterima] = token.split(".");
  if (!payloadBase64 || !tandaTanganDiterima) return null;

  let kunciRahasia: string;
  try {
    kunciRahasia = dapatkanKunciRahasiaSesi();
  } catch {
    return null;
  }

  const tandaTanganHarapan = crypto
    .createHmac("sha256", kunciRahasia)
    .update(payloadBase64)
    .digest("base64url");

  const bufDiterima = Buffer.from(tandaTanganDiterima, "utf8");
  const bufHarapan = Buffer.from(tandaTanganHarapan, "utf8");
  if (bufDiterima.length !== bufHarapan.length) return null;
  if (!crypto.timingSafeEqual(bufDiterima, bufHarapan)) return null;

  try {
    const payload = JSON.parse(
      Buffer.from(payloadBase64, "base64url").toString("utf8")
    ) as PayloadSesiAdmin;
    if (!payload.exp || Date.now() > payload.exp) return null;
    if (!payload.id || !payload.username) return null;
    return payload;
  } catch {
    return null;
  }
}

export function ekstrakSesiDariHeaderCookie(
  headerCookie: string | null | undefined
): PayloadSesiAdmin | null {
  if (!headerCookie) return null;
  const pasangan = headerCookie.split(";").map((item) => item.trim());
  for (const p of pasangan) {
    const indeksSamaDengan = p.indexOf("=");
    if (indeksSamaDengan === -1) continue;
    const nama = p.slice(0, indeksSamaDengan).trim();
    const nilai = p.slice(indeksSamaDengan + 1).trim();
    if (nama === NAMA_COOKIE_SESI_ADMIN) {
      try {
        return verifikasiTokenSesiAdmin(decodeURIComponent(nilai));
      } catch {
        return null;
      }
    }
  }
  return null;
}

// ==============================================================================
// PENYIMPANAN & OPERASI MULTI-ADMIN (INISIALISASI AWAL, TAMBAH, HAPUS, LOGIN)
// ==============================================================================
const memoriSementaraMap = new Map<string, DataAkunAdminTersimpan[]>();

function pastikanLingkunganPenyimpananAdminSiap(pathKustom?: string): void {
  if (
    !pathKustom &&
    process.env.NODE_ENV === "production" &&
    !apakahSupabaseTersedia()
  ) {
    throw new Error(
      "Basis data produksi Supabase (NEXT_PUBLIC_SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY) wajib terkonfigurasi untuk manajemen akun admin."
    );
  }
}

function buatAkunAdminAwalBootstrap(): DataAkunAdminTersimpan {
  const usernameAwal = (
    process.env.ADMIN_BOOTSTRAP_USERNAME || USERNAME_TETAP_ADMIN_UTAMA
  )
    .trim()
    .toLowerCase();
  const envKataSandi = (process.env.ADMIN_BOOTSTRAP_PASSWORD || "").trim();
  const kataSandiValid =
    envKataSandi.length >= 8 && !envKataSandi.includes("ganti_kata_sandi");

  if (!kataSandiValid && process.env.NODE_ENV === "production") {
    throw new Error(
      "Variabel lingkungan ADMIN_BOOTSTRAP_PASSWORD wajib diatur (minimal 8 karakter) di lingkungan produksi."
    );
  }

  const kataSandiAwal = kataSandiValid ? envKataSandi : SANDI_DEV_BAWAAN_ADMIN;

  return {
    id: ID_TETAP_ADMIN_UTAMA,
    username: usernameAwal || USERNAME_TETAP_ADMIN_UTAMA,
    nama_lengkap: "Administrator Utama",
    peran: "admin_utama",
    password_hash: hashKataSandiAdmin(kataSandiAwal),
    dibuat_oleh: "sistem",
    created_at: "2026-01-01T00:00:00.000Z",
  };
}

function bacaSemuaAkunLokal(pathKustom?: string): DataAkunAdminTersimpan[] {
  const pathBerkas = dapatkanPathBerkasLokal(pathKustom);

  try {
    if (fs.existsSync(pathBerkas)) {
      const mentah = fs.readFileSync(pathBerkas, "utf8");
      const daftar = JSON.parse(mentah) as DataAkunAdminTersimpan[];
      if (Array.isArray(daftar) && daftar.length > 0) {
        memoriSementaraMap.set(pathBerkas, daftar);
        return daftar;
      }
    }
  } catch {
    // Gunakan cache memori apabila berkas tidak dapat dibaca
  }

  const diMemori = memoriSementaraMap.get(pathBerkas);
  if (diMemori && diMemori.length > 0) {
    return diMemori;
  }

  const daftarAwal = [buatAkunAdminAwalBootstrap()];
  simpanSemuaAkunLokal(daftarAwal, pathKustom);
  return daftarAwal;
}

function simpanSemuaAkunLokal(
  daftar: DataAkunAdminTersimpan[],
  pathKustom?: string
): void {
  const pathBerkas = dapatkanPathBerkasLokal(pathKustom);
  memoriSementaraMap.set(pathBerkas, daftar);

  try {
    const direktori = path.dirname(pathBerkas);
    if (!fs.existsSync(direktori)) {
      fs.mkdirSync(direktori, { recursive: true });
    }
    fs.writeFileSync(pathBerkas, JSON.stringify(daftar, null, 2), "utf8");
  } catch {
    // Pada lingkungan baca-saja tanpa disk persisten, tetap bertahan di memori
  }
}

function keProfilPublik(
  akun: DataAkunAdminTersimpan
): ProfilAkunAdminPublik {
  return {
    id: akun.id,
    username: akun.username,
    nama_lengkap: akun.nama_lengkap,
    peran: akun.peran,
    dibuat_oleh: akun.dibuat_oleh,
    created_at: akun.created_at,
  };
}

async function bacaSemuaAkun(
  pathKustom?: string
): Promise<DataAkunAdminTersimpan[]> {
  pastikanLingkunganPenyimpananAdminSiap(pathKustom);

  if (!pathKustom && apakahSupabaseTersedia()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { data, error } = await supabase
      .from("admin_accounts")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      if (process.env.NODE_ENV === "production") {
        throw new Error(
          `Gagal membaca daftar akun admin dari basis data: ${error.message}`
        );
      }
    } else if (Array.isArray(data)) {
      if (data.length === 0) {
        const akunAwal = buatAkunAdminAwalBootstrap();
        const { data: tersisip, error: errSisip } = await supabase
          .from("admin_accounts")
          .insert(akunAwal)
          .select("*")
          .single();
        if (!errSisip && tersisip) {
          return [tersisip as DataAkunAdminTersimpan];
        }
        const { data: ulang } = await supabase
          .from("admin_accounts")
          .select("*")
          .order("created_at", { ascending: true });
        if (Array.isArray(ulang) && ulang.length > 0) {
          return ulang as DataAkunAdminTersimpan[];
        }
        if (process.env.NODE_ENV === "production") {
          throw new Error(
            `Gagal menginisialisasi akun admin awal di basis data: ${
              errSisip?.message || "Kesalahan tidak diketahui"
            }`
          );
        }
      } else {
        return data as DataAkunAdminTersimpan[];
      }
    }
  }

  return bacaSemuaAkunLokal(pathKustom);
}

export function periksaHakAksesManajemenAdmin(parameter: {
  peranPelaku: PeranAkunAdmin;
  idPelaku: string;
  aksi: "tambah" | "ubah_sandi" | "hapus";
  idTarget?: string;
}): { diizinkan: boolean; pesan?: string } {
  if (parameter.peranPelaku === "admin_utama") {
    return { diizinkan: true };
  }

  if (
    parameter.aksi === "ubah_sandi" &&
    parameter.idTarget &&
    parameter.idTarget === parameter.idPelaku
  ) {
    return { diizinkan: true };
  }

  return {
    diizinkan: false,
    pesan:
      "Akses ditolak: Hanya Administrator Utama (admin_utama) yang berwenang menambah, menghapus, atau mengubah kata sandi akun admin lain.",
  };
}

export async function bacaDaftarAkunAdminPublik(
  pathKustom?: string
): Promise<ProfilAkunAdminPublik[]> {
  const daftar = await bacaSemuaAkun(pathKustom);
  return daftar.map(keProfilPublik);
}

export async function verifikasiLoginAdmin(parameter: {
  username: string;
  kataSandi: string;
  pathKustom?: string;
}): Promise<{
  berhasil: boolean;
  pesan: string;
  profil?: ProfilAkunAdminPublik;
  tokenSesi?: string;
}> {
  const usernameBersih = (parameter.username || "").trim().toLowerCase();
  const kataSandi = parameter.kataSandi || "";

  if (!usernameBersih || !kataSandi) {
    return {
      berhasil: false,
      pesan: "Username dan kata sandi wajib diisi.",
    };
  }

  const daftar = await bacaSemuaAkun(parameter.pathKustom);
  const akun = daftar.find((item) => item.username === usernameBersih);

  if (!akun || !verifikasiKataSandiAdmin(kataSandi, akun.password_hash)) {
    return {
      berhasil: false,
      pesan: "Username atau kata sandi admin tidak sesuai.",
    };
  }

  const profil = keProfilPublik(akun);
  const tokenSesi = buatTokenSesiAdmin(profil);

  return {
    berhasil: true,
    pesan: `Berhasil masuk ke Menu Admin sebagai "${profil.username}".`,
    profil,
    tokenSesi,
  };
}

export async function tambahAkunAdmin(parameter: {
  username: string;
  kataSandi: string;
  namaLengkap?: string;
  peran?: PeranAkunAdmin;
  dibuatOleh: string;
  pathKustom?: string;
}): Promise<{
  berhasil: boolean;
  pesan: string;
  akunBaru?: ProfilAkunAdminPublik;
}> {
  const usernameBersih = (parameter.username || "").trim().toLowerCase();
  const kataSandi = parameter.kataSandi || "";
  const namaLengkap =
    (parameter.namaLengkap || "").trim() || usernameBersih;
  const peran: PeranAkunAdmin =
    parameter.peran === "admin_utama" ? "admin_utama" : "admin";

  if (!/^[a-z0-9._-]{3,32}$/.test(usernameBersih)) {
    return {
      berhasil: false,
      pesan:
        "Username admin harus terdiri dari 3–32 karakter (huruf kecil, angka, titik, garis bawah, atau tanda hubung tanpa spasi).",
    };
  }

  if (kataSandi.length < 6) {
    return {
      berhasil: false,
      pesan: "Kata sandi admin minimal harus terdiri dari 6 karakter.",
    };
  }

  const daftarSaatIni = await bacaSemuaAkun(parameter.pathKustom);
  if (daftarSaatIni.some((a) => a.username === usernameBersih)) {
    return {
      berhasil: false,
      pesan: `Username "${usernameBersih}" sudah terdaftar. Gunakan username admin lainnya.`,
    };
  }

  const entriBaru: DataAkunAdminTersimpan = {
    id: crypto.randomUUID(),
    username: usernameBersih,
    nama_lengkap: namaLengkap,
    peran,
    password_hash: hashKataSandiAdmin(kataSandi),
    dibuat_oleh: parameter.dibuatOleh,
    created_at: new Date().toISOString(),
  };

  if (!parameter.pathKustom && apakahSupabaseTersedia()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { error } = await supabase.from("admin_accounts").insert(entriBaru);
    if (error) {
      if (process.env.NODE_ENV === "production") {
        throw new Error(`Gagal menyimpan akun admin ke basis data: ${error.message}`);
      }
    } else {
      return {
        berhasil: true,
        pesan: `Akun admin "${entriBaru.username}" berhasil ditambahkan.`,
        akunBaru: keProfilPublik(entriBaru),
      };
    }
  }

  const daftarTerbaru = [...daftarSaatIni, entriBaru];
  simpanSemuaAkunLokal(daftarTerbaru, parameter.pathKustom);

  return {
    berhasil: true,
    pesan: `Akun admin "${entriBaru.username}" berhasil ditambahkan.`,
    akunBaru: keProfilPublik(entriBaru),
  };
}

export async function ubahKataSandiAkunAdmin(parameter: {
  idTarget: string;
  kataSandiBaru: string;
  pathKustom?: string;
}): Promise<{
  berhasil: boolean;
  pesan: string;
}> {
  const kataSandiBaru = parameter.kataSandiBaru || "";
  if (kataSandiBaru.length < 6) {
    return {
      berhasil: false,
      pesan: "Kata sandi baru minimal harus terdiri dari 6 karakter.",
    };
  }

  const daftar = await bacaSemuaAkun(parameter.pathKustom);
  const target = daftar.find((a) => a.id === parameter.idTarget);
  if (!target) {
    return {
      berhasil: false,
      pesan: "Akun admin yang dipilih tidak ditemukan.",
    };
  }

  const hashBaru = hashKataSandiAdmin(kataSandiBaru);

  if (!parameter.pathKustom && apakahSupabaseTersedia()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { error } = await supabase
      .from("admin_accounts")
      .update({ password_hash: hashBaru, dibuat_oleh: "diperbarui_manual" })
      .eq("id", parameter.idTarget);
    if (error) {
      if (process.env.NODE_ENV === "production") {
        throw new Error(`Gagal memperbarui kata sandi admin: ${error.message}`);
      }
    } else {
      return {
        berhasil: true,
        pesan: `Kata sandi untuk akun "${target.username}" berhasil diperbarui.`,
      };
    }
  }

  const daftarTerbaru = daftar.map((item) =>
    item.id === parameter.idTarget
      ? { ...item, password_hash: hashBaru, dibuat_oleh: "diperbarui_manual" }
      : item
  );
  simpanSemuaAkunLokal(daftarTerbaru, parameter.pathKustom);

  return {
    berhasil: true,
    pesan: `Kata sandi untuk akun "${target.username}" berhasil diperbarui.`,
  };
}

export async function hapusAkunAdmin(parameter: {
  idTarget: string;
  idPelaku: string;
  pathKustom?: string;
}): Promise<{
  berhasil: boolean;
  pesan: string;
}> {
  const daftar = await bacaSemuaAkun(parameter.pathKustom);
  const target = daftar.find((a) => a.id === parameter.idTarget);

  if (!target) {
    return {
      berhasil: false,
      pesan: "Akun admin yang akan dihapus tidak ditemukan.",
    };
  }

  if (daftar.length <= 1) {
    return {
      berhasil: false,
      pesan:
        "Tidak dapat menghapus akun terakhir. Minimal harus ada 1 akun admin aktif.",
    };
  }

  if (target.id === parameter.idPelaku) {
    return {
      berhasil: false,
      pesan:
        "Anda tidak dapat menghapus akun admin yang sedang digunakan untuk login saat ini.",
    };
  }

  if (!parameter.pathKustom && apakahSupabaseTersedia()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { error } = await supabase
      .from("admin_accounts")
      .delete()
      .eq("id", parameter.idTarget);
    if (error) {
      if (process.env.NODE_ENV === "production") {
        throw new Error(`Gagal menghapus akun admin dari basis data: ${error.message}`);
      }
    } else {
      return {
        berhasil: true,
        pesan: `Akun admin "${target.username}" berhasil dihapus dari sistem.`,
      };
    }
  }

  const daftarTerbaru = daftar.filter((a) => a.id !== parameter.idTarget);
  simpanSemuaAkunLokal(daftarTerbaru, parameter.pathKustom);

  return {
    berhasil: true,
    pesan: `Akun admin "${target.username}" berhasil dihapus dari sistem.`,
  };
}
