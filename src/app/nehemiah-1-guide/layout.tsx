import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Nehemiah 1 Guide — The Prayer of Nehemiah",
  description: "A deep guide to Nehemiah 1 — the news of Jerusalem's broken walls, Nehemiah's weeping and fasting, and the great intercessory prayer of adoration, confession, and petition that set in motion the rebuilding of Jerusalem.",
  openGraph: { title: "Nehemiah 1 Guide — Vine", description: "A guide to Nehemiah 1 — the burden for Jerusalem, the prayer of Nehemiah, and bold intercession linked to action.", images: ["/api/og?title=Nehemiah+1+Guide"] },
  twitter: { card: "summary_large_image", title: "Nehemiah 1 Guide — Vine", description: "A deep guide to Nehemiah 1 — the prayer that rebuilt a city.", images: ["/api/og?title=Nehemiah+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
