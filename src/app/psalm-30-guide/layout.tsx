import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 30 Study Guide &mdash; Joy Comes with the Morning",
  description: "A verse-by-verse guide to Psalm 30 &mdash; the psalm of thanksgiving for deliverance, weeping that tarries for the night and joy that comes with the morning, and God turning mourning into dancing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
