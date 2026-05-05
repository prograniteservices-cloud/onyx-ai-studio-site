import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  absoluteUrl,
  caseStudies,
  getCaseStudy,
  services,
} from "@/lib/site-data";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: `${caseStudy.title} Case Study`,
    description: caseStudy.summary,
    alternates: {
      canonical: `/case-studies/${caseStudy.slug}`,
    },
    openGraph: {
      title: `${caseStudy.title} Case Study | Onyx AI Studio`,
      description: caseStudy.summary,
      url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
      images: [
        {
          url: caseStudy.image,
          width: 920,
          height: 520,
          alt: `${caseStudy.title} visual system diagram`,
        },
      ],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedServices = services.filter((service) =>
    caseStudy.services.includes(service.slug),
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${caseStudy.title} Case Study`,
    description: caseStudy.summary,
    image: absoluteUrl(caseStudy.image),
    datePublished: "2026-05-04",
    dateModified: "2026-05-04",
    author: {
      "@type": "Organization",
      name: "Onyx AI Studio",
    },
    publisher: {
      "@type": "Organization",
      name: "Onyx AI Studio",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/onyx-logo.svg"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/case-studies/${caseStudy.slug}`),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="editorial-rule pt-8">
            <Badge variant="accent">{caseStudy.label}</Badge>
            <h1 className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {caseStudy.summary}
            </p>
          </div>
          <Image
            src={caseStudy.image}
            alt={`${caseStudy.title} visual system diagram`}
            width={920}
            height={520}
            priority
            className="h-auto w-full rounded-lg border border-border bg-muted"
          />
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          {caseStudy.metrics.map((metric) => (
            <div key={metric.label} className="border-l-2 border-amber pl-4">
              <p className="font-mono text-3xl font-bold text-primary">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-muted/70">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["The Challenge", caseStudy.challenge],
            ["The Solution", caseStudy.solution],
            ["The Result", caseStudy.result],
          ].map(([title, body]) => (
            <article key={title} className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-serif text-3xl font-bold">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading
            eyebrow="Stack and service links"
            title="The useful details stay connected."
            description="Case studies should feed service pages, and service pages should point back to relevant proof."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-serif text-2xl font-bold">Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {caseStudy.stack.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-serif text-2xl font-bold">Related services</h2>
              <div className="mt-4 grid gap-2">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Next step"
            title="Have a similar workflow that needs structure?"
          />
          <Button asChild className="w-fit">
            <Link href="/contact">
              Request a fit review
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
