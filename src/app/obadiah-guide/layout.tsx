import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Obadiah: A Comprehensive Study Guide | Vine",
  description: "The shortest book in the Old Testament — 21 verses — delivers one of its sharpest theological messages: pride goes before destruction. Edom's gloating over Jerusalem's fall brings a verdict from the God who settles accounts. But Obadiah ends with 'the kingdom shall be the LORD's.'",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
