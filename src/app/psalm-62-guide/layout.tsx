import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 62 Study Guide &mdash; For God Alone My Soul Waits in Silence",
  description: "A verse-by-verse guide to Psalm 62 &mdash; the soul that waits in silence for God alone, the LORD as rock, salvation, and fortress, the call to pour out the heart before him, and trusting power and steadfast love that belong to God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
