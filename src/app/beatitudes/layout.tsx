import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Beatitudes",
  description: "The opening of the Sermon on the Mount — eight upside-down blessings that describe the character of kingdom citizens. These are not commands but descriptions: this is what those who belong to God's…",
  openGraph: {
    title: "The Beatitudes — Vine",
    description: "The opening of the Sermon on the Mount — eight upside-down blessings that describe the character of kingdom citizens. These are not commands but descriptions: this is what those who belong to God's…",
    images: ["/api/og?title=The+Beatitudes"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Beatitudes — Vine",
    description: "The opening of the Sermon on the Mount — eight upside-down blessings that describe the character of kingdom citizens. These are not commands but descriptions: this is what those who belong to God's…",
    images: ["/api/og?title=The+Beatitudes"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
