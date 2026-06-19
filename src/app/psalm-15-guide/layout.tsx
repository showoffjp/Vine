import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 15 Study Guide &mdash; Who Shall Dwell on Your Holy Hill",
  description: "A verse-by-verse guide to Psalm 15 &mdash; the entrance liturgy describing the character of one who may dwell with God: walking blamelessly, speaking truth, keeping oaths, and doing no wrong to a neighbor.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
