import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts Chapter 12 Guide — Christian Study",
  description: "A deep guide to Acts chapter 12 — the martyrdom of James, Peter's miraculous escape from prison, Rhoda at the gate, the sudden death of Herod Agrippa I for accepting divine honor, and Luke's declaration that the word of God continued to increase and spread.",
  openGraph: { title: "Acts 12 Guide — Vine", description: "A guide to Acts 12 — James martyred, Peter freed by an angel, Herod struck dead, and the word of God advancing.", images: ["/api/og?title=Acts+12+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 12 Guide — Vine", description: "A deep guide to Acts chapter 12.", images: ["/api/og?title=Acts+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
