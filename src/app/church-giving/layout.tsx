import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Giving",
  description: "God loves a cheerful giver. Giving is not a tax, not a transaction, and not an obligation — it is the gospel lived out in material form, participating in the same movement of grace that brought Chr…",
  openGraph: {
    title: "Christian Giving — Vine",
    description: "God loves a cheerful giver. Giving is not a tax, not a transaction, and not an obligation — it is the gospel lived out in material form, participating in the same movement of grace that brought Chr…",
    images: ["/api/og?title=Christian+Giving"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Giving — Vine",
    description: "God loves a cheerful giver. Giving is not a tax, not a transaction, and not an obligation — it is the gospel lived out in material form, participating in the same movement of grace that brought Chr…",
    images: ["/api/og?title=Christian+Giving"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
