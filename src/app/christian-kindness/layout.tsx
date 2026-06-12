import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Kindness of God: Christian Kindness | The Vine",
  description: "A guide to the fruit of kindness — chrestotes, hesed loving-kindness, kindness to enemies, and kindness that leads to repentance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
