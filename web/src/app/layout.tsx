import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://loloscpns.id"),
  title: {
    default: "LOLOS CPNS — Platform Persiapan & Simulasi CAT SKD Berbasis AI",
    template: "%s | LOLOS CPNS",
  },
  description:
    "Platform persiapan dan simulasi Computer Assisted Test (CAT) Seleksi Kompetensi Dasar (SKD) CPNS mengacu 100% pada Keputusan Menteri PANRB Nomor 321 Tahun 2024. Mendukung penilaian akurat 7 kategori formasi, aksesibilitas disabilitas sensorik netra (130 menit), dan Tutor AI Pembimbing.",
  keywords: [
    "Simulasi CAT CPNS",
    "Tryout SKD CPNS",
    "Kepmenpan-RB Nomor 321 Tahun 2024",
    "Nilai Ambang Batas SKD CPNS",
    "Soal TWK TIU TKP CPNS",
    "Tutor AI CPNS",
    "CAT BKN Simulasi",
  ],
  authors: [{ name: "Tim LOLOS CPNS" }],
  creator: "LOLOS CPNS",
  publisher: "LOLOS CPNS",
  icons: {
    icon: "/logo-lolos-cpns.jpg",
    apple: "/logo-lolos-cpns.jpg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://loloscpns.id",
    siteName: "LOLOS CPNS",
    title: "LOLOS CPNS — Taklukkan Nilai Ambang Batas SKD CPNS dengan Presisi & Tutor AI",
    description:
      "Simulasi CAT SKD 110 soal standar BKN, evaluasi akurat 7 formasi Kepmenpan-RB No. 321 Tahun 2024, Analisis Kesenjangan Nilai, serta Tutor AI Pembimbing.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
