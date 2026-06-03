import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Missions Organizations",
  description: "The organizations doing the most significant global missions work — from Wycliffe's Bible translation in 2,000 languages to the Chinese underground church's Back to Jerusalem movement. Find your pl…",
  openGraph: {
    title: "Global Missions Organizations — Vine",
    description: "The organizations doing the most significant global missions work — from Wycliffe's Bible translation in 2,000 languages to the Chinese underground church's Back to Jerusalem movement. Find your pl…",
    images: ["/api/og?title=Global+Missions+Organizations"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Missions Organizations — Vine",
    description: "The organizations doing the most significant global missions work — from Wycliffe's Bible translation in 2,000 languages to the Chinese underground church's Back to Jerusalem movement. Find your pl…",
    images: ["/api/og?title=Global+Missions+Organizations"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
