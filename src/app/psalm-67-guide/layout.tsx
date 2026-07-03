import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 67 Study Guide &mdash; May God Be Gracious to Us and Bless Us",
  description: "A verse-by-verse guide to Psalm 67 &mdash; the missionary psalm built on the Aaronic blessing, praying that God's saving way be known among all nations, and the earth's increase as a sign of his blessing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
