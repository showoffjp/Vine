import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 48 Guide - Christian Study",
  description: "A deep guide to Genesis chapter 48 - the dying Jacob adopts and blesses Joseph's sons Ephraim and Manasseh, crossing his hands to set the younger before the elder in covenant inheritance.",
  openGraph: { title: "Genesis 48 Guide - Vine", description: "A guide to Genesis 48 - Jacob adopts Joseph's sons, the crossed hands of blessing, and the younger set before the elder.", images: ["/api/og?title=Genesis+48+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 48 Guide - Vine", description: "A deep guide to Genesis chapter 48.", images: ["/api/og?title=Genesis+48+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
