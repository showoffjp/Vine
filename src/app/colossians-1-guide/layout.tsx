import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Colossians 1 Guide — The Supremacy of Christ — Christian Study",
  description: "A deep study of Colossians 1 — the supremacy and preeminence of Jesus Christ over all creation. Explore the Christ hymn declaring him the image of the invisible God, the firstborn of all creation, the one in whom all things hold together, the head of the church, and the one in whom all the fullness of God was pleased to dwell. Discover the cosmic reconciliation achieved through the blood of his cross.",
  openGraph: { title: "Colossians 1 Guide — The Supremacy of Christ — Vine", description: "A guide to Colossians 1 — the image of the invisible God, Christ above all, and the reconciliation of all things through the cross.", images: ["/api/og?title=Colossians+1+Guide"] },
  twitter: { card: "summary_large_image", title: "Colossians 1 Guide — The Supremacy of Christ — Vine", description: "A deep study of Colossians 1 and the preeminence of Jesus Christ over all creation.", images: ["/api/og?title=Colossians+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
