import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proverbs 11: Integrity, Generosity, and the Fruit of Righteousness | Vine",
  description: "A study guide to Proverbs chapter 11 - honest weights and just business, the destructiveness of pride, integrity as a guide, the paradox of generosity, and righteousness as a tree of life.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
