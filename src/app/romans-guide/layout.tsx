import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Romans: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to Paul's letter to the Romans — the problem of sin and God's wrath, justification by faith, union with Christ, the law and the Spirit, Israel's mystery, and kingdom ethics for the church.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
