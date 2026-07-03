import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 10 Guide — Peter and Cornelius — Christian Study",
  description: "A deep guide to Acts 10 — the vision of the sheet, the faith of Cornelius, the outpouring of the Holy Spirit on the Gentiles, and the expansion of the gospel to all nations through the apostle Peter.",
  openGraph: { title: "Acts 10 Guide — Peter and Cornelius — Vine", description: "Study Acts 10: Peter's vision, the household of Cornelius, and the Gentile Pentecost when the Holy Spirit fell on all flesh.", images: ["/api/og?title=Acts+10+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 10 Guide — Peter and Cornelius — Vine", description: "A guide to Acts 10 — the gospel goes to the Gentiles.", images: ["/api/og?title=Acts+10+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
