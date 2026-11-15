"""
Layanan Mikro AI & Ekstraksi Dokumen — LOLOS CPNS.
Seluruh tanggapan API kepada pengguna maupun Admin menggunakan Bahasa Indonesia yang baik dan benar.
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from app.ai_provider import UnifiedAIProvider, ai_adapter

app = FastAPI(
    title="Layanan AI LOLOS CPNS",
    description=(
        "Layanan mikro berbasis FastAPI untuk Adaptor AI Terpadu, Ekstraksi Regulasi & Soal Multimodal, "
        "serta Tutor AI Sokratik mengacu pada Kepmenpan-RB Nomor 321 Tahun 2024."
    ),
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PermintaanUjiAI(BaseModel):
    pesan: str = Field(
        default="Jelaskan secara singkat 3 komponen sub-tes pada SKD CPNS sesuai Kepmenpan-RB Nomor 321 Tahun 2024.",
        description="Pesan pengujian untuk dikirimkan ke penyedia AI aktif.",
    )


@app.get("/")
async def beranda_layanan():
    return {
        "status": "aktif",
        "layanan": "Layanan AI & Ekstraksi Multimodal LOLOS CPNS",
        "versi": "1.0.0",
        "pesan": "Layanan AI berjalan normal dan siap melayani permintaan.",
        "konfigurasi_ai": ai_adapter.info_konfigurasi_publik(),
    }


@app.get("/kesehatan")
@app.get("/health")
async def pemeriksaan_kesehatan():
    return {
        "status": "sehat",
        "pesan": "Adaptor AI Terpadu dan layanan FastAPI siap digunakan.",
        "konfigurasi_ai": ai_adapter.info_konfigurasi_publik(),
    }


@app.post("/ai/uji-koneksi")
async def uji_koneksi_ai(permintaan: PermintaanUjiAI):
    adapter = UnifiedAIProvider()
    try:
        jawaban = await adapter.hasilkan_teks(permintaan.pesan)
        return {
            "status": "berhasil",
            "pesan": "Koneksi ke penyedia AI berhasil diverifikasi.",
            "penyedia": adapter.konfigurasi.provider,
            "model": adapter.konfigurasi.chat_model,
            "respons_ai": jawaban,
        }
    except ValueError as galat_konfigurasi:
        raise HTTPException(
            status_code=400,
            detail={
                "status": "gagal",
                "pesan": str(galat_konfigurasi),
            },
        ) from galat_konfigurasi
    except Exception as galat_umum:
        raise HTTPException(
            status_code=502,
            detail={
                "status": "gagal",
                "pesan": f"Gagal menghubungi penyedia AI: {str(galat_umum)}",
            },
        ) from galat_umum
