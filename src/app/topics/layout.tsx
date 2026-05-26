import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trending Topics — Vine",
  description:
    "Explore what the Christian community is talking about right now — from theology debates to cultural moments.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
