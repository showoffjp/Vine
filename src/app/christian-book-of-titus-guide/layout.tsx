import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Titus Guide - Christian Study",
  description: "A deep guide to Pauls Letter to Titus - appointing elders in Crete, sound doctrine and healthy teaching, the grace of God training us to live godly lives, good works as the fruit of faith, and the blessed hope.",
  openGraph: { title: "Book of Titus Guide - Vine", description: "A guide to Titus - appointing elders, sound doctrine, the grace of God training us, good works, and the blessed hope.", images: ["/api/og?title=Titus+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Titus Guide - Vine", description: "A deep guide to the Letter to Titus.", images: ["/api/og?title=Titus+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
