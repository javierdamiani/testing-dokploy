import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.BACKEND_URL || "http://backend:3006";
  const res = await fetch(`${url}/api/health`);
  const data = await res.json();
  return NextResponse.json(data);
}
