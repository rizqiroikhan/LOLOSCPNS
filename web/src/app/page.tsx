import { REGULASI_SKD_321_2024 } from "@/lib/scoring-engine";

export default function HalamanUtama() {
  const daftarFormasi = Object.values(
    REGULASI_SKD_321_2024.passing_grades_json
  );

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10 border-b border-slate-200 pb-6">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
          Fase 1 Aktif — Pondasi Inti SKD Terpasang
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          LOLOS CPNS — Simulasi CAT SKD Berbasis Regulasi Resmi
        </h1>
        <p className="mt-2 text-base text-slate-600">
          Mengacu penuh pada{" "}
          <strong>{REGULASI_SKD_321_2024.title}</strong> ({REGULASI_SKD_321_2024.total_questions}{" "}
          butir soal, waktu pengerjaan {REGULASI_SKD_321_2024.default_duration_minutes}{" "}
          menit reguler / {REGULASI_SKD_321_2024.blind_disability_duration_minutes}{" "}
          menit disabilitas sensorik netra, skor maksimal kumulatif{" "}
          {REGULASI_SKD_321_2024.max_cumulative_score}).
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-slate-800">
          Rincian Sub-Tes Seleksi Kompetensi Dasar (SKD)
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {REGULASI_SKD_321_2024.sections_json.map((subtes) => (
            <div
              key={subtes.kode}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-700">
                  {subtes.kode}
                </span>
                <span className="rounded bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                  {subtes.jumlah_soal} Soal
                </span>
              </div>
              <h3 className="mt-1 font-medium text-slate-900">{subtes.nama}</h3>
              <p className="mt-2 text-xs text-slate-500">
                Skor Maksimal: <strong>{subtes.skor_maksimal}</strong>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-slate-800">
          Tabel Nilai Ambang Batas Resmi (7 Kategori Formasi)
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Kategori Kebutuhan</th>
                <th className="px-4 py-3 font-semibold">Mode Evaluasi</th>
                <th className="px-4 py-3 font-semibold">
                  Syarat Nilai Ambang Batas
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {daftarFormasi.map((aturan) => (
                <tr key={aturan.kode_formasi}>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {aturan.nama_kategori}
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {aturan.mode_evaluasi === "per_subtes"
                      ? "Ambang Batas per Sub-Tes"
                      : "Kumulatif SKD & Sub-Tes TIU"}
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    {aturan.mode_evaluasi === "per_subtes"
                      ? `TWK ≥ ${aturan.ambang_batas_subtes.TWK}, TIU ≥ ${aturan.ambang_batas_subtes.TIU}, TKP ≥ ${aturan.ambang_batas_subtes.TKP}`
                      : `Kumulatif SKD ≥ ${aturan.ambang_batas_kumulatif} dan TIU ≥ ${aturan.ambang_batas_tiu}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
