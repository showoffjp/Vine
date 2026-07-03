import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 50 Study Guide &mdash; The Third Servant Song: I Set My Face Like Flint",
  description: "A verse-by-verse guide to Isaiah 50 &mdash; the third Servant Song, the Servant's obedience despite suffering, and the call to trust in the LORD in darkness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
