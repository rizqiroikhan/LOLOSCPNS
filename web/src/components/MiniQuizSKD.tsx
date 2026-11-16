"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  RotateCcw,
  Sparkles,
} from "lucide-react";
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
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile-lg sm:p-8 lg:p-10">
      {/* Aksen sudut halus */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-50/70 blur-3xl" />

      <div className="relative mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-slate-200/80 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-blue-800">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Uji Instan Tanpa Akun
          </span>
          <h3 className="mt-2.5 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
            Kuis Singkat Interaktif 3 Soal SKD (TWK, TIU, TKP)
          </h3>
          <p className="mt-1 text-xs text-slate-600 sm:text-sm">
            Rasakan pengalaman pengerjaan soal berstandar Keputusan Menteri PANRB
            Nomor 321 Tahun 2024 beserta pembahasan langsung.
          </p>
        </div>

        <div className="flex items-center gap-1.5 rounded-2xl border border-slate-200/80 bg-slate-100/80 p-1.5">
          {SOAL_KUIS_SINGKAT_BERANDA.map((s, idx) => {
            const sedangAktif = !sudahSelesai && idx === indeksSoal;
            const sudahTerisi = Boolean(jawaban[s.id]);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setSudahSelesai(false);
                  setIndeksSoal(idx);
                }}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold transition ${
                  sedangAktif
                    ? "bg-slate-900 text-white shadow-sm"
                    : sudahTerisi
                      ? "bg-emerald-100/90 text-emerald-900 hover:bg-emerald-200/70"
                      : "text-slate-600 hover:bg-white/70 hover:text-slate-900"
                }`}
              >
                <span className="font-mono font-numeric">{idx + 1}.</span>
                <span>{s.category}</span>
                {sudahTerisi && !sedangAktif && (
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {!sudahSelesai ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={soalAktif.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-slate-900 px-2.5 py-1 font-mono text-xs font-bold text-white font-numeric">
                  Butir {indeksSoal + 1} / 3
                </span>
                <span className="rounded-lg border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-bold text-blue-900">
                  Sub-Tes {soalAktif.category} • {soalAktif.sub_topic}
                </span>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                Tingkat Kesulitan:{" "}
                <strong className="capitalize text-slate-900">
                  {soalAktif.difficulty}
                </strong>
              </span>
            </div>

            <div className="mb-6 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 text-sm font-medium leading-relaxed text-slate-900 sm:text-base">
              {soalAktif.question_text}
            </div>

            <div className="space-y-2.5">
              {soalAktif.options.map((opsi) => {
                const aktif = pilihanTerpilih === opsi.kunci;
                return (
                  <button
                    key={opsi.kunci}
                    type="button"
                    onClick={() => pilihJawaban(opsi.kunci)}
                    className={`group flex w-full items-start gap-3.5 rounded-2xl border p-4 text-left text-sm transition ${
                      aktif
                        ? "border-blue-600 bg-blue-50/70 font-semibold text-slate-950 shadow-sm ring-2 ring-blue-100"
                        : "border-slate-200/90 bg-white text-slate-800 hover:border-blue-300 hover:bg-slate-50/70"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-extrabold transition ${
                        aktif
                          ? "bg-blue-700 text-white"
                          : "border border-slate-200 bg-slate-100 text-slate-700 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700"
                      }`}
                    >
                      {opsi.kunci}
                    </span>
                    <span className="pt-0.5 leading-relaxed">{opsi.teks}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 pt-5">
              <button
                type="button"
                disabled={indeksSoal === 0}
                onClick={() => setIndeksSoal((s) => Math.max(0, s - 1))}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50 disabled:opacity-40"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Soal Sebelumnya</span>
              </button>

              <button
                type="button"
                onClick={lanjutSoalBerikutnya}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-800 active:scale-[0.99] sm:text-sm"
              >
                <span>
                  {indeksSoal < SOAL_KUIS_SINGKAT_BERANDA.length - 1
                    ? "Simpan & Lanjut Soal Berikutnya"
                    : "Lihat Skor & Pembahasan Kuis"}
                </span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mb-6 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/60 p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  <Award className="h-4 w-4 text-emerald-600" />
                  Hasil Kuis Singkat SKD Anda
                </span>
                <h4 className="mt-1 font-mono text-2xl font-extrabold text-slate-900 font-numeric sm:text-3xl">
                  Skor Diperoleh: {totalSkorKuis} / 15 Poin
                </h4>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  TWK &amp; TIU bernilai +5 untuk jawaban tepat, sedangkan TKP
                  menggunakan skala berjenjang 1 s.d. 5.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={ulangiKuis}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Ulangi Kuis Singkat</span>
                </button>
                <Link
                  href="/simulasi/skd/paket-perdana-gratis"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-700 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-800"
                >
                  <span>Lanjut Simulasi Penuh 110 Soal</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {rincianHasil.map((item, idx) => (
              <div
                key={item.butir.id}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 text-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 font-bold text-slate-900">
                    <BookOpenCheck className="h-4 w-4 text-blue-700" />
                    <span>
                      Soal {idx + 1} ({item.butir.category} —{" "}
                      {item.butir.sub_topic})
                    </span>
                  </span>
                  <span
                    className={`rounded-lg px-3 py-1 font-mono text-xs font-bold font-numeric ${
                      item.skorDiperoleh === 5
                        ? "border border-emerald-200 bg-emerald-100/80 text-emerald-900"
                        : "border border-amber-200 bg-amber-100/80 text-amber-900"
                    }`}
                  >
                    Jawaban Anda: {item.kunciPeserta || "Kosong"} (+
                    {item.skorDiperoleh} Poin) | Kunci Skor Tertinggi:{" "}
                    {item.opsiTerbaik.kunci}
                  </span>
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-700 sm:text-sm">
                  <strong className="text-slate-900">Pembahasan Resmi:</strong>{" "}
                  {item.butir.explanation}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
