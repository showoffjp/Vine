import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 39 Study Guide -- I Will Watch My Ways",
  description: "Verse-by-verse study of Psalm 39 -- David's meditation on human frailty, the brevity of life, and hope in God alone, with commentary from Calvin, Spurgeon, and Kidner.",
  openGraph: {
    title: "Psalm 39 Study Guide -- I Will Watch My Ways",
    description: "Deep dive into Psalm 39: the silence of grief, man as a mere breath, and the surprising turn toward God's discipline as mercy.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
