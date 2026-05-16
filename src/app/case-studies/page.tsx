import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { absoluteUrl, caseStudies } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio Proof",
  description:
    "Onyx AI Studio portfolio proof across AI operations modules, assistant interfaces, lead capture systems, automation, and business data tools.",
  alternates: {
    canonical: "/case-studies",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Onyx AI Studio Portfolio Proof",
  url: absoluteUrl("/case-studies"),
  hasPart: caseStudies.map((caseStudy) => ({
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.summary,
    url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
  })),
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={collectionSchema} />
      <section className="border-b border-border bg-card">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case studies"
            title="Proof that the studio can build the modules inside an AI business operations system."
            description="Existing projects stay intact and are reframed as proof of data handling, assistant interfaces, workflow automation, lead capture, guardrails, and custom implementation ability."
          />
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          {caseStudies.map((caseStudy) => (
            <article
              key={caseStudy.slug}
              className="overflow-hidden rounded-lg border border-border bg-card"
            >
              <Image
                src={caseStudy.image}
                alt={`${caseStudy.title} visual system diagram`}
                width={920}
                height={520}
                className="h-auto w-full border-b border-border bg-muted"
              />
              <div className="p-6">
                <Badge variant="outline">{caseStudy.label}</Badge>
                <h2 className="mt-4 font-serif text-3xl font-bold">
                  {caseStudy.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {caseStudy.summary}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {caseStudy.metrics.map((metric) => (
                    <div key={metric.label} className="border-l border-border pl-3">
                      <p className="font-mono text-sm font-bold text-primary">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                <Button asChild variant="link" className="mt-6">
                  <Link href={`/case-studies/${caseStudy.slug}`}>
                    Read case study
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
