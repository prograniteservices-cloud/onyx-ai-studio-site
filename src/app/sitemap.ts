import type { MetadataRoute } from "next";

import { absoluteUrl, caseStudies, insights, services, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-07-16T23:30:00.000Z");
  const staticRoutes = [
    "/",
    "/services",
    "/portfolio",
    "/case-studies",
    "/insights",
    "/pricing",
    "/about",
    "/contact",
  ];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const insightRoutes = insights.map((insight) => `/insights/${insight.slug}`);
  const standardRoutes = [...staticRoutes, ...serviceRoutes, ...insightRoutes].map(
    (route): MetadataRoute.Sitemap[number] => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : route.split("/").length === 2 ? 0.8 : 0.7,
    }),
  );
  const caseRoutes = caseStudies.map(
    (caseStudy): MetadataRoute.Sitemap[number] => ({
      url: `${siteUrl}/case-studies/${caseStudy.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      ...(caseStudy.video
        ? {
            videos: [
              {
                title: caseStudy.video.title,
                thumbnail_loc: absoluteUrl(caseStudy.video.poster),
                description: caseStudy.video.description,
                content_loc: absoluteUrl(caseStudy.video.source),
                duration: 75,
                publication_date: caseStudy.video.uploadDate,
                family_friendly: "yes" as const,
              },
            ],
          }
        : {}),
    }),
  );

  return [...standardRoutes, ...caseRoutes];
}
