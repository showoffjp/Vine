import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galatians 1: No Other Gospel -- A Verse-by-Verse Study Guide | Vine",
  description:
    "A comprehensive verse-by-verse study of Galatians 1 -- Paul's passionate defense of the gospel of grace, the double anathema, his apostleship by direct revelation, and his dramatic conversion narrative.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
