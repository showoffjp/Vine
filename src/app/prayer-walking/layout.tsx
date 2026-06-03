import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Walking",
  description: "Combine physical movement with spiritual intercession — walk your neighborhood, city, or workplace while covering it in prayer.",
  openGraph: {
    title: "Prayer Walking — Vine",
    description: "Combine physical movement with spiritual intercession — walk your neighborhood, city, or workplace while covering it in prayer.",
    images: ["/api/og?title=Prayer+Walking"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer Walking — Vine",
    description: "Combine physical movement with spiritual intercession — walk your neighborhood, city, or workplace while covering it in prayer.",
    images: ["/api/og?title=Prayer+Walking"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
