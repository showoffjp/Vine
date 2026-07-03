import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Joel 1 Study Guide &mdash; A Nation Has Come Up Against My Land",
  description: "A verse-by-verse guide to Joel 1 &mdash; the unprecedented locust plague, the call to all inhabitants to hear and tremble, the stripping of the land, and the prophet's call to fast, assemble, and cry out to the LORD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
