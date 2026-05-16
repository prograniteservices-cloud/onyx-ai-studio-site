import type { Metadata } from "next";
import { Geist_Mono, Libre_Baskerville, Plus_Jakarta_Sans } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, siteUrl } from "@/lib/site-data";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Onyx AI Studio installs AI into business operations by connecting reception, website assistance, lead capture, scheduling, company knowledge, data handling, and internal employee support.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Onyx AI Studio - AI Business Operations Integration",
    template: "%s | Onyx AI Studio",
  },
  description,
  applicationName: "Onyx AI Studio",
  keywords: [
    "AI integration",
    "AI receptionist",
    "website voice assistant",
    "lead capture",
    "scheduling support",
    "Supabase business data layer",
    "internal business assistant",
    "AI guardrails",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Onyx AI Studio - AI Business Operations Integration",
    description,
    url: siteUrl,
    siteName: "Onyx AI Studio",
    images: [
      {
        url: "/onyx-systems-map.svg",
        width: 1200,
        height: 630,
        alt: "Onyx AI Studio system map",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onyx AI Studio - AI Business Operations Integration",
    description,
    images: ["/onyx-systems-map.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Onyx AI Studio",
  url: siteUrl,
  logo: absoluteUrl("/onyx-logo.svg"),
  description,
  areaServed: "United States",
  knowsAbout: [
    "AI integration",
    "AI phone reception",
    "Website voice assistance",
    "Lead capture",
    "Scheduling support",
    "Supabase business data",
    "Internal business assistants",
    "AI guardrails",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Onyx AI Studio Services",
    itemListElement: [
      "AI Business Operations Integration",
      "AI Phone Receptionist",
      "Website Voice Assistant",
      "Internal Business Assistant",
      "Guardrails and Knowledge Systems",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Onyx AI Studio",
  url: siteUrl,
  description,
  publisher: {
    "@type": "Organization",
    name: "Onyx AI Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} ${libreBaskerville.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
