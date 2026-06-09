import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Genesis: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to the Book of Genesis — creation and the image of God, the Fall and its consequences, the patriarchal narratives, the covenant with Abraham, Joseph and providence, and how Genesis points to Christ.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
