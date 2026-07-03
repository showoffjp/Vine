import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 38 Study Guide &mdash; O LORD Rebuke Me Not in Your Anger",
  description: "A verse-by-verse guide to Psalm 38 &mdash; the third of the Penitential Psalms, the anguish of body and soul under the weight of sin, the silence before accusers, and the trust that the LORD will answer.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
