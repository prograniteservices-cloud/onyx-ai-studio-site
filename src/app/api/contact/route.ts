import { NextResponse } from "next/server";
import {
  buildContactLeadRecord,
  saveContactLead,
  type ContactLead,
} from "@/lib/contact-leads";

type ReviewRequestPayload = {
  name?: unknown;
  "business-name"?: unknown;
  email?: unknown;
  phone?: unknown;
  website?: unknown;
  industry?: unknown;
  locations?: unknown;
  "call-volume"?: unknown;
  "main-problem"?: unknown;
  "assistant-scope"?: unknown;
  notes?: unknown;
};

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendReviewRequestEmail(lead: ContactLead) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "prograniteservices@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Onyx AI Studio <hello@onyxaistudio.digital>";

  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const rows = [
    ["Name", lead.name],
    ["Business name", lead.businessName],
    ["Email", lead.email],
    ["Phone", lead.phone || "Not provided"],
    ["Website", lead.website || "Not provided"],
    ["Industry", lead.industry],
    ["Number of locations", lead.locations],
    ["Approximate call volume", lead.callVolume],
    ["Main problem", lead.mainProblem],
    ["Assistant scope", lead.assistantScope],
    ["Notes", lead.notes],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value).replace(/\n/g, "<br>")}</p>`,
    )
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: lead.email,
      subject: `AI Operations Review: ${lead.businessName} (${lead.mainProblem})`,
      text: `New AI Operations Review request\n\n${text}`,
      html: `
        <h2>New AI Operations Review Request</h2>
        ${htmlRows}
      `,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend rejected contact email: ${response.status} ${await response.text()}`);
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ReviewRequestPayload;
    const lead = {
      name: asText(payload.name),
      businessName: asText(payload["business-name"]),
      email: asText(payload.email),
      phone: asText(payload.phone),
      website: asText(payload.website),
      industry: asText(payload.industry),
      locations: asText(payload.locations),
      callVolume: asText(payload["call-volume"]),
      mainProblem: asText(payload["main-problem"]),
      assistantScope: asText(payload["assistant-scope"]),
      notes: asText(payload.notes),
    };

    const missingRequiredFields = [
      lead.name,
      lead.businessName,
      lead.email,
      lead.industry,
      lead.locations,
      lead.callVolume,
      lead.mainProblem,
      lead.assistantScope,
      lead.notes,
    ].some((value) => value.length === 0);

    if (missingRequiredFields) {
      return NextResponse.json(
        { error: "Missing required AI Operations Review fields" },
        { status: 400 },
      );
    }

    await saveContactLead(
      buildContactLeadRecord(lead, {
        userAgent: request.headers.get("user-agent"),
        referrer: request.headers.get("referer") ?? request.headers.get("referrer"),
      }),
    );
    await sendReviewRequestEmail(lead);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
