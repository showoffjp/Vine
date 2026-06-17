import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 65 Study Guide &mdash; Behold I Create New Heavens and a New Earth",
  description: "A verse-by-verse guide to Isaiah 65 &mdash; God's response to rebellious Israel, the new creation where the wolf and lamb feed together, and the joy of the new Jerusalem.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
