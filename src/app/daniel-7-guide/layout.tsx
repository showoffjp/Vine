import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Daniel 7 Guide — Christian Study",
  description: "A deep guide to Daniel 7 — the four beasts from the sea, the little horn speaking great things, the Ancient of Days on his throne of fire, and the Son of Man coming with the clouds of heaven to receive an everlasting kingdom. The most important messianic vision in the book of Daniel.",
  openGraph: { title: "Daniel 7 Guide — Vine", description: "A guide to Daniel 7 — the four beasts, the Ancient of Days, and the Son of Man who receives an everlasting kingdom.", images: ["/api/og?title=Daniel+7+Guide"] },
  twitter: { card: "summary_large_image", title: "Daniel 7 Guide — Vine", description: "A deep guide to Daniel 7 — the four beasts, the Ancient of Days, and the messianic Son of Man.", images: ["/api/og?title=Daniel+7+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
