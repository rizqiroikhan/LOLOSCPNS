"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { QuestionRow } from "@/types/database";

interface PesanDiskusi {
  pengirim: "peserta" | "tutor";
  teks: string;
}

export default function WidgetTutorSokratik({
  soal,
  jawabanPeserta,
}: {
  soal: QuestionRow;
  jawabanPeserta?: string;
}) {
  const [terbuka, setTerbuka] = useState<boolean>(false);
  const [pertanyaanInput, setPertanyaanInput] = useState<string>("");
  const [sedangMemuat, setSedangMemuat] = useState<boolean>(false);
  const [kuotaTersisa, setKuotaTersisa] = useState<string | null>(null);
  const [kuotaHabisInfo, setKuotaHabisInfo] = useState<{
    butuhMasuk: boolean;
  } | null>(null);
  const [riwayatPesan, setRiwayatPesan] = useState<PesanDiskusi[]>([
    {
      pengirim: "tutor",
      teks: `Halo! Saya Tutor AI Pembimbing LOLOS CPNS. Mari kita bahas soal ${soal.category} (${soal.sub_topic}) ini langkah demi langkah. Bagian mana dari soal atau pilihan jawaban yang ingin Anda pahami lebih dalam?`,
    },
  ]);

  async function kirimPertanyaan(teksPertanyaan?: string) {
    const pesanDikirim = (teksPertanyaan ?? pertanyaanInput).trim();
    if (!pesanDikirim || sedangMemuat) return;

    const riwayatBaru: PesanDiskusi[] = [
      ...riwayatPesan,
      { pengirim: "peserta", teks: pesanDikirim },
    ];
    setRiwayatPesan(riwayatBaru);
    setPertanyaanInput("");
    setSedangMemuat(true);

    try {
      const res = await fetch("/api/tutor/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pertanyaan: pesanDikirim,
          soal,
          jawaban_peserta: jawabanPeserta,
          riwayat_chat: riwayatBaru.map((p) => ({
            role: p.pengirim === "peserta" ? "user" : "assistant",
            content: p.teks,
          })),
        }),
      });

      const data = await res.json();

      if (data?.kuota_ai) {
        const k = data.kuota_ai;
        setKuotaTersisa(
          k.batasHarian >= 100
            ? "Tanpa Batas Harian"
            : `Sisa kuota hari ini: ${k.sisaKuota}/${k.batasHarian}`
        );
      }

      if (res.status === 403 || data.status === "kuota_habis") {
        setKuotaHabisInfo({ butuhMasuk: Boolean(data.butuh_masuk) });
      }

      setRiwayatPesan((sebelumnya) => [
        ...sebelumnya,
        {
          pengirim: "tutor",
          teks:
            data.balasan_tutor ||
            data.pesan ||
            "Mari kita perhatikan kembali kata kunci utama pada soal dan kesesuaiannya dengan kisi-kisi resmi.",
        },
      ]);
    } catch {
      setRiwayatPesan((sebelumnya) => [
        ...sebelumnya,
        {
          pengirim: "tutor",
          teks: "Maaf, terjadi kendala saat menghubungi Tutor AI. Coba perhatikan kembali pembahasan resmi di atas.",
        },
      ]);
    } finally {
      setSedangMemuat(false);
    }
  }

  return (
    <div className="mt-3">
      {!terbuka ? (
        <button
          type="button"
          onClick={() => setTerbuka(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-3.5 py-2 text-xs font-bold text-indigo-800 transition hover:bg-indigo-100"
        >
          <span>💬 Tanya Tutor AI Pembimbing</span>
        </button>
      ) : (
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-indigo-600 px-2.5 py-0.5 text-[11px] font-bold text-white">
                TUTOR AI PEMBIMBING
              </span>
              <span className="text-xs font-medium text-slate-600">
                Siap membimbing langkah demi langkah
              </span>
            </div>
            <button
              type="button"
              onClick={() => setTerbuka(false)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Tutup Diskusi ✕
            </button>
          </div>

          {kuotaHabisInfo && (
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-amber-200 bg-amber-50 p-2.5 text-[11px] text-amber-900">
              <span>Kuota diskusi Tutor AI harian Anda telah habis.</span>
              <div className="flex gap-2">
                {kuotaHabisInfo.butuhMasuk && (
                  <Link
                    href="/masuk"
                    className="rounded bg-white px-2 py-1 font-bold text-slate-800 underline"
                  >
                    Masuk Akun
                  </Link>
                )}
                <Link
                  href="/pembayaran?paket=paket-intensif-skd"
                  className="rounded bg-blue-700 px-2.5 py-1 font-bold text-white"
                >
                  Upgrade Akses →
                </Link>
              </div>
            </div>
          )}

          {/* Riwayat Percakapan Tutor AI */}
          {kuotaTersisa && (
            <div className="mb-2 text-[11px] font-semibold text-indigo-700">
              {kuotaTersisa}
            </div>
          )}
          <div className="mb-3 max-h-64 space-y-2.5 overflow-y-auto pr-1 text-xs sm:text-sm">
            {riwayatPesan.map((pesan, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-3 leading-relaxed ${
                  pesan.pengirim === "peserta"
                    ? "ml-8 bg-blue-600 text-white"
                    : "mr-4 border border-indigo-100 bg-white text-slate-800"
                }`}
              >
                <span className="mb-1 block text-[10px] font-bold uppercase opacity-75">
                  {pesan.pengirim === "peserta"
                    ? "Anda (Peserta)"
                    : "Tutor AI Pembimbing"}
                </span>
                <p className="whitespace-pre-line">{pesan.teks}</p>
              </div>
            ))}
            {sedangMemuat && (
              <div className="rounded-xl border border-indigo-100 bg-white p-3 text-xs italic text-slate-500">
                Tutor AI sedang menyiapkan penjelasan langkah demi langkah untuk Anda...
              </div>
            )}
          </div>

          {/* Tombol Pertanyaan Cepat */}
          <div className="mb-2.5 flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() =>
                kirimPertanyaan("Apa kata kunci utama pada soal ini?")
              }
              className="rounded-md border border-indigo-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              Apa kata kunci soal ini?
            </button>
            <button
              type="button"
              onClick={() =>
                kirimPertanyaan(
                  "Mengapa pilihan jawaban saya belum bernilai maksimal?"
                )
              }
              className="rounded-md border border-indigo-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              Analisis pilihan jawaban saya
            </button>
            <button
              type="button"
              onClick={() =>
                kirimPertanyaan(
                  "Bagaimana cara cepat menyelesaikan tipe soal sub-topik ini?"
                )
              }
              className="rounded-md border border-indigo-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              Strategi cepat sub-topik ini
            </button>
          </div>

          {/* Formulir Input Pesan */}
          <div className="flex gap-2">
            <input
              type="text"
              value={pertanyaanInput}
              onChange={(e) => setPertanyaanInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  kirimPertanyaan();
                }
              }}
              placeholder="Tanyakan langkah penalaran atau konsep yang belum dipahami..."
              className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 sm:text-sm"
            />
            <button
              type="button"
              disabled={sedangMemuat}
              onClick={() => kirimPertanyaan()}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              Kirim
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
