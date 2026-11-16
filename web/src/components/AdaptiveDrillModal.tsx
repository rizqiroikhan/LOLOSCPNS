"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import type {
  KategoriSubtesSKD,
  PetaJawabanPeserta,
  QuestionRow,
} from "@/types/database";

export default function PanelLatihanPerbaikanAdaptif({
  kategoriAwal,
  subTopikAwal,
}: {
  kategoriAwal: KategoriSubtesSKD;
  subTopikAwal: string;
}) {
  const [sedangMembuatSoal, setSedangMembuatSoal] = useState<boolean>(false);
  const [jumlahSoalDiminta, setJumlahSoalDiminta] = useState<number>(5);
  const [daftarSoalAdaptif, setDaftarSoalAdaptif] = useState<QuestionRow[]>([]);
  const [jawabanAdaptif, setJawabanAdaptif] = useState<PetaJawabanPeserta>({});
  const [tampilkanPembahasan, setTampilkanPembahasan] =
    useState<boolean>(false);
  const [pesanStatus, setPesanStatus] = useState<string | null>(null);
  const [terkunciUpgrade, setTerkunciUpgrade] = useState<{
    butuhMasuk: boolean;
    urlUpgrade: string;
  } | null>(null);

  async function mulaiLatihKelemahan(
    kategoriTarget: KategoriSubtesSKD = kategoriAwal,
    subTopikTarget: string = subTopikAwal
  ) {
    setSedangMembuatSoal(true);
    setPesanStatus(null);
    setTerkunciUpgrade(null);
    setTampilkanPembahasan(false);
    setJawabanAdaptif({});

    try {
      const res = await fetch("/api/drill/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kategori: kategoriTarget,
          sub_topik: subTopikTarget,
          jumlah_soal: jumlahSoalDiminta,
        }),
      });

      const data = await res.json();
      if (res.status === 403 || data.status === "terkunci") {
        setTerkunciUpgrade({
          butuhMasuk: Boolean(data.butuh_masuk),
          urlUpgrade:
            data.url_upgrade || "/pembayaran?paket=paket-intensif-skd",
        });
        setPesanStatus(
          data.pesan ||
            "Latihan Perbaikan Adaptif tersedia eksklusif untuk Paket Intensif SKD dan Paket Terpadu."
        );
        return;
      }

      if (!res.ok) {
        setPesanStatus(
          data.pesan || "Gagal menyiapkan latihan perbaikan adaptif."
        );
        return;
      }

      if (Array.isArray(data.daftar_soal) && data.daftar_soal.length > 0) {
        setDaftarSoalAdaptif(data.daftar_soal);
        setPesanStatus(data.pesan);
      }
    } catch {
      setPesanStatus(
        "Terjadi kendala saat menyiapkan latihan perbaikan adaptif."
      );
    } finally {
      setSedangMembuatSoal(false);
    }
  }

  function pilihJawaban(idSoal: string, kunci: "A" | "B" | "C" | "D" | "E") {
    setJawabanAdaptif((s) => ({
      ...s,
      [idSoal]: kunci,
    }));
  }

  const totalSkorDiperoleh = daftarSoalAdaptif.reduce((total, soal) => {
    const k = jawabanAdaptif[soal.id];
    const opsi = soal.options.find((o) => o.kunci === k);
    return total + (opsi ? opsi.skor : 0);
  }, 0);

  const skorMaksimalAdaptif = daftarSoalAdaptif.length * 5;

  return (
    <div className="rounded-3xl border border-indigo-200/90 bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/40 p-6 shadow-tactile sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-100/80 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-indigo-900">
            <Sparkles className="h-3.5 w-3.5 text-indigo-700" />
            Latihan Penguatan Materi (Cerdas AI)
          </span>
          <h3 className="mt-2.5 flex items-center gap-2 text-xl font-extrabold text-slate-900">
            <Target className="h-5 w-5 text-indigo-700" />
            <span>
              Target Penguatan: {kategoriAwal} — {subTopikAwal}
            </span>
          </h3>
          <p className="mt-1 text-xs text-slate-600 sm:text-sm">
            Berlatih 5–10 soal variasi baru yang disusun otomatis khusus untuk
            memperkuat materi terlemah Anda.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1">
            {[5, 7, 10].map((jml) => (
              <button
                key={jml}
                type="button"
                onClick={() => setJumlahSoalDiminta(jml)}
                className={`rounded-lg px-2.5 py-1.5 font-mono text-xs font-bold transition font-numeric ${
                  jumlahSoalDiminta === jml
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {jml} Soal
              </button>
            ))}
          </div>

          <button
            type="button"
            disabled={sedangMembuatSoal}
            onClick={() => mulaiLatihKelemahan(kategoriAwal, subTopikAwal)}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-extrabold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-50 sm:text-sm"
          >
            {sedangMembuatSoal ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sedang Menyiapkan Soal...</span>
              </>
            ) : (
              <>
                <Zap className="h-4 w-4" />
                <span>Latih Kelemahanmu Sekarang</span>
              </>
            )}
          </button>
        </div>
      </div>

      {pesanStatus && (
        <div className="mt-5 rounded-2xl border border-indigo-200 bg-white px-4 py-3.5 text-xs font-semibold text-indigo-950 shadow-sm">
          <p>{pesanStatus}</p>
          {terkunciUpgrade && (
            <div className="mt-3 flex flex-wrap gap-2">
              {terkunciUpgrade.butuhMasuk && (
                <Link
                  href="/masuk"
                  className="rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-800 hover:bg-slate-100"
                >
                  Masuk / Daftar Akun
                </Link>
              )}
              <Link
                href={terkunciUpgrade.urlUpgrade}
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-700 px-3.5 py-2 text-xs font-bold text-white hover:bg-blue-800"
              >
                <span>Aktifkan Paket Intensif SKD (Rp49.000)</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>
      )}

      {daftarSoalAdaptif.length > 0 && (
        <div className="mt-6 space-y-5">
          {daftarSoalAdaptif.map((soal, idx) => {
            const pilihanPeserta = jawabanAdaptif[soal.id];
            return (
              <div
                key={soal.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-indigo-700 font-numeric">
                    Soal Adaptif #{idx + 1} ({soal.category} — {soal.sub_topic})
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-semibold capitalize text-slate-700">
                    Kesulitan: {soal.difficulty}
                  </span>
                </div>

                <p className="mb-4 text-sm font-medium leading-relaxed text-slate-900">
                  {soal.question_text}
                </p>

                <div className="space-y-2">
                  {soal.options.map((opsi) => {
                    const dipilih = pilihanPeserta === opsi.kunci;
                    return (
                      <button
                        key={opsi.kunci}
                        type="button"
                        onClick={() => pilihJawaban(soal.id, opsi.kunci)}
                        className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-xs transition sm:text-sm ${
                          dipilih
                            ? "border-indigo-600 bg-indigo-50/80 font-semibold text-indigo-950 ring-2 ring-indigo-100"
                            : "border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:bg-slate-50"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-xs font-bold ${
                            dipilih
                              ? "bg-indigo-600 text-white"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {opsi.kunci}
                        </span>
                        <span className="flex-1 leading-relaxed">
                          {opsi.teks}
                        </span>
                        {tampilkanPembahasan && (
                          <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-800 font-numeric">
                            Skor: {opsi.skor}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {tampilkanPembahasan && (
                  <div className="mt-3.5 rounded-xl border border-emerald-200 bg-emerald-50/70 p-3.5 text-xs leading-relaxed text-emerald-950">
                    <strong>Pembahasan:</strong> {soal.explanation}
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-indigo-200 bg-white p-4 shadow-sm">
            <div className="font-mono text-sm font-bold text-slate-900 font-numeric">
              {tampilkanPembahasan ? (
                <span>
                  Skor Latihan Adaptif Anda: {totalSkorDiperoleh} /{" "}
                  {skorMaksimalAdaptif} Poin
                </span>
              ) : (
                <span>
                  Terjawab: {Object.keys(jawabanAdaptif).length} dari{" "}
                  {daftarSoalAdaptif.length} Soal
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => setTampilkanPembahasan(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 sm:text-sm"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Periksa Skor &amp; Tampilkan Pembahasan Adaptif</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
