import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Galatians: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to the Book of Galatians — Paul's defense of the gospel of grace, justification by faith alone, the curse of the law, the Abrahamic promise, freedom in Christ, and the fruit of the Spirit.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
