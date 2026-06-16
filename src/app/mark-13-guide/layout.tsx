import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mark 13: The Olivet Discourse - A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive study guide to Mark 13, the Olivet Discourse - the destruction of the temple, the signs of the end, the abomination of desolation, the coming of the Son of Man, and the call to stay awake and watch.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
