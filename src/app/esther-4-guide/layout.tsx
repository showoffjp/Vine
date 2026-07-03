import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Esther 4 Guide — Appointed for Such a Time as This",
  description: "A deep guide to Esther 4 — Mordecai’s grief at Haman’s decree, Esther’s courage to approach the king, the hidden providence of God, and the community fast that preceded bold action.",
  openGraph: { title: "Esther 4 Guide — The Vine", description: "Esther 4: Mordecai weeps in sackcloth, Esther hears the news, and rises to courage — for such a time as this.", images: ["/api/og?title=Esther+4+Guide"] },
  twitter: { card: "summary_large_image", title: "Esther 4 Guide — The Vine", description: "A deep guide to Esther 4 — courage, providence, and the fast of three days.", images: ["/api/og?title=Esther+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
