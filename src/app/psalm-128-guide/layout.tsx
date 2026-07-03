import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 128 Study Guide -- Blessed Is Everyone Who Fears the LORD",
  description: "Verse-by-verse study of Psalm 128 -- a Song of Ascents: the blessing of the God-fearer in home and labor, the fruitful vine and olive shoots around the table, and the priestly benediction of peace upon Israel from Zion.",
  openGraph: {
    title: "Psalm 128 Study Guide -- Blessed Is Everyone Who Fears the LORD",
    description: "Deep dive into Psalm 128: the wisdom of the fear of the LORD applied to ordinary life -- honest work, a flourishing family, the blessing that flows from Zion, and the hope of seeing children's children in peace.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
