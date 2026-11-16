/**
 * Verifikator Matematis & Konsistensi Soal Hitungan/Logika (Code-Assisted Verification) — LOLOS CPNS.
 *
 * Mencegah halusinasi perhitungan LLM pada soal TIU Numerik / Deret Angka / Soal Cerita
 * dengan parser ekspresi aritmetika aman (tanpa `eval` atau eksekusi kode dinamis).
 */

import type {
  KategoriSubtesSKD,
  PilihanJawabanSoal,
  QuestionRow,
} from "../types/database.ts";

export interface HasilVerifikasiButirAI {
  lolos: boolean;
  terverifikasiSecaraMatematis: boolean;
  diperbaikiOtomatis: boolean;
  nilaiTerhitung: number | null;
  metodeVerifikasi:
    | "parser_rumus"
    | "pola_deret"
    | "validasi_struktur_opsi"
    | "gagal_konsistensi";
  alasan: string;
  butir?: QuestionRow;
}

type TokenAritmetika =
  | { jenis: "angka"; nilai: number }
  | { jenis: "op"; simbol: "+" | "-" | "*" | "/" | "^" }
  | { jenis: "kurung"; simbol: "(" | ")" }
  | { jenis: "persen" };

/**
 * Mengevaluasi ekspresi matematika dasar secara deterministik dan aman menggunakan
 * parser recursive-descent (mendukung +, -, *, ×, /, ÷, ^, %, tanda kurung, unary +/-).
 */
export function evaluasiEkspresiAritmetikaAman(ekspresi: string): number | null {
  const bersih = (ekspresi || "")
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/−/g, "-")
    .replace(/,/g, ".")
    .replace(/\s+/g, "");

  if (!bersih || bersih.length > 200) {
    return null;
  }

  // Tolak karakter selain angka, titik desimal, operator dasar, persen, dan kurung
  if (!/^[0-9.+\-*/^()%]+$/.test(bersih)) {
    return null;
  }

  const daftarToken: TokenAritmetika[] = [];
  let i = 0;
  while (i < bersih.length) {
    const ch = bersih[i];
    if ((ch >= "0" && ch <= "9") || ch === ".") {
      let angkaStr = "";
      let jumlahTitik = 0;
      while (
        i < bersih.length &&
        ((bersih[i] >= "0" && bersih[i] <= "9") || bersih[i] === ".")
      ) {
        if (bersih[i] === ".") {
          jumlahTitik += 1;
          if (jumlahTitik > 1) return null;
        }
        angkaStr += bersih[i];
        i += 1;
      }
      const nilai = Number(angkaStr);
      if (!Number.isFinite(nilai)) return null;
      daftarToken.push({ jenis: "angka", nilai });
      continue;
    }

    if (ch === "+" || ch === "-" || ch === "*" || ch === "/" || ch === "^") {
      daftarToken.push({ jenis: "op", simbol: ch });
      i += 1;
      continue;
    }
    if (ch === "(" || ch === ")") {
      daftarToken.push({ jenis: "kurung", simbol: ch });
      i += 1;
      continue;
    }
    if (ch === "%") {
      daftarToken.push({ jenis: "persen" });
      i += 1;
      continue;
    }
    return null;
  }

  let posisi = 0;
  const lihat = () => daftarToken[posisi];

  function bacaEkspresi(): number {
    let kiri = bacaSuku();
    while (true) {
      const tok = lihat();
      if (tok?.jenis === "op" && (tok.simbol === "+" || tok.simbol === "-")) {
        posisi += 1;
        const kanan = bacaSuku();
        kiri = tok.simbol === "+" ? kiri + kanan : kiri - kanan;
      } else {
        break;
      }
    }
    return kiri;
  }

  function bacaSuku(): number {
    let kiri = bacaPangkat();
    while (true) {
      const tok = lihat();
      if (tok?.jenis === "op" && (tok.simbol === "*" || tok.simbol === "/")) {
        posisi += 1;
        const kanan = bacaPangkat();
        if (tok.simbol === "/") {
          if (Math.abs(kanan) < 1e-12) {
            throw new Error("Pembagian nol");
          }
          kiri = kiri / kanan;
        } else {
          kiri = kiri * kanan;
        }
      } else {
        break;
      }
    }
    return kiri;
  }

  function bacaPangkat(): number {
    const dasar = bacaFaktor();
    const tok = lihat();
    if (tok?.jenis === "op" && tok.simbol === "^") {
      posisi += 1;
      const eksponen = bacaPangkat();
      if (Math.abs(eksponen) > 20) {
        throw new Error("Pangkat terlalu besar");
      }
      const hasil = Math.pow(dasar, eksponen);
      if (!Number.isFinite(hasil)) {
        throw new Error("Hasil tak berhingga");
      }
      return hasil;
    }
    return dasar;
  }

  function bacaFaktor(): number {
    const tok = lihat();
    if (!tok) {
      throw new Error("Token habis");
    }

    if (tok.jenis === "op" && (tok.simbol === "+" || tok.simbol === "-")) {
      posisi += 1;
      const val = bacaFaktor();
      return tok.simbol === "-" ? -val : val;
    }

    let hasil: number;
    if (tok.jenis === "kurung" && tok.simbol === "(") {
      posisi += 1;
      hasil = bacaEkspresi();
      const tutup = lihat();
      if (tutup?.jenis !== "kurung" || tutup.simbol !== ")") {
        throw new Error("Kurung tidak seimbang");
      }
      posisi += 1;
    } else if (tok.jenis === "angka") {
      posisi += 1;
      hasil = tok.nilai;
    } else {
      throw new Error("Token tidak terduga");
    }

    while (lihat()?.jenis === "persen") {
      posisi += 1;
      hasil = hasil / 100;
    }
    return hasil;
  }

  try {
    const nilai = bacaEkspresi();
    if (posisi !== daftarToken.length || !Number.isFinite(nilai)) {
      return null;
    }
    return Number(nilai.toFixed(6));
  } catch {
    return null;
  }
}

