import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 25 Study Guide &mdash; To You O LORD I Lift Up My Soul",
  description: "A verse-by-verse guide to Psalm 25 &mdash; David's acrostic prayer for guidance and pardon, 'make me to know your ways,' the friendship of the LORD for those who fear him, and the plea to remember mercy not sins of youth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
