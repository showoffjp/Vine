import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Complete Fasting Guide",
  description: "\"When you fast...\" — Jesus assumed his disciples would fast. Not as a means of earning God's favor, but as the body's participation in the soul's hunger for God. This is the complete biblical and p…",
  openGraph: {
    title: "The Complete Fasting Guide — Vine",
    description: "\"When you fast...\" — Jesus assumed his disciples would fast. Not as a means of earning God's favor, but as the body's participation in the soul's hunger for God. This is the complete biblical and p…",
    images: ["/api/og?title=The+Complete+Fasting+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Complete Fasting Guide — Vine",
    description: "\"When you fast...\" — Jesus assumed his disciples would fast. Not as a means of earning God's favor, but as the body's participation in the soul's hunger for God. This is the complete biblical and p…",
    images: ["/api/og?title=The+Complete+Fasting+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
