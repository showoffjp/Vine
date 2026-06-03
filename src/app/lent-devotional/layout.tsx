import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lent: Forty Days of Repentance and Renewal",
  description: "Lent is the church's 40-day preparation for Easter — a season of fasting, repentance, self-examination, and renewed focus on the cross and resurrection of Jesus Christ.",
  openGraph: {
    title: "Lent: Forty Days of Repentance and Renewal — Vine",
    description: "Lent is the church's 40-day preparation for Easter — a season of fasting, repentance, self-examination, and renewed focus on the cross and resurrection of Jesus Christ.",
    images: ["/api/og?title=Lent%3A+Forty+Days+of+Repentance+and+Renewal"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lent: Forty Days of Repentance and Renewal — Vine",
    description: "Lent is the church's 40-day preparation for Easter — a season of fasting, repentance, self-examination, and renewed focus on the cross and resurrection of Jesus Christ.",
    images: ["/api/og?title=Lent%3A+Forty+Days+of+Repentance+and+Renewal"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
