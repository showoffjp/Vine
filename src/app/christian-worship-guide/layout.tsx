import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Worship Guide | Vine",
  description: "A theological and practical guide to Christian worship — the elements of corporate worship, why we worship, singing and praise, liturgy vs. contemporary, the Lord's Day, and private vs. corporate worship.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
