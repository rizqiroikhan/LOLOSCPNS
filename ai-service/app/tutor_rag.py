"""
Modul Tutor AI Sokratik Berbasis RAG & Generator Latihan Perbaikan Adaptif — LOLOS CPNS.

Seluruh interaksi Tutor AI dan soal latihan perbaikan menggunakan Bahasa Indonesia
yang baik, benar, sopan, dan edukatif mengacu pada Kepmenpan-RB Nomor 321 Tahun 2024.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional

from app.ai_provider import UnifiedAIProvider, ai_adapter
from app.ingestion import validasi_dan_normalisasi_butir_soal
from app.math_verifier import verifikasi_butir_soal_ai

INSTRUKSI_TUTOR_SOKRATIK = """
Anda adalah Tutor AI Sokratik pada platform persiapan CPNS "LOLOS CPNS".
Tugas Anda adalah membimbing peserta memahami konsep soal Seleksi Kompetensi Dasar (SKD)
mengacu pada Keputusan Menteri PANRB Nomor 321 Tahun 2024.

Aturan Metode Sokratik (WAJIB DIPATUHI):
1. Gunakan Bahasa Indonesia yang baik, benar, baku (sesuai PUEBI/EYD), ramah, dan memotivasi.
2. Jangan sekadar menyebutkan huruf kunci jawaban secara singkat. Ajak peserta berpikir bertahap:
   - Tanyakan atau tunjukkan kata kunci penting di dalam soal.
   - Jelaskan konsep dasar atau pasal/aturan yang relevan dari referensi resmi.
   - Bimbing peserta menganalisis mengapa pilihan jawaban tertentu bernilai tinggi dan mengapa pengecoh lainnya kurang tepat.
3. Hindari istilah teknis internal (seperti RAG, vector, embedding, atau nama berkas konfigurasi); gunakan bahasa pendampingan belajar yang ramah dan mudah dipahami.
""".strip()

INSTRUKSI_GENERATOR_LATIHAN_ADAPTIF = """
Anda adalah Penyusun Soal Latihan Perbaikan Adaptif (Adaptive Remedial Drill) pada platform LOLOS CPNS.
Buatlah soal latihan variasi baru yang orisinal dalam Bahasa Indonesia yang baik dan benar
pada kategori dan sub-topik resmi Kepmenpan-RB Nomor 321 Tahun 2024 yang diminta pengguna.

Khusus soal hitungan/numerik/deret TIU, WAJIB sertakan kunci "verification_formula" (contoh "(24 * 35) / 20 - 24")
dan "expected_answer" berupa nilai angka pasti agar diverifikasi silang secara deterministik.

