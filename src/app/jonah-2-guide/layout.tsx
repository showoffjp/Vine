import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jonah 2 Study Guide &mdash; Out of the Belly of Sheol I Cried",
  description: "A verse-by-verse guide to Jonah 2 &mdash; Jonah's prayer from the belly of the great fish, the descent to the roots of the mountains, and the declaration that salvation belongs to the LORD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
