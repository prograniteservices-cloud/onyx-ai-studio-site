import Link from "next/link";

import { LogoMark } from "@/components/logo-mark";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { caseStudies, navItems, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_2fr] lg:px-8">
        <div className="space-y-6">
          <LogoMark
            className="text-primary-foreground [&_span:first-child]:border-primary-foreground/25 [&_span:first-child]:bg-primary-foreground [&_span:first-child]:text-primary"
          />
          <p className="max-w-md text-sm leading-6 text-primary-foreground/76">
            Practical AI integration, automation workflows, web development,
            and SEO content systems for real business operations.
          </p>
          <Button asChild variant="secondary">
            <Link href="/contact">Request a fit review</Link>
          </Button>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em]">
              Site
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/76">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-primary-foreground" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em]">
              Services
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/76">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    className="hover:text-primary-foreground"
                    href={`/services/${service.slug}`}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em]">
              Proof
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/76">
              {caseStudies.slice(0, 4).map((caseStudy) => (
                <li key={caseStudy.slug}>
                  <Link
                    className="hover:text-primary-foreground"
                    href={`/case-studies/${caseStudy.slug}`}
                  >
                    {caseStudy.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Separator className="bg-primary-foreground/16" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>2026 Onyx AI Studio. All rights reserved.</p>
        <p>Built as a design-first Next.js site with SEO and GEO foundations.</p>
      </div>
    </footer>
  );
}
