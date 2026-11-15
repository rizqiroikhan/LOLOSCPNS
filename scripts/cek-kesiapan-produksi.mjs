#!/usr/bin/env node
/**
 * Audit Pra-Commit & Kesiapan Produksi Otomatis — LOLOS CPNS.
 *
 * Memeriksa tanpa membaca/membocorkan isi kredensial pengguna:
 * 1. Tidak ada berkas rahasia (.env, .env.local, web/.data/, *.pem) ter-track di Git.
 * 2. Tidak ada variabel rahasia server memakai prefix NEXT_PUBLIC_ di kode web/src.
 * 3. Header keamanan & CSP terpasang di vercel.json.
 * 4. TypeScript (`tsc --noEmit`) & seluruh unit test (`npm test`) lulus.
 *    Tambahkan flag `--dengan-build` untuk sekaligus menjalankan `next build`.
 */

import { execSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const akarRepo = path.resolve(__dirname, "..");
const dirWeb = path.join(akarRepo, "web");

let totalGagal = 0;

function catatOk(pesan) {
  console.log(`[LULUS] ${pesan}`);
}

function catatGagal(pesan) {
  totalGagal += 1;
  console.error(`[GAGAL] ${pesan}`);
}

function periksaKebersihanGit() {
  try {
    const daftarTracked = execSync("git ls-files", {
      cwd: akarRepo,
      encoding: "utf8",
    })
      .split(/\r?\n/)
      .filter(Boolean);

    const daftarStatus = execSync("git status --porcelain", {
      cwd: akarRepo,
      encoding: "utf8",
    })
      .split(/\r?\n/)
      .filter(Boolean);

    const polaTerlarang = [
      /(^|\/)\.env($|\.(?!example$).*)/i,
      /(^|\/)\.data(\/|$)/i,
      /\.admin-store\.json$/i,
      /\.pem$/i,
    ];

    const trackedBocor = daftarTracked.filter((f) =>
      polaTerlarang.some((re) => re.test(f))
    );
    const statusBocor = daftarStatus
      .map((baris) => baris.slice(3).trim())
      .filter((f) => polaTerlarang.some((re) => re.test(f)));

    if (trackedBocor.length > 0 || statusBocor.length > 0) {
      catatGagal(
        `Terdeteksi berkas rahasia/data lokal di Git: ${[
          ...new Set([...trackedBocor, ...statusBocor]),
        ].join(", ")}`
      );
    } else {
      catatOk(
        "Kebersihan Git aman: tidak ada .env, web/.data, atau *.pem yang ter-track/terbawa."
      );
    }
  } catch (err) {
    catatGagal(`Gagal memeriksa status Git: ${err.message}`);
  }
}

function kumpulkanBerkasSumber(dir, hasil = []) {
  for (const entri of fs.readdirSync(dir, { withFileTypes: true })) {
    const jalur = path.join(dir, entri.name);
    if (entri.isDirectory()) {
      if (entri.name === "node_modules" || entri.name === ".next") continue;
      kumpulkanBerkasSumber(jalur, hasil);
    } else if (/\.(ts|tsx|js|mjs)$/.test(entri.name)) {
      hasil.push(jalur);
    }
  }
  return hasil;
}

function periksaKebocoranKodeSumber() {
  const semuaBerkas = kumpulkanBerkasSumber(path.join(dirWeb, "src"));
  const polaBahaya = [
    /NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY/,
    /NEXT_PUBLIC_MIDTRANS_SERVER_KEY/,
    /NEXT_PUBLIC_USER_SESSION_SECRET/,
    /NEXT_PUBLIC_ADMIN_SESSION_SECRET/,
    /NEXT_PUBLIC_AI_SERVICE_INTERNAL_SECRET/,
    /NEXT_PUBLIC_AI_API_KEY/,
    /SB-Mid-server-[A-Za-z0-9_-]{8,}/,
    /Mid-server-[A-Za-z0-9_-]{8,}/,
    /AIzaSy[A-Za-z0-9_-]{20,}/,
  ];

  const temuan = [];
  for (const berkas of semuaBerkas) {
    if (berkas.includes(`${path.sep}__tests__${path.sep}`)) continue;
    const isi = fs.readFileSync(berkas, "utf8");
    for (const pola of polaBahaya) {
      if (pola.test(isi)) {
        temuan.push(`${path.relative(akarRepo, berkas)} (${pola})`);
      }
    }
  }

  if (temuan.length > 0) {
    catatGagal(`Potensi kebocoran rahasia di kode sumber: ${temuan.join("; ")}`);
  } else {
    catatOk(
      `Pemindaian ${semuaBerkas.length} berkas kode web/src bebas prefix rahasia NEXT_PUBLIC_* & kunci keras.`
    );
  }
}

function periksaKonfigurasiVercel() {
  const pathVercel = path.join(akarRepo, "vercel.json");
  if (!fs.existsSync(pathVercel)) {
    catatGagal("Berkas vercel.json tidak ditemukan.");
    return;
  }
  const isi = JSON.parse(fs.readFileSync(pathVercel, "utf8"));
  const headers = isi?.headers?.[0]?.headers ?? [];
  const namaHeaders = new Set(headers.map((h) => h.key));
  const wajib = [
    "X-Content-Type-Options",
    "X-Frame-Options",
    "Strict-Transport-Security",
    "Content-Security-Policy",
  ];
  const kurang = wajib.filter((k) => !namaHeaders.has(k));
  if (kurang.length > 0) {
    catatGagal(`Header keamanan vercel.json kurang: ${kurang.join(", ")}`);
  } else {
    catatOk("Header keamanan HTTP & CSP pada vercel.json terpasang lengkap.");
  }
}

function jalankanPerintah(judul, perintah, argumen, cwd = dirWeb) {
  console.log(`\n▶ Menjalankan: ${judul}...`);
  const hasil = spawnSync(perintah, argumen, {
    cwd,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (hasil.status !== 0) {
    catatGagal(`${judul} gagal (exit code ${hasil.status ?? 1}).`);
  } else {
    catatOk(`${judul} berhasil.`);
  }
}

function main() {
  console.log("============================================================");
  console.log("  AUDIT KEAMANAN & KESIAPAN PRODUKSI — LOLOS CPNS           ");
  console.log("============================================================\n");

  periksaKebersihanGit();
  periksaKebocoranKodeSumber();
  periksaKonfigurasiVercel();

  const binTsc =
    process.platform === "win32"
      ? "node_modules\\.bin\\tsc.cmd"
      : "node_modules/.bin/tsc";
  const npmBin = process.platform === "win32" ? "npm.cmd" : "npm";

  jalankanPerintah(
    "Pemeriksaan Tipe TypeScript (tsc --noEmit)",
    binTsc,
    ["--noEmit", "-p", "tsconfig.json"],
    dirWeb
  );

  jalankanPerintah("Seluruh Unit Test Web", npmBin, ["test"], dirWeb);

  if (process.argv.includes("--dengan-build")) {
    jalankanPerintah(
      "Kompilasi Produksi Next.js (next build)",
      npmBin,
      ["run", "build"],
      dirWeb
    );
  }

  console.log("\n============================================================");
  if (totalGagal > 0) {
    console.error(`HASIL AKHIR: ${totalGagal} pemeriksaan GAGAL.`);
    process.exit(1);
  }
  console.log("HASIL AKHIR: SELURUH PEMERIKSAAN PRA-DEPLOY LULUS AMAN.");
}

main();
