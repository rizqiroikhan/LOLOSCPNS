# LOLOS CPNS — Platform Persiapan & Simulasi CAT CPNS Berbasis Rekayasa AI

Repositori monorepo untuk **LOLOS CPNS**, dimulai dari modul inti **Seleksi Kompetensi Dasar (SKD)** yang mengacu penuh pada **Keputusan Menteri PANRB Nomor 321 Tahun 2024**, serta dirancang modular (`stage = 'SKD' | 'SKB' | 'LAINNYA'`) untuk mendukung seluruh tahapan seleksi CPNS.

## Struktur Direktori Monorepo

```text
├── CONTRACT.md / project_contract_lolos_cpns.md  # Kontrak Proyek & Cetak Biru Arsitektur
├── .env.example                                  # Templat Konfigurasi Lingkungan Terpadu
├── supabase/
│   ├── migrations/0001_initial_schema.sql        # Skema PostgreSQL & pgvector
│   └── seed.sql                                  # Data Awal Regulasi SKD Kepmenpan-RB 321/2024
├── ai-service/                                   # Layanan Mikro Python FastAPI & Adaptor AI
│   ├── app/
│   │   ├── ai_provider.py                        # Adaptor Penyedia AI Terpadu (OpenAI-Compatible)
│   │   └── main.py                               # Endpoint FastAPI Berbahasa Indonesia
│   └── requirements.txt
└── web/                                          # Aplikasi Utama Next.js (App Router, TypeScript)
    └── src/
        ├── types/database.ts                     # Tipe TypeScript Tersinkronisasi dengan PostgreSQL
        └── lib/
            ├── ai-client.ts                      # Klien Adaptor AI Terpadu (Sisi Web)
            ├── scoring-engine.ts                 # Mesin Penilaian Deterministik SKD (7 Formasi)
            ├── supabase.ts                       # Klien Koneksi Supabase
            └── __tests__/scoring-engine.test.ts  # Pengujian Unit Mesin Skor SKD
```
