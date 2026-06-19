import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 20 Study Guide &mdash; May the LORD Answer You in the Day of Trouble",
  description: "A verse-by-verse guide to Psalm 20 &mdash; the congregation's prayer for the king before battle, the contrast between trusting chariots and trusting the name of the LORD, and the confidence that God saves his anointed.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
