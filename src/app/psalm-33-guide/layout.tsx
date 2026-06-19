import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 33 Study Guide &mdash; Shout for Joy in the LORD",
  description: "A verse-by-verse guide to Psalm 33 &mdash; the call to praise with the new song, the creation of the heavens by the word of the LORD, the counsel of the LORD standing forever, and the soul that waits for the LORD as shield.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
