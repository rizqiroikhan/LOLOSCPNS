"""
Modul Pipeline Ekstraksi Multimodal (Regulasi & Bank Soal SKD) — LOLOS CPNS.

Mencakup:
1. Ekstraksi PDF Regulasi Seleksi CPNS (Kepmenpan-RB) menjadi JSON terstruktur untuk tabel `regulations`.
2. Ekstraksi halaman PDF / gambar pindaian buku soal menggunakan Vision AI:
   - Ekstraksi naskah asli soal, pilihan A-E, dan kunci/skor.
   - Klasifikasi otomatis `stage` ('SKD'), `category` ('TWK'/'TIU'/'TKP'), `difficulty` ('mudah'/'sedang'/'sulit'),
     serta `sub_topic` resmi sesuai Diktum KEDUA Kepmenpan-RB Nomor 321 Tahun 2024.
   - Pemotongan (crop) gambar soal figural menggunakan Pillow dan pengunggahan ke Supabase Storage.
   - Parafrase semantik otomatis (bebas hak cipta) dan pembuatan pembahasan mendalam berbahasa Indonesia baku.
   - Pembuatan vektor embedding (768 dimensi) dengan cadangan otomatis ke tsvector Bahasa Indonesia.
"""

from __future__ import annotations

import base64
import io
import os
import uuid
from typing import Any, Dict, List, Optional, Tuple

from app.ai_provider import UnifiedAIProvider, ai_adapter

SUB_TOPIK_RESMI_SKD: Dict[str, List[str]] = {
    "TWK": [
        "Nasionalisme",
        "Integritas",
        "Bela Negara",
        "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)",
        "Bahasa Negara",
    ],
    "TIU": [
        "Kemampuan Verbal - Analogi",
        "Kemampuan Verbal - Silogisme",
        "Kemampuan Verbal - Analitis",
        "Kemampuan Numerik - Berhitung",
        "Kemampuan Numerik - Deret Angka",
        "Kemampuan Numerik - Perbandingan Kuantitatif",
        "Kemampuan Numerik - Soal Cerita",
        "Kemampuan Figural - Analogi Gambar",
        "Kemampuan Figural - Ketidaksamaan Gambar",
        "Kemampuan Figural - Serial Gambar",
    ],
    "TKP": [
        "Pelayanan Publik",
        "Jejaring Kerja",
        "Sosial Budaya",
        "Teknologi Informasi dan Komunikasi (TIK)",
        "Profesionalisme",
        "Anti Radikalisme",
    ],
}

PROMPT_EKSTRAKSI_REGULASI = """
Anda adalah sistem ekstraksi dokumen hukum dan regulasi seleksi CPNS Kementerian PANRB.
Berdasarkan teks dokumen regulasi berikut, ekstrak informasi aturan kelulusan ke dalam objek JSON
yang sesuai dengan struktur tabel `regulations`:

Format JSON yang wajib dikembalikan:
{
  "stage": "SKD",
  "title": "Nama resmi regulasi, contoh: Keputusan Menteri PANRB Nomor 321 Tahun 2024",
  "year": 2024,
  "default_duration_minutes": 100,
  "blind_disability_duration_minutes": 130,
  "total_questions": 110,
  "max_cumulative_score": 550,
  "sections_json": [
    {
      "kode": "TWK",
      "nama": "Tes Wawasan Kebangsaan",
      "jumlah_soal": 30,
      "skor_benar": 5,
      "skor_salah": 0,
      "skor_kosong": 0,
      "skor_maksimal": 150,
      "sub_topik_resmi": ["Nasionalisme", "Integritas", "Bela Negara", "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)", "Bahasa Negara"]
    }
  ],
  "passing_grades_json": {
    "umum": {
      "kode_formasi": "umum",
      "nama_kategori": "Kebutuhan Umum",
      "mode_evaluasi": "per_subtes",
      "ambang_batas_subtes": { "TWK": 65, "TIU": 80, "TKP": 166 }
    },
    "cumlaude": {
      "kode_formasi": "cumlaude",
      "nama_kategori": "Kebutuhan Khusus Lulusan Terbaik (Cumlaude)",
      "mode_evaluasi": "kumulatif_dan_tiu",
      "ambang_batas_kumulatif": 311,
      "ambang_batas_tiu": 85
    }
  }
}

Pastikan seluruh nama kategori, sub-topik, dan mode evaluasi (`per_subtes` atau `kumulatif_dan_tiu`)
menggunakan Bahasa Indonesia yang baik dan benar.
""".strip()

