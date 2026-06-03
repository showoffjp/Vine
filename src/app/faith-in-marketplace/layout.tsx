import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith in the Marketplace",
  description: "Monday through Friday is where most of your life happens. A theology of work that transforms how you show up — not just on Sunday morning.",
  openGraph: {
    title: "Faith in the Marketplace — Vine",
    description: "Monday through Friday is where most of your life happens. A theology of work that transforms how you show up — not just on Sunday morning.",
    images: ["/api/og?title=Faith+in+the+Marketplace"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith in the Marketplace — Vine",
    description: "Monday through Friday is where most of your life happens. A theology of work that transforms how you show up — not just on Sunday morning.",
    images: ["/api/og?title=Faith+in+the+Marketplace"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
