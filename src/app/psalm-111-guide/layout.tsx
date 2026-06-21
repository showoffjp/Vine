import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 111 Study Guide -- Praise the LORD, I Will Give Thanks",
  description: "Verse-by-verse study of Psalm 111 -- an acrostic psalm of praise for God's works, his covenant faithfulness, his provision for those who fear him, and the great wisdom foundation: the fear of the LORD is the beginning of wisdom.",
  openGraph: {
    title: "Psalm 111 Study Guide -- Praise the LORD, I Will Give Thanks",
    description: "Deep dive into Psalm 111: the Hebrew acrostic structure, the works of the LORD as the content of Sabbath meditation, covenant love and faithfulness as his character, and the wisdom axiom that anchors all of life.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
