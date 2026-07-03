import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Proverbs 15 Guide - The Soft Answer and the Eyes of the LORD - Christian Study",
  description: "A deep study of Proverbs 15 - the soft answer that turns away wrath, the gentle tongue that is a tree of life, the all-seeing eyes of the LORD in every place, the better-than proverbs of contentment and love over riches, the glad heart and the cheerful countenance, the value of wise counsel, and the humility that comes before honor.",
  openGraph: {
    title: "Proverbs 15 Guide - The Soft Answer - Vine",
    description: "Study Proverbs 15: the power of gentle speech, divine omniscience, contentment over wealth, the heart and the countenance, wise counsel, and humility before honor.",
    images: ["/api/og?title=Proverbs+15+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proverbs 15 Guide - The Soft Answer - Vine",
    description: "A deep guide to Proverbs 15 and the wisdom of the soft answer, the eyes of the LORD, and the fear of the LORD that is instruction in wisdom.",
    images: ["/api/og?title=Proverbs+15+Guide"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
