import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { absoluteUrl, insights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical insights from Onyx AI Studio on AI business operations, reception, lead capture, internal assistants, guardrails, and data handling.",
  alternates: {
    canonical: "/insights",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Onyx AI Studio Insights",
  url: absoluteUrl("/insights"),
  blogPost: insights.map((insight) => ({
    "@type": "BlogPosting",
    headline: insight.title,
    description: insight.description,
    url: absoluteUrl(`/insights/${insight.slug}`),
    datePublished: insight.date,
  })),
};

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={collectionSchema} />
      <section className="border-b border-border bg-card">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Insights"
            title="Practical thinking for AI reception, lead capture, internal assistants, and guardrails."
            description="Insights now support the flagship AI operations offer: company knowledge, data handling, safe document use, workflow automation, and service-business implementation."
          />
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:px-8">
          {insights.map((insight) => (
            <article
              key={insight.slug}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="flex flex-wrap gap-2">
                {insight.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h2 className="mt-5 font-serif text-3xl font-bold">
                {insight.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                {insight.description}
              </p>
              <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-amber">
                {insight.date} / {insight.readingTime}
              </p>
              <Button asChild variant="link" className="mt-6">
                <Link href={`/insights/${insight.slug}`}>
                  Read insight
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
