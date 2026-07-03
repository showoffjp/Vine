import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 126 Study Guide &mdash; Those Who Sow in Tears Shall Reap with Joy",
  description: "A verse-by-verse guide to Psalm 126 &mdash; a Song of Ascents recalling the joy when the LORD restored Zion's fortunes, the prayer for renewed restoration like streams in the Negeb, and sowing in tears to reap in joy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
