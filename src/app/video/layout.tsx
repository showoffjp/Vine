import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Library — Vine",
  description: "Christian sermons, worship videos, testimonies, teaching, and documentaries — all in one place.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