/**
 * Mengekstrak barisan angka dari teks soal deret dan mencoba memprediksi suku berikutnya
 * secara deterministik (aritmetika, bertingkat, geometri, atau rasio selisih).
 */
export function prediksiSukuBerikutnyaDeret(teksSoal: string): number | null {
  const cocokPotongan = teksSoal.match(
    /(-?\d+(?:[.,]\d+)?(?:\s*,\s*-?\d+(?:[.,]\d+)?){3,})(?:\s*,\s*\.\.\.)?/
  );
  if (!cocokPotongan) return null;

  const angka = cocokPotongan[1]
    .split(",")
    .map((s) => Number(s.trim().replace(",", ".")))
    .filter((n) => Number.isFinite(n));

  if (angka.length < 4) return null;

  const hampirSama = (a: number, b: number) => Math.abs(a - b) <= 1e-4;

  // 1. Deret Aritmetika (selisih konstan)
  const d1 = angka.slice(1).map((v, idx) => v - angka[idx]);
  if (d1.every((d) => hampirSama(d, d1[0]))) {
    return Number((angka[angka.length - 1] + d1[0]).toFixed(6));
  }

  // 2. Deret Bertingkat Orde 2 (selisih tingkat kedua konstan)
  if (d1.length >= 3) {
    const d2 = d1.slice(1).map((v, idx) => v - d1[idx]);
    if (d2.every((d) => hampirSama(d, d2[0]))) {
      const selisihBerikutnya = d1[d1.length - 1] + d2[0];
      return Number((angka[angka.length - 1] + selisihBerikutnya).toFixed(6));
    }
  }

  // 3. Deret Geometri (rasio konstan)
  if (angka.every((v) => Math.abs(v) > 1e-9)) {
    const r = angka.slice(1).map((v, idx) => v / angka[idx]);
    if (r.every((val) => hampirSama(val, r[0]))) {
      return Number((angka[angka.length - 1] * r[0]).toFixed(6));
    }
  }

  // 4. Selisih Berrasio (contoh: +5, +10, +20, +40 -> +80)
  if (d1.every((v) => Math.abs(v) > 1e-9)) {
    const rDiff = d1.slice(1).map((v, idx) => v / d1[idx]);
    if (rDiff.every((val) => hampirSama(val, rDiff[0]))) {
      const selisihBerikut = d1[d1.length - 1] * rDiff[0];
      return Number((angka[angka.length - 1] + selisihBerikut).toFixed(6));
    }
  }

  return null;
}

