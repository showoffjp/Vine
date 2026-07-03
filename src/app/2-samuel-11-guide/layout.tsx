import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Samuel 11 Guide — Christian Study",
  description: "A deep guide to 2 Samuel 11 — David sees Bathsheba, commits adultery, attempts to cover up her pregnancy, places Uriah at the front of the battle to be killed, and takes Bathsheba as his wife. The thing that David had done displeased the LORD.",
  openGraph: { title: "2 Samuel 11 Guide — Vine", description: "A guide to 2 Samuel 11 — David and Bathsheba, the cover-up, Uriah the Hittite, and the displeasure of the LORD.", images: ["/api/og?title=2+Samuel+11+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Samuel 11 Guide — Vine", description: "A deep guide to 2 Samuel 11.", images: ["/api/og?title=2+Samuel+11+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
