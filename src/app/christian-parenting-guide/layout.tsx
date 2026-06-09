import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Parenting: A Comprehensive Biblical Guide | Vine",
  description:
    "A comprehensive guide to Christian parenting — a biblical theology of children, discipleship in the home, discipline and grace, raising children through faith, navigating technology and culture, and shepherding teenagers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
