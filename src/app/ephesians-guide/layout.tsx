import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Ephesians: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to Ephesians — spiritual blessings in Christ, predestination and election, the mystery of the church, spiritual warfare and the armor of God, Christian marriage, and Paul's prayer for spiritual power.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
