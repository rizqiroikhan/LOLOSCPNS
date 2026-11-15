import { NextResponse } from "next/server";
import { bangunBankSoalSimulasi110 } from "@/lib/cat-question-bank";
import {
  evaluasiKelulusanSKD,
  hitungSkorDariJawaban,
} from "@/lib/scoring-engine";
import { buatKlienSupabaseServer } from "@/lib/supabase";
import type { JenisFormasiSKD, PetaJawabanPeserta } from "@/types/database";

export async function POST(request: Request) {
  try {
    const badan = await request.json();
    const jenisFormasi: JenisFormasiSKD = badan.formasi_type || "umum";
    const disabilitasSensorikNetra: boolean = Boolean(badan.is_sensory_blind);
    const jawabanPeserta: PetaJawabanPeserta = badan.answers_json || {};
    const packageId: string | null = badan.package_id || null;
    const userId: string =
      badan.user_id || "00000000-0000-4000-8000-000000000001";

    const daftarSoal = bangunBankSoalSimulasi110();
    const hasilSkor = hitungSkorDariJawaban(daftarSoal, jawabanPeserta);
    const evaluasi = evaluasiKelulusanSKD({
      skorSubtes: hasilSkor.skorSubtes,
      jenisFormasi,
      disabilitasSensorikNetra,
    });

    let tersimpanDiBasisData = false;
    try {
      const supabase = buatKlienSupabaseServer();
      const { error } = await supabase.from("tryout_attempts").insert({
        user_id: userId,
        package_id: packageId,
        stage: "SKD",
        formasi_type: jenisFormasi,
        is_sensory_blind: disabilitasSensorikNetra,
        answers_json: jawabanPeserta,
        section_scores_json: hasilSkor.skorSubtes,
        total_score: hasilSkor.skorTotal,
        is_passed: evaluasi.lulusAmbangBatas,
        ai_diagnostic_summary: evaluasi.ringkasanEvaluasi,
        finished_at: new Date().toISOString(),
      });

      if (!error) {
        tersimpanDiBasisData = true;
      }
    } catch {
      tersimpanDiBasisData = false;
    }

    return NextResponse.json({
      status: "berhasil",
      pesan: "Hasil simulasi CAT SKD berhasil dihitung secara resmi.",
      tersimpan_di_basis_data: tersimpanDiBasisData,
      hasil_skor: hasilSkor,
      evaluasi,
    });
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal memproses pengumpulan jawaban simulasi: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}
