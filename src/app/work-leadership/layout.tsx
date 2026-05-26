import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Leadership — Vine",
  description:
    "Biblical leadership, faith at work, vocation theology, and building a career that honors God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
