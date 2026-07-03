import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Amos 9 Study Guide &mdash; I Will Restore the Fallen Booth of David",
  description: "A verse-by-verse guide to Amos 9 &mdash; the inescapable judgment vision at the altar, God's sovereignty over all nations, and the glorious restoration promise that the fallen tent of David will be raised.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
