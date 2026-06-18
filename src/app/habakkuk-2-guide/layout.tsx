import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habakkuk 2 Study Guide &mdash; The Righteous Shall Live by His Faith",
  description: "A verse-by-verse guide to Habakkuk 2 &mdash; the watchtower vision, the word that the righteous live by faith, the five woe oracles against Babylon, and the earth filled with the knowledge of the glory of the LORD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
