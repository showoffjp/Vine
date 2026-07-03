import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Revelation 22 Guide — Come Lord Jesus — Christian Study",
  description: "A deep guide to Revelation 22 — the final chapter of Scripture, the river of the water of life, the tree of life in the New Jerusalem, the promised return of Jesus Christ, and the open invitation to come and take the water of life freely. Explore the closing vision of John, the warnings of the prophecy, and the urgency of the Spirit and the Bride saying Come.",
  openGraph: { title: "Revelation 22 Guide — Come Lord Jesus — Vine", description: "A guide to Revelation 22 — the tree of life, the New Jerusalem, and the final invitation of Scripture to come to the water of life freely.", images: ["/api/og?title=Revelation+22+Guide"] },
  twitter: { card: "summary_large_image", title: "Revelation 22 Guide — Come Lord Jesus — Vine", description: "A deep guide to Revelation 22 and the final invitation of Scripture.", images: ["/api/og?title=Revelation+22+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
