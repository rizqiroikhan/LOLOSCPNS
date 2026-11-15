"""Pengujian unit untuk Adaptor Penyedia AI Terpadu (`/ai-service/app/ai_provider.py`)."""

import os
from app.ai_provider import KonfigurasiAI, UnifiedAIProvider


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
