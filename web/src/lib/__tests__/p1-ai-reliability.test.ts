import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  aturKonfigurasiCircuitBreakerAI,
  bacaDaftarPenyediaAI,
  dapatkanMetrikAI,
  panggilChatAI,
  resetMetrikAI,
} from "../ai-client.ts";
import {
  evaluasiEkspresiAritmetikaAman,
  prediksiSukuBerikutnyaDeret,
  verifikasiButirSoalAI,
} from "../ai-math-verifier.ts";
import type { QuestionRow } from "../../types/database.ts";

function buatSoalTIUContoh(overrides: Partial<QuestionRow> = {}): QuestionRow {
  return {
    id: "uji-tiu-num-1",
    stage: "SKD",
    category: "TIU",
    sub_topic: "Kemampuan Numerik - Perbandingan Kuantitatif",
    difficulty: "sedang",
    question_text:
      "Sebuah tim dapat menuntaskan 24 pekerjaan dalam 35 hari. Berapa tambahan pekerja untuk selesai 20 hari?",
    image_url: null,
    options: [
      { kunci: "A", teks: "12 pekerja", skor: 0 },
      { kunci: "B", teks: "16 pekerja", skor: 0 },
      { kunci: "C", teks: "18 pekerja", skor: 5 },
      { kunci: "D", teks: "20 pekerja", skor: 0 },
      { kunci: "E", teks: "42 pekerja", skor: 0 },
    ],
    explanation: "(24 × 35) ÷ 20 - 24 = 18 tambahan pekerja.",
    source_reference: "Kepmenpan-RB 321/2024",
    is_paraphrased: true,
    status: "disetujui",
    embedding: null,
    created_at: new Date().toISOString(),
    ...overrides,
  };
}

