import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proverbs 23: Wealth, Wine, and Guarding the Heart | Vine",
  description: "A verse-by-verse study of Proverbs 23 -- warnings against materialism, drunkenness, and envy; the call to honor parents; and the central appeal: give me your heart.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
