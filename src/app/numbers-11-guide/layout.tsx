import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Numbers 11 Guide — Craving in the Wilderness",
  description: "A deep guide to Numbers 11 — fire at Taberah, Israel's contempt for the manna and craving for the food of Egypt, Moses' lament and the seventy elders who shared his Spirit, and the quail that became a plague at Kibroth-hattaavah, the graves of craving.",
  openGraph: { title: "Numbers 11 Guide — Vine", description: "A guide to Numbers 11 — the craving for meat, contempt for the manna, Moses' burden and the seventy elders, and the plague at Kibroth-hattaavah.", images: ["/api/og?title=Numbers+11+Guide"] },
  twitter: { card: "summary_large_image", title: "Numbers 11 Guide — Vine", description: "A deep guide to Numbers 11 and the graves of craving.", images: ["/api/og?title=Numbers+11+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
