import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Run with Endurance: Christian Perseverance | The Vine",
  description: "A guide to persevering in faith — enduring trials, running the race of Hebrews 12, and a long obedience in the same direction.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
