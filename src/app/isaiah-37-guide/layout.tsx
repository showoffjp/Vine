import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 37: Hezekiah's Prayer and the Miraculous Deliverance of Jerusalem | Vine",
  description: "A verse-by-verse study guide to Isaiah 37 -- Hezekiah spreads the Assyrian letter before the LORD, Isaiah delivers oracles of deliverance, and the Angel of the LORD strikes 185,000 Assyrian soldiers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
