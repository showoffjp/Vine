import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 24 Study Guide &mdash; The King of Glory Shall Come In",
  description: "A verse-by-verse guide to Psalm 24 &mdash; the earth as the LORD's, the question of who may ascend the hill of the LORD, clean hands and a pure heart, and the gates lifting up their heads for the King of glory.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
