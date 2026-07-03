import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 27 Guide - Christian Study",
  description: "A deep guide to Acts chapter 27 - Paul's dramatic sea voyage toward Rome as a prisoner, the warning at Fair Havens, the violent northeaster called Euroclydon, the angel's promise that no life would be lost, and the shipwreck that brought all 276 souls safely to the shore of Malta.",
  openGraph: { title: "Acts 27 Guide - Vine", description: "A guide to Acts 27 - Paul's voyage to Rome, the great storm, his faith in crisis, and the shipwreck at Malta.", images: ["/api/og?title=Acts+27+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 27 Guide - Vine", description: "A deep guide to Acts chapter 27.", images: ["/api/og?title=Acts+27+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
