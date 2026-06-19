import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 14 Study Guide &mdash; The Fool Says There Is No God",
  description: "A verse-by-verse guide to Psalm 14 &mdash; the practical atheism of the fool, the universal corruption of humanity that Paul cites in Romans 3, and the longing for salvation to come out of Zion.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
