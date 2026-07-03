import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 30 Study Guide &mdash; The Time of Jacob's Trouble",
  description: "A verse-by-verse guide to Jeremiah 30 &mdash; the terror of Jacob's trouble, God's promise to restore fortunes and break the yoke, the incurable wound turned to healing, and the promise that David their king will rule them.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
