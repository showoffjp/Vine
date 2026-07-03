import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 12 Study Guide &mdash; The Words of the LORD Are Pure",
  description: "A verse-by-verse guide to Psalm 12 &mdash; the cry when the godly seem to vanish, the contrast between flattering human lips and the pure, refined words of the LORD, and God's promise to arise for the poor and needy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
