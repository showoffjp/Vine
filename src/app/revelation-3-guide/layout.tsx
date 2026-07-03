import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Revelation 3 Chapter Guide — Christian Study",
  description: "A deep guide to Revelation 3 — the letters to Sardis, Philadelphia, and Laodicea. The dead church warned to wake up, the faithful few clothed in white, the open door no one can shut, and the lukewarm church called to repent before Christ who stands and knocks.",
  openGraph: { title: "Revelation 3 Chapter Guide — Vine", description: "A guide to Revelation 3 — Sardis, Philadelphia, and Laodicea: dead reputation, faithful endurance, and lukewarm comfort rebuked by the risen Christ.", images: ["/api/og?title=Revelation+3+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Revelation 3 Chapter Guide — Vine", description: "A deep guide to Revelation 3 — letters to Sardis, Philadelphia, and Laodicea.", images: ["/api/og?title=Revelation+3+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
