import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const transporter = nodemailer.createTransport({
      host: process.env.INFOMANIAK_SMTP_HOST,
      port: Number(process.env.INFOMANIAK_SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.INFOMANIAK_EMAIL,
        pass: process.env.INFOMANIAK_TOKEN,
      },
    });

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

    await transporter.sendMail({
      from: `"Onyx AI Studio" <${process.env.INFOMANIAK_EMAIL}>`,
      replyTo: lead.email,
      to: process.env.INFOMANIAK_EMAIL,
      subject: `AI Operations Review: ${lead.businessName} (${lead.mainProblem})`,
      text: `New AI Operations Review request\n\n${text}`,
      html: `
        <h2>New AI Operations Review Request</h2>
        ${htmlRows}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
