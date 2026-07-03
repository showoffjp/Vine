import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Hosea 2 Chapter Guide — Christian Study",
  description: "A deep guide to Hosea 2 — God's covenant love, Israel's unfaithfulness in chasing the Baals, the hedge of thorns, the Valley of Achor as a door of hope, the new betrothal declared in righteousness and steadfast love, and the reversal of Lo-Ruhamah and Lo-Ammi.",
  openGraph: { title: "Hosea 2 Chapter Guide — Vine", description: "A guide to Hosea 2 — covenant love, unfaithfulness, the Valley of Achor, and a new betrothal forever.", images: ["/api/og?title=Hosea+2+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Hosea 2 Chapter Guide — Vine", description: "A deep guide to Hosea 2.", images: ["/api/og?title=Hosea+2+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
