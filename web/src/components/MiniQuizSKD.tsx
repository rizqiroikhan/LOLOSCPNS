"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SOAL_KUIS_SINGKAT_BERANDA } from "@/lib/cat-question-bank";
import type { PetaJawabanPeserta } from "@/types/database";

export default function KuisSingkatInteraktifSKD() {
  const [indeksSoal, setIndeksSoal] = useState<number>(0);
  const [jawaban, setJawaban] = useState<PetaJawabanPeserta>({});
  const [sudahSelesai, setSudahSelesai] = useState<boolean>(false);

  const soalAktif = SOAL_KUIS_SINGKAT_BERANDA[indeksSoal];
  const pilihanTerpilih = jawaban[soalAktif.id];

  function pilihJawaban(kunci: "A" | "B" | "C" | "D" | "E") {
    setJawaban((sebelumnya) => ({
      ...sebelumnya,
      [soalAktif.id]: kunci,
    }));
  }

  function lanjutSoalBerikutnya() {
    if (indeksSoal < SOAL_KUIS_SINGKAT_BERANDA.length - 1) {
      setIndeksSoal((s) => s + 1);
    } else {
      setSudahSelesai(true);
    }
  }

  function ulangiKuis() {
    setJawaban({});
    setIndeksSoal(0);
    setSudahSelesai(false);
  }

  const rincianHasil = SOAL_KUIS_SINGKAT_BERANDA.map((butir) => {
    const kunciPeserta = jawaban[butir.id];
    const opsiPeserta = butir.options.find((o) => o.kunci === kunciPeserta);
    const opsiTerbaik = butir.options.reduce((a, b) =>
      b.skor > a.skor ? b : a
    );
    return {
      butir,
      kunciPeserta,
      skorDiperoleh: opsiPeserta ? opsiPeserta.skor : 0,
      opsiTerbaik,
    };
  });

  const totalSkorKuis = rincianHasil.reduce(
    (akumulasi, item) => akumulasi + item.skorDiperoleh,
    0
  );

  return (
    <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-md sm:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-block rounded-md bg-blue-600 px-2.5 py-1 text-xs font-bold text-white">
            COBA LANGSUNG TANPA DAFTAR
          </span>
          <h3 className="mt-2 text-xl font-bold text-slate-900">
            Kuis Singkat Interaktif 3 Soal SKD (TWK, TIU, TKP)
          </h3>
          <p className="text-xs text-slate-600">
            Uji kesiapan awal Anda dengan 3 sampel soal standar Kepmenpan-RB
            Nomor 321 Tahun 2024.
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          {SOAL_KUIS_SINGKAT_BERANDA.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setSudahSelesai(false);
                setIndeksSoal(idx);
              }}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                !sudahSelesai && idx === indeksSoal
                  ? "bg-blue-700 text-white"
                  : jawaban[s.id]
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {idx + 1}. {s.category}
            </button>
          ))}
        </div>
      </div>

      {!sudahSelesai ? (
        <div>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
              Soal {indeksSoal + 1} dari 3 — Sub-Tes {soalAktif.category} (
              {soalAktif.sub_topic})
            </span>
            <span className="text-xs font-medium text-slate-500">
              Tingkat Kesulitan:{" "}
              <strong className="capitalize text-slate-800">
                {soalAktif.difficulty}
              </strong>
            </span>
          </div>

          <p className="mb-5 rounded-xl bg-slate-50 p-4 text-sm font-medium leading-relaxed text-slate-900 sm:text-base">
            {soalAktif.question_text}
          </p>

          <div className="space-y-2.5">
            {soalAktif.options.map((opsi) => {
              const aktif = pilihanTerpilih === opsi.kunci;
              return (
                <button
                  key={opsi.kunci}
                  type="button"
                  onClick={() => pilihJawaban(opsi.kunci)}
                  className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-sm transition ${
                    aktif
                      ? "border-blue-600 bg-blue-50/80 font-semibold text-blue-950 shadow-sm"
                      : "border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                      aktif
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {opsi.kunci}
                  </span>
                  <span className="leading-relaxed">{opsi.teks}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
            <button
              type="button"
              disabled={indeksSoal === 0}
              onClick={() => setIndeksSoal((s) => Math.max(0, s - 1))}
              className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40"
            >
              ← Soal Sebelumnya
            </button>

            <button
              type="button"
              onClick={lanjutSoalBerikutnya}
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-700 sm:text-sm"
            >
              {indeksSoal < SOAL_KUIS_SINGKAT_BERANDA.length - 1
                ? "Simpan & Lanjut Soal Berikutnya →"
                : "Lihat Skor & Pembahasan Kuis →"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Hasil Kuis Singkat SKD Anda
                </span>
                <h4 className="mt-1 text-2xl font-extrabold text-slate-900">
                  Skor Diperoleh: {totalSkorKuis} / 15 Poin
                </h4>
                <p className="mt-1 text-xs text-slate-700">
                  TWK & TIU bernilai +5 untuk jawaban tepat, sedangkan TKP
                  menggunakan skala berjenjang 1 s.d. 5.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={ulangiKuis}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Ulangi Kuis Singkat
                </button>
                <Link
                  href="/simulasi/skd/paket-perdana-gratis"
                  className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700"
                >
                  Lanjut Simulasi Penuh 110 Soal →
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {rincianHasil.map((item, idx) => (
              <div
                key={item.butir.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-slate-900">
                    Soal {idx + 1} ({item.butir.category} —{" "}
                    {item.butir.sub_topic})
                  </span>
                  <span
                    className={`rounded-md px-2.5 py-0.5 text-xs font-bold ${
                      item.skorDiperoleh === 5
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    Jawaban Anda: {item.kunciPeserta || "Kosong"} (+
                    {item.skorDiperoleh} Poin) | Kunci Skor Tertinggi:{" "}
                    {item.opsiTerbaik.kunci}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700">
                  <strong>Pembahasan:</strong> {item.butir.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
