import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 65 Study Guide &mdash; You Crown the Year with Your Bounty",
  description: "A verse-by-verse guide to Psalm 65 &mdash; praise for the God who atones for transgressions, stills the roaring seas, and visits the earth with rain and abundance, crowning the year with his goodness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
