"""Pengujian unit untuk Adaptor Penyedia AI Terpadu dan Pipeline Ekstraksi (`/ai-service/app/`)."""

import os
from app.ai_provider import KonfigurasiAI, UnifiedAIProvider
from app.ingestion import SUB_TOPIK_RESMI_SKD, validasi_dan_normalisasi_butir_soal


def test_konfigurasi_ai_dari_env_default():
    os.environ["AI_PROVIDER"] = "gemini_free"
    os.environ["AI_BASE_URL"] = "https://generativelanguage.googleapis.com/v1beta/openai/"
    os.environ["AI_CHAT_MODEL"] = "gemini-2.5-flash"
    os.environ["AI_VISION_MODEL"] = "gemini-2.5-flash"

    konf = KonfigurasiAI.dari_env()
    assert konf.provider == "gemini_free"
    assert konf.chat_model == "gemini-2.5-flash"
    assert konf.vision_model == "gemini-2.5-flash"


def test_urai_json_aman_membersihkan_blok_markdown():
    teks_markdown = '```json\n{"status": "disetujui", "skor": 5}\n```'
    hasil = UnifiedAIProvider._urai_json_aman(teks_markdown)
    assert hasil["status"] == "disetujui"
    assert hasil["skor"] == 5


def test_validasi_dan_normalisasi_butir_soal_kisi_kisi_resmi():
    assert len(SUB_TOPIK_RESMI_SKD["TWK"]) == 5
    assert len(SUB_TOPIK_RESMI_SKD["TIU"]) == 10
    assert len(SUB_TOPIK_RESMI_SKD["TKP"]) == 6

    butir = validasi_dan_normalisasi_butir_soal(
        {
            "category": "tiu",
            "sub_topic": "Silogisme",
            "difficulty": "medium",
            "teks_soal_asli": "Semua A adalah B.",
            "question_text": "Seluruh peserta ujian hadir tepat waktu.",
            "options": [
                {"teks": "Simpulan A", "skor": 5},
                {"teks": "Simpulan B", "skor": 0},
            ],
        }
    )
    assert butir["stage"] == "SKD"
    assert butir["category"] == "TIU"
    assert butir["sub_topic"] == "Kemampuan Verbal - Silogisme"
    assert butir["difficulty"] == "sedang"
    assert butir["status"] == "draf"
    assert len(butir["options"]) == 5
    assert butir["options"][0]["skor"] == 5
