import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Corinthians 8 Guide - Christian Study",
  description: "A deep guide to 1 Corinthians 8 - food offered to idols, the principle that knowledge puffs up but love builds up, the confession of one God and one Lord, and the call to let love limit liberty for the sake of the weaker brother for whom Christ died.",
  openGraph: { title: "1 Corinthians 8 Guide - Vine", description: "A guide to 1 Corinthians 8 - food offered to idols, knowledge and love, one God and one Lord, and the weaker brother.", images: ["/api/og?title=1+Corinthians+8+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 8 Guide - Vine", description: "A deep guide to 1 Corinthians 8.", images: ["/api/og?title=1+Corinthians+8+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
