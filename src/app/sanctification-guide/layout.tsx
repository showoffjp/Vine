import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanctification: A Comprehensive Guide to Growing in Holiness | Vine",
  description:
    "A comprehensive guide to the theology and practice of sanctification — what it is, the three phases (positional/progressive/glorification), mortification and vivification, the means of grace, the role of the Spirit, and how to practically grow in holiness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
