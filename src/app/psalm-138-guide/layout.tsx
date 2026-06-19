import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 138 Study Guide &mdash; I Give You Thanks with My Whole Heart",
  description: "A verse-by-verse guide to Psalm 138 &mdash; David's thanksgiving before the gods, the exaltation of God's name and word, the LORD's regard for the lowly, and the confidence that the LORD will fulfill his purpose for his people.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
