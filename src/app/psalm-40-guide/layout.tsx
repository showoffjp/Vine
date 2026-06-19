import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 40 Study Guide &mdash; I Waited Patiently for the LORD",
  description: "A verse-by-verse guide to Psalm 40 &mdash; the new song after being lifted from the pit, 'sacrifice you did not desire but a body you have given me' (Hebrews 10), and the cry for help that ends the psalm.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
