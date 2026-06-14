import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Timothy 3 Guide — Scripture Is God-Breathed — Christian Study",
  description: "A deep study of 2 Timothy 3 — Paul's final charge to Timothy warning about the perilous moral conditions of the last days and declaring that all Scripture is God-breathed (theopneustos) and profitable for teaching, reproof, correction, and training in righteousness, so that the man of God may be complete and equipped for every good work.",
  openGraph: { title: "2 Timothy 3 Guide — Scripture Is God-Breathed — Vine", description: "Study 2 Timothy 3: Paul's warning about the last days and his declaration that all Scripture is breathed out by God and sufficient for every good work.", images: ["/api/og?title=2+Timothy+3+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Timothy 3 Guide — Scripture Is God-Breathed — Vine", description: "A deep guide to 2 Timothy 3 — the inspiration and sufficiency of Scripture for Christian life and ministry.", images: ["/api/og?title=2+Timothy+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
