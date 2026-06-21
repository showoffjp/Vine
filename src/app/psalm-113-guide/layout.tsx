import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 113 Study Guide -- Who Is Like the LORD Our God?",
  description: "Verse-by-verse study of Psalm 113 -- the opening psalm of the Egyptian Hallel: God's transcendent majesty over heaven and earth, his stooping condescension to the lowly, and the reversal of the barren woman into a joyful mother.",
  openGraph: {
    title: "Psalm 113 Study Guide -- Who Is Like the LORD Our God?",
    description: "Deep dive into Psalm 113: the Hallel tradition sung at Passover, the two movements of divine transcendence and immanence, God's preferential care for the poor and barren, and the Magnificat's echo of this psalm.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
