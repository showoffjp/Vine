import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 19 Chapter Guide — Christian Study",
  description: "A deep guide to Luke 19 — Zacchaeus the chief tax collector in Jericho, the declaration that today salvation has come to his house, the Parable of the Ten Minas, and the Triumphal Entry of Jesus into Jerusalem as king.",
  openGraph: { title: "Luke 19 Chapter Guide — Vine", description: "A guide to Luke 19 — Zacchaeus, the Ten Minas, and the Triumphal Entry into Jerusalem.", images: ["/api/og?title=Luke+19+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 19 Chapter Guide — Vine", description: "A deep guide to Luke 19 — Zacchaeus, the Ten Minas, and the Triumphal Entry.", images: ["/api/og?title=Luke+19+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
