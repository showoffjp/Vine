import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 19 Guide - Christian Study",
  description: "A deep guide to Acts chapter 19 - Paul in Ephesus during his third journey, the Ephesian disciples who receive the Holy Spirit, two years of teaching in the hall of Tyrannus, extraordinary miracles and the failure of the sons of Sceva, the public burning of magic books, and the riot of the silversmiths over Artemis.",
  openGraph: { title: "Acts 19 Guide - Vine", description: "A guide to Acts 19 - Paul in Ephesus, the sons of Sceva, the burning of magic books, and the riot of Artemis.", images: ["/api/og?title=Acts+19+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 19 Guide - Vine", description: "A deep guide to Acts chapter 19.", images: ["/api/og?title=Acts+19+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
