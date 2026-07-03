import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 41 Study Guide &mdash; Fear Not, For I Am With You",
  description: "A verse-by-verse guide to Isaiah 41 &mdash; God's sovereign comfort to Israel, the call to fear not, and his promise to strengthen and uphold his people.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
