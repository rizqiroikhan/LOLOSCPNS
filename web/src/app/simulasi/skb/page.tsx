"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type {
  ButirSoalSKB,
  ButirSoalSKBTerproteksi,
} from "@/lib/skb-question-bank";

interface HasilPenilaianSKB {
  ringkasan: {
    total_soal: number;
    jumlah_benar: number;
    jumlah_salah: number;
    jumlah_kosong: number;
    skor_persen: number;
    predikat: string;
  };
  ringkasan_rumpun: {
    rumpun: string;
    benar: number;
    total: number;
    persentase: number;
  }[];
  daftar_pembahasan: (ButirSoalSKB & {
    jawaban_peserta: string | null;
    adalah_benar: boolean;
  })[];
}

export default function HalamanSimulasiSKB() {
  const [statusMuat, setStatusMuat] = useState<
    "memuat" | "siap" | "terkunci" | "selesai" | "galat"
  >("memuat");
  const [butuhMasuk, setButuhMasuk] = useState<boolean>(false);
  const [pesanKunci, setPesanKunci] = useState<string>("");
  const [daftarSoal, setDaftarSoal] = useState<ButirSoalSKBTerproteksi[]>([]);
  const [jawaban, setJawaban] = useState<Record<string, string>>({});
  const [hasil, setHasil] = useState<HasilPenilaianSKB | null>(null);
  const [sedangMengirim, setSedangMengirim] = useState<boolean>(false);

  useEffect(() => {
    let aktif = true;
    fetch("/api/tryout/skb", { cache: "no-store" })
      .then(async (res) => {
        const data = await res.json();
        if (!aktif) return;
        if (res.status === 403 || data.status === "terkunci") {
          setButuhMasuk(Boolean(data.butuh_masuk));
          setPesanKunci(
            data.pesan ||
              "Modul SKB & Wawancara Jabatan tersedia eksklusif untuk pemilik Paket Terpadu SKD + SKB."
          );
          setStatusMuat("terkunci");
          return;
        }
        if (!res.ok) {
          setPesanKunci(data.pesan || "Gagal memuat bank soal SKB.");
          setStatusMuat("galat");
          return;
        }
        setDaftarSoal(data.daftar_soal || []);
        setStatusMuat("siap");
      })
      .catch(() => {
        if (aktif) {
          setPesanKunci("Terjadi kendala koneksi saat memuat modul SKB.");
          setStatusMuat("galat");
        }
      });

    return () => {
      aktif = false;
    };
  }, []);

  async function kirimJawabanSKB() {
    setSedangMengirim(true);
    try {
      const res = await fetch("/api/tryout/skb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jawaban }),
      });
      const data = await res.json();
      if (res.ok && data.status === "berhasil") {
        setHasil(data);
        setStatusMuat("selesai");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } finally {
      setSedangMengirim(false);
    }
  }

  if (statusMuat === "memuat") {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-slate-600">
        Memeriksa hak akses Paket Terpadu SKB...
      </div>
    );
  }

  if (statusMuat === "terkunci") {
    return (
      <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-12">
        <div className="rounded-2xl border border-indigo-200 bg-white p-8 text-center shadow-md">
          <span className="inline-block rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-800">
            Modul Eksklusif Paket Terpadu CPNS
          </span>
          <h1 className="mt-3 text-2xl font-extrabold text-slate-900">
            Latihan SKB &amp; Situasional Wawancara Jabatan
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {pesanKunci}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {butuhMasuk ? (
              <Link
                href="/masuk?redirect=/simulasi/skb"
                className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-800"
              >
                Masuk / Daftar Akun →
              </Link>
            ) : null}
            <Link
              href="/pembayaran?paket=paket-terpadu-cpns"
              className="rounded-xl bg-indigo-700 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-800"
            >
              Aktifkan Paket Terpadu (Rp89.000) →
            </Link>
          </div>
          <Link
            href="/dasbor"
            className="mt-4 inline-block text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            ← Kembali ke Dasbor
          </Link>
        </div>
      </main>
    );
  }

  if (statusMuat === "galat") {
    return (
      <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6 text-center">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
          <p className="text-sm font-bold text-rose-800">{pesanKunci}</p>
          <Link
            href="/dasbor"
            className="mt-4 inline-block text-xs font-bold text-blue-700 underline"
          >
            Kembali ke Dasbor
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <Link
            href="/dasbor"
            className="text-xs font-bold text-blue-700 hover:underline"
          >
            ← Kembali ke Dasbor Peserta
          </Link>
          <h1 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Simulasi SKB Substansi ASN &amp; Wawancara Jabatan
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            20 butir studi kasus terkurasi mencakup Manajemen ASN (UU 20/2023),
            SPBE, Pengadaan, Pelayanan Publik, serta Wawancara Kompetensi STAR.
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3.5 py-1.5 text-xs font-bold text-emerald-800">
          Paket Terpadu CPNS Aktif
        </span>
      </div>

      {statusMuat === "selesai" && hasil ? (
        <div className="space-y-8">
          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase text-emerald-700">
                  Hasil Evaluasi SKB &amp; Wawancara
                </p>
                <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
                  Skor Kesiapan: {hasil.ringkasan.skor_persen}% (
                  {hasil.ringkasan.predikat})
                </h2>
                <p className="mt-1 text-sm text-slate-700">
                  Benar: <strong>{hasil.ringkasan.jumlah_benar}</strong> dari{" "}
                  {hasil.ringkasan.total_soal} soal | Salah:{" "}
                  {hasil.ringkasan.jumlah_salah} | Kosong:{" "}
                  {hasil.ringkasan.jumlah_kosong}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setJawaban({});
                  setHasil(null);
                  setStatusMuat("siap");
                }}
                className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800"
              >
                Ulangi Latihan SKB
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {hasil.ringkasan_rumpun.map((item) => (
                <div
                  key={item.rumpun}
                  className="rounded-xl border border-emerald-200 bg-white p-3.5"
                >
                  <p className="text-[11px] font-bold text-slate-500">
                    {item.rumpun}
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-slate-900">
                    {item.benar}/{item.total} ({item.persentase}%)
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-extrabold text-slate-900">
              Pembahasan Lengkap 20 Soal SKB &amp; Wawancara
            </h3>
            {hasil.daftar_pembahasan.map((item, idx) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-indigo-700">
                    Soal {idx + 1} • {item.rumpun} ({item.sub_topik})
                  </span>
                  <span
                    className={`rounded-md px-2.5 py-0.5 text-xs font-bold ${
                      item.adalah_benar
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-rose-100 text-rose-800"
                    }`}
                  >
                    {item.adalah_benar
                      ? `Tepat (${item.kunci_benar})`
                      : `Jawaban Anda: ${item.jawaban_peserta || "Kosong"} | Kunci: ${item.kunci_benar}`}
                  </span>
                </div>
                <p className="text-sm font-semibold leading-relaxed text-slate-900">
                  {item.pertanyaan}
                </p>
                <div className="mt-3 space-y-1.5 text-xs text-slate-700">
                  {item.opsi.map((o) => (
                    <div
                      key={o.kunci}
                      className={`rounded-lg border px-3 py-2 ${
                        o.kunci === item.kunci_benar
                          ? "border-emerald-300 bg-emerald-50 font-semibold text-emerald-950"
                          : o.kunci === item.jawaban_peserta
                            ? "border-rose-300 bg-rose-50 text-rose-900"
                            : "border-slate-100 bg-slate-50"
                      }`}
                    >
                      <strong>{o.kunci}.</strong> {o.teks}
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs leading-relaxed text-slate-700">
                  <p>
                    <strong>Pembahasan Resmi:</strong> {item.pembahasan}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Rujukan: {item.referensi}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      ) : (
        <div className="space-y-6">
          {daftarSoal.map((soal, idx) => {
            const terpilih = jawaban[soal.id];
            return (
              <div
                key={soal.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-2 flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-indigo-700">
                    Soal {idx + 1} dari {daftarSoal.length} • {soal.rumpun}
                  </span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 font-semibold text-slate-600">
                    {soal.sub_topik}
                  </span>
                </div>
                <p className="text-sm font-semibold leading-relaxed text-slate-900">
                  {soal.pertanyaan}
                </p>
                <div className="mt-4 space-y-2">
                  {soal.opsi.map((o) => {
                    const aktif = terpilih === o.kunci;
                    return (
                      <button
                        key={o.kunci}
                        type="button"
                        onClick={() =>
                          setJawaban((prev) => ({
                            ...prev,
                            [soal.id]: o.kunci,
                          }))
                        }
                        className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left text-xs transition sm:text-sm ${
                          aktif
                            ? "border-indigo-600 bg-indigo-50 text-indigo-950 shadow-sm"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                            aktif
                              ? "bg-indigo-700 text-white"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {o.kunci}
                        </span>
                        <span className="leading-relaxed">{o.teks}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="sticky bottom-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold text-slate-600 sm:text-sm">
              Terjawab:{" "}
              <strong className="text-slate-900">
                {Object.keys(jawaban).length}
              </strong>{" "}
              / {daftarSoal.length} soal
            </p>
            <button
              type="button"
              disabled={sedangMengirim}
              onClick={kirimJawabanSKB}
              className="rounded-xl bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-800 disabled:opacity-50"
            >
              {sedangMengirim
                ? "Menilai Jawaban SKB..."
                : "Selesai & Lihat Pembahasan SKB →"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
