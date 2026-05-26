import assert from "node:assert/strict";
import test from "node:test";

import {
  buildContactLeadRecord,
  listContactLeads,
  saveContactLead,
  updateContactLeadNotificationStatus,
} from "../src/lib/contact-leads.ts";
import {
  leadSavedEmailFailedResponse,
  leadSavedEmailFailedStatus,
} from "../src/lib/contact-api-responses.ts";

const lead = {
  name: " Barry ",
  businessName: " Onyx AI Studio ",
  email: "barry@example.com",
  phone: "",
  website: "https://onyxaistudio.digital",
  industry: "AI operations",
  locations: "1",
  callVolume: "25-100-week",
  mainProblem: "lead-capture",
  assistantScope: "website-assistant",
  notes: "Needs durable lead capture.",
};

test("buildContactLeadRecord maps contact form fields to Supabase columns", () => {
  const record = buildContactLeadRecord(lead, {
    userAgent: "node-test",
    referrer: "https://onyxaistudio.digital/contact",
    landingPage: "/contact",
    utmSource: "google",
    utmCampaign: "review",
    receivedAt: new Date("2026-05-26T15:00:00.000Z"),
  });

  assert.deepEqual(
    {
      ...record,
      next_action_due_at: "dynamic",
    },
    {
    source: "onyx_ai_studio_contact_form",
    name: "Barry",
    business_name: "Onyx AI Studio",
    email: "barry@example.com",
    phone: null,
    website: "https://onyxaistudio.digital",
    industry: "AI operations",
    locations: "1",
    call_volume: "25-100-week",
    main_problem: "lead-capture",
    assistant_scope: "website-assistant",
    notes: "Needs durable lead capture.",
    user_agent: "node-test",
    referrer: "https://onyxaistudio.digital/contact",
    status: "new",
    lead_source: "website",
    campaign: "ai_operations_review",
    landing_page: "/contact",
    utm_source: "google",
    utm_campaign: "review",
    owner: "Barry Beaubien",
    lead_score: 70,
    priority: "high",
    pipeline_status: "new",
    next_action: "Review submission and reply with fit/scheduling next step",
    next_action_due_at: "dynamic",
    last_contacted_at: null,
    booked_at: null,
    proposal_sent_at: null,
    closed_at: null,
    closed_outcome: null,
    lost_reason: null,
    estimated_value: null,
    review_type: "ai_operations_review",
    notification_status: "pending",
  });
  assert.equal(record.next_action_due_at, "2026-05-27T15:00:00.000Z");
});

test("saveContactLead posts the lead with the server-only Supabase secret key", async () => {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, init });
    return new Response(JSON.stringify([{ id: "lead-id" }]), { status: 201 });
  };

  const result = await saveContactLead(buildContactLeadRecord(lead), {
    env: {
      SUPABASE_REST_URL: "https://example.supabase.co/rest/v1",
      SUPABASE_SECRET_KEY: "server-secret",
    },
    fetch: fetchImpl,
  });

  assert.deepEqual(result, { id: "lead-id" });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://example.supabase.co/rest/v1/onyx_contact_leads");
  assert.equal(calls[0].init.method, "POST");
  assert.equal(calls[0].init.headers.apikey, "server-secret");
  assert.equal(calls[0].init.headers.Authorization, "Bearer server-secret");
  assert.equal(calls[0].init.headers.Prefer, "return=representation");
  assert.equal(JSON.parse(calls[0].init.body).business_name, "Onyx AI Studio");
  assert.equal(JSON.parse(calls[0].init.body).pipeline_status, "new");
  assert.equal(JSON.parse(calls[0].init.body).notification_status, "pending");
});

test("saveContactLead derives the REST URL from SUPABASE_URL when needed", async () => {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, init });
    return new Response("[]", { status: 201 });
  };

  await saveContactLead(buildContactLeadRecord(lead), {
    env: {
      SUPABASE_URL: "https://example.supabase.co",
      SUPABASE_SECRET_KEY: "server-secret",
    },
    fetch: fetchImpl,
  });

  assert.equal(calls[0].url, "https://example.supabase.co/rest/v1/onyx_contact_leads");
});

