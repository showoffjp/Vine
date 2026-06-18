import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habakkuk 1 Study Guide &mdash; How Long O LORD Shall I Cry for Help",
  description: "A verse-by-verse guide to Habakkuk 1 &mdash; the prophet's complaint about injustice, the shocking divine answer that the Chaldeans are coming, and Habakkuk's second cry about God's use of a more wicked instrument.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
