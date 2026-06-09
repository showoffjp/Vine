import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Jeremiah: A Comprehensive Study Guide | Vine",
  description: "The weeping prophet's life and message — Jeremiah's call, his confessions, the New Covenant promise of Jeremiah 31, the fall of Jerusalem, and what it means to remain faithful in a collapsing world.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
