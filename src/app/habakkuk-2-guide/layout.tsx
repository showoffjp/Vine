import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Habakkuk 2 Study Guide &mdash; The Righteous Shall Live by His Faith",
  description: "A verse-by-verse guide to Habakkuk 2 &mdash; the watchtower vision, the word that the righteous live by faith, the five woe oracles against Babylon, and the earth filled with the knowledge of the glory of the LORD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
