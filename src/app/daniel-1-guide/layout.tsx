import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Daniel 1 Chapter Guide — Christian Study",
  description: "A deep guide to Daniel 1 — Nebuchadnezzar besieging Jerusalem, Daniel and his friends taken to Babylon, Daniel resolving not to defile himself with the king's food, the ten-day vegetable test, and God giving them wisdom ten times greater than all the magicians of Babylon.",
  openGraph: { title: "Daniel 1 Chapter Guide — Vine", description: "A guide to Daniel 1 — faithfulness in Babylon, the food test, and God's gift of wisdom to Daniel and his friends.", images: ["/api/og?title=Daniel+1+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Daniel 1 Chapter Guide — Vine", description: "A deep guide to Daniel 1 — Daniel's faithfulness in Babylon.", images: ["/api/og?title=Daniel+1+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
