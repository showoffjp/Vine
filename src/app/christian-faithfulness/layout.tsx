import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faithful in Little: Christian Faithfulness | The Vine",
  description: "A guide to the fruit of faithfulness — keeping commitments, faithfulness in obscurity, and God's faithfulness as the anchor of ours.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
