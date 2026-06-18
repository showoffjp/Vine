import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joel 3 Study Guide &mdash; I Will Pour Out My Spirit on All Flesh",
  description: "A verse-by-verse guide to Joel 3 &mdash; the great Pentecost prophecy of the Spirit poured out on all flesh, the valley of Jehoshaphat, the day of the LORD, and the restoration of Judah.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
