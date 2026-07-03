import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 1 Chapter Guide — Christian Study",
  description: "A deep guide to Acts 1 — the risen Jesus appears to his disciples over forty days, commands them to wait for the Holy Spirit, ascends to the Father, and the community chooses Matthias to replace Judas before the coming of Pentecost.",
  openGraph: { title: "Acts 1 Chapter Guide — Vine", description: "A guide to Acts 1 — the Ascension of Jesus, the promise of the Holy Spirit, waiting in Jerusalem, and the choosing of Matthias.", images: ["/api/og?title=Acts+1+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 1 Chapter Guide — Vine", description: "A deep guide to Acts 1 — the Ascension, the promise of the Spirit, and the choosing of Matthias.", images: ["/api/og?title=Acts+1+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
