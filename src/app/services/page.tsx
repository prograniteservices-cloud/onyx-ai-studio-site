import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { absoluteUrl, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI integration, automation workflows, web development, and SEO content systems from Onyx AI Studio.",
  alternates: {
    canonical: "/services",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Onyx AI Studio Services",
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
            title="Build the system before adding more tools."
            description="Each service is structured around the same outcome: clearer workflows, cleaner interfaces, and better source material for both humans and search systems."
          />
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.slug} className="bg-card">
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
      </section>
    </>
  );
}
