"""
Adaptor Penyedia AI Terpadu (Unified AI Provider Adapter) — LOLOS CPNS.

Mendukung:
1. Konfigurasi bebas vendor melalui `.env` (`gemini_free`, `groq_free`, `openrouter_free`, `ollama_local`).
2. Failover otomatis ke penyedia cadangan (`AI_FALLBACK_*`) saat error rate-limit/429/timeout.
3. Circuit breaker per penyedia & pencatatan metrik (token, latensi ms, error rate, failover).
"""

from __future__ import annotations

import base64
import json
import os
import time
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


def _default_base_url(provider: str) -> str:
    p = provider.lower().strip()
    if p == "groq_free":
        return "https://api.groq.com/openai/v1"
    if p == "openrouter_free":
        return "https://openrouter.ai/api/v1"
    if p == "ollama_local":
        return "http://localhost:11434/v1"
    return "https://generativelanguage.googleapis.com/v1beta/openai/"


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

    @classmethod
    def daftar_penyedia_dari_env(cls) -> List["KonfigurasiAI"]:
        utama = cls.dari_env()
        daftar = [utama]
        fb_provider = os.getenv("AI_FALLBACK_PROVIDER", "").strip()
        fb_key = os.getenv("AI_FALLBACK_API_KEY", "").strip()
        if fb_provider and (fb_key or fb_provider == "ollama_local"):
            fb_chat = os.getenv(
                "AI_FALLBACK_CHAT_MODEL",
                "llama-3.3-70b-versatile" if fb_provider == "groq_free" else utama.chat_model,
            ).strip()
            fb_vision = os.getenv("AI_FALLBACK_VISION_MODEL", fb_chat).strip()
            daftar.append(
                cls(
                    provider=fb_provider,
                    base_url=os.getenv(
                        "AI_FALLBACK_BASE_URL", _default_base_url(fb_provider)
                    ).strip(),
                    api_key=fb_key,
                    chat_model=fb_chat,
                    vision_model=fb_vision,
                    embedding_model=os.getenv("AI_FALLBACK_EMBEDDING_MODEL", "").strip(),
                )
            )
        return daftar


