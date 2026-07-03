import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Loneliness",
  description: "Loneliness and the Christian faith — the difference between loneliness and solitude, the God who is community (the Trinity), Jesus and the experience of abandonment, the loneliness epidemic, the church as belonging, and finding companionship with God in the lonely place.",
  openGraph: { title: "Christian Guide to Loneliness — Vine", description: "Loneliness and faith — loneliness vs solitude, the God who is community, Jesus and abandonment, and the church as belonging.", images: ["/api/og?title=Christian+Guide+to+Loneliness"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Loneliness — Vine", description: "Loneliness and the Christian faith.", images: ["/api/og?title=Christian+Guide+to+Loneliness"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
