import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Deuteronomy 28 Chapter Guide — Christian Study",
  description: "A deep guide to Deuteronomy 28 — the blessings for obedience and curses for disobedience of the Mosaic covenant, Moses's call to faithfulness on the plains of Moab, and how Christ redeems us from the curse of the law.",
  openGraph: { title: "Deuteronomy 28 Chapter Guide — Vine", description: "A guide to Deuteronomy 28 — covenant blessings and curses, Moses at Moab, and Christ who redeems us from the curse of the law.", images: ["/api/og?title=Deuteronomy+28+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Deuteronomy 28 Chapter Guide — Vine", description: "A deep guide to Deuteronomy 28 — covenant blessings, curses, and Christ's redemption.", images: ["/api/og?title=Deuteronomy+28+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