PROMPT_EKSTRAKSI_DAN_PARAFRASE_SOAL = """
Anda adalah Kurator Ahli Bank Soal CAT SKD CPNS pada platform LOLOS CPNS.
Tugas Anda terhadap gambar/halaman soal berikut:
1. Ekstrak seluruh butir soal yang terlihat pada dokumen (teks asli soal dan pilihan jawaban A, B, C, D, E).
2. Klasifikasikan setiap soal ke dalam:
   - `stage`: "SKD"
   - `category`: pilih salah satu dari "TWK", "TIU", atau "TKP"
   - `sub_topic`: WAJIB memilih salah satu sub-topik resmi Kepmenpan-RB Nomor 321 Tahun 2024 berikut:
     * TWK: "Nasionalisme", "Integritas", "Bela Negara", "Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika)", "Bahasa Negara"
     * TIU: "Kemampuan Verbal - Analogi", "Kemampuan Verbal - Silogisme", "Kemampuan Verbal - Analitis", "Kemampuan Numerik - Berhitung", "Kemampuan Numerik - Deret Angka", "Kemampuan Numerik - Perbandingan Kuantitatif", "Kemampuan Numerik - Soal Cerita", "Kemampuan Figural - Analogi Gambar", "Kemampuan Figural - Ketidaksamaan Gambar", "Kemampuan Figural - Serial Gambar"
     * TKP: "Pelayanan Publik", "Jejaring Kerja", "Sosial Budaya", "Teknologi Informasi dan Komunikasi (TIK)", "Profesionalisme", "Anti Radikalisme"
   - `difficulty`: pilih salah satu dari "mudah", "sedang", atau "sulit"
3. Lakukan PARAFRASE SEMANTIK pada pokok soal (`question_text`) dan pilihan jawaban (`options`) agar bebas hak cipta (ubah ilustrasi cerita, nama tokoh, atau angka hitungan namun pertahankan konsep uji dan tingkat kesulitan yang setara).
4. Untuk TWK dan TIU: jawaban benar diberi `skor: 5` dan jawaban salah `skor: 0`. Untuk TKP: berikan bobot berjenjang `skor: 1` sampai `skor: 5` pada kelima pilihan A-E.
5. Susun pembahasan mendalam (`explanation`) dan referensi konsep/peraturan (`source_reference`) dalam Bahasa Indonesia yang baku, jelas, dan edukatif.
6. Jika soal memiliki gambar figural/ilustrasi, sertakan koordinat proporsional `kotak_gambar` `[x1, y1, x2, y2]` dalam rentang 0.0 s.d. 1.0 (atau `null` jika tidak bergambar).

Kembalikan HANYA objek JSON dengan struktur berikut:
{
  "daftar_soal": [
    {
      "stage": "SKD",
      "category": "TIU",
      "sub_topic": "Kemampuan Numerik - Soal Cerita",
      "difficulty": "sedang",
      "teks_soal_asli": "Teks soal asli dari buku/dokumen sumber...",
      "pilihan_asli": [
        {"kunci": "A", "teks": "..."},
        {"kunci": "B", "teks": "..."},
        {"kunci": "C", "teks": "..."},
        {"kunci": "D", "teks": "..."},
        {"kunci": "E", "teks": "..."}
      ],
      "question_text": "Teks soal baru hasil parafrase semantik dalam Bahasa Indonesia baku...",
      "options": [
        {"kunci": "A", "teks": "Pilihan A hasil parafrase", "skor": 0},
        {"kunci": "B", "teks": "Pilihan B hasil parafrase (Kunci)", "skor": 5},
        {"kunci": "C", "teks": "Pilihan C hasil parafrase", "skor": 0},
        {"kunci": "D", "teks": "Pilihan D hasil parafrase", "skor": 0},
        {"kunci": "E", "teks": "Pilihan E hasil parafrase", "skor": 0}
      ],
      "explanation": "Pembahasan langkah demi langkah menggunakan Bahasa Indonesia yang baik dan benar...",
      "source_reference": "Kisi-Kisi Resmi Kepmenpan-RB Nomor 321 Tahun 2024",
      "kotak_gambar": null
    }
  ]
}
""".strip()


