import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 6 Study Guide &mdash; O LORD Do Not Rebuke Me in Your Anger",
  description: "A verse-by-verse guide to Psalm 6 &mdash; the first of the seven Penitential Psalms, the anguished cry of a soul greatly troubled, the bed drenched with tears, and the confident turn that the LORD has heard the sound of weeping.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
