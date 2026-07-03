import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 148 Study Guide &mdash; Praise the LORD from the Heavens",
  description: "A verse-by-verse guide to Psalm 148 &mdash; the cosmic summons for all creation, from angels and stars to sea creatures, mountains, trees, animals, and all peoples, to praise the name of the LORD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
