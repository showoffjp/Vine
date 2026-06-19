import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 69 Study Guide &mdash; Save Me O God, the Waters Have Come Up to My Neck",
  description: "A verse-by-verse guide to Psalm 69 &mdash; the great messianic passion psalm: zeal for God's house, the reproach borne for God's sake, the gall and vinegar, and the deliverance of the afflicted, quoted throughout the Gospels.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
