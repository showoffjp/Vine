import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One, Holy, Catholic, and Apostolic Church",
  description: "With 1.3 billion baptized members, the Catholic Church is the largest Christian body in the world — tracing its origin to the apostles, bearing the fullness of the sacraments, and holding together…",
  openGraph: {
    title: "One, Holy, Catholic, and Apostolic Church — Vine",
    description: "With 1.3 billion baptized members, the Catholic Church is the largest Christian body in the world — tracing its origin to the apostles, bearing the fullness of the sacraments, and holding together…",
    images: ["/api/og?title=One%2C+Holy%2C+Catholic%2C+and+Apostolic+Church"],
  },
  twitter: {
    card: "summary_large_image",
    title: "One, Holy, Catholic, and Apostolic Church — Vine",
    description: "With 1.3 billion baptized members, the Catholic Church is the largest Christian body in the world — tracing its origin to the apostles, bearing the fullness of the sacraments, and holding together…",
    images: ["/api/og?title=One%2C+Holy%2C+Catholic%2C+and+Apostolic+Church"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
