import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 10 Study Guide &mdash; Why O LORD Do You Stand Far Away",
  description: "A verse-by-verse guide to Psalm 10 &mdash; the anguished question of God's apparent absence amid the arrogance of the wicked, and the closing confidence that the LORD is King forever and hears the desire of the afflicted.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
