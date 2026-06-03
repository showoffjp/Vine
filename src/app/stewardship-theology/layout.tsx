import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Money & Stewardship",
  description: "Jesus speaks about money more than heaven and hell combined. Not because God needs our money — but because money reveals and shapes our hearts. A complete theology of stewardship covers ownership,…",
  openGraph: {
    title: "Theology of Money & Stewardship — Vine",
    description: "Jesus speaks about money more than heaven and hell combined. Not because God needs our money — but because money reveals and shapes our hearts. A complete theology of stewardship covers ownership,…",
    images: ["/api/og?title=Theology+of+Money+%26+Stewardship"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of Money & Stewardship — Vine",
    description: "Jesus speaks about money more than heaven and hell combined. Not because God needs our money — but because money reveals and shapes our hearts. A complete theology of stewardship covers ownership,…",
    images: ["/api/og?title=Theology+of+Money+%26+Stewardship"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
