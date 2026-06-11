import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fear & the Christian | Vine",
  description: "A theological and practical guide to fear — the fear of the Lord, worldly fear, anxiety, and the courage that comes from perfect love casting out fear.",
  openGraph: {
    title: "Fear & the Christian | Vine",
    description: "A theological and practical guide to fear — the fear of the Lord, worldly fear, anxiety, and the courage that comes from perfect love casting out fear.",
    images: ["/api/og?title=Fear+%26+the+Christian"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fear & the Christian | Vine",
    description: "A theological and practical guide to fear — the fear of the Lord, worldly fear, anxiety, and the courage that comes from perfect love casting out fear.",
    images: ["/api/og?title=Fear+%26+the+Christian"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
