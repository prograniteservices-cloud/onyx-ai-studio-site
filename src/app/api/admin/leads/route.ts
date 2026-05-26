import { NextResponse } from "next/server";

import { listContactLeads } from "@/lib/contact-leads";

export async function GET() {
  if (!process.env.ADMIN_DASHBOARD_USER || !process.env.ADMIN_DASHBOARD_PASSWORD) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const leads = await listContactLeads();
  return NextResponse.json({ leads });
}
