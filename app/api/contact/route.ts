import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const form = await req.formData(); const payload: Record<string, any> = {};
  form.forEach((v, k) => (payload[k] = v)); console.log("New enquiry:", payload);
  return NextResponse.json({ ok: true });
}
