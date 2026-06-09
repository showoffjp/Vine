import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calling & Vocation: A Christian Guide | Vine",
  description:
    "What is God's calling for your life? A comprehensive guide to the theology of vocation — the Reformation recovery of secular calling, how to discern your calling, and what it means that all legitimate work is holy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
