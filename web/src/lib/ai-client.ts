/**
 * Adaptor Penyedia AI Terpadu (OpenAI-Compatible AI Client) untuk Next.js — LOLOS CPNS.
 *
 * Fitur P1 Keandalan & Observabilitas:
 * 1. Mendukung multi-provider melalui `.env` (`gemini_free`, `groq_free`, `openrouter_free`, `ollama_local`).
 * 2. Failover otomatis lintas penyedia menggunakan `AI_FALLBACK_*` saat provider utama mengalami 429 / timeout / 5xx.
 * 3. Circuit Breaker per penyedia agar permintaan tidak terus menunggu provider yang sedang gangguan.
 * 4. Pencatatan metrik terukur (token input/output, latensi ms, error rate, jumlah failover) tanpa membocorkan kunci.
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

export type KondisiCircuitBreaker = "tertutup" | "terbuka" | "setengah_terbuka";

export interface StatusCircuitBreakerPenyedia {
  kondisi: KondisiCircuitBreaker;
  kegagalan_berturut: number;
  sisa_cooldown_ms: number;
}

export interface EntriRiwayatObservabilitasAI {
  waktu: string;
  operasi: "chat" | "vision" | "embedding";
  provider: string;
  model: string;
  status: "sukses" | "gagal";
  failover_dari?: string;
  latensi_ms: number;
  token_input: number;
  token_output: number;
  pesan_ringkas?: string;
}

export interface RingkasanMetrikAI {
  total_permintaan: number;
  total_sukses: number;
  total_gagal: number;
  total_failover: number;
  error_rate_persen: number;
  rata_rata_latensi_ms: number;
  total_token_input: number;
  total_token_output: number;
  total_token: number;
  status_circuit_breaker: Record<string, StatusCircuitBreakerPenyedia>;
  riwayat_terakhir: EntriRiwayatObservabilitasAI[];
}

interface StateCircuitBreaker {
  kegagalanBerturut: number;
  terbukaHinggaMs: number;
}

export const INSTRUKSI_SISTEM_BAHASA_INDONESIA =
  "Anda adalah Tutor dan Asisten Ahli Seleksi CPNS pada platform LOLOS CPNS. " +
  "Gunakan selalu Bahasa Indonesia yang baik, benar, baku (sesuai PUEBI/EYD), sopan, " +
  "dan mudah dipahami, serta mengacu pada terminologi resmi BKN dan Kementerian PANRB.";

const AMBANG_GAGAL_CIRCUIT_BAWAAN = 3;
const COOLDOWN_CIRCUIT_MS_BAWAAN = 30_000;
const MAKS_RIWAYAT_LOG = 20;

const stateObservabilitas = {
  ambangGagal: AMBANG_GAGAL_CIRCUIT_BAWAAN,
  cooldownMs: COOLDOWN_CIRCUIT_MS_BAWAAN,
  totalPermintaan: 0,
  totalSukses: 0,
  totalGagal: 0,
  totalFailover: 0,
  totalLatensiMs: 0,
  totalTokenInput: 0,
  totalTokenOutput: 0,
  circuitMap: new Map<string, StateCircuitBreaker>(),
  riwayat: [] as EntriRiwayatObservabilitasAI[],
};

function normalisasiBaseUrl(url: string): string {
  return url.trim().replace(/\/+$/, "");
}

function defaultBaseUrlUntukPenyedia(provider: string): string {
  switch (provider.toLowerCase()) {
    case "groq_free":
      return "https://api.groq.com/openai/v1";
    case "openrouter_free":
      return "https://openrouter.ai/api/v1";
    case "ollama_local":
      return "http://localhost:11434/v1";
    default:
      return "https://generativelanguage.googleapis.com/v1beta/openai";
  }
}

export function bacaKonfigurasiAI(): KonfigurasiAdaptorAI {
  const provider = (process.env.AI_PROVIDER || "gemini_free").trim();
  const baseUrl = normalisasiBaseUrl(
    process.env.AI_BASE_URL ||
      "https://generativelanguage.googleapis.com/v1beta/openai/"
  );
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
 * Mengembalikan daftar penyedia AI berurutan: [penyedia utama, ...cadangan opsional].
 */
