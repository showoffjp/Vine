import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proverbs 5 Study Guide &mdash; Warning Against Adultery and Rejoicing in Marriage",
  description: "A verse-by-verse guide to Proverbs 5 &mdash; the father's urgent warning against the adulteress, the bitterness of sin's consequences, and the call to find joy in faithful marriage.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
