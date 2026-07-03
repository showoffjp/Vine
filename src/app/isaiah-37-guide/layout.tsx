import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 37: Hezekiah's Prayer and the Miraculous Deliverance of Jerusalem | Vine",
  description: "A verse-by-verse study guide to Isaiah 37 -- Hezekiah spreads the Assyrian letter before the LORD, Isaiah delivers oracles of deliverance, and the Angel of the LORD strikes 185,000 Assyrian soldiers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
