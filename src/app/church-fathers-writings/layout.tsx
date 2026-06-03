import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church Fathers: Their Writings",
  description: "The men who shaped Christian theology from 100 to 1274 AD — their lives, their key works, their greatest quotes, and where to read them free today. The faith was not invented at the Reformation.",
  openGraph: {
    title: "Church Fathers: Their Writings — Vine",
    description: "The men who shaped Christian theology from 100 to 1274 AD — their lives, their key works, their greatest quotes, and where to read them free today. The faith was not invented at the Reformation.",
    images: ["/api/og?title=Church+Fathers%3A+Their+Writings"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Fathers: Their Writings — Vine",
    description: "The men who shaped Christian theology from 100 to 1274 AD — their lives, their key works, their greatest quotes, and where to read them free today. The faith was not invented at the Reformation.",
    images: ["/api/og?title=Church+Fathers%3A+Their+Writings"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
