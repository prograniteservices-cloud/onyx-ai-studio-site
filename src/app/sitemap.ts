import type { MetadataRoute } from "next";

import { caseStudies, insights, services, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-05-04T00:00:00.000Z");
  const staticRoutes = ["/", "/services", "/case-studies", "/insights", "/contact"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const caseRoutes = caseStudies.map(
    (caseStudy) => `/case-studies/${caseStudy.slug}`,
  );
  const insightRoutes = insights.map((insight) => `/insights/${insight.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...insightRoutes].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : route.split("/").length === 2 ? 0.8 : 0.7,
    }),
  );
}
