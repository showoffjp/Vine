import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 44 Study Guide &mdash; God the Only Redeemer and the Folly of Idols",
  description: "A verse-by-verse guide to Isaiah 44 &mdash; God's promise to pour out his Spirit, his declaration as the First and Last, and his devastating critique of idol worship.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
