import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Titus 3 Chapter Guide — The Vine",
  description: "Study Titus 3: Christian conduct in society, salvation by grace through the washing of regeneration, and Paul's final instructions. Not by works but by God's mercy.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
