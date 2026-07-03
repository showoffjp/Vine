import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 25 Guide - Christian Study",
  description: "A deep guide to Acts 25 - Festus and the plot against Paul, Paul's appeal to Caesar as a Roman citizen, and Festus consulting King Agrippa and Bernice as the stage is set for Paul to testify before kings.",
  openGraph: { title: "Acts 25 Guide - Vine", description: "A guide to Acts 25 - Paul's appeal to Caesar and his case before Agrippa.", images: ["/api/og?title=Acts+25+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 25 Guide - Vine", description: "A deep guide to Acts 25.", images: ["/api/og?title=Acts+25+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
