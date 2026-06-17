import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeremiah 4 Study Guide &mdash; Circumcise Your Hearts and Return to Me",
  description: "A verse-by-verse guide to Jeremiah 4 &mdash; God's urgent call to circumcise the heart, the terrifying vision of creation undone by the coming foe from the north, and the lament over Jerusalem's desolation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
