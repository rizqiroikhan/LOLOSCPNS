/**
 * Modul Autentikasi & Manajemen Akun Peserta Komersial (Server-Only) — LOLOS CPNS.
 *
 * Menggantikan penyimpanan paket berbasis `localStorage` dengan akun peserta resmi:
 * - Kata sandi di-hash menggunakan `scryptSync` + garam unik per akun.
 * - Sesi disimpan melalui cookie `httpOnly` bertanda tangan HMAC-SHA256 (`lolos_cpns_sesi_peserta`).
 * - Status `tingkat_langganan` selalu dibaca otoritatif dari server (Supabase / store).
 * - Fail-closed di mode produksi (`NODE_ENV === "production"`).
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { TingkatLanggananPeserta } from "./access-control.ts";
import { apakahKonfigurasiSupabaseValid } from "./supabase.ts";

export interface DataAkunPesertaTersimpan {
  id: string;
  email: string;
  nama_lengkap: string;
  password_hash: string;
  tingkat_langganan: TingkatLanggananPeserta;
  aktif_hingga: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProfilAkunPesertaPublik {
  id: string;
  email: string;
  nama_lengkap: string;
  tingkat_langganan: TingkatLanggananPeserta;
  aktif_hingga: string | null;
  created_at: string;
}

export interface PayloadSesiPeserta {
  id: string;
  email: string;
  exp: number;
}

export const NAMA_COOKIE_SESI_PESERTA = "lolos_cpns_sesi_peserta";
const DURASI_SESI_PESERTA_MS = 7 * 24 * 60 * 60 * 1000; // 7 hari

const memoriPesertaMap = new Map<string, DataAkunPesertaTersimpan[]>();

function dapatkanPathBerkasPeserta(pathKustom?: string): string {
  if (pathKustom) return pathKustom;
  return path.join(process.cwd(), ".data", "user-accounts.json");
}

function apakahSupabaseTersediaUntukPeserta(): boolean {
  return apakahKonfigurasiSupabaseValid();
}

function pastikanLingkunganPenyimpananPesertaSiap(pathKustom?: string): void {
  if (
    !pathKustom &&
    process.env.NODE_ENV === "production" &&
    !apakahSupabaseTersediaUntukPeserta()
  ) {
    throw new Error(
      "Basis data produksi Supabase (NEXT_PUBLIC_SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY) wajib terkonfigurasi untuk akun peserta."
    );
  }
}

function dapatkanKunciRahasiaSesiPeserta(): string {
  const rahasiaEksplisit = (process.env.USER_SESSION_SECRET || "").trim();
  const adalahPlaceholder =
    !rahasiaEksplisit ||
    rahasiaEksplisit.length < 32 ||
    rahasiaEksplisit.includes("ganti_kunci_rahasia");

  if (!adalahPlaceholder) {
    return rahasiaEksplisit;
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "Variabel lingkungan USER_SESSION_SECRET wajib diatur (minimal 32 karakter acak) di lingkungan produksi."
    );
  }

  return "kunci_pengembangan_lokal_sesi_peserta_lolos_cpns_2026";
}

function hashKataSandiPeserta(kataSandi: string): string {
  const garam = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(kataSandi, garam, 64).toString("hex");
  return `${garam}:${hash}`;
}

function verifikasiKataSandiPeserta(
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

function keProfilPublikPeserta(
  akun: DataAkunPesertaTersimpan
): ProfilAkunPesertaPublik {
  return {
    id: akun.id,
    email: akun.email,
    nama_lengkap: akun.nama_lengkap,
    tingkat_langganan: akun.tingkat_langganan,
    aktif_hingga: akun.aktif_hingga,
    created_at: akun.created_at,
  };
}

function bacaSemuaPesertaLokal(pathKustom?: string): DataAkunPesertaTersimpan[] {
  const pathBerkas = dapatkanPathBerkasPeserta(pathKustom);
  try {
    if (fs.existsSync(pathBerkas)) {
      const mentah = fs.readFileSync(pathBerkas, "utf8");
      const daftar = JSON.parse(mentah) as DataAkunPesertaTersimpan[];
      if (Array.isArray(daftar)) {
        memoriPesertaMap.set(pathBerkas, daftar);
        return daftar;
      }
    }
  } catch {
    // Abaikan dan gunakan cache memori
  }
  return memoriPesertaMap.get(pathBerkas) || [];
}

function simpanSemuaPesertaLokal(
  daftar: DataAkunPesertaTersimpan[],
  pathKustom?: string
): void {
  const pathBerkas = dapatkanPathBerkasPeserta(pathKustom);
  memoriPesertaMap.set(pathBerkas, daftar);
  try {
    const direktori = path.dirname(pathBerkas);
    if (!fs.existsSync(direktori)) {
      fs.mkdirSync(direktori, { recursive: true });
    }
    fs.writeFileSync(pathBerkas, JSON.stringify(daftar, null, 2), "utf8");
  } catch {
    // Abaikan jika filesystem baca-saja
  }
}

export function buatTokenSesiPeserta(profil: {
  id: string;
  email: string;
}): string {
  const payload: PayloadSesiPeserta = {
    id: profil.id,
    email: profil.email,
    exp: Date.now() + DURASI_SESI_PESERTA_MS,
  };
  const payloadBase64 = Buffer.from(JSON.stringify(payload), "utf8").toString(
    "base64url"
  );
  const tandaTangan = crypto
    .createHmac("sha256", dapatkanKunciRahasiaSesiPeserta())
    .update(payloadBase64)
    .digest("base64url");
  return `${payloadBase64}.${tandaTangan}`;
}

export function verifikasiTokenSesiPeserta(
  token?: string | null
): PayloadSesiPeserta | null {
  if (!token || !token.includes(".")) return null;
  const [payloadBase64, tandaTanganDiterima] = token.split(".");
  if (!payloadBase64 || !tandaTanganDiterima) return null;

  let kunciRahasia: string;
  try {
    kunciRahasia = dapatkanKunciRahasiaSesiPeserta();
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
    ) as PayloadSesiPeserta;
    if (!payload.exp || Date.now() > payload.exp) return null;
    if (!payload.id || !payload.email) return null;
    return payload;
  } catch {
    return null;
  }
}

async function cariPesertaBerdasarkanEmail(
  emailBersih: string,
  pathKustom?: string
): Promise<DataAkunPesertaTersimpan | null> {
  pastikanLingkunganPenyimpananPesertaSiap(pathKustom);

  if (!pathKustom && apakahSupabaseTersediaUntukPeserta()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { data, error } = await supabase
      .from("user_accounts")
      .select("*")
      .eq("email", emailBersih)
      .maybeSingle();

    if (error) {
      if (process.env.NODE_ENV === "production") {
        throw new Error(`Gagal membaca akun peserta: ${error.message}`);
      }
    } else {
      return (data as DataAkunPesertaTersimpan | null) ?? null;
    }
  }

  const daftar = bacaSemuaPesertaLokal(pathKustom);
  return daftar.find((u) => u.email === emailBersih) || null;
}

export async function cariPesertaBerdasarkanId(
  userId: string,
  pathKustom?: string
): Promise<ProfilAkunPesertaPublik | null> {
  pastikanLingkunganPenyimpananPesertaSiap(pathKustom);

  if (!pathKustom && apakahSupabaseTersediaUntukPeserta()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { data, error } = await supabase
      .from("user_accounts")
      .select("*")
      .eq("id", userId)
      .maybeSingle();

    if (error) {
      if (process.env.NODE_ENV === "production") {
        throw new Error(`Gagal membaca profil peserta: ${error.message}`);
      }
    } else {
      return data
        ? keProfilPublikPeserta(data as DataAkunPesertaTersimpan)
        : null;
    }
  }

  const daftar = bacaSemuaPesertaLokal(pathKustom);
  const cocok = daftar.find((u) => u.id === userId);
  return cocok ? keProfilPublikPeserta(cocok) : null;
}

export async function bacaSesiPesertaDariHeaderCookie(
  headerCookie: string | null | undefined,
  pathKustom?: string
): Promise<ProfilAkunPesertaPublik | null> {
  if (!headerCookie) return null;
  const pasangan = headerCookie.split(";").map((item) => item.trim());
  for (const p of pasangan) {
    const idx = p.indexOf("=");
    if (idx === -1) continue;
    const nama = p.slice(0, idx).trim();
    const nilai = p.slice(idx + 1).trim();
    if (nama === NAMA_COOKIE_SESI_PESERTA) {
      try {
        const payload = verifikasiTokenSesiPeserta(decodeURIComponent(nilai));
        if (!payload) return null;
        return await cariPesertaBerdasarkanId(payload.id, pathKustom);
      } catch {
        return null;
      }
    }
  }
  return null;
}

export async function daftarPesertaBaru(parameter: {
  email: string;
  namaLengkap: string;
  kataSandi: string;
  pathKustom?: string;
}): Promise<{
  berhasil: boolean;
  pesan: string;
  profil?: ProfilAkunPesertaPublik;
  tokenSesi?: string;
}> {
  pastikanLingkunganPenyimpananPesertaSiap(parameter.pathKustom);

  const emailBersih = (parameter.email || "").trim().toLowerCase();
  const namaLengkap = (parameter.namaLengkap || "").trim();
  const kataSandi = parameter.kataSandi || "";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailBersih)) {
    return {
      berhasil: false,
      pesan: "Format alamat pos-el (email) tidak valid.",
    };
  }
  if (namaLengkap.length < 3) {
    return {
      berhasil: false,
      pesan: "Nama lengkap peserta minimal harus 3 karakter.",
    };
  }
  if (kataSandi.length < 8) {
    return {
      berhasil: false,
      pesan: "Kata sandi akun peserta minimal harus terdiri dari 8 karakter.",
    };
  }

  const sudahAda = await cariPesertaBerdasarkanEmail(
    emailBersih,
    parameter.pathKustom
  );
  if (sudahAda) {
    return {
      berhasil: false,
      pesan: `Email "${emailBersih}" sudah terdaftar. Silakan masuk menggunakan akun Anda.`,
    };
  }

  const sekarang = new Date().toISOString();
  const entriBaru: DataAkunPesertaTersimpan = {
    id: crypto.randomUUID(),
    email: emailBersih,
    nama_lengkap: namaLengkap,
    password_hash: hashKataSandiPeserta(kataSandi),
    tingkat_langganan: "gratis",
    aktif_hingga: null,
    created_at: sekarang,
    updated_at: sekarang,
  };

  if (!parameter.pathKustom && apakahSupabaseTersediaUntukPeserta()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { error } = await supabase.from("user_accounts").insert(entriBaru);
    if (error) {
      if (process.env.NODE_ENV === "production") {
        throw new Error(`Gagal mendaftarkan peserta: ${error.message}`);
      }
    } else {
      const profil = keProfilPublikPeserta(entriBaru);
      return {
        berhasil: true,
        pesan: "Pendaftaran akun peserta berhasil. Selamat berlatih SKD!",
        profil,
        tokenSesi: buatTokenSesiPeserta(profil),
      };
    }
  }

  const daftarLama = bacaSemuaPesertaLokal(parameter.pathKustom);
  simpanSemuaPesertaLokal([...daftarLama, entriBaru], parameter.pathKustom);

  const profil = keProfilPublikPeserta(entriBaru);
  return {
    berhasil: true,
    pesan: "Pendaftaran akun peserta berhasil. Selamat berlatih SKD!",
    profil,
    tokenSesi: buatTokenSesiPeserta(profil),
  };
}

export async function verifikasiLoginPeserta(parameter: {
  email: string;
  kataSandi: string;
  pathKustom?: string;
}): Promise<{
  berhasil: boolean;
  pesan: string;
  profil?: ProfilAkunPesertaPublik;
  tokenSesi?: string;
}> {
  pastikanLingkunganPenyimpananPesertaSiap(parameter.pathKustom);

  const emailBersih = (parameter.email || "").trim().toLowerCase();
  const kataSandi = parameter.kataSandi || "";

  if (!emailBersih || !kataSandi) {
    return {
      berhasil: false,
      pesan: "Alamat pos-el (email) dan kata sandi wajib diisi.",
    };
  }

  const akun = await cariPesertaBerdasarkanEmail(
    emailBersih,
    parameter.pathKustom
  );
  if (!akun || !verifikasiKataSandiPeserta(kataSandi, akun.password_hash)) {
    return {
      berhasil: false,
      pesan: "Email atau kata sandi tidak sesuai.",
    };
  }

  const profil = keProfilPublikPeserta(akun);
  return {
    berhasil: true,
    pesan: `Berhasil masuk sebagai ${profil.nama_lengkap}.`,
    profil,
    tokenSesi: buatTokenSesiPeserta(profil),
  };
}

export async function perbaruiTingkatLanggananPeserta(parameter: {
  userId: string;
  tingkatBaru: TingkatLanggananPeserta;
  pathKustom?: string;
}): Promise<ProfilAkunPesertaPublik | null> {
  pastikanLingkunganPenyimpananPesertaSiap(parameter.pathKustom);

  const sekarang = new Date();
  const aktifHingga = new Date(
    sekarang.getTime() + 365 * 24 * 60 * 60 * 1000
  ).toISOString();

  // Jangan menurunkan tingkat langganan bila peserta sudah memiliki Terpadu CPNS
  const profilSaatIni = await cariPesertaBerdasarkanId(
    parameter.userId,
    parameter.pathKustom
  );
  if (!profilSaatIni) return null;

  const tingkatFinal: TingkatLanggananPeserta =
    profilSaatIni.tingkat_langganan === "terpadu_cpns"
      ? "terpadu_cpns"
      : parameter.tingkatBaru;

  if (!parameter.pathKustom && apakahSupabaseTersediaUntukPeserta()) {
    const { buatKlienSupabaseServer } = await import("./supabase.ts");
    const supabase = buatKlienSupabaseServer();
    const { data, error } = await supabase
      .from("user_accounts")
      .update({
        tingkat_langganan: tingkatFinal,
        aktif_hingga: aktifHingga,
        updated_at: sekarang.toISOString(),
      })
      .eq("id", parameter.userId)
      .select("*")
      .single();

    if (error) {
      if (process.env.NODE_ENV === "production") {
        throw new Error(`Gagal memperbarui langganan: ${error.message}`);
      }
    } else if (data) {
      return keProfilPublikPeserta(data as DataAkunPesertaTersimpan);
    }
  }

  const daftar = bacaSemuaPesertaLokal(parameter.pathKustom);
  let akunDiperbarui: DataAkunPesertaTersimpan | null = null;
  const daftarBaru = daftar.map((item) => {
    if (item.id !== parameter.userId) return item;
    akunDiperbarui = {
      ...item,
      tingkat_langganan: tingkatFinal,
      aktif_hingga: aktifHingga,
      updated_at: sekarang.toISOString(),
    };
    return akunDiperbarui;
  });
  simpanSemuaPesertaLokal(daftarBaru, parameter.pathKustom);

  return akunDiperbarui ? keProfilPublikPeserta(akunDiperbarui) : null;
}
