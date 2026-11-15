"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import {
  bangunBankSoalSimulasi110,
  formatDetikKeJamMenitDetik,
} from "@/lib/cat-question-bank";
import {
  evaluasiKelulusanSKD,
  HasilEvaluasiSKD,
  hitungDurasiUjianSKD,
  hitungSkorDariJawaban,
  REGULASI_SKD_321_2024,
} from "@/lib/scoring-engine";
import {
  analisisKesenjanganNilaiSKD,
  HasilAnalisisKesenjanganSKD,
} from "@/lib/gap-analyzer";
import PanelLatihanPerbaikanAdaptif from "@/components/AdaptiveDrillModal";
import WidgetTutorSokratik from "@/components/SocraticTutorWidget";
import type {
  JenisFormasiSKD,
  KategoriSubtesSKD,
  PetaJawabanPeserta,
} from "@/types/database";

type TahapHalamanSimulasi = "persiapan" | "ujian_berlangsung" | "hasil_ujian";
type FilterNavigasiSubtes = "SEMUA" | KategoriSubtesSKD;

export default function HalamanSimulatorCATSKD() {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const idPaket = params?.id || "paket-perdana-gratis";
  const kunciPenyimpananLokal = `lolos_cpns_simulasi_${idPaket}`;

  const daftarSoal110 = useMemo(() => bangunBankSoalSimulasi110(), []);
  const daftarFormasi = Object.values(
    REGULASI_SKD_321_2024.passing_grades_json
  );

  // State Identitas & Pengaturan Formasi Peserta
  const [namaPeserta, setNamaPeserta] = useState<string>("Peserta Simulasi CPNS");
  const [jenisFormasi, setJenisFormasi] = useState<JenisFormasiSKD>("umum");
  const [disabilitasSensorikNetra, setDisabilitasSensorikNetra] =
    useState<boolean>(false);

  // State Pelaksanaan Ujian CAT
  const [tahapHalaman, setTahapHalaman] =
    useState<TahapHalamanSimulasi>("persiapan");
  const [indeksSoalAktif, setIndeksSoalAktif] = useState<number>(0);
  const [jawabanPeserta, setJawabanPeserta] = useState<PetaJawabanPeserta>({});
  const [daftarRaguRagu, setDaftarRaguRagu] = useState<Record<string, boolean>>(
    {}
  );
  const [sisaDetik, setSisaDetik] = useState<number>(100 * 60);
  const [filterSubtes, setFilterSubtes] =
    useState<FilterNavigasiSubtes>("SEMUA");
  const [waktuSimpanTerakhir, setWaktuSimpanTerakhir] = useState<string | null>(
    null
  );
  const [hasilEvaluasiAkhir, setHasilEvaluasiAkhir] =
    useState<HasilEvaluasiSKD | null>(null);
  const [hasilAnalisisGap, setHasilAnalisisGap] =
    useState<HasilAnalisisKesenjanganSKD | null>(null);
  const [targetLatihanAdaptif, setTargetLatihanAdaptif] = useState<{
    kategori: KategoriSubtesSKD;
    subTopik: string;
  }>({
    kategori: "TIU",
    subTopik: "Kemampuan Numerik - Deret Angka",
  });

  // Baca parameter formasi dari URL jika ada
  useEffect(() => {
    const formasiUrl = searchParams?.get("formasi") as JenisFormasiSKD | null;
    if (
      formasiUrl &&
      REGULASI_SKD_321_2024.passing_grades_json[formasiUrl]
    ) {
      setJenisFormasi(formasiUrl);
    }
  }, [searchParams]);

  // Pulihkan jawaban tersimpan otomatis dari localStorage (jika ada)
  useEffect(() => {
    try {
      const dataTersimpan = localStorage.getItem(kunciPenyimpananLokal);
      if (dataTersimpan) {
        const urai = JSON.parse(dataTersimpan);
        if (urai.jawabanPeserta) setJawabanPeserta(urai.jawabanPeserta);
        if (urai.daftarRaguRagu) setDaftarRaguRagu(urai.daftarRaguRagu);
        if (urai.jenisFormasi) setJenisFormasi(urai.jenisFormasi);
        if (typeof urai.disabilitasSensorikNetra === "boolean") {
          setDisabilitasSensorikNetra(urai.disabilitasSensorikNetra);
        }
      }
    } catch {
      // Abaikan jika penyimpanan lokal kosong
    }
  }, [kunciPenyimpananLokal]);

  // Simpan jawaban otomatis setiap ada perubahan jawaban atau status ragu-ragu
  useEffect(() => {
    if (tahapHalaman !== "ujian_berlangsung") return;
    try {
      localStorage.setItem(
        kunciPenyimpananLokal,
        JSON.stringify({
          namaPeserta,
          jenisFormasi,
          disabilitasSensorikNetra,
          jawabanPeserta,
          daftarRaguRagu,
          diperbaruiPada: new Date().toISOString(),
        })
      );
      const sekarang = new Date();
      setWaktuSimpanTerakhir(
        sekarang.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    } catch {
      // Abaikan kendala kuota localStorage
    }
  }, [
    tahapHalaman,
    namaPeserta,
    jenisFormasi,
    disabilitasSensorikNetra,
    jawabanPeserta,
    daftarRaguRagu,
    kunciPenyimpananLokal,
  ]);

  // Hitung mundur waktu ujian (otomatis selesai jika waktu habis)
  useEffect(() => {
    if (tahapHalaman !== "ujian_berlangsung") return;

    const interval = setInterval(() => {
      setSisaDetik((sebelumnya) => {
        if (sebelumnya <= 1) {
          clearInterval(interval);
          selesaikanUjianSekarang();
          return 0;
        }
        return sebelumnya - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tahapHalaman]);

  const durasiMenitResmi = hitungDurasiUjianSKD(
    jenisFormasi,
    disabilitasSensorikNetra
  );
  const aturanFormasiAktif =
    REGULASI_SKD_321_2024.passing_grades_json[jenisFormasi];
  const soalAktif = daftarSoal110[indeksSoalAktif];

  const jumlahTerjawab = Object.keys(jawabanPeserta).length;
  const jumlahRaguRagu = Object.values(daftarRaguRagu).filter(Boolean).length;
  const jumlahBelumDijawab = daftarSoal110.length - jumlahTerjawab;

  function mulaiSimulasiUjian() {
    const durasi = hitungDurasiUjianSKD(jenisFormasi, disabilitasSensorikNetra);
    setSisaDetik(durasi * 60);
    setIndeksSoalAktif(0);
    setHasilEvaluasiAkhir(null);
    setTahapHalaman("ujian_berlangsung");
  }

  function pilihOpsiJawaban(kunci: "A" | "B" | "C" | "D" | "E") {
    setJawabanPeserta((sebelumnya) => ({
      ...sebelumnya,
      [soalAktif.id]: kunci,
    }));
  }

  function simpanDanLanjutkan() {
    if (indeksSoalAktif < daftarSoal110.length - 1) {
      setIndeksSoalAktif((idx) => idx + 1);
    }
  }

  function lewatiSoal() {
    if (indeksSoalAktif < daftarSoal110.length - 1) {
      setIndeksSoalAktif((idx) => idx + 1);
    }
  }

  function ubahStatusRaguRagu() {
    setDaftarRaguRagu((sebelumnya) => ({
      ...sebelumnya,
      [soalAktif.id]: !sebelumnya[soalAktif.id],
    }));
  }

  function isiJawabanContohOtomatis() {
    const jawabanOtomatis: PetaJawabanPeserta = {};
    for (const butir of daftarSoal110) {
      const opsiTerbaik = butir.options.reduce((a, b) =>
        b.skor > a.skor ? b : a
      );
      jawabanOtomatis[butir.id] = opsiTerbaik.kunci;
    }
    setJawabanPeserta(jawabanOtomatis);
  }

  async function selesaikanUjianSekarang() {
    const hasilSkor = hitungSkorDariJawaban(daftarSoal110, jawabanPeserta);
    const evaluasi = evaluasiKelulusanSKD({
      skorSubtes: hasilSkor.skorSubtes,
      jenisFormasi,
      disabilitasSensorikNetra,
    });
    const analisisGap = analisisKesenjanganNilaiSKD({
      daftarSoal: daftarSoal110,
      jawabanPeserta,
      jenisFormasi,
      disabilitasSensorikNetra,
    });

    setHasilEvaluasiAkhir(evaluasi);
    setHasilAnalisisGap(analisisGap);
    if (analisisGap.tigaSubTopikPrioritas[0]) {
      setTargetLatihanAdaptif({
        kategori: analisisGap.tigaSubTopikPrioritas[0].kategori,
        subTopik: analisisGap.tigaSubTopikPrioritas[0].subTopik,
      });
    }
    setTahapHalaman("hasil_ujian");

    try {
      await fetch("/api/tryout/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          package_id: null,
          formasi_type: jenisFormasi,
          is_sensory_blind: disabilitasSensorikNetra,
          answers_json: jawabanPeserta,
        }),
      });
      localStorage.removeItem(kunciPenyimpananLokal);
    } catch {
      // Evaluasi deterministik lokal tetap ditampilkan meskipun koneksi jaringan terputus
    }
  }

  const daftarSoalTerfilter = daftarSoal110.filter((butir) =>
    filterSubtes === "SEMUA" ? true : butir.category === filterSubtes
  );

  // ============================================================================
  // TAHAP 1: PENGATURAN PESERTA & PEMILIHAN 7 KATEGORI FORMASI
  // ============================================================================
  if (tahapHalaman === "persiapan") {
    return (
      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            ← Kembali ke Halaman Utama
          </Link>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
            Standar Resmi CAT BKN — Kepmenpan-RB No. 321 Tahun 2024
          </span>
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Persiapan Sesi Simulasi CAT SKD (110 Soal)
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Lengkapi identitas peserta dan pilih kategori kebutuhan formasi
            untuk menyesuaikan perhitungan durasi serta Nilai Ambang Batas.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-700">
                Nama Lengkap Peserta
              </label>
              <input
                type="text"
                value={namaPeserta}
                onChange={(e) => setNamaPeserta(e.target.value)}
                placeholder="Masukkan nama lengkap Anda"
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-medium text-slate-900"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-700">
                Kategori Kebutuhan Formasi (7 Kategori Resmi)
              </label>
              <select
                value={jenisFormasi}
                onChange={(e) => {
                  const baru = e.target.value as JenisFormasiSKD;
                  setJenisFormasi(baru);
                  if (baru !== "disabilitas") {
                    setDisabilitasSensorikNetra(false);
                  }
                }}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900"
              >
                {daftarFormasi.map((f) => (
                  <option key={f.kode_formasi} value={f.kode_formasi}>
                    {f.nama_kategori}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Opsi Aksesibilitas Penyandang Disabilitas Sensorik Netra */}
          <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={disabilitasSensorikNetra}
                disabled={jenisFormasi !== "disabilitas"}
                onChange={(e) => setDisabilitasSensorikNetra(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600"
              />
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-slate-900">
                  Mode Aksesibilitas Penyandang Disabilitas Sensorik Netra
                  (Durasi 130 Menit)
                </span>
                <p className="mt-0.5 text-xs text-slate-600">
                  Sesuai Diktum KETIGA Kepmenpan-RB Nomor 321 Tahun 2024, opsi
                  ini tersedia khusus pada kategori{" "}
                  <strong>Kebutuhan Khusus Penyandang Disabilitas</strong> dan
                  memberikan durasi pengerjaan selama 130 menit.
                </p>
              </div>
            </label>
          </div>

          {/* Ringkasan Ketentuan Ujian Berdasarkan Formasi */}
          <div className="mt-6 grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-3">
            <div>
              <span className="text-xs font-semibold text-slate-500">
                Kategori Formasi Dipilih
              </span>
              <p className="mt-1 text-sm font-bold text-slate-900">
                {aturanFormasiAktif.nama_kategori}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">
                Waktu Pengerjaan & Jumlah Soal
              </span>
              <p className="mt-1 text-sm font-bold text-blue-700">
                {durasiMenitResmi} Menit — 110 Butir Soal
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">
                Syarat Nilai Ambang Batas
              </span>
              <p className="mt-1 text-sm font-bold text-emerald-700">
                {aturanFormasiAktif.mode_evaluasi === "per_subtes"
                  ? `TWK ≥ ${aturanFormasiAktif.ambang_batas_subtes.TWK}, TIU ≥ ${aturanFormasiAktif.ambang_batas_subtes.TIU}, TKP ≥ ${aturanFormasiAktif.ambang_batas_subtes.TKP}`
                  : `Kumulatif ≥ ${aturanFormasiAktif.ambang_batas_kumulatif} & TIU ≥ ${aturanFormasiAktif.ambang_batas_tiu}`}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
            <div className="text-xs text-slate-500">
              {jumlahTerjawab > 0 ? (
                <span className="font-semibold text-emerald-700">
                  Ditemukan {jumlahTerjawab} jawaban tersimpan otomatis dari
                  sesi sebelumnya.
                </span>
              ) : (
                <span>
                  Jawaban Anda akan disimpan secara otomatis selama ujian
                  berlangsung.
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={mulaiSimulasiUjian}
              className="rounded-xl bg-blue-700 px-7 py-3 text-sm font-bold text-white shadow-md transition hover:bg-blue-800"
            >
              Mulai Simulasi CAT SKD Sekarang →
            </button>
          </div>
        </section>
      </main>
    );
  }

  // ============================================================================
  // TAHAP 2: ANTARMUKA SIMULATOR CAT SKD STANDAR BKN (110 SOAL)
  // ============================================================================
  if (tahapHalaman === "ujian_berlangsung") {
    const jawabanSoalIni = jawabanPeserta[soalAktif.id];
    const raguSoalIni = Boolean(daftarRaguRagu[soalAktif.id]);

    return (
      <div className="min-h-screen bg-slate-100">
        {/* Bilah Atas Standar CAT BKN */}
        <header className="sticky top-0 z-30 border-b border-slate-300 bg-slate-900 text-white shadow">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-blue-600 px-2 py-0.5 text-xs font-extrabold">
                  CAT SKD BKN
                </span>
                <span className="text-sm font-bold">{namaPeserta}</span>
              </div>
              <p className="mt-0.5 text-xs text-slate-300">
                Formasi: <strong>{aturanFormasiAktif.nama_kategori}</strong>{" "}
                {disabilitasSensorikNetra ? "(Aksesibilitas Netra 130m)" : ""}
              </p>
            </div>

            {/* Statistik Jawaban & Sisa Waktu */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="hidden items-center gap-2 text-xs sm:flex">
                <span className="rounded bg-emerald-700 px-2.5 py-1 font-semibold">
                  Dijawab: {jumlahTerjawab}
                </span>
                <span className="rounded bg-amber-500 px-2.5 py-1 font-semibold text-slate-950">
                  Ragu-ragu: {jumlahRaguRagu}
                </span>
                <span className="rounded bg-slate-700 px-2.5 py-1 font-semibold">
                  Belum Dijawab: {jumlahBelumDijawab}
                </span>
              </div>

              <div className="rounded-xl border border-amber-400/50 bg-slate-800 px-4 py-1.5 text-center">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                  Sisa Waktu
                </span>
                <span className="font-mono text-lg font-extrabold tracking-widest text-white">
                  {formatDetikKeJamMenitDetik(sisaDetik)}
                </span>
              </div>

              <button
                type="button"
                onClick={selesaikanUjianSekarang}
                className="rounded-xl bg-rose-600 px-4 py-2.5 text-xs font-extrabold text-white shadow hover:bg-rose-700 sm:text-sm"
              >
                Selesai Ujian
              </button>
            </div>
          </div>
        </header>

        {/* Ruang Kerja Utama: Panel Soal (Kiri) & Navigasi 110 Nomor (Kanan) */}
        <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-12">
          {/* PANEL KIRI (8 KOLOM): BUTIR SOAL AKTIF */}
          <section className="lg:col-span-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              {/* Info Nomor & Sub-Tes */}
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-extrabold text-white">
                    Soal No. {soalAktif.nomor_urut} / 110
                  </span>
                  <span className="rounded-lg bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                    Sub-Tes {soalAktif.category}
                  </span>
                  <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                    {soalAktif.sub_topic}
                  </span>
                </div>

                {waktuSimpanTerakhir && (
                  <span className="text-[11px] font-medium text-emerald-700">
                    ✓ Tersimpan otomatis pukul {waktuSimpanTerakhir}
                  </span>
                )}
              </div>

              {/* Pokok Soal */}
              <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-900 sm:text-base">
                {soalAktif.question_text}
              </div>

              {/* Pilihan Jawaban A - E */}
              <div className="space-y-3">
                {soalAktif.options.map((opsi) => {
                  const terpilih = jawabanSoalIni === opsi.kunci;
                  return (
                    <button
                      key={opsi.kunci}
                      type="button"
                      onClick={() => pilihOpsiJawaban(opsi.kunci)}
                      className={`flex w-full items-start gap-3.5 rounded-xl border p-4 text-left text-sm transition ${
                        terpilih
                          ? "border-blue-600 bg-blue-50 font-semibold text-blue-950 shadow-sm"
                          : "border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold ${
                          terpilih
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {opsi.kunci}
                      </span>
                      <span className="pt-0.5 leading-relaxed">{opsi.teks}</span>
                    </button>
                  );
                })}
              </div>

              {/* Bilah Tombol Kendali Standar CAT BKN */}
              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
                <button
                  type="button"
                  disabled={indeksSoalAktif === 0}
                  onClick={() =>
                    setIndeksSoalAktif((idx) => Math.max(0, idx - 1))
                  }
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 sm:text-sm"
                >
                  ← Soal Sebelumnya
                </button>

                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={ubahStatusRaguRagu}
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold shadow-sm transition sm:text-sm ${
                      raguSoalIni
                        ? "bg-amber-500 text-slate-950 ring-2 ring-amber-600"
                        : "bg-amber-400 text-slate-950 hover:bg-amber-500"
                    }`}
                  >
                    {raguSoalIni ? "✓ Ditandai Ragu-ragu" : "Ragu-ragu"}
                  </button>

                  <button
                    type="button"
                    disabled={indeksSoalAktif === daftarSoal110.length - 1}
                    onClick={lewatiSoal}
                    className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 sm:text-sm"
                  >
                    Lewati Soal
                  </button>

                  <button
                    type="button"
                    onClick={simpanDanLanjutkan}
                    className="rounded-xl bg-blue-700 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-800 sm:text-sm"
                  >
                    Simpan & Lanjutkan →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* PANEL KANAN (4 KOLOM): NAVIGASI 110 NOMOR SOAL */}
          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900">
                  Navigasi 110 Nomor Soal
                </h2>
                <button
                  type="button"
                  onClick={isiJawabanContohOtomatis}
                  className="text-[11px] font-semibold text-blue-700 underline hover:text-blue-900"
                >
                  Isi Contoh 110 Jawaban
                </button>
              </div>

              {/* Filter Sub-Tes */}
              <div className="mb-4 grid grid-cols-4 gap-1.5 text-xs">
                {(["SEMUA", "TWK", "TIU", "TKP"] as FilterNavigasiSubtes[]).map(
                  (tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setFilterSubtes(tab)}
                      className={`rounded-lg py-1.5 font-bold transition ${
                        filterSubtes === tab
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>

              {/* Kisi 110 Tombol Nomor */}
              <div className="grid max-h-[380px] grid-cols-5 gap-2 overflow-y-auto pr-1 sm:grid-cols-6">
                {daftarSoalTerfilter.map((butir) => {
                  const idxAsli = butir.nomor_urut - 1;
                  const sedangAktif = idxAsli === indeksSoalAktif;
                  const sudahJawab = Boolean(jawabanPeserta[butir.id]);
                  const ragu = Boolean(daftarRaguRagu[butir.id]);

                  let kelasWarna =
                    "border-slate-300 bg-white text-slate-700 hover:bg-slate-50";
                  if (ragu) {
                    kelasWarna =
                      "border-amber-500 bg-amber-400 font-extrabold text-slate-950";
                  } else if (sudahJawab) {
                    kelasWarna =
                      "border-emerald-600 bg-emerald-600 font-bold text-white";
                  }

                  return (
                    <button
                      key={butir.id}
                      type="button"
                      onClick={() => setIndeksSoalAktif(idxAsli)}
                      className={`flex flex-col items-center justify-center rounded-lg border py-1.5 text-xs transition ${kelasWarna} ${
                        sedangAktif ? "ring-2 ring-blue-600 ring-offset-1" : ""
                      }`}
                    >
                      <span>{butir.nomor_urut}</span>
                      <span className="text-[10px] opacity-85">
                        {jawabanPeserta[butir.id] || "-"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Keterangan Warna */}
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-emerald-600" />
                  <span>Sudah Dijawab</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-amber-400" />
                  <span>Ragu-ragu</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded border border-slate-300 bg-white" />
                  <span>Belum Dijawab</span>
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    );
  }

  // ============================================================================
  // TAHAP 3: LAPORAN HASIL EVALUASI DETERMINISTIK SKD & PEMBAHASAN
  // ============================================================================
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
        >
          ← Kembali ke Halaman Utama
        </Link>
        <button
          type="button"
          onClick={() => setTahapHalaman("persiapan")}
          className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
        >
          Ulangi Simulasi / Ganti Formasi
        </button>
      </div>

      {hasilEvaluasiAkhir && (
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Hasil Evaluasi Deterministik (Kepmenpan-RB Nomor 321 Tahun 2024)
              </span>
              <h1 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                {namaPeserta} — {hasilEvaluasiAkhir.namaKategoriFormasi}
              </h1>
            </div>

            <span
              className={`rounded-xl px-4 py-2 text-sm font-extrabold ${
                hasilEvaluasiAkhir.lulusAmbangBatas
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-rose-100 text-rose-800"
              }`}
            >
              {hasilEvaluasiAkhir.statusKelulusan}
            </span>
          </div>

          <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm font-medium leading-relaxed text-slate-800">
            {hasilEvaluasiAkhir.ringkasanEvaluasi}
          </p>

          {/* Kartu Rincian Skor Sub-Tes & Kumulatif */}
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-slate-200 p-4 text-center">
              <span className="text-xs font-semibold text-slate-500">
                Skor TWK (Maks 150)
              </span>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {hasilEvaluasiAkhir.skorSubtes.TWK}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 text-center">
              <span className="text-xs font-semibold text-slate-500">
                Skor TIU (Maks 175)
              </span>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {hasilEvaluasiAkhir.skorSubtes.TIU}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 text-center">
              <span className="text-xs font-semibold text-slate-500">
                Skor TKP (Maks 225)
              </span>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {hasilEvaluasiAkhir.skorSubtes.TKP}
              </p>
            </div>
            <div className="rounded-xl border-2 border-blue-600 bg-blue-50/40 p-4 text-center">
              <span className="text-xs font-bold text-blue-800">
                Total Skor SKD (Maks 550)
              </span>
              <p className="mt-1 text-3xl font-black text-blue-700">
                {hasilEvaluasiAkhir.skorTotal}
              </p>
            </div>
          </div>

          {/* Tabel Pemenuhan Kriteria Nilai Ambang Batas */}
          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold">Kriteria Evaluasi</th>
                  <th className="px-4 py-3 font-bold">Skor Anda</th>
                  <th className="px-4 py-3 font-bold">Nilai Ambang Batas</th>
                  <th className="px-4 py-3 font-bold">Selisih</th>
                  <th className="px-4 py-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {hasilEvaluasiAkhir.rincianKriteria.map((k) => (
                  <tr key={k.label}>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {k.label}
                    </td>
                    <td className="px-4 py-3 font-bold">{k.skorPeserta}</td>
                    <td className="px-4 py-3">{k.ambangBatas}</td>
                    <td className="px-4 py-3 font-semibold">
                      {k.selisih >= 0 ? `+${k.selisih}` : k.selisih}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-md px-2.5 py-0.5 text-xs font-bold ${
                          k.memenuhiSyarat
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-rose-100 text-rose-800"
                        }`}
                      >
                        {k.memenuhiSyarat ? "Memenuhi Syarat" : "Belum Memenuhi"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* BAGIAN ANALISIS KESENJANGAN NILAI SKD (GAP ANALYZER) */}
      {hasilAnalisisGap && (
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Analisis Kesenjangan Nilai & Peta Penguasaan Kisi-Kisi SKD
          </span>
          <h2 className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">
            Grafik Perbandingan Skor Anda vs Nilai Ambang Batas Resmi
          </h2>
          <p className="mt-1 text-xs text-slate-600 sm:text-sm">
            {hasilAnalisisGap.rekomendasiBelajar}
          </p>

          {/* Visualisasi Grafik Batang Perbandingan */}
          <div className="mt-5 space-y-4">
            {hasilAnalisisGap.grafikPerbandingan.map((item) => (
              <div
                key={item.kode}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-1.5 flex flex-wrap items-center justify-between text-xs font-bold">
                  <span className="text-slate-900">{item.label}</span>
                  <span className="text-slate-700">
                    Skor Anda: <strong>{item.skorPeserta}</strong> | Ambang
                    Batas: <strong>{item.nilaiAmbangBatas}</strong> | Maksimal:{" "}
                    {item.skorMaksimal}
                  </span>
                </div>
                <div className="relative h-4 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full transition-all ${
                      item.memenuhiSyarat ? "bg-emerald-600" : "bg-rose-500"
                    }`}
                    style={{
                      width: `${Math.min(
                        100,
                        item.persentaseTerhadapMaksimal
                      )}%`,
                    }}
                  />
                  {/* Penanda Garis Nilai Ambang Batas */}
                  <div
                    className="absolute top-0 h-full w-1 bg-slate-950"
                    style={{ left: `${item.persentaseAmbangBatas}%` }}
                    title={`Nilai Ambang Batas: ${item.nilaiAmbangBatas}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tabel Peringkat Sub-Topik Kisi-Kisi dengan Akurasi Terendah */}
          <h3 className="mb-3 mt-8 text-base font-extrabold text-slate-900">
            Daftar Sub-Topik Kisi-Kisi Resmi Berdasarkan Akurasi Terendah
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold">Sub-Tes</th>
                  <th className="px-4 py-3 font-bold">
                    Sub-Topik Kisi-Kisi Resmi (Kepmenpan-RB 321/2024)
                  </th>
                  <th className="px-4 py-3 font-bold">Skor / Maks</th>
                  <th className="px-4 py-3 font-bold">Akurasi</th>
                  <th className="px-4 py-3 font-bold">Aksi Perbaikan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {hasilAnalisisGap.peringkatSubTopikTerlemah.map((sub) => (
                  <tr key={`${sub.kategori}-${sub.subTopik}`}>
                    <td className="px-4 py-2.5 font-bold text-blue-700">
                      {sub.kategori}
                    </td>
                    <td className="px-4 py-2.5 font-medium text-slate-900">
                      {sub.subTopik}
                    </td>
                    <td className="px-4 py-2.5">
                      {sub.skorDiperoleh} / {sub.skorMaksimal}
                    </td>
                    <td className="px-4 py-2.5 font-bold">
                      {sub.persentaseAkurasi}% ({sub.tingkatPenguasaan})
                    </td>
                    <td className="px-4 py-2.5">
                      <button
                        type="button"
                        onClick={() =>
                          setTargetLatihanAdaptif({
                            kategori: sub.kategori,
                            subTopik: sub.subTopik,
                          })
                        }
                        className="rounded-lg bg-indigo-600 px-3 py-1 text-xs font-bold text-white hover:bg-indigo-700"
                      >
                        Latih Kelemahanmu
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* BAGIAN LATIHAN PERBAIKAN ADAPTIF (ADAPTIVE REMEDIAL DRILL) */}
      <section className="mb-8">
        <PanelLatihanPerbaikanAdaptif
          kategoriAwal={targetLatihanAdaptif.kategori}
          subTopikAwal={targetLatihanAdaptif.subTopik}
        />
      </section>

      {/* BAGIAN PEMBAHASAN SOAL & TUTOR AI SOKRATIK */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
        <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
          Pembahasan Lengkap & Diskusi Tutor AI Sokratik
        </h2>
        <p className="mt-1 text-xs text-slate-600 sm:text-sm">
          Pelajari pembahasan resmi pada setiap butir soal atau klik tombol{" "}
          <strong>Diskusi dengan Tutor AI Sokratik</strong> untuk dibimbing
          secara bertahap.
        </p>

        <div className="mt-6 space-y-5">
          {daftarSoal110.slice(0, 15).map((butir) => {
            const jawabanUser = jawabanPeserta[butir.id];
            const opsiTerbaik = butir.options.reduce((a, b) =>
              b.skor > a.skor ? b : a
            );
            return (
              <div
                key={butir.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-slate-900">
                    Soal No. {butir.nomor_urut} — {butir.category} (
                    {butir.sub_topic})
                  </span>
                  <span className="rounded bg-blue-100 px-2.5 py-0.5 font-bold text-blue-800">
                    Jawaban Anda: {jawabanUser || "Kosong"} | Kunci Skor
                    Tertinggi: {opsiTerbaik.kunci} ({opsiTerbaik.skor} Poin)
                  </span>
                </div>

                <p className="mt-2.5 text-sm font-medium text-slate-900">
                  {butir.question_text}
                </p>

                <div className="mt-3 rounded-lg border border-slate-200 bg-white p-3.5 text-xs leading-relaxed text-slate-700">
                  <strong>Pembahasan Resmi:</strong> {butir.explanation}
                </div>

                <WidgetTutorSokratik
                  soal={butir}
                  jawabanPeserta={jawabanUser}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
