import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 120 Study Guide -- In My Distress I Called to the LORD",
  description: "Verse-by-verse study of Psalm 120 -- the first Song of Ascents: a lament from a man living among deceitful, war-hungry people, crying out to the LORD from the depths of exile, longing for peace while surrounded by those who hate it.",
  openGraph: {
    title: "Psalm 120 Study Guide -- In My Distress I Called to the LORD",
    description: "Deep dive into Psalm 120: the opening Song of Ascents, a cry of distress from one living among Meshech and Kedar, whose lips speak lies and whose hearts love war -- yet whose soul cries to the LORD for deliverance.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
