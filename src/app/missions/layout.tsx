import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make disciples of all nations.",
  description: "Matthew 28:19 isn't a suggestion. It's the marching order of the Church. Here's what's happening on the ground — and how you can be part of it.",
  openGraph: {
    title: "Make disciples of all nations. — Vine",
    description: "Matthew 28:19 isn't a suggestion. It's the marching order of the Church. Here's what's happening on the ground — and how you can be part of it.",
    images: ["/api/og?title=Make+disciples+of+all+nations."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Make disciples of all nations. — Vine",
    description: "Matthew 28:19 isn't a suggestion. It's the marching order of the Church. Here's what's happening on the ground — and how you can be part of it.",
    images: ["/api/og?title=Make+disciples+of+all+nations."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
