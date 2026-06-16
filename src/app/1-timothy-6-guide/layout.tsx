import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1 Timothy 6 Study Guide &mdash; Godliness, Contentment, and the Fight of Faith",
  description: "A verse-by-verse guide to 1 Timothy 6 -- the final chapter covering godliness with contentment, the love of money as root of all evil, the fight of faith, and Paul's charge to Timothy and the wealthy.",
  openGraph: {
    title: "1 Timothy 6 Study Guide -- The Vine",
    description: "A verse-by-verse guide to 1 Timothy 6 -- godliness with contentment, the love of money, fleeing and pursuing righteousness, and the charge to the rich.",
    images: ["/api/og?title=1+Timothy+6+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "1 Timothy 6 Study Guide -- The Vine",
    description: "A verse-by-verse guide to 1 Timothy 6 -- godliness with contentment, the love of money, fleeing and pursuing righteousness, and the charge to the rich.",
    images: ["/api/og?title=1+Timothy+6+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
