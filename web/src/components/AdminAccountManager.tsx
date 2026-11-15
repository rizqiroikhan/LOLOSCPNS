"use client";

import React, { useEffect, useState } from "react";

export interface AkunAdminPublikClient {
  id: string;
  username: string;
  nama_lengkap: string;
  peran: "admin_utama" | "admin";
  dibuat_oleh: string;
  created_at: string;
}

export default function AdminAccountManager({
  idAdminAktif,
  peranAdminAktif = "admin",
}: {
  idAdminAktif: string;
  peranAdminAktif?: "admin_utama" | "admin";
}) {
  const adalahAdminUtama = peranAdminAktif === "admin_utama";
  const [daftarAkun, setDaftarAkun] = useState<AkunAdminPublikClient[]>([]);
  const [sedangMemuat, setSedangMemuat] = useState<boolean>(true);
  const [pesanSukses, setPesanSukses] = useState<string | null>(null);
  const [pesanGalat, setPesanGalat] = useState<string | null>(null);

  // Form tambah admin baru
  const [usernameBaru, setUsernameBaru] = useState<string>("");
  const [namaLengkapBaru, setNamaLengkapBaru] = useState<string>("");
  const [peranBaru, setPeranBaru] = useState<"admin" | "admin_utama">("admin");
  const [kataSandiBaru, setKataSandiBaru] = useState<string>("");
  const [konfirmasiSandi, setKonfirmasiSandi] = useState<string>("");
  const [tampilkanSandi, setTampilkanSandi] = useState<boolean>(false);
  const [sedangMenyimpan, setSedangMenyimpan] = useState<boolean>(false);

  // State konfirmasi hapus & ubah sandi per akun
  const [idKonfirmasiHapus, setIdKonfirmasiHapus] = useState<string | null>(
    null
  );
  const [idUbahSandi, setIdUbahSandi] = useState<string | null>(null);
  const [nilaiSandiReset, setNilaiSandiReset] = useState<string>("");

  async function muatDaftarAkun() {
    setSedangMemuat(true);
    try {
      const res = await fetch("/api/admin/accounts", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || data.status === "gagal") {
        throw new Error(data.pesan || "Gagal memuat daftar akun admin.");
      }
      setDaftarAkun(data.daftar_akun || []);
    } catch (galat) {
      setPesanGalat(
        galat instanceof Error ? galat.message : "Gagal memuat daftar akun."
      );
    } finally {
      setSedangMemuat(false);
    }
  }

  useEffect(() => {
    muatDaftarAkun();
  }, []);

  async function tanganiTambahAkun(e: React.FormEvent) {
    e.preventDefault();
    setPesanSukses(null);
    setPesanGalat(null);

    if (kataSandiBaru !== konfirmasiSandi) {
      setPesanGalat("Kata sandi dan konfirmasi kata sandi tidak sama.");
      return;
    }

    setSedangMenyimpan(true);
    try {
      const res = await fetch("/api/admin/accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: usernameBaru,
          nama_lengkap: namaLengkapBaru,
          peran: peranBaru,
          kata_sandi: kataSandiBaru,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.status === "gagal") {
        throw new Error(data.pesan || "Gagal menambahkan akun admin.");
      }

      setDaftarAkun(data.daftar_akun || []);
      setPesanSukses(data.pesan);
      setUsernameBaru("");
      setNamaLengkapBaru("");
      setKataSandiBaru("");
      setKonfirmasiSandi("");
    } catch (galat) {
      setPesanGalat(
        galat instanceof Error ? galat.message : "Gagal menambahkan akun."
      );
    } finally {
      setSedangMenyimpan(false);
    }
  }

  async function tanganiHapusAkun(idTarget: string) {
    setPesanSukses(null);
    setPesanGalat(null);
    setSedangMenyimpan(true);

    try {
      const res = await fetch(
        `/api/admin/accounts?id=${encodeURIComponent(idTarget)}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok || data.status === "gagal") {
        throw new Error(data.pesan || "Gagal menghapus akun admin.");
      }

      setDaftarAkun(data.daftar_akun || []);
      setPesanSukses(data.pesan);
      setIdKonfirmasiHapus(null);
    } catch (galat) {
      setPesanGalat(
        galat instanceof Error ? galat.message : "Gagal menghapus akun."
      );
    } finally {
      setSedangMenyimpan(false);
    }
  }

  async function tanganiSimpanSandiBaru(idTarget: string) {
    setPesanSukses(null);
    setPesanGalat(null);
    setSedangMenyimpan(true);

    try {
      const res = await fetch("/api/admin/accounts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: idTarget,
          kata_sandi_baru: nilaiSandiReset,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.status === "gagal") {
        throw new Error(data.pesan || "Gagal memperbarui kata sandi.");
      }

      setPesanSukses(data.pesan);
      setIdUbahSandi(null);
      setNilaiSandiReset("");
    } catch (galat) {
      setPesanGalat(
        galat instanceof Error ? galat.message : "Gagal memperbarui sandi."
      );
    } finally {
      setSedangMenyimpan(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-5">
        <h2 className="text-lg font-extrabold text-slate-900">
          Manajemen Akun Admin (Tambah & Hapus Admin 1, Admin 2, dst.)
        </h2>
        <p className="mt-1 text-sm text-slate-700">
          Tambahkan akun administrator baru beserta username dan kata sandinya,
          perbarui kata sandi, atau hapus akun admin yang sudah tidak aktif.
          Akun yang baru dibuat dapat langsung digunakan untuk login ke Menu
          Admin.
        </p>
      </div>

      {pesanSukses && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-900">
          ✓ {pesanSukses}
        </div>
      )}

      {pesanGalat && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-900">
          ⚠ {pesanGalat}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-12">
        {/* KOLOM KIRI: FORM TAMBAH AKUN ADMIN */}
        <section className="lg:col-span-5">
          {!adalahAdminUtama ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
              <h3 className="text-base font-bold text-amber-950">
                Hak Akses Pengelola Terbatas
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-amber-900">
                Anda masuk sebagai <strong>Admin Kurator</strong>. Penambahan
                admin baru, penghapusan akun, dan pembaruan kata sandi milik
                pengelola lain hanya dapat dilakukan oleh{" "}
                <strong>Admin Utama</strong>. Anda tetap dapat memperbarui kata
                sandi akun Anda sendiri pada panel sebelah kanan.
              </p>
            </div>
          ) : (
            <form
              onSubmit={tanganiTambahAkun}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
            <h3 className="text-base font-bold text-slate-900">
              Tambah Akun Admin Baru
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Contoh username: <code className="font-mono">admin1</code>,{" "}
              <code className="font-mono">admin2</code>,{" "}
              <code className="font-mono">admin3</code>.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">
                  Username Admin
                </label>
                <input
                  type="text"
                  required
                  value={usernameBaru}
                  onChange={(e) => setUsernameBaru(e.target.value)}
                  placeholder="Contoh: admin1"
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">
                  Nama Lengkap / Label Admin
                </label>
                <input
                  type="text"
                  value={namaLengkapBaru}
                  onChange={(e) => setNamaLengkapBaru(e.target.value)}
                  placeholder="Contoh: Admin 1 (Kurator TWK)"
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">
                  Peran Akses
                </label>
                <select
                  value={peranBaru}
                  onChange={(e) =>
                    setPeranBaru(e.target.value as "admin" | "admin_utama")
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900"
                >
                  <option value="admin">Admin Kurator</option>
                  <option value="admin_utama">Administrator Utama</option>
                </select>
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">
                    Kata Sandi (Min. 6 Karakter)
                  </label>
                  <button
                    type="button"
                    onClick={() => setTampilkanSandi((s) => !s)}
                    className="text-xs font-semibold text-blue-700 hover:underline"
                  >
                    {tampilkanSandi ? "Sembunyikan" : "Tampilkan"}
                  </button>
                </div>
                <input
                  type={tampilkanSandi ? "text" : "password"}
                  required
                  minLength={6}
                  value={kataSandiBaru}
                  onChange={(e) => setKataSandiBaru(e.target.value)}
                  placeholder="Masukkan kata sandi baru"
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type={tampilkanSandi ? "text" : "password"}
                  required
                  minLength={6}
                  value={konfirmasiSandi}
                  onChange={(e) => setKonfirmasiSandi(e.target.value)}
                  placeholder="Ulangi kata sandi"
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sedangMenyimpan}
              className="mt-6 w-full rounded-xl bg-blue-700 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 disabled:opacity-50"
            >
              {sedangMenyimpan
                ? "Sedang Menyimpan Akun..."
                : "+ Tambah Akun Admin"}
            </button>
          </form>
          )}
        </section>

        {/* KOLOM KANAN: DAFTAR AKUN ADMIN TERDAFTAR */}
        <section className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Daftar Akun Admin Terdaftar
                </h3>
                <p className="text-xs text-slate-500">
                  Total {daftarAkun.length} akun administrator aktif
                </p>
              </div>
              <button
                type="button"
                onClick={muatDaftarAkun}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Muat Ulang
              </button>
            </div>

            {sedangMemuat ? (
              <p className="py-8 text-center text-sm text-slate-500">
                Memuat daftar akun admin...
              </p>
            ) : daftarAkun.length === 0 ? (
              <p className="py-8 text-center text-sm text-slate-500">
                Belum ada akun admin yang terdaftar.
              </p>
            ) : (
              <div className="space-y-3">
                {daftarAkun.map((akun, indeks) => {
                  const sedangDipakaiLogin = akun.id === idAdminAktif;
                  const satuSatunyaAkun = daftarAkun.length <= 1;
                  const bolehUbahSandi = adalahAdminUtama || sedangDipakaiLogin;
                  const tidakBolehHapus =
                    !adalahAdminUtama || sedangDipakaiLogin || satuSatunyaAkun;

                  return (
                    <div
                      key={akun.id}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded bg-slate-200 px-2 py-0.5 text-xs font-bold text-slate-800">
                              #{indeks + 1}
                            </span>
                            <span className="font-mono text-sm font-extrabold text-slate-900">
                              {akun.username}
                            </span>
                            <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[11px] font-bold text-blue-800">
                              {akun.peran === "admin_utama"
                                ? "Administrator Utama"
                                : "Admin Kurator"}
                            </span>
                            {sedangDipakaiLogin && (
                              <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                                Sedang Login
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-xs font-semibold text-slate-700">
                            {akun.nama_lengkap}
                          </p>
                          <p className="mt-0.5 text-[11px] text-slate-500">
                            Dibuat oleh: {akun.dibuat_oleh} •{" "}
                            {new Date(akun.created_at).toLocaleString("id-ID")}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          {bolehUbahSandi && (
                            <button
                              type="button"
                              onClick={() => {
                                setIdUbahSandi(
                                  idUbahSandi === akun.id ? null : akun.id
                                );
                                setNilaiSandiReset("");
                                setIdKonfirmasiHapus(null);
                              }}
                              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                            >
                              Ubah Sandi
                            </button>
                          )}

                          {!tidakBolehHapus ? (
                            idKonfirmasiHapus === akun.id ? (
                              <div className="flex items-center gap-1.5">
                                <button
                                  type="button"
                                  disabled={sedangMenyimpan}
                                  onClick={() => tanganiHapusAkun(akun.id)}
                                  className="rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-700"
                                >
                                  Ya, Hapus
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setIdKonfirmasiHapus(null)}
                                  className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                                >
                                  Batal
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                onClick={() => {
                                  setIdKonfirmasiHapus(akun.id);
                                  setIdUbahSandi(null);
                                }}
                                className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-700 hover:bg-rose-100"
                              >
                                Hapus
                              </button>
                            )
                          ) : (
                            <span className="rounded-lg bg-slate-200/80 px-2.5 py-1.5 text-[11px] font-medium text-slate-500">
                              {sedangDipakaiLogin
                                ? "Akun aktif"
                                : !adalahAdminUtama
                                  ? "Khusus Admin Utama"
                                  : "Akun terakhir"}
                            </span>
                          )}
                        </div>
                      </div>

                      {idUbahSandi === akun.id && (
                        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-3">
                          <input
                            type="password"
                            minLength={6}
                            value={nilaiSandiReset}
                            onChange={(e) => setNilaiSandiReset(e.target.value)}
                            placeholder={`Kata sandi baru untuk ${akun.username} (min. 6 karakter)`}
                            className="min-w-[220px] flex-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900"
                          />
                          <button
                            type="button"
                            disabled={sedangMenyimpan}
                            onClick={() => tanganiSimpanSandiBaru(akun.id)}
                            className="rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-50"
                          >
                            Simpan Sandi
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setIdUbahSandi(null);
                              setNilaiSandiReset("");
                            }}
                            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
                          >
                            Batal
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
