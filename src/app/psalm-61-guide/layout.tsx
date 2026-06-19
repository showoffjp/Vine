import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 61 Study Guide &mdash; Lead Me to the Rock That Is Higher Than I",
  description: "A verse-by-verse guide to Psalm 61 &mdash; the cry from the end of the earth, the longing to dwell in God's tent forever and take refuge under the shelter of his wings, and the vow of daily praise.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
