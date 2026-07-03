import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 13 Chapter Guide — Christian Study",
  description: "A deep guide to Luke 13 — the call to repentance, the parable of the unfruitful fig tree, the healing of the bent woman on the Sabbath, the parables of the mustard seed and yeast, the narrow door, and Jesus's lament over Jerusalem.",
  openGraph: { title: "Luke 13 Chapter Guide — Vine", description: "A guide to Luke 13 — repentance, the fig tree parable, healing the bent woman, the narrow door, and Jesus's lament over Jerusalem.", images: ["/api/og?title=Luke+13+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 13 Chapter Guide — Vine", description: "A deep guide to Luke 13 — repentance, Sabbath healing, the narrow door, and the Jerusalem lament.", images: ["/api/og?title=Luke+13+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
