import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 48 Study Guide &mdash; God Who Teaches You What Is Best",
  description: "A verse-by-verse guide to Isaiah 48 &mdash; God's rebuke of stubborn Israel, his teaching of what is best, and his call to leave Babylon and experience peace like a river.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
