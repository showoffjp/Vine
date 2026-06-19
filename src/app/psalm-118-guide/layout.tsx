import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 118 Study Guide &mdash; The Stone the Builders Rejected",
  description: "A verse-by-verse guide to Psalm 118 &mdash; the great thanksgiving of the Egyptian Hallel, 'his steadfast love endures forever,' the rejected stone become the cornerstone, and 'this is the day the LORD has made.'",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