export function bacaDaftarPenyediaAI(): KonfigurasiAdaptorAI[] {
  const utama = bacaKonfigurasiAI();
  const daftar: KonfigurasiAdaptorAI[] = [utama];

  const fallbackProvider = (process.env.AI_FALLBACK_PROVIDER || "").trim();
  const fallbackKey = (process.env.AI_FALLBACK_API_KEY || "").trim();
  if (fallbackProvider && (fallbackKey || fallbackProvider === "ollama_local")) {
    const chatModel = (
      process.env.AI_FALLBACK_CHAT_MODEL ||
      (fallbackProvider === "groq_free"
        ? "llama-3.3-70b-versatile"
        : utama.chatModel)
    ).trim();
    const visionModel = (
      process.env.AI_FALLBACK_VISION_MODEL || chatModel
    ).trim();
    daftar.push({
      provider: fallbackProvider,
      baseUrl: normalisasiBaseUrl(
        process.env.AI_FALLBACK_BASE_URL ||
          defaultBaseUrlUntukPenyedia(fallbackProvider)
      ),
      apiKey: fallbackKey,
      chatModel,
      visionModel,
      embeddingModel: (process.env.AI_FALLBACK_EMBEDDING_MODEL || "").trim(),
    });
  }

  return daftar;
}

export function aturKonfigurasiCircuitBreakerAI(opsi: {
  ambangGagal?: number;
  cooldownMs?: number;
}): void {
  if (typeof opsi.ambangGagal === "number" && opsi.ambangGagal >= 1) {
    stateObservabilitas.ambangGagal = Math.floor(opsi.ambangGagal);
  }
  if (typeof opsi.cooldownMs === "number" && opsi.cooldownMs >= 1) {
    stateObservabilitas.cooldownMs = Math.floor(opsi.cooldownMs);
  }
}

export function resetMetrikAI(): void {
  stateObservabilitas.ambangGagal = AMBANG_GAGAL_CIRCUIT_BAWAAN;
  stateObservabilitas.cooldownMs = COOLDOWN_CIRCUIT_MS_BAWAAN;
  stateObservabilitas.totalPermintaan = 0;
  stateObservabilitas.totalSukses = 0;
  stateObservabilitas.totalGagal = 0;
  stateObservabilitas.totalFailover = 0;
  stateObservabilitas.totalLatensiMs = 0;
  stateObservabilitas.totalTokenInput = 0;
  stateObservabilitas.totalTokenOutput = 0;
  stateObservabilitas.circuitMap.clear();
  stateObservabilitas.riwayat = [];
}

function dapatkanKondisiSirkuit(
  provider: string,
  sekarangMs: number = Date.now()
): StatusCircuitBreakerPenyedia {
  const entri = stateObservabilitas.circuitMap.get(provider);
  if (!entri || entri.kegagalanBerturut < stateObservabilitas.ambangGagal) {
    return {
      kondisi: "tertutup",
      kegagalan_berturut: entri?.kegagalanBerturut ?? 0,
      sisa_cooldown_ms: 0,
    };
  }
  if (sekarangMs < entri.terbukaHinggaMs) {
    return {
      kondisi: "terbuka",
      kegagalan_berturut: entri.kegagalanBerturut,
      sisa_cooldown_ms: entri.terbukaHinggaMs - sekarangMs,
    };
  }
  return {
    kondisi: "setengah_terbuka",
    kegagalan_berturut: entri.kegagalanBerturut,
    sisa_cooldown_ms: 0,
  };
}

function catatSuksesPenyedia(provider: string): void {
  stateObservabilitas.circuitMap.set(provider, {
    kegagalanBerturut: 0,
    terbukaHinggaMs: 0,
  });
}

