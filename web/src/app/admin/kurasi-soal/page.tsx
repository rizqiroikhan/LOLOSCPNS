"use client";

import React, { useState } from "react";
import AdminPortalShell from "@/components/AdminPortalShell";
import {
  CONTOH_HASIL_EKSTRAKSI_SOAL_SKD,
  DAFTAR_SUB_TOPIK_RESMI_SKD,
  type DrafKurasiSoal,
} from "@/lib/ingestion-pipeline";
import { REGULASI_SKD_321_2024 } from "@/lib/scoring-engine";
import type {
  KategoriSubtesSKD,
  RegulationRow,
  TingkatKesulitanSoal,
} from "@/types/database";

export default function HalamanStudioKurasiSoal() {
  // State Ekstraksi Regulasi
  const [berkasRegulasi, setBerkasRegulasi] = useState<File | null>(null);
  const [sedangMemprosesRegulasi, setSedangMemprosesRegulasi] = useState(false);
  const [pesanRegulasi, setPesanRegulasi] = useState<string | null>(null);
  const [regulasiTerekstrak, setRegulasiTerekstrak] =
    useState<RegulationRow | null>(REGULASI_SKD_321_2024);

  // State Ekstraksi & Kurasi Soal
  const [berkasSoal, setBerkasSoal] = useState<File | null>(null);
  const [halamanPdf, setHalamanPdf] = useState<number>(0);
  const [sedangMemprosesSoal, setSedangMemprosesSoal] = useState(false);
  const [pesanSoal, setPesanSoal] = useState<string | null>(null);
  const [daftarDrafSoal, setDaftarDrafSoal] = useState<DrafKurasiSoal[]>(
    CONTOH_HASIL_EKSTRAKSI_SOAL_SKD
  );
  const [indeksAktif, setIndeksAktif] = useState<number>(0);
  const [sedangMenyetujui, setSedangMenyetujui] = useState<boolean>(false);

  const soalAktif: DrafKurasiSoal | undefined = daftarDrafSoal[indeksAktif];

  async function tanganiEkstraksiRegulasi(e: React.FormEvent) {
    e.preventDefault();
    if (!berkasRegulasi) {
      setPesanRegulasi(
        "Silakan pilih berkas PDF aturan resmi (contoh: Kepmenpan-RB 321/2024) terlebih dahulu."
      );
      return;
    }

    setSedangMemprosesRegulasi(true);
    setPesanRegulasi(null);

    try {
      const formData = new FormData();
      formData.append("berkas", berkasRegulasi);

      const res = await fetch("/api/ingest/regulation", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || data.status === "gagal") {
        throw new Error(data.pesan || "Gagal mengekstrak dokumen regulasi.");
      }

      setRegulasiTerekstrak(data.regulasi);
      setPesanRegulasi(data.pesan);
    } catch (galat) {
      setPesanRegulasi(
        galat instanceof Error
          ? galat.message
          : "Terjadi kendala saat mengekstrak regulasi."
      );
    } finally {
      setSedangMemprosesRegulasi(false);
    }
  }

  async function tanganiEkstraksiSoal(e: React.FormEvent) {
    e.preventDefault();
    if (!berkasSoal) {
      setPesanSoal(
        "Silakan pilih berkas pindaian halaman soal (PDF/PNG/JPG) terlebih dahulu."
      );
      return;
    }

    setSedangMemprosesSoal(true);
    setPesanSoal(null);

    try {
      const formData = new FormData();
      formData.append("berkas", berkasSoal);
      formData.append("halaman_pdf", String(halamanPdf));

      const res = await fetch("/api/ingest/questions", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || data.status === "gagal") {
        throw new Error(data.pesan || "Gagal mengekstrak halaman soal.");
      }

      if (Array.isArray(data.daftar_soal) && data.daftar_soal.length > 0) {
        setDaftarDrafSoal(data.daftar_soal);
        setIndeksAktif(0);
      }
      setPesanSoal(data.pesan);
    } catch (galat) {
      setPesanSoal(
        galat instanceof Error
          ? galat.message
          : "Terjadi kendala saat memproses pindaian soal."
      );
    } finally {
      setSedangMemprosesSoal(false);
    }
  }

  function perbaruiSoalAktif(perubahan: Partial<DrafKurasiSoal>) {
    setDaftarDrafSoal((sebelumnya) =>
      sebelumnya.map((item, idx) =>
        idx === indeksAktif ? { ...item, ...perubahan } : item
      )
    );
  }

  function perbaruiKategoriSoal(kategoriBaru: KategoriSubtesSKD) {
    const subTopikDefault = DAFTAR_SUB_TOPIK_RESMI_SKD[kategoriBaru][0];
    perbaruiSoalAktif({
      category: kategoriBaru,
      sub_topic: subTopikDefault,
    });
  }

  function perbaruiPilihanJawaban(
    indeksOpsi: number,
    kolom: "teks" | "skor",
    nilai: string | number
  ) {
    if (!soalAktif) return;
    const opsiBaru = soalAktif.options.map((opsi, idx) => {
      if (idx !== indeksOpsi) return opsi;
      return {
        ...opsi,
        [kolom]: kolom === "skor" ? Number(nilai) : String(nilai),
      };
    });
    perbaruiSoalAktif({ options: opsiBaru });
  }

  async function tanganiSetujuiSoal() {
    if (!soalAktif) return;
    setSedangMenyetujui(true);
    setPesanSoal(null);

    try {
      const res = await fetch("/api/ingest/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(soalAktif),
      });
      const data = await res.json();

      if (!res.ok || data.status === "gagal") {
        throw new Error(data.pesan || "Gagal menyetujui soal.");
      }

      perbaruiSoalAktif({ status: "disetujui" });
      setPesanSoal(data.pesan);
    } catch (galat) {
      setPesanSoal(
        galat instanceof Error
          ? galat.message
          : "Gagal menyimpan persetujuan soal."
      );
    } finally {
      setSedangMenyetujui(false);
    }
  }

  return (
    <AdminPortalShell tabAwal="kurasi">
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Judul Bagian Kurasi */}
        <div className="mb-8 border-b border-slate-200 pb-5">
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">
            Panel Kurasi Admin — Pengelolaan Regulasi & Bank Soal
          </span>
          <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Studio Kurasi Regulasi & Bank Soal SKD
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Unggah dokumen PDF regulasi resmi atau pindaian halaman soal untuk
            disusun otomatis menjadi butir soal siap uji berbahasa Indonesia
            baku.
          </p>
        </div>

      {/* BAGIAN 1: EKSTRAKSI DOKUMEN REGULASI */}
      <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              1. Impor Dokumen Regulasi Resmi (PDF)
            </h2>
            <p className="text-sm text-slate-600">
              Unggah dokumen PDF Keputusan Menteri PANRB untuk diekstrak menjadi
              konfigurasi sub-tes dan Nilai Ambang Batas terstruktur.
            </p>
          </div>
          <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Acuan Aktif: Kepmenpan-RB Nomor 321 Tahun 2024
          </span>
        </div>

        <form
          onSubmit={tanganiEkstraksiRegulasi}
          className="flex flex-wrap items-center gap-4"
        >
          <input
            type="file"
            accept=".pdf,application/pdf"
            onChange={(e) => setBerkasRegulasi(e.target.files?.[0] || null)}
            className="block text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            type="submit"
            disabled={sedangMemprosesRegulasi}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-50"
          >
            {sedangMemprosesRegulasi
              ? "Sedang Mengekstrak Regulasi..."
              : "Ekstrak Regulasi PDF"}
          </button>
        </form>

        {pesanRegulasi && (
          <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
            {pesanRegulasi}
          </div>
        )}

        {regulasiTerekstrak && (
          <div className="mt-5 grid gap-4 rounded-xl bg-slate-50 p-4 text-xs sm:grid-cols-4">
            <div>
              <span className="text-slate-500">Judul Regulasi:</span>
              <p className="mt-0.5 font-semibold text-slate-900">
                {regulasiTerekstrak.title}
              </p>
            </div>
            <div>
              <span className="text-slate-500">Tahap & Tahun:</span>
              <p className="mt-0.5 font-semibold text-slate-900">
                {regulasiTerekstrak.stage} ({regulasiTerekstrak.year})
              </p>
            </div>
            <div>
              <span className="text-slate-500">Durasi Standar / Disabilitas Netra:</span>
              <p className="mt-0.5 font-semibold text-slate-900">
                {regulasiTerekstrak.default_duration_minutes} Menit /{" "}
                {regulasiTerekstrak.blind_disability_duration_minutes} Menit
              </p>
            </div>
            <div>
              <span className="text-slate-500">Total Soal & Skor Maksimal:</span>
              <p className="mt-0.5 font-semibold text-slate-900">
                {regulasiTerekstrak.total_questions} Butir (Maks.{" "}
                {regulasiTerekstrak.max_cumulative_score})
              </p>
            </div>
          </div>
        )}
      </section>

      {/* BAGIAN 2: UNGGAH PINDAIAN SOAL MULTIMODAL */}
      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">
          2. Pindai & Susun Soal dari Buku Cetak atau PDF (Cerdas AI)
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Unggah foto atau pindaian halaman soal (PNG/JPG/PDF). Sistem otomatis
          mengelompokkan kisi-kisi resmi Kepmenpan-RB 321/2024, memotong gambar
          ilustrasi soal (jika ada), serta menyusun ulang kalimat secara orisinal.
        </p>

        <form
          onSubmit={tanganiEkstraksiSoal}
          className="mt-4 flex flex-wrap items-end gap-4"
        >
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Berkas Pindaian Soal (PDF / PNG / JPG)
            </label>
            <input
              type="file"
              accept=".pdf,image/png,image/jpeg,image/webp"
              onChange={(e) => setBerkasSoal(e.target.files?.[0] || null)}
              className="block text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Indeks Halaman PDF (Mulai dari 0)
            </label>
            <input
              type="number"
              min={0}
              value={halamanPdf}
              onChange={(e) => setHalamanPdf(Number(e.target.value))}
              className="w-28 rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={sedangMemprosesSoal}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50"
          >
            {sedangMemprosesSoal
              ? "Sedang Memproses & Memparafrase..."
              : "Proses & Parafrase Soal"}
          </button>
        </form>

        {pesanSoal && (
          <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900">
            {pesanSoal}
          </div>
        )}
      </section>

      {/* BAGIAN 3: TINJAUAN BERDAMPINGAN (NASKAH ASLI VS HASIL PARAFRASE AI) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              3. Meja Tinjauan Berdampingan: Naskah Asli vs Hasil Parafrase AI
            </h2>
            <p className="text-sm text-slate-600">
              Periksa perbandingan soal sumber dengan hasil parafrase AI, sunting
              jika diperlukan, lalu klik <strong>Setujui</strong> untuk
              memasukkannya ke Bank Soal aktif.
            </p>
          </div>

          {/* Navigasi Daftar Soal Hasil Ekstraksi */}
          <div className="flex flex-wrap items-center gap-2">
            {daftarDrafSoal.map((butir, idx) => (
              <button
                key={butir.id_sementara}
                type="button"
                onClick={() => setIndeksAktif(idx)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  idx === indeksAktif
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Butir #{idx + 1} ({butir.category}) —{" "}
                {butir.status === "disetujui" ? "✓ Disetujui" : "Draf"}
              </button>
            ))}
          </div>
        </div>

        {soalAktif && (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* KOLOM KIRI: NASKAH ASLI SUMBER */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-md bg-amber-200/80 px-2.5 py-1 text-xs font-bold text-amber-950">
                  NASKAH ASLI (DOKUMEN SUMBER)
                </span>
                <span className="text-xs font-medium text-amber-800">
                  Hanya Acuan Kurator — Tidak Dipublikasikan
                </span>
              </div>

              <div className="mb-4 rounded-lg border border-amber-200 bg-white p-4 text-sm leading-relaxed text-slate-800">
                {soalAktif.teks_soal_asli}
              </div>

              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Pilihan Jawaban pada Dokumen Sumber
              </h3>
              <ul className="space-y-2 text-sm">
                {soalAktif.pilihan_asli.map((opsi) => (
                  <li
                    key={opsi.kunci}
                    className="flex items-start gap-2.5 rounded-lg border border-amber-100 bg-white px-3 py-2 text-slate-700"
                  >
                    <span className="font-bold text-slate-900">
                      {opsi.kunci}.
                    </span>
                    <span>{opsi.teks}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* KOLOM KANAN: HASIL PARAFRASE AI & FORMULIR PENYUNTINGAN */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/30 p-5">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white">
                  HASIL PARAFRASE & KLASIFIKASI AI (BEBAS HAK CIPTA)
                </span>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-700">
                    Indeks Materi:{" "}
                    {soalAktif.metode_pencarian_rag === "pgvector_768"
                      ? "Pencarian Semantik Aktif"
                      : "Pencarian Teks Indonesia Aktif"}
                  </span>
                  <span
                    className={`rounded px-2.5 py-0.5 text-xs font-bold uppercase ${
                      soalAktif.status === "disetujui"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    Status: {soalAktif.status}
                  </span>
                </div>
              </div>

              {/* Klasifikasi Kisi-Kisi & Tingkat Kesulitan */}
              <div className="mb-4 grid gap-3 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Kategori Sub-Tes SKD
                  </label>
                  <select
                    value={soalAktif.category}
                    onChange={(e) =>
                      perbaruiKategoriSoal(e.target.value as KategoriSubtesSKD)
                    }
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900"
                  >
                    <option value="TWK">TWK (Wawasan Kebangsaan)</option>
                    <option value="TIU">TIU (Intelegensia Umum)</option>
                    <option value="TKP">TKP (Karakteristik Pribadi)</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Tingkat Kesulitan
                  </label>
                  <select
                    value={soalAktif.difficulty}
                    onChange={(e) =>
                      perbaruiSoalAktif({
                        difficulty: e.target.value as TingkatKesulitanSoal,
                      })
                    }
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900"
                  >
                    <option value="mudah">Mudah</option>
                    <option value="sedang">Sedang</option>
                    <option value="sulit">Sulit</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Sub-Topik Kisi-Kisi Resmi
                  </label>
                  <select
                    value={soalAktif.sub_topic}
                    onChange={(e) =>
                      perbaruiSoalAktif({ sub_topic: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900"
                  >
                    {DAFTAR_SUB_TOPIK_RESMI_SKD[soalAktif.category].map(
                      (sub) => (
                        <option key={sub} value={sub}>
                          {sub}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              {/* Teks Soal Hasil Parafrase */}
              <div className="mb-4">
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Pokok Soal Hasil Parafrase (Dapat Disunting)
                </label>
                <textarea
                  rows={4}
                  value={soalAktif.question_text}
                  onChange={(e) =>
                    perbaruiSoalAktif({ question_text: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm leading-relaxed text-slate-900"
                />
              </div>

              {/* Pilihan Jawaban A-E & Skor */}
              <div className="mb-4">
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  Pilihan Jawaban & Bobot Skor (TWK/TIU: Benar = 5, Salah = 0 |
                  TKP: Skala 1–5)
                </label>
                <div className="space-y-2">
                  {soalAktif.options.map((opsi, idx) => (
                    <div
                      key={opsi.kunci}
                      className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2"
                    >
                      <span className="w-6 text-center text-sm font-bold text-slate-800">
                        {opsi.kunci}.
                      </span>
                      <input
                        type="text"
                        value={opsi.teks}
                        onChange={(e) =>
                          perbaruiPilihanJawaban(idx, "teks", e.target.value)
                        }
                        className="flex-1 rounded border border-slate-200 px-2.5 py-1.5 text-sm text-slate-900"
                      />
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-slate-500">Skor:</span>
                        <input
                          type="number"
                          min={0}
                          max={5}
                          value={opsi.skor}
                          onChange={(e) =>
                            perbaruiPilihanJawaban(idx, "skor", e.target.value)
                          }
                          className="w-14 rounded border border-slate-300 px-2 py-1 text-center text-sm font-semibold text-slate-900"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pembahasan Mendalam */}
              <div className="mb-4">
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Pembahasan Mendalam Berbahasa Indonesia Baku
                </label>
                <textarea
                  rows={3}
                  value={soalAktif.explanation}
                  onChange={(e) =>
                    perbaruiSoalAktif({ explanation: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm leading-relaxed text-slate-800"
                />
              </div>

              {/* Referensi Sumber */}
              <div className="mb-5">
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Referensi Pasal / Konsep Dasar
                </label>
                <input
                  type="text"
                  value={soalAktif.source_reference}
                  onChange={(e) =>
                    perbaruiSoalAktif({ source_reference: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800"
                />
              </div>

              {/* Tombol Setujui */}
              <div className="flex items-center justify-end gap-3 border-t border-emerald-200 pt-4">
                <button
                  type="button"
                  disabled={sedangMenyetujui}
                  onClick={tanganiSetujuiSoal}
                  className="rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-50"
                >
                  {sedangMenyetujui
                    ? "Menyimpan ke Bank Soal..."
                    : soalAktif.status === "disetujui"
                    ? "✓ Sudah Disetujui (Perbarui Data)"
                    : "Setujui & Simpan ke Bank Soal"}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      </main>
    </AdminPortalShell>
  );
}
