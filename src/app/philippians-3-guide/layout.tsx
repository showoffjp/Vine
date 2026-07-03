import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Philippians 3 Chapter Guide — Christian Study",
  description: "A deep guide to Philippians 3 — Paul warning against confidence in the flesh, counting all as loss for the surpassing worth of knowing Christ, pressing on toward the goal, and the hope of resurrection as citizens of heaven.",
  openGraph: { title: "Philippians 3 Chapter Guide — Vine", description: "A guide to Philippians 3 — all as loss for Christ, pressing on toward the goal, and citizenship in heaven.", images: ["/api/og?title=Philippians+3+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Philippians 3 Chapter Guide — Vine", description: "A deep guide to Philippians 3 — all as loss for Christ, the resurrection, and pressing on toward the goal.", images: ["/api/og?title=Philippians+3+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
