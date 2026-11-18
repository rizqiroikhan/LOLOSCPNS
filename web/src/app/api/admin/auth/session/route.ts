import { NextResponse } from "next/server";
import { periksaAdminSupabaseSSR } from "@/lib/supabase-admin-ssr";

export async function GET() {
  try {
    const hasil = await periksaAdminSupabaseSSR();
    if (!hasil.sah) {
      return NextResponse.json(
        {
          terautentikasi: false,
          sesi: null,
          pesan: hasil.alasan,
        },
        { status: hasil.statusHttp }
      );
    }

    return NextResponse.json({
      terautentikasi: true,
      sesi: {
        id: hasil.admin.id,
        username: hasil.admin.email,
        nama_lengkap: hasil.admin.nama_lengkap,
        peran: hasil.admin.peran,
        dibuat_oleh: "supabase_auth",
        created_at: new Date().toISOString(),
      },
    });
  } catch (err) {
    return NextResponse.json(
      {
        terautentikasi: false,
        sesi: null,
        pesan:
          err instanceof Error
            ? err.message
            : "Gagal memverifikasi sesi admin.",
      },
      { status: 500 }
    );
  }
}
