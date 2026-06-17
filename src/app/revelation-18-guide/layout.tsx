import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revelation 18 Study Guide &mdash; The Fall of Babylon",
  description: "A verse-by-verse guide to Revelation 18 &mdash; the dramatic fall of Babylon the Great, the call to God's people to come out, and the lament of kings and merchants.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
