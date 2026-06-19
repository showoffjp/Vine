import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 26 Study Guide &mdash; Vindicate Me O LORD",
  description: "A verse-by-verse guide to Psalm 26 &mdash; the prayer for vindication and examination, the love of the habitation of God's house, and the resolve to walk in integrity and bless the LORD in the great assembly.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
