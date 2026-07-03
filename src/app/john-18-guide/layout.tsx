import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "John 18 Guide - Christian Study",
  description: "A deep guide to John chapter 18 - the betrayal and arrest in the garden across the Kidron, Jesus before Annas while Peter denies him three times by the charcoal fire, and the trial before Pilate where the dialogue turns on kingship and truth.",
  openGraph: { title: "John 18 Guide - Vine", description: "A guide to John 18 - the arrest in the garden, Peter's denials, and Jesus before Pilate.", images: ["/api/og?title=John+18+Guide"] },
  twitter: { card: "summary_large_image", title: "John 18 Guide - Vine", description: "A deep guide to John chapter 18.", images: ["/api/og?title=John+18+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
