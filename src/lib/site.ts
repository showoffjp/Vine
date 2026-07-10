// Single source of truth for the site's public base URL.
//
// Set NEXT_PUBLIC_SITE_URL in Vercel (Project -> Settings -> Environment
// Variables) to your real domain, e.g. https://thevine.app -- then canonical
// URLs, Open Graph tags, the sitemap, and robots.txt all follow automatically.
// Falls back to VERCEL_PROJECT_PRODUCTION_URL (the auto-assigned production
// domain) so the metadata is never pointed at a dead domain, and finally to the
// legacy value only if nothing else is available.
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;
  return "https://vine.community";
}

export const SITE_URL = resolveSiteUrl();
