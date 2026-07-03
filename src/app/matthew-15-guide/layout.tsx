import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Matthew 15 Guide - Christian Study",
  description: "A deep guide to Matthew chapter 15 - the tradition of the elders and true defilement, the heart as the source of purity, the great faith of the Canaanite woman, the healing of the crowds on the mountain, and the feeding of the four thousand.",
  openGraph: { title: "Matthew 15 Guide - Vine", description: "A guide to Matthew 15 - tradition vs. the heart, the Canaanite woman's faith, and the feeding of the four thousand.", images: ["/api/og?title=Matthew+15+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 15 Guide - Vine", description: "A deep guide to Matthew chapter 15.", images: ["/api/og?title=Matthew+15+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
