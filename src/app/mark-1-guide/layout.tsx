import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Mark 1 Chapter Guide — Christian Study",
  description: "A deep guide to Mark 1 — John the Baptist preparing the way, the baptism and temptation of Jesus, calling the first disciples, teaching with authority in the synagogue, casting out an unclean spirit, healing Peter's mother-in-law, and cleansing a man with leprosy.",
  openGraph: { title: "Mark 1 Chapter Guide — Vine", description: "A guide to Mark 1 — the beginning of Jesus's ministry in Galilee, the kingdom's arrival, and the first healings and exorcisms.", images: ["/api/og?title=Mark+1+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Mark 1 Chapter Guide — Vine", description: "A deep guide to Mark 1 — the beginning of Jesus's ministry.", images: ["/api/og?title=Mark+1+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
