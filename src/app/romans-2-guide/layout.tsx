import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Romans 2 Guide - The Righteous Judgment of God - Christian Study",
  description: "A deep study of Romans 2 - God's impartial judgment that renders to each according to his works, the moralist condemned for judging others, the law written on the hearts of the Gentiles and the witness of conscience, the inadequacy of external religion, and the circumcision that is a matter of the heart, by the Spirit, not by the letter.",
  openGraph: { title: "Romans 2 Guide - The Righteous Judgment of God - Vine", description: "Explore Romans 2 - the impartiality of God's judgment, the law written on the heart, the witness of conscience, and the true circumcision of the heart by the Spirit.", images: ["/api/og?title=Romans+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 2 Guide - The Righteous Judgment of God - Vine", description: "A deep study of Romans 2 - God's impartial judgment, the law written on the heart, and the circumcision of the heart by the Spirit.", images: ["/api/og?title=Romans+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
