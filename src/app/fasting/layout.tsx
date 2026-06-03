import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fasting Tracker",
  description: "Fasting is a discipline Jesus expected, not just suggested. Track your fasts, set intentions, and journal what God reveals.",
  openGraph: {
    title: "Fasting Tracker — Vine",
    description: "Fasting is a discipline Jesus expected, not just suggested. Track your fasts, set intentions, and journal what God reveals.",
    images: ["/api/og?title=Fasting+Tracker"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fasting Tracker — Vine",
    description: "Fasting is a discipline Jesus expected, not just suggested. Track your fasts, set intentions, and journal what God reveals.",
    images: ["/api/og?title=Fasting+Tracker"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
