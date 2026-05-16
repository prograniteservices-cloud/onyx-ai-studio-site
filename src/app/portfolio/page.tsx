import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Blocks, FileText } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  absoluteUrl,
  caseStudies,
  portfolioDemoApps,
  portfolioDemoLauncherUrl,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore 20 live Onyx AI Studio SaaS demos plus deeper case studies showing AI operations modules, RAG, guardrails, workflow automation, and business data tools.",
  alternates: {
    canonical: "/portfolio",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Onyx AI Studio Portfolio Hub",
  url: absoluteUrl("/portfolio"),
  description:
    "Portfolio hub for 20 live SaaS demos and four deeper Onyx AI Studio case studies.",
  hasPart: [
    ...portfolioDemoApps.map((app) => ({
      "@type": "SoftwareApplication",
      name: app.title,
      description: app.description,
      applicationCategory: "BusinessApplication",
      url: app.demoUrl,
    })),
    ...caseStudies.map((caseStudy) => ({
      "@type": "Article",
      headline: caseStudy.title,
      description: caseStudy.summary,
      url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
    })),
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={collectionSchema} />
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="20 live SaaS demos plus deeper case studies."
            description="The demo hub shows the smaller product pieces behind the operations system: RAG, grounded answers, support automation, document handling, workflow agents, data fusion, guardrails, and assistant interfaces."
          />
          <div className="glass-panel rounded-lg border border-border bg-background/84 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-5">
              <Blocks aria-hidden="true" className="size-8 text-accent" />
              <Badge variant="outline">Live deployment</Badge>
            </div>
            <h2 className="mt-5 font-serif text-3xl font-bold">
              Demo launcher
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              All 20 SaaS demos run in the separate portfolio deployment. This
              page keeps the main site client-facing while linking directly to
              the live demo directory and each app route.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a
                  href={portfolioDemoLauncherUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open demo directory
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/case-studies">
                  View case studies
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Live SaaS demos"
            title="Real demos that show the pieces behind the operations system."
            description="Each demo links to the live portfolio environment. The main site stores only lightweight public metadata, so the website is not coupled to the demo app at runtime."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {portfolioDemoApps.map((app) => (
              <Card key={app.slug} className="interactive-card bg-card shadow-sm">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <Badge variant="outline">{app.eyebrow}</Badge>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-amber">
                      Demo
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{app.shortTitle}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="px-0">
                    <a href={app.demoUrl} target="_blank" rel="noreferrer">
                      Open live demo
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/70">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.76fr_1.24fr] lg:px-8">
          <div>
            <FileText aria-hidden="true" className="size-8 text-accent" />
            <SectionHeading
              eyebrow="Case studies"
              title="Four deeper proof narratives remain available."
              description="Use the case studies when a visitor needs more context on implementation judgment, product constraints, data handling, and business outcomes."
              className="mt-5"
            />
            <Button asChild className="mt-6">
              <Link href="/case-studies">
                View case studies
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                className="interactive-card rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
                  {caseStudy.label}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-bold">
                  {caseStudy.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {caseStudy.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
