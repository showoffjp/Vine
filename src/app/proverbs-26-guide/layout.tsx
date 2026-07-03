import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proverbs 26 Guide &mdash; The Fool, the Sluggard, and the Quarrelsome",
  description: "Proverbs 26 is a concentrated study in three character types: the fool who cannot receive wisdom, the sluggard whose laziness defeats him, and the quarrelsome person whose words destroy community.",
  openGraph: {
    title: "Proverbs 26 Guide &mdash; The Vine",
    description: "Proverbs 26 is a concentrated study in three character types: the fool who cannot receive wisdom, the sluggard whose laziness defeats him, and the quarrelsome person whose words destroy community.",
    images: ["/api/og?title=Proverbs+26+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proverbs 26 Guide &mdash; The Vine",
    description: "Proverbs 26 is a concentrated study in three character types: the fool who cannot receive wisdom, the sluggard whose laziness defeats him, and the quarrelsome person whose words destroy community.",
    images: ["/api/og?title=Proverbs+26+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
