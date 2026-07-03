import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Matthew 19 Guide - Christian Study",
  description: "A deep guide to Matthew chapter 19 - Jesus on marriage, divorce, and singleness, the blessing of the little children, the rich young man and the eye of the needle, and the promise of a hundredfold reward where the first will be last and the last first.",
  openGraph: { title: "Matthew 19 Guide - Vine", description: "A guide to Matthew 19 - marriage and singleness, the rich young man, and the rewards of the kingdom.", images: ["/api/og?title=Matthew+19+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 19 Guide - Vine", description: "A deep guide to Matthew chapter 19.", images: ["/api/og?title=Matthew+19+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
