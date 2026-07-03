import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 12 Guide — The Call of Abraham — Christian Study",
  description: "A deep guide to Genesis 12 — God's call to Abram to leave Ur and journey to the promised land, the Abrahamic covenant of land, seed, and blessing for all nations, and how this pivotal chapter launches the entire story of redemption that finds its fulfillment in Jesus Christ.",
  openGraph: { title: "Genesis 12 Guide — The Call of Abraham — Vine", description: "A guide to Genesis 12 — the call of Abram, the Abrahamic covenant, and God's promise to bless all families of the earth through one man of faith.", images: ["/api/og?title=Genesis+12+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 12 Guide — The Call of Abraham — Vine", description: "A deep guide to Genesis 12 and the call of Abraham that launched the story of redemption.", images: ["/api/og?title=Genesis+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
