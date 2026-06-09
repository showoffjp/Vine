import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sacraments & Ordinances | Vine",
  description:
    "A comprehensive guide to baptism and the Lord's Supper — how different Christian traditions understand them, what the Bible teaches, and why these practices matter for the life of the church.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
