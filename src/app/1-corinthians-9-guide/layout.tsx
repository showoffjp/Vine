import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Corinthians 9 Guide - Christian Study",
  description: "A deep guide to 1 Corinthians 9 - Paul defends his apostleship and his right to support, yet surrenders it for the gospel, becoming all things to all people and disciplining himself like an athlete to win an imperishable prize.",
  openGraph: { title: "1 Corinthians 9 Guide - Vine", description: "A guide to 1 Corinthians 9 - the rights of an apostle, Paul forgoing his rights, all things to all people, and running to win.", images: ["/api/og?title=1+Corinthians+9+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 9 Guide - Vine", description: "A deep guide to 1 Corinthians 9.", images: ["/api/og?title=1+Corinthians+9+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
