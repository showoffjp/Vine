import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jonah 1 Study Guide &mdash; Arise and Go to Nineveh",
  description: "A verse-by-verse guide to Jonah 1 &mdash; God's commission to Nineveh, Jonah's flight to Tarshish, the great storm, the sleeping prophet, the casting of lots, and the great fish swallowing Jonah.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
