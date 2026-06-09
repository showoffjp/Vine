import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Acts: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to the Book of Acts — the coming of the Spirit at Pentecost, the Jerusalem church, the expansion of the gospel to the Gentiles, Paul's missionary journeys, and the theological themes of the Spirit's work in history.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
