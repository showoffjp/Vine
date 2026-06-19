import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 71 Study Guide &mdash; Do Not Cast Me Off in Old Age",
  description: "A verse-by-verse guide to Psalm 71 &mdash; the prayer of the aging believer who has trusted God from youth, the plea not to be forsaken when strength fails, and the resolve to declare God's might to the next generation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
