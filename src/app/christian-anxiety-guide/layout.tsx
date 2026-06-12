import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cast Your Cares: Christian Anxiety Guide | The Vine",
  description:
    "A guide to anxiety, worry, and trusting God — from Philippians 4 and 1 Peter 5 to the birds of the air, the peace that surpasses understanding, and the distinction between clinical anxiety and spiritual worry.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
