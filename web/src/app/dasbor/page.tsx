"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DAFTAR_PAKET_LANGGANAN } from "@/lib/access-control";

interface ProfilDasbor {
  id: string;
  email: string;
  nama_lengkap: string;
  tingkat_langganan: "gratis" | "intensif_skd" | "terpadu_cpns";
  aktif_hingga: string | null;
}

interface DataSesiDasbor {
  terautentikasi: boolean;
  profil: ProfilDasbor | null;
  kuota_ai: {
    diizinkan: boolean;
    batasHarian: number;
    sisaKuota: number;
    terpakai_hari_ini: number;
  };
  riwayat_pesanan: {
    id: string;
    order_id: string;
    paket_id: string;
    nominal_idr: number;
    metode_pembayaran: string;
    status_transaksi: string;
    created_at: string;
  }[];
  riwayat_tryout: {
    id: string;
    package_slug: string;
    formasi_type: string;
    section_scores_json: { TWK: number; TIU: number; TKP: number };
    total_score: number;
    is_passed: boolean;
    ai_diagnostic_summary: string | null;
    finished_at: string;
  }[];
}

const LABEL_TINGKAT: Record<string, { judul: string; warna: string }> = {
  gratis: {
    judul: "Paket Gratis (Perdana)",
    warna: "bg-slate-100 text-slate-700 border-slate-300",
  },
  intensif_skd: {
    judul: "Paket Intensif SKD Aktif",
    warna: "bg-blue-100 text-blue-800 border-blue-300",
  },
  terpadu_cpns: {
    judul: "Paket Terpadu SKD + SKB Aktif",
    warna: "bg-emerald-100 text-emerald-800 border-emerald-300",
  },
};

