import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Peter 4 Chapter Guide – Fiery Trials, Suffering for Christ | The Vine",
  description: "A deep guide to 1 Peter 4 covering arming yourself with Christ's attitude toward suffering, living for God's will and not human passions, the fiery trial of persecution and what it means to share in Christ's sufferings, the blessing of being reviled for the name of Christ, and using spiritual gifts as good stewards to serve God's glory.",
  openGraph: { title: "1 Peter 4 Chapter Guide – Fiery Trials, Suffering for Christ | The Vine", description: "1 Peter 4 on suffering for Christ, the fiery trial, love covering sins, spiritual gifts, and entrusting your soul to a faithful Creator.", images: ["/api/og?title=1+Peter+4+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Peter 4 Chapter Guide – The Vine", description: "A deep guide to 1 Peter 4 on fiery trials, suffering for Christ, spiritual gifts, and God's glory.", images: ["/api/og?title=1+Peter+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
