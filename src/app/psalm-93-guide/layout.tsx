import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 93 Study Guide &mdash; The LORD Reigns, He Is Robed in Majesty",
  description: "A verse-by-verse guide to Psalm 93 &mdash; the enthronement psalm of the LORD's eternal kingship, mightier than the thunderous waters, whose throne is established from of old and whose decrees are sure.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
