import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 7 Chapter Guide — Christian Study",
  description: "A deep guide to Luke 7 — the centurion's great faith, Jesus raising the widow of Nain's son, John the Baptist's question from prison, and the woman who anointed Jesus's feet with her tears and received forgiveness.",
  openGraph: { title: "Luke 7 Chapter Guide — Vine", description: "A guide to Luke 7 — the centurion's faith, the widow of Nain, John the Baptist's question, and the woman who anointed Jesus's feet.", images: ["/api/og?title=Luke+7+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 7 Chapter Guide — Vine", description: "A deep guide to Luke 7 — compassion, faith, and forgiveness in the ministry of Jesus.", images: ["/api/og?title=Luke+7+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
