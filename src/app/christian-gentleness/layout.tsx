import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strength Under Control: Christian Gentleness | The Vine",
  description: "A guide to the fruit of gentleness — prautes, the meekness of Christ, soft answers, and gentle strength in a harsh culture.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
