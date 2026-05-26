import { notFound } from "next/navigation";

import { listContactLeads } from "@/lib/contact-leads";

export const dynamic = "force-dynamic";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default async function AdminLeadsPage() {
  if (!process.env.ADMIN_DASHBOARD_USER || !process.env.ADMIN_DASHBOARD_PASSWORD) {
    notFound();
  }

  const leads = await listContactLeads();

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Onyx operator view
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold">
              AI Operations Review leads
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Read-only pipeline view sorted by next action due date.
          </p>
        </div>

        <div className="mt-6 overflow-x-auto rounded-lg border border-border bg-card">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-muted/70 text-xs uppercase tracking-[0.12em] text-muted-foreground">
              <tr>
                {[
                  "Business",
                  "Contact",
                  "Website",
                  "Problem",
                  "Priority",
                  "Status",
                  "Next action",
                  "Due",
                  "Notification",
                  "Score",
                  "Owner",
                ].map((heading) => (
                  <th key={heading} className="border-b border-border px-4 py-3">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-border last:border-b-0">
                  <td className="px-4 py-4 font-semibold">{lead.business_name}</td>
                  <td className="px-4 py-4">
                    <div>{lead.name}</div>
                    <a
                      href={`mailto:${lead.email}`}
                      className="text-xs font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      {lead.email}
                    </a>
                  </td>
                  <td className="px-4 py-4">
                    {lead.website ? (
                      <a
                        href={lead.website}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        Website
                      </a>
                    ) : (
                      <span className="text-muted-foreground">None</span>
                    )}
                  </td>
                  <td className="px-4 py-4">{lead.main_problem}</td>
                  <td className="px-4 py-4 capitalize">{lead.priority}</td>
                  <td className="px-4 py-4">{lead.pipeline_status}</td>
                  <td className="max-w-xs px-4 py-4">{lead.next_action}</td>
                  <td className="px-4 py-4">{formatDate(lead.next_action_due_at)}</td>
                  <td className="px-4 py-4">{lead.notification_status}</td>
                  <td className="px-4 py-4">{lead.lead_score}</td>
                  <td className="px-4 py-4">{lead.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {leads.length === 0 ? (
          <p className="mt-6 rounded-lg border border-border bg-card p-5 text-sm text-muted-foreground">
            No Review leads are currently available.
          </p>
        ) : null}
      </div>
    </main>
  );
}
