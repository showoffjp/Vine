import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money & Debt",
  description: "Jesus spoke more about money than about heaven and hell combined. Money is a spiritual issue — not because wealth is evil, but because it tends toward lordship. The gospel frees us to hold it rightly.",
  openGraph: {
    title: "Money & Debt — Vine",
    description: "Jesus spoke more about money than about heaven and hell combined. Money is a spiritual issue — not because wealth is evil, but because it tends toward lordship. The gospel frees us to hold it rightly.",
    images: ["/api/og?title=Money+%26+Debt"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Money & Debt — Vine",
    description: "Jesus spoke more about money than about heaven and hell combined. Money is a spiritual issue — not because wealth is evil, but because it tends toward lordship. The gospel frees us to hold it rightly.",
    images: ["/api/og?title=Money+%26+Debt"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
