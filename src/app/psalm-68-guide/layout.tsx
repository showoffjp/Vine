import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 68 Study Guide &mdash; God Shall Arise, Let His Enemies Be Scattered",
  description: "A verse-by-verse guide to Psalm 68 &mdash; the great procession psalm of God's triumphant march from Sinai to Zion, father of the fatherless, who ascended on high leading captives (quoted in Ephesians 4).",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
