import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finances — Vine",
  description:
    "Biblical stewardship, debt freedom, generosity, and building wealth with a God-first approach.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
