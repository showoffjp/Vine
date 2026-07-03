import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Samuel 7 Chapter Guide — Christian Study",
  description: "A deep guide to 1 Samuel 7 — the ark at Kiriath Jearim for twenty years, Israel lamenting and returning to God, Samuel gathering all Israel at Mizpah to fast and confess, the Lord thundering against the Philistines, the great victory, and the Ebenezer stone: Thus far the Lord has helped us.",
  openGraph: { title: "1 Samuel 7 Chapter Guide — Vine", description: "A guide to 1 Samuel 7 — Israel's revival at Mizpah, the Lord's victory over the Philistines, and the Ebenezer stone of help.", images: ["/api/og?title=1+Samuel+7+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Samuel 7 Chapter Guide — Vine", description: "A deep guide to 1 Samuel 7 — Israel returns to God and the Ebenezer stone.", images: ["/api/og?title=1+Samuel+7+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
