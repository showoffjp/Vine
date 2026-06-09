import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Philippians: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to Philippians — the epistle of joy written from prison, the kenosis hymn (Philippians 2:5–11), the mind of Christ, pursuing Christ over all things, and the peace that surpasses all understanding.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
