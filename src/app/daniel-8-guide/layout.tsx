import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel 8: The Vision of the Ram and the Goat - Study Guide | Vine",
  description: "A comprehensive study guide to Daniel chapter 8 - the ram of Medo-Persia, the goat of Greece, Alexander and the four horns, the little horn of Antiochus, and the 2300 evenings and mornings.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
