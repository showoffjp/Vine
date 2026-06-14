import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Daily Bread — Morning Devotionals — The Vine",
  description: "Start each day in the Word. Fresh devotionals, verse meditations, and spiritual reflections to anchor your morning in Christ.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
