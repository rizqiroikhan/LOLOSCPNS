"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Bot,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Layers,
  LogOut,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import NavbarPeserta from "@/components/NavbarPeserta";
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
    warna: "bg-slate-100 text-slate-800 border-slate-300",
  },
  intensif_skd: {
    judul: "Paket Intensif SKD Aktif",
    warna: "bg-blue-100/90 text-blue-900 border-blue-300",
  },
  terpadu_cpns: {
    judul: "Paket Terpadu SKD + SKB Aktif",
    warna: "bg-emerald-100/90 text-emerald-900 border-emerald-300",
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
      <div className="min-h-screen bg-slate-50">
        <NavbarPeserta />
        <div className="flex min-h-[70vh] flex-col items-center justify-center gap-3 text-sm text-slate-600">
          <div className="h-8 w-8 animate-spin rounded-full border-3 border-blue-200 border-t-blue-700" />
          <span>Memuat dasbor belajar peserta...</span>
        </div>
      </div>
    );
  }

  if (!dataSesi?.terautentikasi || !dataSesi.profil) {
    return (
      <div className="min-h-screen bg-slate-50 bg-grid-architectural">
        <NavbarPeserta />
        <main className="mx-auto flex min-h-[78vh] max-w-lg flex-col justify-center px-6 py-12 text-center">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-tactile-lg sm:p-10">
            <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-700">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-950">
              Masuk ke Dasbor Peserta
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Silakan masuk atau daftarkan akun terlebih dahulu untuk melihat
              status langganan, kuota Tutor AI harian, dan riwayat skor CAT
              Anda.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/masuk?redirect=/dasbor"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800"
              >
                <span>Masuk / Daftar Akun</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali ke Beranda</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const { profil, kuota_ai, riwayat_pesanan, riwayat_tryout } = dataSesi;
  const infoTier =
    LABEL_TINGKAT[profil.tingkat_langganan] || LABEL_TINGKAT.gratis;
  const punyaiIntensif =
    profil.tingkat_langganan === "intensif_skd" ||
    profil.tingkat_langganan === "terpadu_cpns";
  const punyaiTerpadu = profil.tingkat_langganan === "terpadu_cpns";
  const persenKuotaTerpakai = Math.min(
    100,
    Math.round(
      (kuota_ai.terpakai_hari_ini / Math.max(1, kuota_ai.batasHarian)) * 100
    )
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavbarPeserta />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Header Dasbor */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile sm:p-8">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Kembali ke Beranda LOLOS CPNS</span>
            </Link>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              Halo, {profil.nama_lengkap}
            </h1>
            <p className="mt-0.5 font-mono text-xs text-slate-500 sm:text-sm">
              {profil.email}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-extrabold ${infoTier.warna}`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>{infoTier.judul}</span>
            </span>
            <button
              type="button"
              disabled={sedangKeluar}
              onClick={tanganiKeluar}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-100 disabled:opacity-50"
            >
              <LogOut className="h-3.5 w-3.5 text-slate-500" />
              <span>{sedangKeluar ? "Keluar..." : "Keluar Akun"}</span>
            </button>
          </div>
        </div>

        {/* Ringkasan Kuota & Kartu Akses Modul */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Kartu 1: Kuota Tutor AI */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Kuota Diskusi Tutor AI Hari Ini
                </p>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-700">
                  <Bot className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-3 font-mono text-3xl font-extrabold text-slate-950 font-numeric">
                {`${kuota_ai.terpakai_hari_ini} / ${kuota_ai.batasHarian}`}
              </p>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-indigo-600 transition-all"
                  style={{ width: `${persenKuotaTerpakai}%` }}
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-600">
              {`Sisa kuota harian: ${kuota_ai.sisaKuota} sesi pertanyaan Tutor AI.`}
            </p>
          </div>

          {/* Kartu 2: Modul CAT SKD */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Simulasi CAT SKD (110 Soal)
                </p>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-700">
                  <Layers className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-3 text-base font-extrabold text-slate-900">
                {punyaiIntensif
                  ? "Paket Perdana + Paket Intensif SKD Terbuka"
                  : "Paket Perdana Gratis Siap Dikerjakan"}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Standar Kepmenpan-RB Nomor 321 Tahun 2024 (TWK, TIU, TKP).
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/simulasi/skd/paket-perdana-gratis"
                className="rounded-xl bg-slate-900 px-3.5 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800"
              >
                Simulasi Gratis
              </Link>
              {punyaiIntensif ? (
                <Link
                  href="/simulasi/skd/paket-intensif-skd"
                  className="inline-flex items-center gap-1 rounded-xl bg-blue-700 px-3.5 py-2.5 text-xs font-bold text-white transition hover:bg-blue-800"
                >
                  <span>Buka Paket Intensif</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ) : (
                <Link
                  href="/pembayaran?paket=paket-intensif-skd"
                  className="rounded-xl border border-blue-200 bg-blue-50 px-3.5 py-2.5 text-xs font-bold text-blue-800 transition hover:bg-blue-100"
                >
                  Aktifkan Paket Intensif
                </Link>
              )}
            </div>
          </div>

          {/* Kartu 3: Modul SKB & Wawancara */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Modul SKB &amp; Wawancara Jabatan
                </p>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                  <Award className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-3 text-base font-extrabold text-slate-900">
                {punyaiTerpadu
                  ? "Akses Penuh Paket Terpadu Aktif"
                  : "Terkunci — Khusus Paket Terpadu"}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Latihan kompetensi bidang dan wawancara berbasis studi kasus.
              </p>
            </div>
            <div className="mt-5">
              {punyaiTerpadu ? (
                <Link
                  href="/simulasi/skb"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-700 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-800"
                >
                  <span>Mulai Simulasi SKB &amp; Wawancara</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ) : (
                <Link
                  href="/pembayaran?paket=paket-terpadu-cpns"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-700 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-800"
                >
                  <span>Buka Paket Terpadu (Rp89.000)</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Riwayat Simulasi CAT SKD */}
        <section className="mt-8 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile sm:p-8">
          <div className="flex items-center gap-2.5">
            <ClipboardList className="h-5 w-5 text-blue-700" />
            <h2 className="text-lg font-extrabold text-slate-950">
              Riwayat Simulasi CAT SKD Terbaru
            </h2>
          </div>
          {riwayat_tryout.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-6 text-sm text-slate-500">
              Belum ada riwayat pengerjaan simulasi yang tersimpan pada akun
              ini. Mulai simulasi untuk memantau grafik progres nilai Anda.
            </div>
          ) : (
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                    <th className="py-3 pr-4 font-bold">Tanggal</th>
                    <th className="py-3 pr-4 font-bold">Paket</th>
                    <th className="py-3 pr-4 font-bold">Formasi</th>
                    <th className="py-3 pr-4 font-bold">TWK / TIU / TKP</th>
                    <th className="py-3 pr-4 font-bold">Total</th>
                    <th className="py-3 font-bold">Status Ambang Batas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {riwayat_tryout.map((item) => {
                    const namaPaket =
                      DAFTAR_PAKET_LANGGANAN[item.package_slug]?.judul ||
                      item.package_slug;
                    return (
                      <tr
                        key={item.id}
                        className="transition hover:bg-slate-50/70"
                      >
                        <td className="py-3.5 pr-4 font-mono text-xs text-slate-600 font-numeric">
                          {new Date(item.finished_at).toLocaleString("id-ID")}
                        </td>
                        <td className="py-3.5 pr-4 font-bold text-slate-900">
                          {namaPaket}
                        </td>
                        <td className="py-3.5 pr-4 text-xs font-bold uppercase text-slate-700">
                          {item.formasi_type}
                        </td>
                        <td className="py-3.5 pr-4 font-mono text-slate-700 font-numeric">
                          {item.section_scores_json?.TWK ?? 0} /{" "}
                          {item.section_scores_json?.TIU ?? 0} /{" "}
                          {item.section_scores_json?.TKP ?? 0}
                        </td>
                        <td className="py-3.5 pr-4 font-mono font-extrabold text-slate-950 font-numeric">
                          {item.total_score}
                        </td>
                        <td className="py-3.5">
                          <span
                            className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold ${
                              item.is_passed
                                ? "bg-emerald-100 text-emerald-900"
                                : "bg-amber-100 text-amber-900"
                            }`}
                          >
                            {item.is_passed && (
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" />
                            )}
                            <span>
                              {item.is_passed ? "LULUS NAB" : "BELUM LULUS"}
                            </span>
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
        <section className="mt-8 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile sm:p-8">
          <div className="flex items-center gap-2.5">
            <CreditCard className="h-5 w-5 text-blue-700" />
            <h2 className="text-lg font-extrabold text-slate-950">
              Riwayat Transaksi Paket
            </h2>
          </div>
          {riwayat_pesanan.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-6 text-sm text-slate-500">
              Belum ada transaksi pembayaran tercatat pada akun ini.
            </div>
          ) : (
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                    <th className="py-3 pr-4 font-bold">ID Pesanan</th>
                    <th className="py-3 pr-4 font-bold">Paket</th>
                    <th className="py-3 pr-4 font-bold">Nominal</th>
                    <th className="py-3 pr-4 font-bold">Metode</th>
                    <th className="py-3 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {riwayat_pesanan.map((order) => (
                    <tr
                      key={order.id}
                      className="transition hover:bg-slate-50/70"
                    >
                      <td className="py-3.5 pr-4 font-mono text-xs text-slate-700 font-numeric">
                        {order.order_id}
                      </td>
                      <td className="py-3.5 pr-4 font-bold text-slate-900">
                        {DAFTAR_PAKET_LANGGANAN[order.paket_id]?.judul ||
                          order.paket_id}
                      </td>
                      <td className="py-3.5 pr-4 font-mono font-bold text-slate-800 font-numeric">
                        Rp{order.nominal_idr.toLocaleString("id-ID")}
                      </td>
                      <td className="py-3.5 pr-4 text-xs font-bold uppercase text-slate-600">
                        {order.metode_pembayaran}
                      </td>
                      <td className="py-3.5">
                        <span
                          className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
                            order.status_transaksi === "lunas"
                              ? "bg-emerald-100 text-emerald-900"
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
    </div>
  );
}