describe("P1 Keandalan AI: Verifikasi Hitungan Deterministik, Failover & Observabilitas", () => {
  it("mengevaluasi ekspresi aritmetika aman tanpa eval dan menolak karakter kode berbahaya", () => {
    assert.equal(evaluasiEkspresiAritmetikaAman("(24 * 35) / 20 - 24"), 18);
    assert.equal(evaluasiEkspresiAritmetikaAman("25% * 80000"), 20000);
    assert.equal(evaluasiEkspresiAritmetikaAman("2,5 × 4 + 3^2"), 19);
    assert.equal(evaluasiEkspresiAritmetikaAman("10 / 0"), null);
    assert.equal(evaluasiEkspresiAritmetikaAman("process.exit(1)"), null);
  });

  it("memprediksi suku berikutnya pada soal deret aritmetika, bertingkat, rasio, dan geometri", () => {
    assert.equal(prediksiSukuBerikutnyaDeret("3, 7, 11, 15, ..."), 19);
    assert.equal(prediksiSukuBerikutnyaDeret("2, 5, 10, 17, 26, ..."), 37);
    assert.equal(prediksiSukuBerikutnyaDeret("4, 9, 19, 39, 79, ..."), 159);
    assert.equal(prediksiSukuBerikutnyaDeret("2, 6, 18, 54, ..."), 162);
  });

  it("memverifikasi soal numerik AI, memperbaiki kunci skor +5 yang tertukar, dan menolak halusinasi hitungan", () => {
    const valid = verifikasiButirSoalAI(buatSoalTIUContoh(), {
      verificationFormula: "(24 * 35) / 20 - 24",
      expectedAnswer: 18,
    });
    assert.equal(valid.lolos, true);
    assert.equal(valid.terverifikasiSecaraMatematis, true);
    assert.equal(valid.diperbaikiOtomatis, false);

    // AI salah menaruh skor=5 di A (12) padahal jawabannya C (18)
    const salahLabel = verifikasiButirSoalAI(
      buatSoalTIUContoh({
        options: [
          { kunci: "A", teks: "12 pekerja", skor: 5 },
          { kunci: "B", teks: "16 pekerja", skor: 0 },
          { kunci: "C", teks: "18 pekerja", skor: 0 },
          { kunci: "D", teks: "20 pekerja", skor: 0 },
          { kunci: "E", teks: "42 pekerja", skor: 0 },
        ],
      }),
      { verificationFormula: "(24 * 35) / 20 - 24", expectedAnswer: 18 }
    );
    assert.equal(salahLabel.lolos, true);
    assert.equal(salahLabel.diperbaikiOtomatis, true);
    assert.equal(salahLabel.butir?.options[2].skor, 5);
    assert.equal(salahLabel.butir?.options[0].skor, 0);

    // Halusinasi total: expected_answer tidak cocok rumus maupun opsi tidak mengandung hasil benar
    const halusinasi = verifikasiButirSoalAI(buatSoalTIUContoh(), {
      verificationFormula: "100 + 250",
      expectedAnswer: 999,
    });
    assert.equal(halusinasi.lolos, false);

    // Deret angka salah kunci tanpa formula eksplisit tetap terdeteksi
    const deretSalah = verifikasiButirSoalAI(
      buatSoalTIUContoh({
        sub_topic: "Kemampuan Numerik - Deret Angka",
        question_text: "Tentukan suku selanjutnya: 4, 9, 19, 39, 79, ...",
        options: [
          { kunci: "A", teks: "120", skor: 5 },
          { kunci: "B", teks: "130", skor: 0 },
          { kunci: "C", teks: "140", skor: 0 },
          { kunci: "D", teks: "150", skor: 0 },
          { kunci: "E", teks: "170", skor: 0 },
        ],
      })
    );
    assert.equal(deretSalah.lolos, false);
  });

  it("melakukan failover multi-provider saat 429, membuka circuit breaker, dan mencatat token serta latensi tanpa bocor rahasia", async () => {
    const fetchAsli = globalThis.fetch;
    const envCadangan = {
      AI_PROVIDER: process.env.AI_PROVIDER,
      AI_BASE_URL: process.env.AI_BASE_URL,
      AI_API_KEY: process.env.AI_API_KEY,
      AI_CHAT_MODEL: process.env.AI_CHAT_MODEL,
      AI_FALLBACK_PROVIDER: process.env.AI_FALLBACK_PROVIDER,
      AI_FALLBACK_BASE_URL: process.env.AI_FALLBACK_BASE_URL,
      AI_FALLBACK_API_KEY: process.env.AI_FALLBACK_API_KEY,
      AI_FALLBACK_CHAT_MODEL: process.env.AI_FALLBACK_CHAT_MODEL,
    };

    try {
      resetMetrikAI();
      aturKonfigurasiCircuitBreakerAI({ ambangGagal: 2, cooldownMs: 60_000 });

      process.env.AI_PROVIDER = "gemini_free";
      process.env.AI_BASE_URL = "https://utama.contoh.lokal/v1";
      process.env.AI_API_KEY = "rahasia-utama-jangan-bocor";
      process.env.AI_CHAT_MODEL = "gemini-2.5-flash";
      process.env.AI_FALLBACK_PROVIDER = "groq_free";
      process.env.AI_FALLBACK_BASE_URL = "https://cadangan.contoh.lokal/v1";
      process.env.AI_FALLBACK_API_KEY = "rahasia-cadangan-jangan-bocor";
      process.env.AI_FALLBACK_CHAT_MODEL = "llama-3.3-70b-versatile";

      const daftar = bacaDaftarPenyediaAI();
      assert.equal(daftar.length, 2);
      assert.equal(daftar[1].provider, "groq_free");

      let hitsUtama = 0;
      let hitsCadangan = 0;

      globalThis.fetch = (async (input: RequestInfo | URL) => {
        const url = String(input);
        if (url.includes("utama.contoh.lokal")) {
          hitsUtama += 1;
          return new Response("Rate limit Bearer rahasia-utama-jangan-bocor", {
            status: 429,
          });
        }
        hitsCadangan += 1;
        return new Response(
          JSON.stringify({
            choices: [{ message: { content: "Jawaban Sokratik dari Groq" } }],
            usage: { prompt_tokens: 120, completion_tokens: 80 },
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }) as typeof fetch;

      // Panggilan #1: Utama 429 -> failover ke Cadangan (kegagalan utama = 1)
      const r1 = await panggilChatAI({ pesanPengguna: "Tes 1" });
      assert.equal(r1, "Jawaban Sokratik dari Groq");

      // Panggilan #2: Utama 429 -> failover lagi (kegagalan utama = 2 -> Circuit Breaker TERBUKA)
      const r2 = await panggilChatAI({ pesanPengguna: "Tes 2" });
      assert.equal(r2, "Jawaban Sokratik dari Groq");
      assert.equal(hitsUtama, 2);

      // Panggilan #3: Karena Circuit Breaker terbuka, Utama dilewati (hitsUtama tetap 2!)
      const r3 = await panggilChatAI({ pesanPengguna: "Tes 3" });
      assert.equal(r3, "Jawaban Sokratik dari Groq");
      assert.equal(hitsUtama, 2);
      assert.equal(hitsCadangan, 3);

      const metrik = dapatkanMetrikAI();
      assert.equal(metrik.total_sukses, 3);
      assert.equal(metrik.total_gagal, 2);
      assert.equal(metrik.total_failover, 3);
      assert.equal(metrik.total_token_input, 360);
      assert.equal(metrik.total_token_output, 240);
      assert.equal(metrik.total_token, 600);
      assert.equal(metrik.status_circuit_breaker.gemini_free.kondisi, "terbuka");
      assert.equal(metrik.status_circuit_breaker.groq_free.kondisi, "tertutup");

      const serial = JSON.stringify(metrik);
      assert.equal(serial.includes("rahasia-utama-jangan-bocor"), false);
      assert.equal(serial.includes("rahasia-cadangan-jangan-bocor"), false);
    } finally {
      globalThis.fetch = fetchAsli;
      resetMetrikAI();
      for (const [k, v] of Object.entries(envCadangan)) {
        if (v !== undefined) {
          process.env[k] = v;
        } else {
          delete process.env[k];
        }
      }
    }
  });
});
