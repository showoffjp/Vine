import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 72 Study Guide &mdash; Give the King Your Justice O God",
  description: "A verse-by-verse guide to Psalm 72 &mdash; the royal prayer for Solomon, the righteous king who defends the poor and needy, whose dominion reaches from sea to sea, fulfilled in the reign of Christ.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
