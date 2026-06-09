import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gospel of Matthew: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to the Gospel of Matthew — the five discourses, the Kingdom of Heaven, the Sermon on the Mount, the Great Commission, Christology as the New Moses, and Matthew's fulfillment quotations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
