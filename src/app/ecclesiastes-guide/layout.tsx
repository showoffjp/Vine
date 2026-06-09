import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Ecclesiastes: A Comprehensive Study Guide | Vine",
  description: "Qoheleth's honest investigation into meaning under the sun — vanity of vanities, wisdom's limits, death as the great leveler, the gift of ordinary joy, and the fear of God as life's final answer.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
