import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 46 Study Guide &mdash; I Am God and There Is None Like Me",
  description: "A verse-by-verse guide to Isaiah 46 &mdash; God who carries his people contrasted with idols that must be carried, and his declaration that he alone is God from the beginning.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
