"use client";

import React, { useState } from "react";
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

  async function mulaiLatihKelemahan(
    kategoriTarget: KategoriSubtesSKD = kategoriAwal,
    subTopikTarget: string = subTopikAwal
  ) {
    setSedangMembuatSoal(true);
    setPesanStatus(null);
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
    <div className="rounded-2xl border-2 border-indigo-600 bg-indigo-50/40 p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="inline-block rounded-md bg-indigo-600 px-2.5 py-1 text-xs font-bold text-white">
            LATIHAN PENGUATAN MATERI (CERDAS AI)
          </span>
          <h3 className="mt-2 text-xl font-extrabold text-slate-900">
            Target Penguatan: {kategoriAwal} — {subTopikAwal}
          </h3>
          <p className="mt-1 text-xs text-slate-600 sm:text-sm">
            Berlatih 5–10 soal variasi baru yang disusun otomatis khusus untuk
            memperkuat materi terlemah Anda.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
            <span>Jumlah Soal:</span>
            <select
              value={jumlahSoalDiminta}
              onChange={(e) => setJumlahSoalDiminta(Number(e.target.value))}
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-900"
            >
              <option value={5}>5 Soal</option>
              <option value={7}>7 Soal</option>
              <option value={10}>10 Soal</option>
            </select>
          </div>

          <button
            type="button"
            disabled={sedangMembuatSoal}
            onClick={() => mulaiLatihKelemahan(kategoriAwal, subTopikAwal)}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-extrabold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-50 sm:text-sm"
          >
            {sedangMembuatSoal
              ? "Sedang Menyiapkan Soal..."
              : "⚡ Latih Kelemahanmu Sekarang"}
          </button>
        </div>
      </div>

      {pesanStatus && (
        <div className="mt-4 rounded-lg border border-indigo-200 bg-white px-4 py-2.5 text-xs font-semibold text-indigo-900">
          {pesanStatus}
        </div>
      )}

      {daftarSoalAdaptif.length > 0 && (
        <div className="mt-6 space-y-5">
          {daftarSoalAdaptif.map((soal, idx) => {
            const pilihanPeserta = jawabanAdaptif[soal.id];
            return (
              <div
                key={soal.id}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="font-bold text-indigo-700">
                    Soal Adaptif #{idx + 1} ({soal.category} — {soal.sub_topic})
                  </span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 font-medium capitalize text-slate-700">
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
                        className={`flex w-full items-start gap-2.5 rounded-lg border p-3 text-left text-xs transition sm:text-sm ${
                          dipilih
                            ? "border-indigo-600 bg-indigo-50 font-semibold text-indigo-950"
                            : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                        }`}
                      >
                        <span className="font-bold">{opsi.kunci}.</span>
                        <span className="flex-1">{opsi.teks}</span>
                        {tampilkanPembahasan && (
                          <span className="rounded bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                            Skor: {opsi.skor}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {tampilkanPembahasan && (
                  <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-xs leading-relaxed text-emerald-950">
                    <strong>Pembahasan:</strong> {soal.explanation}
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-indigo-200 bg-white p-4">
            <div className="text-sm font-bold text-slate-900">
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
              className="rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 sm:text-sm"
            >
              Periksa Skor & Tampilkan Pembahasan Adaptif
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
