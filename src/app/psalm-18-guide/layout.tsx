import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 18 Study Guide &mdash; I Love You O LORD My Strength",
  description: "A verse-by-verse guide to Psalm 18 &mdash; David's great song of deliverance, the LORD as rock and fortress, the dramatic theophany of God's rescue, and the steadfast love shown to his anointed forever.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
