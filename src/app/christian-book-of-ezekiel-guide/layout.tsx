import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Ezekiel Guide - Christian Study",
  description: "A deep guide to the Book of Ezekiel - the prophet of the exile, the vision of Gods glory, the watchman, judgment on Jerusalem, the valley of dry bones, a new heart and a new spirit, and the vision of the restored temple.",
  openGraph: { title: "Book of Ezekiel Guide - Vine", description: "A guide to Ezekiel - the glory of God, the watchman, the valley of dry bones, a new heart, and the restored temple.", images: ["/api/og?title=Ezekiel+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Ezekiel Guide - Vine", description: "A deep guide to the Book of Ezekiel.", images: ["/api/og?title=Ezekiel+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
