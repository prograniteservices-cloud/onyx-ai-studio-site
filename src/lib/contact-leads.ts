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
};

type SaveContactLeadOptions = {
  env?: Record<string, string | undefined>;
  fetch?: typeof fetch;
};

function clean(value: string | null | undefined) {
  const trimmed = typeof value === "string" ? value.trim() : "";
  return trimmed.length > 0 ? trimmed : null;
}

function requiredText(value: string) {
  return clean(value) ?? "";
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