def ekstrak_teks_dari_pdf(data_pdf: bytes) -> str:
    """Mengekstrak teks dari berkas PDF menggunakan PyMuPDF (fitz)."""
    try:
        import fitz  # PyMuPDF

        dokumen = fitz.open(stream=data_pdf, filetype="pdf")
        kumpulan_teks: List[str] = []
        for halaman in dokumen:
            kumpulan_teks.append(halaman.get_text("text"))
        dokumen.close()
        teks_gabungan = "\n".join(kumpulan_teks).strip()
        if teks_gabungan:
            return teks_gabungan
    except Exception:
        pass

    # Cadangan apabila PDF berisi teks sederhana atau PyMuPDF belum terpasang di lingkungan minimal
    try:
        return data_pdf.decode("utf-8", errors="ignore").strip()
    except Exception:
        return ""


def konversi_halaman_pdf_ke_png(data_pdf: bytes, indeks_halaman: int = 0) -> Tuple[bytes, str]:
    """Mengubah satu halaman PDF menjadi byte gambar PNG untuk dianalisis oleh Vision AI."""
    try:
        import fitz  # PyMuPDF

        dokumen = fitz.open(stream=data_pdf, filetype="pdf")
        if len(dokumen) == 0:
            raise ValueError("Berkas PDF tidak memiliki halaman.")
        idx = max(0, min(indeks_halaman, len(dokumen) - 1))
        halaman = dokumen[idx]
        pix = halaman.get_pixmap(dpi=180)
        png_bytes = pix.tobytes("png")
        dokumen.close()
        return png_bytes, "image/png"
    except ImportError as galat:
        raise RuntimeError(
            "Pustaka PyMuPDF diperlukan untuk mengubah halaman PDF pindaian menjadi gambar."
        ) from galat


def potong_gambar_figural(
    data_gambar_bytes: bytes,
    kotak_proporsional: List[float],
) -> Optional[bytes]:
    """
    Memotong (crop) bagian gambar figural berdasarkan koordinat proporsional [x1, y1, x2, y2]
    dalam rentang 0.0 s.d. 1.0 menggunakan Pillow.
    """
    if not kotak_proporsional or len(kotak_proporsional) != 4:
        return None

    try:
        from PIL import Image

        with Image.open(io.BytesIO(data_gambar_bytes)) as img:
            lebar, tinggi = img.size
            x1 = max(0, min(int(kotak_proporsional[0] * lebar), lebar - 1))
            y1 = max(0, min(int(kotak_proporsional[1] * tinggi), tinggi - 1))
            x2 = max(x1 + 1, min(int(kotak_proporsional[2] * lebar), lebar))
            y2 = max(y1 + 1, min(int(kotak_proporsional[3] * tinggi), tinggi))

            potongan = img.crop((x1, y1, x2, y2))
            buffer_keluaran = io.BytesIO()
            potongan.save(buffer_keluaran, format="PNG")
            return buffer_keluaran.getvalue()
    except Exception:
        return None


def unggah_gambar_ke_supabase(
    data_png: bytes,
    nama_berkas: Optional[str] = None,
) -> str:
    """
    Mengunggah gambar hasil potongan soal figural ke Supabase Storage (bucket `soal-figural`).
    Jika kredensial Supabase belum diatur, mengembalikan Data URL base64 agar pratinjau di Admin UI tetap tampil.
    """
    supabase_url = os.getenv("SUPABASE_URL") or os.getenv("NEXT_PUBLIC_SUPABASE_URL")
    supabase_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv(
        "NEXT_PUBLIC_SUPABASE_ANON_KEY"
    )
    nama_objek = nama_berkas or f"figural-{uuid.uuid4().hex[:12]}.png"

    if (
        supabase_url
        and supabase_key
        and "proyek-anda.supabase.co" not in supabase_url
    ):
        try:
            from supabase import create_client

            klien = create_client(supabase_url, supabase_key)
            bucket = "soal-figural"
            klien.storage.from_(bucket).upload(
                path=nama_objek,
                file=data_png,
                file_options={"content-type": "image/png", "upsert": "true"},
            )
            return klien.storage.from_(bucket).get_public_url(nama_objek)
        except Exception:
            pass

    b64 = base64.b64encode(data_png).decode("utf-8")
    return f"data:image/png;base64,{b64}"


