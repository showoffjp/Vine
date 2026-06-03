import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Christian Calendar",
  description: "The liturgical year tells the full story of salvation — Advent through Ordinary Time, shaping how the church experiences time itself.",
  openGraph: {
    title: "The Christian Calendar — Vine",
    description: "The liturgical year tells the full story of salvation — Advent through Ordinary Time, shaping how the church experiences time itself.",
    images: ["/api/og?title=The+Christian+Calendar"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Christian Calendar — Vine",
    description: "The liturgical year tells the full story of salvation — Advent through Ordinary Time, shaping how the church experiences time itself.",
    images: ["/api/og?title=The+Christian+Calendar"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
