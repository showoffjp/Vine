import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 32 Study Guide &mdash; Blessed Is the One Whose Sin Is Forgiven",
  description: "A verse-by-verse guide to Psalm 32 &mdash; David's penitential psalm of the blessedness of forgiveness, the misery of unconfessed sin, the relief of acknowledged sin, and God as a hiding place.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
