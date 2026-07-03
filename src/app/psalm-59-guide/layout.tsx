import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 59 Study Guide -- O My Strength, I Will Watch for You",
  description: "Verse-by-verse study of Psalm 59 -- David's prayer when Saul sent men to watch his house and kill him, God as fortress and strength, and the refrain of confident watching.",
  openGraph: {
    title: "Psalm 59 Study Guide -- O My Strength, I Will Watch for You",
    description: "Deep dive into Psalm 59: deliverance from bloodthirsty enemies, God my fortress and steadfast love, and the resolve to sing of God's strength in the morning.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
