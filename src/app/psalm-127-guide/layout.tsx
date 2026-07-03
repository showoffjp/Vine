import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 127 Study Guide &mdash; Unless the LORD Builds the House",
  description: "A verse-by-verse guide to Psalm 127 &mdash; a Song of Ascents of Solomon on the futility of labor without the LORD, rest as God's gift to his beloved, and children as a heritage and reward from the LORD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
