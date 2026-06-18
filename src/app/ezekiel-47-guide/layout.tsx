import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezekiel 47 Study Guide &mdash; Water Flowing from the Temple",
  description: "A verse-by-verse guide to Ezekiel 47 &mdash; the river of life flowing from under the temple threshold, deepening as it goes, healing the Dead Sea, and the distribution of the land to Israel and the aliens among them.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
