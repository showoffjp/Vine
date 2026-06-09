import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Proverbs: A Comprehensive Study Guide | Vine",
  description: "The fear of the Lord as the beginning of wisdom, Lady Wisdom's invitation, how proverbs actually work, the Proverbs 31 woman, and applying biblical wisdom to daily life.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
