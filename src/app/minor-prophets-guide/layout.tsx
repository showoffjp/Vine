import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Minor Prophets: A Comprehensive Study Guide | Vine",
  description: "The Book of the Twelve — Amos on justice, Hosea on covenant love, Micah's call to justice and mercy, Jonah's reluctant mission, and Habakkuk wrestling with God about injustice.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
