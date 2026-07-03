import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 8: The Seventh Seal, Silence in Heaven, and the First Four Trumpets | Vine",
  description:
    "A comprehensive study guide to Revelation 8 -- the opening of the seventh seal, the half-hour silence in heaven, the golden censer and prayers of the saints, and the first four trumpet judgments striking earth, sea, rivers, and celestial bodies.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
