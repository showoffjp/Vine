import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeremiah 30 Study Guide &mdash; The Time of Jacob's Trouble",
  description: "A verse-by-verse guide to Jeremiah 30 &mdash; the terror of Jacob's trouble, God's promise to restore fortunes and break the yoke, the incurable wound turned to healing, and the promise that David their king will rule them.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
