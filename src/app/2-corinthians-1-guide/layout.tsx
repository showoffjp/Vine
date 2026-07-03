import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Corinthians 1 Guide — God of All Comfort — Christian Study",
  description: "A deep study of 2 Corinthians 1 — the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our troubles so that we may comfort those in any trouble with the comfort we ourselves receive from God. Explore Paul's theology of affliction, the purposive nature of suffering, and the extraordinary consolation available to those who rely on the God who raises the dead.",
  openGraph: { title: "2 Corinthians 1 Guide — God of All Comfort — Vine", description: "Explore 2 Corinthians 1 — the Father of mercies, the God of all comfort, Paul's theology of suffering, and the comfort that flows from God through the afflicted to others.", images: ["/api/og?title=2+Corinthians+1+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Corinthians 1 Guide — God of All Comfort — Vine", description: "A deep study of 2 Corinthians 1 and the God who comforts us in all our troubles so we may comfort others.", images: ["/api/og?title=2+Corinthians+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
