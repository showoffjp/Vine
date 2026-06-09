import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hamartiology: A Comprehensive Theology of Sin | Vine",
  description:
    "A comprehensive guide to hamartiology — the theology of sin. Covers the definition and nature of sin, original sin and the fall, total depravity (and what it does and doesn't mean), the types and gradations of sin, the deceitfulness of sin, and how the gospel addresses sin.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
