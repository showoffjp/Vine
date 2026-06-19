import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 36 Study Guide &mdash; Your Steadfast Love Extends to the Heavens",
  description: "A verse-by-verse guide to Psalm 36 &mdash; the contrast between the transgression of the wicked and the immeasurable steadfast love of God, the fountain of life, and the light in whose light we see light.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
