import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroSystemVisual } from "@/components/hero-system-visual";
import { absoluteUrl, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "AI Business System",
  description:
    "AI business operations integration services for reception, website assistance, lead capture, scheduling, internal assistants, guardrails, and data workflows.",
  alternates: {
    canonical: "/services",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Onyx AI Studio AI Business System",
  url: absoluteUrl("/services"),
  hasPart: services.map((service) => ({
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={collectionSchema} />
      <section className="border-b border-border bg-card">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="AI business operations integration, organized into the pieces companies actually use."
            description="The flagship system connects reception, website assistance, lead capture, scheduling support, Supabase-backed business data, internal employee assistance, and guardrails."
          />
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.slug} className="bg-card shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <Icon aria-hidden="true" className="size-7 text-accent" />
                    <Badge variant="outline">{service.eyebrow}</Badge>
                  </div>
                  <CardTitle className="text-3xl">{service.title}</CardTitle>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="border-l-2 border-amber pl-3">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="link" className="mt-6">
                    <Link href={`/services/${service.slug}`}>
                      Read service details
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* The Entire Visual System Section */}
        <div className="mx-auto w-full max-w-7xl px-4 pb-32 pt-20 sm:px-6 lg:px-8">
          <HeroSystemVisual />
        </div>
      </section>
    </>
  );
}
