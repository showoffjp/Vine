import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search — Vine",
  description: "Search across articles, scripture, discussions, stories, groups, and people on Vine.",
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
