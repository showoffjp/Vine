import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 28 Study Guide &mdash; The LORD Is My Strength and My Shield",
  description: "A verse-by-verse guide to Psalm 28 &mdash; the cry not to be left in silence, the plea for justice, and the turn to praise as the LORD hears: the LORD is my strength and shield, the saving refuge of his anointed.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
