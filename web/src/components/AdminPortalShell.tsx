"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AdminAccountManager, {
  type AkunAdminPublikClient,
} from "@/components/AdminAccountManager";

export type TabMenuAdmin = "kurasi" | "akun";

export default function AdminPortalShell({
  tabAwal = "kurasi",
  children,
}: {
  tabAwal?: TabMenuAdmin;
  children: React.ReactNode;
}) {
  const [tabAktif, setTabAktif] = useState<TabMenuAdmin>(tabAwal);
  const [sedangMemeriksaSesi, setSedangMemeriksaSesi] = useState<boolean>(true);
  const [sesiAdmin, setSesiAdmin] = useState<AkunAdminPublikClient | null>(
    null
  );

  // State form login
  const [username, setUsername] = useState<string>("");
  const [kataSandi, setKataSandi] = useState<string>("");
  const [tampilkanKataSandi, setTampilkanKataSandi] =
    useState<boolean>(false);
  const [sedangMasuk, setSedangMasuk] = useState<boolean>(false);
  const [pesanLoginGalat, setPesanLoginGalat] = useState<string | null>(null);

  async function periksaSesiSekarang() {
    setSedangMemeriksaSesi(true);
    try {
      const res = await fetch("/api/admin/auth/session", { cache: "no-store" });
      const data = await res.json();
      if (data.terautentikasi && data.sesi) {
        setSesiAdmin(data.sesi);
      } else {
        setSesiAdmin(null);
      }
    } catch {
      setSesiAdmin(null);
    } finally {
      setSedangMemeriksaSesi(false);
    }
  }

  useEffect(() => {
    periksaSesiSekarang();
  }, []);

  async function tanganiMasukAdmin(e: React.FormEvent) {
    e.preventDefault();
    setSedangMasuk(true);
    setPesanLoginGalat(null);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          kata_sandi: kataSandi,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.status === "gagal") {
        throw new Error(
          data.pesan || "Username atau kata sandi admin tidak sesuai."
        );
      }

      setSesiAdmin(data.sesi);
      setKataSandi("");
    } catch (galat) {
      setPesanLoginGalat(
        galat instanceof Error ? galat.message : "Gagal masuk ke Menu Admin."
      );
    } finally {
      setSedangMasuk(false);
    }
  }

  async function tanganiKeluarAdmin() {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
    } finally {
      setSesiAdmin(null);
      setUsername("");
      setKataSandi("");
    }
  }

  // ============================================================================
  // LAYAR PEMERIKSAAN SESI
  // ============================================================================
  if (sedangMemeriksaSesi) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="rounded-2xl border border-slate-200 bg-white px-8 py-6 text-center shadow-sm">
          <p className="text-sm font-semibold text-slate-700">
            Memeriksa sesi masuk Menu Admin...
          </p>
        </div>
      </div>
    );
  }

  // ============================================================================
  // LAYAR LOGIN ADMIN (USERNAME & KATA SANDI)
  // ============================================================================
  if (!sesiAdmin) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
          <div className="mb-6 flex flex-col items-center text-center">
            <img
              src="/logo-lolos-cpns.jpg"
              alt="Logo LOLOS CPNS"
              className="h-12 w-auto object-contain mix-blend-multiply"
            />
            <span className="mt-3 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
              Akses Terbatas — Menu Admin
            </span>
            <h1 className="mt-3 text-2xl font-extrabold text-slate-900">
              Masuk Menu Admin
            </h1>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Masukkan username dan kata sandi administrator untuk mengakses
              kurasi soal serta pengelolaan akun admin.
            </p>
          </div>

          {pesanLoginGalat && (
            <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-semibold text-rose-800 sm:text-sm">
              ⚠ {pesanLoginGalat}
            </div>
          )}

          <form onSubmit={tanganiMasukAdmin} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-700">
                Username Admin
              </label>
              <input
                type="text"
                required
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username admin"
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">
                  Kata Sandi
                </label>
                <button
                  type="button"
                  onClick={() => setTampilkanKataSandi((s) => !s)}
                  className="text-xs font-semibold text-blue-700 hover:underline"
                >
                  {tampilkanKataSandi ? "Sembunyikan" : "Tampilkan"}
                </button>
              </div>
              <input
                type={tampilkanKataSandi ? "text" : "password"}
                required
                autoComplete="current-password"
                value={kataSandi}
                onChange={(e) => setKataSandi(e.target.value)}
                placeholder="Masukkan kata sandi"
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={sedangMasuk}
              className="w-full rounded-xl bg-blue-700 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 disabled:opacity-50"
            >
              {sedangMasuk ? "Memverifikasi Akun..." : "Masuk ke Menu Admin →"}
            </button>
          </form>

          <div className="mt-6 border-t border-slate-100 pt-4 text-center">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-600 hover:text-blue-700"
            >
              ← Kembali ke Halaman Utama
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ============================================================================
  // SHELL MENU ADMIN TERAUTENTIKASI (NAVIGASI TAB KURASI & KELOLA AKUN ADMIN)
  // ============================================================================
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3.5">
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo-lolos-cpns.jpg"
                alt="Logo LOLOS CPNS"
                className="h-9 w-auto object-contain mix-blend-multiply"
              />
            </Link>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
              Menu Admin
            </span>
            <span className="text-xs font-semibold text-slate-600">
              Masuk sebagai:{" "}
              <strong className="font-mono text-slate-900">
                {sesiAdmin.username}
              </strong>{" "}
              ({sesiAdmin.peran === "admin_utama" ? "Admin Utama" : "Admin"})
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setTabAktif("kurasi")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition sm:text-sm ${
                tabAktif === "kurasi"
                  ? "bg-blue-700 text-white shadow-sm"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              Kurasi Regulasi & Bank Soal
            </button>

            <button
              type="button"
              onClick={() => setTabAktif("akun")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition sm:text-sm ${
                tabAktif === "akun"
                  ? "bg-indigo-700 text-white shadow-sm"
                  : "border border-indigo-200 bg-indigo-50 text-indigo-800 hover:bg-indigo-100"
              }`}
            >
              Kelola Akun Admin
            </button>

            <Link
              href="/"
              className="rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 sm:text-sm"
            >
              Beranda
            </Link>

            <button
              type="button"
              onClick={tanganiKeluarAdmin}
              className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2 text-xs font-bold text-rose-700 hover:bg-rose-100 sm:text-sm"
            >
              Keluar
            </button>
          </div>
        </div>
      </header>

      {tabAktif === "kurasi" ? (
        children
      ) : (
        <main className="mx-auto max-w-7xl px-6 py-8">
          <AdminAccountManager
            idAdminAktif={sesiAdmin.id}
            peranAdminAktif={sesiAdmin.peran}
          />
        </main>
      )}
    </div>
  );
}
