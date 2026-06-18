import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haggai 1 Study Guide &mdash; Consider Your Ways and Build the House",
  description: "A verse-by-verse guide to Haggai 1 &mdash; the prophet's rebuke of a people building paneled houses while the Temple lies in ruins, the stirring of the remnant's spirit, and the renewed work of rebuilding.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
