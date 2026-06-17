import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 45 Study Guide &mdash; I Am the LORD and There Is No Other",
  description: "A verse-by-verse guide to Isaiah 45 &mdash; God's commission of Cyrus, his declaration as the sole Creator and Sovereign, and the promise that every knee will bow to him.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
