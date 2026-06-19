import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 145 Study Guide &mdash; I Will Extol You My God and King",
  description: "A verse-by-verse guide to Psalm 145 &mdash; David's great acrostic of praise, the LORD gracious and merciful and slow to anger, his kingdom an everlasting kingdom, and his nearness to all who call on him in truth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
