import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divorce & Remarriage: A Christian Guide | Vine",
  description: "What the Bible says about divorce, grounds for biblical divorce, remarriage, healing, and the church's care for divorced people — a grace-centered Christian guide.",
  openGraph: {
    title: "Divorce & Remarriage: A Christian Guide — Vine",
    description: "What the Bible says about divorce, grounds for biblical divorce, remarriage, healing, and the church's care for divorced people — a grace-centered Christian guide.",
    images: ["/api/og?title=Divorce+%26+Remarriage%3A+A+Christian+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divorce & Remarriage: A Christian Guide — Vine",
    description: "What the Bible says about divorce, grounds for biblical divorce, remarriage, healing, and the church's care for divorced people — a grace-centered Christian guide.",
    images: ["/api/og?title=Divorce+%26+Remarriage%3A+A+Christian+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
