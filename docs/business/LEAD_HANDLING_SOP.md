# Lead Handling SOP

Last updated: 2026-05-26

## Purpose

Every AI Operations Review submission needs an owner, status, next action, and follow-up deadline. The website is not finished when it saves a lead; the business has to move the lead toward a review call, proposal, or clean close-out.

## Intake Source

Primary source: `public.onyx_contact_leads` in Supabase, populated by `/api/contact`.

## Default Handling

- `pipeline_status`: `new`
- `priority`: `standard`
- `owner`: `Barry Beaubien`
- `next_action`: review submission and reply with fit/scheduling next step
- `next_action_due_at`: target one business day after creation
- `notification_status`: `sent`, `failed`, or `pending`

## Daily Review

1. Check new leads.
2. Confirm the website, business name, main problem, and notes are enough to understand the request.
3. Assign priority:
   - `high`: urgent operational pain, good-fit service business, clear website/workflow.
   - `standard`: plausible fit, normal follow-up.
   - `low`: incomplete, weak fit, or unclear business context.
4. Set `next_action` and `next_action_due_at`.
5. Send a personal response or book a review call.

## Weekly Pipeline Review

1. Review all new leads.
2. Assign or confirm the owner.
3. Update the next action for each active lead.
4. Check overdue next actions.
5. Mark contacted, booked, proposal, closed, or lost states as they happen.
6. Confirm failed notification rows were followed up manually.

## Pipeline Statuses

- `new`: received but not reviewed.
- `reviewing`: submission is being evaluated.
- `contacted`: first human response sent.
- `booked`: review call or next step scheduled.
- `proposal`: proposal or scoped recommendation sent.
- `closed`: outcome recorded.
- `lost`: not a fit, no response, or declined.

## Follow-Up Cadence

- First response target: one business day.
- If no reply, follow up after 2-3 business days.
- If still no reply, one final follow-up after 5-7 business days.
- Close as lost with a reason if the prospect remains unresponsive.

## Close-Out

Use `closed_outcome` for `won`, `lost`, `paused`, or `not_fit`. Use `lost_reason` for short operational notes without storing sensitive private information.
