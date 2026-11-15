#!/usr/bin/env node
/**
 * Generator Rahasia Kriptografis & Penyiapan Env Lokal — LOLOS CPNS.
 *
 * Penggunaan aman:
 * 1. Cetak 3 secret baru ke terminal (tidak disimpan ke berkas/Git):
 *      node scripts/buat-rahasia-produksi.mjs
 * 2. Buat berkas `.env` lokal dari templat bila belum ada (aman, masuk .gitignore):
 *      node scripts/buat-rahasia-produksi.mjs --tulis-env-lokal
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const akarRepo = path.resolve(__dirname, "..");

function buatSecretHex(jumlahByte = 32) {
  return crypto.randomBytes(jumlahByte).toString("hex");
}

function main() {
  const pakaiTulisLokal = process.argv.includes("--tulis-env-lokal");

  const userSessionSecret = buatSecretHex(32);
  const adminSessionSecret = buatSecretHex(32);
  const aiInternalSecret = buatSecretHex(32);

  if (!pakaiTulisLokal) {
    console.log("================================================================");
    console.log("  RAHASIA KRIPTOGRAFIS BARU (64 KARAKTER HEX / 256-BIT)         ");
    console.log("  Salin langsung ke Vercel & Host FastAPI — JANGAN commit ke Git");
    console.log("================================================================\n");
    console.log("# Tempel di Vercel (Production) & Host Python AI Service:");
    console.log(`AI_SERVICE_INTERNAL_SECRET="${aiInternalSecret}"`);
    console.log("\n# Tempel khusus di Vercel (Production):");
    console.log(`USER_SESSION_SECRET="${userSessionSecret}"`);
    console.log(`ADMIN_SESSION_SECRET="${adminSessionSecret}"`);
    console.log("\n# Atur juga di Vercel (isi kredensial asli Anda):");
    console.log('ADMIN_BOOTSTRAP_USERNAME="admin_utama"');
    console.log('ADMIN_BOOTSTRAP_PASSWORD="GantiDenganSandiKuatMinimal12Karakter!"');
    console.log(
      "\nTips: Jalankan dengan --tulis-env-lokal untuk membuat berkas .env pengembangan lokal secara otomatis bila belum ada."
    );
    return;
  }

  const targetBerkas = [
    {
      contoh: path.join(akarRepo, ".env.example"),
      tujuan: path.join(akarRepo, ".env"),
    },
    {
      contoh: path.join(akarRepo, "web", ".env.example"),
      tujuan: path.join(akarRepo, "web", ".env.local"),
    },
    {
      contoh: path.join(akarRepo, "ai-service", ".env.example"),
      tujuan: path.join(akarRepo, "ai-service", ".env"),
    },
  ];

  for (const item of targetBerkas) {
    const relTujuan = path.relative(akarRepo, item.tujuan);
    if (fs.existsSync(item.tujuan)) {
      console.log(`[LEWATI] ${relTujuan} sudah ada (tidak ditimpa).`);
      continue;
    }
    if (!fs.existsSync(item.contoh)) {
      console.warn(`[PERINGATAN] Templat ${item.contoh} tidak ditemukan.`);
      continue;
    }
    let isi = fs.readFileSync(item.contoh, "utf8");
    isi = isi
      .replace(
        "ganti_kunci_rahasia_sesi_peserta_minimal_32_karakter",
        userSessionSecret
      )
      .replace(
        "ganti_kunci_rahasia_sesi_admin_minimal_32_karakter",
        adminSessionSecret
      )
      .replace(
        "ganti_kunci_rahasia_komunikasi_internal_nextjs_fastapi",
        aiInternalSecret
      );
    fs.writeFileSync(item.tujuan, isi, { encoding: "utf8", mode: 0o600 });
    console.log(`[DIBUAT] ${relTujuan} (masuk .gitignore, aman lokal).`);
  }
}

main();
