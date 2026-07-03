import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Titus 3 Chapter Guide — The Vine",
  description: "Study Titus 3: Christian conduct in society, salvation by grace through the washing of regeneration, and Paul's final instructions. Not by works but by God's mercy.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
