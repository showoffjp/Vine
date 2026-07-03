import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 39: Hezekiah's Fatal Pride and Isaiah's Prophecy of Babylonian Exile | Vine",
  description: "A verse-by-verse study guide to Isaiah 39 -- Hezekiah shows the Babylonian envoys everything in his treasury, Isaiah rebukes him, and prophecies that all of it and Hezekiah's descendants will be carried off to Babylon. The hinge between Isaiah 1-39 and 40-66.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
