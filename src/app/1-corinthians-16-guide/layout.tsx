import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Corinthians 16 Guide - The Collection, Final Exhortations, and Maranatha",
  description: "A deep guide to 1 Corinthians 16 - the collection for the saints and the principle of systematic proportional giving, Paul's travel plans and the wide open door with many adversaries, the commendation of Timothy and Apollos, the fivefold call to be watchful, stand firm, act like men, be strong, and do all in love, the household of Stephanas, and the closing greetings with the Aramaic cry Maranatha, Our Lord, come.",
  openGraph: { title: "1 Corinthians 16 Guide - Vine", description: "A guide to 1 Corinthians 16 - systematic giving, open doors and adversaries, the fivefold exhortation, and the early Christian prayer Maranatha.", images: ["/api/og?title=1+Corinthians+16+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 16 Guide - Vine", description: "A deep guide to 1 Corinthians 16 - the collection, the fivefold exhortation, and Maranatha.", images: ["/api/og?title=1+Corinthians+16+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
