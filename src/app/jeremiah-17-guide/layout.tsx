import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeremiah 17 Study Guide &mdash; The Deceitful Heart and the Blessed Man",
  description: "A verse-by-verse guide to Jeremiah 17 &mdash; the diagnosis of the deceitful human heart, the contrast between those who trust in man and those who trust in God, and the healing God offers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
