import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 86 Study Guide &mdash; Teach Me Your Way O LORD",
  description: "A verse-by-verse guide to Psalm 86 &mdash; David's prayer of the poor and needy, the plea for an undivided heart to fear God's name, and the confession that the Lord is good and forgiving, abounding in steadfast love.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
