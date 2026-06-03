import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youth & Students",
  description: "Faith for the next generation. Real challenges, honest resources, and a community that gets what you're going through.",
  openGraph: {
    title: "Youth & Students — Vine",
    description: "Faith for the next generation. Real challenges, honest resources, and a community that gets what you're going through.",
    images: ["/api/og?title=Youth+%26+Students"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth & Students — Vine",
    description: "Faith for the next generation. Real challenges, honest resources, and a community that gets what you're going through.",
    images: ["/api/og?title=Youth+%26+Students"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