def validasi_dan_normalisasi_butir_soal(butir: Dict[str, Any]) -> Dict[str, Any]:
    """
    Memastikan hasil ekstraksi AI mematuhi skema tabel `questions` dan kisi-kisi resmi
    Kepmenpan-RB Nomor 321 Tahun 2024 dalam Bahasa Indonesia yang baku.
    """
    kategori = str(butir.get("category", "TWK")).upper().strip()
    if kategori not in ("TWK", "TIU", "TKP"):
        kategori = "TWK"

    daftar_sub_resmi = SUB_TOPIK_RESMI_SKD[kategori]
    sub_topik = str(butir.get("sub_topic", "")).strip()
    if sub_topik not in daftar_sub_resmi:
        # Cari kecocokan parsial terdekat pada daftar sub-topik resmi
        cocok = next(
            (
                item
                for item in daftar_sub_resmi
                if sub_topik.lower() in item.lower()
                or item.lower() in sub_topik.lower()
            ),
            daftar_sub_resmi[0],
        )
        sub_topik = cocok

    kesulitan_mentah = str(butir.get("difficulty", "sedang")).lower().strip()
    peta_kesulitan = {
        "easy": "mudah",
        "mudah": "mudah",
        "medium": "sedang",
        "sedang": "sedang",
        "hard": "sulit",
        "sulit": "sulit",
    }
    kesulitan = peta_kesulitan.get(kesulitan_mentah, "sedang")

    opsi_mentah = butir.get("options") or []
    opsi_terstandar: List[Dict[str, Any]] = []
    kunci_standar = ["A", "B", "C", "D", "E"]

    for idx, huruf in enumerate(kunci_standar):
        item_opsi = opsi_mentah[idx] if idx < len(opsi_mentah) else {}
        teks_opsi = str(
            item_opsi.get("teks") or item_opsi.get("text") or f"Pilihan {huruf}"
        ).strip()
        skor_opsi = item_opsi.get("skor", item_opsi.get("score", 0))
        try:
            skor_int = int(skor_opsi)
        except (ValueError, TypeError):
            skor_int = 0
        opsi_terstandar.append(
            {
                "kunci": huruf,
                "teks": teks_opsi,
                "skor": skor_int,
            }
        )

    return {
        "stage": "SKD",
        "category": kategori,
        "sub_topic": sub_topik,
        "difficulty": kesulitan,
        "teks_soal_asli": str(
            butir.get("teks_soal_asli") or butir.get("question_text") or ""
        ).strip(),
        "pilihan_asli": butir.get("pilihan_asli") or opsi_terstandar,
        "question_text": str(butir.get("question_text") or "").strip(),
        "image_url": butir.get("image_url"),
        "options": opsi_terstandar,
        "explanation": str(
            butir.get("explanation")
            or "Pembahasan disusun berdasarkan kisi-kisi resmi SKD Kepmenpan-RB Nomor 321 Tahun 2024."
        ).strip(),
        "source_reference": str(
            butir.get("source_reference")
            or f"Kepmenpan-RB Nomor 321 Tahun 2024 — {kategori} ({sub_topik})"
        ).strip(),
        "is_paraphrased": True,
        "status": "draf",
        "kotak_gambar": butir.get("kotak_gambar"),
    }


async def proses_ekstraksi_regulasi(
    data_berkas: bytes,
    nama_berkas: str,
    simpan_ke_db: bool = True,
    provider: Optional[UnifiedAIProvider] = None,
) -> Dict[str, Any]:
    """Mengekstrak berkas PDF regulasi menjadi JSON terstruktur untuk tabel `regulations`."""
    adapter = provider or ai_adapter
    teks_dokumen = ekstrak_teks_dari_pdf(data_berkas)
    if not teks_dokumen:
        raise ValueError(
            f"Tidak dapat membaca teks dari berkas '{nama_berkas}'. Pastikan berkas PDF berisi teks yang valid."
        )

    potongan_teks = teks_dokumen[:25000]
    pesan = (
        f"Nama Berkas: {nama_berkas}\n\n"
        f"Isi Naskah Regulasi:\n{potongan_teks}"
    )

    hasil_json = await adapter.ekstrak_json_terstruktur(
        pesan_pengguna=pesan,
        instruksi_sistem=PROMPT_EKSTRAKSI_REGULASI,
    )

    data_regulasi = {
        "stage": hasil_json.get("stage", "SKD"),
        "title": hasil_json.get(
            "title", "Keputusan Menteri PANRB Nomor 321 Tahun 2024"
        ),
        "year": int(hasil_json.get("year", 2024)),
        "default_duration_minutes": int(
            hasil_json.get("default_duration_minutes", 100)
        ),
        "blind_disability_duration_minutes": int(
            hasil_json.get("blind_disability_duration_minutes", 130)
        ),
        "total_questions": int(hasil_json.get("total_questions", 110)),
        "max_cumulative_score": int(
            hasil_json.get("max_cumulative_score", 550)
        ),
        "sections_json": hasil_json.get("sections_json", []),
        "passing_grades_json": hasil_json.get("passing_grades_json", {}),
        "is_active": True,
    }

    tersimpan_di_db = False
    if simpan_ke_db:
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
                respons_db = (
                    klien.table("regulations").insert(data_regulasi).execute()
                )
                if respons_db.data:
                    data_regulasi = respons_db.data[0]
                    tersimpan_di_db = True
            except Exception:
                tersimpan_di_db = False

    return {
        "status": "berhasil",
        "pesan": "Dokumen regulasi berhasil diekstrak menjadi struktur JSON resmi.",
        "tersimpan_di_basis_data": tersimpan_di_db,
        "regulasi": data_regulasi,
    }


