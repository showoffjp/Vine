import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Kind of Prayer: Types of Christian Prayer | The Vine",
  description:
    "A guide to the many forms of Christian prayer — adoration, confession, thanksgiving, supplication, intercession, lament, and contemplative prayer — and how to practice them.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
