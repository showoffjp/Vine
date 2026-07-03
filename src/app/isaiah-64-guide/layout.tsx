import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 64 Study Guide &mdash; Oh That You Would Rend the Heavens and Come Down",
  description: "A verse-by-verse guide to Isaiah 64 &mdash; the great prayer for divine intervention, the confession of sin, and the declaration that we are clay in the potter's hands.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
