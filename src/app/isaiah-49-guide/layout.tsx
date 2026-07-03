import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 49 Study Guide &mdash; The Second Servant Song and God's Unforgetting Love",
  description: "A verse-by-verse guide to Isaiah 49 &mdash; the Servant called from the womb, God's promise to restore Israel, and the tender declaration that he will never forget his people.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
