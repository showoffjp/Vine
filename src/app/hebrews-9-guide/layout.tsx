import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Hebrews 9 Chapter Guide — Christian Study",
  description: "A deep guide to Hebrews 9 — the earthly tabernacle, the high priest's annual entry, the limitations of the old covenant, and Christ entering once for all as the mediator of the new covenant with his own blood.",
  openGraph: { title: "Hebrews 9 Chapter Guide — Vine", description: "A guide to Hebrews 9 — the tabernacle, Day of Atonement, Christ's once-for-all sacrifice, and the new covenant.", images: ["/api/og?title=Hebrews+9+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Hebrews 9 Chapter Guide — Vine", description: "A deep guide to Hebrews 9 — Christ as the true high priest and mediator of the new covenant.", images: ["/api/og?title=Hebrews+9+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
