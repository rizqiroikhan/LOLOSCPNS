"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

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

export default function NavbarPeserta() {
  const [sesi, setSesi] = useState<SesiPesertaRingkas | null>(null);

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

  const namaPendek =
    sesi?.profil?.nama_lengkap?.split(" ")[0] || "Peserta";
  const labelTier = sesi?.profil
    ? LABEL_TINGKAT[sesi.profil.tingkat_langganan] || "Gratis"
    : "";

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
      {sesi?.terautentikasi && sesi.profil ? (
        <Link
          href="/dasbor"
          className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-800 shadow-sm transition hover:bg-emerald-100 sm:text-sm"
        >
          <span>{namaPendek}</span>
          <span className="rounded-md bg-emerald-700 px-1.5 py-0.5 text-[10px] font-bold text-white">
            {labelTier}
          </span>
        </Link>
      ) : (
        <Link
          href="/masuk"
          className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:text-sm"
        >
          Masuk / Daftar
        </Link>
      )}
      <Link
        href="/admin"
        className="rounded-xl border border-indigo-200 bg-indigo-50 px-3.5 py-2 text-xs font-bold text-indigo-800 shadow-sm transition hover:bg-indigo-100 sm:text-sm"
      >
        Menu Admin
      </Link>
      <Link
        href="/simulasi/skd/paket-perdana-gratis"
        className="rounded-xl bg-blue-700 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-blue-800 sm:text-sm"
      >
        Mulai Simulasi CAT SKD →
      </Link>
    </div>
  );
}
