import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money and the Christian Life",
  description: "Jesus talked about money more than heaven and hell combined. This is not because money is the most important thing — it is because money competes with God for the heart more effectively than almost…",
  openGraph: {
    title: "Money and the Christian Life — Vine",
    description: "Jesus talked about money more than heaven and hell combined. This is not because money is the most important thing — it is because money competes with God for the heart more effectively than almost…",
    images: ["/api/og?title=Money+and+the+Christian+Life"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Money and the Christian Life — Vine",
    description: "Jesus talked about money more than heaven and hell combined. This is not because money is the most important thing — it is because money competes with God for the heart more effectively than almost…",
    images: ["/api/og?title=Money+and+the+Christian+Life"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