function catatGagalPenyedia(provider: string): void {
  const lama = stateObservabilitas.circuitMap.get(provider) ?? {
    kegagalanBerturut: 0,
    terbukaHinggaMs: 0,
  };
  const kegagalanBaru = lama.kegagalanBerturut + 1;
  const terbukaHinggaMs =
    kegagalanBaru >= stateObservabilitas.ambangGagal
      ? Date.now() + stateObservabilitas.cooldownMs
      : 0;
  stateObservabilitas.circuitMap.set(provider, {
    kegagalanBerturut: kegagalanBaru,
    terbukaHinggaMs,
  });
}

function tambahkanRiwayatObservabilitas(
  entri: EntriRiwayatObservabilitasAI
): void {
  stateObservabilitas.riwayat.unshift(entri);
  if (stateObservabilitas.riwayat.length > MAKS_RIWAYAT_LOG) {
    stateObservabilitas.riwayat.length = MAKS_RIWAYAT_LOG;
  }
}

export function dapatkanMetrikAI(): RingkasanMetrikAI {
  const sekarang = Date.now();
  const statusCircuit: Record<string, StatusCircuitBreakerPenyedia> = {};
  for (const [nama] of stateObservabilitas.circuitMap.entries()) {
    statusCircuit[nama] = dapatkanKondisiSirkuit(nama, sekarang);
  }

  const total = stateObservabilitas.totalPermintaan;
  const errorRate =
    total > 0
      ? Number(((stateObservabilitas.totalGagal / total) * 100).toFixed(2))
      : 0;
  const rataLatensi =
    total > 0 ? Math.round(stateObservabilitas.totalLatensiMs / total) : 0;

  return {
    total_permintaan: total,
    total_sukses: stateObservabilitas.totalSukses,
    total_gagal: stateObservabilitas.totalGagal,
    total_failover: stateObservabilitas.totalFailover,
    error_rate_persen: errorRate,
    rata_rata_latensi_ms: rataLatensi,
    total_token_input: stateObservabilitas.totalTokenInput,
    total_token_output: stateObservabilitas.totalTokenOutput,
    total_token:
      stateObservabilitas.totalTokenInput +
      stateObservabilitas.totalTokenOutput,
    status_circuit_breaker: statusCircuit,
    riwayat_terakhir: [...stateObservabilitas.riwayat],
  };
}

function pesanGalatTanpaKunci(teks: string): string {
  return teks
    .replace(/Bearer\s+[A-Za-z0-9_.-]+/gi, "Bearer [TERLINDUNG]")
    .slice(0, 160);
}

/**
 * Memanggil endpoint `/chat/completions` standar OpenAI-compatible dengan failover
 * multi-provider otomatis, circuit breaker, dan observabilitas token/latensi.
 */
