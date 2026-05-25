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
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists onyx_contact_leads_created_at_idx
  on public.onyx_contact_leads (created_at desc);

create index if not exists onyx_contact_leads_email_idx
  on public.onyx_contact_leads (email);

alter table public.onyx_contact_leads enable row level security;

revoke all on table public.onyx_contact_leads from anon;
revoke all on table public.onyx_contact_leads from authenticated;
grant select, insert, update, delete on table public.onyx_contact_leads to service_role;

comment on table public.onyx_contact_leads is
  'Onyx AI Studio website AI Operations Review lead submissions.';
