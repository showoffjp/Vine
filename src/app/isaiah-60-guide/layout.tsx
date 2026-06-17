import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 60 Study Guide &mdash; Arise Shine for Your Light Has Come",
  description: "A verse-by-verse guide to Isaiah 60 &mdash; the glory of God rising upon his people, the nations streaming to Zion's light, and the eternal city of the Lord.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
