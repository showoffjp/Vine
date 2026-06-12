import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Train Up a Child: Christian Parenting | The Vine",
  description:
    "A deep guide to raising children in faith — gospel-centered parenting, the Shema and walking discipleship, grace vs. law, children as image-bearers, and the parent as a picture of God's grace.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
