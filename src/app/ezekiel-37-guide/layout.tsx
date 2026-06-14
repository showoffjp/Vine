import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ezekiel 37 Guide -- The Valley of Dry Bones -- Christian Study",
  description: "A deep study guide to Ezekiel 37 -- the Vision of the Valley of Dry Bones -- exploring God's power to resurrect and restore his people. Discover how the prophet Ezekiel's vision of dry bones coming to life speaks to spiritual renewal, the new covenant, the life-giving Spirit, and the ultimate resurrection hope fulfilled in Jesus Christ.",
  openGraph: { title: "Ezekiel 37 Guide -- The Valley of Dry Bones -- Vine", description: "Explore Ezekiel 37 -- the Valley of Dry Bones -- God's breath of life, spiritual restoration, and the promise of resurrection.", images: ["/api/og?title=Ezekiel+37+Guide"] },
  twitter: { card: "summary_large_image", title: "Ezekiel 37 Guide -- The Valley of Dry Bones -- Vine", description: "A deep study of Ezekiel 37 -- God breathes new life into his people.", images: ["/api/og?title=Ezekiel+37+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
