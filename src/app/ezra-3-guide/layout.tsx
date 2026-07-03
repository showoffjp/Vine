import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Ezra 3 Chapter Guide — Christian Study",
  description: "A deep guide to Ezra 3 — the returned exiles rebuild the altar of burnt offerings, celebrate the Feast of Tabernacles, and lay the foundation of the temple to a mixture of weeping and shouts of joy.",
  openGraph: { title: "Ezra 3 Chapter Guide — Vine", description: "A guide to Ezra 3 — rebuilding the altar, the Feast of Tabernacles, laying the temple foundation, and the intermingled weeping and rejoicing of a restored people.", images: ["/api/og?title=Ezra+3+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Ezra 3 Chapter Guide — Vine", description: "A deep guide to Ezra 3 — the return from exile, the altar rebuilt, and a foundation laid.", images: ["/api/og?title=Ezra+3+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
