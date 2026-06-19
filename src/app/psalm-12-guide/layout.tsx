import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 12 Study Guide &mdash; The Words of the LORD Are Pure",
  description: "A verse-by-verse guide to Psalm 12 &mdash; the cry when the godly seem to vanish, the contrast between flattering human lips and the pure, refined words of the LORD, and God's promise to arise for the poor and needy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
