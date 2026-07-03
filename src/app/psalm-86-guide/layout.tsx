import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 86 Study Guide &mdash; Teach Me Your Way O LORD",
  description: "A verse-by-verse guide to Psalm 86 &mdash; David's prayer of the poor and needy, the plea for an undivided heart to fear God's name, and the confession that the Lord is good and forgiving, abounding in steadfast love.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
