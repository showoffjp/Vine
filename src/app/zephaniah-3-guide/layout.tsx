import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Zephaniah 3 Guide — Christian Study",
  description: "A deep guide to Zephaniah 3 — judgment on Jerusalem's proud leaders, the humble remnant, the Mighty Warrior who saves, and God rejoicing over his people with loud singing.",
  openGraph: { title: "Zephaniah 3 Guide — Vine", description: "A guide to Zephaniah 3 — the humble remnant, the Mighty Warrior who saves, and God exulting over his people with singing.", images: ["/api/og?title=Zephaniah+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Zephaniah 3 Guide — Vine", description: "A deep guide to Zephaniah 3 — from judgment on Jerusalem to the song of the Mighty Warrior.", images: ["/api/og?title=Zephaniah+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
