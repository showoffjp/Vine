import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 45 Study Guide &mdash; I Am the LORD and There Is No Other",
  description: "A verse-by-verse guide to Isaiah 45 &mdash; God's commission of Cyrus, his declaration as the sole Creator and Sovereign, and the promise that every knee will bow to him.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
