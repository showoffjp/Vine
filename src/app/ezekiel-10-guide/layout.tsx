import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezekiel 10 Study Guide &mdash; The Glory of the LORD Departed from the Temple",
  description: "A verse-by-verse guide to Ezekiel 10 &mdash; the living creatures and wheels revisited, burning coals scattered over Jerusalem, and the devastating departure of God's glory from the threshold of the temple.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
