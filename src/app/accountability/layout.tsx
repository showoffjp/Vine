import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iron sharpens iron.",
  description: "Private accountability goals with real partners. Track progress, share notes, and stay consistent.",
  openGraph: {
    title: "Iron sharpens iron. — Vine",
    description: "Private accountability goals with real partners. Track progress, share notes, and stay consistent.",
    images: ["/api/og?title=Iron+sharpens+iron."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron sharpens iron. — Vine",
    description: "Private accountability goals with real partners. Track progress, share notes, and stay consistent.",
    images: ["/api/og?title=Iron+sharpens+iron."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
