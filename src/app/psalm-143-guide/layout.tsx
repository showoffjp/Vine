import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 143 Study Guide &mdash; Teach Me to Do Your Will",
  description: "A verse-by-verse guide to Psalm 143 &mdash; the last of the seven Penitential Psalms: no one living is righteous before God, the thirsting soul, the plea to hear of God's steadfast love in the morning, and the prayer to be led on level ground.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
