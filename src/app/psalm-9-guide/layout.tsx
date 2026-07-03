import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 9 Study Guide &mdash; I Will Give Thanks with My Whole Heart",
  description: "A verse-by-verse guide to Psalm 9 &mdash; thanksgiving for God's righteous judgment, the LORD enthroned forever as a stronghold for the oppressed, and the assurance that the needy shall not always be forgotten.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
