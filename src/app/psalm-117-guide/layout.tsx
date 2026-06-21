import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 117 Study Guide -- Praise the LORD, All Nations",
  description: "Verse-by-verse study of Psalm 117 -- the shortest chapter in the Bible and the center of Scripture: the universal call for all nations to praise the LORD for his steadfast love and faithfulness, quoted by Paul in Romans 15:11.",
  openGraph: {
    title: "Psalm 117 Study Guide -- Praise the LORD, All Nations",
    description: "Deep dive into Psalm 117: why the shortest psalm contains one of the Bible's biggest ideas -- universal worship rooted in covenant faithfulness, fulfilled in the Gentile mission, and quoted by Paul as proof of the gospel to all nations.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
