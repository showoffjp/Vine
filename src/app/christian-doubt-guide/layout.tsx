import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith Through Doubt: Christian Doubt | The Vine",
  description: "A guide to Christian doubt — how honest questioning can deepen belief, the difference between doubt and unbelief, and why the church must make room for those who struggle to believe.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
