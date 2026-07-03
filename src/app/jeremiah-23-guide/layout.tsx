import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 23 Study Guide &mdash; Woe to the Shepherds Who Destroy My Sheep",
  description: "A verse-by-verse guide to Jeremiah 23 &mdash; God's indictment of false shepherds, the promise of the righteous Branch whose name is the LORD Our Righteousness, and the devastating exposure of lying prophets.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
