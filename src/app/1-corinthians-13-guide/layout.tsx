import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Corinthians 13 Guide — The Love Chapter",
  description: "A deep guide to 1 Corinthians 13 — the more excellent way of love set against the Corinthian conflict over spiritual gifts: love is patient and kind, greater than tongues, prophecy, knowledge, and faith; love never ends; and of faith, hope, and love, the greatest is love.",
  openGraph: { title: "1 Corinthians 13 Guide — Vine", description: "A guide to the Love Chapter — the excellence of love, the agape definition, love never fails, and faith, hope, and love.", images: ["/api/og?title=1+Corinthians+13+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 13 Guide — Vine", description: "A deep guide to 1 Corinthians 13, the Love Chapter.", images: ["/api/og?title=1+Corinthians+13+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
