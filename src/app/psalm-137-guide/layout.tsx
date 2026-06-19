import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 137 Study Guide &mdash; By the Waters of Babylon",
  description: "A verse-by-verse guide to Psalm 137 &mdash; the exiles weeping by the rivers of Babylon, the silenced harps, the refusal to forget Jerusalem, and the raw imprecation that confronts us with honest lament before God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
