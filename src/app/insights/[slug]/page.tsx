import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  absoluteUrl,
  breadcrumbSchema,
  founderName,
  founderPersonId,
  getInsight,
  insights,
} from "@/lib/site-data";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    return {};
  }

  return {
    title: insight.title,
    description: insight.description,
    alternates: {
      canonical: `/insights/${insight.slug}`,
    },
    openGraph: {
      title: `${insight.title} | Onyx AI Studio`,
      description: insight.description,
      url: absoluteUrl(`/insights/${insight.slug}`),
    },
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: insight.title, path: `/insights/${insight.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: insight.title,
    description: insight.description,
    datePublished: insight.date,
    dateModified: insight.date,
    author: {
      "@id": founderPersonId,
      "@type": "Person",
      name: founderName,
    },
    publisher: {
      "@type": "Organization",
      name: "Onyx AI Studio",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/onyx-logo.svg"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/insights/${insight.slug}`),
  };

  const faqSchema = insight.questions
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: insight.questions.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={articleSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <JsonLd data={breadcrumbs} />
      <article className="bg-background">
        <header className="border-b border-border bg-card">
          <div className="mx-auto w-full max-w-4xl min-w-0 px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {insight.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="mt-6 break-words font-serif text-4xl font-bold leading-tight sm:text-6xl">
              {insight.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {insight.description}
            </p>
            {insight.answerBlock ? (
              <div className="mt-6 min-w-0 rounded-lg border border-border bg-background p-5">
                <h2 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  Short answer
                </h2>
                <p className="mt-3 text-base leading-7 text-foreground">
                  {insight.answerBlock}
                </p>
              </div>
            ) : null}
            <p className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-amber">
              {insight.date} / {insight.readingTime}
            </p>
          </div>
        </header>
        <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {insight.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-3xl font-bold">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
          {insight.questions ? (
            <section className="mt-12 rounded-lg border border-border bg-muted/70 p-6">
              <h2 className="font-serif text-2xl font-bold">
                Common questions
              </h2>
              <div className="mt-5 grid gap-5">
                {insight.questions.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-serif text-xl font-bold">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
          {insight.relatedLinks ? (
            <nav
              aria-label="Related resources"
              className="mt-12 rounded-lg border border-border bg-muted/70 p-6"
            >
              <h2 className="font-serif text-2xl font-bold">
                Related Onyx resources
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {insight.relatedLinks.map((relatedLink) => (
                  <Button key={relatedLink.href} asChild variant="outline">
                    <Link href={relatedLink.href}>{relatedLink.label}</Link>
                  </Button>
                ))}
              </div>
            </nav>
          ) : null}
          <div className="mt-12 rounded-lg border border-border bg-card p-6">
            <h2 className="font-serif text-2xl font-bold">
              Need this thinking applied to a real workflow?
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Bring the calls, website leads, scheduling, documents, follow-up,
              or data handling problem and Onyx AI Studio will map the practical
              next step.
            </p>
            <Button asChild className="mt-5">
              <Link href="/contact">Request an AI Operations Review</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
