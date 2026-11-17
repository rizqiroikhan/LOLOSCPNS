#!/usr/bin/env python3
"""
Audit & Ekstraktor Lokal Bank Soal SKD (Tahap 0 — Tanpa Biaya API AI) — LOLOS CPNS.

Fungsi:
1. Memindai seluruh berkas di `SKD + SKB + FORMASI CPNS 2024/SKD`.
2. Menghitung hash MD5 untuk menyaring berkas duplikat persis.
3. Mengaudit setiap berkas unik (PDF via PyMuPDF, DOCX, PPTX):
   - Jumlah halaman/slide, total karakter teks, dan jumlah gambar tertanam.
   - Klasifikasi jenis berkas (`teks_penuh`, `campuran_teks_gambar`, `scan_gambar`, `docx`, `pptx`).
   - Perkiraan jumlah butir soal & keberadaan kunci/pembahasan.
4. Menyimpan hasil ekstraksi teks mentah per berkas + manifest audit ke `.staging-soal/`
   (termasuk dalam `.gitignore`, tidak pernah di-commit ke GitHub).
"""

from __future__ import annotations

import hashlib
import json
import os
import re
import sys
import zipfile
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any, Dict, List, Tuple

# Pastikan stdout UTF-8 di Windows
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

AKAR_REPO = Path(__file__).resolve().parent.parent
FOLDER_SUMBER_SKD = AKAR_REPO / "SKD + SKB + FORMASI CPNS 2024" / "SKD"
FOLDER_STAGING = AKAR_REPO / ".staging-soal"
FOLDER_TEKS_MENTAH = FOLDER_STAGING / "teks-mentah"

POLA_NAMA_MATERI = re.compile(
    r"(materi|modul|hafalan|ringkasan|rumus|planner|panduan|catatan|kitab)",
    re.IGNORECASE,
)
POLA_NAMA_SOAL = re.compile(
    r"(soal|latsol|latihan|hots|host|skd|tkd|fr|pretest|drilling|bongkar|bank|"
    r"analogi|silogisme|aritmatika|deret|figural|kecukupan|siapdinas|pembahasan|tryout|try out)",
    re.IGNORECASE,
)
POLA_NOMOR_SOAL = re.compile(r"(?m)^\s*(?:Soal\s+)?(\d{1,3})\s*[\.\)]\s+\S")
POLA_OPSI = re.compile(r"(?m)^\s*[A-Ea-e]\s*[\.\)]\s+\S")
POLA_KUNCI = re.compile(r"(pembahasan|kunci\s*jawaban|jawaban\s*:)", re.IGNORECASE)


def hitung_md5(jalur: Path) -> str:
    h = hashlib.md5()
    with jalur.open("rb") as f:
        for potong in iter(lambda: f.read(1024 * 1024), b""):
            h.update(potong)
    return h.hexdigest()


def buat_slug(nama: str) -> str:
    bersih = re.sub(r"[^a-zA-Z0-9]+", "-", nama).strip("-").lower()
    return bersih[:90] or "berkas"


def skor_prioritas_nama_unik(jalur: Path) -> Tuple[int, int, str]:
    """Memilih nama berkas paling bersih dari kelompok duplikat MD5."""
    nama = jalur.name
    ada_suffix_copy = 1 if re.search(r"\(\d+\)", nama) else 0
    return (ada_suffix_copy, len(str(jalur)), str(jalur))


def tentukan_kategori_folder(jalur: Path) -> str:
    rel = jalur.relative_to(FOLDER_SUMBER_SKD)
    if len(rel.parts) == 1:
        return "ROOT_SIAPDINAS"
    return rel.parts[0]


