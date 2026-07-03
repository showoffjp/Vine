import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 1 Guide — Christian Study of Creation",
  description: "A deep guide to Genesis 1 — the creation of the heavens and the earth, the six days of creation, the image of God (imago dei), the goodness of creation, and the Sabbath rest. Discover who God is and why he created — not merely how.",
  openGraph: { title: "Genesis 1 Guide — Vine", description: "A guide to Genesis 1 — creation, the image of God, the goodness of all things, and the Sabbath rhythm.", images: ["/api/og?title=Genesis+1+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 1 Guide — Vine", description: "A deep guide to Genesis 1 and the character of God revealed in creation.", images: ["/api/og?title=Genesis+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
