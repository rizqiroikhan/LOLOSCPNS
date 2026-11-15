"use client";

import React, { useState } from "react";
import Link from "next/link";
import KuisSingkatInteraktifSKD from "@/components/MiniQuizSKD";
import { REGULASI_SKD_321_2024 } from "@/lib/scoring-engine";
import type { JenisFormasiSKD } from "@/types/database";

export default function HalamanUtama() {
  const [formasiPilihan, setFormasiPilihan] =
    useState<JenisFormasiSKD>("umum");
  const daftarFormasi = Object.values(
    REGULASI_SKD_321_2024.passing_grades_json
  );
  const aturanAktif =
    REGULASI_SKD_321_2024.passing_grades_json[formasiPilihan];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Bilah Navigasi Atas */}
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700 text-sm font-black text-white">
              LC
            </span>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                LOLOS CPNS
              </span>
              <span className="ml-2 hidden rounded bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700 sm:inline-block">
                Kepmenpan-RB No. 321 Tahun 2024
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#kuis-singkat" className="hover:text-blue-700">
              Kuis Singkat SKD
            </a>
            <a href="#alur-persiapan" className="hover:text-blue-700">
              Alur Persiapan
            </a>
            <a href="#perbandingan" className="hover:text-blue-700">
              Keunggulan
            </a>
            <a href="#paket-belajar" className="hover:text-blue-700">
              Paket Belajar
            </a>
            <Link href="/pembayaran" className="hover:text-blue-700">
              Aktivasi Paket
            </Link>
            <Link href="/admin/kurasi-soal" className="hover:text-indigo-700">
              Studio Kurasi Admin
            </Link>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/simulasi/skd/paket-perdana-gratis"
              className="rounded-xl bg-blue-700 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-blue-800 sm:text-sm"
            >
              Mulai Simulasi CAT SKD →
            </Link>
          </div>
        </div>
      </nav>

      {/* BAGIAN UTAMA (HERO) */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-800">
                Platform Simulasi CAT CPNS Berbasis Rekayasa AI & Regulasi Resmi
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Taklukkan Nilai Ambang Batas{" "}
                <span className="text-blue-700">SKD CPNS</span> dengan Presisi
                Deterministik & Tutor AI
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Dirancang 100% mengacu pada{" "}
                <strong>Keputusan Menteri PANRB Nomor 321 Tahun 2024</strong>{" "}
                (110 soal: 30 TWK, 35 TIU, 45 TKP). Mendukung evaluasi akurat
                untuk seluruh <strong>7 kategori formasi</strong>, aksesibilitas
                disabilitas sensorik netra (130 menit), serta pembahasan
                mendalam berbahasa Indonesia baku.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href={`/simulasi/skd/paket-perdana-gratis?formasi=${formasiPilihan}`}
                  className="rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-800"
                >
                  Coba Simulasi CAT SKD 110 Soal (Gratis) →
                </Link>
                <a
                  href="#kuis-singkat"
                  className="rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  Uji 3 Soal Kuis Singkat
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 text-xs sm:text-sm">
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">
                    110 Butir
                  </p>
                  <p className="text-slate-500">
                    Standar Resmi CAT BKN (Skor Maks. 550)
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">
                    7 Formasi
                  </p>
                  <p className="text-slate-500">
                    Evaluasi Per Sub-Tes & Kumulatif Akurat
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">
                    100 / 130 Menit
                  </p>
                  <p className="text-slate-500">
                    Reguler & Aksesibilitas Disabilitas Netra
                  </p>
                </div>
              </div>
            </div>

            {/* Panel Cek Syarat Nilai Ambang Batas per Formasi */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Kalkulator Regulasi Kepmenpan-RB 321/2024
                </span>
                <h2 className="mt-1 text-lg font-bold text-slate-900">
                  Periksa Syarat Nilai Ambang Batas Formasi Anda
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Pilih jenis kebutuhan formasi yang Anda lamar untuk melihat
                  target skor minimal kelulusan SKD:
                </p>

                <div className="mt-4">
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Kategori Formasi Lamaran
                  </label>
                  <select
                    value={formasiPilihan}
                    onChange={(e) =>
                      setFormasiPilihan(e.target.value as JenisFormasiSKD)
                    }
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-slate-900"
                  >
                    {daftarFormasi.map((f) => (
                      <option key={f.kode_formasi} value={f.kode_formasi}>
                        {f.nama_kategori}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-600">
                      Mode Evaluasi Kelulusan:
                    </span>
                    <span className="rounded bg-blue-600 px-2 py-0.5 font-bold text-white">
                      {aturanAktif.mode_evaluasi === "per_subtes"
                        ? "Wajib Lulus Per Sub-Tes"
                        : "Kumulatif SKD & Sub-Tes TIU"}
                    </span>
                  </div>

                  {aturanAktif.mode_evaluasi === "per_subtes" ? (
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-lg bg-white p-2.5 shadow-sm">
                        <span className="text-[11px] font-semibold text-slate-500">
                          TWK (Maks 150)
                        </span>
                        <p className="text-lg font-extrabold text-slate-900">
                          ≥ {aturanAktif.ambang_batas_subtes.TWK}
                        </p>
                      </div>
                      <div className="rounded-lg bg-white p-2.5 shadow-sm">
                        <span className="text-[11px] font-semibold text-slate-500">
                          TIU (Maks 175)
                        </span>
                        <p className="text-lg font-extrabold text-slate-900">
                          ≥ {aturanAktif.ambang_batas_subtes.TIU}
                        </p>
                      </div>
                      <div className="rounded-lg bg-white p-2.5 shadow-sm">
                        <span className="text-[11px] font-semibold text-slate-500">
                          TKP (Maks 225)
                        </span>
                        <p className="text-lg font-extrabold text-slate-900">
                          ≥ {aturanAktif.ambang_batas_subtes.TKP}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                      <div className="rounded-lg bg-white p-3 shadow-sm">
                        <span className="text-xs font-semibold text-slate-500">
                          Nilai Kumulatif SKD
                        </span>
                        <p className="text-xl font-extrabold text-blue-700">
                          ≥ {aturanAktif.ambang_batas_kumulatif}
                        </p>
                      </div>
                      <div className="rounded-lg bg-white p-3 shadow-sm">
                        <span className="text-xs font-semibold text-slate-500">
                          Nilai Minimal TIU
                        </span>
                        <p className="text-xl font-extrabold text-blue-700">
                          ≥ {aturanAktif.ambang_batas_tiu}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href={`/simulasi/skd/paket-perdana-gratis?formasi=${formasiPilihan}`}
                  className="mt-5 block w-full rounded-xl bg-slate-900 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  Mulai Simulasi untuk {aturanAktif.nama_kategori} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 2: WIDGET KUIS SINGKAT INTERAKTIF 3 SOAL SKD */}
      <section id="kuis-singkat" className="mx-auto max-w-6xl px-6 py-14">
        <KuisSingkatInteraktifSKD />
      </section>

      {/* BAGIAN 3: ALUR PERSIAPAN MENYELURUH */}
      <section
        id="alur-persiapan"
        className="border-y border-slate-200 bg-white py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Peta Jalan Kelulusan Peserta
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Alur Persiapan Terpadu: Mulai dari Nol hingga Siap Tahap Lanjutan
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                Tahap 1 — Mulai dari Nol
              </span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                Pemetaan Awal & Pemahaman Kisi-Kisi Resmi
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Kenali komposisi 21 sub-topik resmi SKD (TWK, TIU, TKP) sesuai
                Kepmenpan-RB Nomor 321 Tahun 2024 dan tentukan target Nilai
                Ambang Batas sesuai kategori formasi Anda.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-sm">
              <span className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                Tahap 2 — Lolos SKD
              </span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                Simulasi CAT 110 Soal & Perbaikan Kelemahan
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Berlatih dengan Simulator CAT standar BKN (hitung mundur waktu
                presisi & penyimpanan otomatis), analisis sub-topik terlemah,
                serta diskusi bertahap bersama Tutor AI Sokratik.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                Tahap 3 — Siap Tahap Lanjutan
              </span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                Melaju ke Peringkat 3× Formasi & Persiapan SKB
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Setelah melampaui Nilai Ambang Batas SKD dengan skor kompetitif,
                arsitektur modular LOLOS CPNS siap mendampingi Anda menuju
                Seleksi Kompetensi Bidang (SKB).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 4: TABEL PERBANDINGAN FITUR */}
      <section id="perbandingan" className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Mengapa Memilih Platform Rekayasa AI LOLOS CPNS?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Perbandingan metode belajar konvensional dengan sistem evaluasi
            deterministik dan kurasi AI kami.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-100 text-slate-800">
              <tr>
                <th className="px-5 py-4 font-bold">Aspek Persiapan</th>
                <th className="px-5 py-4 font-bold text-slate-500">
                  Buku Cetak / Latihan Biasa
                </th>
                <th className="px-5 py-4 font-bold text-blue-700">
                  Platform LOLOS CPNS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-5 py-3.5 font-semibold">
                  Evaluasi Nilai Ambang Batas
                </td>
                <td className="px-5 py-3.5 text-slate-600">
                  Hanya menghitung skor umum tanpa membedakan 7 jenis formasi
                </td>
                <td className="px-5 py-3.5 font-semibold text-emerald-700">
                  Deterministik 100% untuk 7 Kategori Formasi (Kepmenpan-RB
                  321/2024)
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-semibold">
                  Dukungan Aksesibilitas
                </td>
                <td className="px-5 py-3.5 text-slate-600">
                  Durasi seragam 100 menit
                </td>
                <td className="px-5 py-3.5 font-semibold text-emerald-700">
                  Dukungan Resmi 130 Menit untuk Disabilitas Sensorik Netra
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-semibold">
                  Orisinalitas & Mutu Soal
                </td>
                <td className="px-5 py-3.5 text-slate-600">
                  Soal statis dan berulang dari tahun ke tahun
                </td>
                <td className="px-5 py-3.5 font-semibold text-emerald-700">
                  Bank Soal Terkurasi & Parafrase Semantik AI Berbahasa
                  Indonesia Baku
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-semibold">
                  Antarmuka Simulasi CAT
                </td>
                <td className="px-5 py-3.5 text-slate-600">
                  Formulir kuis biasa tanpa penanda ragu-ragu
                </td>
                <td className="px-5 py-3.5 font-semibold text-emerald-700">
                  Standar CAT BKN (Navigasi 110 Nomor, Ragu-ragu, Simpan
                  Otomatis)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* BAGIAN 5: KARTU PAKET BELAJAR */}
      <section
        id="paket-belajar"
        className="border-t border-slate-200 bg-white py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Pilihan Paket Simulasi & Pendampingan Belajar
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Mulai gratis tanpa kartu kredit, tingkatkan ke paket penuh kapan
              saja.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Paket 1: Perdana Gratis */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <span className="rounded-md bg-slate-200 px-2.5 py-1 text-xs font-bold text-slate-800">
                  PAKET PERDANA
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  Simulasi SKD Perdana
                </h3>
                <p className="mt-1 text-3xl font-extrabold text-slate-900">
                  Gratis
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                  <li>✓ 1 Paket Simulasi CAT SKD Lengkap (110 Soal)</li>
                  <li>✓ Evaluasi Deterministik 7 Kategori Formasi</li>
                  <li>✓ Dukungan Durasi Disabilitas Sensorik Netra (130 Menit)</li>
                  <li>✓ Pembahasan Lengkap Berbahasa Indonesia Baku</li>
                </ul>
              </div>
              <Link
                href="/simulasi/skd/paket-perdana-gratis"
                className="mt-6 block w-full rounded-xl border border-blue-600 bg-white py-3 text-center text-sm font-bold text-blue-700 hover:bg-blue-50"
              >
                Kerjakan Paket Gratis Sekarang
              </Link>
            </div>

            {/* Paket 2: Intensif SKD */}
            <div className="flex flex-col justify-between rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-md">
              <div>
                <span className="rounded-md bg-blue-600 px-2.5 py-1 text-xs font-bold text-white">
                  PALING DIMINATI
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  Pejuang NIP — Intensif SKD
                </h3>
                <p className="mt-1 text-3xl font-extrabold text-blue-700">
                  Rp49.000
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                  <li>✓ Semua Paket Simulasi Akbar CAT SKD (110 Soal)</li>
                  <li>✓ Analisis Kesenjangan Nilai per Sub-Topik Kisi-Kisi</li>
                  <li>✓ Diskusi Interaktif Bersama Tutor AI Sokratik</li>
                  <li>✓ Latihan Perbaikan Adaptif pada Materi Terlemah</li>
                </ul>
              </div>
              <Link
                href="/pembayaran?paket=paket-intensif-skd"
                className="mt-6 block w-full rounded-xl bg-blue-700 py-3 text-center text-sm font-bold text-white hover:bg-blue-800"
              >
                Aktifkan Paket Intensif SKD →
              </Link>
            </div>

            {/* Paket 3: Terpadu SKD + SKB */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
                  PERSIAPAN MENYELURUH
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  Paket Terpadu SKD + SKB
                </h3>
                <p className="mt-1 text-3xl font-extrabold text-slate-900">
                  Rp89.000
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                  <li>✓ Seluruh Fitur Paket Intensif SKD</li>
                  <li>✓ Akses Awal Modul Seleksi Kompetensi Bidang (SKB)</li>
                  <li>✓ Simulasi Wawancara & Psikotes Jabatan</li>
                  <li>✓ Prioritas Kuota Diskusi Tutor AI</li>
                </ul>
              </div>
              <Link
                href="/pembayaran?paket=paket-terpadu-cpns"
                className="mt-6 block w-full rounded-xl bg-slate-900 py-3 text-center text-sm font-bold text-white hover:bg-slate-800"
              >
                Aktifkan Paket Terpadu →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kaki Halaman (Footer) */}
      <footer className="border-t border-slate-200 bg-slate-900 py-8 text-xs text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
          <p>
            © 2026 <strong>LOLOS CPNS</strong> — Platform Persiapan & Simulasi
            CAT CPNS Berbasis Rekayasa AI.
          </p>
          <p>
            Acuan Regulasi Resmi: Keputusan Menteri PANRB Nomor 321 Tahun 2024.
          </p>
        </div>
      </footer>
    </div>
  );
}
