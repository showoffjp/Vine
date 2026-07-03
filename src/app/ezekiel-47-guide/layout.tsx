import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ezekiel 47 Study Guide &mdash; Water Flowing from the Temple",
  description: "A verse-by-verse guide to Ezekiel 47 &mdash; the river of life flowing from under the temple threshold, deepening as it goes, healing the Dead Sea, and the distribution of the land to Israel and the aliens among them.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
