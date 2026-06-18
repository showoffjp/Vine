import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jonah 3 Study Guide &mdash; Nineveh Believed God and Repented",
  description: "A verse-by-verse guide to Jonah 3 &mdash; the second commission to Nineveh, the greatest mass repentance in Scripture, the king's decree of fasting, and God's relenting from the disaster he had planned.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
