import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Matthew 5 Guide — The Beatitudes and Higher Righteousness",
  description: "A deep guide to Matthew 5 — the Beatitudes, salt and light, fulfilling the Law, the antitheses on anger, lust, oaths, retaliation, and love of enemies, and the call to the higher righteousness of the kingdom of God.",
  openGraph: { title: "Matthew 5 Guide — Vine", description: "A guide to Matthew 5 — the Beatitudes, salt and light, and the higher righteousness of the kingdom.", images: ["/api/og?title=Matthew+5+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 5 Guide — Vine", description: "A deep guide to Matthew 5 — the Beatitudes and the higher righteousness.", images: ["/api/og?title=Matthew+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
