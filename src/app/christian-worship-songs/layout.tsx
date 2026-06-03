import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essential Christian Worship Songs",
  description: "12 songs that have shaped how Christians worship — from 19th-century hymns to this decade’s anthems. Each with its backstory, theology, and where to find it.",
  openGraph: {
    title: "Essential Christian Worship Songs — Vine",
    description: "12 songs that have shaped how Christians worship — from 19th-century hymns to this decade’s anthems. Each with its backstory, theology, and where to find it.",
    images: ["/api/og?title=Essential+Christian+Worship+Songs"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Christian Worship Songs — Vine",
    description: "12 songs that have shaped how Christians worship — from 19th-century hymns to this decade’s anthems. Each with its backstory, theology, and where to find it.",
    images: ["/api/og?title=Essential+Christian+Worship+Songs"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
