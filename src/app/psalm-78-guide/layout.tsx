import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 78 Study Guide -- Tell to the Coming Generation",
  description: "Verse-by-verse study of Psalm 78 -- Asaph's 72-verse history sermon: the parable of Israel's forgetting, the manna and the wilderness testing, the ark surrendered at Shiloh, and the surprise ending -- God chooses David, and Zion, and shepherds his people still.",
  openGraph: {
    title: "Psalm 78 Study Guide -- Tell to the Coming Generation",
    description: "Deep dive into Psalm 78: history as parable (quoted of Jesus in Matthew 13:35), the anatomy of forgetting, grace that remembered they were flesh, and the shepherd-king ending.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
