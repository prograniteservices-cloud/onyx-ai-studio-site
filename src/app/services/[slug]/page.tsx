import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  absoluteUrl,
  caseStudies,
  getService,
  services,
} from "@/lib/site-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Onyx AI Studio`,
      description: service.summary,
      url: absoluteUrl(`/services/${service.slug}`),
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedCases = caseStudies.filter((caseStudy) =>
    service.relatedCases.includes(caseStudy.slug),
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "Onyx AI Studio",
    },
    url: absoluteUrl(`/services/${service.slug}`),
    description: service.description,
    areaServed: "United States",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Deliverables`,
      itemListElement: service.deliverables.map((deliverable) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: deliverable,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div className="editorial-rule pt-8">
            <Badge variant="accent">{service.eyebrow}</Badge>
            <h1 className="mt-6 font-serif text-5xl font-bold leading-tight text-foreground sm:text-6xl">
              {service.title}
            </h1>
          </div>
          <div className="space-y-6">
            <p className="text-xl leading-8 text-muted-foreground">
              {service.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact">Request a fit review</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/case-studies">View related work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Outcomes"
              title="What this service should make possible"
            />
            <ul className="mt-8 space-y-4">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-sm leading-6">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-accent"
                  />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-serif text-3xl font-bold">Deliverables</h2>
            <ul className="mt-6 grid gap-3">
              {service.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold"
                >
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/70">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Related proof"
            title="Case studies connected to this service"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {relatedCases.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
                  {caseStudy.label}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-bold">
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

      <section className="bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title={`Questions about ${service.title}`} />
          <div className="mt-8 grid gap-4">
            {service.questions.map((item) => (
              <div
                key={item.question}
                className="rounded-lg border border-border bg-card p-5"
              >
                <h2 className="font-serif text-2xl font-bold">
                  {item.question}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-10">
            <Link href="/contact">
              Discuss this service
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
