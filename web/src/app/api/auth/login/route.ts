import { NextResponse } from "next/server";
import { periksaBatasLajuPermintaan } from "@/lib/access-control";
import {
  apakahKonfigurasiSupabaseValid,
  buatKlienSupabaseServer,
} from "@/lib/supabase";
import { buatKlienSupabaseSSRRouteHandler } from "@/lib/supabase-admin-ssr";
import {
  daftarPesertaBaru,
  NAMA_COOKIE_SESI_PESERTA,
  type ProfilAkunPesertaPublik,
  verifikasiLoginPeserta,
} from "@/lib/user-auth";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "lokal";
  const laju = periksaBatasLajuPermintaan({
    identitasKlien: `login-peserta:${ip}`,
    batasMaksimal: 15,
    jendelaWaktuDetik: 60,
  });
  if (!laju.diizinkan) {
    return NextResponse.json(
      {
        status: "dibatasi",
        pesan:
          laju.pesanPeringatan ||
          "Terlalu banyak percobaan masuk. Coba beberapa saat lagi.",
      },
      { status: 429 }
    );
  }

  try {
    const badan = await request.json();
    const emailBersih = String(badan.email || "").trim().toLowerCase();
    const kataSandi = String(badan.kata_sandi || badan.password || "");

    const hasilLokal = await verifikasiLoginPeserta({
      email: emailBersih,
      kataSandi,
    });

    const ssr = await buatKlienSupabaseSSRRouteHandler();
    let profilFinal: ProfilAkunPesertaPublik | undefined = hasilLokal.profil;
    let tokenSesiFinal: string | undefined = hasilLokal.tokenSesi;
    let pesanFinal = hasilLokal.pesan;

    if (hasilLokal.berhasil && hasilLokal.profil) {
      if (ssr) {
        const { error: galatLoginSSR } =
          await ssr.supabase.auth.signInWithPassword({
            email: emailBersih,
            password: kataSandi,
          });

        // Akun lama di `user_accounts` yang belum memiliki entri `auth.users` diprovisikan otomatis
        if (galatLoginSSR && apakahKonfigurasiSupabaseValid()) {
          try {
            const supabaseServer = buatKlienSupabaseServer();
            const { error: galatBuat } =
              await supabaseServer.auth.admin.createUser({
                email: emailBersih,
                password: kataSandi,
                email_confirm: true,
                user_metadata: {
                  nama_lengkap: hasilLokal.profil.nama_lengkap,
                },
              });
            if (!galatBuat) {
              await ssr.supabase.auth.signInWithPassword({
                email: emailBersih,
                password: kataSandi,
              });
            }
          } catch {
            // Biarkan sesi peserta tetap berjalan bila penyedia Auth belum siap
          }
        }
      }
    } else if (ssr && emailBersih && kataSandi) {
      // Dukung akun yang dibuat langsung di Supabase Auth Dashboard (mis. akun Admin baru)
      const { data: dataAuth, error: galatAuth } =
        await ssr.supabase.auth.signInWithPassword({
          email: emailBersih,
          password: kataSandi,
        });

      if (!galatAuth && dataAuth.user) {
        const namaMentah = String(
          dataAuth.user.user_metadata?.nama_lengkap ||
            emailBersih.split("@")[0] ||
            "Peserta CPNS"
        ).trim();
        const namaSiap =
          namaMentah.length >= 3 ? namaMentah : `${namaMentah} CPNS`.trim();

        const hasilSinkron = await daftarPesertaBaru({
          email: emailBersih,
          namaLengkap: namaSiap,
          kataSandi,
        });

        if (hasilSinkron.berhasil && hasilSinkron.profil) {
          profilFinal = hasilSinkron.profil;
          tokenSesiFinal = hasilSinkron.tokenSesi;
          pesanFinal = `Berhasil masuk sebagai ${hasilSinkron.profil.nama_lengkap}.`;
        } else {
          profilFinal = {
            id: dataAuth.user.id,
            email: emailBersih,
            nama_lengkap: namaSiap,
            tingkat_langganan: "gratis",
            aktif_hingga: null,
            created_at:
              dataAuth.user.created_at || new Date().toISOString(),
          };
          pesanFinal = `Berhasil masuk sebagai ${namaSiap}.`;
        }
      }
    }

    if (!profilFinal) {
      return NextResponse.json(
        { status: "gagal", pesan: hasilLokal.pesan },
        { status: 401 }
      );
    }

    const respons = NextResponse.json({
      status: "sukses",
      pesan: pesanFinal,
      profil: profilFinal,
    });

    if (ssr) {
      ssr.terapkanCookieKeRespons(respons);
    }

    if (tokenSesiFinal) {
      respons.cookies.set(NAMA_COOKIE_SESI_PESERTA, tokenSesiFinal, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
      });
    }

    return respons;
  } catch (err) {
    return NextResponse.json(
      {
        status: "gagal",
        pesan:
          err instanceof Error ? err.message : "Gagal memproses permintaan masuk.",
      },
      { status: 500 }
    );
  }
}
