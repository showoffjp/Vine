import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 21 Study Guide &mdash; In Your Strength the King Rejoices",
  description: "A verse-by-verse guide to Psalm 21 &mdash; the royal psalm of thanksgiving for victory, the king crowned with a crown of fine gold, the blessings of life and length of days, and the exaltation of the LORD in his strength.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
