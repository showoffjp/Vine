import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Theology of Grace",
  description:
    "The doctrine of grace — common grace vs. saving grace, prevenient grace (Arminian) vs. irresistible grace (Calvinist), the five points of Calvinism (TULIP), the means of grace, grace and law, and why grace is not the same as being nice.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
