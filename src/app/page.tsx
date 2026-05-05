import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { HeroSystemVisual } from "@/components/hero-system-visual";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
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
  capabilities,
  caseStudies,
  homeFaqs,
  processSteps,
  proofPoints,
  services,
  siteUrl,
} from "@/lib/site-data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="hero-shell paper-grain overflow-hidden border-b border-border bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-14">
          <ScrollReveal
            direction="left"
            className="editorial-rule flex min-w-0 flex-col justify-center pt-8"
          >
            <Badge variant="accent" className="w-fit">
              AI systems for real business workflows
            </Badge>
            <h1 className="mt-7 max-w-4xl font-serif text-4xl font-bold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
              Turn messy operations into useful AI-powered systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Onyx AI Studio builds AI integrations, automation workflows,
              modern web applications, and SEO content systems that make
              practical business work easier to search, route, and run.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request a fit review
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">View case studies</Link>
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal
            delay={120}
            direction="right"
            className="hidden min-w-0 items-center lg:flex"
          >
            <HeroSystemVisual />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <ScrollReveal>
            <dl className="grid gap-4 border-b border-border pb-8 sm:grid-cols-3">
            {proofPoints.map((proof) => (
              <div key={proof.label} className="border-l-2 border-amber pl-4">
                <dt className="font-mono text-2xl font-bold text-primary">
                  {proof.value}
                </dt>
                <dd className="mt-1 text-sm leading-5 text-muted-foreground">
                  {proof.label}
                </dd>
              </div>
            ))}
            </dl>
          </ScrollReveal>
        </div>
        <ScrollReveal className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="interactive-card glass-card group rounded-lg border border-border bg-card/82 p-5 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon
                  aria-hidden="true"
                  className="size-6 text-accent transition-colors group-hover:text-primary"
                />
                <h2 className="mt-5 font-serif text-2xl font-bold">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {service.summary}
                </p>
              </Link>
            );
          })}
        </ScrollReveal>
      </section>

      <section className="border-b border-border bg-muted/70">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Before and after"
              title="The work is not to add AI. The work is to make the operation clearer."
              description="The site architecture follows a transformation pattern: messy data, slow handoffs, or thin content become focused systems with visible guardrails."
            />
          </ScrollReveal>
          <ScrollReveal className="mt-10 grid gap-5 lg:grid-cols-3" delay={80}>
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Card key={step.title} className="glass-card bg-card/84">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-4">
                      <Icon aria-hidden="true" className="size-6 text-accent" />
                      <span className="font-mono text-sm font-bold text-amber">
                        0{index + 1}
                      </span>
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.body}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <ScrollReveal direction="left">
              <SectionHeading
                eyebrow="Services"
                title="Four service silos, one operating-system mindset."
                description="Each service page is structured for buyers, search engines, and AI answer systems: clear definitions, outcomes, deliverables, related proof, and FAQs."
              />
            </ScrollReveal>
            <ScrollReveal
              className="grid gap-4 sm:grid-cols-2"
              delay={120}
              direction="right"
            >
              {services.map((service) => (
                <Card key={service.slug} className="interactive-card glass-card bg-card/84">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link">
                      <Link href={`/services/${service.slug}`}>
                        Explore {service.title}
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Case studies"
              title="Proof points across AI, web, product, and SEO systems."
              description="Portfolio content stays brand-forward and avoids private personal details."
            />
            <Button asChild variant="outline">
              <Link href="/case-studies">All case studies</Link>
            </Button>
          </ScrollReveal>
          <ScrollReveal className="mt-10 grid gap-6 lg:grid-cols-2" delay={100}>
            {caseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                className="interactive-card glass-card group overflow-hidden rounded-lg border border-border bg-background/84 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Image
                  src={caseStudy.image}
                  alt={`${caseStudy.title} visual system diagram`}
                  width={920}
                  height={520}
                  className="h-auto w-full border-b border-border bg-muted"
                />
                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
                    {caseStudy.label}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-bold">
                    {caseStudy.title}
                  </h3>
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
                </div>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <ScrollReveal direction="left">
            <SectionHeading
              eyebrow="Capabilities"
              title="Useful systems are made of small, verifiable parts."
              description="The common thread is not one technology. It is clear data, clear interfaces, and a workflow that survives real use."
            />
          </ScrollReveal>
          <ScrollReveal
            className="grid gap-3 sm:grid-cols-2"
            delay={120}
            direction="right"
          >
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="glass-card flex min-h-14 items-center gap-3 rounded-md border border-border bg-card/84 px-4"
                >
                  <Icon aria-hidden="true" className="size-5 text-accent" />
                  <span className="text-sm font-semibold">
                    {capability.title}
                  </span>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-muted/70">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <ScrollReveal direction="left" className="editorial-rule pt-8">
            <SectionHeading
              eyebrow="About the studio"
              title="Founder-led without making the founder the product."
              description="The public brand keeps attention on systems, proof, and delivery quality. Private background notes stay private."
            />
            <ul className="mt-8 space-y-4 text-sm leading-6 text-muted-foreground">
              {[
                "Small enough to map the workflow carefully.",
                "Technical enough to ship real Next.js, AI, and SEO foundations.",
                "Conservative enough to say when AI is not the right answer.",
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
          </ScrollReveal>
          <ScrollReveal
            delay={120}
            direction="right"
            className="glass-panel rounded-lg border border-border bg-card/84 p-6 shadow-sm"
          >
            <h2 className="font-serif text-3xl font-bold">
              Bring one messy workflow.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              The fit review is built for specificity: what is slow, what data
              is messy, what users need to do, and what result would justify a
              build.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Workflow and data map",
                "AI vs automation recommendation",
                "Practical build path",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
            <Button asChild className="mt-6">
              <Link href="/contact">Request a fit review</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Questions"
              title="Clear answers for buyers and AI search systems."
            />
          </ScrollReveal>
          <ScrollReveal className="mt-8 grid gap-4" delay={80}>
            {homeFaqs.map((faq) => (
              <div
                key={faq.question}
                className="glass-card rounded-lg border border-border bg-card/84 p-5"
              >
                <h2 className="font-serif text-2xl font-bold">{faq.question}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
