import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 54 Study Guide -- Save Me, O God, by Your Name",
  description: "Verse-by-verse study of Psalm 54 -- David's brief, urgent prayer when the Ziphites betrayed him to Saul, his confidence that God is his helper, and his vow of freewill thanksgiving.",
  openGraph: {
    title: "Psalm 54 Study Guide -- Save Me, O God, by Your Name",
    description: "Deep dive into Psalm 54: salvation by God's name, betrayal by the Ziphites, and the turn from urgent plea to confident praise.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
