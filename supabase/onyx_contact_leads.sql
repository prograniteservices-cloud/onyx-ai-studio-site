create table if not exists public.onyx_contact_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null default 'onyx_ai_studio_contact_form',
  name text not null,
  business_name text not null,
  email text not null,
  phone text,
  website text,
  industry text not null,
  locations text not null,
  call_volume text not null,
  main_problem text not null,
  assistant_scope text not null,
  notes text not null,
  user_agent text,
  referrer text,
  status text not null default 'new',
  lead_source text not null default 'website',
  campaign text not null default 'ai_operations_review',
  landing_page text not null default '/contact',
  utm_source text,
  utm_campaign text,
  owner text not null default 'Barry Beaubien',
  lead_score integer not null default 50 check (lead_score >= 0 and lead_score <= 100),
  priority text not null default 'standard' check (priority in ('low', 'standard', 'high')),
  pipeline_status text not null default 'new' check (pipeline_status in ('new', 'reviewing', 'contacted', 'booked', 'proposal', 'closed', 'lost')),
  next_action text not null default 'Review submission and reply with fit/scheduling next step',
  next_action_due_at timestamptz,
  last_contacted_at timestamptz,
  booked_at timestamptz,
  proposal_sent_at timestamptz,
  closed_at timestamptz,
  closed_outcome text check (closed_outcome is null or closed_outcome in ('won', 'lost', 'paused', 'not_fit')),
  lost_reason text,
  estimated_value integer check (estimated_value is null or estimated_value >= 0),
  review_type text not null default 'ai_operations_review',
  notification_status text not null default 'pending' check (notification_status in ('pending', 'sent', 'failed')),
  metadata jsonb not null default '{}'::jsonb
);

alter table public.onyx_contact_leads
  add column if not exists lead_source text not null default 'website',
  add column if not exists campaign text not null default 'ai_operations_review',
  add column if not exists landing_page text not null default '/contact',
  add column if not exists utm_source text,
  add column if not exists utm_campaign text,
  add column if not exists owner text not null default 'Barry Beaubien',
  add column if not exists lead_score integer not null default 50,
  add column if not exists priority text not null default 'standard',
  add column if not exists pipeline_status text not null default 'new',
  add column if not exists next_action text not null default 'Review submission and reply with fit/scheduling next step',
  add column if not exists next_action_due_at timestamptz,
  add column if not exists last_contacted_at timestamptz,
  add column if not exists booked_at timestamptz,
  add column if not exists proposal_sent_at timestamptz,
  add column if not exists closed_at timestamptz,
  add column if not exists closed_outcome text,
  add column if not exists lost_reason text,
  add column if not exists estimated_value integer,
  add column if not exists review_type text not null default 'ai_operations_review',
  add column if not exists notification_status text not null default 'pending';

create index if not exists onyx_contact_leads_created_at_idx
  on public.onyx_contact_leads (created_at desc);

create index if not exists onyx_contact_leads_email_idx
  on public.onyx_contact_leads (email);

create index if not exists onyx_contact_leads_pipeline_status_idx
  on public.onyx_contact_leads (pipeline_status, next_action_due_at);

create index if not exists onyx_contact_leads_campaign_idx
  on public.onyx_contact_leads (lead_source, campaign);

alter table public.onyx_contact_leads enable row level security;

revoke all on table public.onyx_contact_leads from anon;
revoke all on table public.onyx_contact_leads from authenticated;
grant select, insert, update, delete on table public.onyx_contact_leads to service_role;

comment on table public.onyx_contact_leads is
  'Onyx AI Studio website AI Operations Review lead submissions.';
