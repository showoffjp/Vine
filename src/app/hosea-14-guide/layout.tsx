import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hosea 14 Study Guide &mdash; Return to the LORD and I Will Heal Your Apostasy",
  description: "A verse-by-verse guide to Hosea 14 &mdash; the call to return with words of repentance, God's promise to heal apostasy and love freely, the blossoming of Israel like a lily and a cedar, and the wisdom of understanding these things.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
