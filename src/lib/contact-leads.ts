export type ContactLead = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  industry: string;
  locations: string;
  callVolume: string;
  mainProblem: string;
  assistantScope: string;
  notes: string;
};

export type ContactLeadMetadata = {
  userAgent?: string | null;
  referrer?: string | null;
  landingPage?: string | null;
  utmSource?: string | null;
  utmCampaign?: string | null;
  receivedAt?: Date;
};

export type ContactLeadRecord = {
  source: "onyx_ai_studio_contact_form";
  name: string;
  business_name: string;
  email: string;
  phone: string | null;
  website: string | null;
  industry: string;
  locations: string;
  call_volume: string;
  main_problem: string;
  assistant_scope: string;
  notes: string;
  user_agent: string | null;
  referrer: string | null;
  status: "new";
  lead_source: "website";
  campaign: "ai_operations_review";
  landing_page: string;
  utm_source: string | null;
  utm_campaign: string | null;
  owner: "Barry Beaubien";
  lead_score: number;
  priority: "low" | "standard" | "high";
  pipeline_status: "new";
  next_action: string;
  next_action_due_at: string;
  last_contacted_at: null;
  booked_at: null;
  proposal_sent_at: null;
  closed_at: null;
  closed_outcome: null;
  lost_reason: null;
  estimated_value: null;
  review_type: "ai_operations_review";
  notification_status: "pending";
};

export type ContactLeadPipelineRow = {
  id: string;
  created_at: string;
  business_name: string;
  name: string;
  email: string;
  website: string | null;
  main_problem: string;
  priority: "low" | "standard" | "high";
  pipeline_status: string;
  next_action: string;
  next_action_due_at: string;
  notification_status: string;
  lead_score: number;
  owner: string;
};

type SaveContactLeadOptions = {
  env?: Record<string, string | undefined>;
  fetch?: typeof fetch;
};

const contactLeadPipelineFields = [
  "id",
  "created_at",
  "business_name",
  "name",
  "email",
  "website",
  "main_problem",
  "priority",
  "pipeline_status",
  "next_action",
  "next_action_due_at",
  "notification_status",
  "lead_score",
  "owner",
].join(",");

function clean(value: string | null | undefined) {
  const trimmed = typeof value === "string" ? value.trim() : "";
  return trimmed.length > 0 ? trimmed : null;
}

function requiredText(value: string) {
  return clean(value) ?? "";
}

function addBusinessDays(date: Date, businessDays: number) {
  const result = new Date(date);
  let remaining = businessDays;

  while (remaining > 0) {
    result.setUTCDate(result.getUTCDate() + 1);
    const day = result.getUTCDay();

    if (day !== 0 && day !== 6) {
      remaining -= 1;
    }
  }

  return result;
}

function scoreLead(lead: ContactLead) {
  let score = 50;

  if (clean(lead.website)) {
    score += 10;
  }

  if (["missed-calls", "lead-capture", "scheduling"].includes(lead.mainProblem)) {
    score += 10;
  }

  if (clean(lead.phone)) {
    score += 5;
  }

  return Math.min(score, 100);
}

function priorityForScore(score: number): ContactLeadRecord["priority"] {
  if (score >= 70) {
    return "high";
  }

  if (score < 45) {
    return "low";
  }

  return "standard";
}

function getSupabaseRestUrl(env: Record<string, string | undefined>) {
  const explicitRestUrl = clean(env.SUPABASE_REST_URL);

  if (explicitRestUrl) {
    return explicitRestUrl.replace(/\/$/, "");
  }

  const supabaseUrl = clean(env.SUPABASE_URL);

  if (!supabaseUrl) {
    return null;
  }

  return `${supabaseUrl.replace(/\/$/, "")}/rest/v1`;
}

