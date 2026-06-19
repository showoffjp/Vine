import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 31 Study Guide &mdash; Into Your Hand I Commit My Spirit",
  description: "A verse-by-verse guide to Psalm 31 &mdash; the prayer of trust Jesus quoted from the cross, 'my times are in your hand,' the refuge of the LORD, and the abundant goodness stored up for those who fear him.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
