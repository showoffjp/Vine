import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Samuel 17 Guide — David and Goliath",
  description: "A deep guide to 1 Samuel 17 — Goliath's challenge, David's arrival at the camp, his declaration that the battle is the Lord's, and the theological significance of the giant's fall for Christian faith.",
  openGraph: { title: "1 Samuel 17 Guide — Vine", description: "A guide to 1 Samuel 17 — David and Goliath, fighting in the name of the Lord, and the battle that belongs to God.", images: ["/api/og?title=1+Samuel+17+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Samuel 17 Guide — Vine", description: "A deep guide to 1 Samuel 17 — David and Goliath.", images: ["/api/og?title=1+Samuel+17+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
