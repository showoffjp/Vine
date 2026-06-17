import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 41 Study Guide &mdash; Fear Not, For I Am With You",
  description: "A verse-by-verse guide to Isaiah 41 &mdash; God's sovereign comfort to Israel, the call to fear not, and his promise to strengthen and uphold his people.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
