import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Zechariah 12 Study Guide &mdash; They Will Look on Me Whom They Have Pierced",
  description: "A verse-by-verse guide to Zechariah 12 &mdash; Jerusalem as a cup of staggering for all nations, the Spirit of grace poured out, and the great mourning when Israel looks upon the one they pierced.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
