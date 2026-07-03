import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Micah 7 Study Guide &mdash; Who Is a God Like You Pardoning Iniquity",
  description: "A verse-by-verse guide to Micah 7 &mdash; the prophet's lament over social collapse, the waiting trust in the LORD, the vindication of the remnant, and the incomparable God who casts sins into the sea.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
