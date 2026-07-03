import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 18 Guide — Persistent Prayer and Humility — Christian Study",
  description: "A deep guide to Luke 18 — Jesus teaches on persistent prayer through the parable of the persistent widow, reveals the danger of self-righteousness through the Pharisee and tax collector, tests the rich young ruler on the cost of discipleship, and restores sight to blind Bartimaeus as a picture of saving faith. A rich study on prayer, humility, wealth, and the grace of God.",
  openGraph: { title: "Luke 18 Guide — Persistent Prayer and Humility — Vine", description: "A guide to Luke 18 — the persistent widow, the Pharisee and tax collector, the rich young ruler, and faith that cries out to Jesus.", images: ["/api/og?title=Luke+18+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 18 Guide — Persistent Prayer and Humility — Vine", description: "A deep guide to Luke 18 and Jesus' teachings on prayer, humility, and the cost of discipleship.", images: ["/api/og?title=Luke+18+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
