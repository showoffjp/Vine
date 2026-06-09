import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Books of 1 & 2 Chronicles: A Comprehensive Study Guide | Vine",
  description: "The Chronicler retells Israel's story for a post-exilic community asking: can we begin again? From Adam to Cyrus's decree, through David's Temple preparations, Hezekiah's revival, and Josiah's reform — 2 Chronicles ends with an invitation: 'Let him go up.' The story isn't over.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
