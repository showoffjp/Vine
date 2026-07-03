import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 45 Study Guide &mdash; Your Throne O God Is Forever",
  description: "A verse-by-verse guide to Psalm 45 &mdash; the royal wedding song addressed to the king as God ('your throne, O God, is forever and ever,' quoted in Hebrews 1), the bride, and the messianic fulfillment in Christ and his church.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
