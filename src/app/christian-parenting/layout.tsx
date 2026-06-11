import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Parenting | Vine",
  description: "Biblical guidance for raising children in faith — family devotions, discipline with grace, passing faith to the next generation, and praying with your children.",
};

export default function ChristianParentingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
