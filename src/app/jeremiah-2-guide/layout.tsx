import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeremiah 2 Study Guide &mdash; What Wrong Did Your Fathers Find in Me",
  description: "A verse-by-verse guide to Jeremiah 2 &mdash; God's covenant lawsuit against Israel, the forsaking of the living fountain for broken cisterns, and the call to return from spiritual adultery.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
