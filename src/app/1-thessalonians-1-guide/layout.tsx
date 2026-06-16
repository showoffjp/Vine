import { Metadata } from "next";

export const metadata: Metadata = {
  title: "1 Thessalonians 1 Study Guide: Faith, Hope, and Love | The Vine",
  description:
    "A comprehensive verse-by-verse study of 1 Thessalonians 1 -- Paul's opening thanksgiving covering the triad of faith, hope, and love; the gospel coming in power and the Holy Spirit; the Thessalonians as an example to all believers; and waiting for his Son from heaven.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
