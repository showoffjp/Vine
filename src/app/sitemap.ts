import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vine.community";
  const now = new Date();

  const routes = [
    { path: "/", priority: 1.0, changeFreq: "daily" as const },
    { path: "/discussions", priority: 0.9, changeFreq: "hourly" as const },
    { path: "/bible", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/daily", priority: 0.9, changeFreq: "daily" as const },
    { path: "/prayer", priority: 0.9, changeFreq: "hourly" as const },
    { path: "/topics", priority: 0.9, changeFreq: "hourly" as const },
    { path: "/resources", priority: 0.8, changeFreq: "daily" as const },
    { path: "/explore", priority: 0.8, changeFreq: "hourly" as const },
    { path: "/community", priority: 0.8, changeFreq: "daily" as const },
    { path: "/blog", priority: 0.8, changeFreq: "daily" as const },
    { path: "/worship", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/mental-health", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/life-hacks", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/relationships", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/finances", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/parenting", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/work-leadership", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/events", priority: 0.7, changeFreq: "daily" as const },
    { path: "/creators", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/reading-plan", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/ai-companion", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/quiz", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/about", priority: 0.5, changeFreq: "monthly" as const },
  ];

  return routes.map(({ path, priority, changeFreq }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: changeFreq,
    priority,
  }));
}
