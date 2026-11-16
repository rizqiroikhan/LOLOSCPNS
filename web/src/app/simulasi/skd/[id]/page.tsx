"use client";

import React, { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import {
  formatDetikKeJamMenitDetik,
  type SoalSimulasiCAT,
  type SoalSimulasiCATTerproteksi,
} from "@/lib/cat-question-bank";
import {
  hitungDurasiUjianSKD,
  REGULASI_SKD_321_2024,
  type HasilEvaluasiSKD,
} from "@/lib/scoring-engine";
import { type StatistikSubTopikSKD } from "@/lib/gap-analyzer";
import type { PaketLanggananResmi, TingkatLanggananPeserta } from "@/lib/access-control";
import type { JenisFormasiSKD, KategoriSubtesSKD, PetaJawabanPeserta } from "@/types/database";
import NavbarPeserta from "@/components/NavbarPeserta";
import PanelLatihanPerbaikanAdaptif from "@/components/AdaptiveDrillModal";
import WidgetTutorSokratik from "@/components/SocraticTutorWidget";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Flag,
  Lock,
  RotateCcw,
  Send,
  Sparkles,
  Target,
} from "lucide-react";

type TahapUjian = "memuat" | "terkunci" | "persiapan" | "ujian" | "hasil";
type FilterPembahasan = "SEMUA" | "TWK" | "TIU" | "TKP" | "SALAH_KOSONG";
type FilterNavigator = "SEMUA" | "TWK" | "TIU" | "TKP";

interface ResponPaketSimulasi {
  status: "sukses" | "terkunci" | "gagal";
  terautentikasi?: boolean;
  butuh_masuk?: boolean;
  tingkat_dimiliki?: TingkatLanggananPeserta;
  paket?: PaketLanggananResmi;
  total_soal?: number;
  daftar_soal?: SoalSimulasiCATTerproteksi[];
  pesan?: string;
  url_upgrade?: string;
}

interface ResponSubmitSimulasi {
  status: "berhasil" | "gagal";
  pesan: string;
  tersimpan_di_basis_data?: boolean;
  hasil_skor: {
    skorSubtes: { TWK: number; TIU: number; TKP: number };
    skorTotal: number;
    jumlahTerjawab: number;
    jumlahKosong: number;
  };
  evaluasi: HasilEvaluasiSKD;
  peta_kelemahan: {
    rekomendasi_belajar: string;
    tiga_prioritas: StatistikSubTopikSKD[];
  };
  daftar_soal_pembahasan: SoalSimulasiCAT[];
}

interface DrafSimulasiLokal {
  jenisFormasi: JenisFormasiSKD;
  disabilitasSensorikNetra: boolean;
  jawabanPeserta: PetaJawabanPeserta;
  daftarRaguRagu: Record<string, boolean>;
  indeksSoalAktif: number;
  sedangUjian: boolean;
  sisaDetik?: number;
}

const DAFTAR_FORMASI = Object.entries(
  REGULASI_SKD_321_2024.passing_grades_json
) as [JenisFormasiSKD, (typeof REGULASI_SKD_321_2024.passing_grades_json)["umum"]][];

const JUMLAH_PER_HALAMAN_PEMBAHASAN = 20;

function formatRupiah(nominal: number): string {
  if (nominal <= 0) return "Gratis";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(nominal);
}

