import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 34 Study Guide &mdash; Taste and See That the LORD Is Good",
  description: "A verse-by-verse guide to Psalm 34 &mdash; David's acrostic psalm of praise, the invitation to taste and see God's goodness, the angel of the LORD encamping around those who fear him, and the nearness of God to the brokenhearted.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
