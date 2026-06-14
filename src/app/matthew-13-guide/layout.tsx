import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 13 Guide — Parables of the Kingdom — Christian Study",
  description: "A deep study guide to Matthew 13 — the Parable of the Sower, the Weeds among the Wheat, the Mustard Seed, the Leaven, the Hidden Treasure, and the Pearl of Great Price. Explore what the seven kingdom parables reveal about how the reign of God quietly but powerfully transforms the world.",
  openGraph: { title: "Matthew 13 Guide — Parables of the Kingdom — Vine", description: "Study Matthew 13: the Parable of the Sower, the Mustard Seed, the Hidden Treasure, and the Pearl, revealing the nature and growth of God's kingdom.", images: ["/api/og?title=Matthew+13+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 13 Guide — Parables of the Kingdom — Vine", description: "A deep guide to the seven kingdom parables of Matthew 13.", images: ["/api/og?title=Matthew+13+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
