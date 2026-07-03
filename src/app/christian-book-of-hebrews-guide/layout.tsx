import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Hebrews Guide — Christian Study",
  description: "A deep guide to the Letter to the Hebrews — Christ as the superior revelation, the great high priest after the order of Melchizedek, the new and better covenant, the once-for-all sacrifice, the hall of faith in chapter 11, and the call to persevere.",
  openGraph: { title: "Book of Hebrews Guide — Vine", description: "A guide to Hebrews — Christ superior to the angels and Moses, the great high priest, the better covenant, and the call to persevere.", images: ["/api/og?title=Book+of+Hebrews+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Hebrews Guide — Vine", description: "A deep guide to the Letter to the Hebrews.", images: ["/api/og?title=Book+of+Hebrews+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
