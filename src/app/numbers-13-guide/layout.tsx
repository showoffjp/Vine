import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Numbers 13 Chapter Guide — Christian Study",
  description: "A deep guide to Numbers 13 — the twelve spies sent into Canaan, forty days of exploration, the cluster of grapes from the Valley of Eshcol, the ten spies' bad report of giants, and Caleb and Joshua's courageous minority report of faith.",
  openGraph: { title: "Numbers 13 Chapter Guide — Vine", description: "A guide to Numbers 13 — twelve spies, the land flowing with milk and honey, the Nephilim giants, and the faith of Caleb and Joshua.", images: ["/api/og?title=Numbers+13+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Numbers 13 Chapter Guide — Vine", description: "A deep guide to Numbers 13 — faith vs. fear at the border of Canaan.", images: ["/api/og?title=Numbers+13+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
