import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 42 Study Guide &mdash; The First Servant Song and God's New Thing",
  description: "A verse-by-verse guide to Isaiah 42 &mdash; the first Servant Song (Here is my servant whom I uphold), the bruised reed, and God's call to proclaim justice to the nations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
