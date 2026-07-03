import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Denominations Guide",
  description: "Understanding the major branches of Christianity — Catholic, Orthodox, and Protestant; the main Protestant families (Lutheran, Reformed, Anglican, Baptist, Methodist, Pentecostal); what unites all Christians, what divides denominations, and how to think about denominational differences charitably.",
  openGraph: { title: "Christian Denominations Guide — Vine", description: "Understanding the major branches of Christianity — Catholic, Orthodox, Protestant, and the main Protestant families.", images: ["/api/og?title=Christian+Denominations+Guide"] },
  twitter: { card: "summary_large_image", title: "Christian Denominations Guide — Vine", description: "Understanding the major branches of Christianity.", images: ["/api/og?title=Christian+Denominations+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
