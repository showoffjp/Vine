import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 5 Guide — The Worthy Lamb and the New Song of Redemption",
  description: "A deep verse-by-verse guide to Revelation 5 — the sealed scroll, the Lion of Judah who is the slain Lamb, the new song of redemption from every tribe and nation, and the cosmic worship where all creation joins in singing Worthy is the Lamb.",
  openGraph: {
    title: "Revelation 5 Guide — The Worthy Lamb | Vine",
    description: "Verse-by-verse commentary on Revelation 5: the sealed scroll, the Lion-Lamb paradox, the new song of redemption, and the cosmic doxology where every creature joins in worship of the Lamb who was slain.",
    images: ["/api/og?title=Revelation+5+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revelation 5 Guide — Vine",
    description: "A deep guide to Revelation 5 — the Lamb who was slain, the new song of redemption, and the worship of all creation: Worthy is the Lamb!",
    images: ["/api/og?title=Revelation+5+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
