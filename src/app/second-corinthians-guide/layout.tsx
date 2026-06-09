import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of 2 Corinthians: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to 2 Corinthians — Paul's most personal letter, power in weakness, the treasure in jars of clay, the ministry of reconciliation, the thorn in the flesh, and giving as grace.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
