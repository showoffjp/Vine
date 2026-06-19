import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 45 Study Guide &mdash; Your Throne O God Is Forever",
  description: "A verse-by-verse guide to Psalm 45 &mdash; the royal wedding song addressed to the king as God ('your throne, O God, is forever and ever,' quoted in Hebrews 1), the bride, and the messianic fulfillment in Christ and his church.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
