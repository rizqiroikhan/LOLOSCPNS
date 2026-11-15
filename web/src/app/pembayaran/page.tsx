"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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

      if (!res.ok || data.status === "gagal" || data.status === "tidak_tersedia") {
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
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <Link
            href="/"
            className="text-xs font-bold text-blue-700 hover:underline"
          >
            ← Kembali ke Beranda
          </Link>
          <h1 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Aktivasi Paket Belajar &amp; Pembayaran Resmi
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Pembayaran terintegrasi langsung dengan akun peserta dan diverifikasi
            otomatis oleh peladen gerbang pembayaran terenkripsi.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-right shadow-sm">
          <p className="text-[11px] font-bold uppercase text-slate-500">
            Status Akun Anda
          </p>
          <p className="text-sm font-extrabold text-blue-700">
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
        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <h2 className="text-base font-extrabold text-amber-950">
            Masuk Akun Peserta Sebelum Melanjutkan Pembayaran
          </h2>
          <p className="mt-1.5 text-sm text-amber-900">
            Untuk menjamin paket berbayar tersimpan permanen dan dapat dibuka di
            perangkat mana pun, silakan masuk atau daftar akun peserta terlebih
            dahulu.
          </p>
          <div className="mt-4">
            <Link
              href={`/masuk?redirect=${encodeURIComponent(
                `/pembayaran?paket=${idPaketDipilih}`
              )}`}
              className="inline-block rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-800"
            >
              Masuk / Daftar Akun Peserta →
            </Link>
          </div>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-12">
        {/* KOLOM KIRI: PILIH PAKET & METODE */}
        <section className="space-y-6 lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              1. Pilih Paket Belajar CPNS
            </h2>
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
                    className={`w-full rounded-xl border p-4 text-left transition ${
                      aktif
                        ? "border-blue-600 bg-blue-50 ring-2 ring-blue-100"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-extrabold text-slate-900">
                          {paket.judul}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                          {paket.deskripsi}
                        </p>
                      </div>
                      <span className="shrink-0 text-base font-extrabold text-blue-700">
                        Rp{paket.harga_idr.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              2. Pilih Metode Pembayaran Resmi
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                {
                  kode: "qris" as const,
                  nama: "QRIS Instan",
                  info: "GoPay, OVO, DANA, ShopeePay, Mobile Banking",
                },
                {
                  kode: "va_bca" as const,
                  nama: "Virtual Account BCA",
                  info: "Verifikasi otomatis via m-BCA / KlikBCA",
                },
                {
                  kode: "va_mandiri" as const,
                  nama: "Virtual Account Mandiri",
                  info: "Livin' by Mandiri & ATM Bersama",
                },
                {
                  kode: "va_bni" as const,
                  nama: "Virtual Account BNI",
                  info: "BNI Mobile Banking & ATM",
                },
              ].map((m) => (
                <button
                  key={m.kode}
                  type="button"
                  onClick={() => setMetodePembayaran(m.kode)}
                  className={`rounded-xl border p-3.5 text-left transition ${
                    metodePembayaran === m.kode
                      ? "border-blue-600 bg-blue-50 text-blue-950"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <p className="text-xs font-extrabold">{m.nama}</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">{m.info}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* KOLOM KANAN: RINGKASAN PESANAN & KONFIRMASI */}
        <section className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
            <h2 className="text-base font-bold text-slate-900">
              Ringkasan Pesanan
            </h2>
            <div className="mt-4 space-y-2.5 border-b border-slate-200 pb-4 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Paket Pilihan</span>
                <span className="font-bold text-slate-900">
                  {paketTerpilih.judul}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Akun Pembeli</span>
                <span className="font-semibold text-slate-800">
                  {profilAktif?.email || "Belum masuk"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Kuota Tutor AI</span>
                <span className="font-semibold text-slate-800">
                  {paketTerpilih.kuota_tutor_harian >= 100
                    ? "Tanpa Batas Harian"
                    : `${paketTerpilih.kuota_tutor_harian} / hari`}
                </span>
              </div>
              <div className="flex justify-between pt-2 text-base font-extrabold text-slate-900">
                <span>Total Pembayaran</span>
                <span className="text-blue-700">
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
                className="mt-6 w-full rounded-xl bg-blue-700 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sedangMemproses
                  ? "Membuat Tagihan..."
                  : profilAktif
                    ? `Buat Pesanan (${metodePembayaran.toUpperCase()}) →`
                    : "Masuk Akun Terlebih Dahulu"}
              </button>
            ) : pesananAktif.status_transaksi === "lunas" ? (
              <div className="mt-6 space-y-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center">
                <p className="text-sm font-extrabold text-emerald-900">
                  Pembayaran Lunas &amp; Akses Aktif!
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
              <div className="mt-6 space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <p className="text-xs font-bold text-slate-600">
                    ID Pesanan Resmi:
                  </p>
                  <p className="font-mono text-xs font-bold text-slate-900">
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

                {pesananAktif.va_number && (
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-bold text-slate-500">
                      Nomor Virtual Account ({pesananAktif.metode_pembayaran}):
                    </p>
                    <p className="mt-0.5 font-mono text-sm font-extrabold text-slate-900">
                      {pesananAktif.va_number}
                    </p>
                  </div>
                )}

                {modeSimulasiLokal && (
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                    <p className="text-[11px] leading-relaxed text-amber-900">
                      <strong>Mode Pengembangan Lokal:</strong> Konfirmasi uji
                      coba di bawah hanya tersedia saat server berjalan di mode
                      pengembangan (otomatis nonaktif di produksi).
                    </p>
                    <button
                      type="button"
                      disabled={sedangMemproses}
                      onClick={konfirmasiUjiCobaLokal}
                      className="mt-2.5 w-full rounded-lg bg-emerald-700 py-2.5 text-xs font-bold text-white hover:bg-emerald-800 disabled:opacity-50"
                    >
                      {sedangMemproses
                        ? "Memverifikasi..."
                        : "Konfirmasi Pembayaran Uji Coba Lokal ✓"}
                    </button>
                  </div>
                )}
              </div>
            )}

            <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-500">
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
