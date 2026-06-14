import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 18 Guide — Greatness and Forgiveness in the Kingdom — Christian Study",
  description: "A deep study of Matthew 18 — Jesus' Community Discourse on becoming like children, the parable of the Lost Sheep, confronting sin in love, and the radical call to seventy-times-seven forgiveness as a reflection of the boundless mercy of God.",
  openGraph: { title: "Matthew 18 Guide — Vine", description: "Study Matthew 18 — childlike humility, the Lost Sheep, church discipline, and the Unforgiving Servant parable on boundless forgiveness.", images: ["/api/og?title=Matthew+18+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 18 Guide — Vine", description: "A deep guide to Matthew 18: Greatness, Lost Sheep, and Radical Forgiveness.", images: ["/api/og?title=Matthew+18+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
