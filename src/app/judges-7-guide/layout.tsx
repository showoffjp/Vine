import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Judges 7 Chapter Guide – Gideon's Three Hundred | The Vine",
  description: "A deep guide to Judges 7 — God reduces Gideon's army from 32,000 to 300 at the water test, the overheard dream encourages Gideon, and the three hundred rout the Midianites with trumpets, empty jars, and torches so that God alone gets the glory.",
  openGraph: { title: "Judges 7 Chapter Guide – The Vine", description: "Judges 7 guide: Gideon's army reduced to 300, the water test, torches and trumpets, and God's glory through human weakness.", images: ["/api/og?title=Judges+7+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Judges 7 Chapter Guide – The Vine", description: "A deep guide to Judges 7 on Gideon's three hundred and God's glory through weakness.", images: ["/api/og?title=Judges+7+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
