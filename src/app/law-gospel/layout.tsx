import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Law and Gospel | Vine",
  description:
    "The distinction between law and gospel is the nerve of Lutheran and Reformed theology. A guide to what the law is, what the gospel is, how they work together, and why confusing them is catastrophic for the Christian life.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
