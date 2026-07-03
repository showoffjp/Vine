import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 136 Study Guide &mdash; His Steadfast Love Endures Forever",
  description: "A verse-by-verse guide to Psalm 136 &mdash; the Great Hallel, the litany of thanksgiving whose refrain 'for his steadfast love endures forever' answers every act of creation and redemption twenty-six times.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