export async function panggilChatAI(opsi: {
  pesanPengguna: string;
  instruksiSistem?: string;
  riwayat?: PesanPercakapanAI[];
  suhu?: number;
  formatJson?: boolean;
  timeoutMs?: number;
}): Promise<string> {
  const daftarPenyedia = bacaDaftarPenyediaAI().filter(
    (p) => Boolean(p.apiKey) || p.provider === "ollama_local"
  );

  if (daftarPenyedia.length === 0) {
    throw new Error(
      "Kunci API AI (AI_API_KEY) belum diatur pada berkas konfigurasi. Silakan isi kunci API gratis dari Google AI Studio, Groq, atau OpenRouter."
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

  let galatTerakhir: Error | null = null;
  let penyediaGagalSebelumnya: string | undefined;

  for (let i = 0; i < daftarPenyedia.length; i++) {
    const konf = daftarPenyedia[i];
    const kondisi = dapatkanKondisiSirkuit(konf.provider);

    // Jika sirkuit terbuka dan masih ada cadangan berikutnya, langsung lewati
    if (kondisi.kondisi === "terbuka" && i < daftarPenyedia.length - 1) {
      penyediaGagalSebelumnya = konf.provider;
      continue;
    }

    const mulai = Date.now();
    stateObservabilitas.totalPermintaan += 1;

    try {
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
        signal: AbortSignal.timeout(opsi.timeoutMs ?? 25000),
      });

      const latensiMs = Date.now() - mulai;
      stateObservabilitas.totalLatensiMs += latensiMs;

      if (!respons.ok) {
        const teksGalat = await respons.text().catch(() => "");
        throw new Error(
          `Penyedia ${konf.provider} status ${respons.status}: ${pesanGalatTanpaKunci(teksGalat)}`
        );
      }

      const data = await respons.json();
      const isi: string | undefined = data?.choices?.[0]?.message?.content;
      if (!isi) {
        throw new Error(`Penyedia ${konf.provider} mengembalikan respons kosong.`);
      }

      const tokenInput = Number(data?.usage?.prompt_tokens || 0);
      const tokenOutput = Number(data?.usage?.completion_tokens || 0);
      stateObservabilitas.totalSukses += 1;
      stateObservabilitas.totalTokenInput += Number.isFinite(tokenInput)
        ? tokenInput
        : 0;
      stateObservabilitas.totalTokenOutput += Number.isFinite(tokenOutput)
        ? tokenOutput
        : 0;
      if (penyediaGagalSebelumnya) {
        stateObservabilitas.totalFailover += 1;
      }

      catatSuksesPenyedia(konf.provider);
      tambahkanRiwayatObservabilitas({
        waktu: new Date().toISOString(),
        operasi: "chat",
        provider: konf.provider,
        model: konf.chatModel,
        status: "sukses",
        failover_dari: penyediaGagalSebelumnya,
        latensi_ms: latensiMs,
        token_input: tokenInput || 0,
        token_output: tokenOutput || 0,
      });

      return isi.trim();
    } catch (err) {
      const latensiMs = Math.max(0, Date.now() - mulai);
      if (latensiMs > 0 && !(err instanceof Error && err.message.includes("status "))) {
        stateObservabilitas.totalLatensiMs += latensiMs;
      }
      stateObservabilitas.totalGagal += 1;
      catatGagalPenyedia(konf.provider);

      const pesan =
        err instanceof Error ? err.message : "Kesalahan tidak diketahui.";
      tambahkanRiwayatObservabilitas({
        waktu: new Date().toISOString(),
        operasi: "chat",
        provider: konf.provider,
        model: konf.chatModel,
        status: "gagal",
        latensi_ms: latensiMs,
        token_input: 0,
        token_output: 0,
        pesan_ringkas: pesanGalatTanpaKunci(pesan),
      });

      penyediaGagalSebelumnya = konf.provider;
      galatTerakhir = err instanceof Error ? err : new Error(pesan);
    }
  }

  throw (
    galatTerakhir ||
    new Error("Seluruh penyedia AI gagal memproses permintaan.")
  );
}

/**
 * Memanggil endpoint `/chat/completions` dengan input gambar base64 (Vision Multimodal)
 * lengkap dengan failover, circuit breaker, dan pencatatan metrik.
 */
