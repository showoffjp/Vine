import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 47 Study Guide &mdash; The Fall of Babylon Daughter of the Chaldeans",
  description: "A verse-by-verse guide to Isaiah 47 &mdash; God's judgment on Babylon for her pride, sorceries, and cruelty, and the failure of her wisdom to save her in the day of disaster.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
