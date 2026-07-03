import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Psalm 103 Guide — Christian Study",
  description: "A deep guide to Psalm 103 — Bless the Lord, O my soul, and forget not all his benefits. God who forgives all our iniquity, who is slow to anger and abounding in steadfast love, who removes our transgressions as far as the east is from the west, and who shows compassion as a father to his children.",
  openGraph: { title: "Psalm 103 Guide — Vine", description: "A guide to Psalm 103 — bless the Lord, O my soul, his benefits, mercy slow to anger, sins removed as far as east from west, and a father's compassion.", images: ["/api/og?title=Psalm+103+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 103 Guide — Vine", description: "A deep guide to Psalm 103.", images: ["/api/og?title=Psalm+103+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
