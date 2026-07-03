import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Kings 24 Guide - Christian Study",
  description: "A deep guide to 2 Kings chapter 24 - the beginning of the end for Judah, the rebellion of Jehoiakim, the first great deportation to Babylon, and the reign of Zedekiah that set the stage for the final exile.",
  openGraph: { title: "2 Kings 24 Guide - Vine", description: "A guide to 2 Kings 24 - the rebellion of Jehoiakim, the first deportation, and the road to exile.", images: ["/api/og?title=2+Kings+24+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Kings 24 Guide - Vine", description: "A deep guide to 2 Kings chapter 24.", images: ["/api/og?title=2+Kings+24+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
