import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 42 Guide - Christian Study",
  description: "A deep guide to Genesis 42 - driven by famine, Jacob sends his sons to Egypt, where Joseph recognizes and tests them, holds Simeon hostage, and secretly returns their money, beginning the brothers' road to repentance and the family's reconciliation.",
  openGraph: { title: "Genesis 42 Guide - Vine", description: "A guide to Genesis 42 - famine, the brothers sent to Egypt, Joseph's testing, and Jacob's grief.", images: ["/api/og?title=Genesis+42+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 42 Guide - Vine", description: "A deep guide to Genesis 42.", images: ["/api/og?title=Genesis+42+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
