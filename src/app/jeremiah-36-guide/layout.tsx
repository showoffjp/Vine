import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeremiah 36 Study Guide &mdash; Jehoiakim Burns the Scroll",
  description: "A verse-by-verse guide to Jeremiah 36 &mdash; Baruch writing and reading the scroll, Jehoiakim's contemptuous burning of God's word column by column, and the writing of a new scroll with added judgments.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
