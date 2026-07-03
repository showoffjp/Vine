import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jonah 1 Study Guide &mdash; Arise and Go to Nineveh",
  description: "A verse-by-verse guide to Jonah 1 &mdash; God's commission to Nineveh, Jonah's flight to Tarshish, the great storm, the sleeping prophet, the casting of lots, and the great fish swallowing Jonah.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
