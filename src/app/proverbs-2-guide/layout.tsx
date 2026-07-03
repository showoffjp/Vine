import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proverbs 2: Seeking Wisdom Like Hidden Treasure | Vine",
  description: "A comprehensive academic and devotional study guide for Proverbs 2 &mdash; the conditions for receiving wisdom, God&apos;s promise to give it, its protective function, and the two-path motif that closes the chapter.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