async def proses_ekstraksi_soal_multimodal(
    data_berkas: bytes,
    nama_berkas: str,
    tipe_mime: str,
    halaman_pdf: int = 0,
    provider: Optional[UnifiedAIProvider] = None,
) -> Dict[str, Any]:
    """
    Memproses halaman PDF atau pindaian gambar buku soal melalui model Vision & Embedding:
    1. Konversi halaman PDF ke PNG (jika berkas berupa PDF).
    2. Ekstraksi soal asli + klasifikasi kisi-kisi Kepmenpan-RB 321/2024 + parafrase AI + pembahasan.
    3. Potong gambar figural (jika ada) dan unggah ke Supabase Storage.
    4. Buat vektor embedding (768 dimensi) dengan cadangan otomatis ke tsvector Bahasa Indonesia.
    """
    adapter = provider or ai_adapter

    if tipe_mime == "application/pdf" or nama_berkas.lower().endswith(".pdf"):
        gambar_bytes, mime_aktual = konversi_halaman_pdf_ke_png(
            data_berkas, indeks_halaman=halaman_pdf
        )
    else:
        gambar_bytes, mime_aktual = data_berkas, tipe_mime or "image/png"

    hasil_vision = await adapter.analisis_gambar_multimodal(
        data_gambar_bytes=gambar_bytes,
        tipe_mime=mime_aktual,
        instruksi_ekstraksi=PROMPT_EKSTRAKSI_DAN_PARAFRASE_SOAL,
        keluaran_json=True,
    )

    daftar_mentah = hasil_vision.get("daftar_soal") or []
    if isinstance(hasil_vision.get("data"), list):
        daftar_mentah = hasil_vision["data"]

    hasil_kurasi: List[Dict[str, Any]] = []

    for butir in daftar_mentah:
        soal_normal = validasi_dan_normalisasi_butir_soal(butir)

        # Jika terdapat koordinat gambar figural, potong otomatis dan unggah
        kotak = soal_normal.get("kotak_gambar")
        if isinstance(kotak, list) and len(kotak) == 4:
            potongan_png = potong_gambar_figural(gambar_bytes, kotak)
            if potongan_png:
                soal_normal["image_url"] = unggah_gambar_ke_supabase(
                    potongan_png
                )

        # Buat embedding untuk RAG (otomatis None jika provider gratis tidak menyediakan endpoint embedding)
        teks_gabungan_rag = (
            f"{soal_normal['category']} - {soal_normal['sub_topic']}: "
            f"{soal_normal['question_text']} Pembahasan: {soal_normal['explanation']}"
        )
        vektor = await adapter.buat_embedding(teks_gabungan_rag)
        soal_normal["embedding"] = vektor
        soal_normal["metode_pencarian_rag"] = (
            "pgvector_768" if vektor else "tsvector_bahasa_indonesia"
        )

        hasil_kurasi.append(soal_normal)

    return {
        "status": "berhasil",
        "pesan": f"Berhasil mengekstrak dan memparafrasekan {len(hasil_kurasi)} butir soal SKD.",
        "jumlah_soal": len(hasil_kurasi),
        "daftar_soal": hasil_kurasi,
    }
