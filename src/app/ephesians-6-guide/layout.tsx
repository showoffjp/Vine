import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Ephesians 6 Guide — The Whole Armor of God",
  description: "A deep guide to Ephesians 6 — children and parents, bondservants and masters, the call to be strong in the Lord, the pieces of the whole armor of God against the schemes of the devil, and praying at all times in the Spirit.",
  openGraph: { title: "Ephesians 6 Guide — Vine", description: "A guide to Ephesians 6 — the Christian household, spiritual warfare, the whole armor of God, and prayer in the Spirit.", images: ["/api/og?title=Ephesians+6+Guide"] },
  twitter: { card: "summary_large_image", title: "Ephesians 6 Guide — Vine", description: "A deep guide to Ephesians 6 and the whole armor of God.", images: ["/api/og?title=Ephesians+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
