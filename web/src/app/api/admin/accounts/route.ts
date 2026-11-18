import { NextResponse } from "next/server";
import {
  bacaDaftarAkunAdminPublik,
  hapusAkunAdmin,
  periksaHakAksesManajemenAdmin,
  type PeranAkunAdmin,
  tambahAkunAdmin,
  ubahKataSandiAkunAdmin,
} from "@/lib/admin-auth";
import { periksaAdminSupabaseSSR } from "@/lib/supabase-admin-ssr";

async function validasiSesiTerautentikasi() {
  const hasil = await periksaAdminSupabaseSSR();
  if (!hasil.sah) {
    return {
      sah: false as const,
      statusHttp: hasil.statusHttp,
      alasan: hasil.alasan,
    };
  }

  return {
    sah: true as const,
    sesi: {
      id: hasil.admin.id,
      username: hasil.admin.email,
      peran: hasil.admin.peran,
    },
  };
}

export async function GET() {
  const verifikasi = await validasiSesiTerautentikasi();
  if (!verifikasi.sah) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: verifikasi.alasan,
      },
      { status: verifikasi.statusHttp }
    );
  }
  const sesi = verifikasi.sesi;

  const daftarAkun = await bacaDaftarAkunAdminPublik();
  return NextResponse.json({
    status: "sukses",
    daftar_akun: daftarAkun,
    admin_aktif: sesi,
  });
}

export async function POST(request: Request) {
  const verifikasi = await validasiSesiTerautentikasi();
  if (!verifikasi.sah) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: verifikasi.alasan,
      },
      { status: verifikasi.statusHttp }
    );
  }
  const sesi = verifikasi.sesi;

  const izin = periksaHakAksesManajemenAdmin({
    peranPelaku: sesi.peran,
    idPelaku: sesi.id,
    aksi: "tambah",
  });
  if (!izin.diizinkan) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: izin.pesan || "Hanya Admin Utama yang dapat menambahkan akun admin.",
      },
      { status: 403 }
    );
  }

  try {
    const badan = await request.json();
    const hasil = await tambahAkunAdmin({
      username: String(badan.username || ""),
      kataSandi: String(badan.kata_sandi || badan.password || ""),
      namaLengkap: String(badan.nama_lengkap || ""),
      peran: (badan.peran as PeranAkunAdmin) || "admin",
      dibuatOleh: sesi.username,
    });

    if (!hasil.berhasil) {
      return NextResponse.json(
        { status: "gagal", pesan: hasil.pesan },
        { status: 400 }
      );
    }

    const daftarAkun = await bacaDaftarAkunAdminPublik();
    return NextResponse.json(
      {
        status: "sukses",
        pesan: hasil.pesan,
        akun: hasil.akunBaru,
        daftar_akun: daftarAkun,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: err instanceof Error ? err.message : "Permintaan tambah admin tidak valid.",
      },
      { status: 400 }
    );
  }
}

export async function PATCH(request: Request) {
  const verifikasi = await validasiSesiTerautentikasi();
  if (!verifikasi.sah) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: verifikasi.alasan,
      },
      { status: verifikasi.statusHttp }
    );
  }
  const sesi = verifikasi.sesi;

  try {
    const badan = await request.json();
    const idTarget = String(badan.id || "");
    const izin = periksaHakAksesManajemenAdmin({
      peranPelaku: sesi.peran,
      idPelaku: sesi.id,
      aksi: "ubah_sandi",
      idTarget,
    });
    if (!izin.diizinkan) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan: izin.pesan || "Anda tidak memiliki izin mengubah kata sandi akun admin lain.",
        },
        { status: 403 }
      );
    }

    const hasil = await ubahKataSandiAkunAdmin({
      idTarget,
      kataSandiBaru: String(badan.kata_sandi_baru || ""),
    });

    if (!hasil.berhasil) {
      return NextResponse.json(
        { status: "gagal", pesan: hasil.pesan },
        { status: 400 }
      );
    }

    return NextResponse.json({
      status: "sukses",
      pesan: hasil.pesan,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: err instanceof Error ? err.message : "Permintaan pembaruan sandi tidak valid.",
      },
      { status: 400 }
    );
  }
}

export async function DELETE(request: Request) {
  const verifikasi = await validasiSesiTerautentikasi();
  if (!verifikasi.sah) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: verifikasi.alasan,
      },
      { status: verifikasi.statusHttp }
    );
  }
  const sesi = verifikasi.sesi;

  try {
    const url = new URL(request.url);
    let idTarget = url.searchParams.get("id") || "";
    if (!idTarget) {
      const badan = await request.json().catch(() => ({}));
      idTarget = String((badan as Record<string, unknown>).id || "");
    }

    const izin = periksaHakAksesManajemenAdmin({
      peranPelaku: sesi.peran,
      idPelaku: sesi.id,
      aksi: "hapus",
      idTarget,
    });
    if (!izin.diizinkan) {
      return NextResponse.json(
        {
          status: "gagal",
          pesan: izin.pesan || "Hanya Admin Utama yang dapat menghapus akun admin.",
        },
        { status: 403 }
      );
    }

    const hasil = await hapusAkunAdmin({
      idTarget,
      idPelaku: sesi.id,
    });

    if (!hasil.berhasil) {
      return NextResponse.json(
        { status: "gagal", pesan: hasil.pesan },
        { status: 400 }
      );
    }

    const daftarAkun = await bacaDaftarAkunAdminPublik();
    return NextResponse.json({
      status: "sukses",
      pesan: hasil.pesan,
      daftar_akun: daftarAkun,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: err instanceof Error ? err.message : "Permintaan hapus akun admin gagal.",
      },
      { status: 400 }
    );
  }
}
