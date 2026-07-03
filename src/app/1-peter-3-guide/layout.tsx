import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Peter 3 Guide — Always Be Ready — Christian Study",
  description: "A deep study guide to 1 Peter 3 — the call to always be ready to give a reason for the hope within, the beauty of a gentle and quiet spirit, suffering for righteousness following the example of Christ, and practical apologetics for everyday believers.",
  openGraph: { title: "1 Peter 3 Guide — Always Be Ready — Vine", description: "Study 1 Peter 3 — apologetics readiness, the gentle and quiet spirit, and Christ-centered endurance through suffering.", images: ["/api/og?title=1+Peter+3+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Peter 3 Guide — Always Be Ready — Vine", description: "A deep guide to 1 Peter 3 and readiness to give a reason for the hope within and holy living in suffering.", images: ["/api/og?title=1+Peter+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
