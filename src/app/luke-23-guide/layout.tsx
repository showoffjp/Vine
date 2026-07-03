import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 23 Guide — Christian Study",
  description: "A deep guide to Luke 23 — Jesus before Pilate and Herod, the release of Barabbas, the crucifixion at Golgotha, the prayer for forgiveness, the promise to the penitent thief, the tearing of the temple curtain, and the burial of Jesus.",
  openGraph: { title: "Luke 23 Guide — Vine", description: "A guide to Luke 23 — the trial, crucifixion, final words from the cross, and burial of Jesus.", images: ["/api/og?title=Luke+23+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 23 Guide — Vine", description: "A deep guide to Luke 23 — the crucifixion of Jesus Christ.", images: ["/api/og?title=Luke+23+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
