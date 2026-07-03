import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 110 Study Guide &mdash; The LORD Says to My Lord",
  description: "A verse-by-verse guide to Psalm 110 &mdash; the most-quoted psalm in the New Testament: the Messiah enthroned at God's right hand and the priest forever after the order of Melchizedek, fulfilled in Christ.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
