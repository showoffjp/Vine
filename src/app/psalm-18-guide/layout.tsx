import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 18 Study Guide &mdash; I Love You O LORD My Strength",
  description: "A verse-by-verse guide to Psalm 18 &mdash; David's great song of deliverance, the LORD as rock and fortress, the dramatic theophany of God's rescue, and the steadfast love shown to his anointed forever.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
