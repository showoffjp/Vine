import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of 2 Peter Guide - Christian Study",
  description: "A deep guide to the Second Letter of Peter - growing in the knowledge of Christ, confirming your calling, the trustworthiness of Scripture, warnings against false teachers, and the promise of the day of the Lord and the new heavens and new earth.",
  openGraph: { title: "Book of 2 Peter Guide - Vine", description: "A guide to 2 Peter - growing in grace, confirming your calling, false teachers, and the day of the Lord.", images: ["/api/og?title=2+Peter+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 2 Peter Guide - Vine", description: "A deep guide to the Second Letter of Peter.", images: ["/api/og?title=2+Peter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
