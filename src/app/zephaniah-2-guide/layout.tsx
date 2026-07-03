import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Zephaniah 2 Study Guide &mdash; Seek the LORD All You Humble of the Land",
  description: "A verse-by-verse guide to Zephaniah 2 &mdash; the call to seek the LORD before the day of wrath, the oracles against Philistia, Moab, Ammon, Cush, and Assyria, and Nineveh made a desolation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
