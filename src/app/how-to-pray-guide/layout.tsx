import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "How to Pray: A Comprehensive Christian Guide | Vine",
  description: "A practical and theological guide to prayer — the Lord's Prayer line by line, the ACTS model, intercessory prayer, prayers of lament, persistence in prayer, praying the Psalms, and what to do when God seems silent.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
