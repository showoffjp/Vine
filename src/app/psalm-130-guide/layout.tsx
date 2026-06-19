import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 130 Study Guide &mdash; Out of the Depths I Cry to You",
  description: "A verse-by-verse guide to Psalm 130 &mdash; the De Profundis, a Song of Ascents and Penitential Psalm: the cry from the depths, forgiveness that God may be feared, waiting for the LORD like watchmen for the morning, and plentiful redemption.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
