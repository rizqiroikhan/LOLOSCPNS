"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Lock,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";

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
    <div className="min-h-screen bg-slate-50 bg-grid-architectural">
      <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4 py-12 sm:px-6">
        <div className="mb-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-blue-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Kembali ke Beranda LOLOS CPNS</span>
          </Link>
          <div className="mt-5 flex justify-center">
            <img
              src="/logo-lolos-cpns.jpg"
              alt="Logo LOLOS CPNS"
              className="h-12 w-auto object-contain mix-blend-multiply"
            />
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
            Akun Peserta CASN
          </h1>
          <p className="mt-1.5 text-sm text-slate-600">
            Simpan riwayat skor CAT, kuota Tutor AI, dan akses paket berbayar
            Anda secara aman.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile-lg sm:p-8">
          <div className="mb-6 grid grid-cols-2 rounded-2xl bg-slate-100 p-1.5">
            <button
              type="button"
              onClick={() => {
                setModeTab("masuk");
                setPesanGalat(null);
              }}
              className={`rounded-xl py-2.5 text-xs font-extrabold transition sm:text-sm ${
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
              className={`rounded-xl py-2.5 text-xs font-extrabold transition sm:text-sm ${
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
                  className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-slate-700"
                >
                  <User className="h-3.5 w-3.5 text-slate-400" />
                  <span>Nama Lengkap Peserta</span>
                </label>
                <input
                  id="nama_lengkap"
                  type="text"
                  required
                  minLength={3}
                  value={namaLengkap}
                  onChange={(e) => setNamaLengkap(e.target.value)}
                  placeholder="Contoh: Nadya Pratama"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-slate-700"
              >
                <Mail className="h-3.5 w-3.5 text-slate-400" />
                <span>Alamat Pos-el (Email)</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@contoh.id"
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="kata_sandi"
                className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-slate-700"
              >
                <Lock className="h-3.5 w-3.5 text-slate-400" />
                <span>Kata Sandi</span>
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
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {modeTab === "daftar" && (
              <div>
                <label
                  htmlFor="konfirmasi_sandi"
                  className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-slate-700"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                  <span>Ulangi Kata Sandi</span>
                </label>
                <input
                  id="konfirmasi_sandi"
                  type="password"
                  required
                  minLength={8}
                  value={konfirmasiSandi}
                  onChange={(e) => setKonfirmasiSandi(e.target.value)}
                  placeholder="Ketik ulang kata sandi"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
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
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 py-3.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-blue-800 disabled:opacity-50"
            >
              <span>
                {sedangMemuat
                  ? "Memproses..."
                  : modeTab === "daftar"
                    ? "Daftar & Masuk ke Akun"
                    : "Masuk ke Akun Peserta"}
              </span>
              {!sedangMemuat && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>

          <p className="mt-6 text-center text-[11px] leading-relaxed text-slate-500">
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
    </div>
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
