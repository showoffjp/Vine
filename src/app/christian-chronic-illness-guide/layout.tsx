import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Chronic Illness",
  description: "Living with chronic illness as a Christian — the theology of suffering and the body, Paul's thorn in the flesh, the problem of unanswered prayers for healing, finding meaning in limitation, lament and hope, and how the church can care for those who do not get better.",
  openGraph: { title: "Christian Guide to Chronic Illness — Vine", description: "Living with chronic illness as a Christian — suffering, Paul's thorn, unanswered prayer, meaning in limitation, and hope.", images: ["/api/og?title=Christian+Guide+to+Chronic+Illness"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Chronic Illness — Vine", description: "Living with chronic illness as a Christian.", images: ["/api/og?title=Christian+Guide+to+Chronic+Illness"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
