import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Leviticus Guide — Christian Study",
  description: "A deep guide to the Book of Leviticus — the system of sacrifice, the Aaronic priesthood, the laws of clean and unclean, the Day of Atonement and the scapegoat, and the call to holiness fulfilled in Christ, our perfect sacrifice and high priest.",
  openGraph: { title: "Book of Leviticus Guide — Vine", description: "A guide to Leviticus — the offerings, the priesthood, clean and unclean, the Day of Atonement, and the call to holiness.", images: ["/api/og?title=Book+of+Leviticus+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Leviticus Guide — Vine", description: "A deep guide to the Book of Leviticus.", images: ["/api/og?title=Book+of+Leviticus+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
