import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practicing the Sabbath | Vine",
  description: "A guide to Sabbath theology and practice — from the Old Testament command to the New Testament Lord&apos;s Day, with practical wisdom for families, rhythms, and the economics of rest.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
