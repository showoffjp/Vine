import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 88 Study Guide &mdash; Darkness Is My Closest Friend",
  description: "A verse-by-verse guide to Psalm 88 &mdash; the darkest lament in the Psalter, the cry of one overwhelmed by suffering and the felt absence of God, a psalm that ends in darkness yet keeps crying out to God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
