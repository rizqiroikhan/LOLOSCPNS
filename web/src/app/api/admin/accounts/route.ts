import { NextResponse } from "next/server";
import {
  bacaDaftarAkunAdminPublik,
  ekstrakSesiDariHeaderCookie,
  hapusAkunAdmin,
  type PeranAkunAdmin,
  tambahAkunAdmin,
  ubahKataSandiAkunAdmin,
} from "@/lib/admin-auth";

async function validasiSesiTerautentikasi(request: Request) {
  const sesi = ekstrakSesiDariHeaderCookie(request.headers.get("cookie"));
  if (!sesi) return null;
  const daftar = await bacaDaftarAkunAdminPublik();
  const cocok = daftar.find((a) => a.id === sesi.id);
  return cocok ? sesi : null;
}

export async function GET(request: Request) {
  const sesi = await validasiSesiTerautentikasi(request);
  if (!sesi) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: "Sesi admin tidak valid atau telah berakhir. Silakan masuk kembali.",
      },
      { status: 401 }
    );
  }

  const daftarAkun = await bacaDaftarAkunAdminPublik();
  return NextResponse.json({
    status: "berhasil",
    daftar_akun: daftarAkun,
  });
}

export async function POST(request: Request) {
  const sesi = await validasiSesiTerautentikasi(request);
  if (!sesi) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: "Anda harus masuk ke Menu Admin sebelum menambahkan akun baru.",
      },
      { status: 401 }
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

    const daftarTerbaru = await bacaDaftarAkunAdminPublik();
    return NextResponse.json({
      status: "berhasil",
      pesan: hasil.pesan,
      akun_baru: hasil.akunBaru,
      daftar_akun: daftarTerbaru,
    });
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal menambahkan akun admin: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  const sesi = await validasiSesiTerautentikasi(request);
  if (!sesi) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: "Silakan masuk ke Menu Admin untuk memperbarui kata sandi.",
      },
      { status: 401 }
    );
  }

  try {
    const badan = await request.json();
    const hasil = await ubahKataSandiAkunAdmin({
      idTarget: String(badan.id || ""),
      kataSandiBaru: String(badan.kata_sandi_baru || ""),
    });

    if (!hasil.berhasil) {
      return NextResponse.json(
        { status: "gagal", pesan: hasil.pesan },
        { status: 400 }
      );
    }

    return NextResponse.json({
      status: "berhasil",
      pesan: hasil.pesan,
    });
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal memperbarui kata sandi admin: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const sesi = await validasiSesiTerautentikasi(request);
  if (!sesi) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: "Silakan masuk ke Menu Admin untuk menghapus akun admin.",
      },
      { status: 401 }
    );
  }

  try {
    const url = new URL(request.url);
    let idTarget = url.searchParams.get("id") || "";
    if (!idTarget) {
      const badan = await request.json().catch(() => ({}));
      idTarget = String((badan as Record<string, unknown>).id || "");
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

    const daftarTerbaru = await bacaDaftarAkunAdminPublik();
    return NextResponse.json({
      status: "berhasil",
      pesan: hasil.pesan,
      daftar_akun: daftarTerbaru,
    });
  } catch (galat) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan: `Gagal menghapus akun admin: ${
          galat instanceof Error ? galat.message : "Kesalahan tidak diketahui"
        }`,
      },
      { status: 500 }
    );
  }
}
