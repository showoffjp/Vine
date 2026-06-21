import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 132 Study Guide -- The LORD Swore to David a Sure Oath",
  description: "Verse-by-verse study of Psalm 132 -- the longest Song of Ascents: David's vow to find a dwelling for the LORD, the ark's journey to Zion, and God's covenant oath to set David's offspring on the throne and to make Zion his resting place forever.",
  openGraph: {
    title: "Psalm 132 Study Guide -- The LORD Swore to David a Sure Oath",
    description: "Deep dive into Psalm 132: the Davidic covenant and the choice of Zion, the ark brought to its resting place, the horn that springs up for David, and the Messianic fulfillment in Christ the Son of David.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
