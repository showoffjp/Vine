import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Malachi 3 Guide — Christian Study",
  description: "A deep guide to Malachi 3 — God sends a messenger to prepare the way, the Lord comes to His temple like a refiner's fire, Israel is rebuked for robbing God in tithes and offerings, and the famous challenge: Test Me in this.",
  openGraph: { title: "Malachi 3 Guide — Vine", description: "A guide to Malachi 3 — the forerunner, the refiner's fire, robbing God, and the storehouse tithe challenge.", images: ["/api/og?title=Malachi+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Malachi 3 Guide — Vine", description: "A deep guide to Malachi 3.", images: ["/api/og?title=Malachi+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
