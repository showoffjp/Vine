import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Guide to Singleness",
  description: "Singleness and the Christian faith — Paul's theology of celibacy as gift (1 Corinthians 7), Jesus as the unmarried Son of God, the church as the primary family, loneliness vs. solitude, dating as a Christian, and flourishing as a single adult in a marriage-centered church culture.",
  openGraph: { title: "Christian Guide to Singleness — Vine", description: "Singleness and faith — Paul on celibacy, Jesus as unmarried, the church as family, loneliness, dating, and flourishing.", images: ["/api/og?title=Christian+Guide+to+Singleness"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Singleness — Vine", description: "Singleness and the Christian faith — theology and flourishing.", images: ["/api/og?title=Christian+Guide+to+Singleness"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
