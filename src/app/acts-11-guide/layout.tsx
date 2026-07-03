import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 11 Chapter Guide – Gentiles Receive the Spirit, Antioch | The Vine",
  description: "A deep guide to Acts 11 — Peter defending his visit to Cornelius before the Jerusalem church, the founding of the church at Antioch, Barnabas and Saul's year of ministry there, and disciples first called Christians.",
  openGraph: { title: "Acts 11 Chapter Guide – The Vine", description: "Acts 11: Peter defends the Cornelius visit, the church at Antioch is founded, disciples first called Christians.", images: ["/api/og?title=Acts+11+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 11 Chapter Guide – The Vine", description: "A deep guide to Acts 11 — Antioch, first called Christians, Peter before Jerusalem.", images: ["/api/og?title=Acts+11+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
