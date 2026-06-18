import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezekiel 11 Study Guide &mdash; I Will Give You a New Heart",
  description: "A verse-by-verse guide to Ezekiel 11 &mdash; judgment on Jerusalem's wicked leaders, the promise of a new heart and new spirit for the scattered exiles, and the final departure of God's glory to the Mount of Olives.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
