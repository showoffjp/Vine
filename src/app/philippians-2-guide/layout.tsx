import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Philippians 2 Guide — Humility and Exaltation of Christ — Christian Study",
  description: "A deep guide to Philippians 2 — Paul’s call to Christlike humility, the magnificent Christ hymn of verses 6–11, the kenosis of the eternal Son, the pattern of self-emptying love, working out salvation with fear and trembling, and the confession that every knee shall bow and every tongue confess that Jesus Christ is Lord.",
  openGraph: { title: "Philippians 2 Guide — Vine", description: "A guide to Philippians 2 — the Christ hymn, kenosis, humility, and the exaltation of Jesus above every name.", images: ["/api/og?title=Philippians+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Philippians 2 Guide — Vine", description: "A deep guide to Philippians 2 and the humility and exaltation of Christ.", images: ["/api/og?title=Philippians+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
