import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 18 Guide - Christian Study",
  description: "A deep guide to Acts chapter 18 - Paul's ministry in Corinth with Aquila and Priscilla, the Lord's vision of encouragement, the ruling of Gallio before the tribunal, Paul's return to Antioch and the start of his third journey, and the instruction of Apollos in the way of God more accurately.",
  openGraph: { title: "Acts 18 Guide - Vine", description: "A guide to Acts 18 - Paul in Corinth, before Gallio, and Apollos instructed by Priscilla and Aquila.", images: ["/api/og?title=Acts+18+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 18 Guide - Vine", description: "A deep guide to Acts chapter 18.", images: ["/api/og?title=Acts+18+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
