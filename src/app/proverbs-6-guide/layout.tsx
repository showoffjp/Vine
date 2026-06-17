import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proverbs 6 Study Guide &mdash; The Sluggard, Six Sins God Hates, and the Adulteress",
  description: "A verse-by-verse guide to Proverbs 6 &mdash; warnings against debt and laziness, the six things God hates, and the father's urgent warning against adultery.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
