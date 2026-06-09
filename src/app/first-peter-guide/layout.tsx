import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of 1 Peter: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to 1 Peter — a living hope through resurrection, suffering for righteousness, the royal priesthood, submission and suffering, and the fiery trial.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
