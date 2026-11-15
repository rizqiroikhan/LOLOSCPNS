import { NextResponse } from "next/server";
import { evaluasiAksesPaketSimulasi } from "@/lib/access-control";
import {
  BANK_SOAL_SKB_TERPADU,
  bersihkanKunciJawabanSKB,
  type ButirSoalSKB,
} from "@/lib/skb-question-bank";
import { bacaSesiPesertaDariHeaderCookie } from "@/lib/user-auth";

async function periksaAksesTerpadu(request: Request) {
  const profil = await bacaSesiPesertaDariHeaderCookie(
    request.headers.get("cookie")
  );
  const tingkat = profil?.tingkat_langganan || "gratis";
  const akses = evaluasiAksesPaketSimulasi({
    idPaket: "paket-terpadu-cpns",
    tingkatLangganan: tingkat,
  });

  if (!akses.diizinkan) {
    return {
      diizinkan: false as const,
      butuhMasuk: !profil,
      tingkat,
      pesan:
        akses.pesanAkses ||
        "Modul SKB & Wawancara Jabatan eksklusif bagi pemilik Paket Terpadu SKD + SKB.",
    };
  }

  return { diizinkan: true as const, profil, tingkat };
}

export async function GET(request: Request) {
  const cek = await periksaAksesTerpadu(request);
  if (!cek.diizinkan) {
    return NextResponse.json(
      {
        status: "terkunci",
        butuh_masuk: cek.butuhMasuk,
        tingkat_dimiliki: cek.tingkat,
        pesan: cek.pesan,
        url_upgrade: "/pembayaran?paket=paket-terpadu-cpns",
      },
      { status: 403 }
    );
  }

  return NextResponse.json({
    status: "sukses",
    judul: "Simulasi SKB Substansi ASN & Wawancara Jabatan (Paket Terpadu)",
    total_soal: BANK_SOAL_SKB_TERPADU.length,
    daftar_soal: bersihkanKunciJawabanSKB(BANK_SOAL_SKB_TERPADU),
  });
}

export async function POST(request: Request) {
  const cek = await periksaAksesTerpadu(request);
  if (!cek.diizinkan) {
    return NextResponse.json(
      {
        status: "terkunci",
        butuh_masuk: cek.butuhMasuk,
        tingkat_dimiliki: cek.tingkat,
        pesan: cek.pesan,
        url_upgrade: "/pembayaran?paket=paket-terpadu-cpns",
      },
      { status: 403 }
    );
  }

  try {
    const badan = await request.json();
    const jawaban: Record<string, string> = badan.jawaban || {};

    let jumlahBenar = 0;
    let jumlahKosong = 0;
    const rekapRumpun = new Map<
      ButirSoalSKB["rumpun"],
      { total: number; benar: number }
    >();

    const rincianPembahasan = BANK_SOAL_SKB_TERPADU.map((soal) => {
      const dipilih = (jawaban[soal.id] || "").toUpperCase();
      if (!dipilih) jumlahKosong += 1;
      const benar = dipilih === soal.kunci_benar;
      if (benar) jumlahBenar += 1;

      const statRumpun = rekapRumpun.get(soal.rumpun) || {
        total: 0,
        benar: 0,
      };
      statRumpun.total += 1;
      if (benar) statRumpun.benar += 1;
      rekapRumpun.set(soal.rumpun, statRumpun);

      return {
        ...soal,
        jawaban_peserta: dipilih || null,
        adalah_benar: benar,
      };
    });

    const totalSoal = BANK_SOAL_SKB_TERPADU.length;
    const skorPersen = Math.round((jumlahBenar / totalSoal) * 100);
    const ringkasanRumpun = Array.from(rekapRumpun.entries()).map(
      ([rumpun, data]) => ({
        rumpun,
        benar: data.benar,
        total: data.total,
        persentase: Math.round((data.benar / data.total) * 100),
      })
    );

    return NextResponse.json({
      status: "berhasil",
      ringkasan: {
        total_soal: totalSoal,
        jumlah_benar: jumlahBenar,
        jumlah_salah: totalSoal - jumlahBenar - jumlahKosong,
        jumlah_kosong: jumlahKosong,
        skor_persen: skorPersen,
        predikat:
          skorPersen >= 80
            ? "Sangat Siap SKB"
            : skorPersen >= 65
              ? "Kompeten"
              : "Perlu Pendalaman Regulasi & STAR",
      },
      ringkasan_rumpun: ringkasanRumpun,
      daftar_pembahasan: rincianPembahasan,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan:
          err instanceof Error
            ? err.message
            : "Gagal menilai jawaban latihan SKB & Wawancara.",
      },
      { status: 500 }
    );
  }
}
