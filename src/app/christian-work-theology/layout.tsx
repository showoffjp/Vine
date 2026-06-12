import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whatever You Do: A Theology of Work | The Vine",
  description:
    "A biblical theology of work as calling and worship — from the pre-Fall goodness of labor to the redemption of work through Christ, covering excellence, the sacred/secular divide, and Monday morning discipleship.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
