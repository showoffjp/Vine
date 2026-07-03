import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 9 Guide - Christian Study",
  description: "A deep guide to Luke chapter 9 - the sending of the Twelve, the feeding of the five thousand, Peter's confession of Christ, the first passion prediction and the call to take up the cross daily, the Transfiguration, and the bracing cost of following Jesus toward Jerusalem.",
  openGraph: { title: "Luke 9 Guide - Vine", description: "A guide to Luke 9 - feeding the five thousand, Peter's confession, the cross, and the Transfiguration.", images: ["/api/og?title=Luke+9+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 9 Guide - Vine", description: "A deep guide to Luke chapter 9.", images: ["/api/og?title=Luke+9+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
