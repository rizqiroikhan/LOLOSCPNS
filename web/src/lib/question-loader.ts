/**
 * Pemuat Bank Soal SKD Otoritatif Sisi Server — LOLOS CPNS.
 * Menggabungkan butir soal berstatus `disetujui` dari basis data Supabase (bila tersedia)
 * dengan bank soal kurasi 110 butir unik per paket sehingga:
 * 1. Soal yang disetujui Admin lewat Menu Kurasi langsung hadir di simulasi nyata.
 * 2. Komposisi tepat 30 TWK + 35 TIU + 45 TKP (total 110 soal) selalu terjaga.
 * 3. Penilaian pada `/api/tryout/submit` menggunakan sumber otoritatif sisi server.
 */

import type { QuestionRow } from "../types/database.ts";
import {
  bangunBankSoalSimulasi110,
  type SoalSimulasiCAT,
} from "./cat-question-bank.ts";
import {
  apakahKonfigurasiSupabaseValid,
  buatKlienSupabaseServer,
} from "./supabase.ts";

async function ambilSoalDisetujuiDariDB(): Promise<QuestionRow[]> {
  if (!apakahKonfigurasiSupabaseValid()) {
    return [];
  }

  try {
    const supabase = buatKlienSupabaseServer();
    const { data, error } = await supabase
      .from("questions")
      .select(
        "id, stage, category, sub_topic, difficulty, question_text, image_url, options, explanation, source_reference, is_paraphrased, status, created_at"
      )
      .eq("stage", "SKD")
      .eq("status", "disetujui")
      .order("created_at", { ascending: true })
      .order("id", { ascending: true })
      .limit(2000);

    if (error || !Array.isArray(data)) {
      return [];
    }

    return (data as QuestionRow[]).filter(
      (baris) =>
        Array.isArray(baris.options) &&
        baris.options.length === 5 &&
        Boolean(baris.question_text)
    );
  } catch {
    return [];
  }
}

function gabungkanKategori(
  dariDb: QuestionRow[],
  cadangan: SoalSimulasiCAT[],
  maks: number
): SoalSimulasiCAT[] {
  const stemSudahAda = new Set<string>();
  const hasil: SoalSimulasiCAT[] = [];

  for (const soal of dariDb) {
    if (hasil.length >= maks) break;
    const kunciStem = soal.question_text.trim().toLowerCase();
    if (stemSudahAda.has(kunciStem)) continue;
    stemSudahAda.add(kunciStem);
    hasil.push({
      ...soal,
      nomor_urut: 0,
    });
  }

  for (const soal of cadangan) {
    if (hasil.length >= maks) break;
    const kunciStem = soal.question_text.trim().toLowerCase();
    if (stemSudahAda.has(kunciStem)) continue;
    stemSudahAda.add(kunciStem);
    hasil.push(soal);
  }

  return hasil.slice(0, maks);
}

function indeksSetPaket(idPaket: string): number {
  switch (idPaket) {
    case "paket-intensif-skd":
    case "paket-terpadu-cpns":
      return 1;
    case "paket-akbar-skd-1":
      return 2;
    case "paket-akbar-skd-2":
      return 3;
    case "paket-akbar-skd-3":
      return 4;
    case "paket-akbar-skd-4":
      return 5;
    case "paket-akbar-skd-5":
      return 6;
    default:
      return 0;
  }
}

/**
 * Menghasilkan tepat 110 soal SKD otoritatif sisi server untuk suatu paket tryout.
 */
export async function muatBankSoalOtoritatif110(
  idPaket: string
): Promise<SoalSimulasiCAT[]> {
  const bankBawaan = bangunBankSoalSimulasi110(idPaket);
  const soalDb = await ambilSoalDisetujuiDariDB();

  if (soalDb.length === 0) {
    return bankBawaan;
  }

  const indeks = indeksSetPaket(idPaket);
  const dbTwk = soalDb.filter((q) => q.category === "TWK");
  const dbTiu = soalDb.filter((q) => q.category === "TIU");
  const dbTkp = soalDb.filter((q) => q.category === "TKP");

  const twkTerpilih = gabungkanKategori(
    dbTwk.slice(indeks * 30, (indeks + 1) * 30),
    bankBawaan.filter((q) => q.category === "TWK"),
    30
  );
  const tiuTerpilih = gabungkanKategori(
    dbTiu.slice(indeks * 35, (indeks + 1) * 35),
    bankBawaan.filter((q) => q.category === "TIU"),
    35
  );
  const tkpTerpilih = gabungkanKategori(
    dbTkp.slice(indeks * 45, (indeks + 1) * 45),
    bankBawaan.filter((q) => q.category === "TKP"),
    45
  );

  const gabungan = [...twkTerpilih, ...tiuTerpilih, ...tkpTerpilih];
  return gabungan.map((item, idx) => ({
    ...item,
    nomor_urut: idx + 1,
  }));
}

/**
 * Khusus endpoint penilaian `/api/tryout/submit`: menyusun lookup gabungan
 * sehingga bila admin menyetujui soal baru saat ujian berlangsung, soal bawaan maupun DB
 * tetap dapat dinilai akurat berdasarkan daftar ID yang dikirim peserta.
 */
export async function muatPetaPenilaianOtoritatif(
  idPaket: string,
  daftarIdSoalPeserta?: string[]
): Promise<SoalSimulasiCAT[]> {
  const soalUtama = await muatBankSoalOtoritatif110(idPaket);
  if (!daftarIdSoalPeserta || daftarIdSoalPeserta.length === 0) {
    return soalUtama;
  }

  const olehId = new Map<string, SoalSimulasiCAT>();
  for (const s of soalUtama) {
    olehId.set(s.id, s);
  }

  // Jika semua ID peserta sudah cocok, kembalikan langsung dalam urutan otoritatif.
  const semuaCocok = daftarIdSoalPeserta.every((id) => olehId.has(id));
  if (semuaCocok) {
    return soalUtama;
  }

  // Tambahkan fallback bank bawaan & DB jika terdapat ID dari sesi sebelumnya.
  for (const s of bangunBankSoalSimulasi110(idPaket)) {
    if (!olehId.has(s.id)) olehId.set(s.id, s);
  }
  const soalDb = await ambilSoalDisetujuiDariDB();
  for (const q of soalDb) {
    if (!olehId.has(q.id)) {
      olehId.set(q.id, { ...q, nomor_urut: 0 });
    }
  }

  const terurut: SoalSimulasiCAT[] = [];
  const dipakai = new Set<string>();
  for (const id of daftarIdSoalPeserta) {
    const cocok = olehId.get(id);
    if (cocok && !dipakai.has(id)) {
      dipakai.add(id);
      terurut.push({ ...cocok, nomor_urut: terurut.length + 1 });
    }
  }
  for (const s of soalUtama) {
    if (terurut.length >= 110) break;
    if (!dipakai.has(s.id)) {
      dipakai.add(s.id);
      terurut.push({ ...s, nomor_urut: terurut.length + 1 });
    }
  }
  return terurut.slice(0, 110);
}
