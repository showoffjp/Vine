import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Psalm 51 Guide — Create in Me a Clean Heart",
  description: "A deep guide to Psalm 51 — David's prayer of repentance after Nathan confronted him over Bathsheba: have mercy on me O God, against you only have I sinned, create in me a clean heart, restore the joy of salvation, and the sacrifice of a broken and contrite heart.",
  openGraph: { title: "Psalm 51 Guide — Vine", description: "A guide to Psalm 51 — David's prayer of repentance, the cry for a clean heart, and the joy of salvation restored.", images: ["/api/og?title=Psalm+51+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 51 Guide — Vine", description: "A deep guide to Psalm 51 and the prayer for a clean heart.", images: ["/api/og?title=Psalm+51+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
