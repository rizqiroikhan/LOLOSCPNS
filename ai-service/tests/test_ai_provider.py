"""Pengujian unit untuk Adaptor Penyedia AI Terpadu dan Pipeline Ekstraksi (`/ai-service/app/`)."""

import os
from app.ai_provider import KonfigurasiAI, UnifiedAIProvider
from app.ingestion import SUB_TOPIK_RESMI_SKD, validasi_dan_normalisasi_butir_soal
from app.math_verifier import (
    evaluasi_ekspresi_aritmetika_aman,
    prediksi_suku_berikutnya_deret,
    verifikasi_butir_soal_ai,
)
from app.tutor_rag import peringkat_ulang_hybrid_rrf


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


def test_verifikasi_numerik_dan_circuit_breaker():
    assert evaluasi_ekspresi_aritmetika_aman("(24 * 35) / 20 - 24") == 18.0
    assert evaluasi_ekspresi_aritmetika_aman("__import__('os').system('ls')") is None
    assert prediksi_suku_berikutnya_deret("4, 9, 19, 39, 79, ...") == 159.0

    lolos, laporan = verifikasi_butir_soal_ai(
        {
            "category": "TIU",
            "sub_topic": "Kemampuan Numerik - Perbandingan Kuantitatif",
            "question_text": "Berapa tambahan pekerja?",
            "options": [
                {"kunci": "A", "teks": "12 pekerja", "skor": 5},
                {"kunci": "B", "teks": "16 pekerja", "skor": 0},
                {"kunci": "C", "teks": "18 pekerja", "skor": 0},
                {"kunci": "D", "teks": "20 pekerja", "skor": 0},
                {"kunci": "E", "teks": "42 pekerja", "skor": 0},
            ],
        },
        verification_formula="(24 * 35) / 20 - 24",
        expected_answer=18,
    )
    assert lolos is True
    assert laporan["diperbaiki_otomatis"] is True
    assert laporan["butir"]["options"][2]["skor"] == 5

    provider = UnifiedAIProvider(ambang_gagal_circuit=2, cooldown_circuit_detik=60.0)
    provider._catat_gagal("gemini_free", 12.0)
    assert provider._status_sirkuit("gemini_free") == "tertutup"
    provider._catat_gagal("gemini_free", 15.0)
    assert provider._status_sirkuit("gemini_free") == "terbuka"
    metrik = provider.dapatkan_metrik_ai()
    assert metrik["total_gagal"] == 2
    assert metrik["status_circuit_breaker"]["gemini_free"] == "terbuka"


def test_peringkat_ulang_hybrid_rrf():
    kandidat = [
        {"id": "q-aktif", "sub_topic": "Integritas", "skor_vektor": 0.99, "skor_teks": 0.9},
        {"id": "q-dua-sinyal", "sub_topic": "Integritas", "skor_vektor": 0.85, "skor_teks": 0.8},
        {"id": "q-lemah", "sub_topic": "Nasionalisme", "skor_vektor": 0.1, "skor_teks": 0.1},
    ]
    hasil = peringkat_ulang_hybrid_rrf(
        kandidat=kandidat,
        sub_topik_target="Integritas",
        id_kecualikan="q-aktif",
        ambang_rrf=0.015,
        batas=2,
    )
    assert all(item["id"] != "q-aktif" for item in hasil)
    assert hasil[0]["id"] == "q-dua-sinyal"
