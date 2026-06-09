import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Apologetics: A Comprehensive Guide | Vine",
  description:
    "How do you defend the Christian faith? A guide to the major apologetics arguments — cosmological, teleological, moral, ontological — and the main objections: the problem of evil, religious diversity, science and faith.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
