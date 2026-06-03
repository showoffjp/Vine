import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biblical Archaeology Discoveries",
  description: "Real archaeological discoveries that confirm the historical accuracy of Scripture — from the Dead Sea Scrolls to the Pontius Pilate Stone. The ground itself testifies.",
  openGraph: {
    title: "Biblical Archaeology Discoveries — Vine",
    description: "Real archaeological discoveries that confirm the historical accuracy of Scripture — from the Dead Sea Scrolls to the Pontius Pilate Stone. The ground itself testifies.",
    images: ["/api/og?title=Biblical+Archaeology+Discoveries"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biblical Archaeology Discoveries — Vine",
    description: "Real archaeological discoveries that confirm the historical accuracy of Scripture — from the Dead Sea Scrolls to the Pontius Pilate Stone. The ground itself testifies.",
    images: ["/api/og?title=Biblical+Archaeology+Discoveries"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
