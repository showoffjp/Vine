import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Nehemiah Guide — Christian Study",
  description: "A deep guide to the Book of Nehemiah — the cupbearer's burden and prayer over ruined Jerusalem, the rebuilding of the walls, the opposition of Sanballat and Tobiah, the reading of the Law and the people's revival, and the lasting covenant reforms. A study in prayerful, persevering leadership.",
  openGraph: { title: "Book of Nehemiah Guide — Vine", description: "A guide to Nehemiah — rebuilding the walls, overcoming opposition, revival through the Word, and covenant reform.", images: ["/api/og?title=Book+of+Nehemiah+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Nehemiah Guide — Vine", description: "A deep guide to the Book of Nehemiah.", images: ["/api/og?title=Book+of+Nehemiah+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
