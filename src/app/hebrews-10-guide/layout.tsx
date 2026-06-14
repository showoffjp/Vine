import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hebrews 10 Guide — Hold Fast Our Confession — Christian Study",
  description: "A deep study guide to Hebrews 10 — the once-for-all sacrifice of Christ that perfects forever those who are being sanctified, the call to hold fast the confession of hope without wavering, and the urgent command not to forsake assembling together as the Day draws near.",
  openGraph: { title: "Hebrews 10 Guide — Hold Fast Our Confession — Vine", description: "Study Hebrews 10 — the perfect sacrifice of Christ, holding fast our confession, and gathering together as believers.", images: ["/api/og?title=Hebrews+10+Guide"] },
  twitter: { card: "summary_large_image", title: "Hebrews 10 Guide — Hold Fast Our Confession — Vine", description: "A deep guide to Hebrews 10 and the once-for-all sacrifice of Christ and the call to hold fast and gather together.", images: ["/api/og?title=Hebrews+10+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
