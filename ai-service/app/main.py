"""
Layanan Mikro AI & Ekstraksi Dokumen — LOLOS CPNS.
Seluruh tanggapan API kepada pengguna maupun Admin menggunakan Bahasa Indonesia yang baik dan benar.
"""

import os
from typing import Any, Dict, List, Optional

from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from app.ai_provider import UnifiedAIProvider, ai_adapter
from app.ingestion import (
    proses_ekstraksi_regulasi,
    proses_ekstraksi_soal_multimodal,
    validasi_dan_normalisasi_butir_soal,
)

app = FastAPI(
    title="Layanan AI LOLOS CPNS",
    description=(
        "Layanan mikro berbasis FastAPI untuk Adaptor AI Terpadu, Ekstraksi Regulasi & Soal Multimodal, "
        "serta Tutor AI Sokratik mengacu pada Kepmenpan-RB Nomor 321 Tahun 2024."
    ),
    version="1.2.0",
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


class PilihanJawabanModel(BaseModel):
    kunci: str
    teks: str
    skor: int


class PermintaanSetujuiSoal(BaseModel):
    stage: str = "SKD"
    category: str
    sub_topic: str
    difficulty: str = "sedang"
    question_text: str
    image_url: Optional[str] = None
    options: List[PilihanJawabanModel]
    explanation: str
    source_reference: Optional[str] = None
    is_paraphrased: bool = True


@app.get("/")
async def beranda_layanan():
    return {
        "status": "aktif",
        "layanan": "Layanan AI & Ekstraksi Multimodal LOLOS CPNS",
        "versi": "1.2.0",
        "pesan": "Layanan AI berjalan normal dan siap melayani permintaan.",
        "konfigurasi_ai": ai_adapter.info_konfigurasi_publik(),
    }


@app.get("/kesehatan")
@app.get("/health")
async def pemeriksaan_kesehatan():
    return {
        "status": "sehat",
        "pesan": "Adaptor AI Terpadu dan layanan ekstraksi FastAPI siap digunakan.",
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


@app.post("/ingest/regulation")
@app.post("/ekstraksi/regulasi")
async def endpoint_ekstraksi_regulasi(
    berkas: UploadFile = File(..., description="Berkas PDF aturan resmi seleksi CPNS"),
    simpan_ke_db: bool = Form(default=True),
):
    """
    Mengekstrak PDF aturan seleksi CPNS menjadi JSON terstruktur ke tabel `regulations`
    menggunakan `AI_CHAT_MODEL` di `.env`.
    """
    try:
        isi_bytes = await berkas.read()
        hasil = await proses_ekstraksi_regulasi(
            data_berkas=isi_bytes,
            nama_berkas=berkas.filename or "regulasi_cpns.pdf",
            simpan_ke_db=simpan_ke_db,
        )
        return hasil
    except ValueError as galat_validasi:
        raise HTTPException(
            status_code=400,
            detail={"status": "gagal", "pesan": str(galat_validasi)},
        ) from galat_validasi
    except Exception as galat:
        raise HTTPException(
            status_code=500,
            detail={
                "status": "gagal",
                "pesan": f"Terjadi kendala saat mengekstrak dokumen regulasi: {str(galat)}",
            },
        ) from galat


@app.post("/ingest/questions")
@app.post("/ekstraksi/soal")
async def endpoint_ekstraksi_soal(
    berkas: UploadFile = File(
        ..., description="Berkas PDF atau pindaian gambar (PNG/JPG) halaman soal SKD"
    ),
    halaman_pdf: int = Form(default=0),
):
    """
    Memproses PDF atau pindaian buku cetak soal SKD menggunakan `AI_VISION_MODEL` dan `AI_EMBEDDING_MODEL`:
    1. Ekstrak soal, pilihan A-E, dan kunci/bobot skor.
    2. Klasifikasi kisi-kisi resmi Kepmenpan-RB Nomor 321 Tahun 2024.
    3. Potong gambar figural (jika ada) dan unggah ke Supabase Storage.
    4. Parafrase otomatis + penyusunan pembahasan mendalam berbahasa Indonesia baku.
    5. Buat vektor embedding untuk RAG (dengan fallback otomatis ke tsvector Bahasa Indonesia).
    """
    try:
        isi_bytes = await berkas.read()
        hasil = await proses_ekstraksi_soal_multimodal(
            data_berkas=isi_bytes,
            nama_berkas=berkas.filename or "pindaian_soal.png",
            tipe_mime=berkas.content_type or "image/png",
            halaman_pdf=halaman_pdf,
        )
        return hasil
    except ValueError as galat_validasi:
        raise HTTPException(
            status_code=400,
            detail={"status": "gagal", "pesan": str(galat_validasi)},
        ) from galat_validasi
    except Exception as galat:
        raise HTTPException(
            status_code=500,
            detail={
                "status": "gagal",
                "pesan": f"Terjadi kendala saat memproses pindaian soal: {str(galat)}",
            },
        ) from galat


@app.post("/ingest/questions/approve")
@app.post("/ekstraksi/soal/setujui")
async def endpoint_setujui_soal(permintaan: PermintaanSetujuiSoal):
    """
    Menyimpan butir soal yang telah ditinjau dan disetujui Admin ke tabel `questions`
    dengan `status = 'disetujui'`.
    """
    butir_normal = validasi_dan_normalisasi_butir_soal(permintaan.model_dump())
    butir_normal["status"] = "disetujui"

    adapter = UnifiedAIProvider()
    teks_rag = (
        f"{butir_normal['category']} - {butir_normal['sub_topic']}: "
        f"{butir_normal['question_text']} Pembahasan: {butir_normal['explanation']}"
    )
    vektor = await adapter.buat_embedding(teks_rag)

    data_simpan: Dict[str, Any] = {
        "stage": butir_normal["stage"],
        "category": butir_normal["category"],
        "sub_topic": butir_normal["sub_topic"],
        "difficulty": butir_normal["difficulty"],
        "question_text": butir_normal["question_text"],
        "image_url": butir_normal.get("image_url"),
        "options": butir_normal["options"],
        "explanation": butir_normal["explanation"],
        "source_reference": butir_normal["source_reference"],
        "is_paraphrased": True,
        "status": "disetujui",
        "embedding": vektor,
    }

    tersimpan_di_db = False
    supabase_url = os.getenv("SUPABASE_URL") or os.getenv(
        "NEXT_PUBLIC_SUPABASE_URL"
    )
    supabase_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
    if (
        supabase_url
        and supabase_key
        and "proyek-anda.supabase.co" not in supabase_url
    ):
        try:
            from supabase import create_client

            klien = create_client(supabase_url, supabase_key)
            respons_db = klien.table("questions").insert(data_simpan).execute()
            if respons_db.data:
                data_simpan = respons_db.data[0]
                tersimpan_di_db = True
        except Exception:
            tersimpan_di_db = False

    return {
        "status": "berhasil",
        "pesan": "Soal berhasil disetujui dan dimasukkan ke Bank Soal aktif (status = 'disetujui').",
        "tersimpan_di_basis_data": tersimpan_di_db,
        "metode_pencarian_rag": (
            "pgvector_768" if vektor else "tsvector_bahasa_indonesia"
        ),
        "soal": data_simpan,
    }
