import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories — Vine",
  description: "Real testimonies from real Christians around the world. From every nation, tribe, and tongue.",
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
