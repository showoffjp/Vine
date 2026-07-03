import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proverbs 28 Study Guide &mdash; The Righteous Are Bold as a Lion",
  description: "A verse-by-verse guide to Proverbs 28 &mdash; contrasts between the wicked and righteous, the importance of confessing sin, and leadership marked by justice and integrity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
