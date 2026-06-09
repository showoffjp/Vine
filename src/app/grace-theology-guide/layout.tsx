import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Grace: A Comprehensive Biblical Guide | Vine",
  description:
    "A comprehensive guide to the theology of grace — common grace and special grace, the five points of Calvinism (TULIP), prevenient grace, irresistible grace, grace and free will, means of grace, and living under grace vs. law.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
