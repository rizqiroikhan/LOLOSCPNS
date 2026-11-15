import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  bacaKonfigurasiAI,
  INSTRUKSI_SISTEM_BAHASA_INDONESIA,
} from "../ai-client.ts";

describe("Adaptor Penyedia AI Terpadu (OpenAI-Compatible AI Client)", () => {
  it("membaca konfigurasi bawaan Google AI Studio Free Tier tanpa terkunci pada SDK berbayar", () => {
    delete process.env.AI_PROVIDER;
    delete process.env.AI_BASE_URL;
    delete process.env.AI_CHAT_MODEL;
    delete process.env.AI_VISION_MODEL;
    delete process.env.AI_EMBEDDING_MODEL;

    const konf = bacaKonfigurasiAI();
    assert.equal(konf.provider, "gemini_free");
    assert.equal(
      konf.baseUrl,
      "https://generativelanguage.googleapis.com/v1beta/openai"
    );
    assert.equal(konf.chatModel, "gemini-2.5-flash");
    assert.equal(konf.visionModel, "gemini-2.5-flash");
    assert.equal(konf.embeddingModel, "text-embedding-004");
  });

  it("mengizinkan pergantian penyedia AI (Groq / OpenRouter / Ollama) cukup dari variabel .env", () => {
    process.env.AI_PROVIDER = "groq_free";
    process.env.AI_BASE_URL = "https://api.groq.com/openai/v1/";
    process.env.AI_API_KEY = "kunci_uji_groq";
    process.env.AI_CHAT_MODEL = "llama-3.3-70b-versatile";
    process.env.AI_VISION_MODEL = "llama-3.2-90b-vision-preview";

    const konf = bacaKonfigurasiAI();
    assert.equal(konf.provider, "groq_free");
    assert.equal(konf.baseUrl, "https://api.groq.com/openai/v1");
    assert.equal(konf.apiKey, "kunci_uji_groq");
    assert.equal(konf.chatModel, "llama-3.3-70b-versatile");
    assert.equal(konf.visionModel, "llama-3.2-90b-vision-preview");
  });

  it("menyertakan instruksi sistem standar dalam Bahasa Indonesia yang baik dan benar", () => {
    assert.ok(
      INSTRUKSI_SISTEM_BAHASA_INDONESIA.includes("Bahasa Indonesia yang baik")
    );
  });
});
