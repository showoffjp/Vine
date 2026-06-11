import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taming the Tongue: Gossip & Speech — Vine",
  description: "Gossip is one of the most socially acceptable sins in the church. A biblical guide to taming the tongue — James 3, the Proverbs on the whisperer, prayer-request gossip, social media, and speech that builds up.",
  openGraph: {
    title: "Taming the Tongue: Gossip & Speech — Vine",
    description: "Gossip is one of the most socially acceptable sins in the church. A biblical guide to taming the tongue — James 3, the Proverbs on the whisperer, prayer-request gossip, social media, and speech that builds up.",
    images: ["/api/og?title=Taming+the+Tongue"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taming the Tongue: Gossip & Speech — Vine",
    description: "Gossip is one of the most socially acceptable sins in the church. A biblical guide to taming the tongue — James 3, the Proverbs on the whisperer, prayer-request gossip, social media, and speech that builds up.",
    images: ["/api/og?title=Taming+the+Tongue"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
