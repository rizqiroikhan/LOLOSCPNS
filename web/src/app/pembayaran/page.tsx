"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  DAFTAR_PAKET_LANGGANAN,
  type MetodePembayaranResmi,
  type TingkatLanggananPeserta,
} from "@/lib/access-control";

interface DataPesananAktif {
  order_id: string;
  id_paket: string;
  kode_tingkat: TingkatLanggananPeserta;
  judul_paket: string;
  nominal_idr: number;
  metode_pembayaran: MetodePembayaranResmi;
  status_transaksi: string;
  kode_qris_simulasi: string;
  nomor_akun_virtual: string;
}

function KontenPembayaranPaket() {
  const searchParams = useSearchParams();
  const paketAwal = searchParams?.get("paket") || "paket-intensif-skd";

  const [idPaketDipilih, setIdPaketDipilih] = useState<string>(
    DAFTAR_PAKET_LANGGANAN[paketAwal] && !DAFTAR_PAKET_LANGGANAN[paketAwal].gratis
      ? paketAwal
      : "paket-intensif-skd"
  );
  const [metodePembayaran, setMetodePembayaran] =
    useState<MetodePembayaranResmi>("qris");
  const [namaPeserta, setNamaPeserta] = useState<string>("Peserta Pejuang NIP");
  const [emailPeserta, setEmailPeserta] = useState<string>(
    "peserta@loloscpns.id"
  );
  const [pesananAktif, setPesananAktif] = useState<DataPesananAktif | null>(
    null
  );
  const [sedangMemproses, setSedangMemproses] = useState<boolean>(false);
  const [pesanStatus, setPesanStatus] = useState<string | null>(null);
  const [tingkatAktifSaatIni, setTingkatAktifSaatIni] =
    useState<TingkatLanggananPeserta>("gratis");

  useEffect(() => {
    try {
      const tersimpan = localStorage.getItem(
        "lolos_cpns_tingkat_langganan"
      ) as TingkatLanggananPeserta | null;
      if (tersimpan) {
        setTingkatAktifSaatIni(tersimpan);
      }
    } catch {
      // Abaikan jika penyimpanan lokal belum tersedia
    }
  }, []);

  const daftarPaketBerbayar = Object.values(DAFTAR_PAKET_LANGGANAN).filter(
    (p) => !p.gratis
  );
  const paketTerpilih =
    DAFTAR_PAKET_LANGGANAN[idPaketDipilih] ||
    DAFTAR_PAKET_LANGGANAN["paket-intensif-skd"];

  async function buatTagihanPembayaran(e: React.FormEvent) {
    e.preventDefault();
    setSedangMemproses(true);
    setPesanStatus(null);

    try {
      const res = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_paket: idPaketDipilih,
          metode_pembayaran: metodePembayaran,
          nama_peserta: namaPeserta,
          email_peserta: emailPeserta,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.status === "gagal") {
        throw new Error(data.pesan || "Gagal membuat tagihan pembayaran.");
      }
      setPesananAktif(data.pesanan);
      setPesanStatus(data.pesan);
    } catch (galat) {
      setPesanStatus(
        galat instanceof Error ? galat.message : "Gagal membuat tagihan."
      );
    } finally {
      setSedangMemproses(false);
    }
  }

  async function simulasikanWebhookLunas() {
    if (!pesananAktif) return;
    setSedangMemproses(true);

    try {
      const res = await fetch("/api/payment/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: pesananAktif.order_id,
          transaction_status: "settlement",
          paket_id: pesananAktif.id_paket,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.status === "gagal") {
        throw new Error(data.pesan || "Gagal memverifikasi pembayaran.");
      }

      const tingkatBaru: TingkatLanggananPeserta =
        data.tingkat_langganan_aktif || pesananAktif.kode_tingkat;

      localStorage.setItem("lolos_cpns_tingkat_langganan", tingkatBaru);
      setTingkatAktifSaatIni(tingkatBaru);
      setPesananAktif({ ...pesananAktif, status_transaksi: "lunas" });
      setPesanStatus(data.pesan);
    } catch (galat) {
      setPesanStatus(
        galat instanceof Error ? galat.message : "Gagal memverifikasi webhook."
      );
    } finally {
      setSedangMemproses(false);
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <Link href="/" className="inline-flex items-center">
              <img
                src="/logo-lolos-cpns.jpg"
                alt="Logo LOLOS CPNS"
                className="h-9 w-auto object-contain mix-blend-multiply"
              />
            </Link>
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
              Pembayaran Resmi (QRIS & Akun Virtual Bank)
            </span>
          </div>
          <h1 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Aktivasi Paket Belajar & Simulasi Penuh LOLOS CPNS
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Status Akun Anda Saat Ini:{" "}
            <strong className="uppercase text-blue-700">
              {tingkatAktifSaatIni.replace("_", " ")}
            </strong>
          </p>
        </div>

        <Link
          href="/"
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
        >
          ← Kembali ke Halaman Utama
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* KOLOM KIRI: FORMULIR PEMILIHAN PAKET & METODE PEMBAYARAN */}
        <section className="lg:col-span-7">
          <form
            onSubmit={buatTagihanPembayaran}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-bold text-slate-900">
              1. Pilih Paket Langganan
            </h2>
            <div className="mt-3 space-y-3">
              {daftarPaketBerbayar.map((paket) => {
                const aktif = idPaketDipilih === paket.id_paket;
                return (
                  <div
                    key={paket.id_paket}
                    onClick={() => setIdPaketDipilih(paket.id_paket)}
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      aktif
                        ? "border-2 border-blue-600 bg-blue-50/50"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">
                        {paket.judul}
                      </span>
                      <span className="text-lg font-extrabold text-blue-700">
                        Rp{paket.harga_idr.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600">
                      {paket.deskripsi}
                    </p>
                  </div>
                );
              })}
            </div>

            <h2 className="mt-6 text-lg font-bold text-slate-900">
              2. Data Peserta & Metode Pembayaran
            </h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={namaPeserta}
                  onChange={(e) => setNamaPeserta(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Alamat Pos-el (Email)
                </label>
                <input
                  type="email"
                  required
                  value={emailPeserta}
                  onChange={(e) => setEmailPeserta(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                Metode Pembayaran (QRIS / Akun Virtual Bank)
              </label>
              <select
                value={metodePembayaran}
                onChange={(e) =>
                  setMetodePembayaran(e.target.value as MetodePembayaranResmi)
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-900"
              >
                <option value="qris">
                  QRIS Instan (GoPay, OVO, DANA, ShopeePay, Mobile Banking)
                </option>
                <option value="va_bca">Akun Virtual BCA</option>
                <option value="va_mandiri">Akun Virtual Bank Mandiri</option>
                <option value="va_bri">Akun Virtual BRI</option>
                <option value="va_bni">Akun Virtual BNI</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={sedangMemproses}
              className="mt-6 w-full rounded-xl bg-blue-700 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-800 disabled:opacity-50"
            >
              {sedangMemproses
                ? "Sedang Membuat Tagihan..."
                : `Buat Tagihan Pembayaran (Rp${paketTerpilih.harga_idr.toLocaleString(
                    "id-ID"
                  )})`}
            </button>
          </form>
        </section>

        {/* KOLOM KANAN: RINCIAN TAGIHAN & SIMULASI WEBHOOK SANDBOX */}
        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Status & Rincian Transaksi
            </h2>

            {pesanStatus && (
              <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs font-semibold leading-relaxed text-emerald-900">
                {pesanStatus}
              </div>
            )}

            {!pesananAktif ? (
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Silakan pilih paket dan klik tombol{" "}
                <strong>Buat Tagihan Pembayaran</strong> di sebelah kiri untuk
                menampilkan kode QRIS atau nomor Akun Virtual.
              </p>
            ) : (
              <div className="mt-4 space-y-3 text-xs sm:text-sm">
                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Nomor Pesanan:</span>
                    <span className="font-mono font-bold text-slate-900">
                      {pesananAktif.order_id}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Paket:</span>
                    <span className="font-bold text-slate-900">
                      {pesananAktif.judul_paket}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Total Tagihan:</span>
                    <span className="font-extrabold text-blue-700">
                      Rp{pesananAktif.nominal_idr.toLocaleString("id-ID")}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Status Transaksi:</span>
                    <span
                      className={`rounded px-2 py-0.5 text-xs font-bold uppercase ${
                        pesananAktif.status_transaksi === "lunas"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {pesananAktif.status_transaksi.replace("_", " ")}
                    </span>
                  </div>
                </div>

                {pesananAktif.status_transaksi !== "lunas" ? (
                  <div className="rounded-xl border border-dashed border-blue-300 bg-blue-50/40 p-4">
                    <p className="font-bold text-slate-900">
                      {pesananAktif.metode_pembayaran === "qris"
                        ? "Kode String QRIS (Mode Pengujian):"
                        : "Nomor Akun Virtual Bank:"}
                    </p>
                    <p className="mt-1 break-all rounded bg-white p-2 font-mono text-xs text-slate-700">
                      {pesananAktif.metode_pembayaran === "qris"
                        ? pesananAktif.kode_qris_simulasi
                        : pesananAktif.nomor_akun_virtual}
                    </p>

                    <button
                      type="button"
                      disabled={sedangMemproses}
                      onClick={simulasikanWebhookLunas}
                      className="mt-4 w-full rounded-xl bg-emerald-600 py-2.5 text-xs font-extrabold text-white shadow hover:bg-emerald-700 sm:text-sm"
                    >
                      ✓ Simulasikan Pembayaran Lunas (Webhook Sandbox)
                    </button>
                  </div>
                ) : (
                  <div className="pt-2">
                    <Link
                      href={`/simulasi/skd/${pesananAktif.id_paket}`}
                      className="block w-full rounded-xl bg-slate-900 py-3 text-center text-sm font-bold text-white shadow hover:bg-slate-800"
                    >
                      Mulai Kerjakan {pesananAktif.judul_paket} →
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}

export default function HalamanPembayaranPaket() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-5xl px-6 py-12 text-center text-sm text-slate-600">
          Memuat halaman pembayaran LOLOS CPNS...
        </div>
      }
    >
      <KontenPembayaranPaket />
    </Suspense>
  );
}
