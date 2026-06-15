import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ezekiel 1 Guide - Christian Study",
  description: "A deep guide to Ezekiel 1 - the prophet's inaugural vision by the Chebar canal, the four living creatures, the wheels within wheels full of eyes, and the throne like sapphire with the appearance of the likeness of the glory of the Lord.",
  openGraph: { title: "Ezekiel 1 Guide - Vine", description: "A guide to Ezekiel 1 - the visions of God by the Chebar and the glory of the Lord.", images: ["/api/og?title=Ezekiel+1+Guide"] },
  twitter: { card: "summary_large_image", title: "Ezekiel 1 Guide - Vine", description: "A deep guide to Ezekiel 1.", images: ["/api/og?title=Ezekiel+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
