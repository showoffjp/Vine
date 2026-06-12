import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seventy Times Seven: Christian Forgiveness | The Vine",
  description:
    "A guide to forgiveness as a spiritual discipline — releasing debts, the parable of the unforgiving servant, C.S. Lewis on forgiving the inexcusable, and the freedom forgiveness brings.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
