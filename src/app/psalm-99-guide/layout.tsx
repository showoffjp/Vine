import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 99 Study Guide &mdash; The LORD Reigns, Let the Peoples Tremble",
  description: "A verse-by-verse guide to Psalm 99 &mdash; the thrice-holy King enthroned upon the cherubim, the lover of justice, who answered Moses, Aaron, and Samuel, calling his people to worship at his holy mountain.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
