import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doubt and Christian Faith: A Guide to Questions, Deconstruction, and Trust | Vine",
  description:
    "A compassionate guide to doubt and faith — the difference between doubt and unbelief, intellectual objections, emotional doubts, deconstruction and reconstruction, and how to keep faith through the dark night of the soul.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
