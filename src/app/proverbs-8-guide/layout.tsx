import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proverbs 8 Chapter Guide | The Vine",
  description: "A deep study of Proverbs 8 - Wisdom personified, the creation narrative, the qanah and amon debates, and Christological significance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
