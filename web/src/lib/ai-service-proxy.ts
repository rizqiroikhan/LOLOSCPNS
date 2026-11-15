/**
 * Helper Komunikasi Server-ke-Server ke Layanan AI (FastAPI) — LOLOS CPNS.
 * Menjamin seluruh panggilan dari Next.js ke Python AI Service:
 * 1. Menggunakan URL privat `AI_SERVICE_URL` terlebih dahulu (tidak membocorkan ke klien).
 * 2. Menyertakan token rahasia bersama `AI_SERVICE_INTERNAL_SECRET` via header Authorization Bearer.
 * 3. Memasang batas waktu permintaan (`AbortSignal.timeout`) agar route tidak menggantung.
 */

export const BATAS_UNGGAH_BERKAS_BYTES = 15 * 1024 * 1024; // 15 MB

export function dapatkanUrlLayananAI(): string {
  const url =
    process.env.AI_SERVICE_URL ||
    process.env.NEXT_PUBLIC_AI_SERVICE_URL ||
    "http://localhost:8000";
  return url.replace(/\/+$/, "");
}

export function bangunHeaderAutentikasiAI(
  headerTambahan?: HeadersInit
): Headers {
  const headers = new Headers(headerTambahan);
  const rahasia = process.env.AI_SERVICE_INTERNAL_SECRET || "";
  if (rahasia) {
    headers.set("Authorization", `Bearer ${rahasia}`);
  }
  return headers;
}

export async function panggilLayananAI(
  jalurEndpoint: string,
  opsi: RequestInit & { timeoutMs?: number } = {}
): Promise<Response> {
  const { timeoutMs = 15000, headers, ...sisaInit } = opsi;
  const jalurBersih = jalurEndpoint.startsWith("/")
    ? jalurEndpoint
    : `/${jalurEndpoint}`;
  const urlTarget = `${dapatkanUrlLayananAI()}${jalurBersih}`;

  return fetch(urlTarget, {
    ...sisaInit,
    headers: bangunHeaderAutentikasiAI(headers),
    signal: AbortSignal.timeout(timeoutMs),
  });
}

export function validasiBerkasUnggahanAdmin(
  berkas: File | null,
  opsi: { hanyaPdf?: boolean } = {}
): { sah: true } | { sah: false; status: number; pesan: string } {
  if (!berkas) {
    return {
      sah: false,
      status: 400,
      pesan: "Berkas unggahan wajib disertakan.",
    };
  }
  if (berkas.size <= 0) {
    return {
      sah: false,
      status: 400,
      pesan: "Berkas unggahan tidak boleh kosong (0 byte).",
    };
  }
  if (berkas.size > BATAS_UNGGAH_BERKAS_BYTES) {
    return {
      sah: false,
      status: 413,
      pesan:
        "Ukuran berkas melebihi batas maksimal 15 MB. Silakan kompres atau perkecil ukuran dokumen terlebih dahulu.",
    };
  }

  const nama = (berkas.name || "").toLowerCase();
  const tipe = (berkas.type || "").toLowerCase();

  if (opsi.hanyaPdf) {
    const validPdf = tipe.includes("pdf") || nama.endsWith(".pdf");
    if (!validPdf) {
      return {
        sah: false,
        status: 400,
        pesan: "Format dokumen regulasi wajib berupa berkas PDF (.pdf).",
      };
    }
  } else {
    const validSoal =
      tipe.includes("pdf") ||
      tipe.includes("png") ||
      tipe.includes("jpeg") ||
      tipe.includes("webp") ||
      nama.endsWith(".pdf") ||
      nama.endsWith(".png") ||
      nama.endsWith(".jpg") ||
      nama.endsWith(".jpeg") ||
      nama.endsWith(".webp");
    if (!validSoal) {
      return {
        sah: false,
        status: 400,
        pesan:
          "Format berkas pindaian tidak didukung. Gunakan PDF, PNG, JPG, atau WEBP.",
      };
    }
  }

  return { sah: true };
}
