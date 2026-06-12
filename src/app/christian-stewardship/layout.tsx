import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faithful Stewards: Christian Stewardship | The Vine",
  description:
    "A guide to Christian stewardship — managing time, money, talents, and creation as faithful servants of the God who owns everything.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
