import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Sanctification Guide",
  description:
    "The theology of sanctification — definitive vs. progressive sanctification, the Wesleyan doctrine of entire sanctification, mortification and vivification, the role of the Spirit, the means of sanctification, and why holiness is both God’s gift and our pursuit.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
