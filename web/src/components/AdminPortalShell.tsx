"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [tabAktif, setTabAktif] = useState<TabMenuAdmin>(tabAwal);
  const [sedangMemeriksaSesi, setSedangMemeriksaSesi] = useState<boolean>(true);
  const [sesiAdmin, setSesiAdmin] = useState<AkunAdminPublikClient | null>(
    null
  );

  async function periksaSesiSekarang() {
    setSedangMemeriksaSesi(true);
    try {
      const res = await fetch("/api/admin/auth/session", { cache: "no-store" });
      const data = await res.json();
      if (res.ok && data.terautentikasi && data.sesi) {
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

  useEffect(() => {
    if (!sedangMemeriksaSesi && !sesiAdmin) {
      router.replace("/");
    }
  }, [sedangMemeriksaSesi, sesiAdmin, router]);

  async function tanganiKeluarAdmin() {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
    } finally {
      setSesiAdmin(null);
      window.location.assign("/");
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
            Memverifikasi akses administrator...
          </p>
        </div>
      </div>
    );
  }

  // ============================================================================
  // PENGALIHAN BILA SESI SUDAH BERAKHIR (TIDAK MENAMPILKAN FORM LOGIN TERBUKA)
  // ============================================================================
  if (!sesiAdmin) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-md">
          <p className="text-sm font-semibold text-slate-800">
            Sesi administrator telah berakhir atau belum terautentikasi.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Mengalihkan kembali ke beranda...
          </p>
          <Link
            href="/"
            className="mt-5 inline-block rounded-xl bg-blue-700 px-4 py-2 text-xs font-bold text-white hover:bg-blue-800"
          >
            Kembali ke Beranda
          </Link>
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
