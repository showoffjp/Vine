import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Pastoral Epistles: 1 & 2 Timothy and Titus Study Guide | Vine",
  description: "Paul's letters to his younger co-workers on church leadership, sound doctrine, godliness, and finishing well. A comprehensive study guide to 1 Timothy, 2 Timothy, and Titus.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
