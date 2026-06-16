import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proverbs 23: Wealth, Wine, and Guarding the Heart | Vine",
  description: "A verse-by-verse study of Proverbs 23 -- warnings against materialism, drunkenness, and envy; the call to honor parents; and the central appeal: give me your heart.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
