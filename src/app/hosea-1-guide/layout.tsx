import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hosea 1 Study Guide &mdash; Go Take a Wife of Whoredom",
  description: "A verse-by-verse guide to Hosea 1 &mdash; God's shocking command to marry Gomer, the symbolic names of the children, and the promise that the very names of rejection will become names of restoration.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
