import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 47 Study Guide &mdash; Clap Your Hands, All Peoples",
  description: "A verse-by-verse guide to Psalm 47 &mdash; the enthronement psalm calling all nations to praise the LORD Most High, the great King over all the earth, who has gone up with a shout to reign.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
