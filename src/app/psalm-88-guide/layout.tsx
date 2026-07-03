import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 88 Study Guide &mdash; Darkness Is My Closest Friend",
  description: "A verse-by-verse guide to Psalm 88 &mdash; the darkest lament in the Psalter, the cry of one overwhelmed by suffering and the felt absence of God, a psalm that ends in darkness yet keeps crying out to God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
