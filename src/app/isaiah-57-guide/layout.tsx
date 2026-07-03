import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 57 Study Guide &mdash; The High and Lowly God Who Dwells With the Contrite",
  description: "A verse-by-verse guide to Isaiah 57 &mdash; God's rebuke of idolatry, his promise of peace to the humble, and his dwelling with the contrite and lowly in spirit.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
