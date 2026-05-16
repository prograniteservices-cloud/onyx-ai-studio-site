import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { absoluteUrl, pricingFactors, pricingTiers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Premium implementation and monthly management ranges for AI business operations integration from Onyx AI Studio.",
  alternates: {
    canonical: "/pricing",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Business Operations Integration Pricing",
  serviceType: "AI business operations integration",
  provider: {
    "@type": "Organization",
    name: "Onyx AI Studio",
  },
  url: absoluteUrl("/pricing"),
  description:
    "Custom AI reception, website assistant, lead capture, scheduling, Supabase data layer, internal assistant, and guardrail implementation.",
  offers: pricingTiers.map((tier) => ({
    "@type": "Offer",
    name: tier.name,
    description: `${tier.setup} implementation and ${tier.monthly} management. Client pays Retell and third-party usage directly.`,
  })),
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingSchema} />
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div className="editorial-rule pt-8">
            <SectionHeading
              eyebrow="Investment"
              title="Custom AI business integration, priced like operational infrastructure."
              description="This is not a checkout product or a cheap chatbot setup. Pricing reflects discovery, implementation, integration, guardrails, knowledge structuring, data handling, testing, and monthly optimization."
            />
          </div>
          <div className="rounded-lg border border-border bg-background p-6">
            <h2 className="font-serif text-3xl font-bold">Usage costs are separate.</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Clients pay Retell and any third-party platform usage directly.
              Onyx AI Studio charges for strategy, setup, workflow design,
              assistant behavior, Supabase structuring, guardrails, integration,
              support, and ongoing management.
            </p>
            <Button asChild className="mt-6">
              <Link href="/contact">
                Request an AI Operations Review
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className="bg-card shadow-sm">
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-3xl font-bold text-primary">
                  {tier.setup}
                </p>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {tier.monthly} management
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-5 shrink-0 text-accent"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-muted/70">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <SectionHeading
            eyebrow="Pricing factors"
            title="The final quote depends on operational complexity."
            description="The review determines whether the business needs a focused reception and lead-capture system or a deeper internal assistant and data layer."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {pricingFactors.map((factor) => (
              <div
                key={factor}
                className="rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold"
              >
                {factor}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Next step"
            title="Start with the operation, not a package."
            description="The AI Operations Review looks at calls, website leads, scheduling, internal documents, follow-up, data, and guardrails before recommending a build."
          />
          <Button asChild className="w-fit">
            <Link href="/contact">
              Request an AI Operations Review
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
