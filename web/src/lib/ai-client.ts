/**
 * Adaptor Penyedia AI Terpadu (OpenAI-Compatible AI Client) untuk Next.js — LOLOS CPNS.
 *
 * Seluruh pemanggilan LLM/Vision/Embedding diarahkan melalui endpoint kompatibel OpenAI
 * yang dikendalikan penuh dari variabel lingkungan `.env` (`AI_PROVIDER`, `AI_BASE_URL`,
 * `AI_API_KEY`, `AI_CHAT_MODEL`, `AI_VISION_MODEL`, `AI_EMBEDDING_MODEL`).
 *
 * Mendukung Google AI Studio Free Tier, Groq Free Tier, OpenRouter Free Models, dan Ollama
 * tanpa perubahan kode sedikit pun.
 */

export type JenisPenyediaAI =
  | "gemini_free"
  | "groq_free"
  | "openrouter_free"
  | "ollama_local"
  | "custom_openai";

export interface KonfigurasiAdaptorAI {
  provider: JenisPenyediaAI | string;
  baseUrl: string;
  apiKey: string;
  chatModel: string;
  visionModel: string;
  embeddingModel: string;
}

export interface PesanPercakapanAI {
  role: "system" | "user" | "assistant";
  content: string;
}

export const INSTRUKSI_SISTEM_BAHASA_INDONESIA =
  "Anda adalah Tutor dan Asisten Ahli Seleksi CPNS pada platform LOLOS CPNS. " +
  "Gunakan selalu Bahasa Indonesia yang baik, benar, baku (sesuai PUEBI/EYD), sopan, " +
  "dan mudah dipahami, serta mengacu pada terminologi resmi BKN dan Kementerian PANRB.";

export function bacaKonfigurasiAI(): KonfigurasiAdaptorAI {
  const provider = (process.env.AI_PROVIDER || "gemini_free").trim();
  const baseUrl = (
    process.env.AI_BASE_URL ||
    "https://generativelanguage.googleapis.com/v1beta/openai/"
  )
    .trim()
    .replace(/\/+$/, "");
  const apiKey = (process.env.AI_API_KEY || "").trim();
  const chatModel = (process.env.AI_CHAT_MODEL || "gemini-2.5-flash").trim();
  const visionModel = (process.env.AI_VISION_MODEL || chatModel).trim();
  const embeddingModel = (
    process.env.AI_EMBEDDING_MODEL || "text-embedding-004"
  ).trim();

  return {
    provider,
    baseUrl,
    apiKey,
    chatModel,
    visionModel,
    embeddingModel,
  };
}

/**
 * Memanggil endpoint `/chat/completions` standar OpenAI-compatible menggunakan konfigurasi `.env`.
 */
export async function panggilChatAI(opsi: {
  pesanPengguna: string;
  instruksiSistem?: string;
  riwayat?: PesanPercakapanAI[];
  suhu?: number;
  formatJson?: boolean;
}): Promise<string> {
  const konf = bacaKonfigurasiAI();

  if (!konf.apiKey && konf.provider !== "ollama_local") {
    throw new Error(
      "Kunci API AI (AI_API_KEY) belum diatur pada berkas .env. Silakan gunakan API Key gratis dari Google AI Studio, Groq, atau OpenRouter."
    );
  }

  const daftarPesan: PesanPercakapanAI[] = [
    {
      role: "system",
      content: opsi.instruksiSistem || INSTRUKSI_SISTEM_BAHASA_INDONESIA,
    },
    ...(opsi.riwayat || []),
    {
      role: "user",
      content: opsi.pesanPengguna,
    },
  ];

  const badanPermintaan: Record<string, unknown> = {
    model: konf.chatModel,
    messages: daftarPesan,
    temperature: opsi.suhu ?? 0.3,
  };

  if (opsi.formatJson) {
    badanPermintaan.response_format = { type: "json_object" };
  }

  const respons = await fetch(`${konf.baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${konf.apiKey || "ollama"}`,
    },
    body: JSON.stringify(badanPermintaan),
  });

  if (!respons.ok) {
    const teksGalat = await respons.text();
    throw new Error(
      `Gagal menghubungi penyedia AI (${konf.provider} - status ${respons.status}): ${teksGalat}`
    );
  }

  const data = await respons.json();
  const isi: string | undefined = data?.choices?.[0]?.message?.content;

  if (!isi) {
    throw new Error("Penyedia AI mengembalikan respons kosong.");
  }

  return isi.trim();
}

/**
 * Memanggil endpoint `/chat/completions` dengan dukungan input gambar base64 (Vision Multimodal)
 * menggunakan `AI_VISION_MODEL` dari berkas `.env`.
 */
export async function panggilVisionAI(opsi: {
  instruksiEkstraksi: string;
  dataUrlGambar: string;
  instruksiSistem?: string;
  suhu?: number;
  formatJson?: boolean;
}): Promise<string> {
  const konf = bacaKonfigurasiAI();

  if (!konf.apiKey && konf.provider !== "ollama_local") {
    throw new Error(
      "Kunci API AI (AI_API_KEY) belum diatur pada berkas .env. Silakan gunakan API Key gratis dari Google AI Studio, Groq, atau OpenRouter."
    );
  }

  const badanPermintaan: Record<string, unknown> = {
    model: konf.visionModel,
    messages: [
      {
        role: "system",
        content: opsi.instruksiSistem || INSTRUKSI_SISTEM_BAHASA_INDONESIA,
      },
      {
        role: "user",
        content: [
          { type: "text", text: opsi.instruksiEkstraksi },
          { type: "image_url", image_url: { url: opsi.dataUrlGambar } },
        ],
      },
    ],
    temperature: opsi.suhu ?? 0.1,
  };

  if (opsi.formatJson) {
    badanPermintaan.response_format = { type: "json_object" };
  }

  const respons = await fetch(`${konf.baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${konf.apiKey || "ollama"}`,
    },
    body: JSON.stringify(badanPermintaan),
  });

  if (!respons.ok) {
    const teksGalat = await respons.text();
    throw new Error(
      `Gagal memproses gambar melalui penyedia Vision AI (${konf.provider} - status ${respons.status}): ${teksGalat}`
    );
  }

  const data = await respons.json();
  const isi: string | undefined = data?.choices?.[0]?.message?.content;

  if (!isi) {
    throw new Error("Model Vision AI mengembalikan respons kosong.");
  }

  return isi.trim();
}

/**
 * Membuat vektor embedding melalui endpoint `/embeddings` kompatibel OpenAI.
 * Mengembalikan `null` secara aman apabila penyedia AI gratis tidak mendukung endpoint embedding,
 * sehingga sistem dapat beralih otomatis ke pencarian teks penuh (`tsvector` Bahasa Indonesia).
 */
export async function buatEmbeddingTeks(
  teks: string
): Promise<number[] | null> {
  const konf = bacaKonfigurasiAI();
  if (!konf.embeddingModel) {
    return null;
  }

  try {
    const respons = await fetch(`${konf.baseUrl}/embeddings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${konf.apiKey || "ollama"}`,
      },
      body: JSON.stringify({
        model: konf.embeddingModel,
        input: teks,
      }),
    });

    if (!respons.ok) {
      return null;
    }

    const data = await respons.json();
    const vektor = data?.data?.[0]?.embedding;
    return Array.isArray(vektor) ? vektor : null;
  } catch {
    return null;
  }
}
