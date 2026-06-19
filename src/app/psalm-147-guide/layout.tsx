import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 147 Study Guide &mdash; He Heals the Brokenhearted",
  description: "A verse-by-verse guide to Psalm 147 &mdash; the praise of the God who builds up Jerusalem, heals the brokenhearted, numbers and names the stars, and delights in those who hope in his steadfast love.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
