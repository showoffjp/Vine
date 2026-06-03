import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ten Commandments",
  description: "Not a ladder to earn God's favor — a charter for the liberated. God gave these commandments to people he had already redeemed, as a pattern for living in the freedom he had given them.",
  openGraph: {
    title: "The Ten Commandments — Vine",
    description: "Not a ladder to earn God's favor — a charter for the liberated. God gave these commandments to people he had already redeemed, as a pattern for living in the freedom he had given them.",
    images: ["/api/og?title=The+Ten+Commandments"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ten Commandments — Vine",
    description: "Not a ladder to earn God's favor — a charter for the liberated. God gave these commandments to people he had already redeemed, as a pattern for living in the freedom he had given them.",
    images: ["/api/og?title=The+Ten+Commandments"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
