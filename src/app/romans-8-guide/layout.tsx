import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Romans 8 Guide — No Condemnation, No Separation",
  description: "A deep guide to Romans 8, the summit of the gospel — no condemnation for those in Christ Jesus, the law of the Spirit of life, the indwelling Spirit and resurrection life, adoption as sons crying Abba Father, fellow heirs with Christ, hope in suffering, the Spirit's intercession, all things working together for good, the golden chain of salvation, and the promise that nothing can separate us from the love of God in Christ Jesus.",
  openGraph: { title: "Romans 8 Guide — Vine", description: "A guide to Romans 8 — no condemnation in Christ, life in the Spirit, hope in suffering, and more than conquerors through him who loved us.", images: ["/api/og?title=Romans+8+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 8 Guide — Vine", description: "A deep guide to Romans 8, the summit of the gospel.", images: ["/api/og?title=Romans+8+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
