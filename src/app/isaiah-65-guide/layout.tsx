import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 65 Study Guide &mdash; Behold I Create New Heavens and a New Earth",
  description: "A verse-by-verse guide to Isaiah 65 &mdash; God's response to rebellious Israel, the new creation where the wolf and lamb feed together, and the joy of the new Jerusalem.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
