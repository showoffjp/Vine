import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proverbs Chapter 10 Guide - The Vine",
  description: "A comprehensive chapter guide to Proverbs 10: the main collection of the proverbs of Solomon begins, shifting to antithetical couplets contrasting the wise and the foolish, the righteous and the wicked, the diligent and the lazy, controlled and reckless speech, the fear of the LORD, and the New Testament use of Proverbs 10:12.",
};

export default function Proverbs10GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
