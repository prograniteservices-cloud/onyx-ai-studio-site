import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  absoluteUrl,
  breadcrumbSchema,
  founderLinkedInUrl,
  founderName,
  founderPersonId,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Barry Beaubien And Onyx AI Studio",
  description:
    "Founder and entity page for Onyx AI Studio, an AI business operations integration studio focused on practical lead capture, quote intake, reception, and internal knowledge systems.",
  alternates: {
    canonical: "/about",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Onyx AI Studio",
  url: absoluteUrl("/about"),
  mainEntity: {
    "@id": founderPersonId,
    "@type": "Person",
    name: founderName,
    jobTitle: "Founder and AI systems builder",
    sameAs: [founderLinkedInUrl],
    worksFor: {
      "@type": "Organization",
      name: "Onyx AI Studio",
      url: absoluteUrl("/"),
    },
    knowsAbout: [
      "AI business operations",
      "Countertop quote intake",
      "Lead capture systems",
      "Business data structure",
      "Internal knowledge assistants",
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <JsonLd data={breadcrumbs} />
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.76fr_1.24fr] lg:px-8">
          <div className="editorial-rule pt-8">
            <SectionHeading
              eyebrow="About"
              titleAs="h1"
              title="Onyx AI Studio is built around practical business operations."
              description="The studio focuses on AI systems that help businesses handle calls, quote intake, website leads, follow-up, company knowledge, and internal staff support."
            />
          </div>
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              Onyx AI Studio is the AI business operations studio founded by
              Barry Beaubien. The work is intentionally practical: map the
              workflow, clean up the source material, define guardrails, then
              connect the assistant, data layer, and follow-up process around
              the business.
            </p>
            <p>
              GraniteApp now demonstrates both sides of that operating lane:
              role-scoped countertop production from station work through
              full-job QA, and a public estimate flow backed by a 152-material
              catalog, server-owned pricing, and structured lead intake.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact">
                  Request an AI Operations Review
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href={founderLinkedInUrl} target="_blank" rel="noopener noreferrer">
                  View founder LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            [
              "Operations first",
              "The work starts with calls, leads, quote paths, documents, staff questions, and follow-up instead of tool-first AI demos.",
            ],
            [
              "Countertop focus",
              "GraniteApp provides real proof across production operations and structured estimate intake for granite and countertop shops.",
            ],
            [
              "Managed implementation",
              "Onyx designs, tests, connects, and manages the system while clients pay platform usage directly where applicable.",
            ],
          ].map(([title, body]) => (
            <article key={title} className="rounded-lg border border-border bg-card p-6">
              <CheckCircle2 aria-hidden="true" className="size-6 text-accent" />
              <h2 className="mt-4 font-serif text-2xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
