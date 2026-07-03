import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 61 Study Guide &mdash; Lead Me to the Rock That Is Higher Than I",
  description: "A verse-by-verse guide to Psalm 61 &mdash; the cry from the end of the earth, the longing to dwell in God's tent forever and take refuge under the shelter of his wings, and the vow of daily praise.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
