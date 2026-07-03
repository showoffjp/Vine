import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Amos Guide — Christian Study",
  description: "A deep guide to the Book of Amos — the shepherd prophet from Tekoa, God's judgment on the nations and Israel, the cry to let justice roll down like waters, the five visions of judgment, and the promise to restore the fallen tent of David.",
  openGraph: { title: "Book of Amos Guide — Vine", description: "A guide to Amos — the shepherd prophet, judgment on the nations, justice rolling down, the visions, and the promise of restoration.", images: ["/api/og?title=Book+of+Amos+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Amos Guide — Vine", description: "A deep guide to the Book of Amos.", images: ["/api/og?title=Book+of+Amos+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
