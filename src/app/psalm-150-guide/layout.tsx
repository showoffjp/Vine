import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 150 Study Guide &mdash; Let Everything That Has Breath Praise the LORD",
  description: "A verse-by-verse guide to Psalm 150 &mdash; the grand finale of the Psalter, calling for praise in God's sanctuary and mighty heavens, with every instrument, and from every living thing that has breath.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
