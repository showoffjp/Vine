import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/settings/", "/onboarding/", "/notifications/", "/dashboard/", "/saved/"],
    },
    sitemap: "https://vine.community/sitemap.xml",
  };
}
