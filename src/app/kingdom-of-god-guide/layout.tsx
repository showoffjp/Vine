import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Kingdom of God: A Comprehensive Guide | Vine",
  description:
    "What is the Kingdom of God? A comprehensive guide to one of Jesus's central themes — the Kingdom's already/not-yet nature, its political and social implications, how it relates to the church, and how Christians should work for it today.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