def ekstrak_pdf(jalur: Path) -> Dict[str, Any]:
    import pymupdf

    try:
        doc = pymupdf.open(str(jalur))
    except Exception as exc:
        return {"error": f"Gagal membuka PDF: {exc}", "teks": ""}

    if doc.needs_pass:
        auth_ok = 0
        try:
            auth_ok = doc.authenticate("")
        except Exception:
            auth_ok = 0
        if not auth_ok:
            doc.close()
            return {"error": "PDF terenkripsi kata sandi", "teks": ""}

    total_halaman = len(doc)
    potongan_halaman: List[str] = []
    total_karakter = 0
    halaman_berteks = 0
    halaman_minim_teks = 0
    total_gambar = 0

    try:
        for idx in range(total_halaman):
            hal = doc[idx]
            teks_hal = (hal.get_text("text") or "").strip()
            jml_kar = len(teks_hal)
            jml_gbr = len(hal.get_images(full=False))
            total_karakter += jml_kar
            total_gambar += jml_gbr
            if jml_kar >= 100:
                halaman_berteks += 1
            elif jml_kar < 80:
                halaman_minim_teks += 1
            if teks_hal:
                potongan_halaman.append(f"=== HALAMAN {idx + 1} ===\n{teks_hal}")
    except Exception as exc:
        doc.close()
        return {"error": f"Gagal membaca halaman PDF: {exc}", "teks": ""}

    doc.close()

    rasio_teks = halaman_berteks / max(1, total_halaman)
    rata_karakter = total_karakter / max(1, total_halaman)

    if halaman_berteks == 0 or (rata_karakter < 80 and rasio_teks < 0.25):
        jenis_pdf = "scan_gambar"
    elif rasio_teks >= 0.8 and total_gambar <= max(5, total_halaman * 2):
        jenis_pdf = "teks_penuh"
    else:
        jenis_pdf = "campuran_teks_gambar"

    return {
        "error": None,
        "jenis_ekstraksi": jenis_pdf,
        "total_halaman": total_halaman,
        "halaman_berteks": halaman_berteks,
        "halaman_minim_teks": halaman_minim_teks,
        "total_karakter": total_karakter,
        "total_gambar": total_gambar,
        "teks": "\n\n".join(potongan_halaman),
    }


