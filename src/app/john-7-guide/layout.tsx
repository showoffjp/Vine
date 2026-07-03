import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "John 7 Chapter Guide — Christian Study",
  description: "A deep guide to John 7 — Jesus at the Feast of Tabernacles, teaching in the temple courts, the crowd divided over who he is, and the great declaration on the last day of the feast: rivers of living water flowing through all who believe.",
  openGraph: { title: "John 7 Chapter Guide — Vine", description: "A guide to John 7 — Jesus at the Feast of Tabernacles, rivers of living water, and the divided crowd.", images: ["/api/og?title=John+7+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "John 7 Chapter Guide — Vine", description: "A deep guide to John 7 — the Feast of Tabernacles, living water, and division over Jesus.", images: ["/api/og?title=John+7+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
