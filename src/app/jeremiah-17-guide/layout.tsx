import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 17 Study Guide &mdash; The Deceitful Heart and the Blessed Man",
  description: "A verse-by-verse guide to Jeremiah 17 &mdash; the diagnosis of the deceitful human heart, the contrast between those who trust in man and those who trust in God, and the healing God offers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
