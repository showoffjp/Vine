import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 66 Study Guide &mdash; Heaven Is My Throne and the Earth My Footstool",
  description: "A verse-by-verse guide to Isaiah 66 &mdash; God's rebuke of empty religion, his mother-like comfort, the birth of the new nation, and the final vision of all flesh worshipping before him.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
