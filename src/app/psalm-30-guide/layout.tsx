import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 30 Study Guide &mdash; Joy Comes with the Morning",
  description: "A verse-by-verse guide to Psalm 30 &mdash; the psalm of thanksgiving for deliverance, weeping that tarries for the night and joy that comes with the morning, and God turning mourning into dancing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
