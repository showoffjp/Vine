import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Romans 3 Chapter Guide — Christian Study",
  description: "A deep guide to Romans 3 — the Jewish advantage in being entrusted with God's oracles, the universal verdict that none is righteous, all have sinned and fall short of the glory of God, and the glorious good news of justification freely by grace through faith in Jesus Christ as the propitiation for sin.",
  openGraph: { title: "Romans 3 Chapter Guide — Vine", description: "A guide to Romans 3 — no one is righteous, all have sinned, and God justifies the ungodly by faith in Jesus Christ.", images: ["/api/og?title=Romans+3+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 3 Chapter Guide — Vine", description: "A deep guide to Romans 3 — sin, righteousness, and justification by faith.", images: ["/api/og?title=Romans+3+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
