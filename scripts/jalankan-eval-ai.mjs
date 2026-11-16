#!/usr/bin/env node
/**
 * Runner CLI AI Evaluation Harness (36 Skenario Emas TWK/TIU/TKP) — LOLOS CPNS.
 * Jalankan sebelum merilis perubahan prompt, model AI, atau logika retrieval:
 *   node --experimental-strip-types scripts/jalankan-eval-ai.mjs
 *   node --experimental-strip-types scripts/jalankan-eval-ai.mjs --live   (bila AI_API_KEY aktif untuk uji model langsung)
 */

import { jalankanEvaluasiAIHarness } from "../web/src/lib/ai-eval-harness.ts";

async function main() {
  const pakaiLive = process.argv.includes("--live");
  console.log("================================================================");
  console.log(`  AI EVALUATION HARNESS — LOLOS CPNS (${pakaiLive ? "LIVE LLM" : "DETERMINISTIK"})`);
  console.log("================================================================\n");

  const laporan = await jalankanEvaluasiAIHarness({ modeLiveLLM: pakaiLive });
  console.log(JSON.stringify(laporan, null, 2));

  if (laporan.rincian_gagal.length > 0) {
    console.error(`\n[GAGAL] ${laporan.rincian_gagal.length} skenario belum memenuhi standar.`);
    process.exit(1);
  }
  console.log(`\n[LULUS] ${laporan.total_lulus}/${laporan.total_skenario} skenario evaluasi emas lulus (${laporan.tingkat_kelulusan_persen}%).`);
}

main();
