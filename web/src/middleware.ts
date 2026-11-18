import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { dapatkanKredensialPublikSupabase } from "@/lib/supabase-admin-ssr";

export async function middleware(request: NextRequest) {
  const kredensial = dapatkanKredensialPublikSupabase();
  if (!kredensial) {
    return NextResponse.next({ request });
  }

  let respons = NextResponse.next({ request });

  const supabase = createServerClient(kredensial.url, kredensial.anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        respons = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          respons.cookies.set(name, value, options);
        });
      },
    },
  });

  try {
    await supabase.auth.getUser();
  } catch {
    // Tetap teruskan permintaan agar rute publik tidak terganggu bila host Auth sementara tidak terjangkau;
    // rute terlindungi tetap melakukan pemeriksaan fail-closed secara mandiri.
  }

  return respons;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/payment/webhook|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
