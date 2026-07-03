import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 29 Guide - Christian Study",
  description: "A deep guide to Genesis 29 - Jacob meets Rachel at the well, Laban's deception in giving Leah, the fourteen years of service, and the birth of Leah's sons through whom God builds the tribes of Israel and the line that leads to Christ.",
  openGraph: { title: "Genesis 29 Guide - Vine", description: "A guide to Genesis 29 - the well, the deceiver deceived, the unloved Leah, and the birth of the tribes.", images: ["/api/og?title=Genesis+29+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 29 Guide - Vine", description: "A deep guide to Genesis 29.", images: ["/api/og?title=Genesis+29+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
