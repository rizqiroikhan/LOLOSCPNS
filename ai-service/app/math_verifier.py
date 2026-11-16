"""
Verifikator Matematis & Konsistensi Soal Hitungan/Logika (Code-Assisted Verification) — LOLOS CPNS.

Mengevaluasi ekspresi aritmetika & pola deret secara deterministik menggunakan AST aman
(tanpa `eval` atau eksekusi kode sewenang-wenang) sebelum soal AI dikirim ke peserta.
"""

from __future__ import annotations

import ast
import operator
import re
from typing import Any, Dict, List, Optional, Tuple

_OPERATOR_BINER = {
    ast.Add: operator.add,
    ast.Sub: operator.sub,
    ast.Mult: operator.mul,
    ast.Div: operator.truediv,
    ast.Pow: operator.pow,
}

_OPERATOR_UNARY = {
    ast.UAdd: operator.pos,
    ast.USub: operator.neg,
}


def evaluasi_ekspresi_aritmetika_aman(ekspresi: str) -> Optional[float]:
    """
    Mengevaluasi ekspresi matematika dasar secara aman lewat `ast.parse` terbatas.
    Mendukung +, -, *, ×, /, ÷, ^, %, dan tanda kurung.
    """
    bersih = (
        (ekspresi or "")
        .replace("×", "*")
        .replace("÷", "/")
        .replace("−", "-")
        .replace("^", "**")
        .replace(",", ".")
        .strip()
    )
    if not bersih or len(bersih) > 200:
        return None

    # Ganti angka persentase seperti `25%` menjadi `(25/100)` sebelum parsing AST
    bersih = re.sub(r"(\d+(?:\.\d+)?)%", r"(\1/100)", bersih)
    if not re.fullmatch(r"[0-9.+\-*/()\s]+", bersih):
        return None

    try:
        pohon = ast.parse(bersih, mode="eval")
    except SyntaxError:
        return None

    def evaluasi_node(node: ast.AST) -> float:
        if isinstance(node, ast.Expression):
            return evaluasi_node(node.body)
        if isinstance(node, ast.Constant) and isinstance(node.value, (int, float)):
            return float(node.value)
        if isinstance(node, ast.UnaryOp) and type(node.op) in _OPERATOR_UNARY:
            return _OPERATOR_UNARY[type(node.op)](evaluasi_node(node.operand))
        if isinstance(node, ast.BinOp) and type(node.op) in _OPERATOR_BINER:
            kiri = evaluasi_node(node.left)
            kanan = evaluasi_node(node.right)
            if isinstance(node.op, ast.Div) and abs(kanan) < 1e-12:
                raise ZeroDivisionError("Pembagian nol")
            if isinstance(node.op, ast.Pow) and abs(kanan) > 20:
                raise ValueError("Eksponen terlalu besar")
            return float(_OPERATOR_BINER[type(node.op)](kiri, kanan))
        raise ValueError("Node AST tidak diizinkan")

    try:
        hasil = evaluasi_node(pohon)
        return round(hasil, 6)
    except Exception:
        return None


def prediksi_suku_berikutnya_deret(teks_soal: str) -> Optional[float]:
    """Memprediksi suku berikutnya pada soal deret angka standar secara deterministik."""
    cocok = re.search(
        r"(-?\d+(?:[.,]\d+)?(?:\s*,\s*-?\d+(?:[.,]\d+)?){3,})(?:\s*,\s*\.\.\.)?",
        teks_soal or "",
    )
    if not cocok:
        return None

    try:
        angka = [
            float(s.strip().replace(",", "."))
            for s in cocok.group(1).split(",")
            if s.strip()
        ]
    except ValueError:
        return None

    if len(angka) < 4:
        return None

    def hampir_sama(a: float, b: float) -> bool:
        return abs(a - b) <= 1e-4

    d1 = [angka[i + 1] - angka[i] for i in range(len(angka) - 1)]
    if all(hampir_sama(d, d1[0]) for d in d1):
        return round(angka[-1] + d1[0], 6)

    if len(d1) >= 3:
        d2 = [d1[i + 1] - d1[i] for i in range(len(d1) - 1)]
        if all(hampir_sama(d, d2[0]) for d in d2):
            return round(angka[-1] + d1[-1] + d2[0], 6)

    if all(abs(x) > 1e-9 for x in angka):
        rasio = [angka[i + 1] / angka[i] for i in range(len(angka) - 1)]
        if all(hampir_sama(r, rasio[0]) for r in rasio):
            return round(angka[-1] * rasio[0], 6)

    if all(abs(d) > 1e-9 for d in d1):
        rasio_d = [d1[i + 1] / d1[i] for i in range(len(d1) - 1)]
        if all(hampir_sama(r, rasio_d[0]) for r in rasio_d):
            return round(angka[-1] + (d1[-1] * rasio_d[0]), 6)

    return None


