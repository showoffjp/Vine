import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Daniel: A Comprehensive Study Guide | Vine",
  description: "Stories of faith under empire, apocalyptic visions, the Son of Man, and the sovereignty of God over world history. A comprehensive study guide to the Book of Daniel.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
