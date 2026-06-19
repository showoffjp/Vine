import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 148 Study Guide &mdash; Praise the LORD from the Heavens",
  description: "A verse-by-verse guide to Psalm 148 &mdash; the cosmic summons for all creation, from angels and stars to sea creatures, mountains, trees, animals, and all peoples, to praise the name of the LORD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
