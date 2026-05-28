import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parenting — Vine",
  description:
    "Christian parenting wisdom — raising children in faith, building godly families, and navigating the challenges of modern parenthood.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
