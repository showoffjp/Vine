import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When You Fast: The Discipline of Christian Fasting | The Vine",
  description:
    "Christian fasting as spiritual discipline, grief, warfare, and hunger for God — the biblical theology of fasting, its history in the church, and a practical guide to fasting faithfully.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
