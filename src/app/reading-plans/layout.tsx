import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bible Reading Plans — The Vine",
  description: "Structured Bible reading plans to help you read through Scripture systematically — 30-day, 90-day, and through-the-Bible plans for every season of life.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