test("saveContactLead fails closed when Supabase credentials are missing", async () => {
  await assert.rejects(
    saveContactLead(buildContactLeadRecord(lead), {
      env: {},
      fetch: async () => new Response("[]", { status: 201 }),
    }),
    /Supabase lead persistence is not configured/,
  );
});

test("saveContactLead includes Supabase response details on insert failure", async () => {
  await assert.rejects(
    saveContactLead(buildContactLeadRecord(lead), {
      env: {
        SUPABASE_REST_URL: "https://example.supabase.co/rest/v1",
        SUPABASE_SECRET_KEY: "server-secret",
      },
      fetch: async () => new Response("permission denied", { status: 401 }),
    }),
    /Supabase lead insert failed: 401 permission denied/,
  );
});

test("updateContactLeadNotificationStatus patches the saved lead", async () => {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, init });
    return new Response(null, { status: 204 });
  };

  await updateContactLeadNotificationStatus("lead-id", "sent", {
    env: {
      SUPABASE_REST_URL: "https://example.supabase.co/rest/v1",
      SUPABASE_SECRET_KEY: "server-secret",
    },
    fetch: fetchImpl,
  });

  assert.equal(
    calls[0].url,
    "https://example.supabase.co/rest/v1/onyx_contact_leads?id=eq.lead-id",
  );
  assert.equal(calls[0].init.method, "PATCH");
  assert.deepEqual(JSON.parse(calls[0].init.body), {
    notification_status: "sent",
  });
});

test("listContactLeads requests operator pipeline fields with the server-only Supabase secret key", async () => {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, init });
    return new Response(JSON.stringify([
      {
        id: "lead-id",
        created_at: "2026-05-26T12:00:00.000Z",
        business_name: "Onyx AI Studio",
        name: "Barry",
        email: "barry@example.com",
        website: "https://onyxaistudio.digital",
        main_problem: "lead-capture",
        priority: "high",
        pipeline_status: "new",
        next_action: "Review submission",
        next_action_due_at: "2026-05-27T12:00:00.000Z",
        notification_status: "sent",
        lead_score: 70,
        owner: "Barry Beaubien",
      },
    ]), { status: 200 });
  };

  const result = await listContactLeads({
    env: {
      SUPABASE_REST_URL: "https://example.supabase.co/rest/v1",
      SUPABASE_SECRET_KEY: "server-secret",
    },
    fetch: fetchImpl,
  });

  assert.equal(result.length, 1);
  assert.equal(result[0].business_name, "Onyx AI Studio");
  assert.match(calls[0].url, /select=id%2Ccreated_at%2Cbusiness_name%2Cname%2Cemail%2Cwebsite%2Cmain_problem%2Cpriority%2Cpipeline_status%2Cnext_action%2Cnext_action_due_at%2Cnotification_status%2Clead_score%2Cowner/);
  assert.match(calls[0].url, /order=next_action_due_at\.asc/);
  assert.equal(calls[0].init.method, "GET");
  assert.equal(calls[0].init.headers.apikey, "server-secret");
  assert.equal(calls[0].init.headers.Authorization, "Bearer server-secret");
});

test("listContactLeads derives REST URL and fails closed without Supabase credentials", async () => {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, init });
    return new Response("[]", { status: 200 });
  };

  await listContactLeads({
    env: {
      SUPABASE_URL: "https://example.supabase.co",
      SUPABASE_SECRET_KEY: "server-secret",
    },
    fetch: fetchImpl,
  });

  assert.match(calls[0].url, /^https:\/\/example\.supabase\.co\/rest\/v1\/onyx_contact_leads/);

  await assert.rejects(
    listContactLeads({
      env: {},
      fetch: async () => new Response("[]", { status: 200 }),
    }),
    /Supabase lead persistence is not configured/,
  );
});

test("contact API partial success response does not encourage duplicate submissions", () => {
  assert.equal(leadSavedEmailFailedStatus, 202);
  assert.equal(leadSavedEmailFailedResponse.success, true);
  assert.equal(leadSavedEmailFailedResponse.partial, true);
  assert.equal(leadSavedEmailFailedResponse.code, "lead_saved_email_failed");
  assert.match(leadSavedEmailFailedResponse.message, /Do not submit again/);
});
