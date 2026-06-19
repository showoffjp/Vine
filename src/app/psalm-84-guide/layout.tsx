import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 84 Study Guide &mdash; How Lovely Is Your Dwelling Place",
  description: "A verse-by-verse guide to Psalm 84 &mdash; the longing for the courts of the LORD, the pilgrim who passes through the Valley of Baca, the doorkeeper in the house of God, and the LORD as sun and shield.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
