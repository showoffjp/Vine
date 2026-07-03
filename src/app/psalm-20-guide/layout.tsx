import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 20 Study Guide &mdash; May the LORD Answer You in the Day of Trouble",
  description: "A verse-by-verse guide to Psalm 20 &mdash; the congregation's prayer for the king before battle, the contrast between trusting chariots and trusting the name of the LORD, and the confidence that God saves his anointed.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
