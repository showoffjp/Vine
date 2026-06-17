import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proverbs 28 Study Guide &mdash; The Righteous Are Bold as a Lion",
  description: "A verse-by-verse guide to Proverbs 28 &mdash; contrasts between the wicked and righteous, the importance of confessing sin, and leadership marked by justice and integrity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
