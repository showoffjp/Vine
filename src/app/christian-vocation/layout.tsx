import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Called to Work: Christian Vocation | The Vine",
  description:
    "A guide to the theology of vocation — work as worship, Luther's calling, and how daily labor connects to the kingdom of God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
