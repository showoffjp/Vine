import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Isaiah 40 Guide — Comfort, Comfort My People",
  description: "A deep guide to Isaiah 40 — the turn from judgment to comfort, the voice crying in the wilderness fulfilled in John the Baptist, the word of God that stands forever, the incomparable greatness of the Holy One, and the promise that those who wait for the Lord shall mount up with wings like eagles.",
  openGraph: { title: "Isaiah 40 Guide — Vine", description: "A guide to Isaiah 40 — comfort for God's people, the voice in the wilderness, the enduring word, and strength for those who wait on the Lord.", images: ["/api/og?title=Isaiah+40+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 40 Guide — Vine", description: "A deep guide to Isaiah 40 — comfort, the voice in the wilderness, and wings like eagles.", images: ["/api/og?title=Isaiah+40+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
