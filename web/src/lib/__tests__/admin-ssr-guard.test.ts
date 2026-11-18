import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {
  evaluasiOtorisasiAdminProfil,
  periksaAdminSupabaseSSR,
} from "../supabase-admin-ssr.ts";

describe("Guard Keamanan /admin Berbasis @supabase/ssr & RLS", () => {
  it("evaluasiOtorisasiAdminProfil bersifat fail-closed untuk anonim, null, dan peran 'user'", () => {
    const anon = evaluasiOtorisasiAdminProfil({
      userId: null,
      roleProfil: "admin",
    });
    assert.equal(anon.diizinkan, false);
    assert.equal(anon.statusHttp, 401);

    const kosong = evaluasiOtorisasiAdminProfil({
      userId: "   ",
      roleProfil: "admin",
    });
    assert.equal(kosong.diizinkan, false);
    assert.equal(kosong.statusHttp, 401);

    const userBiasa = evaluasiOtorisasiAdminProfil({
      userId: "user-123",
      roleProfil: "user",
    });
    assert.equal(userBiasa.diizinkan, false);
    assert.equal(userBiasa.statusHttp, 403);

    const tanpaProfil = evaluasiOtorisasiAdminProfil({
      userId: "user-123",
      roleProfil: null,
    });
    assert.equal(tanpaProfil.diizinkan, false);
    assert.equal(tanpaProfil.statusHttp, 403);

    const kapitalSalah = evaluasiOtorisasiAdminProfil({
      userId: "user-123",
      roleProfil: "ADMIN",
    });
    assert.equal(kapitalSalah.diizinkan, false);
    assert.equal(kapitalSalah.statusHttp, 403);

    const adminSah = evaluasiOtorisasiAdminProfil({
      userId: "admin-123",
      roleProfil: "admin",
    });
    assert.equal(adminSah.diizinkan, true);
    assert.equal(adminSah.statusHttp, 200);
  });

  it("periksaAdminSupabaseSSR gagal tertutup (fail-closed) bila kredensial Supabase SSR belum tersedia", async () => {
    const urlLama = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const keyLama = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    try {
      delete process.env.NEXT_PUBLIC_SUPABASE_URL;
      delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      const hasil = await periksaAdminSupabaseSSR();
      assert.equal(hasil.sah, false);
      assert.equal(hasil.statusHttp, 401);
    } finally {
      if (urlLama !== undefined) {
        process.env.NEXT_PUBLIC_SUPABASE_URL = urlLama;
      } else {
        delete process.env.NEXT_PUBLIC_SUPABASE_URL;
      }
      if (keyLama !== undefined) {
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = keyLama;
      } else {
        delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      }
    }
  });

  it("menghapus tautan publik Menu Admin dan mengunci seluruh layout serta endpoint admin", () => {
    const akarWeb = path.resolve(import.meta.dirname, "..", "..");
    const akarRepo = path.resolve(akarWeb, "..", "..");

    const navbar = fs.readFileSync(
      path.join(akarWeb, "components", "NavbarPeserta.tsx"),
      "utf-8"
    );
    assert.equal(navbar.includes("Menu Admin"), false);
    assert.equal(navbar.includes('href="/admin"'), false);

    const adminLayout = fs.readFileSync(
      path.join(akarWeb, "app", "admin", "layout.tsx"),
      "utf-8"
    );
    assert.match(adminLayout, /periksaAdminSupabaseSSR/);
    assert.match(adminLayout, /notFound\(\)/);

    const helperSSR = fs.readFileSync(
      path.join(akarWeb, "lib", "supabase-admin-ssr.ts"),
      "utf-8"
    );
    assert.match(helperSSR, /@supabase\/ssr/);
    assert.match(helperSSR, /auth\.getUser\(\)/);

    const daftarRuteTerlindungi = [
      path.join(akarWeb, "app", "api", "admin", "accounts", "route.ts"),
      path.join(akarWeb, "app", "api", "admin", "auth", "login", "route.ts"),
      path.join(akarWeb, "app", "api", "admin", "auth", "logout", "route.ts"),
      path.join(akarWeb, "app", "api", "admin", "auth", "session", "route.ts"),
      path.join(akarWeb, "app", "api", "ingest", "approve", "route.ts"),
      path.join(akarWeb, "app", "api", "ingest", "manual-batch", "route.ts"),
      path.join(akarWeb, "app", "api", "ingest", "questions", "route.ts"),
      path.join(akarWeb, "app", "api", "ingest", "regulation", "route.ts"),
    ];

    for (const berkasRute of daftarRuteTerlindungi) {
      const isi = fs.readFileSync(berkasRute, "utf-8");
      assert.match(
        isi,
        /periksaAdminSupabaseSSR/,
        `Rute wajib memanggil periksaAdminSupabaseSSR: ${berkasRute}`
      );
    }

    const migrasiSql = fs.readFileSync(
      path.join(
        akarRepo,
        "supabase",
        "migrations",
        "0005_profiles_role_and_admin_rls.sql"
      ),
      "utf-8"
    );
    assert.match(migrasiSql, /public\.profiles/);
    assert.match(migrasiSql, /CHECK \(role IN \('user', 'admin'\)\)/);
    assert.match(migrasiSql, /ON public\.questions/);
    assert.match(migrasiSql, /ON public\.regulations/);
    assert.match(migrasiSql, /ON public\.tryout_packages/);
    assert.match(migrasiSql, /apakah_admin_supabase\(\)/);
  });
});
