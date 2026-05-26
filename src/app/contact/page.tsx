import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { absoluteUrl, breadcrumbSchema, founderLinkedInUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Request an AI Operations Review",
  description:
    "Request an AI Operations Review for reception, website assistance, lead capture, scheduling, internal documents, and business data workflows.",
  alternates: {
    canonical: "/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Onyx AI Studio",
  url: absoluteUrl("/contact"),
  description:
    "Request an AI Operations Review for a custom AI business operations integration.",
  sameAs: [founderLinkedInUrl],
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <JsonLd data={breadcrumbs} />
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div className="editorial-rule pt-8">
            <SectionHeading
              eyebrow="AI Operations Review"
              titleAs="h1"
              title="Request a review of your call, lead, scheduling, document, and follow-up workflows."
              description="The first step is understanding the operation before recommending an AI receptionist, website assistant, internal assistant, Supabase data layer, or workflow automation."
            />
            <ul className="mt-8 space-y-4 text-sm leading-6 text-muted-foreground">
              {[
                "Good fits: missed calls, lead capture gaps, scheduling friction, internal document search, and follow-up problems.",
                "Weak fits: vague AI experiments, unsupported scraped data, or requests to replace all staff judgment.",
                "Expected next step: a practical recommendation with implementation, management, and separate platform usage costs clearly stated.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg border border-border bg-background p-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">
                What you get after the Review
              </p>
              <h2 className="mt-3 font-serif text-2xl font-bold">
                A concrete next-step package, not a generic sales call.
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {[
                  "Your submission is reviewed within one business day.",
                  "You receive a workflow map, first-system recommendation, and source-material checklist.",
                  "Strong-fit projects move to a 30-45 minute review call or async workflow review.",
                  "If the project is not ready, the reply gives a cleanup or readiness next step instead of forcing a build pitch.",
                  "Your details are used to evaluate fit and plan the next step; they are not sold or added to bulk outreach.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 rounded-lg border border-border bg-background p-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Founder profile
              </p>
              <h2 className="mt-3 font-serif text-2xl font-bold">
                Barry Beaubien
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Stone fabrication operator and AI systems builder focused on
                practical business operations, lead capture, data structure,
                and managed implementation.
              </p>
              <Link
                className="mt-4 inline-flex text-sm font-bold text-primary underline-offset-4 hover:underline"
                href={founderLinkedInUrl}
                rel="noreferrer"
                target="_blank"
              >
                View LinkedIn profile
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
