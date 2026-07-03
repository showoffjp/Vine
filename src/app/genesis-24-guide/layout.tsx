import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 24 Chapter Guide — Christian Study",
  description: "A deep guide to Genesis 24 — Abraham's servant finds a bride for Isaac, the prayer at the well, Rebekah's willingness to go, and the beautiful theology of divine providence in marriage.",
  openGraph: { title: "Genesis 24 Chapter Guide — Vine", description: "A guide to Genesis 24 — the servant's oath, prayer at the well, Rebekah's decisive 'I will go,' and Isaac and Rebekah's marriage.", images: ["/api/og?title=Genesis+24+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 24 Chapter Guide — Vine", description: "A deep guide to Genesis 24 — divine providence in marriage and the faithful servant's prayer.", images: ["/api/og?title=Genesis+24+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
