import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Corinthians 4 Guide - Christian Study",
  description: "A deep guide to 1 Corinthians 4 - Paul defines apostles as servants of Christ and stewards of the mysteries of God, rebukes Corinthian arrogance as fools for Christ's sake, and admonishes the church as a father, for the kingdom of God consists not in talk but in power.",
  openGraph: { title: "1 Corinthians 4 Guide - Vine", description: "A guide to 1 Corinthians 4 - stewards of the mysteries, fools for Christ, and a father's admonition.", images: ["/api/og?title=1+Corinthians+4+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 4 Guide - Vine", description: "A deep guide to 1 Corinthians 4.", images: ["/api/og?title=1+Corinthians+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
