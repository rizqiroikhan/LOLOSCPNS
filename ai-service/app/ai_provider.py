"""
Adaptor Penyedia AI Terpadu (Unified AI Provider Adapter) — LOLOS CPNS.

Mendukung seluruh penyedia AI yang kompatibel dengan standar OpenAI cukup melalui
konfigurasi berkas `.env`:
- Google AI Studio Free Tier (`gemini_free`)
- Groq Free Tier (`groq_free`)
- OpenRouter Free Models (`openrouter_free`)
- Ollama Lokal (`ollama_local`)
- Endpoint Kustom Kompatibel OpenAI (`custom_openai`)
"""

from __future__ import annotations

import base64
import json
import os
from dataclasses import dataclass
from typing import Any, Dict, List, Optional

from dotenv import load_dotenv
from openai import AsyncOpenAI

load_dotenv()

INSTRUKSI_SISTEM_BAKU_INDONESIA = (
    "Anda adalah Asisten Ahli Seleksi CPNS pada platform LOLOS CPNS. "
    "Seluruh penjelasan, hasil ekstraksi, parafrase soal, dan tanggapan WAJIB "
    "menggunakan Bahasa Indonesia yang baik dan benar sesuai kaidah PUEBI/EYD "
    "serta mengacu pada terminologi resmi BKN dan Kementerian PANRB."
)


@dataclass(frozen=True)
class KonfigurasiAI:
    """Konfigurasi penyedia AI yang dibaca secara dinamis dari variabel lingkungan (.env)."""

    provider: str
    base_url: str
    api_key: str
    chat_model: str
    vision_model: str
    embedding_model: str

    @classmethod
    def dari_env(cls) -> "KonfigurasiAI":
        provider = os.getenv("AI_PROVIDER", "gemini_free").strip()
        base_url = os.getenv(
            "AI_BASE_URL",
            "https://generativelanguage.googleapis.com/v1beta/openai/",
        ).strip()
        api_key = os.getenv("AI_API_KEY", "").strip()
        chat_model = os.getenv("AI_CHAT_MODEL", "gemini-2.5-flash").strip()
        vision_model = os.getenv("AI_VISION_MODEL", chat_model).strip()
        embedding_model = os.getenv("AI_EMBEDDING_MODEL", "text-embedding-004").strip()

        return cls(
            provider=provider,
            base_url=base_url,
            api_key=api_key,
            chat_model=chat_model,
            vision_model=vision_model,
            embedding_model=embedding_model,
        )


