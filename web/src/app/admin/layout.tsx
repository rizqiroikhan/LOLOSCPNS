import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { periksaAdminSupabaseSSR } from "@/lib/supabase-admin-ssr";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const hasil = await periksaAdminSupabaseSSR();

  if (!hasil.sah) {
    notFound();
  }

  return <>{children}</>;
}
