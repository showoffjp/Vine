import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Galatians 5 Guide — Christian Study",
  description: "A deep guide to Galatians 5 — for freedom Christ has set us free, faith working through love, the works of the flesh contrasted with the fruit of the Spirit, and the call to walk by the Spirit and keep in step with him.",
  openGraph: { title: "Galatians 5 Guide — Vine", description: "A guide to Galatians 5 — Christian freedom, faith working through love, the works of the flesh, the fruit of the Spirit, and walking by the Spirit.", images: ["/api/og?title=Galatians+5+Guide"] },
  twitter: { card: "summary_large_image", title: "Galatians 5 Guide — Vine", description: "A deep guide to Galatians 5.", images: ["/api/og?title=Galatians+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
