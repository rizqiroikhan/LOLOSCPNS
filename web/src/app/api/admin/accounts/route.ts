import { NextResponse } from "next/server";
import {
  bacaDaftarAkunAdminPublik,
  ekstrakSesiDariHeaderCookie,
  hapusAkunAdmin,
  periksaHakAksesManajemenAdmin,
  type PeranAkunAdmin,
  tambahAkunAdmin,
  ubahKataSandiAkunAdmin,
} from "@/lib/admin-auth";

async function validasiSesiTerautentikasi(request: Request) {
  const sesi = ekstrakSesiDariHeaderCookie(request.headers.get("cookie"));
  if (!sesi) return null;
  const daftar = await bacaDaftarAkunAdminPublik();
  const cocok = daftar.find(
    (a) => a.id === sesi.id || a.username === sesi.username
  );
  if (!cocok) return null;
  return {
    ...sesi,
    id: cocok.id,
    peran: cocok.peran,
  };
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
    status: "sukses",
    daftar_akun: daftarAkun,
    admin_aktif: sesi,
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
