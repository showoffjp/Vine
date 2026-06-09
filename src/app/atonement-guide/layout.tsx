import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Atonement: How Christ's Death Saves | Vine",
  description:
    "A comprehensive guide to the Christian doctrine of atonement — what happened at the cross, the major theories (penal substitution, Christus Victor, moral influence, ransom, satisfaction, governmental), and how to understand their biblical basis.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
