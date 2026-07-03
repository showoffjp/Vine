import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Colossians 3 Guide — The Risen Life in Christ",
  description: "A deep guide to Colossians 3 — the risen life in Christ, setting your mind on things above, putting off the old self, putting on compassion and love, letting the peace of Christ rule, and working heartily as for the Lord.",
  openGraph: { title: "Colossians 3 Guide — Vine", description: "A guide to Colossians 3 — the risen life, the new self, the peace of Christ, and whatever you do, do it heartily as for the Lord.", images: ["/api/og?title=Colossians+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Colossians 3 Guide — Vine", description: "A deep guide to Colossians 3 — the risen life in Christ.", images: ["/api/og?title=Colossians+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
