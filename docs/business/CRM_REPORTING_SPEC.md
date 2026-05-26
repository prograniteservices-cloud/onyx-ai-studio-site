# CRM Reporting Spec

Last updated: 2026-05-26

## Scope

This sprint does not build a CRM UI. The requirement is a reporting-ready lead table shape so Onyx can track review requests, follow-up, and source quality from Supabase or a future admin surface.

## Core Fields

- Contact: name, business name, email, phone, website.
- Intake: industry, locations, call volume, main problem, assistant scope, notes.
- Attribution: lead source, campaign, landing page, UTM source, UTM campaign.
- Pipeline: owner, lead score, priority, pipeline status, next action, next action due date.
- Milestones: last contacted, booked, proposal sent, closed.
- Close-out: closed outcome, lost reason, estimated value, review type.
- Delivery signal: notification status.

## Reporting Questions

- How many review requests arrived by source and campaign?
- How many leads were contacted within one business day?
- Which leads booked a review call?
- Which submissions moved to proposal?
- Which source creates the highest-quality opportunities?
- How many saved leads had email notification failures?

## Status Definitions

`pipeline_status` should be one of `new`, `reviewing`, `contacted`, `booked`, `proposal`, `closed`, or `lost`.

`notification_status` should be one of `pending`, `sent`, or `failed`.

## Future UI Notes

A future CRM view should filter by status, priority, next-action due date, campaign, and notification status. It should not expose server secrets or raw credential files.
