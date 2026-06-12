import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In the World, Not of It: Christians and Culture | The Vine",
  description:
    "Exploring the Christ and culture question — H. Richard Niebuhr's five models, faithful presence, common grace, and what it means to engage culture as a Christian witness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
