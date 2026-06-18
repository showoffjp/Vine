import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malachi 1 Study Guide &mdash; I Have Loved You Says the LORD",
  description: "A verse-by-verse guide to Malachi 1 &mdash; God's declaration of love doubted by Israel, the polluted offerings on the altar, and the vision of a pure offering from all nations from the rising to the setting of the sun.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
