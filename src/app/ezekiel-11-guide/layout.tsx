import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ezekiel 11 Study Guide &mdash; I Will Give You a New Heart",
  description: "A verse-by-verse guide to Ezekiel 11 &mdash; judgment on Jerusalem's wicked leaders, the promise of a new heart and new spirit for the scattered exiles, and the final departure of God's glory to the Mount of Olives.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
