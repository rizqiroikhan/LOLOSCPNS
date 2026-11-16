"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  Award,
  BarChart3,
  BookOpenCheck,
  Bot,
  Calculator,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  Layers,
  Menu,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import KuisSingkatInteraktifSKD from "@/components/MiniQuizSKD";
import NavbarPeserta from "@/components/NavbarPeserta";
import { REGULASI_SKD_321_2024 } from "@/lib/scoring-engine";
import type { JenisFormasiSKD } from "@/types/database";

const LABEL_RINGKAS_FORMASI: Record<JenisFormasiSKD, string> = {
  umum: "Umum",
  kalimantan: "Putra/Putri Kalimantan",
  cumlaude: "Lulusan Terbaik (Cumlaude)",
  diaspora: "Diaspora",
  disabilitas: "Penyandang Disabilitas",
  papua: "Putra/Putri Papua",
  daerah_tertinggal: "Daerah Tertinggal",
};

export default function HalamanUtama() {
  const [formasiPilihan, setFormasiPilihan] =
    useState<JenisFormasiSKD>("umum");
  const [menuSelulerTerbuka, setMenuSelulerTerbuka] = useState(false);

  const daftarFormasi = Object.values(
    REGULASI_SKD_321_2024.passing_grades_json
  );
  const aturanAktif =
    REGULASI_SKD_321_2024.passing_grades_json[formasiPilihan];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* BILAH NAVIGASI ATAS */}
      <nav className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo-lolos-cpns.jpg"
              alt="Logo LOLOS CPNS"
              className="h-10 w-auto object-contain mix-blend-multiply sm:h-11"
            />
            <span className="hidden items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/90 px-2.5 py-0.5 text-[11px] font-bold text-blue-800 lg:inline-flex">
              <Scale className="h-3 w-3 text-blue-700" />
              Kepmenpan-RB No. 321 Tahun 2024
            </span>
          </Link>

          <div className="hidden items-center gap-6 text-xs font-semibold text-slate-600 md:flex lg:text-sm">
            <a href="#kuis-singkat" className="transition hover:text-blue-700">
              Kuis Singkat SKD
            </a>
            <a
              href="#alur-persiapan"
              className="transition hover:text-blue-700"
            >
              Alur Persiapan
            </a>
            <a href="#perbandingan" className="transition hover:text-blue-700">
              Keunggulan
            </a>
            <a href="#paket-belajar" className="transition hover:text-blue-700">
              Paket Belajar
            </a>
            <Link href="/pembayaran" className="transition hover:text-blue-700">
              Aktivasi Paket
            </Link>
          </div>

          <div className="hidden sm:block">
            <NavbarPeserta inline />
          </div>

          <button
            type="button"
            aria-label="Buka menu navigasi"
            onClick={() => setMenuSelulerTerbuka((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 sm:hidden"
          >
            {menuSelulerTerbuka ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {menuSelulerTerbuka && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 sm:hidden">
            <div className="mb-4 flex flex-col gap-2 text-xs font-semibold text-slate-700">
              <a
                href="#kuis-singkat"
                onClick={() => setMenuSelulerTerbuka(false)}
                className="rounded-lg px-2 py-1.5 hover:bg-slate-50"
              >
                Kuis Singkat SKD
              </a>
              <a
                href="#alur-persiapan"
                onClick={() => setMenuSelulerTerbuka(false)}
                className="rounded-lg px-2 py-1.5 hover:bg-slate-50"
              >
                Alur Persiapan
              </a>
              <a
                href="#perbandingan"
                onClick={() => setMenuSelulerTerbuka(false)}
                className="rounded-lg px-2 py-1.5 hover:bg-slate-50"
              >
                Keunggulan Sistem
              </a>
              <a
                href="#paket-belajar"
                onClick={() => setMenuSelulerTerbuka(false)}
                className="rounded-lg px-2 py-1.5 hover:bg-slate-50"
              >
                Paket Belajar
              </a>
              <Link
                href="/pembayaran"
                onClick={() => setMenuSelulerTerbuka(false)}
                className="rounded-lg px-2 py-1.5 hover:bg-slate-50"
              >
                Aktivasi Paket
              </Link>
            </div>
            <NavbarPeserta inline />
          </div>
        )}
      </nav>

      {/* BAGIAN UTAMA (HERO SPLIT ARCHITECTURE) */}
      <section className="relative overflow-hidden border-b border-slate-200/90 bg-white bg-grid-architectural py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50/50 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Kolom Kiri: Editorial Value Proposition */}
            <div className="lg:col-span-7 lg:pt-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/90 px-3.5 py-1.5 text-xs font-extrabold text-blue-900 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-700" />
                <span>
                  Platform Simulasi CAT CPNS Berbasis AI &amp; Regulasi Resmi
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl">
                Taklukkan Nilai Ambang Batas{" "}
                <span className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  SKD CPNS
                </span>{" "}
                dengan Presisi &amp; Tutor AI
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Dirancang 100% mengacu pada{" "}
                <strong className="font-bold text-slate-900">
                  Keputusan Menteri PANRB Nomor 321 Tahun 2024
                </strong>{" "}
                (110 soal: 30 TWK, 35 TIU, 45 TKP). Mendukung evaluasi akurat
                untuk seluruh{" "}
                <strong className="font-bold text-slate-900">
                  7 kategori formasi
                </strong>
                , aksesibilitas disabilitas sensorik netra (130 menit), serta
                pembahasan mendalam berbahasa Indonesia baku.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href={`/simulasi/skd/paket-perdana-gratis?formasi=${formasiPilihan}`}
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-700 px-6 py-4 text-sm font-extrabold text-white shadow-tactile transition hover:bg-blue-800 active:scale-[0.99]"
                >
                  <span>Coba Simulasi CAT SKD 110 Soal (Gratis)</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#kuis-singkat"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm font-bold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
                >
                  <BookOpenCheck className="h-4 w-4 text-blue-700" />
                  <span>Uji 3 Soal Kuis Singkat</span>
                </a>
              </div>

              {/* Strip Metrik Numerik Presisi */}
              <div className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-slate-200/90 bg-slate-50/90 p-4 sm:gap-5 sm:p-5">
                <div className="border-r border-slate-200/80 pr-2 sm:pr-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                    <Layers className="h-3.5 w-3.5" />
                    <span>Komposisi</span>
                  </div>
                  <p className="mt-1 font-mono text-xl font-extrabold text-slate-950 font-numeric sm:text-2xl">
                    110 Butir
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-500 sm:text-xs">
                    Standar Resmi CAT BKN (Skor Maks. 550)
                  </p>
                </div>

                <div className="border-r border-slate-200/80 pr-2 sm:pr-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                    <Target className="h-3.5 w-3.5" />
                    <span>Kategorisasi</span>
                  </div>
                  <p className="mt-1 font-mono text-xl font-extrabold text-slate-950 font-numeric sm:text-2xl">
                    7 Formasi
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-500 sm:text-xs">
                    Evaluasi Per Sub-Tes &amp; Kumulatif Akurat
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Durasi Ujian</span>
                  </div>
                  <p className="mt-1 font-mono text-xl font-extrabold text-slate-950 font-numeric sm:text-2xl">
                    100 / 130m
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-500 sm:text-xs">
                    Reguler &amp; Disabilitas Sensorik Netra
                  </p>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Kalkulator Regulasi Tactile Inspector */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile-lg sm:p-7">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-blue-700">
                    <Calculator className="h-4 w-4" />
                    <span>Kalkulator Regulasi Kepmenpan-RB 321/2024</span>
                  </span>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-bold text-slate-700 font-numeric">
                    Maks 550
                  </span>
                </div>

                <h2 className="mt-2 text-lg font-extrabold text-slate-900 sm:text-xl">
                  Periksa Syarat Nilai Ambang Batas Formasi Anda
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Pilih kategori kebutuhan formasi lamaran untuk memetakan syarat
                  kelulusan resmi SKD:
                </p>

                {/* Pemilih Taktil 7 Formasi + Aksesibilitas Select */}
                <div className="mt-4">
                  <label
                    htmlFor="select-formasi-hero"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    Kategori Formasi Lamaran (7 Jalur Resmi)
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {daftarFormasi.map((f) => {
                      const terpilih = formasiPilihan === f.kode_formasi;
                      return (
                        <button
                          key={f.kode_formasi}
                          type="button"
                          onClick={() => setFormasiPilihan(f.kode_formasi)}
                          className={`rounded-xl border px-3 py-1.5 text-xs font-bold transition ${
                            terpilih
                              ? "border-blue-700 bg-blue-700 text-white shadow-sm"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-white"
                          }`}
                        >
                          {LABEL_RINGKAS_FORMASI[f.kode_formasi] ||
                            f.nama_kategori}
                        </button>
                      );
                    })}
                  </div>

                  {/* Select sinkron untuk pembaca layar / kemudahan akses */}
                  <select
                    id="select-formasi-hero"
                    aria-label="Pilih Kategori Formasi Lamaran"
                    value={formasiPilihan}
                    onChange={(e) =>
                      setFormasiPilihan(e.target.value as JenisFormasiSKD)
                    }
                    className="mt-2.5 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs font-semibold text-slate-700 outline-none focus:border-blue-600"
                  >
                    {daftarFormasi.map((f) => (
                      <option key={f.kode_formasi} value={f.kode_formasi}>
                        {f.nama_kategori}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Panel Parameter Dinamis */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={formasiPilihan}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.16 }}
                    className="mt-4 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 via-white to-slate-50 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-bold text-slate-700">
                        Mode Evaluasi Kelulusan:
                      </span>
                      <span className="rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-white">
                        {aturanAktif.mode_evaluasi === "per_subtes"
                          ? "Wajib Lulus Per Sub-Tes"
                          : "Kumulatif SKD & Sub-Tes TIU"}
                      </span>
                    </div>

                    {aturanAktif.mode_evaluasi === "per_subtes" ? (
                      <div className="mt-3.5 grid grid-cols-3 gap-2.5 text-center">
                        {[
                          {
                            kode: "TWK",
                            maks: 150,
                            batas: aturanAktif.ambang_batas_subtes.TWK,
                            warnaBar: "bg-blue-600",
                          },
                          {
                            kode: "TIU",
                            maks: 175,
                            batas: aturanAktif.ambang_batas_subtes.TIU,
                            warnaBar: "bg-indigo-600",
                          },
                          {
                            kode: "TKP",
                            maks: 225,
                            batas: aturanAktif.ambang_batas_subtes.TKP,
                            warnaBar: "bg-emerald-600",
                          },
                        ].map((sub) => {
                          const persen = Math.round(
                            ((sub.batas ?? 0) / sub.maks) * 100
                          );
                          return (
                            <div
                              key={sub.kode}
                              className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm"
                            >
                              <span className="block text-[11px] font-bold text-slate-500">
                                {sub.kode} (Maks {sub.maks})
                              </span>
                              <p className="mt-1 font-mono text-xl font-extrabold text-slate-950 font-numeric">
                                ≥ {sub.batas}
                              </p>
                              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                                <div
                                  className={`h-full rounded-full ${sub.warnaBar}`}
                                  style={{ width: `${persen}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="mt-3.5 grid grid-cols-2 gap-3 text-center">
                        <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-sm">
                          <span className="block text-xs font-bold text-slate-500">
                            Nilai Kumulatif SKD
                          </span>
                          <p className="mt-1 font-mono text-2xl font-extrabold text-blue-700 font-numeric">
                            ≥ {aturanAktif.ambang_batas_kumulatif}
                          </p>
                          <span className="mt-0.5 block font-mono text-[11px] text-slate-400 font-numeric">
                            dari Maksimal 550 Poin
                          </span>
                        </div>
                        <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-sm">
                          <span className="block text-xs font-bold text-slate-500">
                            Nilai Minimal TIU
                          </span>
                          <p className="mt-1 font-mono text-2xl font-extrabold text-indigo-700 font-numeric">
                            ≥ {aturanAktif.ambang_batas_tiu}
                          </p>
                          <span className="mt-0.5 block font-mono text-[11px] text-slate-400 font-numeric">
                            dari Maksimal 175 Poin
                          </span>
                        </div>
                      </div>
                    )}

                    {formasiPilihan === "disabilitas" && (
                      <div className="mt-3 flex items-center gap-2 rounded-xl border border-blue-200/80 bg-blue-50/90 px-3 py-2 text-[11px] font-semibold text-blue-900">
                        <Accessibility className="h-4 w-4 shrink-0 text-blue-700" />
                        <span>
                          Tersedia mode khusus{" "}
                          <strong>Disabilitas Sensorik Netra</strong> dengan
                          perpanjangan durasi resmi menjadi{" "}
                          <strong className="font-mono font-numeric">
                            130 menit
                          </strong>
                          .
                        </span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <Link
                  href={`/simulasi/skd/paket-perdana-gratis?formasi=${formasiPilihan}`}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3.5 text-center text-sm font-bold text-white shadow-sm transition hover:bg-slate-800"
                >
                  <span>
                    Mulai Simulasi untuk {aturanAktif.nama_kategori}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 2: WIDGET KUIS SINGKAT INTERAKTIF 3 SOAL SKD */}
      <section id="kuis-singkat" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <KuisSingkatInteraktifSKD />
      </section>

      {/* BAGIAN 3: ALUR PERSIAPAN TERPADU (ASYMMETRIC BENTO GRID) */}
      <section
        id="alur-persiapan"
        className="border-y border-slate-200/90 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-blue-700">
              <Compass className="h-4 w-4" />
              <span>Peta Jalan Kelulusan Peserta</span>
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Alur Persiapan Terpadu: Mulai dari Nol hingga Siap Tahap Lanjutan
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Dirancang sebagai sistem pendampingan terukur yang menggabungkan
              mesin penilaian deterministik BKN dan Tutor AI Sokratik.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            {/* Tahap 1 */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/80 p-6 shadow-sm sm:p-7 lg:col-span-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-blue-100 px-3 py-1 text-xs font-extrabold text-blue-900">
                    Tahap 1 — Mulai dari Nol
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400 font-numeric">
                    01 / 03
                  </span>
                </div>
                <div className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-700 shadow-sm">
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                  Pemetaan Awal &amp; Pemahaman Kisi-Kisi Resmi
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Kenali komposisi 21 sub-topik resmi SKD (TWK, TIU, TKP) sesuai
                  Kepmenpan-RB Nomor 321 Tahun 2024 dan tentukan target Nilai
                  Ambang Batas sesuai kategori formasi Anda.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-200/80 pt-4 text-[11px] font-semibold text-slate-600">
                <span className="rounded-md bg-white px-2.5 py-1 shadow-sm">
                  30 Soal TWK
                </span>
                <span className="rounded-md bg-white px-2.5 py-1 shadow-sm">
                  35 Soal TIU
                </span>
                <span className="rounded-md bg-white px-2.5 py-1 shadow-sm">
                  45 Soal TKP
                </span>
              </div>
            </div>

            {/* Tahap 2 (Sorotan Utama Bento) */}
            <div className="flex flex-col justify-between rounded-3xl border-2 border-blue-600 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 p-6 shadow-tactile sm:p-7 lg:col-span-5">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-blue-700 px-3 py-1 text-xs font-extrabold text-white">
                    Tahap 2 — Inti Kelulusan SKD
                  </span>
                  <span className="font-mono text-xs font-bold text-blue-700 font-numeric">
                    02 / 03
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-sm">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-200 bg-white text-indigo-700 shadow-sm">
                    <Bot className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-slate-950">
                  Simulasi CAT 110 Soal &amp; Perbaikan Kelemahan Adaptif
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Berlatih dengan Simulator CAT standar BKN (hitung mundur waktu
                  presisi &amp; penyimpanan otomatis), analisis sub-topik
                  terlemah dari 21 kisi-kisi, serta diskusi penalaran langkah
                  demi langkah bersama Tutor AI.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2.5 border-t border-blue-200/70 pt-4 text-xs">
                <div className="rounded-xl border border-blue-100 bg-white p-3">
                  <p className="font-bold text-slate-900">Diagnostik Celah</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Deteksi otomatis 3 sub-topik terlemah
                  </p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-white p-3">
                  <p className="font-bold text-slate-900">Tutor Sokratik</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Bimbingan interaktif berbahasa baku
                  </p>
                </div>
              </div>
            </div>

            {/* Tahap 3 */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/80 p-6 shadow-sm sm:p-7 lg:col-span-3">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-xl bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-900">
                    Tahap 3 — Lanjutan
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400 font-numeric">
                    03 / 03
                  </span>
                </div>
                <div className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-200 bg-white text-emerald-700 shadow-sm">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                  Melaju ke Peringkat 3× Formasi &amp; SKB
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Setelah melampaui Nilai Ambang Batas SKD dengan skor
                  kompetitif, arsitektur modular LOLOS CPNS siap mendampingi
                  Anda menuju Seleksi Kompetensi Bidang (SKB).
                </p>
              </div>
              <div className="mt-6 border-t border-slate-200/80 pt-4">
                <Link
                  href="/simulasi/skb"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 hover:underline"
                >
                  <span>Lihat Modul SKB Terpadu</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 4: TABEL PERBANDINGAN FITUR */}
      <section
        id="perbandingan"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-blue-700">
              <ShieldCheck className="h-4 w-4" />
              <span>Standar Rekayasa Evaluasi</span>
            </span>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              Mengapa Memilih Platform LOLOS CPNS?
            </h2>
            <p className="mt-1.5 text-sm text-slate-600">
              Perbandingan metode belajar konvensional dengan sistem penilaian
              resmi dan bimbingan belajar cerdas kami.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-tactile">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-900 text-white">
              <tr>
                <th className="px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-300">
                  Aspek Persiapan
                </th>
                <th className="px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Buku Cetak / Latihan Biasa
                </th>
                <th className="px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-blue-300">
                  Platform LOLOS CPNS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80">
              <tr className="transition hover:bg-slate-50/70">
                <td className="px-6 py-4 font-bold text-slate-900">
                  Evaluasi Nilai Ambang Batas
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Hanya menghitung skor umum tanpa membedakan 7 jenis formasi
                </td>
                <td className="px-6 py-4 font-semibold text-emerald-800">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>
                      Akurat 100% untuk 7 Kategori Formasi (Kepmenpan-RB
                      321/2024)
                    </span>
                  </span>
                </td>
              </tr>
              <tr className="transition hover:bg-slate-50/70">
                <td className="px-6 py-4 font-bold text-slate-900">
                  Dukungan Aksesibilitas
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Durasi seragam 100 menit
                </td>
                <td className="px-6 py-4 font-semibold text-emerald-800">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>
                      Dukungan Resmi 130 Menit untuk Disabilitas Sensorik Netra
                    </span>
                  </span>
                </td>
              </tr>
              <tr className="transition hover:bg-slate-50/70">
                <td className="px-6 py-4 font-bold text-slate-900">
                  Orisinalitas &amp; Mutu Soal
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Soal statis dan berulang dari tahun ke tahun
                </td>
                <td className="px-6 py-4 font-semibold text-emerald-800">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>
                      Bank Soal Terkurasi &amp; Pembahasan Lengkap Berbahasa
                      Indonesia Baku
                    </span>
                  </span>
                </td>
              </tr>
              <tr className="transition hover:bg-slate-50/70">
                <td className="px-6 py-4 font-bold text-slate-900">
                  Antarmuka Simulasi CAT
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Formulir kuis biasa tanpa penanda ragu-ragu
                </td>
                <td className="px-6 py-4 font-semibold text-emerald-800">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>
                      Standar CAT BKN (Navigasi 110 Nomor, Ragu-ragu, Simpan
                      Otomatis)
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* BAGIAN 5: KARTU PAKET BELAJAR */}
      <section
        id="paket-belajar"
        className="border-t border-slate-200/90 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-blue-800">
              Investasi Persiapan CASN
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Pilihan Paket Simulasi &amp; Pendampingan Belajar
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Mulai gratis tanpa kartu kredit, tingkatkan ke paket penuh kapan
              saja.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Paket 1: Perdana Gratis */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/70 p-7 shadow-sm">
              <div>
                <span className="inline-block rounded-lg bg-slate-200/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-800">
                  PAKET PERDANA
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                  Simulasi SKD Perdana
                </h3>
                <p className="mt-2 font-mono text-3xl font-extrabold text-slate-950 font-numeric">
                  Gratis
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Cocok untuk memetakan kemampuan awal SKD Anda.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {[
                    "1 Paket Simulasi CAT SKD Lengkap (110 Soal)",
                    "Evaluasi Resmi 7 Kategori Formasi",
                    "Dukungan Durasi Disabilitas Sensorik Netra (130 Menit)",
                    "Pembahasan Lengkap Berbahasa Indonesia Baku",
                  ].map((fitur) => (
                    <li key={fitur} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                      <span>{fitur}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/simulasi/skd/paket-perdana-gratis"
                className="mt-8 block w-full rounded-2xl border border-blue-600 bg-white py-3.5 text-center text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Kerjakan Paket Gratis Sekarang
              </Link>
            </div>

            {/* Paket 2: Intensif SKD */}
            <div className="relative flex flex-col justify-between rounded-3xl border-2 border-blue-600 bg-white p-7 shadow-tactile-lg">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block rounded-lg bg-blue-700 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                    PALING DIMINATI
                  </span>
                  <span className="font-mono text-xs font-bold text-blue-700 font-numeric">
                    SKD Fokus
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-slate-950">
                  Pejuang NIP — Intensif SKD
                </h3>
                <p className="mt-2 font-mono text-3xl font-extrabold text-blue-700 font-numeric">
                  Rp49.000
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Sekali bayar untuk pendampingan intensif kelulusan SKD.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {[
                    "Semua Paket Simulasi Akbar CAT SKD (110 Soal)",
                    "Analisis Kesenjangan Nilai per Sub-Topik Kisi-Kisi",
                    "Tanya Jawab Interaktif Bersama Tutor AI Pembimbing",
                    "Latihan Perbaikan Adaptif pada Materi Terlemah",
                  ].map((fitur) => (
                    <li key={fitur} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      <span className="font-medium text-slate-800">{fitur}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/pembayaran?paket=paket-intensif-skd"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 py-3.5 text-center text-sm font-extrabold text-white shadow-sm transition hover:bg-blue-800"
              >
                <span>Aktifkan Paket Intensif SKD</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Paket 3: Terpadu SKD + SKB */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/70 p-7 shadow-sm">
              <div>
                <span className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-900">
                  PERSIAPAN MENYELURUH
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                  Paket Terpadu SKD + SKB
                </h3>
                <p className="mt-2 font-mono text-3xl font-extrabold text-slate-950 font-numeric">
                  Rp89.000
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Persiapan terintegrasi dari SKD hingga tahap SKB &amp;
                  Wawancara.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {[
                    "Seluruh Fitur Paket Intensif SKD",
                    "Akses Awal Modul Seleksi Kompetensi Bidang (SKB)",
                    "Simulasi Wawancara & Psikotes Jabatan",
                    "Prioritas Kuota Diskusi Tutor AI",
                  ].map((fitur) => (
                    <li key={fitur} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{fitur}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/pembayaran?paket=paket-terpadu-cpns"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3.5 text-center text-sm font-extrabold text-white transition hover:bg-slate-800"
              >
                <span>Aktifkan Paket Terpadu</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KAKI HALAMAN (FOOTER) */}
      <footer className="border-t border-slate-200 bg-slate-950 py-10 text-xs text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6">
          <div>
            <p className="text-sm text-slate-200">
              © 2026 <strong>LOLOS CPNS</strong> — Platform Persiapan &amp;
              Simulasi CAT CPNS Terpadu.
            </p>
            <p className="mt-1 text-slate-400">
              Acuan Regulasi Resmi: Keputusan Menteri PANRB Nomor 321 Tahun
              2024.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5 font-semibold text-slate-300">
            <Link href="/dasbor" className="transition hover:text-white">
              Dasbor Peserta
            </Link>
            <Link href="/simulasi/skb" className="transition hover:text-white">
              Modul SKB Terpadu
            </Link>
            <Link
              href="/legal/syarat-ketentuan"
              className="transition hover:text-white"
            >
              Syarat &amp; Ketentuan
            </Link>
            <Link href="/legal/privasi" className="transition hover:text-white">
              Privasi &amp; Refund
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