def _ekstrak_angka_opsi(teks_opsi: str) -> List[float]:
    bersih = re.sub(r"(?<=\d)\.(?=\d{3}\b)", "", teks_opsi or "").replace(",", ".")
    return [float(m) for m in re.findall(r"-?\d+(?:\.\d+)?", bersih)]


def _opsi_mengandung_nilai(teks_opsi: str, target: float) -> bool:
    kandidat = _ekstrak_angka_opsi(teks_opsi)
    toleransi = max(1e-3, abs(target) * 1e-4)
    return any(abs(n - target) <= toleransi for n in kandidat)


def verifikasi_butir_soal_ai(
    soal: Dict[str, Any],
    verification_formula: Optional[str] = None,
    expected_answer: Optional[Any] = None,
) -> Tuple[bool, Dict[str, Any]]:
    """
    Memvalidasi dan memverifikasi silang soal AI.
    Mengembalikan `(lolos, laporan)` dengan `laporan['butir']` yang terverifikasi/diperbaiki.
    """
    kategori = str(soal.get("category", "TWK")).upper()
    opsi = soal.get("options") or []
    teks_soal = str(soal.get("question_text", "")).strip()

    if not teks_soal or len(opsi) != 5:
        return False, {"lolos": False, "metode": "gagal_konsistensi", "alasan": "Struktur soal tidak lengkap."}

    if kategori == "TKP":
        skor_urut = sorted(int(o.get("skor", 0)) for o in opsi)
        valid = skor_urut == [1, 2, 3, 4, 5]
        return valid, {
            "lolos": valid,
            "terverifikasi_matematis": False,
            "diperbaiki_otomatis": False,
            "metode": "validasi_struktur_opsi" if valid else "gagal_konsistensi",
            "butir": soal if valid else None,
        }

    idx_benar = [i for i, o in enumerate(opsi) if int(o.get("skor", 0)) == 5]
    if len(idx_benar) != 1:
        return False, {"lolos": False, "metode": "gagal_konsistensi", "alasan": "Kunci skor 5 tidak tunggal."}

    target_numerik: Optional[float] = None
    metode = "validasi_struktur_opsi"

    rumus = (verification_formula or "").strip()
    if rumus:
        hasil_rumus = evaluasi_ekspresi_aritmetika_aman(rumus)
        if hasil_rumus is None:
            return False, {
                "lolos": False,
                "metode": "gagal_konsistensi",
                "alasan": f"Rumus verifikasi tidak valid: {rumus}",
            }
        if expected_answer is not None:
            try:
                ekspektasi = float(str(expected_answer).replace(",", ".").strip())
                if abs(ekspektasi - hasil_rumus) > 1e-2:
                    return False, {
                        "lolos": False,
                        "metode": "gagal_konsistensi",
                        "alasan": f"expected_answer ({ekspektasi}) != hasil rumus ({hasil_rumus}).",
                    }
            except ValueError:
                pass
        target_numerik = hasil_rumus
        metode = "parser_rumus"
    elif kategori == "TIU" and "deret" in str(soal.get("sub_topic", "")).lower():
        prediksi = prediksi_suku_berikutnya_deret(teks_soal)
        if prediksi is not None:
            target_numerik = prediksi
            metode = "pola_deret"

    if target_numerik is not None:
        opsi_benar = opsi[idx_benar[0]]
        if _opsi_mengandung_nilai(str(opsi_benar.get("teks", "")), target_numerik):
            return True, {
                "lolos": True,
                "terverifikasi_matematis": True,
                "diperbaiki_otomatis": False,
                "nilai_terhitung": target_numerik,
                "metode": metode,
                "butir": soal,
            }

        kandidat_lain = [
            i for i, o in enumerate(opsi) if _opsi_mengandung_nilai(str(o.get("teks", "")), target_numerik)
        ]
        if len(kandidat_lain) == 1:
            idx_sah = kandidat_lain[0]
            opsi_baru = [
                {**o, "skor": 5 if i == idx_sah else 0}
                for i, o in enumerate(opsi)
            ]
            soal_perbaikan = {**soal, "options": opsi_baru}
            return True, {
                "lolos": True,
                "terverifikasi_matematis": True,
                "diperbaiki_otomatis": True,
                "nilai_terhitung": target_numerik,
                "metode": metode,
                "butir": soal_perbaikan,
            }

        return False, {
            "lolos": False,
            "terverifikasi_matematis": False,
            "nilai_terhitung": target_numerik,
            "metode": "gagal_konsistensi",
            "alasan": f"Hasil hitungan ({target_numerik}) tidak sesuai dengan kunci jawaban.",
        }

    return True, {
        "lolos": True,
        "terverifikasi_matematis": False,
        "diperbaiki_otomatis": False,
        "metode": "validasi_struktur_opsi",
        "butir": soal,
    }
