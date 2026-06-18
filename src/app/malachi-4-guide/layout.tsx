import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malachi 4 Study Guide &mdash; The Sun of Righteousness Shall Rise with Healing",
  description: "A verse-by-verse guide to Malachi 4 &mdash; the day burning like an oven, the Sun of Righteousness rising with healing in its wings, the promise of Elijah before the great day, and the turning of hearts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
