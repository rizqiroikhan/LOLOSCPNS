"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function KontenHalamanMasuk() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tujuanRedirectRaw = searchParams.get("redirect") || "/dasbor";
  const tujuanRedirect = tujuanRedirectRaw.startsWith("/")
    ? tujuanRedirectRaw
    : "/dasbor";

  const [modeTab, setModeTab] = useState<"masuk" | "daftar">(
    searchParams.get("mode") === "daftar" ? "daftar" : "masuk"
  );
  const [namaLengkap, setNamaLengkap] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [kataSandi, setKataSandi] = useState<string>("");
  const [konfirmasiSandi, setKonfirmasiSandi] = useState<string>("");
  const [sedangMemuat, setSedangMemuat] = useState<boolean>(false);
  const [pesanGalat, setPesanGalat] = useState<string | null>(null);

  async function tanganiSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPesanGalat(null);

    if (modeTab === "daftar") {
      if (kataSandi.length < 8) {
        setPesanGalat("Kata sandi minimal harus terdiri dari 8 karakter.");
        return;
      }
      if (kataSandi !== konfirmasiSandi) {
        setPesanGalat("Konfirmasi kata sandi tidak cocok.");
        return;
      }
    }

    setSedangMemuat(true);
    try {
      const endpoint =
        modeTab === "daftar" ? "/api/auth/register" : "/api/auth/login";
      const payload =
        modeTab === "daftar"
          ? { nama_lengkap: namaLengkap, email, kata_sandi: kataSandi }
          : { email, kata_sandi: kataSandi };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || data.status === "gagal" || data.status === "dibatasi") {
        setPesanGalat(
          data.pesan || "Gagal memproses autentikasi akun peserta."
        );
        return;
      }

      router.push(tujuanRedirect);
      router.refresh();
    } catch {
      setPesanGalat("Terjadi gangguan jaringan saat menghubungi server.");
    } finally {
      setSedangMemuat(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-12">
      <div className="mb-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline"
        >
          ← Kembali ke Beranda LOLOS CPNS
        </Link>
        <h1 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Akun Peserta CASN
        </h1>
        <p className="mt-1.5 text-sm text-slate-600">
          Simpan riwayat skor CAT, kuota Tutor AI, dan akses paket berbayar Anda
          secara aman.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
        <div className="mb-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => {
              setModeTab("masuk");
              setPesanGalat(null);
            }}
            className={`rounded-lg py-2.5 text-xs font-bold transition sm:text-sm ${
              modeTab === "masuk"
                ? "bg-white text-blue-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Masuk Akun
          </button>
          <button
            type="button"
            onClick={() => {
              setModeTab("daftar");
              setPesanGalat(null);
            }}
            className={`rounded-lg py-2.5 text-xs font-bold transition sm:text-sm ${
              modeTab === "daftar"
                ? "bg-white text-blue-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Daftar Akun Baru
          </button>
        </div>

        <form onSubmit={tanganiSubmit} className="space-y-4">
          {modeTab === "daftar" && (
            <div>
              <label
                htmlFor="nama_lengkap"
                className="mb-1.5 block text-xs font-bold text-slate-700"
              >
                Nama Lengkap Peserta
              </label>
              <input
                id="nama_lengkap"
                type="text"
                required
                minLength={3}
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
                placeholder="Contoh: Nadya Pratama"
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-bold text-slate-700"
            >
              Alamat Pos-el (Email)
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@contoh.id"
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="kata_sandi"
              className="mb-1.5 block text-xs font-bold text-slate-700"
            >
              Kata Sandi
            </label>
            <input
              id="kata_sandi"
              type="password"
              required
              minLength={modeTab === "daftar" ? 8 : 1}
              value={kataSandi}
              onChange={(e) => setKataSandi(e.target.value)}
              placeholder={
                modeTab === "daftar"
                  ? "Minimal 8 karakter"
                  : "Masukkan kata sandi Anda"
              }
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {modeTab === "daftar" && (
            <div>
              <label
                htmlFor="konfirmasi_sandi"
                className="mb-1.5 block text-xs font-bold text-slate-700"
              >
                Ulangi Kata Sandi
              </label>
              <input
                id="konfirmasi_sandi"
                type="password"
                required
                minLength={8}
                value={konfirmasiSandi}
                onChange={(e) => setKonfirmasiSandi(e.target.value)}
                placeholder="Ketik ulang kata sandi"
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          )}

          {pesanGalat && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-medium text-rose-800">
              {pesanGalat}
            </div>
          )}

          <button
            type="submit"
            disabled={sedangMemuat}
            className="w-full rounded-xl bg-blue-700 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 disabled:opacity-50"
          >
            {sedangMemuat
              ? "Memproses..."
              : modeTab === "daftar"
                ? "Daftar & Masuk ke Akun →"
                : "Masuk ke Akun Peserta →"}
          </button>
        </form>

        <p className="mt-5 text-center text-[11px] leading-relaxed text-slate-500">
          Dengan melanjutkan, Anda menyetujui{" "}
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
            Kebijakan Privasi
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

export default function HalamanMasukPeserta() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-sm text-slate-500">
          Memuat halaman masuk peserta...
        </div>
      }
    >
      <KontenHalamanMasuk />
    </Suspense>
  );
}
