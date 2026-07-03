import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 23 Guide - Christian Study",
  description: "A deep guide to Acts chapter 23 - Paul before the Sanhedrin and the resurrection that divided the council, the Lord's promise that Paul would testify at Rome, the plot of more than forty men uncovered by Paul's nephew, and the night transfer under Roman guard to Governor Felix at Caesarea.",
  openGraph: { title: "Acts 23 Guide - Vine", description: "A guide to Acts 23 - Paul before the Sanhedrin, the Lord's encouragement and the plot, and the transfer to Caesarea.", images: ["/api/og?title=Acts+23+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 23 Guide - Vine", description: "A deep guide to Acts chapter 23.", images: ["/api/og?title=Acts+23+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
