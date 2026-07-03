import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Matthew 24 Guide - Christian Study",
  description: "A deep guide to Matthew chapter 24 - the Olivet Discourse, the destruction of the temple, the birth pains of the age, the abomination of desolation and great tribulation, the coming of the Son of Man, and the call to watchfulness.",
  openGraph: { title: "Matthew 24 Guide - Vine", description: "A guide to Matthew 24 - the Olivet Discourse, the great tribulation, and the coming of the Son of Man.", images: ["/api/og?title=Matthew+24+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 24 Guide - Vine", description: "A deep guide to Matthew chapter 24.", images: ["/api/og?title=Matthew+24+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
