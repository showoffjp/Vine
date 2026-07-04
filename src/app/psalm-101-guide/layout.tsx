import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 101 Study Guide -- I Will Sing of Steadfast Love and Justice",
  description: "Verse-by-verse study of Psalm 101 -- David's vow of integrity: the king's manifesto for his own heart, his house, and his court, and its fulfillment in Christ the perfect King.",
  openGraph: {
    title: "Psalm 101 Study Guide -- I Will Sing of Steadfast Love and Justice",
    description: "Deep dive into Psalm 101: worship before ethics, integrity of heart at home, the purged court, and the Son of David who alone kept the king's vow perfectly.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
