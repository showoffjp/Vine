import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proverbs 27 Bible Study Guide",
  description: "Proverbs 27 is a rich collection of wisdom sayings covering friendship, the heart, faithful stewardship, and the danger of flattery. A deep guide to this chapter of practical wisdom.",
  openGraph: {
    title: "Proverbs 27 Bible Study Guide -- Vine",
    description: "Proverbs 27 covers friendship, the heart, iron sharpening iron, and faithful stewardship -- wisdom for everyday life.",
    images: ["/api/og?title=Proverbs+27+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proverbs 27 Bible Study Guide -- Vine",
    description: "Proverbs 27 covers friendship, the heart, iron sharpening iron, and faithful stewardship -- wisdom for everyday life.",
    images: ["/api/og?title=Proverbs+27+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
