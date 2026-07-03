import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 147 Study Guide &mdash; He Heals the Brokenhearted",
  description: "A verse-by-verse guide to Psalm 147 &mdash; the praise of the God who builds up Jerusalem, heals the brokenhearted, numbers and names the stars, and delights in those who hope in his steadfast love.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
