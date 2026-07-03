import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 21 Guide - Christian Study",
  description: "A deep guide to Acts 21 - Paul's resolute journey to Jerusalem despite warnings from the disciples and the prophet Agabus, his report to James, the temple vow, and the riot that led to his arrest by the Roman tribune.",
  openGraph: { title: "Acts 21 Guide - Vine", description: "A guide to Acts 21 - warnings on the way, the temple vow, the riot, and Paul's arrest in Jerusalem.", images: ["/api/og?title=Acts+21+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 21 Guide - Vine", description: "A deep guide to Acts 21.", images: ["/api/og?title=Acts+21+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
