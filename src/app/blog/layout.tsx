import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Vine",
  description:
    "Christian news, theology deep-dives, life application articles, and editorial pieces for modern believers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
