import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 14 Study Guide &mdash; The Fool Says There Is No God",
  description: "A verse-by-verse guide to Psalm 14 &mdash; the practical atheism of the fool, the universal corruption of humanity that Paul cites in Romans 3, and the longing for salvation to come out of Zion.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
