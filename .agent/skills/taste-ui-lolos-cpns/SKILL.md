---
name: taste-ui-lolos-cpns
description: Panduan arsitektur desain UI/Frontend berbasis Taste Skill (tasteskill.dev, MIT License) yang disesuaikan dengan Kontrak Proyek LOLOS CPNS (100% Bahasa Indonesia baku & kepatuhan Kepmenpan-RB No. 321 Tahun 2024).
---

# Taste Skill UI/FE — Standar Desain LOLOS CPNS

Skill ini mengadaptasi kerangka kerja **Taste Skill (`Leonxlnx/taste-skill` — MIT License)** untuk memastikan seluruh halaman dan komponen **LOLOS CPNS** memiliki kualitas desain kelas produksi (*High-Craft Institutional & EdTech UI*) dan bebas dari pola *template* generik (*anti-AI slop*).

## 1. Kalibrasi Parameter Desain (Section 0: Tuning Dials)

- **`DESIGN_VARIANCE`: 4/10 (*Institutional Editorial & Bento Architecture*)**
  Menggabungkan kredibilitas institusional ujian negara (BKN / Kemenpan-RB) dengan tata letak editorial modern (komposisi *Split Hero*, *Asymmetric Bento Grid*, dan *Surface Layering* yang tegas).
- **`MOTION_INTENSITY`: 4/10 (*Tactile Micro-Interactions*)**
  Transisi halus menggunakan `framer-motion` pada interaksi pemilihan formasi, kuis singkat, dan rapor hasil. **Dilarang** memasang animasi berat/mengganggu pada layar ujian CAT aktif saat *timer* berjalan.
- **`VISUAL_DENSITY`: 6/10 (*Precision Data Density*)**
  Kepadatan informasi presisi untuk matriks 110 nomor soal, indikator Nilai Ambang Batas 7 kategori formasi, dan peta kelemahan 21 sub-topik SKD.

## 2. Aturan Anti-Slop & Art Direction

1. **Tipografi & Disiplin Numerik (`tabular-nums`):**
   - Gunakan pasangan tipografi berkarakter tinggi (`Plus Jakarta Sans` untuk teks/judul dan `JetBrains Mono` untuk elemen numerik/kode).
   - Seluruh angka hitung mundur ujian (100/130 menit), skor (0–550), nomor urut soal (1–110), dan nominal Rupiah **WAJIB** menggunakan `tabular-nums` (`font-variant-numeric: tabular-nums`) agar tidak bergeser saat berubah.
2. **Larangan Pola Template Generik:**
   - Hindari deretan 3 kartu identik tanpa hierarki visual; gunakan *Bento Grid* asimetris atau penekanan fokus yang terukur.
   - Hindari simbol teks mentah (`✓`, `⏱`, `💬`) sebagai pengganti ikon struktural; gunakan komponen ikon SVG presisi dari `lucide-react`.
   - Hindari kontrol `<select>` standar browser pada fitur utama; gunakan *Tactile Pill Selector* atau kartu pemilih interaktif dengan indikator status aktif yang jelas.
3. **Kepatuhan Mutlak Kontrak Proyek (`CONTRACT.md`):**
   - **100% Bahasa Indonesia Baku:** Seluruh label, tombol, lencana, dan pesan UI yang terlihat oleh peserta maupun Admin wajib menggunakan Bahasa Indonesia baku sesuai PUEBI/EYD.
   - **Mesin Penilaian Deterministik:** Perubahan UI tidak boleh mengubah logika perhitungan skor SKD (TWK/TIU/TKP) dan evaluasi 7 kategori formasi Kepmenpan-RB Nomor 321 Tahun 2024.
