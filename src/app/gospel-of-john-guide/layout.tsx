import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gospel of John: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to the Gospel of John — the prologue and Word Christology, the seven signs, the I AM sayings, the Farewell Discourse, and the resurrection appearances.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
