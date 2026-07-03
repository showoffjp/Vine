import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 130 Study Guide &mdash; Out of the Depths I Cry to You",
  description: "A verse-by-verse guide to Psalm 130 &mdash; the De Profundis, a Song of Ascents and Penitential Psalm: the cry from the depths, forgiveness that God may be feared, waiting for the LORD like watchmen for the morning, and plentiful redemption.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
