import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Guide to Generosity",
  description: "Generosity and the Christian faith - the theology of giving, the cheerful giver, tithing and proportional giving, the dangers of greed and the love of money, generosity as a reflection of Gods grace, and how giving frees the heart.",
  openGraph: { title: "Christian Guide to Generosity - Vine", description: "Generosity and faith - the theology of giving, the cheerful giver, tithing, the dangers of greed, and giving as grace.", images: ["/api/og?title=Christian+Generosity"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Generosity - Vine", description: "Generosity and the Christian faith.", images: ["/api/og?title=Christian+Generosity"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
