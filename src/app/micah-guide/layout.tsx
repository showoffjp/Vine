import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Micah: A Comprehensive Study Guide | Vine",
  description: "Micah asks the question every generation asks: what does God actually want? The answer is Micah 6:8 — to do justice, love kindness (hesed), and walk humbly with your God. The Bethlehem prophecy (5:2), swords into plowshares (4:3), and the God who pardons iniquity (7:18–20).",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
