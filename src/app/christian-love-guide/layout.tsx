import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Greatest of These: Christian Love | The Vine",
  description: "A guide to Christian love — agape, 1 Corinthians 13, loving enemies, and the love that lays down its life.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
