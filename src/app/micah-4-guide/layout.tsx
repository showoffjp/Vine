import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Micah 4 Study Guide &mdash; They Shall Beat Their Swords into Plowshares",
  description: "A verse-by-verse guide to Micah 4 &mdash; the mountain of the LORD exalted above all hills, the nations streaming to learn God's ways, swords beaten into plowshares, and the exile-and-return promise for Daughter Zion.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
