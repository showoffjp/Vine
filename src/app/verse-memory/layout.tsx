import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verse Memory",
  description: "Add your first verse or select a different category",
  openGraph: {
    title: "Verse Memory — Vine",
    description: "Add your first verse or select a different category",
    images: ["/api/og?title=Verse+Memory"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verse Memory — Vine",
    description: "Add your first verse or select a different category",
    images: ["/api/og?title=Verse+Memory"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