export default function HalamanDasborPeserta() {
  const router = useRouter();
  const [dataSesi, setDataSesi] = useState<DataSesiDasbor | null>(null);
  const [sedangMemuat, setSedangMemuat] = useState<boolean>(true);
  const [sedangKeluar, setSedangKeluar] = useState<boolean>(false);

  const muatSesi = useCallback(async () => {
    setSedangMemuat(true);
    try {
      const res = await fetch("/api/auth/session", { cache: "no-store" });
      const data = await res.json();
      setDataSesi(data);
    } catch {
      setDataSesi(null);
    } finally {
      setSedangMemuat(false);
    }
  }, []);

  useEffect(() => {
    muatSesi();
  }, [muatSesi]);

  async function tanganiKeluar() {
    setSedangKeluar(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/");
      router.refresh();
    } finally {
      setSedangKeluar(false);
    }
  }

  if (sedangMemuat) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-slate-600">
        Memuat dasbor belajar peserta...
      </div>
    );
  }

  if (!dataSesi?.terautentikasi || !dataSesi.profil) {
    return (
      <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6 py-12 text-center">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-extrabold text-slate-900">
            Masuk ke Dasbor Peserta
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Silakan masuk atau daftarkan akun terlebih dahulu untuk melihat status
            langganan, kuota Tutor AI harian, dan riwayat skor CAT Anda.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/masuk?redirect=/dasbor"
              className="rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-800"
            >
              Masuk / Daftar Akun →
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const { profil, kuota_ai, riwayat_pesanan, riwayat_tryout } = dataSesi;
  const infoTier = LABEL_TINGKAT[profil.tingkat_langganan] || LABEL_TINGKAT.gratis;
  const punyaiIntensif =
    profil.tingkat_langganan === "intensif_skd" ||
    profil.tingkat_langganan === "terpadu_cpns";
  const punyaiTerpadu = profil.tingkat_langganan === "terpadu_cpns";

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Header Dasbor */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <Link
            href="/"
            className="text-xs font-bold text-blue-700 hover:underline"
          >
            ← Kembali ke Beranda LOLOS CPNS
          </Link>
          <h1 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Halo, {profil.nama_lengkap}
          </h1>
          <p className="text-sm text-slate-500">{profil.email}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full border px-4 py-1.5 text-xs font-extrabold ${infoTier.warna}`}
          >
            {infoTier.judul}
          </span>
          <button
            type="button"
            disabled={sedangKeluar}
            onClick={tanganiKeluar}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-50"
          >
            {sedangKeluar ? "Keluar..." : "Keluar Akun"}
          </button>
        </div>
      </div>

      {/* Ringkasan Kuota & Kartu Akses Modul */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Kuota Diskusi Tutor AI Hari Ini
          </p>
          <p className="mt-2 text-3xl font-extrabold text-slate-900">
            {`${kuota_ai.terpakai_hari_ini} / ${kuota_ai.batasHarian}`}
          </p>
          <p className="mt-1 text-xs text-slate-600">
            {`Sisa kuota harian: ${kuota_ai.sisaKuota} sesi pertanyaan Tutor AI.`}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Simulasi CAT SKD (110 Soal)
          </p>
          <p className="mt-2 text-sm font-bold text-slate-900">
            {punyaiIntensif
              ? "Paket Perdana + Paket Intensif SKD Terbuka"
              : "Paket Perdana Gratis Siap Dikerjakan"}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/simulasi/skd/paket-perdana-gratis"
              className="rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-bold text-white hover:bg-slate-800"
            >
              Simulasi Gratis
            </Link>
            {punyaiIntensif ? (
              <Link
                href="/simulasi/skd/paket-intensif-skd"
                className="rounded-lg bg-blue-700 px-3.5 py-2 text-xs font-bold text-white hover:bg-blue-800"
              >
                Buka Paket Intensif →
              </Link>
            ) : (
              <Link
                href="/pembayaran?paket=paket-intensif-skd"
                className="rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-800 hover:bg-blue-100"
              >
                Aktifkan Paket Intensif
              </Link>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Modul SKB &amp; Wawancara Jabatan
          </p>
          <p className="mt-2 text-sm font-bold text-slate-900">
            {punyaiTerpadu
              ? "Akses Penuh Paket Terpadu Aktif"
              : "Terkunci — Khusus Paket Terpadu"}
          </p>
          <div className="mt-4">
            {punyaiTerpadu ? (
              <Link
                href="/simulasi/skb"
                className="inline-block rounded-lg bg-emerald-700 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-800"
              >
                Mulai Simulasi SKB &amp; Wawancara →
              </Link>
            ) : (
              <Link
                href="/pembayaran?paket=paket-terpadu-cpns"
                className="inline-block rounded-lg bg-indigo-700 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-800"
              >
                Buka Paket Terpadu (Rp89.000) →
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Riwayat Simulasi CAT SKD */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-extrabold text-slate-900">
          Riwayat Simulasi CAT SKD Terbaru
        </h2>
        {riwayat_tryout.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">
            Belum ada riwayat pengerjaan simulasi yang tersimpan pada akun ini.
            Mulai simulasi untuk memantau grafik progres nilai Anda.
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2.5 pr-4 font-bold">Tanggal</th>
                  <th className="py-2.5 pr-4 font-bold">Paket</th>
                  <th className="py-2.5 pr-4 font-bold">Formasi</th>
                  <th className="py-2.5 pr-4 font-bold">TWK / TIU / TKP</th>
                  <th className="py-2.5 pr-4 font-bold">Total</th>
                  <th className="py-2.5 font-bold">Status Ambang Batas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {riwayat_tryout.map((item) => {
                  const namaPaket =
                    DAFTAR_PAKET_LANGGANAN[item.package_slug]?.judul ||
                    item.package_slug;
                  return (
                    <tr key={item.id}>
                      <td className="py-3 pr-4 text-slate-600">
                        {new Date(item.finished_at).toLocaleString("id-ID")}
                      </td>
                      <td className="py-3 pr-4 font-semibold text-slate-900">
                        {namaPaket}
                      </td>
                      <td className="py-3 pr-4 uppercase text-slate-700">
                        {item.formasi_type}
                      </td>
                      <td className="py-3 pr-4 text-slate-700">
                        {item.section_scores_json?.TWK ?? 0} /{" "}
                        {item.section_scores_json?.TIU ?? 0} /{" "}
                        {item.section_scores_json?.TKP ?? 0}
                      </td>
                      <td className="py-3 pr-4 font-extrabold text-slate-900">
                        {item.total_score}
                      </td>
                      <td className="py-3">
                        <span
                          className={`rounded-md px-2.5 py-1 text-xs font-bold ${
                            item.is_passed
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {item.is_passed ? "LULUS NAB" : "BELUM LULUS"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Riwayat Pesanan Pembayaran */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-extrabold text-slate-900">
          Riwayat Transaksi Paket
        </h2>
        {riwayat_pesanan.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">
            Belum ada transaksi pembayaran tercatat pada akun ini.
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2.5 pr-4 font-bold">ID Pesanan</th>
                  <th className="py-2.5 pr-4 font-bold">Paket</th>
                  <th className="py-2.5 pr-4 font-bold">Nominal</th>
                  <th className="py-2.5 pr-4 font-bold">Metode</th>
                  <th className="py-2.5 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {riwayat_pesanan.map((order) => (
                  <tr key={order.id}>
                    <td className="py-3 pr-4 font-mono text-xs text-slate-700">
                      {order.order_id}
                    </td>
                    <td className="py-3 pr-4 font-semibold text-slate-900">
                      {DAFTAR_PAKET_LANGGANAN[order.paket_id]?.judul ||
                        order.paket_id}
                    </td>
                    <td className="py-3 pr-4 text-slate-800">
                      Rp{order.nominal_idr.toLocaleString("id-ID")}
                    </td>
                    <td className="py-3 pr-4 uppercase text-slate-600">
                      {order.metode_pembayaran}
                    </td>
                    <td className="py-3">
                      <span
                        className={`rounded-md px-2.5 py-1 text-xs font-bold ${
                          order.status_transaksi === "lunas"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {order.status_transaksi}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
