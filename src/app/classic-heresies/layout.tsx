import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classic Heresies Explained",
  description: "The church's doctrinal boundaries were forged in controversy. Understanding what the church rejected — and why — is essential for understanding what the church believes. Heresy is not merely wrong;…",
  openGraph: {
    title: "Classic Heresies Explained — Vine",
    description: "The church's doctrinal boundaries were forged in controversy. Understanding what the church rejected — and why — is essential for understanding what the church believes. Heresy is not merely wrong;…",
    images: ["/api/og?title=Classic+Heresies+Explained"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Classic Heresies Explained — Vine",
    description: "The church's doctrinal boundaries were forged in controversy. Understanding what the church rejected — and why — is essential for understanding what the church believes. Heresy is not merely wrong;…",
    images: ["/api/og?title=Classic+Heresies+Explained"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
