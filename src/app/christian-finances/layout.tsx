import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Personal Finance | Vine",
  description:
    "Biblical stewardship, tithing, debt freedom, and the spiritual practice of budgeting — a Christian approach to money and generosity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
