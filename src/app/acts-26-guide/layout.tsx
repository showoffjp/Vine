import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 26 Guide - Christian Study",
  description: "A deep guide to Acts chapter 26 - Paul's great defense before King Agrippa and Festus, his life as a Pharisee and persecutor, the Damascus road encounter and commission to the Gentiles, and the famous exchange ending with 'In a short time would you persuade me to be a Christian?'",
  openGraph: { title: "Acts 26 Guide - Vine", description: "A guide to Acts 26 - Paul before Agrippa, the Damascus road, and almost persuaded.", images: ["/api/og?title=Acts+26+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 26 Guide - Vine", description: "A deep guide to Acts chapter 26.", images: ["/api/og?title=Acts+26+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
