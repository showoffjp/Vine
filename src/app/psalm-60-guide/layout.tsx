import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 60 Study Guide -- With God We Shall Do Valiantly",
  description: "Verse-by-verse study of Psalm 60 -- a national lament after military defeat, God's sovereign claim over the nations, and the confidence that vain is the salvation of man.",
  openGraph: {
    title: "Psalm 60 Study Guide -- With God We Shall Do Valiantly",
    description: "Deep dive into Psalm 60: wrestling with God after defeat, the divine apportioning of the lands, and the truth that victory comes only through God.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
