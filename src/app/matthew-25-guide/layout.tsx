import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 25 Guide — Parables and Final Judgment — Christian Study",
  description: "A deep study of Matthew 25 &mdash; the Parable of the Ten Virgins, the Parable of the Talents, and the Sheep and Goats judgment. Explore the kingdom parables of Jesus on readiness, faithful stewardship, and the final separation between those who served Christ in the poor and those who did not. Discover what Matthew 25 teaches about watchfulness, accountability, and the coming of the Son of Man in glory.",
  openGraph: { title: "Matthew 25 Guide — Parables and Final Judgment — Vine", description: "A study of Matthew 25 — the Ten Virgins, the Talents, and the Sheep and Goats final judgment.", images: ["/api/og?title=Matthew+25+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 25 Guide — Parables and Final Judgment — Vine", description: "A deep study of Matthew 25 kingdom parables and final judgment.", images: ["/api/og?title=Matthew+25+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