function KontenSimulasiSKD() {
  const params = useParams();
  const searchParams = useSearchParams();
  const idPaket =
    typeof params?.id === "string" ? params.id : "paket-perdana-gratis";
  const formasiAwalQuery = searchParams.get("formasi") as JenisFormasiSKD | null;
  const kunciDrafLokal = `lolos_cpns_simulasi_${idPaket}`;

  const [tahap, setTahap] = useState<TahapUjian>("memuat");
  const [infoPaket, setInfoPaket] = useState<PaketLanggananResmi | null>(null);
  const [infoKunciAkses, setInfoKunciAkses] = useState<{
    pesan: string;
    butuhMasuk: boolean;
    tingkatDimiliki: TingkatLanggananPeserta;
    urlUpgrade: string;
  } | null>(null);

  const [daftarSoal, setDaftarSoal] = useState<SoalSimulasiCATTerproteksi[]>([]);
  const [jenisFormasi, setJenisFormasi] = useState<JenisFormasiSKD>(
    formasiAwalQuery &&
      formasiAwalQuery in REGULASI_SKD_321_2024.passing_grades_json
      ? formasiAwalQuery
      : "umum"
  );
  const [disabilitasSensorikNetra, setDisabilitasSensorikNetra] = useState(false);

  const [jawabanPeserta, setJawabanPeserta] = useState<PetaJawabanPeserta>({});
  const [daftarRaguRagu, setDaftarRaguRagu] = useState<Record<string, boolean>>({});
  const [indeksSoalAktif, setIndeksSoalAktif] = useState(0);
  const [sisaDetik, setSisaDetik] = useState(100 * 60);
  const [filterNavigator, setFilterNavigator] = useState<FilterNavigator>("SEMUA");
  const [konfirmasiKumpul, setKonfirmasiKumpul] = useState(false);

  const [sedangMengirim, setSedangMengirim] = useState(false);
  const [pesanErrorSubmit, setPesanErrorSubmit] = useState<string | null>(null);
  const [hasilSubmit, setHasilSubmit] = useState<ResponSubmitSimulasi | null>(null);

  const [filterPembahasan, setFilterPembahasan] =
    useState<FilterPembahasan>("SEMUA");
  const [halamanPembahasan, setHalamanPembahasan] = useState(1);
  const [tampilkanSemuaPembahasan, setTampilkanSemuaPembahasan] = useState(false);

  // Pastikan checkbox netra direset bila keluar dari formasi disabilitas
  useEffect(() => {
    if (jenisFormasi !== "disabilitas") {
      setDisabilitasSensorikNetra(false);
    }
  }, [jenisFormasi]);

  // Muat paket & soal terproteksi dari server
  useEffect(() => {
    let dibatalkan = false;
    async function muatPaketDariServer() {
      setTahap("memuat");
      try {
        const res = await fetch(
          `/api/tryout/package?id=${encodeURIComponent(idPaket)}`,
          { cache: "no-store" }
        );
        const data = (await res.json()) as ResponPaketSimulasi;
        if (dibatalkan) return;

        if (!res.ok || data.status !== "sukses" || !data.daftar_soal) {
          setInfoPaket(data.paket ?? null);
          setInfoKunciAkses({
            pesan:
              data.pesan ||
              "Anda belum memiliki akses ke paket simulasi CAT ini.",
            butuhMasuk: Boolean(data.butuh_masuk),
            tingkatDimiliki: data.tingkat_dimiliki ?? "gratis",
            urlUpgrade: data.url_upgrade || `/pembayaran?paket=${idPaket}`,
          });
          setTahap("terkunci");
          return;
        }

        setInfoPaket(data.paket ?? null);
        setDaftarSoal(data.daftar_soal);

        // Pulihkan draf pengerjaan lokal bila tersedia
        try {
          const mentah = window.localStorage.getItem(kunciDrafLokal);
          if (mentah) {
            const draf = JSON.parse(mentah) as DrafSimulasiLokal;
            if (draf && typeof draf === "object") {
              if (
                draf.jenisFormasi &&
                draf.jenisFormasi in REGULASI_SKD_321_2024.passing_grades_json
              ) {
                setJenisFormasi(draf.jenisFormasi);
              }
              if (typeof draf.disabilitasSensorikNetra === "boolean") {
                setDisabilitasSensorikNetra(draf.disabilitasSensorikNetra);
              }
              if (draf.jawabanPeserta) {
                setJawabanPeserta(draf.jawabanPeserta);
              }
              if (draf.daftarRaguRagu) {
                setDaftarRaguRagu(draf.daftarRaguRagu);
              }
              if (
                typeof draf.indeksSoalAktif === "number" &&
                draf.indeksSoalAktif >= 0 &&
                draf.indeksSoalAktif < data.daftar_soal.length
              ) {
                setIndeksSoalAktif(draf.indeksSoalAktif);
              }
              if (draf.sedangUjian && typeof draf.sisaDetik === "number" && draf.sisaDetik > 0) {
                setSisaDetik(draf.sisaDetik);
                setTahap("ujian");
                return;
              }
            }
          }
        } catch {
          // Abaikan draf lokal bila korup
        }

        setTahap("persiapan");
      } catch {
        if (!dibatalkan) {
          setInfoKunciAkses({
            pesan:
              "Gagal terhubung ke server untuk memuat paket simulasi. Silakan muat ulang halaman.",
            butuhMasuk: false,
            tingkatDimiliki: "gratis",
            urlUpgrade: `/pembayaran?paket=${idPaket}`,
          });
          setTahap("terkunci");
        }
      }
    }
    void muatPaketDariServer();
    return () => {
      dibatalkan = true;
    };
  }, [idPaket, kunciDrafLokal]);

  // Simpan draf otomatis selama tahap persiapan atau ujian
  useEffect(() => {
    if (tahap !== "ujian" && tahap !== "persiapan") return;
    try {
      const payload: DrafSimulasiLokal = {
        jenisFormasi,
        disabilitasSensorikNetra,
        jawabanPeserta,
        daftarRaguRagu,
        indeksSoalAktif,
        sedangUjian: tahap === "ujian",
        sisaDetik: tahap === "ujian" ? sisaDetik : undefined,
      };
      window.localStorage.setItem(kunciDrafLokal, JSON.stringify(payload));
    } catch {
      // Abaikan kegagalan storage kuota penuh
    }
  }, [
    tahap,
    jenisFormasi,
    disabilitasSensorikNetra,
    jawabanPeserta,
    daftarRaguRagu,
    indeksSoalAktif,
    sisaDetik,
    kunciDrafLokal,
  ]);

  const kumpulkanUjianKeServer = useCallback(async () => {
    if (sedangMengirim || daftarSoal.length === 0) return;
    setSedangMengirim(true);
    setPesanErrorSubmit(null);
    setKonfirmasiKumpul(false);

    try {
      const res = await fetch("/api/tryout/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          package_id: idPaket,
          formasi_type: jenisFormasi,
          is_sensory_blind: disabilitasSensorikNetra,
          answers_json: jawabanPeserta,
          soal_ids: daftarSoal.map((soal) => soal.id),
        }),
      });
      const data = (await res.json()) as ResponSubmitSimulasi & { error?: string };
      if (!res.ok || data.status !== "berhasil") {
        setPesanErrorSubmit(
          data.error ||
            data.pesan ||
            "Gagal memproses penilaian simulasi. Silakan coba kembali."
        );
        return;
      }

      setHasilSubmit(data);
      setHalamanPembahasan(1);
      setTampilkanSemuaPembahasan(false);
      setTahap("hasil");
      try {
        window.localStorage.removeItem(kunciDrafLokal);
      } catch {
        // Abaikan
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setPesanErrorSubmit(
        "Koneksi ke server terputus saat mengumpulkan jawaban. Jawaban Anda tetap tersimpan lokal, silakan coba kirim ulang."
      );
    } finally {
      setSedangMengirim(false);
    }
  }, [
    sedangMengirim,
    daftarSoal,
    idPaket,
    jenisFormasi,
    disabilitasSensorikNetra,
    jawabanPeserta,
    kunciDrafLokal,
  ]);

  // Pengatur waktu mundur real-time saat ujian berlangsung
  useEffect(() => {
    if (tahap !== "ujian") return;
    if (sisaDetik <= 0) {
      void kumpulkanUjianKeServer();
      return;
    }
    const timer = window.setInterval(() => {
      setSisaDetik((detikSebelumnya) => Math.max(0, detikSebelumnya - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [tahap, sisaDetik, kumpulkanUjianKeServer]);

  const durasiUjianMenit = useMemo(
    () => hitungDurasiUjianSKD(jenisFormasi, disabilitasSensorikNetra),
    [jenisFormasi, disabilitasSensorikNetra]
  );

  const jumlahTerjawab = useMemo(
    () => daftarSoal.filter((s) => Boolean(jawabanPeserta[s.id])).length,
    [daftarSoal, jawabanPeserta]
  );

  const jumlahRaguRagu = useMemo(
    () => daftarSoal.filter((s) => Boolean(daftarRaguRagu[s.id])).length,
    [daftarSoal, daftarRaguRagu]
  );

  const soalAktif = daftarSoal[indeksSoalAktif];

  const daftarNavigatorTersaring = useMemo(() => {
    return daftarSoal
      .map((soal, index) => ({ soal, index }))
      .filter((item) =>
        filterNavigator === "SEMUA"
          ? true
          : item.soal.category === filterNavigator
      );
  }, [daftarSoal, filterNavigator]);

  const daftarPembahasanTersaring = useMemo(() => {
    const semua = hasilSubmit?.daftar_soal_pembahasan ?? [];
    if (filterPembahasan === "SEMUA") return semua;
    if (
      filterPembahasan === "TWK" ||
      filterPembahasan === "TIU" ||
      filterPembahasan === "TKP"
    ) {
      return semua.filter((s) => s.category === filterPembahasan);
    }
    // SALAH_KOSONG: TWK/TIU belum benar (+5) atau TKP belum memperoleh skor tertinggi (5)
    return semua.filter((s) => {
      const jawab = jawabanPeserta[s.id];
      if (!jawab) return true;
      const opsi = s.options.find((o) => o.kunci === jawab);
      return (opsi?.skor ?? 0) < 5;
    });
  }, [hasilSubmit, filterPembahasan, jawabanPeserta]);

  const totalHalamanPembahasan = Math.max(
    1,
    Math.ceil(daftarPembahasanTersaring.length / JUMLAH_PER_HALAMAN_PEMBAHASAN)
  );

  const daftarPembahasanTampil = useMemo(() => {
    if (tampilkanSemuaPembahasan) return daftarPembahasanTersaring;
    const mulai = (halamanPembahasan - 1) * JUMLAH_PER_HALAMAN_PEMBAHASAN;
    return daftarPembahasanTersaring.slice(
      mulai,
      mulai + JUMLAH_PER_HALAMAN_PEMBAHASAN
    );
  }, [
    daftarPembahasanTersaring,
    halamanPembahasan,
    tampilkanSemuaPembahasan,
  ]);

  function mulaiUjianSekarang() {
    setSisaDetik(durasiUjianMenit * 60);
    setIndeksSoalAktif(0);
    setTahap("ujian");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetDrafLokal() {
    setJawabanPeserta({});
    setDaftarRaguRagu({});
    setIndeksSoalAktif(0);
    try {
      window.localStorage.removeItem(kunciDrafLokal);
    } catch {
      // Abaikan
    }
  }

  function pilihJawabanSoal(
    idSoal: string,
    kunci: "A" | "B" | "C" | "D" | "E"
  ) {
    setJawabanPeserta((prev) => ({ ...prev, [idSoal]: kunci }));
  }

  function toggleRaguRaguSoal(idSoal: string) {
    setDaftarRaguRagu((prev) => ({ ...prev, [idSoal]: !prev[idSoal] }));
  }

  function mulaiUlangSimulasi() {
    resetDrafLokal();
    setHasilSubmit(null);
    setTahap("persiapan");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ===========================================================================
  // RENDER STAGE: LOADING
  // ===========================================================================
  if (tahap === "memuat") {
    return (
      <div className="min-h-screen bg-slate-50 bg-grid-architectural">
        <NavbarPeserta />
        <main className="mx-auto max-w-4xl px-4 py-16">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-10 text-center shadow-tactile">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
            <h1 className="text-lg font-extrabold text-slate-950">
              Menyiapkan Ruang Simulasi CAT SKD...
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Memvalidasi hak akses paket dan memuat 110 butir soal sesuai
              Kepmenpan-RB Nomor 321 Tahun 2024.
            </p>
          </div>
        </main>
      </div>
    );
  }

  // ===========================================================================
  // RENDER STAGE: PAYWALL / ACCESS LOCKED (403)
  // ===========================================================================
  if (tahap === "terkunci") {
    return (
      <div className="min-h-screen bg-slate-50 bg-grid-architectural text-slate-900">
        <NavbarPeserta />
        <main className="mx-auto max-w-2xl px-4 py-14">
          <div className="rounded-3xl border border-amber-200 bg-white p-8 shadow-tactile-lg sm:p-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-900">
              <Lock className="h-3.5 w-3.5 text-amber-700" />
              <span>Akses Paket Terproteksi</span>
            </span>
            <h1 className="mt-4 text-2xl font-extrabold text-slate-950">
              {infoPaket?.judul || "Paket Simulasi CAT Berbayar"}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {infoKunciAkses?.pesan}
            </p>

            {infoPaket && (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Harga Paket Resmi
                    </p>
                    <p className="font-mono text-2xl font-extrabold text-blue-700 font-numeric">
                      {formatRupiah(infoPaket.harga_idr)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-slate-500">
                      Kuota Tanya Tutor AI
                    </p>
                    <p className="font-mono text-sm font-bold text-slate-900 font-numeric">
                      {infoPaket.kuota_tutor_harian}x / hari
                    </p>
                  </div>
                </div>
                {infoPaket.deskripsi ? (
                  <p className="mt-4 border-t border-slate-200 pt-3 text-xs leading-relaxed text-slate-600">
                    {infoPaket.deskripsi}
                  </p>
                ) : null}
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              {infoKunciAkses?.butuhMasuk ? (
                <Link
                  href={`/masuk?next=${encodeURIComponent(
                    `/simulasi/skd/${idPaket}`
                  )}`}
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-800"
                >
                  Masuk / Daftar Akun Peserta
                </Link>
              ) : null}
              <Link
                href={infoKunciAkses?.urlUpgrade || `/pembayaran?paket=${idPaket}`}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-700"
              >
                <span>Aktifkan Paket Sekarang</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
              <Link
                href="/simulasi/skd/paket-perdana-gratis"
                className="font-semibold text-blue-700 hover:underline"
              >
                Coba Paket Perdana Gratis (110 Soal)
              </Link>
              <Link href="/" className="hover:underline">
                ← Kembali ke Beranda
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ===========================================================================
  // RENDER STAGE 1: PERSIAPAN UJIAN
  // ===========================================================================
  if (tahap === "persiapan") {
    const aturanDipilih =
      REGULASI_SKD_321_2024.passing_grades_json[jenisFormasi];

    return (
      <div className="min-h-screen bg-slate-50 bg-grid-architectural text-slate-900">
        <NavbarPeserta />
        <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-extrabold text-blue-800">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>
                  {infoPaket?.judul || "Simulasi CAT SKD Resmi"} •{" "}
                  {daftarSoal.length} Soal
                </span>
              </span>
              <h1 className="mt-2.5 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                Persiapan Simulasi CAT SKD CPNS
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Pilih kategori formasi untuk menerapkan Nilai Ambang Batas dan
                durasi ujian sesuai Keputusan Menteri PANRB Nomor 321 Tahun 2024.
              </p>
            </div>
            <Link
              href="/dasbor"
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100"
            >
              Dasbor Peserta
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Pilih 7 Formasi */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile lg:col-span-2">
              <h2 className="text-base font-extrabold text-slate-950">
                1. Pilih Kategori Formasi Pelamar
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {DAFTAR_FORMASI.map(([kode, aturan]) => {
                  const aktif = jenisFormasi === kode;
                  return (
                    <button
                      key={kode}
                      type="button"
                      onClick={() => setJenisFormasi(kode)}
                      className={`rounded-2xl border p-4 text-left transition ${
                        aktif
                          ? "border-blue-600 bg-blue-50/80 ring-2 ring-blue-100"
                          : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50/60"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-extrabold text-slate-950">
                          {aturan.nama_kategori}
                        </p>
                        {aktif && (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-700" />
                        )}
                      </div>
                      <p className="mt-1 font-mono text-xs text-slate-600 font-numeric">
                        {aturan.mode_evaluasi === "per_subtes"
                          ? `Ambang Batas: TWK ${aturan.ambang_batas_subtes.TWK} • TIU ${aturan.ambang_batas_subtes.TIU} • TKP ${aturan.ambang_batas_subtes.TKP}`
                          : `Kumulatif ≥ ${aturan.ambang_batas_kumulatif} • TIU ≥ ${aturan.ambang_batas_tiu}`}
                      </p>
                    </button>
                  );
                })}
              </div>

              {jenisFormasi === "disabilitas" && (
                <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50/90 p-4">
                  <input
                    type="checkbox"
                    checked={disabilitasSensorikNetra}
                    onChange={(e) =>
                      setDisabilitasSensorikNetra(e.target.checked)
                    }
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600"
                  />
                  <div>
                    <p className="text-sm font-bold text-blue-950">
                      Penyandang Disabilitas Sensorik Netra
                    </p>
                    <p className="mt-0.5 text-xs text-blue-800">
                      Sesuai regulasi BKN/Kepmenpan-RB 321/2024, durasi ujian
                      otomatis diperpanjang menjadi 130 menit.
                    </p>
                  </div>
                </label>
              )}
            </div>

            {/* Ringkasan Aturan & Tombol Mulai */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile-lg">
              <div>
                <h2 className="text-base font-extrabold text-slate-950">
                  2. Ringkasan Parameter Ujian
                </h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <dt className="text-slate-500">Formasi</dt>
                    <dd className="text-right font-bold text-slate-900">
                      {aturanDipilih.nama_kategori}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <dt className="text-slate-500">Total Soal</dt>
                    <dd className="font-mono text-xs font-bold text-slate-900 font-numeric sm:text-sm">
                      {daftarSoal.length} Butir (30 TWK + 35 TIU + 45 TKP)
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <dt className="text-slate-500">Durasi Resmi</dt>
                    <dd className="font-mono font-extrabold text-blue-700 font-numeric">
                      {durasiUjianMenit} Menit
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Draf Tersimpan</dt>
                    <dd className="font-mono font-semibold text-slate-700 font-numeric">
                      {jumlahTerjawab} / {daftarSoal.length} terjawab
                    </dd>
                  </div>
                </dl>

                {jumlahTerjawab > 0 && (
                  <button
                    type="button"
                    onClick={resetDrafLokal}
                    className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-100"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>
                      Kosongkan Draf Jawaban Tersimpan ({jumlahTerjawab} butir)
                    </span>
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={mulaiUjianSekarang}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 px-6 py-4 text-sm font-extrabold text-white shadow-sm transition hover:bg-blue-800 active:scale-[0.99]"
              >
                <span>Mulai Simulasi CAT SKD (110 Soal)</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ===========================================================================
  // RENDER STAGE 2: UJIAN CAT BERJALAN
  // ===========================================================================
  if (tahap === "ujian" && soalAktif) {
    const jawabanAktif = jawabanPeserta[soalAktif.id];
    const isRagu = Boolean(daftarRaguRagu[soalAktif.id]);
    const waktuKritis = sisaDetik <= 300;
    const persenProgresUjian = Math.round(
      (jumlahTerjawab / Math.max(1, daftarSoal.length)) * 100
    );

    return (
      <div className="min-h-screen bg-slate-100 text-slate-900">
        {/* Sticky Bar Kokpit CAT */}
        <header className="sticky top-0 z-30 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-slate-950 px-2.5 py-1 font-mono text-xs font-extrabold tracking-wider text-white">
                CAT BKN MODE
              </span>
              <div>
                <p className="text-sm font-extrabold text-slate-950">
                  {infoPaket?.judul || "Simulasi SKD CPNS"}
                </p>
                <p className="font-mono text-xs text-slate-500 font-numeric">
                  Terjawab: <strong className="text-slate-900">{jumlahTerjawab}</strong> /{" "}
                  {daftarSoal.length} • Ragu-ragu:{" "}
                  <strong className="text-amber-700">{jumlahRaguRagu}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-mono text-sm font-extrabold font-numeric ${
                  waktuKritis
                    ? "border-rose-300 bg-rose-50 text-rose-700"
                    : "border-slate-200 bg-slate-50 text-slate-950"
                }`}
              >
                <Clock
                  className={`h-4 w-4 ${
                    waktuKritis ? "text-rose-600" : "text-blue-700"
                  }`}
                />
                <span>{formatDetikKeJamMenitDetik(sisaDetik)}</span>
              </div>
              <button
                type="button"
                onClick={() => setKonfirmasiKumpul(true)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-extrabold text-white shadow-sm transition hover:bg-emerald-700 sm:text-sm"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Selesai &amp; Kumpulkan</span>
              </button>
            </div>
          </div>
          {/* Bilah Progres Pengerjaan */}
          <div className="h-1 w-full bg-slate-100">
            <div
              className="h-full bg-blue-600 transition-all duration-200"
              style={{ width: `${persenProgresUjian}%` }}
            />
          </div>
        </header>

        {pesanErrorSubmit && (
          <div className="mx-auto mt-4 max-w-7xl px-4">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800">
              {pesanErrorSubmit}
            </div>
          </div>
        )}

        {/* Modal Konfirmasi Pengumpulan */}
        {konfirmasiKumpul && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-tactile-lg sm:p-7">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-extrabold text-slate-950">
                Konfirmasi Kumpulkan Jawaban
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Anda telah menjawab{" "}
                <strong className="font-mono text-slate-900 font-numeric">
                  {jumlahTerjawab} dari {daftarSoal.length} soal
                </strong>{" "}
                ({daftarSoal.length - jumlahTerjawab} soal masih kosong,{" "}
                {jumlahRaguRagu} soal ditandai ragu-ragu).
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Setelah dikumpulkan, sistem akan menilai skor secara resmi dan
                menampilkan pembahasan lengkap untuk seluruh 110 soal.
              </p>
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setKonfirmasiKumpul(false)}
                  disabled={sedangMengirim}
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  Lanjutkan Ujian
                </button>
                <button
                  type="button"
                  onClick={() => void kumpulkanUjianKeServer()}
                  disabled={sedangMengirim}
                  className="flex-1 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 disabled:opacity-60"
                >
                  {sedangMengirim ? "Menilai..." : "Ya, Kumpulkan"}
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-12">
          {/* Kolom Soal Aktif */}
          <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile lg:col-span-8 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-blue-700 px-3 py-1 font-mono text-xs font-extrabold text-white font-numeric">
                  Soal No. {soalAktif.nomor_urut}
                </span>
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-800">
                  {soalAktif.category} — {soalAktif.sub_topic}
                </span>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase text-slate-500">
                Tingkat: {soalAktif.difficulty}
              </span>
            </div>

            <div className="mt-6 whitespace-pre-line text-base leading-relaxed text-slate-900">
              {soalAktif.question_text}
            </div>

            {soalAktif.image_url && (
              <div className="mt-4">
                <img
                  src={soalAktif.image_url}
                  alt={`Ilustrasi soal nomor ${soalAktif.nomor_urut}`}
                  className="max-h-72 rounded-xl border border-slate-200 object-contain"
                />
              </div>
            )}

            <div className="mt-6 space-y-3">
              {soalAktif.options.map((opsi) => {
                const terpilih = jawabanAktif === opsi.kunci;
                return (
                  <button
                    key={opsi.kunci}
                    type="button"
                    onClick={() => pilihJawabanSoal(soalAktif.id, opsi.kunci)}
                    className={`group flex w-full items-start gap-3.5 rounded-2xl border p-4 text-left transition ${
                      terpilih
                        ? "border-blue-600 bg-blue-50/80 ring-2 ring-blue-100"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50/70"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-extrabold transition ${
                        terpilih
                          ? "bg-blue-700 text-white"
                          : "border border-slate-200 bg-slate-100 text-slate-700 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700"
                      }`}
                    >
                      {opsi.kunci}
                    </span>
                    <span className="pt-0.5 text-sm leading-relaxed text-slate-800">
                      {opsi.teks}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Kontrol Navigasi Bawah */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
              <button
                type="button"
                disabled={indeksSoalAktif === 0}
                onClick={() =>
                  setIndeksSoalAktif((idx) => Math.max(0, idx - 1))
                }
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 sm:text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Sebelumnya</span>
              </button>

              <button
                type="button"
                onClick={() => toggleRaguRaguSoal(soalAktif.id)}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-xs font-bold transition sm:text-sm ${
                  isRagu
                    ? "border-amber-400 bg-amber-100 text-amber-950"
                    : "border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100"
                }`}
              >
                <Flag className="h-3.5 w-3.5" />
                <span>
                  {isRagu ? "Ditandai Ragu-Ragu" : "Tandai Ragu-Ragu"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (indeksSoalAktif < daftarSoal.length - 1) {
                    setIndeksSoalAktif((idx) => idx + 1);
                  } else {
                    setKonfirmasiKumpul(true);
                  }
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-700 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-800 sm:text-sm"
              >
                <span>
                  {indeksSoalAktif < daftarSoal.length - 1
                    ? "Selanjutnya"
                    : "Tinjau & Kumpulkan"}
                </span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </section>

          {/* Kolom Navigator 110 Nomor */}
          <aside className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-tactile lg:col-span-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-extrabold text-slate-950">
                Peta Nomor Soal (110)
              </h2>
              <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs font-bold text-slate-700 font-numeric">
                {jumlahTerjawab}/110
              </span>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-1.5 rounded-xl bg-slate-100 p-1">
              {(["SEMUA", "TWK", "TIU", "TKP"] as FilterNavigator[]).map(
                (tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setFilterNavigator(tab)}
                    className={`rounded-lg py-1.5 text-[11px] font-extrabold transition ${
                      filterNavigator === tab
                        ? "bg-slate-900 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>

            <div className="mt-4 grid max-h-[380px] grid-cols-6 gap-1.5 overflow-y-auto pr-1 sm:grid-cols-8 lg:grid-cols-6">
              {daftarNavigatorTersaring.map(({ soal, index }) => {
                const aktif = index === indeksSoalAktif;
                const sudahDijawab = Boolean(jawabanPeserta[soal.id]);
                const ragu = Boolean(daftarRaguRagu[soal.id]);

                let warnaKelas =
                  "border-slate-200 bg-white text-slate-700 hover:bg-slate-50";
                if (ragu) {
                  warnaKelas =
                    "border-amber-400 bg-amber-100 text-amber-900 font-bold";
                } else if (sudahDijawab) {
                  warnaKelas =
                    "border-blue-700 bg-blue-700 text-white font-bold";
                }

                return (
                  <button
                    key={soal.id}
                    type="button"
                    onClick={() => setIndeksSoalAktif(index)}
                    className={`flex h-9 items-center justify-center rounded-lg border font-mono text-xs transition font-numeric ${warnaKelas} ${
                      aktif ? "ring-2 ring-slate-950 ring-offset-1" : ""
                    }`}
                  >
                    {soal.nomor_urut}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-100 pt-3 text-[11px] font-medium text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-blue-700" /> Dijawab
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-3 w-3 rounded border border-amber-400 bg-amber-100" />{" "}
                Ragu-ragu
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-3 w-3 rounded border border-slate-300 bg-white" />{" "}
                Kosong
              </span>
            </div>
          </aside>
        </main>
      </div>
    );
  }

  // ===========================================================================
  // RENDER STAGE 3: HASIL EVALUASI & 110 PEMBAHASAN LENGKAP
  // ===========================================================================
  if (tahap === "hasil" && hasilSubmit) {
    const { evaluasi, hasil_skor, peta_kelemahan, tersimpan_di_basis_data } =
      hasilSubmit;
    const targetLatihan = {
      kategori: (peta_kelemahan.tiga_prioritas[0]?.kategori ||
        "TIU") as KategoriSubtesSKD,
      subTopik:
        peta_kelemahan.tiga_prioritas[0]?.subTopik ||
        "Kemampuan Numerik - Deret Angka",
    };

    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <NavbarPeserta />
        <main className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6">
          {/* Spanduk Status Kelulusan */}
          <section
            className={`rounded-3xl border p-6 shadow-tactile-lg sm:p-8 ${
              evaluasi.lulusAmbangBatas
                ? "border-emerald-200 bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/50"
                : "border-rose-200 bg-gradient-to-br from-rose-50/90 via-white to-rose-50/50"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider ${
                      evaluasi.lulusAmbangBatas
                        ? "bg-emerald-600 text-white"
                        : "bg-rose-600 text-white"
                    }`}
                  >
                    {evaluasi.statusKelulusan}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    {tersimpan_di_basis_data && (
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    )}
                    <span>
                      {tersimpan_di_basis_data
                        ? "Tersimpan ke Riwayat Dasbor"
                        : "Mode Tamu (Masuk untuk menyimpan riwayat)"}
                    </span>
                  </span>
                </div>
                <h1 className="mt-3 font-mono text-2xl font-extrabold text-slate-950 font-numeric sm:text-4xl">
                  Skor Total: {hasil_skor.skorTotal} /{" "}
                  {evaluasi.skorMaksimalKumulatif}
                </h1>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {evaluasi.ringkasanEvaluasi}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={mulaiUlangSimulasi}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-100"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Ulangi Simulasi</span>
                </button>
                <Link
                  href="/simulasi/skb"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800"
                >
                  <span>Lanjut Modul SKB &amp; Wawancara</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Rincian Kartu Sub-tes */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  kode: "TWK",
                  nama: "Tes Wawasan Kebangsaan",
                  skor: hasil_skor.skorSubtes.TWK,
                  maks: 150,
                  warna: "bg-blue-600",
                },
                {
                  kode: "TIU",
                  nama: "Tes Intelegensia Umum",
                  skor: hasil_skor.skorSubtes.TIU,
                  maks: 175,
                  warna: "bg-indigo-600",
                },
                {
                  kode: "TKP",
                  nama: "Tes Karakteristik Pribadi",
                  skor: hasil_skor.skorSubtes.TKP,
                  maks: 225,
                  warna: "bg-emerald-600",
                },
              ].map((item) => {
                const persenSubtes = Math.min(
                  100,
                  Math.round((item.skor / item.maks) * 100)
                );
                return (
                  <div
                    key={item.kode}
                    className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                        {item.kode}
                      </p>
                      <span className="font-mono text-[11px] font-bold text-slate-400 font-numeric">
                        {persenSubtes}%
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-2xl font-extrabold text-slate-950 font-numeric">
                      {item.skor}{" "}
                      <span className="text-sm font-medium text-slate-400">
                        / {item.maks}
                      </span>
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600">{item.nama}</p>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${item.warna}`}
                        style={{ width: `${persenSubtes}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Evaluasi Ambang Batas & Peta Kelemahan */}
          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-700" />
                <h2 className="text-base font-extrabold text-slate-950">
                  Rincian Evaluasi Nilai Ambang Batas
                </h2>
              </div>
              <p className="mt-1 font-mono text-xs text-slate-500 font-numeric">
                Formasi: {evaluasi.namaKategoriFormasi} • Terjawab{" "}
                {hasil_skor.jumlahTerjawab} / 110 soal ({hasil_skor.jumlahKosong}{" "}
                kosong)
              </p>
              <div className="mt-4 space-y-3">
                {evaluasi.rincianKriteria.map((kriteria) => {
                  const persen = Math.min(
                    100,
                    Math.round(
                      (kriteria.skorPeserta /
                        Math.max(1, kriteria.ambangBatas)) *
                        100
                    )
                  );
                  return (
                    <div
                      key={kriteria.label}
                      className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
                    >
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-800">{kriteria.label}</span>
                        <span
                          className={`font-mono font-numeric ${
                            kriteria.memenuhiSyarat
                              ? "text-emerald-700"
                              : "text-rose-700"
                          }`}
                        >
                          {kriteria.skorPeserta} / batas {kriteria.ambangBatas}{" "}
                          (
                          {kriteria.selisih >= 0
                            ? `+${kriteria.selisih}`
                            : kriteria.selisih}
                          )
                        </span>
                      </div>
                      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                        <div
                          className={`h-full rounded-full ${
                            kriteria.memenuhiSyarat
                              ? "bg-emerald-500"
                              : "bg-rose-500"
                          }`}
                          style={{ width: `${persen}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <h2 className="text-base font-extrabold text-slate-950">
                  Prioritas Penguatan Sub-Topik
                </h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {peta_kelemahan.rekomendasi_belajar}
              </p>
              <div className="mt-4 space-y-2.5">
                {peta_kelemahan.tiga_prioritas.map((prioritas, urutan) => (
                  <div
                    key={`${prioritas.kategori}-${prioritas.subTopik}`}
                    className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-900">
                        #{urutan + 1} [{prioritas.kategori}]{" "}
                        {prioritas.subTopik}
                      </span>
                    </div>
                    <span className="rounded-md bg-rose-100 px-2 py-0.5 font-mono font-bold text-rose-800 font-numeric">
                      Prioritas #{urutan + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Latihan Perbaikan Adaptif */}
          <PanelLatihanPerbaikanAdaptif
            kategoriAwal={targetLatihan.kategori}
            subTopikAwal={targetLatihan.subTopik}
          />

          {/* Pembahasan Lengkap Seluruh 110 Soal */}
          <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-tactile sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <h2 className="text-xl font-extrabold text-slate-950">
                  Pembahasan Lengkap &amp; Kunci Jawaban (110 Soal)
                </h2>
                <p className="mt-1 font-mono text-xs text-slate-500 font-numeric">
                  Menampilkan {daftarPembahasanTampil.length} dari{" "}
                  {daftarPembahasanTersaring.length} butir soal pada filter{" "}
                  <strong>{filterPembahasan}</strong>.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { id: "SEMUA", label: "Semua (110)" },
                    { id: "TWK", label: "TWK (30)" },
                    { id: "TIU", label: "TIU (35)" },
                    { id: "TKP", label: "TKP (45)" },
                    { id: "SALAH_KOSONG", label: "Perlu Evaluasi (<5)" },
                  ] as { id: FilterPembahasan; label: string }[]
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setFilterPembahasan(tab.id);
                      setHalamanPembahasan(1);
                    }}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
                      filterPembahasan === tab.id
                        ? "bg-blue-700 text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {daftarPembahasanTampil.map((butir) => {
                const jawabanUser = jawabanPeserta[butir.id];
                const opsiUser = butir.options.find(
                  (o) => o.kunci === jawabanUser
                );
                const opsiTertinggi = butir.options.reduce((terbaik, curr) =>
                  curr.skor > terbaik.skor ? curr : terbaik
                );
                const skorUser = opsiUser?.skor ?? 0;

                return (
                  <article
                    key={butir.id}
                    className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs font-extrabold text-slate-950 font-numeric">
                        Soal No. {butir.nomor_urut} — {butir.category} (
                        {butir.sub_topic})
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 font-mono text-xs font-bold font-numeric ${
                          skorUser === 5
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-900"
                        }`}
                      >
                        Jawaban Anda: {jawabanUser || "Kosong"} ({skorUser}{" "}
                        Poin) | Kunci Terbaik: {opsiTertinggi.kunci} (
                        {opsiTertinggi.skor} Poin)
                      </span>
                    </div>

                    <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-900">
                      {butir.question_text}
                    </p>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {butir.options.map((opsi) => {
                        const dipilihUser = jawabanUser === opsi.kunci;
                        const kunciTerbaik =
                          opsi.skor === opsiTertinggi.skor && opsi.skor > 0;
                        return (
                          <div
                            key={opsi.kunci}
                            className={`rounded-xl border px-3.5 py-2.5 text-xs ${
                              kunciTerbaik
                                ? "border-emerald-300 bg-emerald-50 font-semibold text-emerald-950"
                                : dipilihUser
                                  ? "border-rose-300 bg-rose-50 text-rose-900"
                                  : "border-slate-200 bg-white text-slate-700"
                            }`}
                          >
                            <span className="font-mono font-extrabold">
                              {opsi.kunci}.
                            </span>{" "}
                            {opsi.teks}{" "}
                            <span className="ml-1 font-mono font-bold text-slate-500 font-numeric">
                              (+{opsi.skor})
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 rounded-xl border border-blue-100 bg-white p-4 text-xs leading-relaxed text-slate-700">
                      <p className="font-bold text-slate-900">
                        Pembahasan Resmi:
                      </p>
                      <p className="mt-1">{butir.explanation}</p>
                      <p className="mt-2 text-[11px] text-slate-500">
                        Rujukan: {butir.source_reference}
                      </p>
                    </div>

                    <div className="mt-4">
                      <WidgetTutorSokratik
                        soal={butir}
                        jawabanPeserta={jawabanUser}
                      />
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Kontrol Paginasi Pembahasan */}
            {daftarPembahasanTersaring.length >
              JUMLAH_PER_HALAMAN_PEMBAHASAN && (
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
                <div className="flex flex-wrap gap-1.5">
                  {!tampilkanSemuaPembahasan &&
                    Array.from(
                      { length: totalHalamanPembahasan },
                      (_, i) => i + 1
                    ).map((hal) => (
                      <button
                        key={hal}
                        type="button"
                        onClick={() => setHalamanPembahasan(hal)}
                        className={`rounded-lg px-3 py-1.5 font-mono text-xs font-bold font-numeric ${
                          halamanPembahasan === hal
                            ? "bg-slate-900 text-white"
                            : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        Hal {hal}
                      </button>
                    ))}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setTampilkanSemuaPembahasan((prev) => !prev)
                  }
                  className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700 hover:bg-blue-100"
                >
                  {tampilkanSemuaPembahasan
                    ? `Batasi ${JUMLAH_PER_HALAMAN_PEMBAHASAN} per Halaman`
                    : `Tampilkan Semua (${daftarPembahasanTersaring.length} Soal)`}
                </button>
              </div>
            )}
          </section>
        </main>
      </div>
    );
  }

  return null;
}

export default function HalamanSimulasiSKD() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 p-12 text-center text-sm text-slate-600">
          Memuat ruang simulasi CAT SKD...
        </div>
      }
    >
      <KontenSimulasiSKD />
    </Suspense>
  );
}