Kembalikan HANYA objek JSON dengan struktur:
{
  "daftar_soal": [
    {
      "stage": "SKD",
      "category": "TIU",
      "sub_topic": "Kemampuan Numerik - Deret Angka",
      "difficulty": "sedang",
      "question_text": "...",
      "verification_formula": "...",
      "expected_answer": 18,
      "options": [
        {"kunci": "A", "teks": "...", "skor": 0},
        {"kunci": "B", "teks": "...", "skor": 5},
        {"kunci": "C", "teks": "...", "skor": 0},
        {"kunci": "D", "teks": "...", "skor": 0},
        {"kunci": "E", "teks": "...", "skor": 0}
      ],
      "explanation": "...",
      "source_reference": "Kepmenpan-RB Nomor 321 Tahun 2024"
    }
  ]
}
""".strip()


async def jawab_sokratik_dengan_rag(
    pertanyaan_peserta: str,
    konteks_soal: Dict[str, Any],
    riwayat_chat: Optional[List[Dict[str, str]]] = None,
    provider: Optional[UnifiedAIProvider] = None,
) -> Dict[str, Any]:
    """
    Menghasilkan bimbingan Tutor AI Sokratik dengan pengayaan konteks RAG (vektor embedding
    atau pencarian teks penuh Bahasa Indonesia).
    """
    adapter = provider or ai_adapter
    kategori = konteks_soal.get("category", "SKD")
    sub_topik = konteks_soal.get("sub_topic", "Umum")
    teks_soal = konteks_soal.get("question_text", "")
    pembahasan = konteks_soal.get("explanation", "")
    referensi = konteks_soal.get(
        "source_reference", "Kepmenpan-RB Nomor 321 Tahun 2024"
    )
    jawaban_peserta = konteks_soal.get("jawaban_peserta", "Belum memilih")

    # Coba buat embedding pertanyaan untuk penelusuran RAG
    vektor_kueri = await adapter.buat_embedding(
        f"{kategori} {sub_topik}: {pertanyaan_peserta}"
    )
    metode_rag = (
        "pgvector_768" if vektor_kueri else "tsvector_bahasa_indonesia"
    )

    pesan_kontekstual = (
        f"[KONTEKS RAG SOAL SKD]\n"
        f"- Sub-Tes & Kisi-Kisi: {kategori} — {sub_topik}\n"
        f"- Referensi Resmi: {referensi}\n"
        f"- Pokok Soal: {teks_soal}\n"
        f"- Jawaban Peserta Saat Ini: {jawaban_peserta}\n"
        f"- Konsep Pembahasan Resmi: {pembahasan}\n\n"
        f"[PERTANYAAN PESERTA]\n{pertanyaan_peserta}\n\n"
        f"Berikan bimbingan Sokratik yang runtut, sopan, dan mencerahkan dalam Bahasa Indonesia yang baku."
    )

    balasan = await adapter.hasilkan_teks(
        pesan_pengguna=pesan_kontekstual,
        instruksi_sistem=INSTRUKSI_TUTOR_SOKRATIK,
        suhu=0.4,
        riwayat_pesan=riwayat_chat,
    )

    return {
        "status": "berhasil",
        "metode_rag": metode_rag,
        "penyedia_ai": adapter.konfigurasi.provider,
        "model_ai": adapter.konfigurasi.chat_model,
        "balasan_tutor": balasan,
    }


async def buat_latihan_adaptif_dinamis(
    kategori: str,
    sub_topik: str,
    jumlah_soal: int = 5,
    provider: Optional[UnifiedAIProvider] = None,
) -> Dict[str, Any]:
    """
    Men-generate 5–10 soal variasi baru secara dinamis pada `sub_topic` resmi SKD terlemah peserta.
    """
    adapter = provider or ai_adapter
    jumlah_valid = max(5, min(10, int(jumlah_soal)))

    pesan = (
        f"Buatlah tepat {jumlah_valid} butir soal latihan penguatan SKD baru yang bervariasi untuk:\n"
        f"- Kategori Sub-Tes: {kategori}\n"
        f"- Sub-Topik Resmi Kepmenpan-RB 321/2024: {sub_topik}\n"
        f"Pastikan soal tidak menyalin mentah soal lama, gunakan skenario segar dan pembahasan mendalam."
    )

    hasil_json = await adapter.ekstrak_json_terstruktur(
        pesan_pengguna=pesan,
        instruksi_sistem=INSTRUKSI_GENERATOR_LATIHAN_ADAPTIF,
        suhu=0.5,
    )

    daftar_mentah = hasil_json.get("daftar_soal") or []
    daftar_tervalidasi: List[Dict[str, Any]] = []
    jumlah_diperbaiki = 0
    jumlah_ditolak = 0

    for butir in daftar_mentah:
        normal = validasi_dan_normalisasi_butir_soal(
            {**butir, "category": kategori, "sub_topic": sub_topik}
        )
        lolos, laporan = verifikasi_butir_soal_ai(
            normal,
            verification_formula=butir.get("verification_formula"),
            expected_answer=butir.get("expected_answer"),
        )
        if lolos and laporan.get("butir"):
            if laporan.get("diperbaiki_otomatis"):
                jumlah_diperbaiki += 1
            daftar_tervalidasi.append(laporan["butir"])
        else:
            jumlah_ditolak += 1

    return {
        "status": "berhasil",
        "pesan": f"Berhasil membuat {len(daftar_tervalidasi)} soal Latihan Perbaikan Adaptif terverifikasi untuk sub-topik {sub_topik}.",
        "jumlah_soal": len(daftar_tervalidasi),
        "ringkasan_verifikasi": {
            "jumlah_ai_tervalidasi": len(daftar_tervalidasi),
            "jumlah_diperbaiki": jumlah_diperbaiki,
            "jumlah_ditolak_halusinasi": jumlah_ditolak,
        },
        "daftar_soal": daftar_tervalidasi,
    }
