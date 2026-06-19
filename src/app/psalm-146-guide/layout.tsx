import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 146 Study Guide &mdash; Praise the LORD O My Soul",
  description: "A verse-by-verse guide to Psalm 146 &mdash; the first of the closing Hallelujah psalms, the folly of trusting princes, and the LORD who keeps faith forever, executes justice for the oppressed, and lifts up those bowed down.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
