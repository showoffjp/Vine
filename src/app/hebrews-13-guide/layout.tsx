import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hebrews 13 Study Guide &mdash; The Vine",
  description: "A comprehensive Bible study guide to Hebrews 13 &mdash; the closing practical exhortations of Hebrews. Brotherly love, hospitality to strangers, marriage honored, contentment, Jesus Christ the same yesterday today and forever, go outside the camp bearing his reproach, the city to come.",
  openGraph: {
    title: "Hebrews 13 Study Guide &mdash; The Vine",
    description: "The closing practical exhortations of Hebrews. Brotherly love, hospitality, contentment, the unchanging Christ, and the call to go outside the camp.",
    images: ["/api/og?title=Hebrews+13+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hebrews 13 Study Guide &mdash; The Vine",
    description: "The closing practical exhortations of Hebrews. Brotherly love, hospitality, contentment, the unchanging Christ, and the call to go outside the camp.",
    images: ["/api/og?title=Hebrews+13+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
