import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Discipleship — Vine",
  description: "What does it mean to follow Jesus? Explore the theology of discipleship, spiritual disciplines, dying to self, bearing fruit, and making disciples.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
