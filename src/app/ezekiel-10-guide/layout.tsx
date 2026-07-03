import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ezekiel 10 Study Guide &mdash; The Glory of the LORD Departed from the Temple",
  description: "A verse-by-verse guide to Ezekiel 10 &mdash; the living creatures and wheels revisited, burning coals scattered over Jerusalem, and the devastating departure of God's glory from the threshold of the temple.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
