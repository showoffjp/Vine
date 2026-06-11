import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Giving",
  description: "The theology of generosity, tithing, radical giving, and what the gospel does to our relationship with money. God loves a cheerful giver.",
  openGraph: {
    title: "Christian Giving — Vine",
    description: "The theology of generosity, tithing, radical giving, and what the gospel does to our relationship with money. God loves a cheerful giver.",
    images: ["/api/og?title=Christian+Giving"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Giving — Vine",
    description: "The theology of generosity, tithing, radical giving, and what the gospel does to our relationship with money. God loves a cheerful giver.",
    images: ["/api/og?title=Christian+Giving"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
