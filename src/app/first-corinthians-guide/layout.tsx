import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of 1 Corinthians: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to 1 Corinthians — divisions in the church, the wisdom of the cross, spiritual gifts, love (1 Corinthians 13), the Lord's Supper, the resurrection chapter (1 Corinthians 15), and Christian ethics.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
