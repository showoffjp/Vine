import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Proverbs 16 Guide - The Sovereignty of God and the Plans of Man - Christian Study",
  description: "A deep study of Proverbs 16 - the heart of man plans his way but the LORD establishes his steps. Explore divine sovereignty over human plans, committing your work to the LORD, the pride that goes before destruction, self-control that surpasses conquest, the crown of gray hair gained in righteousness, and the LORD who weighs the heart.",
  openGraph: {
    title: "Proverbs 16 Guide - The Sovereignty of God - Vine",
    description: "Study Proverbs 16: divine providence over human plans, committing your work to the LORD, pride before a fall, self-mastery over conquest, and the LORD who weighs the spirit.",
    images: ["/api/og?title=Proverbs+16+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proverbs 16 Guide - The Sovereignty of God - Vine",
    description: "A deep guide to Proverbs 16 and the wisdom of divine sovereignty, human responsibility, humility, and self-control.",
    images: ["/api/og?title=Proverbs+16+Guide"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
