import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Discernment: How to Know God's Will | Vine",
  description: "A comprehensive biblical and practical guide to Christian discernment — how to make major decisions, hear from God, and navigate uncertainty in faith.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
