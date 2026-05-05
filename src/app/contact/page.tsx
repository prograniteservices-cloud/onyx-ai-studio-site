import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { absoluteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a project fit review for AI integration, automation workflows, web development, or SEO content systems.",
  alternates: {
    canonical: "/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Onyx AI Studio",
  url: absoluteUrl("/contact"),
  description:
    "Request a fit review for AI integration, automation, web development, and SEO content system projects.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div className="editorial-rule pt-8">
            <SectionHeading
              eyebrow="Contact"
              title="Request a practical project fit review."
              description="The best first conversation is specific: what workflow is slow, what data is messy, what users need to do, and what outcome would make the work worth it."
            />
            <ul className="mt-8 space-y-4 text-sm leading-6 text-muted-foreground">
              {[
                "Good fits: search, dashboards, lead workflows, content architecture, and AI features with a clear workflow.",
                "Weak fits: vague AI experiments, unsupported scraped data, or projects that need public personal branding.",
                "Expected next step: a concise recommendation, not a pressure-heavy sales call.",
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
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
