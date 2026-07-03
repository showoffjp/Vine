import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Romans 12 Guide — Christian Study",
  description: "A deep guide to Romans 12 — present your bodies as a living sacrifice, be transformed by the renewing of your mind, the one body with many members and differing gifts, love that is genuine, and the call to overcome evil with good.",
  openGraph: { title: "Romans 12 Guide — Vine", description: "A guide to Romans 12 — the living sacrifice, the renewed mind, the gifts of the body, genuine love, and overcoming evil with good.", images: ["/api/og?title=Romans+12+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 12 Guide — Vine", description: "A deep guide to Romans 12.", images: ["/api/og?title=Romans+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
