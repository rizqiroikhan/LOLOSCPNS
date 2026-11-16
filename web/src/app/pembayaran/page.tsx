"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  CreditCard,
  QrCode,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import NavbarPeserta from "@/components/NavbarPeserta";
import {
  DAFTAR_PAKET_LANGGANAN,
  type MetodePembayaranResmi,
  type TingkatLanggananPeserta,
} from "@/lib/access-control";

interface ProfilPembayar {
  id: string;
  email: string;
  nama_lengkap: string;
  tingkat_langganan: TingkatLanggananPeserta;
}

interface DataPesananAktif {
  order_id: string;
  paket_id: string;
  judul_paket: string;
  nominal_idr: number;
  metode_pembayaran: MetodePembayaranResmi;
  status_transaksi: string;
  snap_token: string | null;
  snap_redirect_url: string | null;
  qris_string: string | null;
  va_number: string | null;
}

const LABEL_METODE_PEMBAYARAN: Record<MetodePembayaranResmi, string> = {
  qris: "QRIS Instan",
  va_bca: "Virtual Account BCA",
  va_mandiri: "Virtual Account Mandiri",
  va_bni: "Virtual Account BNI",
  va_bri: "Virtual Account BRI",
};

const DAFTAR_VIRTUAL_ACCOUNT: {
  kode: Exclude<MetodePembayaranResmi, "qris">;
  nama: string;
  info: string;
}[] = [
  {
    kode: "va_bca",
    nama: "Virtual Account BCA",
    info: "Verifikasi otomatis via m-BCA / myBCA / KlikBCA",
  },
  {
    kode: "va_mandiri",
    nama: "Virtual Account Mandiri",
    info: "Livin' by Mandiri & ATM Bersama",
  },
  {
    kode: "va_bni",
    nama: "Virtual Account BNI",
    info: "wondr / BNI Mobile Banking & ATM",
  },
  {
    kode: "va_bri",
    nama: "Virtual Account BRI",
    info: "BRImo & ATM BRI",
  },
];

