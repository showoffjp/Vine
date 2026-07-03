import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jonah 4 Study Guide &mdash; Should I Not Pity Nineveh",
  description: "A verse-by-verse guide to Jonah 4 &mdash; Jonah's anger at God's mercy, the plant and worm, and God's final question about whether he should not pity the great city of Nineveh with its many people.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