class UnifiedAIProvider:
    """
    Pembungkus klien OpenAI-compatible dengan failover, circuit breaker, dan observabilitas.
    """

    def __init__(
        self,
        konfigurasi: Optional[KonfigurasiAI] = None,
        ambang_gagal_circuit: int = 3,
        cooldown_circuit_detik: float = 30.0,
    ) -> None:
        self._konfigurasi_eksplisit = konfigurasi
        self.konfigurasi = konfigurasi or KonfigurasiAI.dari_env()
        self._klien_per_provider: Dict[str, AsyncOpenAI] = {}
        self.ambang_gagal_circuit = max(1, ambang_gagal_circuit)
        self.cooldown_circuit_detik = max(0.05, cooldown_circuit_detik)
        self._circuit: Dict[str, Dict[str, float]] = {}
        self._metrik: Dict[str, Any] = {
            "total_permintaan": 0,
            "total_sukses": 0,
            "total_gagal": 0,
            "total_failover": 0,
            "total_latensi_ms": 0.0,
            "total_token_input": 0,
            "total_token_output": 0,
        }

    def _daftar_penyedia(self) -> List[KonfigurasiAI]:
        if self._konfigurasi_eksplisit is not None:
            return [self._konfigurasi_eksplisit]
        daftar = KonfigurasiAI.daftar_penyedia_dari_env()
        self.konfigurasi = daftar[0]
        return daftar

    def _dapatkan_klien_untuk(self, konf: KonfigurasiAI) -> AsyncOpenAI:
        if not konf.api_key and konf.provider != "ollama_local":
            raise ValueError(
                "Kunci API AI (AI_API_KEY) belum diatur pada berkas konfigurasi (.env)."
            )
        kunci_cache = f"{konf.provider}::{konf.base_url}::{konf.api_key[:6]}"
        if kunci_cache not in self._klien_per_provider:
            self._klien_per_provider[kunci_cache] = AsyncOpenAI(
                api_key=konf.api_key or "ollama",
                base_url=konf.base_url,
            )
        return self._klien_per_provider[kunci_cache]

    def _dapatkan_klien(self) -> AsyncOpenAI:
        return self._dapatkan_klien_untuk(self.konfigurasi)

    def _status_sirkuit(self, provider: str) -> str:
        entri = self._circuit.get(provider)
        if not entri or entri["gagal"] < self.ambang_gagal_circuit:
            return "tertutup"
        if time.time() < entri["terbuka_hingga"]:
            return "terbuka"
        return "setengah_terbuka"

    def _catat_sukses(self, provider: str, latensi_ms: float, usage: Any = None, failover: bool = False) -> None:
        self._circuit[provider] = {"gagal": 0.0, "terbuka_hingga": 0.0}
        self._metrik["total_sukses"] += 1
        self._metrik["total_latensi_ms"] += latensi_ms
        if failover:
            self._metrik["total_failover"] += 1
        if usage is not None:
            self._metrik["total_token_input"] += int(getattr(usage, "prompt_tokens", 0) or 0)
            self._metrik["total_token_output"] += int(getattr(usage, "completion_tokens", 0) or 0)

    def _catat_gagal(self, provider: str, latensi_ms: float) -> None:
        lama = self._circuit.get(provider, {"gagal": 0.0, "terbuka_hingga": 0.0})
        gagal_baru = lama["gagal"] + 1.0
        terbuka_hingga = (
            time.time() + self.cooldown_circuit_detik
            if gagal_baru >= self.ambang_gagal_circuit
            else 0.0
        )
        self._circuit[provider] = {"gagal": gagal_baru, "terbuka_hingga": terbuka_hingga}
        self._metrik["total_gagal"] += 1
        self._metrik["total_latensi_ms"] += latensi_ms

    def dapatkan_metrik_ai(self) -> Dict[str, Any]:
        total = int(self._metrik["total_permintaan"])
        gagal = int(self._metrik["total_gagal"])
        return {
            "total_permintaan": total,
            "total_sukses": int(self._metrik["total_sukses"]),
            "total_gagal": gagal,
            "total_failover": int(self._metrik["total_failover"]),
            "error_rate_persen": round((gagal / total) * 100, 2) if total > 0 else 0.0,
            "rata_rata_latensi_ms": round(self._metrik["total_latensi_ms"] / total, 1) if total > 0 else 0.0,
            "total_token_input": int(self._metrik["total_token_input"]),
            "total_token_output": int(self._metrik["total_token_output"]),
            "status_circuit_breaker": {
                nama: self._status_sirkuit(nama) for nama in self._circuit
            },
        }

    def info_konfigurasi_publik(self) -> Dict[str, Any]:
        """Mengembalikan ringkasan konfigurasi aktif (tanpa membocorkan kunci API)."""
        daftar = self._daftar_penyedia()
        utama = daftar[0]
        return {
            "penyedia": utama.provider,
            "url_dasar": utama.base_url,
            "model_percakapan": utama.chat_model,
            "model_visual": utama.vision_model,
            "model_embedding": utama.embedding_model or "pencarian_teks_penuh_indonesia",
            "failover_aktif": len(daftar) > 1,
            "kunci_api_terpasang": bool(
                utama.api_key
                and utama.api_key != "masukkan_api_key_gratis_aistudio_anda"
            ),
            "metrik_ai": self.dapatkan_metrik_ai(),
        }

    async def hasilkan_teks(
        self,
        pesan_pengguna: str,
        instruksi_sistem: str = INSTRUKSI_SISTEM_BAKU_INDONESIA,
        suhu: float = 0.3,
        riwayat_pesan: Optional[List[Dict[str, str]]] = None,
    ) -> str:
        """Menghasilkan respons teks percakapan dengan failover multi-provider."""
        daftar = self._daftar_penyedia()
        daftar_pesan: List[Dict[str, Any]] = [{"role": "system", "content": instruksi_sistem}]
        if riwayat_pesan:
            daftar_pesan.extend(riwayat_pesan)
        daftar_pesan.append({"role": "user", "content": pesan_pengguna})

        galat_terakhir: Optional[Exception] = None
        ada_failover = False

        for idx, konf in enumerate(daftar):
            if self._status_sirkuit(konf.provider) == "terbuka" and idx < len(daftar) - 1:
                ada_failover = True
                continue
            mulai = time.perf_counter()
            self._metrik["total_permintaan"] += 1
            try:
                klien = self._dapatkan_klien_untuk(konf)
                respons = await klien.chat.completions.create(
                    model=konf.chat_model,
                    messages=daftar_pesan,
                    temperature=suhu,
                )
                isi = respons.choices[0].message.content
                if not isi:
                    raise RuntimeError("Model AI mengembalikan respons kosong.")
                self._catat_sukses(
                    konf.provider,
                    (time.perf_counter() - mulai) * 1000,
                    usage=getattr(respons, "usage", None),
                    failover=ada_failover,
                )
                return isi.strip()
            except Exception as galat:
                self._catat_gagal(konf.provider, (time.perf_counter() - mulai) * 1000)
                galat_terakhir = galat
                ada_failover = True

        raise galat_terakhir or RuntimeError("Seluruh penyedia AI gagal merespons.")

    async def ekstrak_json_terstruktur(
        self,
        pesan_pengguna: str,
        instruksi_sistem: str = INSTRUKSI_SISTEM_BAKU_INDONESIA,
        suhu: float = 0.1,
    ) -> Dict[str, Any]:
        """Mengekstrak objek JSON terstruktur dengan failover otomatis."""
        daftar = self._daftar_penyedia()
        instruksi_json = (
            f"{instruksi_sistem}\n\n"
            "PENTING: Keluarkan HANYA objek JSON yang valid tanpa tambahan teks pengantar "
            "atau penutup, dan pastikan seluruh nilai teks menggunakan Bahasa Indonesia yang baku."
        )
        galat_terakhir: Optional[Exception] = None
        ada_failover = False

        for idx, konf in enumerate(daftar):
            if self._status_sirkuit(konf.provider) == "terbuka" and idx < len(daftar) - 1:
                ada_failover = True
                continue
            mulai = time.perf_counter()
            self._metrik["total_permintaan"] += 1
            try:
                klien = self._dapatkan_klien_untuk(konf)
                respons = await klien.chat.completions.create(
                    model=konf.chat_model,
                    messages=[
                        {"role": "system", "content": instruksi_json},
                        {"role": "user", "content": pesan_pengguna},
                    ],
                    temperature=suhu,
                    response_format={"type": "json_object"},
                )
                isi = respons.choices[0].message.content or "{}"
                hasil = self._urai_json_aman(isi)
                self._catat_sukses(
                    konf.provider,
                    (time.perf_counter() - mulai) * 1000,
                    usage=getattr(respons, "usage", None),
                    failover=ada_failover,
                )
                return hasil
            except Exception as galat:
                self._catat_gagal(konf.provider, (time.perf_counter() - mulai) * 1000)
                galat_terakhir = galat
                ada_failover = True

        raise galat_terakhir or RuntimeError("Gagal mengekstrak JSON dari penyedia AI.")

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

        mulai = time.perf_counter()
        self._metrik["total_permintaan"] += 1
        try:
            respons = await klien.chat.completions.create(
                model=self.konfigurasi.vision_model,
                messages=[
                    {"role": "system", "content": INSTRUKSI_SISTEM_BAKU_INDONESIA},
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
            hasil = self._urai_json_aman(isi) if keluaran_json else isi
            self._catat_sukses(
                self.konfigurasi.provider,
                (time.perf_counter() - mulai) * 1000,
                usage=getattr(respons, "usage", None),
            )
            return hasil
        except Exception:
            self._catat_gagal(self.konfigurasi.provider, (time.perf_counter() - mulai) * 1000)
            raise

    async def buat_embedding(self, teks: str) -> Optional[List[float]]:
        """Membuat vektor embedding (768 dimensi) dengan fallback aman None ke tsvector."""
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
