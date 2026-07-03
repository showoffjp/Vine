import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Kings 13 Guide - Christian Study",
  description: "A deep guide to 1 Kings chapter 13 - the man of God confronts Jeroboam's altar at Bethel, the old prophet's deception, and the solemn judgment on the road that warns of the seriousness of obeying God's word.",
  openGraph: { title: "1 Kings 13 Guide - Vine", description: "A guide to 1 Kings 13 - the man of God and the altar, the old prophet's deception, and judgment on the road.", images: ["/api/og?title=1+Kings+13+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 13 Guide - Vine", description: "A deep guide to 1 Kings chapter 13.", images: ["/api/og?title=1+Kings+13+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