class UnifiedAIProvider:
    """
    Pembungkus klien OpenAI-compatible untuk layanan Chat, Ekstraksi JSON Terstruktur,
    Pembacaan Gambar (Vision OCR), dan Vektor Embedding.
    """

    def __init__(self, konfigurasi: Optional[KonfigurasiAI] = None) -> None:
        self.konfigurasi = konfigurasi or KonfigurasiAI.dari_env()
        self._klien: Optional[AsyncOpenAI] = None

    def _dapatkan_klien(self) -> AsyncOpenAI:
        if not self.konfigurasi.api_key and self.konfigurasi.provider != "ollama_local":
            raise ValueError(
                "Kunci API AI (AI_API_KEY) belum diatur pada berkas konfigurasi (.env). "
                "Silakan isi AI_API_KEY dengan kunci gratis dari Google AI Studio, Groq, atau OpenRouter."
            )
        if self._klien is None:
            self._klien = AsyncOpenAI(
                api_key=self.konfigurasi.api_key or "ollama",
                base_url=self.konfigurasi.base_url,
            )
        return self._klien

    def info_konfigurasi_publik(self) -> Dict[str, Any]:
        """Mengembalikan ringkasan konfigurasi aktif (tanpa membocorkan kunci API) untuk pemeriksaan status."""
        return {
            "penyedia": self.konfigurasi.provider,
            "url_dasar": self.konfigurasi.base_url,
            "model_percakapan": self.konfigurasi.chat_model,
            "model_visual": self.konfigurasi.vision_model,
            "model_embedding": self.konfigurasi.embedding_model or "pencarian_teks_penuh_indonesia",
            "kunci_api_terpasang": bool(
                self.konfigurasi.api_key
                and self.konfigurasi.api_key != "masukkan_api_key_gratis_aistudio_anda"
            ),
        }

    async def hasilkan_teks(
        self,
        pesan_pengguna: str,
        instruksi_sistem: str = INSTRUKSI_SISTEM_BAKU_INDONESIA,
        suhu: float = 0.3,
        riwayat_pesan: Optional[List[Dict[str, str]]] = None,
    ) -> str:
        """Menghasilkan respons teks percakapan dalam Bahasa Indonesia yang baik dan benar."""
        klien = self._dapatkan_klien()
        daftar_pesan: List[Dict[str, Any]] = [
            {"role": "system", "content": instruksi_sistem}
        ]
        if riwayat_pesan:
            daftar_pesan.extend(riwayat_pesan)
        daftar_pesan.append({"role": "user", "content": pesan_pengguna})

        respons = await klien.chat.completions.create(
            model=self.konfigurasi.chat_model,
            messages=daftar_pesan,
            temperature=suhu,
        )
        isi = respons.choices[0].message.content
        if not isi:
            raise RuntimeError("Model AI mengembalikan respons kosong.")
        return isi.strip()

    async def ekstrak_json_terstruktur(
        self,
        pesan_pengguna: str,
        instruksi_sistem: str = INSTRUKSI_SISTEM_BAKU_INDONESIA,
        suhu: float = 0.1,
    ) -> Dict[str, Any]:
        """Mengekstrak objek JSON terstruktur menggunakan model percakapan aktif."""
        klien = self._dapatkan_klien()
        instruksi_json = (
            f"{instruksi_sistem}\n\n"
            "PENTING: Keluarkan HANYA objek JSON yang valid tanpa tambahan teks pengantar "
            "atau penutup, dan pastikan seluruh nilai teks menggunakan Bahasa Indonesia yang baku."
        )
        respons = await klien.chat.completions.create(
            model=self.konfigurasi.chat_model,
            messages=[
                {"role": "system", "content": instruksi_json},
                {"role": "user", "content": pesan_pengguna},
            ],
            temperature=suhu,
            response_format={"type": "json_object"},
        )
        isi = respons.choices[0].message.content or "{}"
        return self._urai_json_aman(isi)

    async def analisis_gambar_multimodal(
        self,
        data_gambar_bytes: bytes,
        tipe_mime: str,
        instruksi_ekstraksi: str,
        keluaran_json: bool = True,
    ) -> Any:
        """Memproses gambar pindaian soal/dokumen menggunakan model Vision yang diatur di `.env`."""
        klien = self._dapatkan_klien()
        gambar_b64 = base64.b64encode(data_gambar_bytes).decode("utf-8")
        url_data = f"data:{tipe_mime};base64,{gambar_b64}"

        kwargs_tambahan: Dict[str, Any] = {}
        if keluaran_json:
            kwargs_tambahan["response_format"] = {"type": "json_object"}

        respons = await klien.chat.completions.create(
            model=self.konfigurasi.vision_model,
            messages=[
                {
                    "role": "system",
                    "content": INSTRUKSI_SISTEM_BAKU_INDONESIA,
                },
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": instruksi_ekstraksi},
                        {"type": "image_url", "image_url": {"url": url_data}},
                    ],
                },
            ],
            temperature=0.1,
            **kwargs_tambahan,
        )
        isi = (respons.choices[0].message.content or "").strip()
        if keluaran_json:
            return self._urai_json_aman(isi)
        return isi

    async def buat_embedding(self, teks: str) -> Optional[List[float]]:
        """
        Membuat vektor embedding (768 dimensi) untuk pencarian RAG.
        Jika penyedia AI gratis tidak menyediakan endpoint embedding, mengembalikan None
        sehingga sistem otomatis beralih ke pencarian teks penuh (tsvector Bahasa Indonesia).
        """
        if not self.konfigurasi.embedding_model:
            return None
        try:
            klien = self._dapatkan_klien()
            respons = await klien.embeddings.create(
                model=self.konfigurasi.embedding_model,
                input=teks,
            )
            return list(respons.data[0].embedding)
        except Exception:
            # Cadangan otomatis ke tsvector PostgreSQL apabila penyedia gratis tidak mendukung embedding
            return None

    @staticmethod
    def _urai_json_aman(teks_mentah: str) -> Dict[str, Any]:
        """Membersihkan blok markdown ```json (jika ada) dan mengurai teks menjadi kamus Python."""
        bersih = teks_mentah.strip()
        if bersih.startswith("```"):
            baris = bersih.splitlines()
            if baris and baris[0].startswith("```"):
                baris = baris[1:]
            if baris and baris[-1].strip().startswith("```"):
                baris = baris[:-1]
            bersih = "\n".join(baris).strip()
        try:
            hasil = json.loads(bersih)
            if isinstance(hasil, dict):
                return hasil
            return {"data": hasil}
        except json.JSONDecodeError as galat:
            raise ValueError(
                f"Gagal mengurai keluaran JSON dari model AI: {galat.msg}"
            ) from galat


ai_adapter = UnifiedAIProvider()
