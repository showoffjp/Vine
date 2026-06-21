import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is the Bible Reliable? The Manuscript Evidence &mdash; The Vine",
  description: "A deep study of the textual reliability of the Bible &mdash; the Dead Sea Scrolls, the thousands of New Testament Greek manuscripts, the science of textual criticism, and how we can be confident the text we read matches the originals.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