function KontenHalamanPembayaran() {
  const searchParams = useSearchParams();
  const paketAwalQuery = searchParams.get("paket") || "paket-intensif-skd";
  const [idPaketDipilih, setIdPaketDipilih] = useState<string>(
    DAFTAR_PAKET_LANGGANAN[paketAwalQuery] &&
      !DAFTAR_PAKET_LANGGANAN[paketAwalQuery].gratis
      ? paketAwalQuery
      : "paket-intensif-skd"
  );
  const [metodePembayaran, setMetodePembayaran] =
    useState<MetodePembayaranResmi>("qris");

  const [sedangMemeriksaSesi, setSedangMemeriksaSesi] = useState<boolean>(true);
  const [profilAktif, setProfilAktif] = useState<ProfilPembayar | null>(null);
  const [sedangMemproses, setSedangMemproses] = useState<boolean>(false);
  const [pesananAktif, setPesananAktif] = useState<DataPesananAktif | null>(
    null
  );
  const [modeSimulasiLokal, setModeSimulasiLokal] = useState<boolean>(false);
  const [pesanStatus, setPesanStatus] = useState<string | null>(null);
  const [pesanGalat, setPesanGalat] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/auth/session", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data?.terautentikasi && data?.profil) {
          setProfilAktif(data.profil);
        } else {
          setProfilAktif(null);
        }
      })
      .catch(() => {
        setProfilAktif(null);
      })
      .finally(() => setSedangMemeriksaSesi(false));
  }, []);

  const daftarPaketBerbayar = Object.values(DAFTAR_PAKET_LANGGANAN).filter(
    (p) => !p.gratis
  );
  const paketTerpilih =
    DAFTAR_PAKET_LANGGANAN[idPaketDipilih] || daftarPaketBerbayar[0];
  const tingkatAktif: TingkatLanggananPeserta =
    profilAktif?.tingkat_langganan || "gratis";

  async function buatPesananPembayaran() {
    setSedangMemproses(true);
    setPesanStatus(null);
    setPesanGalat(null);

    try {
      const res = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_paket: idPaketDipilih,
          metode_pembayaran: metodePembayaran,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.status === "gagal" || data.status === "butuh_masuk") {
        setPesanGalat(
          data.pesan || "Gagal membuat transaksi pembayaran paket."
        );
        return;
      }

      setPesananAktif(data.pesanan);
      setModeSimulasiLokal(Boolean(data.mode_simulasi_lokal));
      setPesanStatus(data.pesan || null);
    } catch {
      setPesanGalat("Terjadi gangguan jaringan saat membuat transaksi.");
    } finally {
      setSedangMemproses(false);
    }
  }

  async function konfirmasiUjiCobaLokal() {
    if (!pesananAktif) return;
    setSedangMemproses(true);
    setPesanGalat(null);

    try {
      const res = await fetch("/api/payment/dev-confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order_id: pesananAktif.order_id }),
      });
      const data = await res.json();

      if (
        !res.ok ||
        data.status === "gagal" ||
        data.status === "tidak_tersedia"
      ) {
        setPesanGalat(
          data.pesan || "Gagal mengonfirmasi pembayaran uji coba lokal."
        );
        return;
      }

      setPesananAktif({
        ...pesananAktif,
        status_transaksi: "lunas",
      });
      if (data.profil) {
        setProfilAktif(data.profil);
      }
      setPesanStatus(data.pesan);
    } catch {
      setPesanGalat("Gagal menghubungi layanan konfirmasi uji coba lokal.");
    } finally {
      setSedangMemproses(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavbarPeserta />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile sm:p-8">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Kembali ke Beranda</span>
            </Link>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              Aktivasi Paket Belajar &amp; Pembayaran Resmi
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Pembayaran terintegrasi langsung dengan akun peserta dan
              diverifikasi otomatis oleh peladen gerbang pembayaran terenkripsi.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-right">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Status Akun Anda
            </p>
            <p className="mt-0.5 text-sm font-extrabold text-blue-700">
              {sedangMemeriksaSesi
                ? "Memeriksa sesi..."
                : !profilAktif
                  ? "Belum Masuk Akun"
                  : tingkatAktif === "terpadu_cpns"
                    ? `${profilAktif.nama_lengkap} • Terpadu`
                    : tingkatAktif === "intensif_skd"
                      ? `${profilAktif.nama_lengkap} • Intensif SKD`
                      : `${profilAktif.nama_lengkap} • Gratis`}
            </p>
          </div>
        </div>

        {!sedangMemeriksaSesi && !profilAktif && (
          <div className="mb-8 rounded-3xl border border-amber-200 bg-amber-50/90 p-6 shadow-sm">
            <h2 className="text-base font-extrabold text-amber-950">
              Masuk Akun Peserta Sebelum Melanjutkan Pembayaran
            </h2>
            <p className="mt-1.5 text-sm text-amber-900">
              Untuk menjamin paket berbayar tersimpan permanen dan dapat dibuka
              di perangkat mana pun, silakan masuk atau daftar akun peserta
              terlebih dahulu.
            </p>
            <div className="mt-4">
              <Link
                href={`/masuk?redirect=${encodeURIComponent(
                  `/pembayaran?paket=${idPaketDipilih}`
                )}`}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-800"
              >
                <span>Masuk / Daftar Akun Peserta</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-12">
          {/* KOLOM KIRI: PILIH PAKET & METODE */}
          <section className="space-y-6 lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-blue-700" />
                <h2 className="text-base font-extrabold text-slate-950">
                  1. Pilih Paket Belajar CPNS
                </h2>
              </div>
              <div className="mt-4 space-y-3">
                {daftarPaketBerbayar.map((paket) => {
                  const aktif = idPaketDipilih === paket.id_paket;
                  return (
                    <button
                      key={paket.id_paket}
                      type="button"
                      onClick={() => {
                        setIdPaketDipilih(paket.id_paket);
                        setPesananAktif(null);
                        setPesanStatus(null);
                        setPesanGalat(null);
                      }}
                      className={`w-full rounded-2xl border p-4 text-left transition ${
                        aktif
                          ? "border-blue-600 bg-blue-50/70 ring-2 ring-blue-100"
                          : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-extrabold text-slate-950">
                            {paket.judul}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-slate-600">
                            {paket.deskripsi}
                          </p>
                        </div>
                        <span className="shrink-0 font-mono text-base font-extrabold text-blue-700 font-numeric">
                          Rp{paket.harga_idr.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-blue-700" />
                <h2 className="text-base font-extrabold text-slate-950">
                  2. Pilih Metode Pembayaran Resmi
                </h2>
              </div>

              {/* Prioritas Utama: QRIS Instan */}
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setMetodePembayaran("qris")}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    metodePembayaran === "qris"
                      ? "border-blue-600 bg-blue-50/90 text-blue-950 ring-2 ring-blue-100"
                      : "border-blue-200 bg-blue-50/30 text-slate-800 hover:border-blue-300 hover:bg-blue-50/60"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-700 text-white">
                        <QrCode className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-extrabold text-slate-950">
                          QRIS Instan
                        </p>
                        <p className="text-[11px] font-medium text-slate-600">
                          Scan dari BCA mobile/myBCA, Livin&apos;, BRImo, BNI,
                          GoPay, OVO, DANA, &amp; ShopeePay
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-800">
                      Direkomendasikan • Paling Cepat
                    </span>
                  </div>
                </button>
              </div>

              <div className="mt-5">
                <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Atau Transfer Bank (Virtual Account)
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {DAFTAR_VIRTUAL_ACCOUNT.map((m) => {
                    const aktif = metodePembayaran === m.kode;
                    return (
                      <button
                        key={m.kode}
                        type="button"
                        onClick={() => setMetodePembayaran(m.kode)}
                        className={`rounded-2xl border p-4 text-left transition ${
                          aktif
                            ? "border-blue-600 bg-blue-50/80 text-blue-950 ring-2 ring-blue-100"
                            : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-blue-700" />
                          <p className="text-xs font-extrabold">{m.nama}</p>
                        </div>
                        <p className="mt-1 text-[11px] text-slate-500">
                          {m.info}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* KOLOM KANAN: RINGKASAN PESANAN & KONFIRMASI */}
          <section className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile-lg sm:p-7">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-700" />
                <h2 className="text-base font-extrabold text-slate-950">
                  Ringkasan Pesanan
                </h2>
              </div>
              <div className="mt-4 space-y-3 border-b border-slate-200 pb-4 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Paket Pilihan</span>
                  <span className="font-bold text-slate-900">
                    {paketTerpilih.judul}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Akun Pembeli</span>
                  <span className="font-mono text-xs font-semibold text-slate-800">
                    {profilAktif?.email || "Belum masuk"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Kuota Tutor AI</span>
                  <span className="font-mono font-semibold text-slate-800 font-numeric">
                    {paketTerpilih.kuota_tutor_harian >= 100
                      ? "Tanpa Batas Harian"
                      : `${paketTerpilih.kuota_tutor_harian} / hari`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Metode Pembayaran</span>
                  <span className="font-semibold text-slate-800">
                    {LABEL_METODE_PEMBAYARAN[metodePembayaran]}
                  </span>
                </div>
                <div className="flex justify-between pt-2 text-base font-extrabold text-slate-950">
                  <span>Total Pembayaran</span>
                  <span className="font-mono text-blue-700 font-numeric">
                    Rp{paketTerpilih.harga_idr.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              {pesanGalat && (
                <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs font-medium text-rose-800">
                  {pesanGalat}
                </div>
              )}

              {pesanStatus && (
                <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs font-medium text-emerald-900">
                  {pesanStatus}
                </div>
              )}

              {!pesananAktif ? (
                <button
                  type="button"
                  disabled={sedangMemproses || !profilAktif}
                  onClick={buatPesananPembayaran}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 py-3.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span>
                    {sedangMemproses
                      ? "Membuat Tagihan..."
                      : profilAktif
                        ? `Buat Pesanan (${LABEL_METODE_PEMBAYARAN[metodePembayaran]})`
                        : "Masuk Akun Terlebih Dahulu"}
                  </span>
                  {profilAktif && !sedangMemproses && (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </button>
              ) : pesananAktif.status_transaksi === "lunas" ? (
                <div className="mt-6 space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">
                  <p className="inline-flex items-center gap-1.5 text-sm font-extrabold text-emerald-900">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                    <span>Pembayaran Lunas &amp; Akses Aktif!</span>
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/simulasi/skd/${paketTerpilih.id_paket}`}
                      className="rounded-xl bg-emerald-700 py-2.5 text-xs font-bold text-white hover:bg-emerald-800"
                    >
                      Mulai Simulasi {paketTerpilih.judul} →
                    </Link>
                    {tingkatAktif === "terpadu_cpns" && (
                      <Link
                        href="/simulasi/skb"
                        className="rounded-xl bg-indigo-700 py-2.5 text-xs font-bold text-white hover:bg-indigo-800"
                      >
                        Buka Modul SKB &amp; Wawancara →
                      </Link>
                    )}
                    <Link
                      href="/dasbor"
                      className="text-xs font-bold text-emerald-800 underline"
                    >
                      Lihat Dasbor Peserta
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div>
                    <p className="text-xs font-bold text-slate-600">
                      ID Pesanan Resmi:
                    </p>
                    <p className="font-mono text-xs font-bold text-slate-900 font-numeric">
                      {pesananAktif.order_id}
                    </p>
                  </div>

                  {pesananAktif.snap_redirect_url && (
                    <a
                      href={pesananAktif.snap_redirect_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl bg-blue-700 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-blue-800"
                    >
                      Lanjutkan ke Halaman Pembayaran Midtrans →
                    </a>
                  )}

                  {pesananAktif.qris_string && (
                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <p className="text-[11px] font-bold text-slate-500">
                        Kode QRIS (Simulasi Lokal):
                      </p>
                      <p className="mt-1 break-all font-mono text-[11px] text-slate-700">
                        {pesananAktif.qris_string}
                      </p>
                    </div>
                  )}

                  {pesananAktif.va_number && (
                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <p className="text-[11px] font-bold text-slate-500">
                        Nomor{" "}
                        {LABEL_METODE_PEMBAYARAN[pesananAktif.metode_pembayaran]}
                        :
                      </p>
                      <p className="mt-0.5 font-mono text-sm font-extrabold text-slate-900 font-numeric">
                        {pesananAktif.va_number}
                      </p>
                    </div>
                  )}

                  {modeSimulasiLokal && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
                      <p className="text-[11px] leading-relaxed text-amber-900">
                        <strong>Mode Pengembangan Lokal:</strong> Konfirmasi uji
                        coba di bawah hanya tersedia saat server berjalan di
                        mode pengembangan (otomatis nonaktif di produksi).
                      </p>
                      <button
                        type="button"
                        disabled={sedangMemproses}
                        onClick={konfirmasiUjiCobaLokal}
                        className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-700 py-2.5 text-xs font-bold text-white hover:bg-emerald-800 disabled:opacity-50"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>
                          {sedangMemproses
                            ? "Memverifikasi..."
                            : "Konfirmasi Pembayaran Uji Coba Lokal"}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              <p className="mt-5 text-center text-[11px] leading-relaxed text-slate-500">
                Transaksi tunduk pada{" "}
                <Link
                  href="/legal/syarat-ketentuan"
                  className="font-semibold text-blue-700 underline"
                >
                  Syarat &amp; Ketentuan
                </Link>{" "}
                serta{" "}
                <Link
                  href="/legal/privasi"
                  className="font-semibold text-blue-700 underline"
                >
                  Kebijakan Privasi &amp; Refund
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default function HalamanPembayaran() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-sm text-slate-500">
          Memuat halaman pembayaran...
        </div>
      }
    >
      <KontenHalamanPembayaran />
    </Suspense>
  );
}
