import { MetadataRoute } from "next";
import { readdirSync, statSync } from "fs";
import { join } from "path";

const BASE = "https://vine.community";

// Pages excluded from the public sitemap (auth-gated / personal)
const EXCLUDE = new Set([
  "/settings",
  "/onboarding",
  "/notifications",
  "/dashboard",
  "/saved",
  "/profile",
  "/journal",
  "/prayer-list",
  "/prayer-journal",
  "/sermon-notes",
  "/goals",
  "/habits",
  "/verse-memory",
  "/gratitude",
  "/feed",
]);

// Routes that deserve elevated priority
const HIGH_PRIORITY: Record<string, number> = {
  "/": 1.0,
  "/bible": 0.95,
  "/explore": 0.9,
  "/ai-companion": 0.88,
  "/daily": 0.88,
  "/discussions": 0.85,
  "/prayer-wall": 0.85,
  "/community": 0.82,
  "/resources": 0.82,
  "/video": 0.8,
  "/apologetics": 0.8,
  "/theology": 0.8,
  "/discipleship": 0.8,
  "/mental-health-guide": 0.78,
  "/salvation": 0.78,
  "/church-history": 0.75,
  "/about": 0.6,
  "/contact": 0.5,
  "/privacy": 0.3,
  "/terms": 0.3,
};

function discoverRoutes(appDir: string): string[] {
  const routes: string[] = [];

  function walk(dir: string) {
    let entries: string[];
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = join(dir, entry);
      let st;
      try {
        st = statSync(full);
      } catch {
        continue;
      }
      if (st.isDirectory()) {
        walk(full);
      } else if (
        entry === "page.tsx" ||
        entry === "page.ts" ||
        entry === "page.jsx" ||
        entry === "page.js"
      ) {
        // Build the route path from the directory
        let rel = dir.slice(appDir.length);
        // Strip Next.js route groups: (groupname)
        const segments = rel
          .split("/")
          .filter((s) => s && !(s.startsWith("(") && s.endsWith(")")));
        const route = "/" + segments.join("/");
        const clean = route === "/" ? "/" : route.replace(/\/+$/, "");
        // Skip dynamic segments and API routes
        if (clean.includes("[") || clean.startsWith("/api")) continue;
        routes.push(clean === "" ? "/" : clean);
      }
    }
  }

  walk(appDir);
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const appDir = join(process.cwd(), "src", "app");
  const routes = discoverRoutes(appDir);

  return routes
    .filter((r) => !EXCLUDE.has(r))
    .map((path) => {
      const priority = HIGH_PRIORITY[path] ?? 0.65;
      // High-priority pages update daily, guides weekly, static pages monthly
      const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
        priority >= 0.88
          ? "daily"
          : priority >= 0.65
            ? "weekly"
            : "monthly";
      return {
        url: `${BASE}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
      };
    })
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}
