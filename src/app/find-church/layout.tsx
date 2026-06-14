import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Find a Church — The Vine",
  description: "Guidance on finding a healthy, Bible-teaching church near you. What to look for, questions to ask, and how to evaluate a church biblically.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