export function buildContactLeadRecord(
  lead: ContactLead,
  metadata: ContactLeadMetadata = {},
): ContactLeadRecord {
  const leadScore = scoreLead(lead);
  const dueAt = addBusinessDays(metadata.receivedAt ?? new Date(), 1);

  return {
    source: "onyx_ai_studio_contact_form",
    name: requiredText(lead.name),
    business_name: requiredText(lead.businessName),
    email: requiredText(lead.email),
    phone: clean(lead.phone),
    website: clean(lead.website),
    industry: requiredText(lead.industry),
    locations: requiredText(lead.locations),
    call_volume: requiredText(lead.callVolume),
    main_problem: requiredText(lead.mainProblem),
    assistant_scope: requiredText(lead.assistantScope),
    notes: requiredText(lead.notes),
    user_agent: clean(metadata.userAgent),
    referrer: clean(metadata.referrer),
    status: "new",
    lead_source: "website",
    campaign: "ai_operations_review",
    landing_page: clean(metadata.landingPage) ?? "/contact",
    utm_source: clean(metadata.utmSource),
    utm_campaign: clean(metadata.utmCampaign),
    owner: "Barry Beaubien",
    lead_score: leadScore,
    priority: priorityForScore(leadScore),
    pipeline_status: "new",
    next_action: "Review submission and reply with fit/scheduling next step",
    next_action_due_at: dueAt.toISOString(),
    last_contacted_at: null,
    booked_at: null,
    proposal_sent_at: null,
    closed_at: null,
    closed_outcome: null,
    lost_reason: null,
    estimated_value: null,
    review_type: "ai_operations_review",
    notification_status: "pending",
  };
}

export async function saveContactLead(
  lead: ContactLeadRecord,
  options: SaveContactLeadOptions = {},
) {
  const env = options.env ?? process.env;
  const fetchImpl = options.fetch ?? fetch;
  const restUrl = getSupabaseRestUrl(env);
  const secretKey = clean(env.SUPABASE_SECRET_KEY);

  if (!restUrl || !secretKey) {
    throw new Error("Supabase lead persistence is not configured");
  }

  const response = await fetchImpl(`${restUrl}/onyx_contact_leads`, {
    method: "POST",
    headers: {
      apikey: secretKey,
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    throw new Error(`Supabase lead insert failed: ${response.status} ${await response.text()}`);
  }

  const result = (await response.json()) as Array<{ id?: string }> | null;
  return result?.[0] ?? null;
}

export async function listContactLeads(options: SaveContactLeadOptions = {}) {
  const env = options.env ?? process.env;
  const fetchImpl = options.fetch ?? fetch;
  const restUrl = getSupabaseRestUrl(env);
  const secretKey = clean(env.SUPABASE_SECRET_KEY);

  if (!restUrl || !secretKey) {
    throw new Error("Supabase lead persistence is not configured");
  }

  const params = new URLSearchParams({
    select: contactLeadPipelineFields,
    order: "next_action_due_at.asc",
  });

  const response = await fetchImpl(`${restUrl}/onyx_contact_leads?${params}`, {
    method: "GET",
    headers: {
      apikey: secretKey,
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Supabase lead list failed: ${response.status} ${await response.text()}`);
  }

  return (await response.json()) as ContactLeadPipelineRow[];
}

export async function updateContactLeadNotificationStatus(
  id: string,
  notificationStatus: "sent" | "failed",
  options: SaveContactLeadOptions = {},
) {
  const env = options.env ?? process.env;
  const fetchImpl = options.fetch ?? fetch;
  const restUrl = getSupabaseRestUrl(env);
  const secretKey = clean(env.SUPABASE_SECRET_KEY);
  const leadId = clean(id);

  if (!restUrl || !secretKey) {
    throw new Error("Supabase lead persistence is not configured");
  }

  if (!leadId) {
    throw new Error("Supabase lead id is required for notification status update");
  }

  const response = await fetchImpl(
    `${restUrl}/onyx_contact_leads?id=eq.${encodeURIComponent(leadId)}`,
    {
      method: "PATCH",
      headers: {
        apikey: secretKey,
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ notification_status: notificationStatus }),
    },
  );

  if (!response.ok) {
    throw new Error(
      `Supabase lead notification update failed: ${response.status} ${await response.text()}`,
    );
  }
}
