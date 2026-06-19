import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 110 Study Guide &mdash; The LORD Says to My Lord",
  description: "A verse-by-verse guide to Psalm 110 &mdash; the most-quoted psalm in the New Testament: the Messiah enthroned at God's right hand and the priest forever after the order of Melchizedek, fulfilled in Christ.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
