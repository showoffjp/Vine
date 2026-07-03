import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Peter 1 Guide — Christian Study",
  description: "A deep chapter guide to 2 Peter 1 — the divine provision of everything needed for life and godliness, the ladder of virtue, confirming your calling and election, and the divine origin of Scripture through holy men moved by the Holy Spirit.",
  openGraph: { title: "2 Peter 1 Guide — Vine", description: "A guide to 2 Peter 1 — divine provision, the ladder of virtue, calling and election, and Scripture's divine origin.", images: ["/api/og?title=2+Peter+1+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Peter 1 Guide — Vine", description: "A deep guide to 2 Peter 1.", images: ["/api/og?title=2+Peter+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
