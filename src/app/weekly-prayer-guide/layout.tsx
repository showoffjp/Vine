import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Prayer Guide",
  description: "Seven days, seven themes — a structured pattern of prayer that moves from worship on Sunday through work, family, evangelism, the world, confession, and rest. Pick today and begin.",
  openGraph: {
    title: "Weekly Prayer Guide — Vine",
    description: "Seven days, seven themes — a structured pattern of prayer that moves from worship on Sunday through work, family, evangelism, the world, confession, and rest. Pick today and begin.",
    images: ["/api/og?title=Weekly+Prayer+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weekly Prayer Guide — Vine",
    description: "Seven days, seven themes — a structured pattern of prayer that moves from worship on Sunday through work, family, evangelism, the world, confession, and rest. Pick today and begin.",
    images: ["/api/og?title=Weekly+Prayer+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
