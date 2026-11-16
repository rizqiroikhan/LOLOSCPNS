"""
Modul Tutor AI Sokratik Berbasis RAG & Generator Latihan Perbaikan Adaptif — LOLOS CPNS.

Seluruh interaksi Tutor AI dan soal latihan perbaikan menggunakan Bahasa Indonesia
yang baik, benar, sopan, dan edukatif mengacu pada Kepmenpan-RB Nomor 321 Tahun 2024.
"""

from __future__ import annotations

import os
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


def peringkat_ulang_hybrid_rrf(
    kandidat: List[Dict[str, Any]],
    sub_topik_target: str = "",
    id_kecualikan: Optional[str] = None,
    ambang_rrf: float = 0.008,
    batas: int = 3,
) -> List[Dict[str, Any]]:
    """
    Menggabungkan kandidat hasil vektor (`skor_vektor`) dan teks penuh (`skor_teks`)
    dengan Reciprocal Rank Fusion (k=60), bonus sub-topik, dan ambang kemiripan minimum.
    """
    filtered = [
        item for item in kandidat
        if str(item.get("id", "")) != str(id_kecualikan or "")
    ]
    urut_v = sorted(filtered, key=lambda x: float(x.get("skor_vektor") or 0), reverse=True)
    urut_t = sorted(filtered, key=lambda x: float(x.get("skor_teks") or 0), reverse=True)

    rank_v = {
        str(item.get("id", i)): i + 1
        for i, item in enumerate(urut_v)
        if float(item.get("skor_vektor") or 0) > 0
    }
    rank_t = {
        str(item.get("id", i)): i + 1
        for i, item in enumerate(urut_t)
        if float(item.get("skor_teks") or 0) > 0
    }

    K_RRF = 60.0
    sub_lower = (sub_topik_target or "").lower().strip()
    tereringkat: List[Dict[str, Any]] = []

    for item in filtered:
        doc_id = str(item.get("id", ""))
        rv = rank_v.get(doc_id)
        rt = rank_t.get(doc_id)
        skor_rrf = (1.0 / (K_RRF + rv) if rv else 0.0) + (
            1.0 / (K_RRF + rt) if rt else 0.0
        )
        if sub_lower and sub_lower in str(item.get("sub_topic", "")).lower():
            skor_rrf += 0.006
        if skor_rrf < ambang_rrf:
            continue
        tereringkat.append({**item, "skor_rrf": round(skor_rrf, 5)})

    tereringkat.sort(key=lambda x: x["skor_rrf"], reverse=True)
    return tereringkat[:batas]


def ambil_konteks_hybrid_supabase(
    kueri_teks: str,
    vektor_kueri: Optional[List[float]] = None,
    filter_kategori: Optional[str] = None,
    id_soal_aktif: Optional[str] = None,
    batas: int = 3,
    ambang_kemiripan_vektor: float = 0.45,
) -> List[Dict[str, Any]]:
    """
    Memanggil fungsi RPC Supabase `match_konteks_skd` (`pgvector` + `tsvector` + RRF)
    lalu menerapkan pemeringkatan ulang dan filter ambang batas.
    """
    supabase_url = (
        os.getenv("SUPABASE_URL") or os.getenv("NEXT_PUBLIC_SUPABASE_URL") or ""
    ).strip()
    supabase_key = (os.getenv("SUPABASE_SERVICE_ROLE_KEY") or "").strip()
    if (
        not supabase_url
        or not supabase_key
        or "proyek-anda.supabase.co" in supabase_url
        or "masukkan_supabase" in supabase_key
    ):
        return []

    try:
        from supabase import create_client

        klien = create_client(supabase_url, supabase_key)
        respons = klien.rpc(
            "match_konteks_skd",
            {
                "kueri_teks": kueri_teks,
                "kueri_embedding": vektor_kueri,
                "filter_kategori": filter_kategori.upper() if filter_kategori else None,
                "batas_hasil": max(batas + 2, 5),
                "ambang_kemiripan_vektor": ambang_kemiripan_vektor,
            },
        ).execute()
        data = respons.data if isinstance(respons.data, list) else []
        if not data:
            return []
        return peringkat_ulang_hybrid_rrf(
            kandidat=data,
            id_kecualikan=id_soal_aktif,
            batas=batas,
        )
    except Exception:
        return []


async def jawab_sokratik_dengan_rag(
    pertanyaan_peserta: str,
    konteks_soal: Dict[str, Any],
    riwayat_chat: Optional[List[Dict[str, str]]] = None,
    provider: Optional[UnifiedAIProvider] = None,
) -> Dict[str, Any]:
    """
    Menghasilkan bimbingan Tutor AI Sokratik dengan pengayaan Real Hybrid Retrieval
    (RPC Supabase `pgvector` + `tsvector` + RRF reranking).
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
    id_soal = konteks_soal.get("id")

    kueri_pencarian = f"{kategori} {sub_topik}: {teks_soal[:240]} {pertanyaan_peserta}"
    vektor_kueri = await adapter.buat_embedding(kueri_pencarian)
    rujukan_hybrid = ambil_konteks_hybrid_supabase(
        kueri_teks=kueri_pencarian,
        vektor_kueri=vektor_kueri,
        filter_kategori=str(kategori),
        id_soal_aktif=str(id_soal) if id_soal else None,
        batas=3,
    )

    if rujukan_hybrid:
        metode_rag = (
            "hybrid_pgvector_tsvector_rrf"
            if vektor_kueri
            else "tsvector_bahasa_indonesia_rrf"
        )
    else:
        metode_rag = "pgvector_768" if vektor_kueri else "tsvector_bahasa_indonesia"

    blok_rujukan = ""
    if rujukan_hybrid:
        baris_rujukan = "\n".join(
            f"- [{r.get('sub_topic', sub_topik)}] {r.get('explanation', '')} (Rujukan: {r.get('source_reference', '-')})"
            for r in rujukan_hybrid
        )
        blok_rujukan = f"\n\n[RUJUKAN SOAL & KONSEP SEJENIS DARI BANK TERKURASI]\n{baris_rujukan}"

    pesan_kontekstual = (
        f"[KONTEKS SOAL SKD]\n"
        f"- Sub-Tes & Kisi-Kisi: {kategori} — {sub_topik}\n"
        f"- Referensi Resmi: {referensi}\n"
        f"- Pokok Soal: {teks_soal}\n"
        f"- Jawaban Peserta Saat Ini: {jawaban_peserta}\n"
        f"- Konsep Pembahasan Resmi: {pembahasan}"
        f"{blok_rujukan}\n\n"
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
        "jumlah_rujukan_ditemukan": len(rujukan_hybrid),
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
