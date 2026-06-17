import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proverbs 7 Study Guide &mdash; The Seduction of the Foolish Young Man",
  description: "A verse-by-verse guide to Proverbs 7 &mdash; the father's vivid account of the wayward woman who seduces a naive young man, and the call to wisdom as protection.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
