import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOLOS CPNS — Platform Persiapan & Simulasi CAT SKD Berbasis AI",
  description:
    "Platform persiapan dan simulasi Computer Assisted Test (CAT) Seleksi Kompetensi Dasar (SKD) CPNS mengacu pada Keputusan Menteri PANRB Nomor 321 Tahun 2024.",
};

export default function TataLetakUtama({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
