import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mark 4 Guide — Christian Study",
  description: "A deep guide to Mark 4 — the Parable of the Sower and the four soils, the lamp under a basket, the seed growing secretly, the mustard seed, and Jesus calming the storm with the word 'Peace! Be still!'",
  openGraph: { title: "Mark 4 Guide — Vine", description: "A guide to Mark 4 — the Parable of the Sower, parables of the kingdom, and Jesus calming the storm.", images: ["/api/og?title=Mark+4+Guide"] },
  twitter: { card: "summary_large_image", title: "Mark 4 Guide — Vine", description: "A deep guide to Mark 4 — parables of the kingdom and the calming of the storm.", images: ["/api/og?title=Mark+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