function ekstrakDaftarAngkaDariOpsi(teksOpsi: string): number[] {
  const bersih = teksOpsi
    .replace(/(?<=\d)[.](?=\d{3}\b)/g, "") // hilangkan pemisah ribuan titik ID (mis. 15.000 -> 15000)
    .replace(/,/g, ".");
  const cocok = bersih.match(/-?\d+(?:\.\d+)?/g);
  if (!cocok) return [];
  return cocok.map((s) => Number(s)).filter((n) => Number.isFinite(n));
}

function opsiMengandungNilai(teksOpsi: string, target: number): boolean {
  const kandidat = ekstrakDaftarAngkaDariOpsi(teksOpsi);
  if (kandidat.length === 0) return false;
  return kandidat.some(
    (n) => Math.abs(n - target) <= Math.max(1e-3, Math.abs(target) * 1e-4)
  );
}

/**
 * Memverifikasi struktur opsi & melakukan pemeriksaan silang perhitungan matematis
 * terhadap soal hasil generasi AI. Mengembalikan `lolos: false` jika ditemukan
 * inkonsistensi fatal yang tidak dapat diperbaiki otomatis.
 */
export function verifikasiButirSoalAI(
  soal: QuestionRow,
  metaVerifikasi?: {
    verificationFormula?: string | null;
    expectedAnswer?: string | number | null;
  }
): HasilVerifikasiButirAI {
  const kategori = soal.category.toUpperCase() as KategoriSubtesSKD;
  if (!soal.question_text?.trim() || !Array.isArray(soal.options) || soal.options.length !== 5) {
    return {
      lolos: false,
      terverifikasiSecaraMatematis: false,
      diperbaikiOtomatis: false,
      nilaiTerhitung: null,
      metodeVerifikasi: "gagal_konsistensi",
      alasan: "Struktur pokok soal atau 5 pilihan jawaban tidak lengkap.",
    };
  }

  const teksUnik = new Set(
    soal.options.map((o) => o.teks.trim().toLowerCase()).filter(Boolean)
  );
  if (teksUnik.size < 5) {
    return {
      lolos: false,
      terverifikasiSecaraMatematis: false,
      diperbaikiOtomatis: false,
      nilaiTerhitung: null,
      metodeVerifikasi: "gagal_konsistensi",
      alasan: "Terdapat pilihan jawaban duplikat atau kosong.",
    };
  }

  if (kategori === "TKP") {
    const skorUrut = soal.options.map((o) => o.skor).sort((a, b) => a - b);
    const validTkp =
      skorUrut.length === 5 &&
      skorUrut.every((nilai, idx) => nilai === idx + 1);
    return {
      lolos: validTkp,
      terverifikasiSecaraMatematis: false,
      diperbaikiOtomatis: false,
      nilaiTerhitung: null,
      metodeVerifikasi: validTkp ? "validasi_struktur_opsi" : "gagal_konsistensi",
      alasan: validTkp
        ? "Skala skor TKP 1–5 tervalidasi lengkap."
        : "Bobot skor TKP tidak membentuk skala unik 1 sampai 5.",
      butir: validTkp ? soal : undefined,
    };
  }

  const indeksKunciBenar = soal.options.reduce<number[]>((acc, o, idx) => {
    if (o.skor === 5) acc.push(idx);
    return acc;
  }, []);

  if (indeksKunciBenar.length !== 1) {
    return {
      lolos: false,
      terverifikasiSecaraMatematis: false,
      diperbaikiOtomatis: false,
      nilaiTerhitung: null,
      metodeVerifikasi: "gagal_konsistensi",
      alasan: "Soal TWK/TIU wajib memiliki tepat satu kunci jawaban bernilai 5.",
    };
  }

  const opsiBenar = soal.options[indeksKunciBenar[0]];
  let targetNumerik: number | null = null;
  let metode: HasilVerifikasiButirAI["metodeVerifikasi"] =
    "validasi_struktur_opsi";

  const formula = (metaVerifikasi?.verificationFormula || "").trim();
  if (formula) {
    const hasilFormula = evaluasiEkspresiAritmetikaAman(formula);
    if (hasilFormula === null) {
      return {
        lolos: false,
        terverifikasiSecaraMatematis: false,
        diperbaikiOtomatis: false,
        nilaiTerhitung: null,
        metodeVerifikasi: "gagal_konsistensi",
        alasan: `Rumus verifikasi tidak dapat dievaluasi secara aman: "${formula}".`,
      };
    }

    if (
      metaVerifikasi?.expectedAnswer !== undefined &&
      metaVerifikasi?.expectedAnswer !== null
    ) {
      const angkaEkspektasi = Number(
        String(metaVerifikasi.expectedAnswer).replace(",", ".").trim()
      );
      if (
        Number.isFinite(angkaEkspektasi) &&
        Math.abs(angkaEkspektasi - hasilFormula) > 1e-2
      ) {
        return {
          lolos: false,
          terverifikasiSecaraMatematis: false,
          diperbaikiOtomatis: false,
          nilaiTerhitung: hasilFormula,
          metodeVerifikasi: "gagal_konsistensi",
          alasan: `Klaim expected_answer (${angkaEkspektasi}) tidak cocok dengan hasil evaluasi rumus (${hasilFormula}).`,
        };
      }
    }

    targetNumerik = hasilFormula;
    metode = "parser_rumus";
  } else if (
    kategori === "TIU" &&
    soal.sub_topic.toLowerCase().includes("deret")
  ) {
    const prediksi = prediksiSukuBerikutnyaDeret(soal.question_text);
    if (prediksi !== null) {
      targetNumerik = prediksi;
      metode = "pola_deret";
    }
  }

  if (targetNumerik !== null) {
    if (opsiMengandungNilai(opsiBenar.teks, targetNumerik)) {
      return {
        lolos: true,
        terverifikasiSecaraMatematis: true,
        diperbaikiOtomatis: false,
        nilaiTerhitung: targetNumerik,
        metodeVerifikasi: metode,
        alasan: `Kunci ${opsiBenar.kunci} (${opsiBenar.teks}) konsisten dengan perhitungan ${targetNumerik}.`,
        butir: soal,
      };
    }

    // Periksa apakah jawaban yang benar ada pada salah satu opsi lain (AI salah memberi label skor)
    const kandidatCocok = soal.options
      .map((o, idx) => ({ idx, teks: o.teks }))
      .filter((item) => opsiMengandungNilai(item.teks, targetNumerik!));

    if (kandidatCocok.length === 1) {
      const idxSah = kandidatCocok[0].idx;
      const opsiDiperbaiki: PilihanJawabanSoal[] = soal.options.map((o, idx) => ({
        ...o,
        skor: idx === idxSah ? 5 : 0,
      }));
      const butirPerbaikan: QuestionRow = {
        ...soal,
        options: opsiDiperbaiki,
      };
      return {
        lolos: true,
        terverifikasiSecaraMatematis: true,
        diperbaikiOtomatis: true,
        nilaiTerhitung: targetNumerik,
        metodeVerifikasi: metode,
        alasan: `Skor +5 dikoreksi otomatis ke opsi ${opsiDiperbaiki[idxSah].kunci} sesuai hasil ${targetNumerik}.`,
        butir: butirPerbaikan,
      };
    }

    return {
      lolos: false,
      terverifikasiSecaraMatematis: false,
      diperbaikiOtomatis: false,
      nilaiTerhitung: targetNumerik,
      metodeVerifikasi: "gagal_konsistensi",
      alasan: `Hasil hitungan deterministik (${targetNumerik}) tidak cocok dengan opsi berkunci ${opsiBenar.kunci} (${opsiBenar.teks}).`,
    };
  }

  return {
    lolos: true,
    terverifikasiSecaraMatematis: false,
    diperbaikiOtomatis: false,
    nilaiTerhitung: null,
    metodeVerifikasi: "validasi_struktur_opsi",
    alasan: "Struktur 5 pilihan dan kunci jawaban tervalidasi.",
    butir: soal,
  };
}
