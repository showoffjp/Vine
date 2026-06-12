import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You Cannot Serve Two Masters: A Christian Guide to Money | The Vine",
  description:
    "A biblical guide to money, generosity, and financial discipleship — from the love of money as root of evil (1 Tim 6:10) to cheerful giving (2 Cor 9:7), covering stewardship, tithing, debt, and what the prosperity gospel gets wrong.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
