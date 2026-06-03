import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Leadership",
  description: "The Son of Man came not to be served but to serve. Christian leadership inverts the world's definition — it moves toward sacrifice and the building up of others, not toward power and position.",
  openGraph: {
    title: "Christian Leadership — Vine",
    description: "The Son of Man came not to be served but to serve. Christian leadership inverts the world's definition — it moves toward sacrifice and the building up of others, not toward power and position.",
    images: ["/api/og?title=Christian+Leadership"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Leadership — Vine",
    description: "The Son of Man came not to be served but to serve. Christian leadership inverts the world's definition — it moves toward sacrifice and the building up of others, not toward power and position.",
    images: ["/api/og?title=Christian+Leadership"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