def ekstrak_docx(jalur: Path) -> Dict[str, Any]:
    import docx

    try:
        dok = docx.Document(str(jalur))
        baris: List[str] = []
        for p in dok.paragraphs:
            t = p.text.strip()
            if t:
                baris.append(t)
        for tbl in dok.tables:
            for row in tbl.rows:
                sel = [c.text.strip() for c in row.cells if c.text.strip()]
                if sel:
                    baris.append(" | ".join(sel))
        teks = "\n".join(baris)

        jml_gambar = 0
        with zipfile.ZipFile(str(jalur), "r") as z:
            jml_gambar = sum(1 for n in z.namelist() if n.startswith("word/media/"))

        jenis = "docx_teks" if len(teks) >= 200 else "docx_gambar_atau_kosong"
        return {
            "error": None,
            "jenis_ekstraksi": jenis,
            "total_halaman": max(1, len(baris) // 35),
            "halaman_berteks": 1 if len(teks) >= 200 else 0,
            "halaman_minim_teks": 0 if len(teks) >= 200 else 1,
            "total_karakter": len(teks),
            "total_gambar": jml_gambar,
            "teks": teks,
        }
    except Exception as exc:
        return {"error": f"Gagal membuka DOCX: {exc}", "teks": ""}


def ekstrak_pptx(jalur: Path) -> Dict[str, Any]:
    from pptx import Presentation

    try:
        prs = Presentation(str(jalur))
        slide_teks: List[str] = []
        total_gambar = 0
        for idx, slide in enumerate(prs.slides, start=1):
            bagian: List[str] = []
            for shape in slide.shapes:
                if shape.shape_type == 13:  # PICTURE
                    total_gambar += 1
                if getattr(shape, "has_text_frame", False):
                    t = "\n".join(
                        p.text.strip() for p in shape.text_frame.paragraphs if p.text.strip()
                    )
                    if t:
                        bagian.append(t)
                if getattr(shape, "has_table", False):
                    for row in shape.table.rows:
                        sel = [c.text.strip() for c in row.cells if c.text.strip()]
                        if sel:
                            bagian.append(" | ".join(sel))
            if bagian:
                slide_teks.append(f"=== SLIDE {idx} ===\n" + "\n".join(bagian))
        teks = "\n\n".join(slide_teks)
        return {
            "error": None,
            "jenis_ekstraksi": "pptx_teks" if len(teks) >= 200 else "pptx_gambar",
            "total_halaman": len(prs.slides),
            "halaman_berteks": len(slide_teks),
            "halaman_minim_teks": len(prs.slides) - len(slide_teks),
            "total_karakter": len(teks),
            "total_gambar": total_gambar,
            "teks": teks,
        }
    except Exception as exc:
        return {"error": f"Gagal membuka PPTX: {exc}", "teks": ""}


def perkirakan_soal_dari_teks(teks: str) -> Dict[str, Any]:
    if not teks:
        return {"perkiraan_nomor": 0, "perkiraan_opsi": 0, "ada_kunci_pembahasan": False}
    nomor = len(POLA_NOMOR_SOAL.findall(teks))
    opsi = len(POLA_OPSI.findall(teks))
    ada_kunci = bool(POLA_KUNCI.search(teks))
    # Estimasi konservatif jumlah soal: dibatasi oleh keberadaan opsi (sekitar 4-5 opsi per soal)
    if opsi >= 5:
        perkiraan = min(nomor, max(1, opsi // 4)) if nomor > 0 else opsi // 5
    else:
        perkiraan = nomor if nomor <= 150 else 0
    return {
        "perkiraan_nomor": perkiraan,
        "perkiraan_opsi": opsi,
        "ada_kunci_pembahasan": ada_kunci,
    }


def main() -> None:
    if not FOLDER_SUMBER_SKD.exists():
        print(f"[GAGAL] Folder tidak ditemukan: {FOLDER_SUMBER_SKD}")
        sys.exit(1)

    FOLDER_STAGING.mkdir(parents=True, exist_ok=True)
    FOLDER_TEKS_MENTAH.mkdir(parents=True, exist_ok=True)

    semua_berkas = sorted(p for p in FOLDER_SUMBER_SKD.rglob("*") if p.is_file())
    kelompok_md5: Dict[str, List[Path]] = defaultdict(list)
    for p in semua_berkas:
        kelompok_md5[hitung_md5(p)].append(p)

    berkas_unik: List[Tuple[str, Path, List[Path]]] = []
    for digest, daftar in kelompok_md5.items():
        daftar_urut = sorted(daftar, key=skor_prioritas_nama_unik)
        berkas_unik.append((digest, daftar_urut[0], daftar_urut[1:]))

    hasil_audit: List[Dict[str, Any]] = []
    statistik_jenis = Counter()
    statistik_folder = Counter()
    statistik_peran = Counter()
    total_halaman_semua = 0
    total_soal_teks_terdeteksi = 0
    total_byte_unik = 0
    total_galat = 0

    for idx, (digest, jalur, duplikat) in enumerate(berkas_unik, start=1):
        ext = jalur.suffix.lower()
        folder_utama = tentukan_kategori_folder(jalur)
        ukuran_byte = jalur.stat().st_size
        total_byte_unik += ukuran_byte

        if ext == ".pdf":
            info = ekstrak_pdf(jalur)
        elif ext == ".docx":
            info = ekstrak_docx(jalur)
        elif ext == ".pptx":
            info = ekstrak_pptx(jalur)
        else:
            info = {"error": f"Ekstensi tidak didukung: {ext}", "teks": ""}

        if info.get("error"):
            total_galat += 1
            hasil_audit.append(
                {
                    "md5": digest,
                    "path_relatif": str(jalur.relative_to(FOLDER_SUMBER_SKD)),
                    "folder_utama": folder_utama,
                    "ekstensi": ext,
                    "ukuran_mb": round(ukuran_byte / (1024 * 1024), 2),
                    "duplikat_dilewati": [
                        str(d.relative_to(FOLDER_SUMBER_SKD)) for d in duplikat
                    ],
                    "jenis_ekstraksi": "galat",
                    "error": info["error"],
                }
            )
            continue

        teks = info.get("teks", "")
        jenis_eks = info["jenis_ekstraksi"]
        metrik_soal = perkirakan_soal_dari_teks(teks)
        nama_saja = jalur.stem

        adalah_nama_materi = bool(POLA_NAMA_MATERI.search(nama_saja)) and not bool(
            POLA_NAMA_SOAL.search(nama_saja)
        )
        if adalah_nama_materi and metrik_soal["perkiraan_nomor"] < 5:
            peran = "materi_murni"
        elif jenis_eks in ("scan_gambar", "docx_gambar_atau_kosong", "pptx_gambar"):
            peran = "soal_atau_materi_scan"
        elif metrik_soal["perkiraan_nomor"] >= 3 or POLA_NAMA_SOAL.search(nama_saja):
            peran = "bank_soal_teks"
        else:
            peran = "materi_atau_lainnya"

        path_txt_rel: str | None = None
        if len(teks) >= 200 and peran != "materi_murni":
            dir_out = FOLDER_TEKS_MENTAH / folder_utama
            dir_out.mkdir(parents=True, exist_ok=True)
            nama_txt = f"{idx:03d}-{buat_slug(jalur.stem)}.txt"
            jalur_txt = dir_out / nama_txt
            header_meta = (
                f"# SUMBER: {jalur.relative_to(FOLDER_SUMBER_SKD)}\n"
                f"# FOLDER: {folder_utama} | JENIS: {jenis_eks} | HALAMAN: {info['total_halaman']} | "
                f"PERKIRAAN_SOAL: {metrik_soal['perkiraan_nomor']}\n\n"
            )
            jalur_txt.write_text(header_meta + teks, encoding="utf-8")
            path_txt_rel = str(jalur_txt.relative_to(AKAR_REPO))

        total_halaman_semua += info["total_halaman"]
        total_soal_teks_terdeteksi += metrik_soal["perkiraan_nomor"]
        statistik_jenis[jenis_eks] += 1
        statistik_folder[folder_utama] += 1
        statistik_peran[peran] += 1

        hasil_audit.append(
            {
                "md5": digest,
                "path_relatif": str(jalur.relative_to(FOLDER_SUMBER_SKD)),
                "folder_utama": folder_utama,
                "ekstensi": ext,
                "ukuran_mb": round(ukuran_byte / (1024 * 1024), 2),
                "duplikat_dilewati": [
                    str(d.relative_to(FOLDER_SUMBER_SKD)) for d in duplikat
                ],
                "jenis_ekstraksi": jenis_eks,
                "peran": peran,
                "total_halaman": info["total_halaman"],
                "halaman_berteks": info["halaman_berteks"],
                "total_karakter": info["total_karakter"],
                "total_gambar": info["total_gambar"],
                "perkiraan_soal": metrik_soal["perkiraan_nomor"],
                "perkiraan_opsi": metrik_soal["perkiraan_opsi"],
                "ada_kunci_pembahasan": metrik_soal["ada_kunci_pembahasan"],
                "path_teks_ekstrak": path_txt_rel,
            }
        )

    ringkasan = {
        "total_berkas_awal": len(semua_berkas),
        "total_berkas_unik": len(berkas_unik),
        "total_duplikat_dihapus": len(semua_berkas) - len(berkas_unik),
        "total_ukuran_unik_mb": round(total_byte_unik / (1024 * 1024), 2),
        "total_halaman_atau_slide": total_halaman_semua,
        "total_perkiraan_soal_teks": total_soal_teks_terdeteksi,
        "total_galat_baca": total_galat,
        "distribusi_jenis_ekstraksi": dict(statistik_jenis),
        "distribusi_peran": dict(statistik_peran),
        "distribusi_folder_unik": dict(statistik_folder),
    }

    manifest_path = FOLDER_STAGING / "manifest-audit-skd.json"
    manifest_path.write_text(
        json.dumps({"ringkasan": ringkasan, "daftar_berkas": hasil_audit}, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )

    # Susun laporan ringkas Markdown
    baris_md = [
        "# Ringkasan Audit Sumber Soal SKD (Tahap 0)",
        "",
        f"- **Total berkas awal:** {ringkasan['total_berkas_awal']}",
        f"- **Berkas unik (setelah buang duplikat MD5):** {ringkasan['total_berkas_unik']} ({ringkasan['total_ukuran_unik_mb']} MB)",
        f"- **Duplikat dilewati:** {ringkasan['total_duplikat_dihapus']}",
        f"- **Total halaman / slide:** {ringkasan['total_halaman_atau_slide']}",
        f"- **Perkiraan soal dari berkas berteks:** ~{ringkasan['total_perkiraan_soal_teks']} butir (belum termasuk file scan gambar)",
        f"- **Galat pembacaan:** {ringkasan['total_galat_baca']}",
        "",
        "## Distribusi Jenis Ekstraksi",
    ]
    for k, v in statistik_jenis.most_common():
        baris_md.append(f"- `{k}`: {v} berkas")
    baris_md.extend(["", "## Distribusi Peran"])
    for k, v in statistik_peran.most_common():
        baris_md.append(f"- `{k}`: {v} berkas")
    baris_md.extend(["", "## Daftar Berkas Teks Terbanyak Soalnya (Top 25)"])
    top_soal = sorted(
        [x for x in hasil_audit if x.get("perkiraan_soal", 0) > 0],
        key=lambda x: x["perkiraan_soal"],
        reverse=True,
    )[:25]
    for item in top_soal:
        baris_md.append(
            f"- [{item['folder_utama']}] `{item['path_relatif']}` — ~{item['perkiraan_soal']} soal "
            f"({item['total_halaman']} hal, jenis `{item['jenis_ekstraksi']}`, kunci={item['ada_kunci_pembahasan']})"
        )

    md_path = FOLDER_STAGING / "ringkasan-audit-skd.md"
    md_path.write_text("\n".join(baris_md), encoding="utf-8")

    print(json.dumps(ringkasan, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
