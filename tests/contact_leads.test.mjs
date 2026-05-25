import assert from "node:assert/strict";
import test from "node:test";

import {
  buildContactLeadRecord,
  saveContactLead,
} from "../src/lib/contact-leads.ts";

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
  });

  assert.deepEqual(record, {
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
  });
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
