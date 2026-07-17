import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { LatentGraphHero } from "@/components/latent-graph-hero";
import { LogoMark } from "@/components/logo-mark";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
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
  insights,
  operationalProblems,
  pricingTiers,
  processSteps,
  services,
  siteUrl,
  systemFlow,
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

const primaryServices = services.slice(0, 4);
const priorityInsights = insights.slice(0, 5);

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="hero-shell relative overflow-hidden border-b border-border bg-card">
        <div className="absolute inset-0 z-0 opacity-45 sm:opacity-80">
          <LatentGraphHero />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(92svh-4rem)] w-full max-w-7xl items-end gap-10 px-4 pb-10 pt-18 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="min-w-0 max-w-4xl pb-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent">
              AI Business Operations Integration
            </p>
            <div className="mt-5 flex items-center gap-4">
              <LogoMark showText={false} className="shrink-0" />
              <h1 className="font-serif text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                Onyx AI Studio
              </h1>
            </div>
            <p className="mt-5 max-w-full font-serif text-[2.1rem] font-bold leading-[1.08] text-primary sm:text-5xl lg:text-6xl">
              AI business solutions.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Onyx AI Studio builds AI business systems that answer calls,
              support website visitors, capture leads, organize customer data,
              assist with scheduling, and give teams answers from their own
              company files.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request an AI Operations Review
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services/ai-integration">View the System</Link>
              </Button>
            </div>
            <dl className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ["Beachhead", "Granite quote intake"],
                ["Review output", "Workflow map"],
                ["Lead path", "Saved + followed up"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border-l-2 border-amber bg-card/70 px-3 py-2"
                >
                  <dt className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-foreground">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="glass-panel mb-2 rounded-lg border border-border bg-card/84 p-5 shadow-sm">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber">
              Managed system
            </p>
            <div className="mt-5 grid gap-3">
              {[
                "Retell powers phone and website conversation handling.",
                "Supabase supports leads, customer records, summaries, documents, and knowledge access.",
                "Onyx designs the strategy, integration, guardrails, workflows, and monthly optimization.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-border bg-background/84 px-4 py-3 text-sm font-semibold leading-6"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">
              Client usage costs for Retell and third-party tools are paid
              directly by the client. Onyx charges for implementation and
              management.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <ScrollReveal>
            <dl className="grid gap-4 border-b border-border pb-8 sm:grid-cols-3">
              {pricingTiers.map((tier) => (
                <div key={tier.name} className="border-l-2 border-amber pl-4">
                  <dt className="font-mono text-2xl font-bold text-primary">
                    {tier.setup}
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-muted-foreground">
                    {tier.name}: {tier.monthly} management
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.74fr_1.26fr] lg:px-8">
          <ScrollReveal direction="left">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Direct answer
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              What does Onyx AI Studio build?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120} direction="right">
            <div className="grid gap-4 text-base leading-8 text-muted-foreground">
              <p>
                Onyx AI Studio builds managed AI business systems for service
                companies that need better call handling, website lead capture,
                scheduling support, internal knowledge search, and cleaner
                follow-up. The system starts with the business workflow, then
                connects voice assistants, website assistants, forms, data
                storage, guardrails, and staff-facing summaries around that
                workflow.
              </p>
              <p>
                The best starting point is the{" "}
                <Link
                  href="/insights/what-is-ai-operations-review"
                  className="font-bold text-primary underline-offset-4 hover:underline"
                >
                  AI Operations Review
                </Link>
                , followed by the{" "}
                <Link
                  href="/services/ai-integration"
                  className="font-bold text-primary underline-offset-4 hover:underline"
                >
                  AI Business Operations Integration
                </Link>{" "}
                service when the workflow is ready to build.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-muted/70">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <ScrollReveal direction="left">
            <SectionHeading
              eyebrow="The problem"
              title="Most businesses do not need another widget. They need cleaner operations."
              description="Calls, website questions, documents, lead notes, scheduling requests, and follow-up tasks often live in separate places. The AI system is valuable only when it connects those pieces."
            />
          </ScrollReveal>
          <ScrollReveal
            className="grid gap-3 sm:grid-cols-2"
            delay={120}
            direction="right"
          >
            {operationalProblems.map((problem) => (
              <div
                key={problem}
                className="glass-card flex min-h-16 items-start gap-3 rounded-md border border-border bg-card/84 px-4 py-4"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-accent"
                />
                <span className="text-sm font-semibold leading-6">{problem}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="System overview"
              title="One managed system across reception, web, data, and internal support."
              description="The public assistants help customers. The internal assistant helps staff. Supabase keeps business records and knowledge structured between them."
            />
          </ScrollReveal>
          <ScrollReveal className="mt-10 grid gap-5 lg:grid-cols-4" delay={80}>
            {systemFlow.map((step, index) => {
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

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <ScrollReveal direction="left">
            <SectionHeading
              eyebrow="What the AI handles"
              title="The offer is built around business outcomes, not technical novelty."
              description="Retell and Supabase stay in the infrastructure layer. The buyer sees call handling, lead capture, scheduling support, searchable knowledge, guardrails, and follow-up."
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
                  className="glass-card flex min-h-14 items-center gap-3 rounded-md border border-border bg-background/84 px-4"
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

      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <ScrollReveal direction="left">
              <SectionHeading
                eyebrow="How it works"
                title="Review, integrate, manage."
                description="The system is custom because the business rules are custom: hours, service areas, pricing boundaries, documents, scheduling behavior, and escalation rules."
              />
            </ScrollReveal>
            <ScrollReveal
              className="grid gap-4 md:grid-cols-3"
              delay={120}
              direction="right"
            >
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Card key={step.title} className="interactive-card glass-card bg-card/84">
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
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <ScrollReveal direction="left" className="editorial-rule pt-8">
            <SectionHeading
              eyebrow="Process proof"
              title="A visible map of how the AI business system is built."
              description="The workflow starts with how the business already handles calls, website questions, leads, documents, and follow-up. The build connects those pieces into managed assistant roles, records, guardrails, and optimization."
            />
            <div className="mt-8 grid gap-3 text-sm font-semibold">
              {[
                "Review the current operation before choosing tools.",
                "Separate customer-facing assistants from internal knowledge.",
                "Keep guardrails, records, and monthly tuning inside the management plan.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-border bg-background px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120} direction="right">
            <figure className="overflow-hidden rounded-lg border border-border bg-background shadow-sm">
              <Image
                src="/onyx-ai-process-infographic.png"
                alt="Onyx AI Studio process map for reviewing, building, launching, and managing AI business systems"
                width={1376}
                height={768}
                className="h-auto w-full bg-muted"
                sizes="(min-width: 1024px) 760px, 100vw"
              />
              <figcaption className="border-t border-border px-4 py-3 text-xs leading-5 text-muted-foreground">
                Process graphic generated from Onyx source material and used as
                a concise proof asset for buyers comparing practical AI
                implementation.
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-muted/70">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Core system pages"
              title="Everything a service business needs to capture, answer, schedule, and follow up."
              description="Web development becomes the front-end layer. SEO becomes demand generation. Automation moves leads, calls, summaries, appointments, and follow-up tasks."
            />
          </ScrollReveal>
          <ScrollReveal
            className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
            delay={120}
          >
            {primaryServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="interactive-card glass-card group rounded-lg border border-border bg-card/84 p-5 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Portfolio proof"
              title="Real demos that show the pieces behind the operations system."
              description="The portfolio is framed around quote paths, AI operations modules, guardrails, lead capture, interface design, automation, and custom implementation ability."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/portfolio">
                  Explore the 20 SaaS demos
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/case-studies">View case studies</Link>
              </Button>
            </div>
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
                  alt={caseStudy.imageAlt ?? `${caseStudy.title} visual system diagram`}
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
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Investment"
              title="Premium implementation, not a plug-and-play chatbot."
              description="Pricing depends on operation size, locations, services, call volume, scheduling complexity, documents, integrations, guardrails, reporting, and internal assistant requirements."
            />
            <Button asChild variant="outline">
              <Link href="/pricing">View pricing details</Link>
            </Button>
          </ScrollReveal>
          <ScrollReveal className="mt-10 grid gap-5 lg:grid-cols-3" delay={100}>
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className="glass-card bg-card/84">
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-2xl font-bold text-primary">
                    {tier.setup}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {tier.monthly} management
                  </p>
                  <p className="mt-4 text-xs leading-5 text-muted-foreground">
                    Client pays Retell and third-party platform usage directly.
                  </p>
                </CardContent>
              </Card>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-muted/70">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <ScrollReveal direction="left" className="editorial-rule pt-8">
            <SectionHeading
              eyebrow="About the studio"
              title="Founder-led implementation for companies that need practical AI in real workflows."
              description="The brand keeps attention on systems, proof, and delivery quality. AI is recommended only where it can be grounded, managed, and useful."
            />
            <ul className="mt-8 space-y-4 text-sm leading-6 text-muted-foreground">
              {[
                "Small enough to map the workflow carefully.",
                "Technical enough to ship Next.js, Retell, Supabase, AI, and SEO foundations.",
                "Conservative enough to define limits before automation goes live.",
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
              Request an AI Operations Review.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Bring the current operation: missed calls, lead capture, scheduling,
              internal documents, follow-up, or data handling. The first step is
              reviewing what should be integrated and where guardrails matter.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Reviewed within one business day",
                "Workflow map and first-system recommendation",
                "Source-material checklist for the safest useful build",
                "30-45 minute review call for strong-fit projects",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              The Review is used to evaluate fit and plan the next step. Your
              submission is not sold or added to bulk outreach.
            </p>
            <Button asChild className="mt-6">
              <Link href="/contact">Request an AI Operations Review</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="AI operations insights"
              title="Practical pages for buyers comparing AI systems, quote tools, and lead capture."
              description="These guides explain when AI belongs in a business workflow, what details a website should collect, and how clean operational data supports better automation."
            />
            <Button asChild variant="outline">
              <Link href="/insights">
                Browse all insights
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </ScrollReveal>
          <ScrollReveal className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3" delay={100}>
            {priorityInsights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="interactive-card glass-card group rounded-lg border border-border bg-background/84 p-5 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {insight.readingTime}
                </p>
                <h2 className="mt-4 font-serif text-2xl font-bold">
                  {insight.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {insight.description}
                </p>
              </Link>
            ))}
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
