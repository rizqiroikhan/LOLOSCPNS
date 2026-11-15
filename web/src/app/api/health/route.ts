import { NextResponse } from "next/server";
import { periksaKesehatanLayanan } from "@/lib/health-check";

export const dynamic = "force-dynamic";

export async function GET() {
  const hasil = await periksaKesehatanLayanan();
  return NextResponse.json(hasil.muatan, { status: hasil.statusHttp });
}
