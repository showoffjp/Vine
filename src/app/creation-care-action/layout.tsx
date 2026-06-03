import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caring for Creation",
  description: "A practical guide for Christians who want to love God's creation — theological roots, 30 concrete actions, prophetic voices, and communities leading the way.",
  openGraph: {
    title: "Caring for Creation — Vine",
    description: "A practical guide for Christians who want to love God's creation — theological roots, 30 concrete actions, prophetic voices, and communities leading the way.",
    images: ["/api/og?title=Caring+for+Creation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caring for Creation — Vine",
    description: "A practical guide for Christians who want to love God's creation — theological roots, 30 concrete actions, prophetic voices, and communities leading the way.",
    images: ["/api/og?title=Caring+for+Creation"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