export async function panggilVisionAI(opsi: {
  instruksiEkstraksi: string;
  dataUrlGambar: string;
  instruksiSistem?: string;
  suhu?: number;
  formatJson?: boolean;
  timeoutMs?: number;
}): Promise<string> {
  const daftarPenyedia = bacaDaftarPenyediaAI().filter(
    (p) => Boolean(p.apiKey) || p.provider === "ollama_local"
  );

  if (daftarPenyedia.length === 0) {
    throw new Error(
      "Kunci API AI (AI_API_KEY) belum diatur pada berkas konfigurasi. Silakan gunakan API Key gratis dari Google AI Studio, Groq, atau OpenRouter."
    );
  }

  let galatTerakhir: Error | null = null;
  let penyediaGagalSebelumnya: string | undefined;

  for (let i = 0; i < daftarPenyedia.length; i++) {
    const konf = daftarPenyedia[i];
    const kondisi = dapatkanKondisiSirkuit(konf.provider);
    if (kondisi.kondisi === "terbuka" && i < daftarPenyedia.length - 1) {
      penyediaGagalSebelumnya = konf.provider;
      continue;
    }

    const mulai = Date.now();
    stateObservabilitas.totalPermintaan += 1;

    try {
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
        signal: AbortSignal.timeout(opsi.timeoutMs ?? 30000),
      });

      const latensiMs = Date.now() - mulai;
      stateObservabilitas.totalLatensiMs += latensiMs;

      if (!respons.ok) {
        const teksGalat = await respons.text().catch(() => "");
        throw new Error(
          `Vision AI ${konf.provider} status ${respons.status}: ${pesanGalatTanpaKunci(teksGalat)}`
        );
      }

      const data = await respons.json();
      const isi: string | undefined = data?.choices?.[0]?.message?.content;
      if (!isi) {
        throw new Error("Model Vision AI mengembalikan respons kosong.");
      }

      const tokenInput = Number(data?.usage?.prompt_tokens || 0);
      const tokenOutput = Number(data?.usage?.completion_tokens || 0);
      stateObservabilitas.totalSukses += 1;
      stateObservabilitas.totalTokenInput += Number.isFinite(tokenInput)
        ? tokenInput
        : 0;
      stateObservabilitas.totalTokenOutput += Number.isFinite(tokenOutput)
        ? tokenOutput
        : 0;
      if (penyediaGagalSebelumnya) {
        stateObservabilitas.totalFailover += 1;
      }

      catatSuksesPenyedia(konf.provider);
      tambahkanRiwayatObservabilitas({
        waktu: new Date().toISOString(),
        operasi: "vision",
        provider: konf.provider,
        model: konf.visionModel,
        status: "sukses",
        failover_dari: penyediaGagalSebelumnya,
        latensi_ms: latensiMs,
        token_input: tokenInput || 0,
        token_output: tokenOutput || 0,
      });

      return isi.trim();
    } catch (err) {
      const latensiMs = Math.max(0, Date.now() - mulai);
      stateObservabilitas.totalGagal += 1;
      catatGagalPenyedia(konf.provider);
      const pesan =
        err instanceof Error ? err.message : "Kesalahan Vision tidak diketahui.";
      tambahkanRiwayatObservabilitas({
        waktu: new Date().toISOString(),
        operasi: "vision",
        provider: konf.provider,
        model: konf.visionModel,
        status: "gagal",
        latensi_ms: latensiMs,
        token_input: 0,
        token_output: 0,
        pesan_ringkas: pesanGalatTanpaKunci(pesan),
      });
      penyediaGagalSebelumnya = konf.provider;
      galatTerakhir = err instanceof Error ? err : new Error(pesan);
    }
  }

  throw (
    galatTerakhir ||
    new Error("Seluruh penyedia Vision AI gagal memproses gambar.")
  );
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
  if (!konf.embeddingModel || (!konf.apiKey && konf.provider !== "ollama_local")) {
    return null;
  }

  const mulai = Date.now();
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
      signal: AbortSignal.timeout(12000),
    });

    if (!respons.ok) {
      return null;
    }

    const data = await respons.json();
    const vektor = data?.data?.[0]?.embedding;
    if (Array.isArray(vektor)) {
      tambahkanRiwayatObservabilitas({
        waktu: new Date().toISOString(),
        operasi: "embedding",
        provider: konf.provider,
        model: konf.embeddingModel,
        status: "sukses",
        latensi_ms: Date.now() - mulai,
        token_input: Number(data?.usage?.prompt_tokens || 0),
        token_output: 0,
      });
      return vektor;
    }
    return null;
  } catch {
    return null;
  }
}
