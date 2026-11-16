"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  LayoutDashboard,
  LogIn,
  Menu,
  ShieldCheck,
  Sparkles,
  UserCheck,
  X,
} from "lucide-react";

interface SesiPesertaRingkas {
  terautentikasi: boolean;
  profil: {
    id: string;
    nama_lengkap: string;
    tingkat_langganan: "gratis" | "intensif_skd" | "terpadu_cpns";
  } | null;
}

const LABEL_TINGKAT: Record<string, string> = {
  gratis: "Gratis",
  intensif_skd: "Intensif SKD",
  terpadu_cpns: "Terpadu CPNS",
};

export default function NavbarPeserta({
  inline = false,
}: {
  inline?: boolean;
}) {
  const [sesi, setSesi] = useState<SesiPesertaRingkas | null>(null);
  const [menuSelulerTerbuka, setMenuSelulerTerbuka] = useState(false);

  useEffect(() => {
    let aktif = true;
    fetch("/api/auth/session", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (aktif && typeof data?.terautentikasi === "boolean") {
          setSesi(data);
        }
      })
      .catch(() => {
        // Abaikan kegagalan jaringan latar
      });
    return () => {
      aktif = false;
    };
  }, []);

  const namaPendek = sesi?.profil?.nama_lengkap?.split(" ")[0] || "Peserta";
  const labelTier = sesi?.profil
    ? LABEL_TINGKAT[sesi.profil.tingkat_langganan] || "Gratis"
    : "";

  const gugusTombolAksi = (
    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
      {sesi?.terautentikasi && sesi.profil ? (
        <Link
          href="/dasbor"
          className="inline-flex items-center gap-2 rounded-xl border border-emerald-200/90 bg-emerald-50/90 px-3.5 py-2 text-xs font-bold text-emerald-900 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-100 sm:text-sm"
        >
          <UserCheck className="h-3.5 w-3.5 text-emerald-700" />
          <span>{namaPendek}</span>
          <span className="rounded-md bg-emerald-700 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            {labelTier}
          </span>
        </Link>
      ) : (
        <Link
          href="/masuk"
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 sm:text-sm"
        >
          <LogIn className="h-3.5 w-3.5 text-slate-500" />
          <span>Masuk / Daftar</span>
        </Link>
      )}
      <Link
        href="/admin"
        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100/80 px-3 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-200/70 sm:text-sm"
      >
        <ShieldCheck className="h-3.5 w-3.5 text-slate-600" />
        <span>Menu Admin</span>
      </Link>
      <Link
        href="/simulasi/skd/paket-perdana-gratis"
        className="inline-flex items-center gap-1.5 rounded-xl bg-blue-700 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-blue-800 active:scale-[0.99] sm:text-sm"
      >
        <span>Mulai Simulasi CAT SKD</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );

  if (inline) {
    return gugusTombolAksi;
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo-lolos-cpns.jpg"
              alt="Logo LOLOS CPNS"
              className="h-9 w-auto object-contain mix-blend-multiply sm:h-10"
            />
          </Link>
          <span className="hidden items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 px-2.5 py-0.5 text-[11px] font-bold text-blue-800 lg:inline-flex">
            <Sparkles className="h-3 w-3 text-blue-600" />
            Kepmenpan-RB No. 321 Tahun 2024
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-xs font-semibold text-slate-600 md:flex">
          <Link href="/" className="transition hover:text-blue-700">
            Beranda
          </Link>
          <Link href="/dasbor" className="transition hover:text-blue-700">
            Dasbor Peserta
          </Link>
          <Link href="/simulasi/skb" className="transition hover:text-blue-700">
            Modul SKB
          </Link>
          <Link href="/pembayaran" className="transition hover:text-blue-700">
            Aktivasi Paket
          </Link>
        </nav>

        <div className="hidden sm:block">{gugusTombolAksi}</div>

        <button
          type="button"
          aria-label="Buka navigasi"
          onClick={() => setMenuSelulerTerbuka((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 sm:hidden"
        >
          {menuSelulerTerbuka ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {menuSelulerTerbuka && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 sm:hidden">
          <div className="mb-3 flex flex-col gap-2 text-xs font-semibold text-slate-700">
            <Link
              href="/"
              onClick={() => setMenuSelulerTerbuka(false)}
              className="rounded-lg px-2 py-1.5 hover:bg-slate-50"
            >
              Beranda Utama
            </Link>
            <Link
              href="/dasbor"
              onClick={() => setMenuSelulerTerbuka(false)}
              className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-50"
            >
              <LayoutDashboard className="h-3.5 w-3.5 text-blue-700" />
              Dasbor Peserta
            </Link>
            <Link
              href="/pembayaran"
              onClick={() => setMenuSelulerTerbuka(false)}
              className="rounded-lg px-2 py-1.5 hover:bg-slate-50"
            >
              Aktivasi Paket Belajar
            </Link>
          </div>
          {gugusTombolAksi}
        </div>
      )}
    </header>
  );
}
